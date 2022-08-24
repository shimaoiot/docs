(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{716:function(t,s,a){"use strict";a.r(s);var r=a(35),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"策略下发回调"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#策略下发回调"}},[t._v("#")]),t._v(" 策略下发回调")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("发起方:终端")]),t._v(" "),a("p",[a("strong",[t._v("协议类型")]),t._v(":mqtt")]),t._v(" "),a("p",[a("strong",[t._v("method")]),t._v(":device-strategy-ack")]),t._v(" "),a("p",[a("strong",[t._v("上报 Topic")]),t._v("："),a("code",[t._v("/topic/pub/strategy/{AppKey}/{clientId}")])])]),t._v(" "),a("h4",{attrs:{id:"header-信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-信息"}},[t._v("#")]),t._v(" header 信息")]),t._v(" "),a("p",[t._v("header 信息包含所有请求必须的通用信息")]),t._v(" "),a("p",[a("strong",[t._v("示例")])]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"header"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"traceId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"payloadVersion"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"brand"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"KT"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1234567890123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"device-strategy-ack"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h4",{attrs:{id:"请求参数说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#请求参数说明"}},[t._v("#")]),t._v(" 请求参数说明")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数名")]),t._v(" "),a("th",[t._v("参数类型")]),t._v(" "),a("th",[t._v("参数说明")]),t._v(" "),a("th",[t._v("是否必填")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("reqId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("请求ID")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("ackReqId")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("下发 reqId")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("deviceCode")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("设备编码")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("ackStrategys")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("回调策略列表")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("└strategyId")]),t._v(" "),a("td",[t._v("Long")]),t._v(" "),a("td",[t._v("策略ID")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("└code")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("规则下发结果(0-成功 1-失败)")]),t._v(" "),a("td",[t._v("是")])]),t._v(" "),a("tr",[a("td",[t._v("└message")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("信息字段（错误信息等）")]),t._v(" "),a("td",[t._v("否")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);