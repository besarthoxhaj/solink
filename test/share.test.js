'use strict';



var root      = __dirname + '/../';
var expect    = require("chai").expect;
var shareLink = require(root + 'index');



describe('Service "ShareLink" Email', function (){
	it('should throw an error if the data object is empty', function (){
		expect(shareLink.email.bind(shareLink,{})).to.throw(ReferenceError);
	});
	it('should throw an error if the data object is missing', function (){
		expect(shareLink.email.bind(shareLink)).to.throw(ReferenceError);
	});
	it('should return a string if data has at least one property', function (){
		var data = {to:'me'};
		var url = shareLink.email(data);

		expect(url).that.is.an('string');
	});
	it('should insert "cc" and "bcc"', function (){
		var data = {to: 'besartshyti@gmail.com', cc: 'foo@bar.com', bcc: 'zoo@goo.com'};

		var url = shareLink.email(data);

		expect(url).to.equal('mailto:besartshyti@gmail.com?cc=foo@bar.com&bcc=zoo@goo.com');
	});
	it('should escape the subject field', function (){
		var data_single = {subject: "This are 'some' quotes"};
		var data_double = {subject: 'This are "some" quotes'};

		var url_single = shareLink.email(data_single);
		var url_double = shareLink.email(data_double);

		expect(decodeURI(url_single)).to.equal('mailto:?subject='+data_single.subject);
		expect(decodeURI(url_double)).to.equal('mailto:?subject='+data_double.subject);
	});
	it('should escape the body field', function (){
		var data_single = {body: "This are 'some' quotes"};
		var data_double = {body: 'This are "some" quotes'};

		var url_single = shareLink.email(data_single);
		var url_double = shareLink.email(data_double);

		expect(decodeURI(url_single)).to.equal('mailto:?body='+data_single.body);
		expect(decodeURI(url_double)).to.equal('mailto:?body='+data_double.body);
	});
});



describe('Service "ShareLink" Twitter', function (){
	it('should throw an error if the data object is empty', function (){
		expect(shareLink.twitter.bind(shareLink,{})).to.throw(ReferenceError);
	});
	it('should throw an error if the data object is missing', function (){
		expect(shareLink.twitter.bind(shareLink)).to.throw(ReferenceError);
	});
	it('should create a url twit', function (){

		var obj  = {via: 'test'};
		var data = Object.create(obj);
		data     = {url:'http://besart.me', via:'besart_hoxhaj', related:'founderscoders', hashtags:'coding london', text:'Hello world!'};

		var url = shareLink.twitter(data);

		expect(url).to.equal('https://twitter.com/share?url=http%3A%2F%2Fbesart.me&via=besart_hoxhaj&related=founderscoders&hashtags=coding%20london&text=Hello%20world!');
	});
	it('should not insert null values in the url', function (){

		var obj  = {via: 'test'};
		var data = Object.create(obj);
		data     = {url:'http://besart.me', via: null, related:[], hashtags:'coding london', text: undefined};

		var url = shareLink.twitter(data);

		expect(url).to.equal('https://twitter.com/share?url=http%3A%2F%2Fbesart.me&hashtags=coding%20london');
	});
});



describe('Service "ShareLink" Facebook', function (){
	it('should throw an error if the data object is empty', function (){
		expect(shareLink.fb.bind(shareLink)).to.throw(ReferenceError);
	});
	it('should throw an error if the data object is missing', function (){
		expect(shareLink.fb.bind(shareLink)).to.throw(ReferenceError);
	});
	it('should create a url twit', function (){
		var data = {url:'http://besart.me/hello-world/this_is_a_path'};

		var url = shareLink.fb(data);

		expect(url).to.equal('https://www.facebook.com/share.php?u=http%3A%2F%2Fbesart.me%2Fhello-world%2Fthis_is_a_path');
	});
});