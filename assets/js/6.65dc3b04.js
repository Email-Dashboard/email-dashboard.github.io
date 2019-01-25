(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(t,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("p",[t._v("▶️ Install the most recent version of the Docker Engine for your platform using the "),e("a",{attrs:{href:"http://docs.docker.com/engine/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official Docker releases"),e("OutboundLink")],1),t._v(", which can also be installed using:"),e("br")]),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),e("p",[t._v("▶️ Install Docker Compose from the "),e("a",{attrs:{href:"https://docs.docker.com/compose/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("official page"),e("OutboundLink")],1),t._v(", or manually run:"),e("br")]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment","aria-hidden":"true"}},[this._v("#")]),this._v(" Deployment")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"debian"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#debian","aria-hidden":"true"}},[this._v("#")]),this._v(" Debian")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-install-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-docker","aria-hidden":"true"}},[this._v("#")]),this._v(" 1- Install Docker")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("wget")]),this._v(" -qO- https://get.docker.com/ "),s("span",{attrs:{class:"token operator"}},[this._v("|")]),this._v(" sh\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("▶️ Execute this line to allow docker to execute without being root"),s("br")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[this._v("sudo")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("usermod")]),this._v(" -aG docker "),s("span",{attrs:{class:"token variable"}},[this._v("${USER}")]),this._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("▶️ Logout, then login again. Permissions should be applied."),s("br")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-install-docker-compose"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-docker-compose","aria-hidden":"true"}},[this._v("#")]),this._v(" 2- Install Docker Compose")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L "),e("span",{attrs:{class:"token string"}},[t._v('"https://github.com/docker/compose/releases/download/1.11.2/docker-compose-'),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[t._v("$(")]),e("span",{attrs:{class:"token function"}},[t._v("uname")]),t._v(" -s"),e("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v("-"),e("span",{attrs:{class:"token variable"}},[e("span",{attrs:{class:"token variable"}},[t._v("$(")]),e("span",{attrs:{class:"token function"}},[t._v("uname")]),t._v(" -m"),e("span",{attrs:{class:"token variable"}},[t._v(")")])]),t._v('"')]),t._v(" -o /usr/local/bin/docker-compose\n"),e("span",{attrs:{class:"token function"}},[t._v("chmod")]),t._v(" +x /usr/local/bin/docker-compose\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-create-data-folders"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-data-folders","aria-hidden":"true"}},[this._v("#")]),this._v(" 3- Create data folders")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" -p /datadrive/mysql "),s("span",{attrs:{class:"token operator"}},[this._v("&&")]),this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("mkdir")]),this._v(" -p /datadrive/data/redis\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-clone-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-clone-repo","aria-hidden":"true"}},[this._v("#")]),this._v(" 4- Clone repo")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v(" "),s("span",{attrs:{class:"token function"}},[this._v("git")]),this._v(" clone https://github.com/Email-Dashboard/Email-Dashboard.git\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("▶️ Update environment variables with your variables "),s("code",[this._v("https://github.com/Email-Dashboard/Email-Dashboard/blob/master/.env")]),s("br")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[this._v("  docker-compose build\n  docker-compose up -d\n")])])])}],!1,null,null,null);r.options.__file="deployment.md";s.default=r.exports}}]);