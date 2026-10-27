import"./rolldown-runtime-XKyaHtl9.js";import{i as e,o as t}from"./StoryThemeContext-D_RQ2m_6.js";import{a as n,s as r}from"../index.CMtGGzpB.js";import{t as i}from"./CodeBlock-C4FaW1je.js";import{t as a}from"./ComponentDemo-ClYgVMrt.js";t();var o=e(),s=[`topLeft`,`top`,`topRight`,`left`,`right`,`bottomLeft`,`bottom`,`bottomRight`],c=`Confirm.confirm(
  e.currentTarget as HTMLElement,
  'Submit the form? All data will be saved.',
  () => handleSubmit(),
  undefined,
  { title: 'Submit Form', confirmText: 'Submit', cancelText: 'Not yet', placement: 'topLeft' }
);`,l=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{title:`Placement options`,description:`Click each button to see the popover in that position.`,children:(0,o.jsx)(`div`,{className:`flex gap-3 flex-wrap justify-center`,children:s.map(e=>(0,o.jsx)(n,{variant:`primary`,size:`sm`,onClick:t=>{r.confirm(t.currentTarget,`Submit the form? All data will be saved.`,()=>console.log(`Confirmed`),void 0,{title:`Submit Form`,confirmText:`Submit`,cancelText:`Not yet`,placement:e})},children:e},e))})}),(0,o.jsx)(`div`,{className:`mt-4`,children:(0,o.jsx)(i,{code:c})})]});export{l as default};