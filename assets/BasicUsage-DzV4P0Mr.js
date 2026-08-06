import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./TimePicker-Dsh5tnGN.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";var o=e(n(),1),s=t(),c=`import { TimePicker } from 'fluxo-ui';

const [time, setTime] = useState<string | null>('09:30');

<TimePicker value={time} onChange={(v) => setTime(v as string | null)} />

<TimePicker defaultValue="14:45" />

<TimePicker placeholder="Meeting time" />`,l=()=>{let[e,t]=(0,o.useState)(`09:30`);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{title:`Default Time Picker`,description:`24-hour format by default. Type directly or pick from the dropdown.`,children:(0,s.jsxs)(`div`,{className:`space-y-6`,children:[(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Controlled (`,e??`empty`,`)`]}),(0,s.jsx)(r,{value:e,onChange:e=>t(e)})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Uncontrolled`}),(0,s.jsx)(r,{defaultValue:`14:45`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Empty with placeholder`}),(0,s.jsx)(r,{placeholder:`Meeting time`})]}),(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Disabled`}),(0,s.jsx)(r,{defaultValue:`10:00`,disabled:!0})]})]})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(i,{code:c,language:`tsx`})})]})};export{l as default};