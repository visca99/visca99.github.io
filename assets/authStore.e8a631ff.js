import{k as l,i as s,l as t,c as r,h as d,m as h,g as p,n as f,q as y,R as m}from"./index.c54570e0.js";var Q=l({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(n,{slots:i}){const{proxy:{$q:o}}=p(),e=s(f,t);if(e===t)return console.error("QPage needs to be a deep child of QLayout"),t;if(s(y,t)===t)return console.error("QPage needs to be child of QPageContainer"),t;const c=r(()=>{const a=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof n.styleFn=="function"){const g=e.isContainer.value===!0?e.containerHeight.value:o.screen.height;return n.styleFn(a,g)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-a+"px":o.screen.height===0?a!==0?`calc(100vh - ${a}px)`:"100vh":o.screen.height-a+"px"}}),u=r(()=>`q-page${n.padding===!0?" q-layout-padding":""}`);return()=>d("main",{class:u.value,style:c.value},h(i.default))}});const $=m({id:"authStore",state:()=>({isLoggedIn:!1}),getters:{getIsLoggedIn:n=>n.isLoggedIn},actions:{}});export{Q,$ as u};