module.exports=__NEXT_REGISTER_PAGE("/docs",function(){return{page:webpackJsonp([1],{100:function(e,n){e.exports=function(e){var n={className:"variable",variants:[{begin:/\$[\w\d#@][\w\d_]*/},{begin:/\$\{(.*?)}/}]},t={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,{className:"variable",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]}]};return{aliases:["sh","zsh"],lexemes:/\b-?[a-z\._]+\b/,keywords:{keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",_:"-ne -eq -lt -gt -f -d -e -s -l -a"},contains:[{className:"meta",begin:/^#![^\n]+sh\s*$/,relevance:10},{className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0},e.HASH_COMMENT_MODE,t,{className:"string",begin:/'/,end:/'/},n]}}},101:function(e,n){e.exports=function(e){var n="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:e.C_NUMBER_RE}],relevance:0},r={className:"subst",begin:"\\$\\{",end:"\\}",keywords:t,contains:[]},i={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,r]};r.contains=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,a,e.REGEXP_MODE];var s=r.contains.concat([e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:t,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,i,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:n+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:n,relevance:0}]}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+n+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:n},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:t,contains:s}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:s}],illegal:/\[|%/},{begin:/\$[(.]/},e.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},102:function(e,n){e.exports=function(e){var n={literal:"true false null"},t=[e.QUOTE_STRING_MODE,e.C_NUMBER_MODE],a={end:",",endsWithParent:!0,excludeEnd:!0,contains:t,keywords:n},r={begin:"{",end:"}",contains:[{className:"attr",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE],illegal:"\\n"},e.inherit(a,{begin:/:/})],illegal:"\\S"},i={begin:"\\[",end:"\\]",contains:[e.inherit(a)],illegal:"\\S"};return t.splice(t.length,0,r,i),{contains:t,keywords:n,illegal:"\\S"}}},103:function(e,n){e.exports=function(e){return{aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$"},{begin:"^.+?\\n[=-]{2,}$"}]},{begin:"<",end:">",subLanguage:"xml",relevance:0},{className:"bullet",begin:"^([*+-]|(\\d+\\.))\\s+"},{className:"strong",begin:"[*_]{2}.+?[*_]{2}"},{className:"emphasis",variants:[{begin:"\\*.+?\\*"},{begin:"_.+?_",relevance:0}]},{className:"quote",begin:"^>\\s+",end:"$"},{className:"code",variants:[{begin:"^```w*s*$",end:"^```s*$"},{begin:"`.+?`"},{begin:"^( {4}|\t)",end:"$",relevance:0}]},{begin:"^[-\\*]{3,}",end:"$"},{begin:"\\[.+?\\][\\(\\[].*?[\\)\\]]",returnBegin:!0,contains:[{className:"string",begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0,relevance:0},{className:"link",begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}],relevance:10},{begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]}]}}},104:function(e,n){e.exports=function(e){var n="[a-zA-Z_][\\w\\-]*",t={className:"attr",variants:[{begin:"^[ \\-]*"+n+":"},{begin:'^[ \\-]*"'+n+'":'},{begin:"^[ \\-]*'"+n+"':"}]},a={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,{className:"template-variable",variants:[{begin:"{{",end:"}}"},{begin:"%{",end:"}"}]}]};return{case_insensitive:!0,aliases:["yml","YAML","yaml"],contains:[t,{className:"meta",begin:"^---s*$",relevance:10},{className:"string",begin:"[\\|>] *$",returnEnd:!0,contains:a.contains,end:t.variants[0].begin},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!!"+e.UNDERSCORE_IDENT_RE},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"^ *-",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:"true false yes no null",keywords:{literal:"true false yes no null"}},e.C_NUMBER_MODE,a]}}},105:function(e,n){e.exports=function(e){var n={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:"[A-Za-z0-9\\._:-]+",relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/},{begin:/'/,end:/'/},{begin:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],case_insensitive:!0,contains:[{className:"meta",begin:"<!DOCTYPE",end:">",relevance:10,contains:[{begin:"\\[",end:"\\]"}]},e.COMMENT("\x3c!--","--\x3e",{relevance:10}),{begin:"<\\!\\[CDATA\\[",end:"\\]\\]>",relevance:10},{begin:/<\?(php)?/,end:/\?>/,subLanguage:"php",contains:[{begin:"/\\*",end:"\\*/",skip:!0}]},{className:"tag",begin:"<style(?=\\s|>|$)",end:">",keywords:{name:"style"},contains:[n],starts:{end:"</style>",returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:"<script(?=\\s|>|$)",end:">",keywords:{name:"script"},contains:[n],starts:{end:"<\/script>",returnEnd:!0,subLanguage:["actionscript","javascript","handlebars","xml"]}},{className:"meta",variants:[{begin:/<\?xml/,end:/\?>/,relevance:10},{begin:/<\?\w+/,end:/\?>/}]},{className:"tag",begin:"</?",end:"/?>",contains:[{className:"name",begin:/[^\/><\s]+/,relevance:0},n]}]}}},251:function(e,n,t){e.exports=t(252)},252:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),r=t.n(a),i=t(6),s=t(86),l=t.n(s),o=t(87),c=t.n(o),u=t(58),d=t(95),g=t(29),f=t.n(g),m=E(["\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  align-items: stretch;\n"]),b=E(["\n  margin: .5em 0;\n  padding: .5em 1em;\n  border-left: 5px solid transparent;\n  flex: 1;\n  font-size: .75em;\n  font-weight: 600;\n  color: #212121;\n  text-transform: uppercase;\n  border-bottom: 1px solid #ccc;\n"]),p=E(["\n  padding: 1em;\n  text-decoration: none;\n  color: #212121;\n  border-left: .5em solid transparent;\n  flex: 1;\n  \n  &:hover {\n    color: #181818;\n    background-color: #f4f4f4;\n    border-left: .5em solid #ccc;\n  }\n  \n  &.active,\n  &.active:hover {\n    color: #212121;\n    background-color: #fafafa;\n    border-left: .5em solid #f63;    \n  }\n"]);function E(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function h(){return(h=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var v=function(e){var n=e.docs,t=e.post,a=n.filter(Object(u.inCategory)("docs/nextepc")),i=n.filter(Object(u.inCategory)("docs/package")),s=n.filter(Object(u.inCategory)("docs/build")),l=n.filter(Object(u.inCategory)("docs/tutorial"));return r.a.createElement(y,null,a.length&&r.a.createElement(_,null,"NextEPC"),a.map(function(e,n){var a=e.data,i=t.data.url===a.url;return r.a.createElement(f.a,h({key:"doc-nav-".concat(n)},e),r.a.createElement(N,{className:i?"active":""},a.title))}),i.length&&r.a.createElement(_,null,"Package"),i.map(function(e,n){var a=e.data,i=t.data.url===a.url;return r.a.createElement(f.a,h({key:"doc-nav-".concat(n)},e),r.a.createElement(N,{className:i?"active":""},a.title))}),s.length&&r.a.createElement(_,null,"Build"),s.map(function(e,n){var a=e.data,i=t.data.url===a.url;return r.a.createElement(f.a,h({key:"doc-nav-".concat(n)},e),r.a.createElement(N,{className:i?"active":""},a.title))}),l.length&&r.a.createElement(_,null,"Tutorial"),l.map(function(e,n){var a=e.data,i=t.data.url===a.url;return r.a.createElement(f.a,h({key:"doc-nav-".concat(n)},e),r.a.createElement(N,{className:i?"active":""},a.title))}))},y=Object(i.a)("nav")(m),_=Object(i.a)("div")(b),N=Object(i.a)("a")(p),w=t(97),O=t(98),x=t(106),R=t(107),M=t(108),C=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  font-size: 1.8em;\n  line-height: 2em;\n  font-weight: 600;\n  color: #000;\n  margin: 2em 0 0 -2px;\n\n  > em {\n    font-weight: 200;\n    letter-spacing: -0.8px;\n    padding: 0 4px;    \n  }\n"]);function S(){return(S=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var A=Object(u.withPostsFilterBy)(Object(u.inCategory)("docs",{includeSubCategories:!0})),k=c()(A(function(e){var n=e.post,t=e.posts;t.sort(function(e,n){return e.data.order-n.data.order});var a=n||t[0];return r.a.createElement(w.f,null,r.a.createElement(l.a,null,r.a.createElement("title",null,"NextEPC | Docs | ",a.data.title),r.a.createElement("link",{rel:"stylesheet",href:"//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css"})),r.a.createElement(d.a,{showHome:!0,title:"documentation",styles:{width:"100vw"}}),r.a.createElement(w.h,null,r.a.createElement(w.i,null,r.a.createElement(v,{docs:t,post:a})),r.a.createElement(w.a,null,r.a.createElement(w.c,null,a.data.category),r.a.createElement(w.j,null,a.data.title),r.a.createElement(o.Content,S({},a,{renderers:{h2:j,blockquote:w.b,code:O.a,p:w.g,pre:w.d,ul:w.e}})))),r.a.createElement(x.a,null))})),j=(n.default=Object(R.a)(Object(M.a)(k)),Object(i.a)("div")(C))},97:function(e,n,t){"use strict";t.d(n,"f",function(){return p}),t.d(n,"h",function(){return E}),t.d(n,"i",function(){return h}),t.d(n,"a",function(){return v}),t.d(n,"j",function(){return y}),t.d(n,"c",function(){return _}),t.d(n,"g",function(){return N}),t.d(n,"b",function(){return w}),t.d(n,"d",function(){return O}),t.d(n,"e",function(){return x});var a=t(0),r=(t.n(a),t(6)),i=b(["\n  display: flex;\n  flex-direction: column;\n  color: #666;\n"]),s=b(["\n  background: #f9f9f9;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n  & p + h2 {\n    margin-top: 40px;\n  }\n"]),l=b(["\n  flex: .9;\n  background: #eee;\n"]),o=b(["\n  position: relative;\n  flex: 4;\n  width: 1px; // width to get the Article to not expand\n  padding: 3.5em 0 3.5em 3.5em;\n"]),c=b(["\n  font-size: 4em;\n  font-weight: 100;\n  margin-top: -15px;\n  margin-bottom: 130px;\n  padding-bottom: 15px;\n  border-bottom: 3px solid #f63;\n"]),u=b(["\n  font-size: .8em;\n  font-weight: 100;\n  color: #666;\n  text-transform: uppercase;\n"]),d=b(["\n  font-size: 1.25em;\n  font-weight: 300;\n  color: #444;\n  margin: 0;\n  letter-spacing: -0.05px;\n  line-height: 1.5em;\n  max-width: 800px;\n\n  &:not(:first-child):not(:last-child) {\n    margin: 1em 0;\n  }\n\n  & strong, & b {\n    font-weight: 600;\n  }\n\n  &  code {\n    font-size: .95em;\n    display: inline-block;\n    padding: 0 5px;\n    background-color: #eee;\n    vertical-align: bottom;\n  }\n"]),g=b(["\n  margin: 0;\n  padding-left: 1.25em;\n  border-left: 5px solid; \n  & p > {\n    margin: 0;\n  }\n"]),f=b(["\n  margin: 1.5em 0;\n  font-size: 1.2em;\n  padding: .5em 1.2em;\n  background: #f2f2f2;\n  & .hljs {\n    background: #f2f2f2;\n  }\n"]),m=b(["  \n  &, & li > p {\n    font-size: 1.1em;\n    line-height: 1.5em;\n  }\n\n  & code, & p code {\n    font-size: 1em;\n    display: inline-block;\n    padding: 0 5px;\n    background-color: #eee;\n  }\n  \n"]);function b(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var p=Object(r.a)("main")(i),E=Object(r.a)("section")(s),h=Object(r.a)("div")(l),v=Object(r.a)("article")(o),y=Object(r.a)("h1")(c),_=Object(r.a)("h2")(u),N=Object(r.a)("p")(d),w=Object(r.a)("blockquote")(g),O=Object(r.a)("pre")(f),x=Object(r.a)("ul")(m)},98:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(99),s=t.n(i),l=t(100),o=t.n(l),c=t(101),u=t.n(c),d=t(102),g=t.n(d),f=t(103),m=t.n(f),b=t(104),p=t.n(b),E=t(105),h=t.n(E);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _(e,n){return!n||"object"!==v(n)&&"function"!=typeof n?N(e):n}function N(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}s.a.registerLanguage("bash",o.a),s.a.registerLanguage("javascript",u.a),s.a.registerLanguage("json",g.a),s.a.registerLanguage("markdown",m.a),s.a.registerLanguage("yaml",p.a),s.a.registerLanguage("xml",h.a);var w=function(e){function n(){var e,t,a;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return _(a,(t=a=_(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),Object.defineProperty(N(a),"setEl",{configurable:!0,enumerable:!0,writable:!0,value:function(e){a.el=e}}),t))}var t,a,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.a.Component),t=n,(a=[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){for(var e=this.el.querySelectorAll("pre code"),n=0;n<e.length;n++)s.a.highlightBlock(e[n])}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.className,a=e.element,i=e.innerHTML,s={ref:this.setEl,className:t};return i?(s.dangerouslySetInnerHTML={__html:n},a?r.a.createElement(a,s):r.a.createElement("div",s)):a?r.a.createElement(a,s,n):r.a.createElement("pre",{ref:this.setEl},r.a.createElement("code",{className:t},n))}}])&&y(t.prototype,a),i&&y(t,i),n}();w.defaultProps={innerHTML:!1,className:null,element:null};var O=w;function x(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],a=!0,r=!1,i=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(t.push(s.value),!n||t.length!==n);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}n.a=function(e){var n=e.className,t=void 0===n?"":n,a=e.children;return x(t.split("-"),2)[1]?r.a.createElement(O,{languages:["javascript","json","markdown","bash","yaml","xml"],className:t},a.join("")):r.a.createElement("code",{className:t},a)}},99:function(e,n,t){!function(e){"object"==typeof window&&window||"object"==typeof self&&self;e(n)}(function(e){var n=[],t=Object.keys,a={},r={},i=/^(no-?highlight|plain|text)$/i,s=/\blang(?:uage)?-([\w-]+)\b/i,l=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,o="</span>",c={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function u(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function d(e){return e.nodeName.toLowerCase()}function g(e,n){var t=e&&e.exec(n);return t&&0===t.index}function f(e){return i.test(e)}function m(e){var n,t={},a=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return a.forEach(function(e){for(n in e)t[n]=e[n]}),t}function b(e){var n=[];return function e(t,a){for(var r=t.firstChild;r;r=r.nextSibling)3===r.nodeType?a+=r.nodeValue.length:1===r.nodeType&&(n.push({event:"start",offset:a,node:r}),a=e(r,a),d(r).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:r}));return a}(e,0),n}function p(e){function n(e){return e&&e.source||e}function a(t,a){return new RegExp(n(t),"m"+(e.case_insensitive?"i":"")+(a?"g":""))}!function r(i,s){if(!i.compiled){if(i.compiled=!0,i.keywords=i.keywords||i.beginKeywords,i.keywords){var l={},o=function(n,t){e.case_insensitive&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");l[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof i.keywords?o("keyword",i.keywords):t(i.keywords).forEach(function(e){o(e,i.keywords[e])}),i.keywords=l}i.lexemesRe=a(i.lexemes||/\w+/,!0),s&&(i.beginKeywords&&(i.begin="\\b("+i.beginKeywords.split(" ").join("|")+")\\b"),i.begin||(i.begin=/\B|\b/),i.beginRe=a(i.begin),i.end||i.endsWithParent||(i.end=/\B|\b/),i.end&&(i.endRe=a(i.end)),i.terminator_end=n(i.end)||"",i.endsWithParent&&s.terminator_end&&(i.terminator_end+=(i.end?"|":"")+s.terminator_end)),i.illegal&&(i.illegalRe=a(i.illegal)),null==i.relevance&&(i.relevance=1),i.contains||(i.contains=[]),i.contains=Array.prototype.concat.apply([],i.contains.map(function(e){return function(e){return e.variants&&!e.cached_variants&&(e.cached_variants=e.variants.map(function(n){return m(e,{variants:null},n)})),e.cached_variants||e.endsWithParent&&[m(e)]||[e]}("self"===e?i:e)})),i.contains.forEach(function(e){r(e,i)}),i.starts&&r(i.starts,s);var c=i.contains.map(function(e){return e.beginKeywords?"\\.?("+e.begin+")\\.?":e.begin}).concat([i.terminator_end,i.illegal]).map(n).filter(Boolean);i.terminators=c.length?a(c.join("|"),!0):{exec:function(){return null}}}}(e)}function E(e,n,t,r){function i(e,n){var t=m.case_insensitive?n[0].toLowerCase():n[0];return e.keywords.hasOwnProperty(t)&&e.keywords[t]}function s(e,n,t,a){var r='<span class="'+(a?"":c.classPrefix);return(r+=e+'">')+n+(t?"":o)}function l(){_+=null!=v.subLanguage?function(){var e="string"==typeof v.subLanguage;if(e&&!a[v.subLanguage])return u(w);var n=e?E(v.subLanguage,w,!0,y[v.subLanguage]):h(w,v.subLanguage.length?v.subLanguage:void 0);return v.relevance>0&&(O+=n.relevance),e&&(y[v.subLanguage]=n.top),s(n.language,n.value,!1,!0)}():function(){var e,n,t,a;if(!v.keywords)return u(w);for(a="",n=0,v.lexemesRe.lastIndex=0,t=v.lexemesRe.exec(w);t;)a+=u(w.substring(n,t.index)),(e=i(v,t))?(O+=e[1],a+=s(e[0],u(t[0]))):a+=u(t[0]),n=v.lexemesRe.lastIndex,t=v.lexemesRe.exec(w);return a+u(w.substr(n))}(),w=""}function d(e){_+=e.className?s(e.className,"",!0):"",v=Object.create(e,{parent:{value:v}})}function f(e,n){if(w+=e,null==n)return l(),0;var a=function(e,n){var t,a;for(t=0,a=n.contains.length;t<a;t++)if(g(n.contains[t].beginRe,e))return n.contains[t]}(n,v);if(a)return a.skip?w+=n:(a.excludeBegin&&(w+=n),l(),a.returnBegin||a.excludeBegin||(w=n)),d(a),a.returnBegin?0:n.length;var r=function e(n,t){if(g(n.endRe,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.endsWithParent)return e(n.parent,t)}(v,n);if(r){var i=v;i.skip?w+=n:(i.returnEnd||i.excludeEnd||(w+=n),l(),i.excludeEnd&&(w=n));do{v.className&&(_+=o),v.skip||(O+=v.relevance),v=v.parent}while(v!==r.parent);return r.starts&&d(r.starts),i.returnEnd?0:n.length}if(function(e,n){return!t&&g(n.illegalRe,e)}(n,v))throw new Error('Illegal lexeme "'+n+'" for mode "'+(v.className||"<unnamed>")+'"');return w+=n,n.length||1}var m=N(e);if(!m)throw new Error('Unknown language: "'+e+'"');p(m);var b,v=r||m,y={},_="";for(b=v;b!==m;b=b.parent)b.className&&(_=s(b.className,"",!0)+_);var w="",O=0;try{for(var x,R,M=0;v.terminators.lastIndex=M,x=v.terminators.exec(n);)R=f(n.substring(M,x.index),x[0]),M=x.index+R;for(f(n.substr(M)),b=v;b.parent;b=b.parent)b.className&&(_+=o);return{relevance:O,value:_,language:e,top:v}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{relevance:0,value:u(n)};throw e}}function h(e,n){n=n||c.languages||t(a);var r={relevance:0,value:u(e)},i=r;return n.filter(N).forEach(function(n){var t=E(n,e,!1);t.language=n,t.relevance>i.relevance&&(i=t),t.relevance>r.relevance&&(i=r,r=t)}),i.language&&(r.second_best=i),r}function v(e){return c.tabReplace||c.useBR?e.replace(l,function(e,n){return c.useBR&&"\n"===e?"<br>":c.tabReplace?n.replace(/\t/g,c.tabReplace):""}):e}function y(e){var t,a,i,l,o,g=function(e){var n,t,a,r,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=s.exec(i))return N(t[1])?t[1]:"no-highlight";for(n=0,a=(i=i.split(/\s+/)).length;n<a;n++)if(f(r=i[n])||N(r))return r}(e);f(g)||(c.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,o=t.textContent,i=g?E(g,o,!0):h(o),(a=b(t)).length&&((l=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,t,a){var r=0,i="",s=[];function l(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function o(e){i+="<"+d(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+u(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function c(e){i+="</"+d(e)+">"}function g(e){("start"===e.event?o:c)(e.node)}for(;e.length||t.length;){var f=l();if(i+=u(a.substring(r,f[0].offset)),r=f[0].offset,f===e){s.reverse().forEach(c);do{g(f.splice(0,1)[0]),f=l()}while(f===e&&f.length&&f[0].offset===r);s.reverse().forEach(o)}else"start"===f[0].event?s.push(f[0].node):s.pop(),g(f.splice(0,1)[0])}return i+u(a.substr(r))}(a,b(l),o)),i.value=v(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var a=n?r[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(a)&&i.push(a),i.join(" ").trim()}(e.className,g,i.language),e.result={language:i.language,re:i.relevance},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.relevance}))}function _(){if(!_.called){_.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,y)}}function N(e){return e=(e||"").toLowerCase(),a[e]||a[r[e]]}return e.highlight=E,e.highlightAuto=h,e.fixMarkup=v,e.highlightBlock=y,e.configure=function(e){c=m(c,e)},e.initHighlighting=_,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",_,!1),addEventListener("load",_,!1)},e.registerLanguage=function(n,t){var i=a[n]=t(e);i.aliases&&i.aliases.forEach(function(e){r[e]=n})},e.listLanguages=function(){return t(a)},e.getLanguage=N,e.inherit=m,e.IDENT_RE="[a-zA-Z]\\w*",e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},e.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[e.BACKSLASH_ESCAPE]},e.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.COMMENT=function(n,t,a){var r=e.inherit({className:"comment",begin:n,end:t,contains:[]},a||{});return r.contains.push(e.PHRASAL_WORDS_MODE),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),r},e.C_LINE_COMMENT_MODE=e.COMMENT("//","$"),e.C_BLOCK_COMMENT_MODE=e.COMMENT("/\\*","\\*/"),e.HASH_COMMENT_MODE=e.COMMENT("#","$"),e.NUMBER_MODE={className:"number",begin:e.NUMBER_RE,relevance:0},e.C_NUMBER_MODE={className:"number",begin:e.C_NUMBER_RE,relevance:0},e.BINARY_NUMBER_MODE={className:"number",begin:e.BINARY_NUMBER_RE,relevance:0},e.CSS_NUMBER_MODE={className:"number",begin:e.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},e.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[e.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[e.BACKSLASH_ESCAPE]}]},e.TITLE_MODE={className:"title",begin:e.IDENT_RE,relevance:0},e.UNDERSCORE_TITLE_MODE={className:"title",begin:e.UNDERSCORE_IDENT_RE,relevance:0},e.METHOD_GUARD={begin:"\\.\\s*"+e.UNDERSCORE_IDENT_RE,relevance:0},e})}},[251]).default}});