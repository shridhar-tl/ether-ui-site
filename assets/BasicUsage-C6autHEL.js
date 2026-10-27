import"./rolldown-runtime-XKyaHtl9.js";import{i as e,o as t}from"./StoryThemeContext-D_RQ2m_6.js";import{i as n,t as r}from"./tooltip-api-DSBHL1IK.js";import{a as i}from"../index.CMtGGzpB.js";import{t as a}from"./CodeBlock-C4FaW1je.js";import{t as o}from"./ComponentDemo-ClYgVMrt.js";t();var s=e(),c=`import { showTooltip, hideTooltip } from 'fluxo-ui';

<Button
  onMouseEnter={(e) => showTooltip(e, 'Hello, I am a tooltip!')}
  onMouseLeave={() => hideTooltip({ timeout: 0 })}
>
  Hover me
</Button>`,l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{title:`Simple string tooltip`,children:(0,s.jsx)(i,{variant:`primary`,onMouseEnter:e=>n(e,`Hello, I am a tooltip!`),onMouseLeave:()=>r({timeout:0}),children:`Hover me`})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(a,{code:c})})]});export{l as default};