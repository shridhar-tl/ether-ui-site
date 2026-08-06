import"./rolldown-runtime-hePW80VL.js";import{i as e,o as t}from"./StoryThemeContext-De5ZWJ_M.js";import{A as n,E as r}from"../index.BXfAFPWO.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";t();var o=e(),s=[`topLeft`,`top`,`topRight`,`left`,`right`,`bottomLeft`,`bottom`,`bottomRight`],c=`Confirm.confirm(
  e.currentTarget as HTMLElement,
  'Submit the form? All data will be saved.',
  () => handleSubmit(),
  undefined,
  { title: 'Submit Form', confirmText: 'Submit', cancelText: 'Not yet', placement: 'topLeft' }
);`,l=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{title:`Placement options`,description:`Click each button to see the popover in that position.`,children:(0,o.jsx)(`div`,{className:`flex gap-3 flex-wrap justify-center`,children:s.map(e=>(0,o.jsx)(r,{variant:`primary`,size:`sm`,onClick:t=>{n.confirm(t.currentTarget,`Submit the form? All data will be saved.`,()=>console.log(`Confirmed`),void 0,{title:`Submit Form`,confirmText:`Submit`,cancelText:`Not yet`,placement:e})},children:e},e))})}),(0,o.jsx)(`div`,{className:`mt-4`,children:(0,o.jsx)(i,{code:c})})]});export{l as default};