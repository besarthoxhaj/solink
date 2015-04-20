# solink

[![Build Status](https://travis-ci.org/besarthoxhaj/solink.svg?branch=master)](https://travis-ci.org/besarthoxhaj/solink) 
[![Code Climate](https://codeclimate.com/github/besarthoxhaj/solink/badges/gpa.svg)](https://codeclimate.com/github/besarthoxhaj/solink) 
[![Test Coverage](https://codeclimate.com/github/besarthoxhaj/solink/badges/coverage.svg)](https://codeclimate.com/github/besarthoxhaj/solink) 
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/besarthoxhaj/solink/issues)

Simple utility which creates link for sharing content on social media.

	npm install solink --save

Use it with **[perma](https://github.com/nelsonic/perma)** in order to create powerful tracking tool for your content on social media.

##share.twitter()

```js
var share = require('solink');

var opts = {
	url: 'http://foo.bar/hello-world/this_is_a_path',
	via: 'besart_hoxhaj'
	related: 'founderscoders'
	hashtags: 'code free'
	text: 'Hello world!'
};

var urlTwitter = share.twitter(opts);
```

Returns:

```
	https://twitter.com/share?
	url=http%3A%2F%foo.bar%2Fhello-world%2Fthis_is_a_path&
	via=besart_hoxhaj&
	related=founderscoders&
	hashtags=coding%20free&
	text=Hello%20world!
```

##share.fb()



```js
var share = require('solink');

var opts = {
	url: 'http://foo.bar/hello-world/this_is_a_path'
};

var urlFb = share.fb(opts);
```

Returns:

```
	https://www.facebook.com/share.php?
	u=http%3A%2F%foo.bar%2Fhello-world%2Fthis_is_a_path
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
```

Returns:

```
mailto:someone@foo.bar?
cc=sometwo@bar.foo&
bcc=anotherone@bar.foo&
subject=Some%20%22subject%22%20text%20here&
body=Some%20body%20'message'%20here

```
