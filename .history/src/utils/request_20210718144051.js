/* eslint-disable */
'use strict'
import axios from 'axios';
import qs from 'qs'
axios.defaults.timeout = 30000; //请求超时时间
// axios.defaults.baseURL = 'http://192.168.200.51:4002'
axios.interceptors.request.use(config => {
	// 发送请求前做某事
    // if (config.method === 'post') {
    //     config.data = qs.stringify(config.data) // post请求格式化数据
    //     config.headers['formdata'] = "1"
    // }
	return config;
},err => {
	return Promise.reject(err);
});
axios.interceptors.response.use(response => {
	return response.data;
},err => {
	if(err.response){
		switch (err.response.status){
			case 400:
                err.message = '错误请求'
                break;
            case 401:
                err.message = '未授权，请重新登录'
                break;
            case 403:
                err.message = '拒绝访问'
                break;
            case 404:
                err.message = '请求错误，未找到该资源'
                break;
            case 405:
                err.message = '请求方法未允许'
                break;
            case 408:
                err.message = '请求超时'
                break;
            case 500:
                err.message = '服务端出错'
                break;
            case 501:
                err.message = '网络未实现'
                break;
            case 502:
                err.message = '网络错误'
                break;
            case 503:
                err.message = '服务不可用'
                break;
            case 504:
                err.message = '网络超时'
                break;
            case 505:
                err.message = 'http版本不支持该请求'
                break;
            default:
                err.message = `连接错误${err.response.status}`
		}
	}else{
		err.message = '连接服务器失败'
	}
	return Promise.reject(err.message)
})
export default axios