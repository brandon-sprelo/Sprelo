(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[334],{6578:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vercel",function(){return r(3169)}])},8045:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(6495).Z,n=r(2648).Z,i=r(1598).Z,s=r(7273).Z,o=i(r(7294)),l=n(r(5443)),c=r(2730),d=r(9309),u=r(9977);r(5086);var m=n(r(1479));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/Sprelo/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e){return void 0!==e.default}function h(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,n,i,s,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===r&&s(!0),null==n?void 0:n.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,i=!1;n.current(a({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}}))}(null==i?void 0:i.current)&&i.current(e)}})}let _=o.forwardRef((e,t)=>{var{imgAttributes:r,heightInt:n,widthInt:i,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:m,fill:f,placeholder:p,loading:h,srcString:_,config:x,unoptimized:v,loader:j,onLoadRef:w,onLoadingCompleteRef:b,setBlurComplete:y,setShowAltText:N,onLoad:E,onError:S}=e,C=s(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return h=m?"lazy":h,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},C,{loading:h,width:i,height:n,decoding:"async","data-nimg":f?"fill":"1",className:c,style:a({},d,u)},r,{ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&g(e,_,p,w,b,y,v))},[_,p,w,b,y,S,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,_,p,w,b,y,v)},onError:e=>{N(!0),"blur"===p&&y(!0),S&&S(e)}})))}),x=o.forwardRef((e,t)=>{let r,n;var i,{src:g,sizes:x,unoptimized:v=!1,priority:j=!1,loading:w,className:b,quality:y,width:N,height:E,fill:S,style:C,onLoad:z,onLoadingComplete:k,placeholder:I="empty",blurDataURL:O,layout:R,objectFit:L,objectPosition:P,lazyBoundary:A,lazyRoot:M}=e,H=s(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let F=o.useContext(u.ImageConfigContext),D=o.useMemo(()=>{let e=f||F||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return a({},e,{allSizes:t,deviceSizes:r})},[F]),B=H,G=B.loader||m.default;delete B.loader;let T="__next_img_default"in G;if(T){if("custom"===D.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=G;G=t=>{let{config:r}=t,a=s(t,["config"]);return e(a)}}if(R){"fill"===R&&(S=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(C=a({},C,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!x&&(x=t)}let W="",V=h(N),q=h(E);if("object"==typeof(i=g)&&(p(i)||void 0!==i.src)){let e=p(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(r=e.blurWidth,n=e.blurHeight,O=O||e.blurDataURL,W=e.src,!S){if(V||q){if(V&&!q){let t=V/e.width;q=Math.round(e.height*t)}else if(!V&&q){let t=q/e.height;V=Math.round(e.width*t)}}else V=e.width,q=e.height}}let U=!j&&("lazy"===w||void 0===w);((g="string"==typeof g?g:W).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,U=!1),D.unoptimized&&(v=!0),T&&g.endsWith(".svg")&&!D.dangerouslyAllowSVG&&(v=!0);let[Z,J]=o.useState(!1),[Q,X]=o.useState(!1),Y=h(y),$=Object.assign(S?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:L,objectPosition:P}:{},Q?{}:{color:"transparent"},C),K="blur"===I&&O&&!Z?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:V,heightInt:q,blurWidth:r,blurHeight:n,blurDataURL:O,objectFit:$.objectFit}),'")')}:{},ee=function(e){let{config:t,src:r,unoptimized:a,width:n,quality:i,sizes:s,loader:o}=e;if(a)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:a,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let a;a=e.exec(r);a)t.push(parseInt(a[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=a[0]*e),kind:"w"}}return{widths:n,kind:"w"}}if("number"!=typeof t)return{widths:a,kind:"w"};let i=[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))];return{widths:i,kind:"x"}}(t,n,s),d=l.length-1;return{sizes:s||"w"!==c?s:"100vw",srcSet:l.map((e,a)=>"".concat(o({config:t,src:r,quality:i,width:e})," ").concat("w"===c?e:a+1).concat(c)).join(", "),src:o({config:t,src:r,quality:i,width:l[d]})}}({config:D,src:g,unoptimized:v,width:V,quality:Y,sizes:x,loader:G}),et=g,er={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},ea=o.useRef(z);o.useEffect(()=>{ea.current=z},[z]);let en=o.useRef(k);o.useEffect(()=>{en.current=k},[k]);let ei=a({isLazy:U,imgAttributes:ee,heightInt:q,widthInt:V,qualityInt:Y,className:b,imgStyle:$,blurStyle:K,loading:w,config:D,fill:S,unoptimized:v,placeholder:I,loader:G,srcString:et,onLoadRef:ea,onLoadingCompleteRef:en,setBlurComplete:J,setShowAltText:X},B);return o.default.createElement(o.default.Fragment,null,o.default.createElement(_,Object.assign({},ei,{ref:t})),j?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},er))):null)});t.default=x,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2730:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:a,blurHeight:n,blurDataURL:i,objectFit:s}=e,o=a||t,l=n||r,c=i.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(a&&n?"1":"20","'/%3E").concat(c,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(i,"'/%3E%3C/svg%3E")}},1479:function(e,t){"use strict";function r(e){let{config:t,src:r,width:a,quality:n}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(a,"&q=").concat(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},3169:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var a=r(5893),n=r(9669),i=r.n(n),s=r(9008),o=r.n(s),l=r(5675),c=r.n(l),d=r(4265),u=r.n(d);function m(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{className:u().main,children:[(0,a.jsxs)("div",{className:u().description,children:[(0,a.jsxs)("p",{children:["Get started by editing\xa0",(0,a.jsx)("code",{className:u().code,children:"src/pages/index.tsx"})]}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["By"," ",(0,a.jsx)(c(),{src:"/vercel.svg",alt:"Vercel Logo",className:u().vercelLogo,width:100,height:24,priority:!0})]})})]}),(0,a.jsxs)("div",{className:u().center,children:[(0,a.jsx)(c(),{className:u().logo,src:"/next.svg",alt:"Next.js Logo",width:180,height:37,priority:!0}),(0,a.jsx)("div",{className:u().thirteen,children:(0,a.jsx)(c(),{src:"/thirteen.svg",alt:"13",width:40,height:31,priority:!0})})]}),(0,a.jsxs)("div",{className:u().grid,children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Docs ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Find in-depth information about Next.js features and\xa0API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Learn ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Learn about Next.js in an interactive course with\xa0quizzes!"})]}),(0,a.jsxs)("a",{href:"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Templates ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Discover and deploy boilerplate example Next.js\xa0projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:u().card,target:"_blank",rel:"noopener noreferrer",children:[(0,a.jsxs)("h2",{className:i().className,children:["Deploy ",(0,a.jsx)("span",{children:"->"})]}),(0,a.jsx)("p",{className:i().className,children:"Instantly deploy your Next.js site to a shareable URL with\xa0Vercel."})]})]})]})]})}},9669:function(e){e.exports={style:{fontFamily:"'__Inter_2fb26a', '__Inter_Fallback_2fb26a'",fontStyle:"normal"},className:"__className_2fb26a"}},4265:function(e){e.exports={main:"Home_main__EtNt2",description:"Home_description__Qwq1f",code:"Home_code__aGV0U",grid:"Home_grid__c_g6N",card:"Home_card__7oz7W",center:"Home_center__V0nxp",logo:"Home_logo__80mSr",thirteen:"Home_thirteen__ocdUI",rotate:"Home_rotate__99GkW",content:"Home_content___fOQz",vercelLogo:"Home_vercelLogo__lhIxO"}},9008:function(e,t,r){e.exports=r(5443)},5675:function(e,t,r){e.exports=r(8045)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=6578)}),_N_E=e.O()}]);