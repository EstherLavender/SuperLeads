import{a as s,cu as c}from"./index-00247e36.js";const p=r=>{if(!c.includes(r)&&r!=="wallet")throw new Error(`Unknown auth option ${r}`);switch(r){case"wallet":return"siwe";default:return r}},u=({authOption:r,client:n,ecosystem:e,mode:o="popup",redirectUrl:t})=>{if(o==="popup"&&t)throw new Error("Redirect URL is not supported for popup mode");if(o==="window"&&!t)throw new Error("Redirect URL is required for window mode");const l=p(r);let a=`${s("inAppWallet")}/api/2024-05-05/login/${l}?clientId=${n.clientId}`;if(e!=null&&e.partnerId?a=`${a}&ecosystemId=${e.id}&ecosystemPartnerId=${e.partnerId}`:e&&(a=`${a}&ecosystemId=${e.id}`),o!=="popup"){const i=new URL(t||window.location.href);i.searchParams.set("walletId",(e==null?void 0:e.id)||"inApp"),i.searchParams.set("authProvider",r),a=`${a}&redirectUrl=${encodeURIComponent(i.toString())}`}return a},h=({authOption:r,client:n,ecosystem:e})=>{const o=p(r);let t=`${s("inAppWallet")}/api/2024-05-05/login/${o}/callback?clientId=${n.clientId}`;return e!=null&&e.partnerId?t=`${t}&ecosystemId=${e.id}&ecosystemPartnerId=${e.partnerId}`:e&&(t=`${t}&ecosystemId=${e.id}`),t},f="width=350, height=500",w=({isWindowOpenedByFn:r,win:n,closeOpenedWindow:e})=>{r?n==null||n.close():n&&e?e(n):n&&n.close()},I=r=>{const n=u({...r,mode:r.mode||"redirect"});r.mode==="redirect"?window.location.href=n:window.open(n)},$=async r=>{let n=r.openedWindow,e=!1;if(n||(n=window.open(u({...r,mode:"popup"}),`Login to ${r.authOption}`,f),e=!0),!n)throw new Error("Something went wrong opening pop-up");return await new Promise((t,l)=>{const a=window.setInterval(async()=>{n.closed&&(clearInterval(a),window.removeEventListener("message",i),l(new Error("User closed login window")))},1e3),i=async d=>{if(d.origin===s("inAppWallet")){if(typeof d.data!="object"){l(new Error("Invalid event data"));return}switch(d.data.eventType){case"oauthSuccessResult":{window.removeEventListener("message",i),clearInterval(a),w({isWindowOpenedByFn:e,win:n,closeOpenedWindow:r.closeOpenedWindow}),d.data.authResult&&t(d.data.authResult);break}case"oauthFailureResult":{window.removeEventListener("message",i),clearInterval(a),w({isWindowOpenedByFn:e,win:n,closeOpenedWindow:r.closeOpenedWindow}),l(new Error(d.data.errorString));break}}}};window.addEventListener("message",i)})};export{h as a,$ as b,u as g,I as l};
