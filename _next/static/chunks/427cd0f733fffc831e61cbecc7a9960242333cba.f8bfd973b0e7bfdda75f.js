("object"!==typeof self?self:this.webpackJsonp_N_E="object"!==typeof self?self:this.webpackJsonp_N_E||[]).push([[16],{"4abu":function(t,e,n){"use strict";const r=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",i="["+r+"][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",s=new RegExp("^"+i+"$");e.isExist=function(t){return"undefined"!==typeof t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,n){if(e){const r=Object.keys(e),i=r.length;for(let s=0;s<i;s++)t[r[s]]="strict"===n?[e[r[s]]]:e[r[s]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,n){var r={};if(!t)return e;for(let i=0;i<n.length;i++)void 0!==t[n[i]]?r[n[i]]=t[n[i]]:r[n[i]]=e[n[i]];return r},e.isTagNameInArrayMode=function(t,e,n){return!1!==e&&(e instanceof RegExp?e.test(t):"function"===typeof e?!!e(t,n):"strict"===e)},e.isName=function(t){const e=s.exec(t);return!(null===e||"undefined"===typeof e)},e.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const i=[],s=r.length;for(let t=0;t<s;t++)i.push(r[t]);n.push(i),r=e.exec(t)}return n},e.nameRegexp=i},E1E9:function(t,e,n){"use strict";const r=n("4abu"),i=n("4abu").buildOptions,s=n("Y81X");"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,r.nameRegexp);!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const a={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",tagValueProcessor:function(t,e){return t},attrValueProcessor:function(t,e){return t},stopNodes:[]};e.defaultOptions=a;const o=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","stopNodes"];function l(t,e,n){return e&&(n.trimValues&&(e=e.trim()),e=c(e=n.tagValueProcessor(e,t),n.parseNodeValue,n.parseTrueNumberOnly)),e}function u(t,e){if(e.ignoreNameSpace){const e=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=n+e[1])}return t}function c(t,e,n){if(e&&"string"===typeof t){let e;return""===t.trim()||isNaN(t)?e="true"===t||"false"!==t&&t:(-1!==t.indexOf("0x")?e=Number.parseInt(t,16):-1!==t.indexOf(".")?(e=Number.parseFloat(t),t=t.replace(/\.?0+$/,"")):e=Number.parseInt(t,10),n&&(e=String(e)===t?e:t)),e}return r.isExist(t)?t:""}e.props=o;const d=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function f(t,e){if(!e.ignoreAttributes&&"string"===typeof t){t=t.replace(/\r?\n/g," ");const n=r.getAllMatches(t,d),i=n.length,s={};for(let t=0;t<i;t++){const r=u(n[t][1],e);r.length&&(void 0!==n[t][4]?(e.trimValues&&(n[t][4]=n[t][4].trim()),n[t][4]=e.attrValueProcessor(n[t][4],r),s[e.attributeNamePrefix+r]=c(n[t][4],e.parseAttributeValue,e.parseTrueNumberOnly)):e.allowBooleanAttributes&&(s[e.attributeNamePrefix+r]=!0))}if(!Object.keys(s).length)return;if(e.attrNodeName){const t={};return t[e.attrNodeName]=s,t}return s}}function h(t,e){let n,r="";for(let i=e;i<t.length;i++){let e=t[i];if(n)e===n&&(n="");else if('"'===e||"'"===e)n=e;else{if(">"===e)return{data:r,index:i};"\t"===e&&(e=" ")}r+=e}}function g(t,e,n,r){const i=t.indexOf(e,n);if(-1===i)throw new Error(r);return i+e.length-1}e.getTraversalObj=function(t,e){t=t.replace(/\r\n?/g,"\n"),e=i(e,a,o);const n=new s("!xml");let u=n,c="";for(let i=0;i<t.length;i++){if("<"===t[i])if("/"===t[i+1]){const n=g(t,">",i,"Closing Tag is not closed.");let s=t.substring(i+2,n).trim();if(e.ignoreNameSpace){const t=s.indexOf(":");-1!==t&&(s=s.substr(t+1))}u&&(u.val?u.val=r.getValue(u.val)+""+l(s,c,e):u.val=l(s,c,e)),e.stopNodes.length&&e.stopNodes.includes(u.tagname)&&(u.child=[],void 0==u.attrsMap&&(u.attrsMap={}),u.val=t.substr(u.startIndex+1,i-u.startIndex-1)),u=u.parent,c="",i=n}else if("?"===t[i+1])i=g(t,"?>",i,"Pi Tag is not closed.");else if("!--"===t.substr(i+1,3))i=g(t,"--\x3e",i,"Comment is not closed.");else if("!D"===t.substr(i+1,2)){const e=g(t,">",i,"DOCTYPE is not closed.");i=t.substring(i,e).indexOf("[")>=0?t.indexOf("]>",i)+1:e}else if("!["===t.substr(i+1,2)){const n=g(t,"]]>",i,"CDATA is not closed.")-2,a=t.substring(i+9,n);if(c&&(u.val=r.getValue(u.val)+""+l(u.tagname,c,e),c=""),e.cdataTagName){const t=new s(e.cdataTagName,u,a);u.addChild(t),u.val=r.getValue(u.val)+e.cdataPositionChar,a&&(t.val=a)}else u.val=(u.val||"")+(a||"");i=n+2}else{const n=h(t,i+1);let a=n.data;const o=n.index,d=a.indexOf(" ");let g=a,p=!0;if(-1!==d&&(g=a.substr(0,d).replace(/\s\s*$/,""),a=a.substr(d+1)),e.ignoreNameSpace){const t=g.indexOf(":");-1!==t&&(g=g.substr(t+1),p=g!==n.data.substr(t+1))}if(u&&c&&"!xml"!==u.tagname&&(u.val=r.getValue(u.val)+""+l(u.tagname,c,e)),a.length>0&&a.lastIndexOf("/")===a.length-1){"/"===g[g.length-1]?(g=g.substr(0,g.length-1),a=g):a=a.substr(0,a.length-1);const t=new s(g,u,"");g!==a&&(t.attrsMap=f(a,e)),u.addChild(t)}else{const t=new s(g,u);e.stopNodes.length&&e.stopNodes.includes(t.tagname)&&(t.startIndex=o),g!==a&&p&&(t.attrsMap=f(a,e)),u.addChild(t),u=t}c="",i=o}else c+=t[i]}return n}},Y81X:function(t,e,n){"use strict";t.exports=function(t,e,n){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=n,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}}},cIfH:function(t,e,n){"use strict";const r=n("4abu"),i={allowBooleanAttributes:!1},s=["allowBooleanAttributes"];function a(t,e){for(var n=e;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{var r=t.substr(n,e-n);if(e>5&&"xml"===r)return f("InvalidXml","XML declaration allowed only at the start of the document.",g(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function o(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let n=1;for(e+=8;e<t.length;e++)if("<"===t[e])n++;else if(">"===t[e]&&(n--,0===n))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}e.validate=function(t,e){e=r.buildOptions(e,i,s);const n=[];let u=!1,h=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let i=0;i<t.length;i++)if("<"===t[i]&&"?"===t[i+1]){if(i+=2,i=a(t,i),i.err)return i}else{if("<"!==t[i]){if(" "===t[i]||"\t"===t[i]||"\n"===t[i]||"\r"===t[i])continue;return f("InvalidChar","char '"+t[i]+"' is not expected.",g(t,i))}if(i++,"!"===t[i]){i=o(t,i);continue}{let s=!1;"/"===t[i]&&(s=!0,i++);let b="";for(;i<t.length&&">"!==t[i]&&" "!==t[i]&&"\t"!==t[i]&&"\n"!==t[i]&&"\r"!==t[i];i++)b+=t[i];if(b=b.trim(),"/"===b[b.length-1]&&(b=b.substring(0,b.length-1),i--),p=b,!r.isName(p)){let e;return e=0===b.trim().length?"There is an unnecessary space between tag name and backward slash '</ ..'.":"Tag '"+b+"' is an invalid name.",f("InvalidTag",e,g(t,i))}const m=l(t,i);if(!1===m)return f("InvalidAttr","Attributes for '"+b+"' have open quote.",g(t,i));let N=m.value;if(i=m.index,"/"===N[N.length-1]){N=N.substring(0,N.length-1);const n=c(N,e);if(!0!==n)return f(n.err.code,n.err.msg,g(t,i-N.length+n.err.line));u=!0}else if(s){if(!m.tagClosed)return f("InvalidTag","Closing tag '"+b+"' doesn't have proper closing.",g(t,i));if(N.trim().length>0)return f("InvalidTag","Closing tag '"+b+"' can't have attributes or invalid starting.",g(t,i));{const e=n.pop();if(b!==e)return f("InvalidTag","Closing tag '"+e+"' is expected inplace of '"+b+"'.",g(t,i));0==n.length&&(h=!0)}}else{const r=c(N,e);if(!0!==r)return f(r.err.code,r.err.msg,g(t,i-N.length+r.err.line));if(!0===h)return f("InvalidXml","Multiple possible root nodes found.",g(t,i));n.push(b),u=!0}for(i++;i<t.length;i++)if("<"===t[i]){if("!"===t[i+1]){i++,i=o(t,i);continue}if("?"!==t[i+1])break;if(i=a(t,++i),i.err)return i}else if("&"===t[i]){const e=d(t,i);if(-1==e)return f("InvalidChar","char '&' is not expected.",g(t,i));i=e}"<"===t[i]&&i--}}var p;return u?!(n.length>0)||f("InvalidXml","Invalid '"+JSON.stringify(n,null,4).replace(/\r?\n/g,"")+"' found.",1):f("InvalidXml","Start tag expected.",1)};function l(t,e){let n="",r="",i=!1;for(;e<t.length;e++){if('"'===t[e]||"'"===t[e])if(""===r)r=t[e];else{if(r!==t[e])continue;r=""}else if(">"===t[e]&&""===r){i=!0;break}n+=t[e]}return""===r&&{value:n,index:e,tagClosed:i}}const u=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function c(t,e){const n=r.getAllMatches(t,u),i={};for(let r=0;r<n.length;r++){if(0===n[r][1].length)return f("InvalidAttr","Attribute '"+n[r][2]+"' has no space in starting.",p(t,n[r][0]));if(void 0===n[r][3]&&!e.allowBooleanAttributes)return f("InvalidAttr","boolean attribute '"+n[r][2]+"' is not allowed.",p(t,n[r][0]));const s=n[r][2];if(!h(s))return f("InvalidAttr","Attribute '"+s+"' is an invalid name.",p(t,n[r][0]));if(i.hasOwnProperty(s))return f("InvalidAttr","Attribute '"+s+"' is repeated.",p(t,n[r][0]));i[s]=1}return!0}function d(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){let n=/\d/;for("x"===t[e]&&(e++,n=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(n))break}return-1}(t,++e);let n=0;for(;e<t.length;e++,n++)if(!(t[e].match(/\w/)&&n<20)){if(";"===t[e])break;return-1}return e}function f(t,e,n){return{err:{code:t,msg:e,line:n}}}function h(t){return r.isName(t)}function g(t,e){return t.substring(0,e).split(/\r?\n/).length}function p(t,e){return t.indexOf(e)+e.length}},elGS:function(t,e,n){"use strict";const r=n("j/LU"),i=n("E1E9"),s=n("E1E9"),a=n("4abu").buildOptions,o=n("cIfH");e.parse=function(t,e,n){if(n){!0===n&&(n={});const e=o.validate(t,n);if(!0!==e)throw Error(e.err.msg)}e=a(e,s.defaultOptions,s.props);const l=i.getTraversalObj(t,e);return r.convertToJson(l,e)},e.convertTonimn=n("vtNb").convert2nimn,e.getTraversalObj=i.getTraversalObj,e.convertToJson=r.convertToJson,e.convertToJsonString=n("t6xR").convertToJsonString,e.validate=o.validate,e.j2xParser=n("p1mf"),e.parseToNimn=function(t,n,r){return e.convertTonimn(e.getTraversalObj(t,r),n,r)}},"j/LU":function(t,e,n){"use strict";const r=n("4abu"),i=function(t,e,n){const s={};if((!t.child||r.isEmptyObject(t.child))&&(!t.attrsMap||r.isEmptyObject(t.attrsMap)))return r.isExist(t.val)?t.val:"";if(r.isExist(t.val)&&("string"!==typeof t.val||""!==t.val&&t.val!==e.cdataPositionChar)){const i=r.isTagNameInArrayMode(t.tagname,e.arrayMode,n);s[e.textNodeName]=i?[t.val]:t.val}r.merge(s,t.attrsMap,e.arrayMode);const a=Object.keys(t.child);for(let o=0;o<a.length;o++){const l=a[o];if(t.child[l]&&t.child[l].length>1){s[l]=[];for(let n in t.child[l])t.child[l].hasOwnProperty(n)&&s[l].push(i(t.child[l][n],e,l))}else{const a=i(t.child[l][0],e,l),o=!0===e.arrayMode&&"object"===typeof a||r.isTagNameInArrayMode(l,e.arrayMode,n);s[l]=o?[a]:a}}return s};e.convertToJson=i},p1mf:function(t,e,n){"use strict";const r=n("4abu").buildOptions,i={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},s=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor"];function a(t){this.options=r(t,i,s),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=g),this.options.cdataTagName?this.isCDATA=p:this.isCDATA=function(){return!1},this.replaceCDATAstr=o,this.replaceCDATAarr=l,this.options.format?(this.indentate=h,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=f,this.buildObjNode=c):(this.buildTextNode=d,this.buildObjNode=u),this.buildTextValNode=d,this.buildObjectNode=u}function o(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function l(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(let n in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[n]+"]]>");return t+this.newLine}function u(t,e,n,r){return n&&!t.includes("<")?this.indentate(r)+"<"+e+n+">"+t+"</"+e+this.tagEndChar:this.indentate(r)+"<"+e+n+this.tagEndChar+t+this.indentate(r)+"</"+e+this.tagEndChar}function c(t,e,n,r){return""!==t?this.buildObjectNode(t,e,n,r):this.indentate(r)+"<"+e+n+"/"+this.tagEndChar}function d(t,e,n,r){return this.indentate(r)+"<"+e+n+">"+this.options.tagValueProcessor(t)+"</"+e+this.tagEndChar}function f(t,e,n,r){return""!==t?this.buildTextValNode(t,e,n,r):this.indentate(r)+"<"+e+n+"/"+this.tagEndChar}function h(t){return this.options.indentBy.repeat(t)}function g(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function p(t){return t===this.options.cdataTagName}a.prototype.parse=function(t){return this.j2x(t,0).val},a.prototype.j2x=function(t,e){let n="",r="";const i=Object.keys(t),s=i.length;for(let a=0;a<s;a++){const s=i[a];if("undefined"===typeof t[s]);else if(null===t[s])r+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if(t[s]instanceof Date)r+=this.buildTextNode(t[s],s,"",e);else if("object"!==typeof t[s]){const i=this.isAttribute(s);i?n+=" "+i+'="'+this.options.attrValueProcessor(""+t[s])+'"':this.isCDATA(s)?t[this.options.textNodeName]?r+=this.replaceCDATAstr(t[this.options.textNodeName],t[s]):r+=this.replaceCDATAstr("",t[s]):s===this.options.textNodeName?t[this.options.cdataTagName]||(r+=this.options.tagValueProcessor(""+t[s])):r+=this.buildTextNode(t[s],s,"",e)}else if(Array.isArray(t[s]))if(this.isCDATA(s))r+=this.indentate(e),t[this.options.textNodeName]?r+=this.replaceCDATAarr(t[this.options.textNodeName],t[s]):r+=this.replaceCDATAarr("",t[s]);else{const n=t[s].length;for(let i=0;i<n;i++){const n=t[s][i];if("undefined"===typeof n);else if(null===n)r+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if("object"===typeof n){const t=this.j2x(n,e+1);r+=this.buildObjNode(t.val,s,t.attrStr,e)}else r+=this.buildTextNode(n,s,"",e)}}else if(this.options.attrNodeName&&s===this.options.attrNodeName){const e=Object.keys(t[s]),r=e.length;for(let i=0;i<r;i++)n+=" "+e[i]+'="'+this.options.attrValueProcessor(""+t[s][e[i]])+'"'}else{const n=this.j2x(t[s],e+1);r+=this.buildObjNode(n.val,s,n.attrStr,e)}}return{attrStr:n,val:r}},t.exports=a},t6xR:function(t,e,n){"use strict";const r=n("4abu"),i=n("4abu").buildOptions,s=n("E1E9"),a=function(t,e,n){let i="{";const s=Object.keys(t.child);for(let r=0;r<s.length;r++){var o=s[r];if(t.child[o]&&t.child[o].length>1){for(var l in i+='"'+o+'" : [ ',t.child[o])i+=a(t.child[o][l],e)+" , ";i=i.substr(0,i.length-1)+" ] "}else i+='"'+o+'" : '+a(t.child[o][0],e)+" ,"}return r.merge(i,t.attrsMap),r.isEmptyObject(i)?r.isExist(t.val)?t.val:"":(r.isExist(t.val)&&("string"!==typeof t.val||""!==t.val&&t.val!==e.cdataPositionChar)&&(i+='"'+e.textNodeName+'" : '+(!0!==(u=t.val)&&!1!==u&&isNaN(u)?'"'+u+'"':u)),","===i[i.length-1]&&(i=i.substr(0,i.length-2)),i+"}");var u};e.convertToJsonString=function(t,e){return(e=i(e,s.defaultOptions,s.props)).indentBy=e.indentBy||"",a(t,e,0)}},ucdA:function(t,e,n){"use strict";const r=n("elGS"),i=t=>{if(void 0===t||null===t)return!1;if(0===(t=t.toString().trim()).length)return!1;if(!0!==r.validate(t))return!1;let e;try{e=r.parse(t)}catch(n){return!1}return!!e&&"svg"in e};t.exports=i,t.exports.default=i},vtNb:function(t,e,n){"use strict";const r=function(t){return String.fromCharCode(t)},i={nilChar:r(176),missingChar:r(201),nilPremitive:r(175),missingPremitive:r(200),emptyChar:r(178),emptyValue:r(177),boundryChar:r(179),objStart:r(198),arrStart:r(204),arrayEnd:r(185)},s=[i.nilChar,i.nilPremitive,i.missingChar,i.missingPremitive,i.boundryChar,i.emptyChar,i.emptyValue,i.arrayEnd,i.objStart,i.arrStart],a=function(t,e,n){if("string"===typeof e)return t&&t[0]&&void 0!==t[0].val?o(t[0].val,e):o(t,e);{const s=void 0===(r=t)?i.missingChar:null===r?i.nilChar:!(r.child&&0===Object.keys(r.child).length&&(!r.attrsMap||0===Object.keys(r.attrsMap).length))||i.emptyChar;if(!0===s){let r="";if(Array.isArray(e)){r+=i.arrStart;const s=e[0],u=t.length;if("string"===typeof s)for(let e=0;e<u;e++){const n=o(t[e].val,s);r=l(r,n)}else for(let e=0;e<u;e++){const i=a(t[e],s,n);r=l(r,i)}r+=i.arrayEnd}else{r+=i.objStart;const s=Object.keys(e);Array.isArray(t)&&(t=t[0]);for(let i in s){const o=s[i];let u;u=!n.ignoreAttributes&&t.attrsMap&&t.attrsMap[o]?a(t.attrsMap[o],e[o],n):o===n.textNodeName?a(t.val,e[o],n):a(t.child[o],e[o],n),r=l(r,u)}}return r}return s}var r},o=function(t){switch(t){case void 0:return i.missingPremitive;case null:return i.nilPremitive;case"":return i.emptyValue;default:return t}},l=function(t,e){return u(e[0])||u(t[t.length-1])||(t+=i.boundryChar),t+e},u=function(t){return-1!==s.indexOf(t)};const c=n("E1E9"),d=n("4abu").buildOptions;e.convert2nimn=function(t,e,n){return n=d(n,c.defaultOptions,c.props),a(t,e,n)}}}]);