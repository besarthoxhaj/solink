'use strict';



var root      = __dirname + '/../';
var expect    = require('chai').expect;
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
	it('should escape the subject and body field', function (){
		var dataDouble = {subject: 'This are "some" quotes', body: 'This are "some" quotes'};

		var urlDouble = shareLink.email(dataDouble);

		expect(urlDouble).to.equal('mailto:?subject=This%20are%20%22some%22%20quotes&body=This%20are%20%22some%22%20quotes');
	});
	it('should create an entire entity', function (){
		var optsMail = {
			to:      'someone@foo.bar',
			cc:      'sometwo@bar.foo',
			bcc:     'anotherone@bar.foo',
			subject: 'Some "subject" text here',
			body:    'Some body message here'
		};

		var url = shareLink.email(optsMail);

		expect(url).to.equal('mailto:someone@foo.bar?cc=sometwo@bar.foo&bcc=anotherone@bar.foo&subject=Some%20%22subject%22%20text%20here&body=Some%20body%20message%20here');
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