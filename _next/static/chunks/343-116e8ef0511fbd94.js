(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[343],{8045:function(e,t,n){"use strict";var r=n(9361).default,i=n(4941).Z,o=n(3929).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.src,n=e.sizes,a=e.unoptimized,f=void 0!==a&&a,p=e.priority,y=void 0!==p&&p,S=e.loading,k=e.lazyRoot,I=void 0===k?null:k,E=e.lazyBoundary,P=e.className,_=e.quality,R=e.width,L=e.height,M=e.style,C=e.objectFit,q=e.objectPosition,N=e.onLoadingComplete,D=e.placeholder,Z=void 0===D?"empty":D,W=e.blurDataURL,B=m(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),U=c.useContext(d.ImageConfigContext),F=c.useMemo((function(){var e=b||U||l.imageConfigDefault,t=o(e.deviceSizes).concat(o(e.imageSizes)).sort((function(e,t){return e-t})),n=e.deviceSizes.sort((function(e,t){return e-t}));return g({},e,{allSizes:t,deviceSizes:n})}),[U]),H=B,V=n?"responsive":"intrinsic";"layout"in H&&(H.layout&&(V=H.layout),delete H.layout);var T=A;if("loader"in H){if(H.loader){var G=H.loader;T=function(e){e.config;var t=m(e,["config"]);return G(t)}}delete H.loader}var J="";if(function(e){return"object"===typeof e&&(O(e)||function(e){return void 0!==e.src}(e))}(t)){var Q=O(t)?t.default:t;if(!Q.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(Q)));if(W=W||Q.blurDataURL,J=Q.src,(!V||"fill"!==V)&&(L=L||Q.height,R=R||Q.width,!Q.height||!Q.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(Q)))}t="string"===typeof t?t:J;var $=z(R),K=z(L),X=z(_),Y=!y&&("lazy"===S||"undefined"===typeof S);(t.startsWith("data:")||t.startsWith("blob:"))&&(f=!0,Y=!1);v.has(t)&&(Y=!1);h&&(f=!0);var ee,te=i(c.useState(!1),2),ne=te[0],re=te[1],ie=i(s.useIntersection({rootRef:I,rootMargin:E||"200px",disabled:!Y}),3),oe=ie[0],ae=ie[1],ce=ie[2],ue=!Y||ae,le={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},se={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},de=!1,fe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:C,objectPosition:q};0;var ge=Object.assign({},M,fe),pe="blur"!==Z||ne?{}:{backgroundSize:C||"cover",backgroundPosition:q||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(W,'")')};if("fill"===V)le.display="block",le.position="absolute",le.top=0,le.left=0,le.bottom=0,le.right=0;else if("undefined"!==typeof $&&"undefined"!==typeof K){var me=K/$,ye=isNaN(me)?"100%":"".concat(100*me,"%");"responsive"===V?(le.display="block",le.position="relative",de=!0,se.paddingTop=ye):"intrinsic"===V?(le.display="inline-block",le.position="relative",le.maxWidth="100%",de=!0,se.maxWidth="100%",ee="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat($,"%27%20height=%27").concat(K,"%27/%3e")):"fixed"===V&&(le.display="inline-block",le.position="relative",le.width=$,le.height=K)}else 0;var he={src:w,srcSet:void 0,sizes:void 0};ue&&(he=j({config:F,src:t,unoptimized:f,layout:V,width:$,quality:X,sizes:n,loader:T}));var be=t;0;var ve,we="imagesrcset",Se="imagesizes";we="imageSrcSet",Se="imageSizes";var Oe=(r(ve={},we,he.srcSet),r(ve,Se,he.sizes),ve),je=c.default.useLayoutEffect,ze=c.useRef(N),Ae=c.useRef(t);c.useEffect((function(){ze.current=N}),[N]),je((function(){Ae.current!==t&&(ce(),Ae.current=t)}),[ce,t]);var ke=g({isLazy:Y,imgAttributes:he,heightInt:K,widthInt:$,qualityInt:X,layout:V,className:P,imgStyle:ge,blurStyle:pe,loading:S,config:F,unoptimized:f,placeholder:Z,loader:T,srcString:be,onLoadingCompleteRef:ze,setBlurComplete:re,setIntersection:oe,isVisible:ue,noscriptSizes:n},H);return c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{style:le},de?c.default.createElement("span",{style:se},ee?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:ee}):null):null,c.default.createElement(x,Object.assign({},ke))),y?c.default.createElement(u.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+he.src+he.srcSet+he.sizes,rel:"preload",as:"image",href:he.srcSet?void 0:he.src},Oe))):null)};var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(7294)),u=(a=n(5443))&&a.__esModule?a:{default:a},l=n(9309),s=n(7190),d=n(9977),f=(n(3794),n(2392));function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function p(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function m(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1}||{},h=y.experimentalUnoptimized,b={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"",loader:"akamai",experimentalLayoutRaw:!1},v=new Set,w=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var S=new Map([["default",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality;0;if(n.endsWith(".svg")&&!t.dangerouslyAllowSVG)return n;return"".concat(f.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(n),"&w=").concat(r,"&q=").concat(i||75)}],["imgix",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=new URL("".concat(t.path).concat(I(n))),a=o.searchParams;a.set("auto",a.get("auto")||"format"),a.set("fit",a.get("fit")||"max"),a.set("w",a.get("w")||r.toString()),i&&a.set("q",i.toString());return o.href}],["cloudinary",function(e){var t=e.config,n=e.src,r=e.width,i=e.quality,o=["f_auto","c_limit","w_"+r,"q_"+(i||"auto")].join(",")+"/";return"".concat(t.path).concat(o).concat(I(n))}],["akamai",function(e){var t=e.config,n=e.src,r=e.width;return"".concat(t.path).concat(I(n),"?imwidth=").concat(r)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function O(e){return void 0!==e.default}function j(e){var t=e.config,n=e.src,r=e.unoptimized,i=e.layout,a=e.width,c=e.quality,u=e.sizes,l=e.loader;if(r)return{src:n,srcSet:void 0,sizes:void 0};var s=function(e,t,n,r){var i=e.deviceSizes,a=e.allSizes;if(r&&("fill"===n||"responsive"===n)){for(var c,u=/(^|\s)(1?\d?\d)vw/g,l=[];c=u.exec(r);c)l.push(parseInt(c[2]));if(l.length){var s,d=.01*(s=Math).min.apply(s,o(l));return{widths:a.filter((function(e){return e>=i[0]*d})),kind:"w"}}return{widths:a,kind:"w"}}return"number"!==typeof t||"fill"===n||"responsive"===n?{widths:i,kind:"w"}:{widths:o(new Set([t,2*t].map((function(e){return a.find((function(t){return t>=e}))||a[a.length-1]})))),kind:"x"}}(t,a,i,u),d=s.widths,f=s.kind,g=d.length-1;return{sizes:u||"w"!==f?u:"100vw",srcSet:d.map((function(e,r){return"".concat(l({config:t,src:n,quality:c,width:e})," ").concat("w"===f?e:r+1).concat(f)})).join(", "),src:l({config:t,src:n,quality:c,width:d[g]})}}function z(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,n=(null==(t=e.config)?void 0:t.loader)||"default",r=S.get(n);if(r)return r(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(l.VALID_LOADERS.join(", "),". Received: ").concat(n))}function k(e,t,n,r,i,o){e&&e.src!==w&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(v.add(t),"blur"===r&&o(!0),null==i?void 0:i.current)){var n=e.naturalWidth,a=e.naturalHeight;i.current({naturalWidth:n,naturalHeight:a})}})))}var x=function(e){var t=e.imgAttributes,n=(e.heightInt,e.widthInt),r=e.qualityInt,i=e.layout,o=e.className,a=e.imgStyle,u=e.blurStyle,l=e.isLazy,s=e.placeholder,d=e.loading,f=e.srcString,p=e.config,y=e.unoptimized,h=e.loader,b=e.onLoadingCompleteRef,v=e.setBlurComplete,w=e.setIntersection,S=e.onLoad,O=e.onError,z=(e.isVisible,e.noscriptSizes),A=m(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return d=l?"lazy":d,c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},A,t,{decoding:"async","data-nimg":i,className:o,style:g({},a,u),ref:c.useCallback((function(e){w(e),(null==e?void 0:e.complete)&&k(e,f,0,s,b,v)}),[w,f,i,s,b,v]),onLoad:function(e){k(e.currentTarget,f,0,s,b,v),S&&S(e)},onError:function(e){"blur"===s&&v(!0),O&&O(e)}})),(l||"blur"===s)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},A,j({config:p,src:f,unoptimized:y,layout:i,width:n,quality:r,sizes:z,loader:h}),{decoding:"async","data-nimg":i,style:a,className:o,loading:d}))))};function I(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!a,s=i.useRef(),d=r(i.useState(!1),2),f=d[0],g=d[1],p=r(i.useState(null),2),m=p[0],y=p[1];i.useEffect((function(){if(a){if(s.current&&(s.current(),s.current=void 0),l||f)return;return m&&m.tagName&&(s.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=u.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},u.push(n),c.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=u.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&u.splice(t,1)}}}(m,(function(e){return e&&g(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==s.current||s.current(),s.current=void 0}}if(!f){var e=o.requestIdleCallback((function(){return g(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[m,l,n,t,f]);var h=i.useCallback((function(){g(!1)}),[]);return[y,f,h]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver;var c=new Map,u=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,n){e.exports=n(8045)},943:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n.d(t,{Z:function(){return r}})},3375:function(e,t,n){"use strict";function r(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n.d(t,{Z:function(){return r}})},9396:function(e,t,n){"use strict";function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}n.d(t,{Z:function(){return r}})},9534:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return r}})},828:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3375);var i=n(1566);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||(0,r.Z)(e,t)||(0,i.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1566:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(943);function i(e,t){if(e){if("string"===typeof e)return(0,r.Z)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(e,t):void 0}}}}]);