<template>
	<view class="order-container" :data-theme="themeStyle">
		<view class="order-nav">
			<view v-for="(statusItem, statusIndex) in statusList" :key="statusIndex" class="uni-tab-item"
				:id="statusItem.id" :data-current="statusIndex" @click="ontabtap">
				<text class="uni-tab-item-title"
					:class="statusItem.status == orderStatus ? 'uni-tab-item-title-active color-base-border  color-base-text' : ''">
					{{ statusItem.name }}
				</text>
			</view>
		</view>

		<mescroll-uni ref="mescroll" @getData="getListData" top="100rpx">
			<block slot="list">
				<view class="order-list" v-if="orderList.length > 0">
					<view class="order-item" v-for="(orderItem, orderIndex) in orderList" :key="orderIndex">
						<view class="order-header"
							:class="{ waitpay: orderStatus == 'waitpay' && orderItem.order_status == 0 }">
							<view class="iconfont"
								:class="$util.inArray(orderItem.order_id, mergePayOrder) == -1 ? 'iconyuan_checkbox' : 'iconyuan_checked color-base-text'"
								@click="selectOrder(orderItem.order_id, orderItem.pay_money)"
								v-if="orderStatus == 'waitpay' && orderItem.order_status == 0"></view>
							<view class="iconfont icondianpu" @click="toShopDetail(orderItem.site_id)"></view>
							<text class="site-name"
								@click="toShopDetail(orderItem.site_id)">{{ orderItem.site_name }}</text>
							<view class="iconfont iconright" @click="toShopDetail(orderItem.site_id)"></view>
							<text class="status-name color-base-text">{{ orderItem.order_status_name }}</text>
						</view>
						<view class="order-body" @click="orderDetail(orderItem)">
							<view class="goods-wrap" v-for="(goodsItem, goodsIndex) in orderItem.order_goods"
							style="border-top: 2rpx solid #F1F1F1;"
								:key="goodsIndex">
								<!-- <view class="goods-img">
									<image
										:src="$util.img(goodsItem.sku_image, { size: 'mid' })"
										@error="imgError(orderIndex, goodsIndex)"
										mode="aspectFill"
										:lazy-load="true"
									></image>
								</view> -->
								<view class="goods-info" :style="{'max-width':'100%'}">
									<view class="pro-info">
										<view class="goods-name"  style="font-size: 35rpx;font-weight: bold;">
											{{luminosity_status==1?goodsItem.goods_name:goodsItem.sku_name }}</view>
										<view class="sku"> <!-- v-if="goodsItem.sku_spec_format" -->
											<view class="goods-spec" v-if="goodsItem.photometric!=0">
												<block v-for="(x, i) in goodsItem.sku_spec_format" :key="i">
													{{ x.spec_value_name }}
													{{ i < goodsItem.sku_spec_format.length - 1 ? '; ' : '' }}
												</block>
											
											<sku-list :goodsItem="goodsItem"></sku-list>
											
											</view>
										</view>
									</view>
									<view class="goods-sub-section">
										<text class="goods-price" v-if="(goodsItem.price > 0 && goodsItem.is_photograph==1) || goodsItem.is_photograph!=1">
											<text
												class="unit color-base-text font-size-activity-tag">{{ $lang('common.currencySymbol') }}</text>
											<text class="color-base-text">{{ goodsItem.price }}</text>
										</text>
										<text class="goods-num">
											<text class="iconfont iconclose"></text>
											{{ goodsItem.num }}
										</text>
									</view>
									<text class="tip" v-if="goodsItem.is_present">??????</text>
									<view class="goods-operation"></view>
								</view>
							</view>
							<view class="" style="margin: 0 40rpx;">
								<image :src="item" v-for="(item,index) in orderItem.images" mode="" style="width: 100rpx;height:100rpx;margin-right:20rpx;"></image>
							</view>
						</view>
						
						<view class="order-footer">
							<view class="order-base-info" v-if="orderItem.is_photograph!=1">
								<view class="total">
									<text class="font-size-sub">???{{ orderItem.goods_num }}?????????</text>
									<text class="align-right font-size-base">
										????????????
										<text
											class="font-size-base">{{ $lang('common.currencySymbol') }}{{ orderItem.pay_money }}</text>
									</text>
								</view>
							</view>
							<view class="order-action" v-if="orderItem.action.length > 0">
								<view class="order-box-btn"
									v-if="evaluateConfig.evaluate_status == 1 && orderItem.is_evaluate == 1"
									@click="operation('memberOrderEvaluation', orderItem)">
									<text v-if="orderItem.evaluate_status == 0">??????</text>
									<text v-else-if="orderItem.evaluate_status == 1">??????</text>
								</view>
								<view class="order-box-btn"
									:class="{ 'color-base-border color-base-text': operationItem.action == 'orderPay' }"
									v-for="(operationItem, operationIndex) in orderItem.action" :key="operationIndex"
									@click="operation(operationItem.action, orderItem)">
									{{ operationItem.title }}
								</view>
							</view>
							<view class="order-action"
								v-else-if="orderItem.action.length == 0 && orderItem.is_evaluate == 1 && evaluateConfig.evaluate_status == 1">
								<view class="order-box-btn" v-if="orderItem.is_evaluate == 1"
									@click="operation('memberOrderEvaluation', orderItem)">
									<text v-if="orderItem.evaluate_status == 0">??????</text>
									<text v-else-if="orderItem.evaluate_status == 1">??????</text>
								</view>
							</view>
							<view class="order-action" v-else>
								<view class="order-box-btn color-base-border color-base-text"
									@click="orderDetail(orderItem)">????????????</view>
							</view>
						</view>
					</view>
				</view>
				<view v-else>
					<ns-empty :isIndex="!1" :text="$lang('emptyTips')"></ns-empty>
				</view>
			</block>
		</mescroll-uni>

		<view class="order-batch-action" :class="{ 'bottom-safe-area': isIphoneX }" v-if="mergePayOrder.length">
			<view class="action-btn color-base-text color-base-border" @click="openChoosePaymentMerge()">????????????</view>
		</view>

		<!-- ???????????????????????? -->
		<ns-payment ref="choosePaymentPopup" :payMoney="payMoney" @confirm="pay"></ns-payment>
		<ns-payment ref="choosePaymentMergePopup" :payMoney="payMoneyMerge" @confirm="mergePay()"></ns-payment>

		<loading-cover ref="loadingCover"></loading-cover>
	</view>
