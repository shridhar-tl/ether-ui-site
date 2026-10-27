import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{i as t,o as n}from"./StoryThemeContext-D_RQ2m_6.js";import{t as r}from"./Checkbox-CizJPJOm.js";import{t as i}from"./CodeBlock-C4FaW1je.js";import{t as a}from"./ComponentDemo-ClYgVMrt.js";var o=e(n(),1),s=t(),c=`import { Checkbox } from 'fluxo-ui';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      checked={checked}
      onChange={(e) => setChecked(e.value)}
      label="I agree to the terms and conditions"
    />
  );
}`,l=()=>{let[e,t]=(0,o.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{title:`Basic Checkbox`,children:(0,s.jsx)(`div`,{className:`space-y-4`,children:(0,s.jsx)(r,{checked:e,onChange:e=>t(e.value),label:`I agree to the terms and conditions`})})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(i,{title:`Basic Example`,code:c})})]})};export{l as default};