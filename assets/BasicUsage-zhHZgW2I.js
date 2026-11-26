import{i as e,l as t,o as n}from"./StoryThemeContext-BDzcJQOV.js";import{t as r}from"./Checkbox-D_-va2cA.js";import{t as i}from"./CodeBlock-CjEfE45a.js";import{t as a}from"./ComponentDemo-C1QcOIEH.js";var o=t(n(),1),s=e(),c=`import { Checkbox } from 'fluxo-ui';

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