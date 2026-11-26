import{i as e,l as t,o as n}from"./StoryThemeContext-BDzcJQOV.js";import{n as r,t as i}from"./Password-DAISzsaE.js";import{t as a}from"./CodeBlock-CjEfE45a.js";import{t as o}from"./ComponentDemo-C1QcOIEH.js";var s=t(n(),1),c=e(),l=`import { PasswordStrengthMeter } from 'fluxo-ui';

const [pw, setPw] = useState('');

<Password value={pw} onChange={(e) => setPw(e.value)} placeholder="Enter password" />
<PasswordStrengthMeter value={pw} />`,u=()=>{let[e,t]=(0,s.useState)(``);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{title:`Default Strength Meter`,description:`Type to see live tier and tip updates.`,children:(0,c.jsxs)(`div`,{style:{width:`100%`,maxWidth:420,display:`flex`,flexDirection:`column`,gap:12},children:[(0,c.jsx)(i,{value:e,onChange:e=>t(e.value),placeholder:`Enter a password`,autoComplete:`new-password`}),(0,c.jsx)(r,{value:e})]})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{code:l,language:`tsx`})})]})};export{u as default};