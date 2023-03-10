import {ApiServer,useSetting} from '@/edition'
console.log(ApiServer,useSetting,"ApiServer,useSetting")
/**
 * 镜片一站式采购平台
 */
const x = {
	baseUrl: ApiServer,
	imgDomain: ApiServer,
	h5Domain: ApiServer+'/h5',
	mpKey: 'D5YBZ-ZWPWU-SAFVB-BQBT4-Q2A56-LJFRH',
	//小程序appid wx0f57e059962fab6a
}

const globalConfig = {
	// 价格保护 3是无保护 0是有保护
	is_wholesaler: 3,
	// 是否强制登陆 0不强制 1强制
	isMustLogin: 0, 
	// 是否需要验证批发商 0不需要 1强制
	isPfs:0,
	//  是否显示销量 0关闭 1显示
	isOpenVirtualSale:0,
	...useSetting
}
let param = {
	//客服地址
	webSocket: '',
	//本地端主动给服务器ping的时间, 0 则不开启 , 单位秒 
	pingInterval: 1500,
	// 超时时间 超出时间段将重连系统 单位秒
	// timeout : 15000,
	// api安全
	apiSecurity: false,
	// 公钥
	publicKey: ``,
}
Object.assign(param, x)
export default {
	...param,
	...x,
	...globalConfig
}
