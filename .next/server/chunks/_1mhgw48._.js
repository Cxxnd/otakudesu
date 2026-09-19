module.exports=[10618,e=>{"use strict";let a,r=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),t=e=>r(e).replace(/"/g,"&quot;"),o=e=>e?` nonce="${t(e)}"`:"",c=e=>`[${e.map(e=>"function"==typeof e?e.toString():JSON.stringify(e)).join(", ")}]`;var n,l=`
/* basic theme */
.dark-mode {
  --scalar-color-1: rgba(255, 255, 255, 0.9);
  --scalar-color-2: rgba(255, 255, 255, 0.62);
  --scalar-color-3: rgba(255, 255, 255, 0.44);
  --scalar-color-accent: #3070ec;

  --scalar-background-1: #000000;
  --scalar-background-2: #1a1a1a;
  --scalar-background-3: #2a2828;
  --scalar-background-accent: transparent;

  --scalar-border-color: rgba(255, 255, 255, 0.1);
}

.light-mode .dark-mode,
.light-mode {
  --scalar-color-1: #1b1b1b;
  --scalar-color-2: #757575;
  --scalar-color-3: #8e8e8e;
  --scalar-color-accent: #3070ec;

  --scalar-background-1: #fff;
  --scalar-background-2: #fafafa;
  --scalar-background-3: #e7e7e7;
  --scalar-background-accent: transparent;

  --scalar-border-color: rgba(0, 0, 0, 0.1);
}
.light-mode .scalar-card {
  --scalar-background-1: #fff;
  --scalar-background-2: #fff !important;
  --scalar-background-3: #fff !important;
}
.dark-mode .scalar-card {
  --scalar-background-1: #000000;
  --scalar-background-2: #000000 !important;
  --scalar-background-3: #000000 !important;
}
.light-mode .examples .scalar-card .scalar-card-header {
  --scalar-background-2: #fafafa;
}
.dark-mode .examples .scalar-card .scalar-card-header {
  --scalar-background-2: #1a1a1a;
  --scalar-border-color: #1a1a1a;
}
/* Document header */
.light-mode .t-doc__header,
.dark-mode .t-doc__header {
  --scalar-header-background-1: rgba(255,255,255,.8);
  --scalar-header-border-color: var(--scalar-border-color);
  --scalar-header-color-1: var(--scalar-color-1);
  --scalar-header-color-2: var(--scalar-color-2);
  --scalar-header-background-toggle: var(--scalar-color-3);
  --scalar-header-call-to-action-color: var(--scalar-color-accent);
  backdrop-filter: saturate(180%) blur(5px);
}

.dark-mode .t-doc__header {
  --scalar-header-background-1: rgba(0,0,0,.5);
}
/* Document Sidebar */
.light-mode .t-doc__sidebar,
.dark-mode .t-doc__sidebar {
  --scalar-sidebar-background-1: var(--scalar-background-1);
  --scalar-sidebar-item-hover-color: var(--scalar-sidebar-color-1);
  --scalar-sidebar-item-hover-background: transparent;
  --scalar-sidebar-item-active-background: var(--scalar-background-accent);
  --scalar-sidebar-border-color: transparent;
  --scalar-sidebar-color-1: var(--scalar-color-1);
  --scalar-sidebar-color-2: var(--scalar-color-2);
  --scalar-sidebar-color-active: var(--scalar-color-accent);
  --scalar-sidebar-search-background: var(--scalar-background-2);
  --scalar-sidebar-search-border-color: var(--scalar-background-2);
  --scalar-sidebar-search-color: var(--scalar-color-3);
  --scalar-sidebar-indent-border: var(--scalar-border-color);
  --scalar-sidebar-indent-border-active: #6aacf8;
}
.api-client-drawer .t-doc__sidebar {
  --scalar-sidebar-border-color: var(--scalar-border-color);
}
/* advanced */
.light-mode .dark-mode,
.light-mode {
  --scalar-button-1: rgb(49 53 56);
  --scalar-button-1-color: #fff;
  --scalar-button-1-hover: rgb(28 31 33);

  --scalar-color-green: #417942;
  --scalar-color-red: #ae3763;
  --scalar-color-yellow: #edbe20;
  --scalar-color-blue: #2b66cf;
  --scalar-color-orange: #cf7a2b;
  --scalar-color-purple: #6e27b5;

  --scalar-scrollbar-color: rgba(0, 0, 0, 0.18);
  --scalar-scrollbar-color-active: rgba(0, 0, 0, 0.36);
}
.dark-mode {
  --scalar-button-1: #f6f6f6;
  --scalar-button-1-color: #000;
  --scalar-button-1-hover: #e7e7e7;

  --scalar-color-green: #7abe7b;
  --scalar-color-red: #e5698f;
  --scalar-color-yellow: #f8ea68;
  --scalar-color-blue: #68a6f8;
  --scalar-color-orange: #f89c68;
  --scalar-color-purple: #b57de9;

  --scalar-scrollbar-color: rgba(255, 255, 255, 0.24);
  --scalar-scrollbar-color-active: rgba(255, 255, 255, 0.48);
}
.sidebar .sidebar-indent-nested .sidebar-heading {
  padding-right: 0;
}
.sidebar-search-key {
  background: var(--scalar-background-1) !important;
  border: 1px solid var(--scalar-border-color);
}
`;let s=(n={url:"/api/openapi.json",pageTitle:"Otakudesu Community API — Reference",cdn:"/vendor/scalar-standalone.js",theme:"none",darkMode:!0,hideClientButton:!0,metaData:{title:"Otakudesu Community API — Reference",description:"Interactive reference for every endpoint: anime, comics, movies, live TV, radio, news and search."}},a={_integration:"nextjs",...n},()=>{let{cdn:e,pageTitle:n,nonce:s,...i}=a;return new Response(function(e,a=""){var n,l,s,i;let d,u,p,h,{config:b,pageTitle:g,cdn:m,nonce:f}=e,v=r(g??"Scalar API Reference"),{customCss:R,theme:k,bundle:y,...C}=(Array.isArray(b)?b[0]:b)??{},w=e.bundle??y,A=("function"==typeof(d={...{...C,...k?{theme:k}:{},...void 0!==R?{customCss:R}:{}}}).content&&(d.content=d.content()),d.content&&d.url&&delete d.content,d),E=f?`
    <meta property="csp-nonce" content="${t(f)}" />`:"";return`<!doctype html>
<html>
  <head>
    <title>${v}</title>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1" />${E}${h=[],(A.customCss&&(h.push("/* Custom CSS */"),h.push(A.customCss)),!A.theme&&a&&(h.push("/* Custom Theme */"),h.push(a)),0===h.length)?"":`
    <style type="text/css"${o(f)}>
      ${((e,a=2,r=!1)=>{let t=" ".repeat(a);return e.split("\n").map((e,a)=>0!==a||r?`${t}${e}`:e).join("\n")})(h.join("\n\n"),6)}
    </style>`}
  </head>
  <body>
    <div id="app"></div>${n=A,l=m,s=f,i=w,u=function(e){let a={...e},r=[];for(let[t,o]of Object.entries(e))"function"==typeof o?(r.push(`"${t}": ${o.toString()}`),delete a[t]):Array.isArray(o)&&o.some(e=>"function"==typeof e)&&(r.push(`"${t}": ${c(o)}`),delete a[t]);let t=JSON.stringify(a,null,2),o=t.split("\n").map((e,a)=>0===a?e:`      ${e}`).join("\n");if(0===r.length)return o;if("{}"===t)return`{
        ${r.join(",\n        ")}
      }`;let n=o.split("\n").slice(0,-1).join("\n");return`${n},
        ${r.join(",\n        ")}
      }`}(n),p=o(s),!1===i||void 0===i&&(void 0!==l||s)?`
    <!-- Load the Script -->
    <script src="${l??"https://cdn.jsdelivr.net/npm/@scalar/api-reference"}"${p}></script>

    <!-- Initialize the Scalar API Reference -->
    <script type="text/javascript"${p}>
      Scalar.createApiReference('#app', ${u})
    </script>`:`
    <!-- Load the Scalar API Reference -->
    <script type="module"${p}>
      import { createApiReference } from '${"string"==typeof i?i:"https://cdn.jsdelivr.net/npm/@scalar/api-reference/esm.js"}'

      createApiReference('#app', ${u})
    </script>`}
  </body>
</html>`}({config:i,pageTitle:n,cdn:e,nonce:s},l),{status:200,headers:{"Content-Type":"text/html"}})});e.s(["GET",0,s],10618)},34118,e=>{"use strict";var a=e.i(47909),r=e.i(74017),t=e.i(96250),o=e.i(59756),c=e.i(61916),n=e.i(74677),l=e.i(69741),s=e.i(16795),i=e.i(87718),d=e.i(95169),u=e.i(47587),p=e.i(66012),h=e.i(70101),b=e.i(26937),g=e.i(10372),m=e.i(93695);e.i(52474);var f=e.i(220);let v=new a.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/docs/route",pathname:"/docs",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/src/app/docs/route.ts",nextConfigOutput:"standalone",userland:()=>e.r(10618),...{}}),{workAsyncStorage:R,workUnitAsyncStorage:k,serverHooks:y}=v;async function C(e,a,t){t.requestMeta&&(0,o.setRequestMeta)(e,t.requestMeta),v.isDev&&(0,o.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let R="/docs/route";R=R.replace(/\/index$/,"")||"/";let k=await v.prepare(e,a,{srcPage:R,multiZoneDraftMode:!1});if(!k)return a.statusCode=400,a.end("Bad Request"),null==t.waitUntil||t.waitUntil.call(t,Promise.resolve()),null;let{buildId:y,deploymentId:C,params:w,nextConfig:A,parsedUrl:E,isDraftMode:x,prerenderManifest:S,routerServerContext:T,isOnDemandRevalidate:_,revalidateOnlyGenerated:$,resolvedPathname:P,clientReferenceManifest:N,serverActionsManifest:O}=k,I=(0,l.normalizeAppPath)(R),j=!!(S.dynamicRoutes[I]||S.routes[P]),q=async()=>((null==T?void 0:T.render404)?await T.render404(e,a,E,!1):a.end("This page could not be found"),null);if(j&&!x){let e=!!S.routes[P],a=S.dynamicRoutes[I];if(a&&!1===a.fallback&&!e){if(A.adapterPath)return await q();throw new m.NoFallbackError}}let H=null;!j||v.isDev||x||(H="/index"===(H=P)?"/":H);let M=!0===v.isDev||!j,D=j&&!M;O&&N&&(0,n.setManifestsSingleton)({page:R,clientReferenceManifest:N,serverActionsManifest:O});let U=e.method||"GET",L=(0,c.getTracer)(),F=L.getActiveScopeSpan(),K=!!(null==T?void 0:T.isWrappedByNextServer),B=!!(0,o.getRequestMeta)(e,"minimalMode"),G=(0,o.getRequestMeta)(e,"incrementalCache")||await v.getIncrementalCache(e,A,S,B);null==G||G.resetRequestCache(),globalThis.__incrementalCache=G;let V={params:w,previewProps:S.preview,renderOpts:{experimental:{authInterrupts:!!A.experimental.authInterrupts,useCacheTimeout:A.experimental.useCacheTimeout},cacheComponents:!!A.cacheComponents,validationLevel:A.experimental.instantInsights.validationLevel,supportsDynamicResponse:M,incrementalCache:G,hmrRefreshHash:(0,o.getRequestMeta)(e,"hmrRefreshHash"),cacheLifeProfiles:A.cacheLife,staticPageGenerationTimeout:A.staticPageGenerationTimeout,waitUntil:t.waitUntil,onClose:e=>{a.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(a,r,t,o)=>v.onRequestError(e,a,t,o,T)},sharedContext:{buildId:y,deploymentId:C}},X=new s.NodeNextRequest(e),z=new s.NodeNextResponse(a),J=i.NextRequestAdapter.fromNodeNextRequest(X,(0,i.signalFromNodeResponse)(a)),W=async({previousCacheEntry:r})=>{try{if(!B&&_&&$&&!r)return a.statusCode=404,a.setHeader("x-nextjs-cache","REVALIDATED"),a.end("This page could not be found"),null;let o=await v.handle(J,V);e.fetchMetrics=V.renderOpts.fetchMetrics;let c=V.renderOpts.pendingWaitUntil;c&&t.waitUntil&&(t.waitUntil(c),c=void 0);let n=V.renderOpts.collectedTags;if(!j)return await (0,p.sendResponse)(X,z,o,c),null;{let e=await o.blob(),a=(0,h.toNodeOutgoingHttpHeaders)(o.headers);n&&(a[g.NEXT_CACHE_TAGS_HEADER]=n),!a["content-type"]&&e.type&&(a["content-type"]=e.type);let r=void 0!==V.renderOpts.collectedRevalidate&&!(V.renderOpts.collectedRevalidate>=g.INFINITE_CACHE)&&V.renderOpts.collectedRevalidate,t=void 0===V.renderOpts.collectedExpire||V.renderOpts.collectedExpire>=g.INFINITE_CACHE?!1!==r&&r>0?A.expireTime:void 0:V.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:o.status,body:Buffer.from(await e.arrayBuffer()),headers:a},cacheControl:{revalidate:r,expire:t}}}}catch(a){throw(null==r?void 0:r.isStale)&&await v.onRequestError(e,a,{routerKind:"App Router",routePath:R,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:_})},!1,T),a}},Z=async(o,n)=>{try{var l,s;let o=await v.handleResponse({req:e,nextConfig:A,cacheKey:H,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:_,revalidateOnlyGenerated:$,responseGenerator:W,waitUntil:t.waitUntil,isMinimalMode:B});if(!j)return;if((null==o||null==(l=o.value)?void 0:l.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==o||null==(s=o.value)?void 0:s.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});B||a.setHeader("x-nextjs-cache",_?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),x&&a.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,h.fromNodeOutgoingHttpHeaders)(o.value.headers);B&&j||c.delete(g.NEXT_CACHE_TAGS_HEADER),!o.cacheControl||a.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,b.getCacheControlHeader)(o.cacheControl)),await (0,p.sendResponse)(X,z,new Response(o.value.body,{headers:c,status:o.value.status||200}));return}catch(a){if(a instanceof m.NoFallbackError||await v.onRequestError(e,a,{routerKind:"App Router",routePath:I,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:D,isOnDemandRevalidate:_})},!1,T),j)throw a;await (0,p.sendResponse)(X,z,new Response(null,{status:500}));return}finally{(()=>{if(!o)return;let e=a.statusCode;o.setAttributes({"http.status_code":e,"next.rsc":!1}),e&&e>=500&&(o.setStatus({code:c.SpanStatusCode.ERROR}),o.setAttribute("error.type",e.toString()));let r=L.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==d.BaseServerSpan.handleRequest)return console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let t=r.get("next.route")||I,l=`${U} ${t}`;o.setAttributes({"next.route":t,"http.route":t,"next.span_name":l}),o.updateName(l),n&&n!==o&&(n.setAttribute("http.route",t),n.updateName(l))})()}};if(K&&F)await Z(F,void 0);else{let a=L.getActiveScopeSpan();await L.withPropagatedContext(e.headers,()=>L.trace(d.BaseServerSpan.handleRequest,{spanName:`${U} ${R}`,kind:c.SpanKind.SERVER,attributes:{"http.method":U,"http.target":e.url}},e=>Z(e,a)),void 0,!K)}}e.s(["handler",0,C,"patchFetch",0,function(){return(0,t.patchFetch)({workAsyncStorage:R,workUnitAsyncStorage:k})},"routeModule",0,v,"serverHooks",0,y,"workAsyncStorage",0,R,"workUnitAsyncStorage",0,k])}];

//# sourceMappingURL=_1mhgw48._.js.map