</template>

<script>
	import orderMethod from '../public/js/orderMethod.js';
	import tools from '../public/js/tool.js'
	import globalConfig from '@/common/js/golbalConfig.js';
	import nsPayment from '@/components/payment/payment.vue';

	export default {
		data() {
			return {
				luminosity_status:1,
				scrollInto: '',
				orderStatus: 'all',
				statusList: [],
				orderList: [],
				contentText: {},
				mergePayOrder: [],
				isIphoneX: false,
				evaluateConfig: {
					evaluate_audit: 1,
					evaluate_show: 0,
					evaluate_status: 1
				},
				orderData: {},
				payMoney: 0,
				payMoneyMerge: 0
			};
		},
		components: {
			nsPayment
		},
		filters: {
			/**
			 * ?????????????????????
			 * @param {Object} money
			 */
			moneyFormat(money) {
				console.log(money,"=======>",parseFloat(money).toFixed(2))
				return parseFloat(money).toFixed(2);
			}
		},
		mixins: [orderMethod, globalConfig, tools],
		onLoad(option) {
			if (option.status) this.orderStatus = option.status;
		},
		onShow() {
			// ???????????????
			this.$langConfig.refresh();
			this.isIphoneX = this.$util.uniappIsIPhoneX();
			this.getEvaluateConfig();
			this.getOrderStatus();

			if (uni.getStorageSync('token')) {
				if (this.$refs.mescroll) this.$refs.mescroll.refresh();
			} else {
				this.$util.redirectTo('/pages/login/login/login', {
					back: '/pages/order/list/list?status=' + this.orderStatus
				});
			}
		},
		methods: {
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.orderStatus = this.statusList[index].status;
				if (this.orderStatus == '') this.mergePayOrder = [];
				this.$refs.loadingCover.show();
				this.$refs.mescroll.refresh();
			},
			getListData(mescroll) {
				let _this=this
				this.$api.sendRequest({
					url: '/api/order/lists',
					data: {
						page: mescroll.num,
						page_size: mescroll.size,
						order_status: this.orderStatus
					},
					success: res => {
						let newArr = [];
						let msg = res.message;
						if (res.code == 0 && res.data) {
							newArr = res.data.list;
						} else {
							this.$util.showToast({
								title: msg
							});
						}
						mescroll.endSuccess(newArr.length);
						//??????????????????
						if (mescroll.num == 1) this.orderList = []; //???????????????????????????????????????
						this.orderList = this.orderList.concat(newArr); //???????????????
						this.orderList.forEach(v => {
							// v.order_goods.forEach(vo => {
								console.log(v.images,"vooooooooooo");
								if(v.images) v.images= JSON.parse(v.images)
							// 	if (vo.image) {
							// 		try {
							// 			vo.image = JSON.parse(vo.image);
							// 		} catch (e) {
							// 			vo.image = vo.image;
							// 		}
							// 	} else {
							// 		vo.image = [];
							// 	}
							// });
						});
						if (this.$refs.loadingCover) this.$refs.loadingCover.hide();
					},
					fail: res => {
						mescroll.endErr();
						if (this.$refs.loadingCover) this.$refs.loadingCover.hide();
					}
				});
			},
			/**
			 * ??????????????????
			 */
			getOrderStatus() {
				this.statusList = [{
						status: 'all',
						name: this.$lang('all'),
						id: 'status_0'
					},
					{
						status: 'waitpay',
						name: this.$lang('waitPay'),
						id: 'status_1'
					},
					{
						status: 'waitsend',
						name: this.$lang('readyDelivery'),
						id: 'status_2'
					},
					{
						status: 'waitconfirm',
						name: this.$lang('waitDelivery'),
						id: 'status_3'
					},
					{
						status: 'waitrate',
						name: this.$lang('waitEvaluate'),
						id: 'status_4'
					}
				];
			},
			operation(action, orderData) {
				let index = this.status;
				switch (action) {
					case 'orderPay': // ??????
						this.orderData = orderData;
						this.payMoney = parseFloat(orderData.pay_money);
						this.orderPay(orderData);
						break;
					case 'orderClose': //??????
						this.orderClose(orderData.order_id, () => {
							this.$refs.mescroll.refresh();
						});
						break;
					case 'memberTakeDelivery': //??????
						this.orderDelivery(orderData.order_id, () => {
							this.$refs.mescroll.refresh();
						});
						break;
					case 'trace': //????????????
						this.$util.redirectTo('/pages/order/logistics/logistics', {
							order_id: orderData.order_id
						});
						break;
					case 'memberOrderEvaluation': //??????
						this.$util.redirectTo('/otherpages/order/evaluate/evaluate', {
							order_id: orderData.order_id
						});
						break;
					case 'extendTakeDelivery': //????????????
						this.orderExtendTakeDelivery(orderData.order_id, () => {
							this.$refs.mescroll.refresh();
						});
						break;
				}
			},
			orderDetail(data) {
				switch (parseInt(data.order_type)) {
					case 2:
						// ????????????
						this.$util.redirectTo('/pages/order/detail_pickup/detail_pickup', {
							order_id: data.order_id
						});
						break;
					case 3:
						// ??????????????????
						this.$util.redirectTo('/pages/order/detail_local_delivery/detail_local_delivery', {
							order_id: data.order_id
						});
						break;
					case 4:
						// ????????????
						this.$util.redirectTo('/pages/order/detail_virtual/detail_virtual', {
							order_id: data.order_id
						});
						break;
					default:
						this.$util.redirectTo('/pages/order/detail/detail', {
							order_id: data.order_id
						});
						break;
				}
			},
			/**
			 * ????????????
			 * @param {Object} orderId
			 */
			selectOrder(orderId, pay_money) {
				if (this.$util.inArray(orderId, this.mergePayOrder) != -1) {
					this.mergePayOrder.splice(this.$util.inArray(orderId, this.mergePayOrder), 1);
					this.payMoneyMerge -= parseFloat(pay_money);
				} else {
					this.payMoneyMerge += parseFloat(pay_money);
					this.mergePayOrder.push(orderId);
				}
			},
			/**
			 * ????????????
			 */
			mergePay() {
				if (this.mergePayOrder.length) {
					this.$api.sendRequest({
						url: '/api/order/pay',
						data: {
							order_ids: this.mergePayOrder.toString()
						},
						success: res => {
							if (res.code >= 0) {
								this.$refs.choosePaymentMergePopup.getPayInfo(res.data);
							} else {
								this.$util.showToast({
									title: res.message
								});
							}
						}
					});
				}
			},
			toShopDetail(e) {
				this.$util.redirectTo('/otherpages/shop/index/index', {
					site_id: e
				});
			},
			imgError(orderIndex, goodsIndex) {
				this.orderList[orderIndex].order_goods[goodsIndex].sku_image = this.$util.getDefaultImage()
					.default_goods_img;
				this.$forceUpdate();
			},
			getEvaluateConfig() {
				this.$api.sendRequest({
					url: '/api/goodsevaluate/config',
					success: res => {
						if (res.code == 0) {
							var data = res.data;
							this.evaluateConfig = data;
						}
					}
				});
			},
			// ??????????????????????????????
			openChoosePayment() {
				this.$refs.choosePaymentPopup.open();
			},
			// ????????????????????????????????????????????????
			openChoosePaymentMerge() {
				this.$refs.choosePaymentMergePopup.open();
			}
		},
		computed: {
			mpOrderList() {
				if (!this.orderList[this.status]) return;
				return this.orderList[this.status].list || [];
			}
		}
	};
</script>

<style lang="scss">
	@import '../public/css/list.scss';
</style>
<style scoped>
	/deep/ .uni-page {
		overflow: hidden;
	}

	/deep/ .mescroll-upwarp {
		padding-bottom: 100rpx;
	}
</style>
