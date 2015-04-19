# solink

Simple utility which creates link for sharing content on social media.

	npm install solink --save

Use it with **[perma](https://github.com/nelsonic/perma)** in order to create powerful tracking tool for your content on social media.

##share.fb(), share.twitter()

```js
var share = require('solink');

var opts = {
	url: 'http://foo.bar/hello-world/this_is_a_path',
	via: 'besart_hoxhaj'
	related: 'founderscoders'
	hashtags: 'code free javascript'
	text: 'Learn how to program for free'
};

var urlFb = share.fb(opts);

/**
	Returns:

	https://www.facebook.com/share.php?
	u=http%3A%2F%foo.bar%2Fhello-world%2Fthis_is_a_path
*/

var urlTwitter = share.twitter(opts);

/**
	Returns:

	https://twitter.com/share?
	url=http%3A%2F%foo.bar%2Fhello-world%2Fthis_is_a_path&
	via=besart_hoxhaj&
	related=founderscoders&
	hashtags=coding%20london&
	text=Hello%20world!
*/

```

##share.email()

```js
var optsMail = {
	to:      'someone@foo.bar',
	cc:      'sometwo@bar.foo',
	bcc:     'anotherone@bar.foo',
	subject: 'Some "subject" text here',
	body:    "Some body 'message' here"
};

var urlEmail = share.email(optsMail);

/**
	Returns:

	mailto:someone@foo.bar?
	cc=sometwo@bar.foo&
	bcc=anotherone@bar.foo&
	subject=Some%20%22subject%22%20text%20here&
	body=Some%20body%20'message'%20here
*/

```
