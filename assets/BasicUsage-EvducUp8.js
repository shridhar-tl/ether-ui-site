import{i as e,l as t,o as n}from"./StoryThemeContext-BDzcJQOV.js";import{t as r}from"./NumericInput-CfE60E4D.js";import{t as i}from"./field-label-Cw8gvXgt.js";import{t as a}from"./CodeBlock-CjEfE45a.js";import{t as o}from"./ComponentDemo-C1QcOIEH.js";var s=t(n(),1),c=e(),l=i(r),u=`import { NumericInput } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState(0);

  return (
    <NumericInput
      label="Quantity"
      value={value}
      onChange={setValue}
    />
  );
}`,d=()=>{let[e,t]=(0,s.useState)(0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{title:`Basic Numeric Input`,children:(0,c.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,c.jsx)(l,{label:`Quantity`,value:e,onChange:e=>t(e.value??0)})})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{title:`Basic Example`,code:u})})]})};export{d as default};