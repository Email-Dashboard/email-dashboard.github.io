(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{147:function(t,e,s){"use strict";s.r(e);var r=s(0),i=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("Install and start Docker, check "),s("a",{attrs:{href:"https://store.docker.com/editions/community/docker-ce-desktop-mac",target:"_blank",rel:"noopener noreferrer"}},[t._v("docker-ce-desktop-mac"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._m(24)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"development"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#development","aria-hidden":"true"}},[this._v("#")]),this._v(" Development")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"macos"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#macos","aria-hidden":"true"}},[this._v("#")]),this._v(" macOS")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Create Datafolders"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("mkdir -p ~/datadrive/ed/mysql && mkdir -p ~/datadrive/ed/redis")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Clone the repo"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("git clone https://github.com/Email-Dashboard/Email-Dashboard.git")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Update mac username in "),e("code",[this._v("docker-compose-dev.yml")]),this._v(" in "),e("code",[this._v("line 7")]),this._v(" and "),e("code",[this._v("line 27")]),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("/Users/MacUserName/datadrive/ed/mysql:/var/lib/mysql # update MacUserName with yours")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Start"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker-compose -f docker-compose-dev.yml build\ndocker-compose -f docker-compose-dev.yml up\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Dashboard url: http://localhost:3000"),e("br"),this._v("\n▶️ Make API requests to http://localhost:8080"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"debian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#debian","aria-hidden":"true"}},[this._v("#")]),this._v(" Debian")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Install and start Docker:"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("wget -qO- https://get.docker.com/ | sh")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Execute this line to allow docker to execute without being root"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("sudo usermod -aG docker ${USER} # Logout, then login again. Permissions should be applied.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Create Datafolders"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("mkdir -p /datadrive/data/mysql && mkdir -p /datadrive/data/redis")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Clone the repo"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("git clone https://github.com/Email-Dashboard/Email-Dashboard.git")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Update "),e("code",[this._v("line 7")]),this._v(" and "),e("code",[this._v("line 27")]),this._v(" in "),e("code",[this._v("docker-compose-dev.yml")]),this._v(" to:"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("-'/datadrive/data/mysql:/var/lib/mysql'")]),e("br"),this._v(" "),e("code",[this._v("...")]),e("br"),this._v(" "),e("code",[this._v("- '/datadrive/data/redis:/data'")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Start"),e("br")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("docker-compose -f docker-compose-dev.yml build\ndocker-compose -f docker-compose-dev.yml up\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("▶️ Dashboard url: http://localhost:3000"),e("br"),this._v("\n▶️ Make API requests to http://localhost:8080")])}],!1,null,null,null);i.options.__file="development.md";e.default=i.exports}}]);