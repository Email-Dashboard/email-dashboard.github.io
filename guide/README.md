
<p align="center">
   An interactive emailing management service<br>
   with scheduling, templating, tracking and A/B testing.<br>
   <a href="https://dashboard.pigon.ws">
   <strong>Live demo of Email-Dashboard »</strong>
   </a>
 </p>

 <p align="center">
   <a href="https://github.com/Email-Dashboard/Email-Dashboard/labels/bug">
      <strong>Report bug </strong></a>|

   <a href="https://github.com/Email-Dashboard/Email-Dashboard/issues/new">
      <strong>Request feature </strong></a>|

   <a href="https://github.com/Email-Dashboard/Email-Dashboard/labels/help%20wanted">
      <strong>Help issues</strong></a>
   </a><br><br>

   <a href="./README-zh_CN.md">
       🇨🇳[简体中文]</a>
   </a>
 </p>

# Email-Dashboard

![](https://img.shields.io/github/stars/Email-Dashboard/Email-Dashboard.svg) ![](https://img.shields.io/github/forks/Email-Dashboard/Email-Dashboard.svg) ![](https://img.shields.io/github/tag/Email-Dashboard/Email-Dashboard.svg) ![](https://img.shields.io/github/issues/Email-Dashboard/Email-Dashboard.svg) ![](https://img.shields.io/github/contributors/Email-Dashboard/Email-Dashboard.svg) [![Go Report Card](https://goreportcard.com/badge/github.com/Email-Dashboard/Email-Dashboard)](https://goreportcard.com/report/github.com/Email-Dashboard/Email-Dashboard) ![](https://img.shields.io/github/license/Email-Dashboard/Email-Dashboard.svg)

Email-Dashboard is an easy way to manage your outgoing emails from your apps. From creating and sending your emails to monitoring and managing their stats, you can do really useful things with Email-Dashboard without worried about **time zone** disaverage. You can [explore Email-Dashboard docs](https://email-dashboard.github.io/guide/).

# Table of content

- [For whom?](#for-whom)
- [Code overview](#code-overview)
- [Features](#features)
- [Deployment](/guide/deployment.html)
   * [1- Debian](/guide/deployment.html#debian)
- [Development](/guide/development.html)
   * [1- MacOS](/guide/development.html#macos)
   * [2- Debian](/guide/development.html#debian)
- [Usage](/guide/usage.html)
   * [1- In Dashboard](/guide/usage.html#in-dashboard)
   * [2- Posting to REST API](/guide/usage.html#posting-to-rest-api)
- [Authors](#authors)
- [License](#license)
- [Acknowledgement](#acknowledgement)

# For whom?

 :earth_asia: If you need to send automatic emails without worried about **time zone**,<br>
 🔍 If you need to **track** your emails and **analyse** your results to follow better strategies,<br>
 📊 If you need to **monitoring** your activities,<br>
 📑 If you want to use email **templates**,<br>
 🕵️ If you need to **A/B testing**,<br>
 💯 And if you want to do all of this **easily**,<br>

Then you're at the right place. **Email Dashboard builded for you!** :tada:

# Code overview

:small_orange_diamond: The REST API builded with superfast language [golang](https://github.com/golang/go).<br>
:small_orange_diamond: The Dashboard builded with fastest development framework [Rails](https://github.com/rails/rails)<br>
:small_orange_diamond: Front-end framework [uikit](https://github.com/uikit/uikit) using in the dashboard.<br>

# Features
- [x] Monitor email activities that your service sent.
- [x] Interactive templates.
- [x] Multiple SMTP support.
- [x] Scheduled delivery with time zone.
- [x] Perform / Cancel scheduled activities optionally.
- [x] Mobile UI
- [ ] Email tracking.
- [ ] A/B testing.

# Contributing
Please read our [contribution guidelines](https://email-dashboard.readthedocs.io/en/latest/Contributing/). We are grateful for all contributions! :pray: With following our [rules of the discussions](https://github.com/Email-Dashboard/Email-Dashboard/blob/master/CONTRIBUTING.md), you can contribute many of way. Our [issue tracker](https://github.com/Email-Dashboard/Email-Dashboard/issues) is the preferred channel for bug reports, features requests and submitting pull requests. We utilized several [labels](https://github.com/Email-Dashboard/Email-Dashboard/labels) to help organize and identify issues. You can start with there! Also if you want to add some new feature:

1. Clone or fork the project (`git clone https://github.com/Email-Dashboard/Email-Dashboard`)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

:mag_right: But before opening a feature request, please take a moment to find out whether your idea fits with the scope and aims of the project. It's up to you to make a strong case to convince the project's developers of the merits of this feature. So, you can provide as much detail and context as possible.

---------------------------

# Authors
| [<img src="https://pbs.twimg.com/profile_images/508440350495485952/U1VH52UZ_200x200.jpeg" width="100px;"/>](https://twitter.com/sahinboydas) <br/> [Sahin Boydas](https://twitter.com/sahinboydas)<br/><sub>Product</sub><br/> [![LinkedIn][1.1]][1] | [<img src="https://avatars1.githubusercontent.com/u/989759?s=460&v=4" width="100px;"/>](https://github.com/muhammet) <br/>[Muhammet](https://github.com/muhammet)<br/><sub>Lead Developer</sub><br/> [![Github][2.1]][2] | [<img src="https://avatars1.githubusercontent.com/u/8470005?s=460&v=4" width="100px;"/>](https://github.com/sadikay)  <br/>[Sadik](https://github.com/sadikay)<br/><sub>Developer</sub><br/> [![Github][3.1]][3] | [<img src="https://avatars0.githubusercontent.com/u/7591815?s=460&v=4" width="100px;"/>](http://blog.tommyyang.cn/) <br/> [Tommy Yang](https://github.com/joyang1)<br/><sub>Developer</sub><br/> [![Github][4.1]][4] [blog](https://blog.tommyyang.cn)
| - | - | - | - |

[1.1]: https://www.kingsfund.org.uk/themes/custom/kingsfund/dist/img/svg/sprite-icon-linkedin.svg (linkedin icon)
[1]: https://www.linkedin.com/in/sahinboydas
<!-- [2.1]: http://i.imgur.com/9I6NRUm.png (github.com/muhammet) -->
[2]: http://www.github.com/muhammet
<!-- [3.1]: http://i.imgur.com/9I6NRUm.png (github.com/sadikay) -->
[3]: http://www.github.com/sadikay

<!-- [4.1]: http://i.imgur.com/9I6NRUm.png (github.com/joyang1) -->
[4]: http://www.github.com/joyang1

[5.1]: Blog
[5]: https://blog.tommyyang.cn

# License

This program is a free and open source software. You can redistribute it and/or modify it under the terms of the license provided in the [LICENSE](LICENSE) file. Use of this software is subject to important terms and conditions as set forth in the [LICENSE](LICENSE) file.

# Acknowledgement

If you liked our dashboard, please give us a "**Star**" :star:. Your support is what keep us moving forward and delivering happiness to you! Thank's a million, you're our Clark Kent/Kara Danvers! In case of any questions or concerns, feel free to contact us anytime.:blush: