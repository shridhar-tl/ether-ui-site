import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./Checkbox-Cd3MqUdP.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";var o=e(n(),1),s=t(),c=`import { Checkbox } from 'fluxo-ui';

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