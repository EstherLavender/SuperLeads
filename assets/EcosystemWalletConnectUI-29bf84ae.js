import{cW as L,aH as a,a$ as h,bt as r,bd as k,aJ as m,b1 as w,aR as S,aO as u,cf as y,ce as B,aG as v,aK as s,b0 as f,cg as x,ch as z,cm as I,cn as A,aZ as U}from"./index-00247e36.js";import{C as b,u as O}from"./useInAppWalletLocale-da685349.js";import{O as P,P as W,S as T}from"./SocialLogin-d5fc8491.js";import"./oauth-4b1c8ebb.js";import"./index-2b7ae602.js";import"./passkeys-11534054.js";function C(e){var c,n,l;const i=L(e.wallet.id);return a(h,{onBack:e.onBack,title:a(r,{children:i.isLoading?a(k,{height:"24px",width:"200px"}):m(r,{children:[(c=i.data)!=null&&c.image_id?a(w,{src:(n=i.data)==null?void 0:n.image_id,style:{borderRadius:S.sm},width:u.md,height:u.md,client:e.client}):null,a(y,{children:(l=i.data)==null?void 0:l.name})]})}),leftAligned:!0})}function H(e){const i=e.size==="compact",{initialScreen:c,screen:n}=B(),[l,t]=v.useState(!1),o=n===e.wallet&&c===e.wallet?void 0:e.goBack;return m(s,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[e.isLinking?a(h,{title:e.connectLocale.manageWallet.linkProfile,onBack:o}):a(C,{client:e.client,onBack:i?o:void 0,wallet:e.wallet}),a(f,{y:"lg"}),a(s,{expand:!0,flex:"column",center:"y",p:i?void 0:"lg",children:a(b,{disabled:e.meta.requireApproval&&!l,...e})}),i&&(e.meta.showThirdwebBranding!==!1||e.meta.termsOfServiceUrl||e.meta.privacyPolicyUrl)&&a(f,{y:"xl"}),m(s,{flex:"column",gap:"lg",children:[a(x,{termsOfServiceUrl:e.meta.termsOfServiceUrl,privacyPolicyUrl:e.meta.privacyPolicyUrl,locale:e.connectLocale.agreement,requireApproval:e.meta.requireApproval,onApprove:()=>{t(!l)},isApproved:l}),e.meta.showThirdwebBranding!==!1&&a(z,{})]})]})}function K(e){const i=I(),c=A(),n=i,l=e.connectLocale.id,t=O(l);if(!t)return a(U,{});const o=e.size==="compact"?e.goBack:()=>{c({})},d=()=>{e.done(),c({})},g=n!=null&&n.emailLogin?{email:n.emailLogin}:n!=null&&n.phoneLogin?{phone:n.phoneLogin}:void 0;return g?a(P,{userInfo:g,locale:t,done:d,goBack:o,wallet:e.wallet,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):n!=null&&n.passkeyLogin?a(W,{locale:e.connectLocale,wallet:e.wallet,done:d,onBack:o,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):n!=null&&n.socialLogin?a(T,{socialAuth:n.socialLogin.type,locale:t,done:d,goBack:o,wallet:e.wallet,state:n,chain:e.chain,client:e.client,size:e.size,connectLocale:e.connectLocale,isLinking:e.isLinking}):a(H,{select:()=>{},locale:t,done:d,goBack:e.goBack,wallet:e.wallet,chain:e.chain,client:e.client,size:e.size,connectLocale:e.connectLocale,meta:e.meta,isLinking:e.isLinking})}export{K as default};
