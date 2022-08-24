(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{687:function(t,v,_){"use strict";_.r(v);var a=_(35),s=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"协议总体结构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#协议总体结构"}},[t._v("#")]),t._v(" 协议总体结构")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),_("p",[t._v("协议总体分为两部分：header 及 payload")])]),t._v(" "),_("div",{staticClass:"language-json line-numbers-mode"},[_("pre",{pre:!0,attrs:{class:"language-json"}},[_("code",[_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payload"')]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),_("div",{staticClass:"line-numbers-wrapper"},[_("span",{staticClass:"line-number"},[t._v("1")]),_("br"),_("span",{staticClass:"line-number"},[t._v("2")]),_("br"),_("span",{staticClass:"line-number"},[t._v("3")]),_("br"),_("span",{staticClass:"line-number"},[t._v("4")]),_("br"),_("span",{staticClass:"line-number"},[t._v("5")]),_("br"),_("span",{staticClass:"line-number"},[t._v("6")]),_("br")])]),_("h2",{attrs:{id:"header-参数说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#header-参数说明"}},[t._v("#")]),t._v(" header 参数说明")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("参数名")])]),t._v(" "),_("th",[_("strong",[t._v("参数类型")])]),t._v(" "),_("th",[_("strong",[t._v("参数说明")])]),t._v(" "),_("th",[_("strong",[t._v("是否必填")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("traceId")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("请求唯一 ID，用于跟踪请求，使用 UUID")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("payloadVersion")]),t._v(" "),_("td",[t._v("Int")]),t._v(" "),_("td",[t._v("Payload 版本号，当前默认为 1")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("brand")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("来源平台编号，由物联云平台分配")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("timestamp")]),t._v(" "),_("td",[t._v("long")]),t._v(" "),_("td",[t._v("请求时间戳")]),t._v(" "),_("td",[t._v("是")])]),t._v(" "),_("tr",[_("td",[t._v("method")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("请求方法名")]),t._v(" "),_("td",[t._v("是")])])])]),t._v(" "),_("p",[_("strong",[t._v("traceId 生成规则")])]),t._v(" "),_("p",[t._v("系统当前时间（精确到毫秒，13 位），例如：1599531928703设备唯一 ID，例如：ASDFVFWE123")]),t._v(" "),_("p",[t._v("去除”-”符号的 UUID：b38c86eff97b41c7a87e91b0279a1ba4 UUID 后七位：79a1ba4")]),t._v(" "),_("p",[t._v("系统当前时间+设备唯一 ID+UUID 后七位：1599531928703ASDFVFWE12379a1ba4 MD5（1599531928703ASDFVFWE12379a1ba4） 转 大 写 ：\n7CFF11D7B5E769C865B9307E70991236 traceId：7CFF11D7B5E769C865B9307E70991236")]),t._v(" "),_("p",[_("strong",[t._v("以上协议结构适用于所有业务协议整体结构")])]),t._v(" "),_("h2",{attrs:{id:"mqtt-payload-method枚举"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mqtt-payload-method枚举"}},[t._v("#")]),t._v(" MQTT payload method枚举")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[_("strong",[t._v("枚举值")])]),t._v(" "),_("th",[_("strong",[t._v("枚举说明")])])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("device-control")]),t._v(" "),_("td",[t._v("设备控制")])]),t._v(" "),_("tr",[_("td",[t._v("device-desired")]),t._v(" "),_("td",[t._v("获取设备影子期望值")])]),t._v(" "),_("tr",[_("td",[t._v("device-group")]),t._v(" "),_("td",[t._v("设备编组")])]),t._v(" "),_("tr",[_("td",[t._v("shadow-report")]),t._v(" "),_("td",[t._v("设备影子上报")])]),t._v(" "),_("tr",[_("td",[t._v("event-report")]),t._v(" "),_("td",[t._v("事件上报")])]),t._v(" "),_("tr",[_("td",[t._v("device-discovery")]),t._v(" "),_("td",[t._v("设备发现")])]),t._v(" "),_("tr",[_("td",[t._v("device-bind")]),t._v(" "),_("td",[t._v("设备绑定")])]),t._v(" "),_("tr",[_("td",[t._v("device-unbind")]),t._v(" "),_("td",[t._v("设备解绑")])]),t._v(" "),_("tr",[_("td",[t._v("log-all")]),t._v(" "),_("td",[t._v("全量日志上报")])]),t._v(" "),_("tr",[_("td",[t._v("device-ota")]),t._v(" "),_("td",[t._v("固件升级")])]),t._v(" "),_("tr",[_("td",[t._v("device-strategy")]),t._v(" "),_("td",[t._v("设备策略下发")])]),t._v(" "),_("tr",[_("td",[t._v("device-strategy-ack")]),t._v(" "),_("td",[t._v("设备策略下发回调")])]),t._v(" "),_("tr",[_("td",[t._v("device-info")]),t._v(" "),_("td",[t._v("设备信息上报")])]),t._v(" "),_("tr",[_("td",[t._v("pass-rule-info")]),t._v(" "),_("td",[t._v("通行信息下发")])]),t._v(" "),_("tr",[_("td",[t._v("pass-rule-ack")]),t._v(" "),_("td",[t._v("通行信息下发回调")])]),t._v(" "),_("tr",[_("td",[t._v("pass-record")]),t._v(" "),_("td",[t._v("通行记录")])])])])])}),[],!1,null,null,null);v.default=s.exports}}]);