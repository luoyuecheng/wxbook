import request from "request";

class Books {
	constructor() {
		this.defaultOption = {
			"dtype" : "json", //请求的数据类型
			"key" : "228c160aec7ea6d035ee7ff2b8f4651a" // key
		}
	}
	//查询图书分类
	getCatalog(callback){
		request.post({
			url : "http://apis.juhe.cn/goodbook/catalog",
			formData:this.defaultOption
			/**
			 * error : 判断结果是否错误
			 * response : 请求的头文件信息
			 * data ： 返回的结果数据
			 */
		},function(error,response,data){
			callback(error,data);
		});
	}
	//查询图书内容
	/**
	 * catalog_id,pn,rn
	 */
	getBookContent(option,callback){
		request.post({
			url : "http://apis.juhe.cn/goodbook/query",
			formData:Object.assign(option,this.defaultOption)
			/**
			 * error : 判断结果是否错误
			 * response : 请求的头文件信息
			 * data ： 返回的结果数据
			 */
		},function(error,response,data){
			callback(error,data);
		});
	}
}

export { Books };
