import{i as n}from"./isValidSignature-3d314af7.js";import{dS as t,cw as s,a9 as i,aa as c,Z as u,ai as o}from"./index-00247e36.js";const g=`Ethereum Signed Message:
`;function f(r){const e=(()=>typeof r=="string"?t(r):typeof r.raw=="string"?r.raw:s(r.raw))(),a=t(`${g}${i(e)}`);return c([a,e])}function x(r,e){return u(f(r),e)}const h="0x1626ba7e";async function d(r){if(!o(r.signature))throw new Error("The signature must be a valid hex string.");return await n({contract:r.contract,hash:x(r.message),signature:r.signature})===h}export{d as checkContractWalletSignature};
