(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{174:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),a("p",[t._v("兼容性：ie9+以及现代浏览器")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("animation　css3属性设置动画，css复合属性，可以追加多个css属性，不可被继承，　　\n@keyframes定动画,可以定义动画的起始位置，有参考点，定义位置属性等")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zhangxinxu.com/wordpress/2013/06/css3-animation-%E7%82%B9%E7%82%B9%E7%82%B9%E7%AD%89%E5%BE%85%E6%8F%90%E7%A4%BA%E6%95%88%E6%9E%9C/",target:"_blank",rel:"noopener noreferrer"}},[t._v("css3 animation(张鑫旭)"),a("OutboundLink")],1)]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("Css3可以给元素添加一些效果，而过渡可以让元素从一种样式转换成另一种样式。其中可以设置动画执行的样式，时间，重复等。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("p",[t._v("代码实现效果鼠标覆盖元素变大为原来的两倍并旋转360度。不考虑兼容代码。")]),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),a("p",[t._v("white-space 属性设置如何处理元素内的空白。")]),t._v(" "),a("p",[t._v("这个属性声明建立布局过程中如何处理元素中的空白符。值 pre-wrap 和 pre-line 是 CSS 2.1 中新增的。")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),a("p",[t._v("使用text-overflow:ellipsis对溢出文本显示省略号有两个好处，一是不用通过程序限定字数；二是有利于SEO。需要使用对对溢出文本显示省略号的通常是文章标题列表，这样处理对搜索引擎更友好，因为标题实际上并未被截字，而是局限于宽度而未被显示而已。")]),t._v(" "),a("p",[t._v("通常的做法是这样的：")]),t._v(" "),t._m(26),a("p",[t._v("其中，overflow: hidden和white-space: nowrap都是必须的否则不会显示省略号；-o-text-overflow: ellipsis针对Opera；而宽度的设定主要是针对IE6；")]),t._v(" "),a("p",[t._v("该方法支持Internet Explorer, Safari, Chrome 和 Opera，但FF并不支持，不过可以通过Jquery来实现类似的效果。")]),t._v(" "),t._m(27),t._m(28),t._v(" "),a("p",[t._v("通过css3的媒体查询你可以根据不同的设备具体情况来定制你的页面。")]),t._v(" "),t._m(29),t._v(" "),t._m(30),t._m(31),t._v(" "),a("p",[t._v("css3 的 写法 ：如果你是写最小宽度，最大宽度的限制，为了简便，建议你从最小宽度开始写，依次写最小宽度即可。")]),t._v(" "),t._m(32),a("p",[t._v("也可以直接写link文件中，根据不同分辨率用不同的样式文件渲染")]),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),a("p",[t._v("这个函数（特性）接受的第一个参数是渐变的角度，他可以接受一个表示角度的值（可用的单位deg、rad、grad或turn）或者是表示方向的关键词（top、right、bottom、left、left top、top right、bottom right或者left bottom）。第二个参数是接受一系列颜色节点（终止点的颜色）。")]),t._v(" "),t._m(39),t._v(" "),a("p",[t._v("其本身没有单独容器概念，大小只能是元素的border-box.不能选择性的线性渐变内容盒等。")]),t._v(" "),t._m(40),t._v(" "),a("p",[t._v("默认值 to bottom 等于 180deg,如果是目标的效果可以不再额外设置。渐变夹角为元素中心点垂直线与渐变线之间形成的夹角。(借用大漠老师的图)")]),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),a("p",[t._v("从上面的图中我们可以看到渐变线，也就是当前中心点的垂线旋转渐变角度之后的线，它的长度是与宽高以及角度相关的，可能会超出容器。如果角度为90，那么渐变线长度为元素的高，如果角度为0，那么长度为元素的宽度。其他角度自己可以根据公式去计算，sin(a)*w+cos(a)*h.")]),t._v(" "),a("p",[t._v("有兴趣的同学可以参照我的图纸看下这个公式如何得来的,比较简陋，嘿嘿。")]),t._v(" "),t._m(45),t._v(" "),a("p",[t._v("解题过程如下：")]),t._v(" "),a("p",[t._v("希望你数学不是那么差可以看懂哦。如果有更好的方法欢迎反馈。")]),t._v(" "),t._m(46),a("p",[t._v("渐变线的长度直接影响线性渐变的细腻程度。长度越长，过渡色越多。")])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"css3新特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3新特性"}},[this._v("#")]),this._v(" CSS3新特性")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css3新特性概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3新特性概览"}},[this._v("#")]),this._v(" css3新特性概览")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ol",[a("li",[t._v("css3选择器，与jq一样，强化了选择器功能，包括了数量、层次、属性选择器")]),t._v(" "),a("li",[t._v("原先通过图片或者脚本实现视觉效果通过样式实现，减少了标签和脚本的使用，降低维护成本")]),t._v(" "),a("li",[t._v("背景：支持背景大小，多背景设置，减少了标签，更加灵活")]),t._v(" "),a("li",[t._v("盒模型：拓展了盒模型的类型，尤其弹性盒模型flex；支持了盒模型的变形，旋转，缩放，扭曲等")]),t._v(" "),a("li",[t._v("实现了多列布局，摆脱了只能浮动多列布局")]),t._v(" "),a("li",[t._v("阴影效果：文本阴影，盒阴影，简单的阴影效果可以跳过设计稿")]),t._v(" "),a("li",[t._v("web字体解决了浏览器无法识别的字体；web font图标，更加灵活的使用图标字体，减少了维护工作")]),t._v(" "),a("li",[t._v("颜色与透明度，支持了多种颜色模式，支持透明度设置")]),t._v(" "),a("li",[t._v("圆角与边框，更加丰富的设计效果实现，去除直角实边的单一效果")]),t._v(" "),a("li",[t._v("过度与动画交互效果，可以设置动画进行简单的交互，提升体验")]),t._v(" "),a("li",[t._v("媒体特性与响应式布局，boot框架就是基于这点建立的栅格系统")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"background-size，clip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-size，clip"}},[this._v("#")]),this._v(" background-size，clip")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"background-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-size"}},[this._v("#")]),this._v(" background-size")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一般情况下，我们设置的背景图与背景为完全匹配，但也有情况是可能不匹配的，或者大或者小，那么当尺寸不匹配时，你希望如何控制尺寸呢？这就是"),s("code",[this._v("background-size")]),this._v("的价值所在。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("可能取值："),s("code",[this._v("px|percentage|cover|contain")]),this._v(",详细说明如下：")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("取值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("px")]),t._v(" "),a("td",[t._v("设置背景图像的宽度和高度，如果只设置一个，第二个被认为auto")])]),t._v(" "),a("tr",[a("td",[t._v("percentage")]),t._v(" "),a("td",[t._v("设置背景图像的宽度和高度，如果只设置一个，第二个被认为auto")])]),t._v(" "),a("tr",[a("td",[t._v("contain")]),t._v(" "),a("td",[t._v("缩放背景图像，让其能显示完整")])]),t._v(" "),a("tr",[a("td",[t._v("cover")]),t._v(" "),a("td",[t._v("缩放其图像，让其能完全覆盖区域，但可能背景显示不全")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("兼容性：ie9+以及现代浏览器")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"background-clip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#background-clip"}},[this._v("#")]),this._v(" background-clip")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("背景裁剪一般用于控制其背景的显示策略，显示覆盖区域，常规默认是覆盖全部也就是border-box的。\n可能取值："),s("code",[this._v("padding-box|content-box|border-box")]),this._v(",与"),s("code",[this._v("box-sizing")]),this._v("一致的取值范围。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"animation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#animation"}},[this._v("#")]),this._v(" animation")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"基本语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法"}},[this._v("#")]),this._v(" 基本语法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("animation-name 规定的动画名称 与keyframes 里面的名称对应")]),t._v(" "),a("li",[t._v("animation-duration 规定动画完成一个周期所需要的时间，如果为0 表示没有动画")]),t._v(" "),a("li",[t._v("animation-direction 定义的方向 ie10以上支持 ，normal 正常播放，alternate 偶数反方向播放")]),t._v(" "),a("li",[t._v("animation-timing-function： linear 从头到尾相同的 ease 开始和结束慢 ease-in 开始慢 ease-out 结束慢 - ease-in-out 以低俗开始和结束 cubic-bezier(n,n,n,n) 速度曲线 可能是0-1 之间的数值")]),t._v(" "),a("li",[t._v("animation-delay 动画延迟时间")]),t._v(" "),a("li",[t._v("animation-iteration-count :n infinite 指定次数或者无限次")]),t._v(" "),a("li",[t._v("animation-play-state :paused running 规定以暂定或者进行中")]),t._v(" "),a("li",[t._v("animation-fill-mode :none,forwards backwards both 动画完成之后的样式状态 无 默认的 ；最后一个状态 ，最开始的状态，兼容状态")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"参考文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文章"}},[this._v("#")]),this._v(" 参考文章")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"动画-过渡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动画-过渡"}},[this._v("#")]),this._v(" 动画--过渡")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("transition\n设置四个过渡属性")]),t._v(" "),a("li",[t._v("transition-property\n过渡的名称")]),t._v(" "),a("li",[t._v("transition-duration\n过渡效果花费的时间")]),t._v(" "),a("li",[t._v("transition-timing-function\n过渡效果的时间曲线")]),t._v(" "),a("li",[t._v("transition-delay\n过渡效果开始时间，延迟开始的时间")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"代码实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[this._v("#")]),this._v(" 代码实现")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("width 2s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("height 2s，transform 2s；\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".demo:hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("200px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("360deg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"white-space"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#white-space"}},[this._v("#")]),this._v(" white-space")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"定义和用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#定义和用法"}},[this._v("#")]),this._v(" 定义和用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("默认值")]),t._v(" "),a("td",[t._v("normal")])]),t._v(" "),a("tr",[a("td",[t._v("继承性")]),t._v(" "),a("td",[t._v("yes")])]),t._v(" "),a("tr",[a("td",[t._v("版本")]),t._v(" "),a("td",[t._v("CSS1")])]),t._v(" "),a("tr",[a("td",[t._v("JavaScript 语法")]),t._v(" "),a("td",[t._v('object.style.whiteSpace="pre"')])]),t._v(" "),a("tr",[a("td",[t._v("浏览器支持")]),t._v(" "),a("td",[t._v('所有浏览器都支持 white-space 属性，任何的版本的 Internet Explorer （包括 IE8）都不支持属性值 "inherit"')])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"可能的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可能的值"}},[this._v("#")]),this._v(" 可能的值")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("table",[a("thead",[a("tr",[a("th",[t._v("值")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("normal")]),t._v(" "),a("td",[t._v("默认。空白会被浏览器忽略")])]),t._v(" "),a("tr",[a("td",[t._v("pre")]),t._v(" "),a("td",[t._v("空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签")])]),t._v(" "),a("tr",[a("td",[t._v("nowrap")]),t._v(" "),a("td",[t._v("文本不会换行，文本会在在同一行上继续，直到遇到<br> 标签为止")])]),t._v(" "),a("tr",[a("td",[t._v("pre-wrap")]),t._v(" "),a("td",[t._v("保留空白符序列，但是正常地进行换行")])]),t._v(" "),a("tr",[a("td",[t._v("pre-line")]),t._v(" "),a("td",[t._v("合并空白符序列，但是保留换行符")])]),t._v(" "),a("tr",[a("td",[t._v("inherit")]),t._v(" "),a("td",[t._v("规定应该从父元素继承 white-space 属性的值")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"可能使用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可能使用场景"}},[this._v("#")]),this._v(" 可能使用场景")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-o-text-overflow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("ellipsis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("white-space")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("nowrap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-moz-box-flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Firefox */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("-webkit-box-flex")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("2.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* Safari 和 Chrome */")]),t._v(" 浏览器支持的可伸缩元素\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"css3的媒体查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css3的媒体查询"}},[this._v("#")]),this._v(" css3的媒体查询")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"查询内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询内容"}},[this._v("#")]),this._v(" 查询内容")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("浏览器可视宽度。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("浏览器可视高度。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("device-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("设备屏幕的宽度。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("device-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("设备屏幕的高度。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("orientation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("检测设备目前处于横向还是纵向状态。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("aspect-ratio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("检测浏览器可视宽度和高度的比例。"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("例如：aspect-ratio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("16/9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("device-aspect-ratio")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("检测设备的宽度和高度的比例。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("检测颜色的位数。（例如：min-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("32就会检测设备是否拥有32位颜色）\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color-index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("检查设备颜色索引表中的颜色，他的值不能是负数。\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("monochrome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("检测单色楨缓冲区域中的每个像素的位数。（这个太高级，估计咱很少会用的到）\n* "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("resolution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("检测屏幕或打印机的分辨率。"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("例如：min-resolution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("300"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("dpi或min-resolution")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("118dpcm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。\n*  grid：检测输出的设备是网格的还是位图设备。\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[this._v("#")]),this._v(" 用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768 px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("100%；\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024 px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".container")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("&lt;link rel=&quot;stylesheet&quot; media=&quot;min-width=900&quot; /&gt;")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"线性渐变"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线性渐变"}},[this._v("#")]),this._v(" 线性渐变")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[this._v("#")]),this._v(" 概念")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("CSS linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片。其结果属于<gradient>数据类型，是一种特别的"),s("code",[this._v("<image>")]),this._v("数据类型。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"基本语法-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本语法-2"}},[this._v("#")]),this._v(" 基本语法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("linear-gradient([<angle> | to <side-or-corner>]? , <color-stop-list>)")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"渲染容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染容器"}},[this._v("#")]),this._v(" 渲染容器")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"渐变角度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐变角度"}},[this._v("#")]),this._v(" 渐变角度")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/css/linear.png",alt:"linear"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("ol",[s("li",[this._v("这里的夹角不是与水平线的，我当初也以为是水平夹角；")]),this._v(" "),s("li",[this._v("就是如果你希望渐变线到元素的右上角部分，这个部分不一定是45deg,而关键字设置的top right 一定是右上角。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"渐变线"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渐变线"}},[this._v("#")]),this._v(" 渐变线")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/css/linearGradient.gif",alt:"linearGradient"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("img",{attrs:{src:"/css/caotu.jpeg",alt:"caotu"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[this._v("l1=h/2/cos(a);\nl2=d2*sin(a);\nd2=w/2-d1;\nd1=l1*sin(a);\n最终计算 l=2*(l1+l2)=w*sin(a)+h*cos(a);\n")])])])}],!1,null,null,null);s.default=n.exports}}]);