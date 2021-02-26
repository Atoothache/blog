(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{402:function(t,s,a){"use strict";a.r(s);var n=a(40),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" 跨域")]),t._v(" "),a("h2",{attrs:{id:"为什么会出现跨域及判定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现跨域及判定"}},[t._v("#")]),t._v(" 为什么会出现跨域及判定")]),t._v(" "),a("p",[t._v("跨域，指的是浏览器不能执行其他网站的脚本。它是由浏览器的同源（域名，协议，端口）策略造成的，是浏览器对JavaScript施加的安全限制。")]),t._v(" "),a("p",[t._v("当前端调用处于不同域名或者端口的时候，就会出现跨域问题。")]),t._v(" "),a("p",[t._v("那么跨域问题是如何判定的呢？通过搜索和实验后得出以下步骤：")]),t._v(" "),a("ol",[a("li",[t._v("浏览器先根据同源策略对前端页面资源所在地址和后台交互地址做匹配，若同源，则直接发送数据请求；若不同源，则发送跨域请求。")]),t._v(" "),a("li",[t._v("服务器解析程序收到浏览器跨域请求后，根据自身配置返回对应文件头。若未配置过任何允许跨域，则文件头里不包含"),a("code",[t._v("Access-Control-Allow-origin")]),t._v("字段，若配置过域名，则返回"),a("code",[t._v("Access-Control-Allow-origin")]),t._v("+ "),a("code",[t._v("对应配置规则里的域名的方式")]),t._v("。")]),t._v(" "),a("li",[t._v("浏览器根据接受到的http文件头里的"),a("code",[t._v("Access-Control-Allow-origin")]),t._v("字段做匹配，若无该字段，说明不允许跨域；若有该字段，则对字段内容和当前域名做比对，如果同源，则说明可以跨域，浏览器发送该请求；若不同源，则说明该域名不可跨域，不发送请求")])]),t._v(" "),a("p",[a("strong",[t._v("注意：浏览器不允许跨域是一种安全机制，我们解决跨域问题也只是通过服务器允许指定的某个前端页面所在地址跨域访问当前服务器而已。如果设置成"),a("code",[t._v("Access-Control-Allow-origin")]),t._v("+ "),a("code",[t._v("*")]),t._v("那么浏览器的跨域安全机制就会失去效果，所有其他网站的页面都可以访问到当前服务器。")])]),t._v(" "),a("p",[t._v("浏览器虽然不允许js，ajax请求跨域，但是凡是拥有scr这个属性的标签都可以跨域例如script,img,iframe。这个容易引起csrf攻击。")]),t._v(" "),a("h1",{attrs:{id:"没错-就是access-control-allow-origin-跨域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没错-就是access-control-allow-origin-跨域"}},[t._v("#")]),t._v(" 没错，就是Access-Control-Allow-Origin，跨域")]),t._v(" "),a("h2",{attrs:{id:"_1、浏览器的同源安全策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、浏览器的同源安全策略"}},[t._v("#")]),t._v(" 1、浏览器的同源安全策略")]),t._v(" "),a("p",[t._v("没错，就是这家伙干的，浏览器只允许请求当前域的资源，而对其他域的资源表示不信任。那怎么才算跨域呢？")]),t._v(" "),a("ol",[a("li",[t._v("请求协议"),a("code",[t._v("http,https")]),t._v("的不同")]),t._v(" "),a("li",[t._v("域"),a("code",[t._v("domain")]),t._v("的不同")]),t._v(" "),a("li",[t._v("端口"),a("code",[t._v("port")]),t._v("的不同")])]),t._v(" "),a("p",[t._v("好好好，大概就是这么回事啦，下面我们讲2种中规中矩的办法："),a("code",[t._v("CORS")]),t._v("，"),a("code",[t._v("JSONP")]),t._v("\ndocument.domain，window.name，web sockets就先别闹了，腰不好 : )")]),t._v(" "),a("h2",{attrs:{id:"_2、cors出来搞事了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、cors出来搞事了"}},[t._v("#")]),t._v(" 2、CORS出来搞事了")]),t._v(" "),a("p",[t._v('这是W3C的大佬们搞出来的标准，全称是"跨域资源共享"（Cross-origin resource sharing）。其实呢，这个大部分还是后端人员的工作。我们先来看看整个流程下，都发生了什么？')]),t._v(" "),a("h6",{attrs:{id:"在此之前-需要知道简单请求-复杂请求这两个小朋友"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在此之前-需要知道简单请求-复杂请求这两个小朋友"}},[t._v("#")]),t._v(" 在此之前，需要知道"),a("code",[t._v("简单请求")]),t._v(" "),a("code",[t._v("复杂请求")]),t._v("这两个小朋友")]),t._v(" "),a("ol",[a("li",[t._v("简单请求：\n1): 请求方式只能是："),a("code",[t._v("head")]),t._v("，"),a("code",[t._v("get")]),t._v("，"),a("code",[t._v("post")]),t._v("\n2): 请求头允许的字段："),a("code",[t._v("Accept")]),t._v("，"),a("code",[t._v("Accept-Language")]),t._v("，"),a("code",[t._v("Content-Language")]),t._v("，"),a("code",[t._v("Last-Event-ID")]),t._v(" "),a("code",[t._v("Content-Type")]),t._v("：application/x-www-form-urlencoded、multipart/form-data、text/plain  三选一")])]),t._v(" "),a("p",[t._v("2.复杂请求：没错，不满足上面的，都是我啦！")]),t._v(" "),a("h4",{attrs:{id:"简单请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单请求"}},[t._v("#")]),t._v(" 简单请求:")]),t._v(" "),a("p",[t._v("浏览器：诶，你小子要跨域是吧，我得问问服务器大哥肯不肯！往请求头添加"),a("code",[t._v("origin")]),t._v("亮一下牌面")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("有个奇怪现象，谷歌游览器在非跨域情况下，也会发送origin字段\n")])])]),a("p",[a("img",{attrs:{src:"/blog/img/%E8%AF%B7%E6%B1%82%E5%A4%B4origin.PNG",alt:""}})]),t._v(" "),a("p",[t._v("服务器：诶，你是谁，我来看看你的origin，嗯嗯，可以，符合我的要求，放行！顺便告诉你，老夫的规矩！")]),t._v(" "),a("p",[a("img",{attrs:{src:"/blog/img/%E5%93%8D%E5%BA%94%E5%A4%B4%E5%85%81%E8%AE%B8%E8%B7%A8%E5%9F%9F%E7%9A%84%E5%9C%B0%E5%9D%80.PNG",alt:""}})]),t._v(" "),a("p",[t._v("其中，最重要的就是"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("，标识允许哪个域的请求。当然，如果服务器不通过，根本没有这个字段，接着触发"),a("code",[t._v("XHR")]),t._v("的"),a("code",[t._v("onerror")]),t._v("，再接着你就看到浏览器的提示"),a("code",[t._v("xxx的服务器没有响应Access-Control-Allow-Origin字段")])]),t._v(" "),a("div",{staticClass:"language-rust extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rust"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定允许其他域名访问")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'Access")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Control")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Allow")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Origin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.206")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一般用法（*，指定域，动态设置），3是因为*不允许携带认证头和cookies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'Access")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Control")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Allow")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Credentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("'\n")])])]),a("p",[t._v("上面第一行说到的"),a("code",[t._v("Access-Control-Allow-Origin")]),t._v("有多种设置方法：")]),t._v(" "),a("ol",[a("li",[t._v("设置"),a("code",[t._v("*")]),t._v("是最简单粗暴的，但是服务器出于安全考虑，肯定不会这么干，而且，如果是*的话，游览器将不会发送"),a("code",[t._v("cookies")]),t._v("，即使你的"),a("code",[t._v("XHR")]),t._v("设置了"),a("code",[t._v("withCredentials")])]),t._v(" "),a("li",[t._v("指定域，如上图中的"),a("code",[t._v("http://172.20.0.206")]),t._v("，一般的系统中间都有一个"),a("code",[t._v("nginx")]),t._v("，所以推荐这种")]),t._v(" "),a("li",[t._v("动态设置为请求域，多人协作时，多个前端对接一个后台，这样很方便")])]),t._v(" "),a("p",[a("code",[t._v("withCredentials")]),t._v("：表示"),a("code",[t._v("XHR")]),t._v("是否接收cookies和发送cookies，也就是说如果该值是false，响应头的"),a("code",[t._v("Set-Cookie")]),t._v("，浏览器也不会理，并且即使有目标站点的cookies，浏览器也不会发送。")]),t._v(" "),a("h4",{attrs:{id:"复杂请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂请求"}},[t._v("#")]),t._v(" 复杂请求:")]),t._v(" "),a("p",[t._v("最常见的情况，当我们使用"),a("code",[t._v("put")]),t._v("和"),a("code",[t._v("delete")]),t._v("请求时，浏览器会先发送"),a("code",[t._v("option")]),t._v("（预检）请求，不过有时候，你会发现并没有，这是后面我们会讲到缓存。")]),t._v(" "),a("h5",{attrs:{id:"预检请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#预检请求"}},[t._v("#")]),t._v(" 预检请求")]),t._v(" "),a("p",[t._v("与简单请求不同的是，option请求多了2个字段：\n"),a("code",[t._v("Access-Control-Request-Method")]),t._v("：该次请求的请求方式\n"),a("code",[t._v("Access-Control-Request-Headers")]),t._v("：该次请求的自定义请求头字段")]),t._v(" "),a("p",[t._v("服务器检查通过后，做出响应：")]),t._v(" "),a("div",{staticClass:"language-csharp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定允许其他域名访问")]),t._v("\n'Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Origin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("172.20")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".206")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//一般用法（*，指定域，动态设置），3是因为*不允许携带认证头和cookies")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//是否允许后续请求携带认证信息（cookies）,该值只能是true,否则不返回")]),t._v("\n'Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Credentials"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("'\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//预检结果缓存时间,也就是上面说到的缓存啦")]),t._v("\n'Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Max"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),t._v("'\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许的请求类型")]),t._v("\n'Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Methods"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("GET"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("POST"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("PUT"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("POST'\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//允许的请求头字段")]),t._v("\n'Access"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Allow"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Headers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("requested"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("with"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("content"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("type'\n")])])]),a("p",[t._v("这里有个注意点："),a("code",[t._v("Access-Control-Request-Method")]),t._v("，"),a("code",[t._v("Access-Control-Request-Headers")]),t._v("返回的是满足服务器要求的所有请求方式，请求头，不限于该次请求，"),a("code",[t._v("我一次性告诉你了，别TM问我了")])]),t._v(" "),a("h3",{attrs:{id:"springboot配置跨域请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#springboot配置跨域请求"}},[t._v("#")]),t._v(" Springboot配置跨域请求")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfig")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n\n    "),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsFilter")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("corsFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlBasedCorsConfigurationSource")]),t._v(" source "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UrlBasedCorsConfigurationSource")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfiguration")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowCredentials")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowedOrigins")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//http:www.a.com")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowedHeaders")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAllowedMethods")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Arrays")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("asList")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setMaxAge")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerCorsConfiguration")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/**"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CorsFilter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"_3、大家好-我是渣渣辉-是兄dei就来-呸呸呸-我是jsonp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、大家好-我是渣渣辉-是兄dei就来-呸呸呸-我是jsonp"}},[t._v("#")]),t._v(" 3、大家好，我是渣渣辉，是兄dei就来...呸呸呸，我是JSONP")]),t._v(" "),a("p",[t._v("好啦，jsonp的原理：通过script标签引入一个js文件，这个js文件载入成功后会执行我们在url参数中指定的函数，并且会把我们需要的json数据作为参数传入，有种回调的味道！")]),t._v(" "),a("p",[t._v("例子：")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.com/data.php?callback=dosomething"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    function dosomething(jsondata){\n        //处理获得的json数据\n    }\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("jquery用法")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text/javascript"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    $.getJSON('http://example.com/data.php?callback=?,function(jsondata)'){\n        //处理获得的json数据\n    };\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("JSONP的优缺点\n优点：它不像XMLHttpRequest对象实现的Ajax请求那样受到同源策略的限制；它的"),a("code",[t._v("兼容性更好")]),t._v("，在更加古老的浏览器中都可以运行，不需要XMLHttpRequest或ActiveX的支持；并且在请求完毕后可以通过调用callback的方式回传结果。")]),t._v(" "),a("p",[t._v("缺点：它只支持"),a("code",[t._v("GET")]),t._v("请求而不支持POST等其它类型的HTTP请求；它只支持跨域HTTP请求这种情况，不能解决不同域的两个页面之间如何进行JavaScript调用的问题。")]),t._v(" "),a("p",[t._v("参考文章：")])])}),[],!1,null,null,null);s.default=e.exports}}]);