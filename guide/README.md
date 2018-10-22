# Email Dashboard

🇨🇳[简体中文](./README-zh_CN.md)

This service helps you to manage notifications that you are sending to your users. It's an amazing tool to manage your outgoing emails from your apps.

<!-- ![](https://github.com/Email-Dashboard/Email-Dashboard/blob/master/docs/assets/intro.gif?raw=true) -->


## Code Overview
* The REST API builded with superfast language [golang](https://github.com/golang/go).
* The Dashboard builded with fastest development framework [Rails](https://github.com/rails/rails)
* Front-end framework [uikit](https://github.com/uikit/uikit) using in the dashboard.


## Features
- [x] Monitor email activities that your service sent.
- [x] Interactive templates.
- [x] Multiple SMTP support.
- [x] Scheduled delivery with time zone.
- [x] Perform / Cancel scheduled activities optionally.
- [ ] Tracking.
- [ ] A/B testing.


## Usage
### In Dashboard
* Add your SMTP Settings
* Create email template with [handlebars](http://handlebarsjs.com/) variables.
* Create notification

### Posting to REST API

`/POST https://api.{yourhost}/api/v3/notifications/{notification-slug}`

`Authorization: Token {AccountToken}`


```
{
   "variables":{
      "button_name": "Click me!",
      "name": "John"
   },
   "email": {
      "to": ["test@example.com", "second-to@example.com"],
      "cc": ["cc-test@example.com"],
      "reply_to": ["reply-to@example.com"],
      "from": "myapp@example.com"
   },
   "delivery": { # optional
     "time": "21:00",
     "date": "2018-09-22",
     "zone": "Europe/Istanbul"
   }
}
```
