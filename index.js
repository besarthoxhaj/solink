'use strict';



var is = require('torf');


module.exports = {
	fb: facebook,
	twitter: twitter,
	email: email
};



/**
 *	Compose the url string for facebook sharing
 *
 *	@param  {Object}  data
 *	@param  {Object}  data.url
 *	@return {String}  url
 */

function facebook (data){
	if(!is.ok(data)) throw new ReferenceError('Can not process empty data.');

	var url = "https://www.facebook.com/share.php?u=" + encodeURIComponent(data.url);

	return url;
};



/**
 *	For more info check: 
 *	twitter -->  https://dev.twitter.com/web/tweet-button/parameters
 *
 *	Compose the url string for sending an email
 *	@param  {Object} data
 *	@param  {String} data.url
 *	@param  {String} data.via
 *	@param  {String} data.related
 *	@param  {String} data.hashtags
 *	@param  {String} data.text
 *	@return {String} url
 */

function twitter (data){
	if(!is.ok(data)) throw new ReferenceError('Can not process empty data.');

	var params = [];

	for(var key in data){
		if(data.hasOwnProperty(key) && is.ok(data[key])){
			params.push(key + '=' + encodeURIComponent(data[key]));
		}
	}

	var url = 'https://twitter.com/share?'+ params.join('&');

	return url;
};



/**
 *	For more info check: 
 *	mozilla -->  https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Email_links
 *	standard --> https://tools.ietf.org/html/rfc6068
 *
 *	Compose the url string for sending an email
 *	@param  {Object} data
 *	@param  {String} data.to
 *	@param  {String} data.cc
 *	@param  {String} data.bcc
 *	@param  {String} data.subject
 *	@param  {String} data.body
 *	@return {String} url
 */

function email (data){
	if(!is.ok(data)) throw new ReferenceError('Can not process empty data.');
	var params  = [];
	var to      = data.hasOwnProperty('to')      && is.ok(data.to)      ? data.to                                                    : '';
	var cc      = data.hasOwnProperty('cc')      && is.ok(data.cc)      ? params.push('cc='      + data.cc)                          : false;
	var bcc     = data.hasOwnProperty('bcc')     && is.ok(data.bcc)     ? params.push('bcc='     + data.bcc)                         : false;
	var subject = data.hasOwnProperty('subject') && is.ok(data.subject) ? params.push('subject=' + encodeURIComponent(data.subject)) : false;
	var body    = data.hasOwnProperty('body')    && is.ok(data.body)    ? params.push('body='    + encodeURIComponent(data.body))    : false;

	var url = 'mailto:' + to + '?' + params.join('&');

	return url;
};