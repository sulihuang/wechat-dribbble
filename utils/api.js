'use strict';
const HOST_URI = 'https://api.dribbble.com/v1/';

function _obj2uri(obj){
	console.log(obj)
	obj = obj || {};
	obj.per_page ? '' : obj.per_page = 30;
	obj.access_token ? '' :  obj.access_token = 'abe70efe6909ee447e5d86ee2fd30d5c45cda4f7be5e7c277865ff98e05b8118';
	console.log('aaa:',obj)
	return Object.keys(obj).map(function(k) {
		return encodeURIComponent(k) + "=" + encodeURIComponent(obj[k]);
	}).join('&');
}

function _getShots(o){
	return HOST_URI + 'shots?' + _obj2uri(o);
}

module.exports = {
	getShots: _getShots
};