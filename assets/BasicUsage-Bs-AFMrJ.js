import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{i as t,o as n}from"./StoryThemeContext-D_RQ2m_6.js";import{t as r}from"./Slider-auag8BP5.js";import{t as i}from"./CodeBlock-C4FaW1je.js";import{t as a}from"./ComponentDemo-ClYgVMrt.js";var o=e(n(),1),s=t(),c=`import { Slider } from 'fluxo-ui';

const [value, setValue] = useState(40);

<Slider
  value={value}
  onChange={(v) => setValue(v as number)}
  showTooltip
/>

<Slider defaultValue={60} showMinMax />

<Slider defaultValue={25} showValue valuePosition="right" />`,l=()=>{let[e,t]=(0,o.useState)(40);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{title:`Default Slider`,description:`A simple slider with controlled value and tooltip on hover.`,children:(0,s.jsxs)(`div`,{className:`space-y-8 w-full max-w-lg`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Controlled with tooltip (value: `,e,`)`]}),(0,s.jsx)(r,{value:e,onChange:e=>t(e),showTooltip:!0})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Uncontrolled with min/max labels`}),(0,s.jsx)(r,{defaultValue:60,showMinMax:!0})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`With value display on the right`}),(0,s.jsx)(r,{defaultValue:25,showValue:!0,valuePosition:`right`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Disabled slider`}),(0,s.jsx)(r,{defaultValue:50,disabled:!0,showMinMax:!0})]})]})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(i,{code:c,language:`tsx`})})]})};export{l as default};