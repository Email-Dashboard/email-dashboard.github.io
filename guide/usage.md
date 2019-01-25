# Usage

## In Dashboard

Using dashboard is really easy, like playing PUBG! You can do it any time without any effort. Because our first aim is make some time for our community with our dashboard. So, UI and dashboard is friendly as much as and we will make it better.

:small_orange_diamond: Add your SMTP Settings<br>
:small_orange_diamond: Create email template with [handlebars](http://handlebarsjs.com/) variables.<br>
:small_orange_diamond: Create notification. See, easy peasy!<br>

## Posting to REST API

`POST` `https://api.{{yourhost}}/api/v3/notifications/{{notification-slug}}`

`Authorization: Token {{AccountToken}}`


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

## Step by Step

### 1- Authorization

Sign in or Sign up to dashboard through `dashboard.yourappdomain.com` or on live demo [dashboard.pigon.ws](https://dashboard.pigon.ws).

### 2 - Create New Account

Create an account and get your API tokens. You will use the tokens to send API request.

### 3 - Create New Template

Create an HTML template on the dashboard with handlebars](http://handlebarsjs.com/) variables.

<p>
<img src="/img/usages/new-template.png" alt="" style="max-width:100%;"></a>
</p>

### 4 - Add SMTP Settings

Add your SMTP settings for any provider and make sure your mail account's SMTP options are enabled.

<p>
<img src="/img/usages/new-smtp.png" alt="" style="max-width:100%;"></a>
</p>

### 5 - Create a Notification

Create a new notification and choose SMTP and the template have created before. Then activate your notification.

<p>
<img src="/img/usages/new-notification.png" alt="" style="max-width:100%;"></a>
</p>

### 6 - Post to API
Post your Variables to API.

<p>
<img src="/img/usages/new-post.png" alt="" style="max-width:100%;"></a>
</p>

<p>
<img src="/img/usages/new-post-header.png" alt="" style="max-width:100%;"></a>
</p>

### 7 - Check the Activity

After posting to API you can check the activities and their statuses. If the activity status is succees the receiver can the inbox as well.

<p>
<img src="/img/usages/new-activity.png" alt="" style="max-width:100%;"></a>
</p>