import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_CUAtaWLC.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_qcOAErUz.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/project/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send-email","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send-email\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send-email","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send-email.js","pathname":"/api/send-email","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const i=document.querySelector(\"header\");window.addEventListener(\"scroll\",()=>{window.scrollY>50?i.classList.add(\"scrolled\"):i.classList.remove(\"scrolled\")});const o=document.querySelector(\".mobile-menu-btn\"),c=document.querySelector(\"nav\"),m=document.querySelectorAll(\"nav a\");o.addEventListener(\"click\",()=>{o.classList.toggle(\"active\"),c.classList.toggle(\"active\"),document.body.style.overflow=c.classList.contains(\"active\")?\"hidden\":\"\"});m.forEach(t=>{t.addEventListener(\"click\",()=>{o.classList.remove(\"active\"),c.classList.remove(\"active\"),document.body.style.overflow=\"\"})});document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.querySelectorAll(\".faq-question\");t.forEach(e=>{e.addEventListener(\"click\",()=>{t.forEach(n=>{n!==e&&n.classList.contains(\"active\")&&(n.classList.remove(\"active\"),n.nextElementSibling.style.maxHeight=\"0\")}),e.classList.toggle(\"active\");const s=e.nextElementSibling;e.classList.contains(\"active\")?s.style.maxHeight=s.scrollHeight+\"px\":s.style.maxHeight=\"0\"})}),t.length>0&&t[0].click()});document.addEventListener(\"DOMContentLoaded\",()=>{const t=document.getElementById(\"contactForm\"),e=document.getElementById(\"submitButton\"),s=document.getElementById(\"statusMessage\");t&&e&&t.addEventListener(\"submit\",async n=>{n.preventDefault(),e.textContent=\"Göndərilir...\",e.disabled=!0;try{const a=document.getElementById(\"name\").value,r=document.getElementById(\"email\").value,d=document.getElementById(\"message\").value,l=await(await fetch(\"/api/send-email\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify({name:a,email:r,message:d})})).json();if(l.success)e.textContent=\"Mesaj Gönderildi\",e.style.backgroundColor=\"#4CAF50\",s.textContent=\"Mesajınız uğurla göndərildi!\",s.className=\"status-message success\",t.reset();else throw new Error(l.message||\"Mesaj göndərilmədi\")}catch(a){console.error(\"Error:\",a),e.textContent=\"Xəta\",e.style.backgroundColor=\"#F44336\",s.textContent=\"Mesaj göndərilmədi. Zəhmət olmasa bir az sonra yenidən cəhd edin.\",s.className=\"status-message error\"}setTimeout(()=>{e.textContent=\"Mesaj Göndər\",e.disabled=!1,e.style.backgroundColor=\"\",setTimeout(()=>{s.className=\"status-message\"},5e3)},5e3)})});\n"}],"styles":[{"type":"external","src":"/_astro/index.DMMiWiyv.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/project/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/send-email@_@js":"pages/api/send-email.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","/home/project/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_nvxA-fvX.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Cm2jMOgU.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DMMiWiyv.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"n4ow7usRVZN66rScA2fnIEDAvlywTR9fOxPOkLb3sBI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
