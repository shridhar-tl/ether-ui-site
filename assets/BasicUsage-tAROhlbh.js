import"./rolldown-runtime-hePW80VL.js";import{i as e,o as t}from"./StoryThemeContext-De5ZWJ_M.js";import{E as n,O as r,k as i}from"../index.BXfAFPWO.js";import{t as a}from"./CodeBlock-C1PblznF.js";import{t as o}from"./ComponentDemo-C0Y_0jmn.js";t();var s=e(),c=`import { showTooltip, hideTooltip } from 'fluxo-ui';

<Button
  onMouseEnter={(e) => showTooltip(e, 'Hello, I am a tooltip!')}
  onMouseLeave={() => hideTooltip({ timeout: 0 })}
>
  Hover me
</Button>`,l=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o,{title:`Simple string tooltip`,children:(0,s.jsx)(n,{variant:`primary`,onMouseEnter:e=>i(e,`Hello, I am a tooltip!`),onMouseLeave:()=>r({timeout:0}),children:`Hover me`})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(a,{code:c})})]});export{l as default};