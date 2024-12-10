import{ce as I,aG as f,aJ as w,aK as L,bt as k,aH as n,a$ as A,b1 as v,aO as y,cf as U,b0 as W,cg as H,ch as O,ci as P,aZ as b,cj as T,ck as D,b3 as E,cl as M,bG as F,cm as j,cn as q}from"./index-00247e36.js";import{E as R,L as G,O as K,P as J,S as V}from"./SocialLogin-d5fc8491.js";import{C as Z,u as $}from"./useInAppWalletLocale-da685349.js";import N from"./AllWalletsUI-9c9041cf.js";import"./index-2b7ae602.js";import"./passkeys-11534054.js";import"./oauth-4b1c8ebb.js";function Q(e){var a,u,g,m,h,i,S,B,C,x,z;const c=e.size==="compact",{initialScreen:s,screen:l}=I(),[t,o]=f.useState(!1),r=l===e.wallet&&s===e.wallet,d=r&&!e.isLinking?void 0:e.goBack;return w(L,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[c&&(r?w(k,{children:[n(A,{onBack:d,leftAligned:!e.isLinking,title:w(k,{children:[(a=e.meta)!=null&&a.titleIconUrl?n(v,{src:(u=e.meta)==null?void 0:u.titleIconUrl,width:y.md,height:y.md,client:e.client}):null,n(U,{children:((g=e.meta)==null?void 0:g.title)??e.inAppWalletLocale.emailLoginScreen.title})]})}),n(W,{y:"lg"})]}):n(A,{onBack:d,title:e.inAppWalletLocale.signIn})),n(L,{expand:!0,flex:"column",center:"y",p:c?void 0:"lg",children:n(Z,{...e,locale:e.inAppWalletLocale,disabled:((m=e.meta)==null?void 0:m.requireApproval)&&!t})}),c&&(((h=e.meta)==null?void 0:h.showThirdwebBranding)!==!1||((i=e.meta)==null?void 0:i.termsOfServiceUrl)||((S=e.meta)==null?void 0:S.privacyPolicyUrl))&&n(W,{y:"xl"}),w(L,{flex:"column",gap:"lg",children:[n(H,{termsOfServiceUrl:(B=e.meta)==null?void 0:B.termsOfServiceUrl,privacyPolicyUrl:(C=e.meta)==null?void 0:C.privacyPolicyUrl,locale:e.connectLocale.agreement,requireApproval:(x=e.meta)==null?void 0:x.requireApproval,onApprove:()=>{o(!t)},isApproved:t}),((z=e.meta)==null?void 0:z.showThirdwebBranding)!==!1&&n(O,{})]})]})}function X(){return P("useAddConnectedWallet").handleConnection}function Y(e){const{wallet:c,done:s}=e,l=X(),t=f.useRef(),[o,r]=f.useState("selecting"),[d,a]=f.useState(),[u,g]=f.useState(!1),m=()=>{r("selecting"),t.current=void 0,e.onBack()};async function h(i){r("loading"),t.current=i;try{await M(c,{strategy:"wallet",wallet:i,chain:c.getChain()||F(1)}).catch(S=>{throw a(S.message),S}),l(i),s()}catch{r("error")}}return t.current?w(L,{animate:"fadein",fullHeight:!0,flex:"column",children:[n(L,{p:"lg",children:n(A,{title:e.inAppLocale.linkWallet,onBack:m})}),n(L,{px:e.size==="wide"?"xxl":"lg",expand:!0,flex:"column",center:"y",children:n("div",{children:o==="error"?w(k,{children:[n(R,{onTryAgain:()=>{if(!t.current)throw new Error("Failed to connect to unknown wallet");h(t.current)},title:d||"Failed to Login"}),n(W,{y:"lg"})]}):n(k,{children:n(G,{title:"Sign in with your wallet",subtitle:"A pop-up prompt will appear to sign-in and verify your wallet",icon:n(E,{id:t.current.id??"",size:y.xl,client:e.client})})})})})]}):u?n(f.Suspense,{fallback:n(b,{}),children:n(N,{onBack:()=>g(!1),onSelect:async i=>{h(i),g(!1)},client:e.client,connectLocale:e.locale,recommendedWallets:void 0,specifiedWallets:[],size:e.size,disableSelectionDataReset:!0})}):n(T,{title:e.locale.connectAWallet,wallets:D(),selectWallet:async i=>{h(i)},onShowAll:()=>{g(!0)},done:()=>{},goBack:m,setModalVisibility:()=>{},client:e.client,connectLocale:e.locale,hideHeader:!1,recommendedWallets:void 0,chain:c.getChain(),showAllWallets:!0,chains:[],size:e.size,meta:e.meta||{},walletConnect:e.walletConnect,modalHeader:{title:e.inAppLocale.linkWallet,onBack:m},walletIdsToHide:["inApp"],disableSelectionDataReset:!0})}function ie(e){const c=j(),s=q(),l=c,t=e.connectLocale.id,o=$(t),{initialScreen:r}=I();if(!o)return n(b,{});const d=r===e.wallet?()=>{s({})}:e.goBack,a=()=>{e.done(),s({})},u=l!=null&&l.emailLogin?{email:l.emailLogin}:l!=null&&l.phoneLogin?{phone:l.phoneLogin}:void 0;return u?n(K,{userInfo:u,locale:o,done:a,goBack:d,wallet:e.wallet,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):l!=null&&l.passkeyLogin?n(J,{locale:e.connectLocale,wallet:e.wallet,done:a,onBack:d,chain:e.chain,client:e.client,size:e.size,isLinking:e.isLinking}):l!=null&&l.walletLogin?n(Y,{meta:e.meta,inAppLocale:o,walletConnect:e.walletConnect,wallet:e.wallet,client:e.client,size:e.size,done:a,onBack:d||(()=>s({})),locale:e.connectLocale}):l!=null&&l.socialLogin?n(V,{socialAuth:l.socialLogin.type,locale:o,done:a,goBack:d,wallet:e.wallet,state:l,chain:e.chain,client:e.client,size:e.size,connectLocale:e.connectLocale,isLinking:e.isLinking}):n(Q,{select:()=>{},connectLocale:e.connectLocale,inAppWalletLocale:o,done:a,goBack:e.goBack,wallet:e.wallet,client:e.client,meta:e.meta,size:e.size,chain:e.chain,isLinking:e.isLinking})}export{ie as default};
