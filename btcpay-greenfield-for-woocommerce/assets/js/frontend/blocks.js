(()=>{"use strict";var e={20:(e,t,r)=>{var o=r(609),n=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,c={},p=null,l=null;for(o in void 0!==r&&(p=""+r),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:n,type:e,key:p,ref:l,props:c,_owner:a.current}}t.jsx=c,t.jsxs=c},848:(e,t,r)=>{e.exports=r(20)},609:e=>{e.exports=window.React}},t={};const r=window.wp.i18n,o=window.wc.wcBlocksRegistry,n=window.wp.htmlEntities,i=window.wc.wcSettings;var a=function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}(848);const s=(0,i.getSetting)("btcpaygf_default_data",{}),c=(0,r.__)("Bitcoin / Lightning Network over BTCPay Server","woo-gutenberg-products-block"),p=(0,n.decodeEntities)(s.title)||c,l=s.icon||"",d=()=>(0,n.decodeEntities)(s.description||""),y=e=>{const{PaymentMethodLabel:t}=e.components;return(0,a.jsxs)("div",{className:"btcpay-payment-method-label",children:[l&&(0,a.jsx)("img",{src:l,alt:"BTCPay Bitcoin payment icon",className:"btcpay-payment-icon",style:{width:"50px",marginRight:"10px",verticalAlign:"middle"}}),(0,a.jsx)(t,{text:p})]})},w={name:"btcpaygf_default",label:(0,a.jsx)(y,{}),content:(0,a.jsx)(d,{}),edit:(0,a.jsx)(d,{}),canMakePayment:()=>!0,ariaLabel:p,iconUrl:l,supports:{features:s.supports}};(0,o.registerPaymentMethod)(w)})();