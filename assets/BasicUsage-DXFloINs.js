import"./rolldown-runtime-XKyaHtl9.js";import{i as e,o as t}from"./StoryThemeContext-D_RQ2m_6.js";import{a as n}from"../index.8In9HeTY.js";import{i as r,t as i}from"./tooltip-api-DSBHL1IK.js";import{t as a}from"./CodeBlock-C4FaW1je.js";import{t as o}from"./ComponentDemo-ClYgVMrt.js";t();var s=e(),c=`import { showTooltip, hideTooltip } from 'fluxo-ui';

<Button
  onMouseEnter={(e) => showTooltip(e, 'Hello, I am a tooltip!')}
  onMouseLeave={() => hideTooltip({ timeout: 0 })}
>
  Hover me
</Button>`,l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{title:`Simple string tooltip`,children:(0,s.jsx)(n,{variant:`primary`,onMouseEnter:e=>r(e,`Hello, I am a tooltip!`),onMouseLeave:()=>i({timeout:0}),children:`Hover me`})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(a,{code:c})})]});export{l as default};