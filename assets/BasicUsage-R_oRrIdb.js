import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./TextInput-eVRCCUOC.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";import{t as o}from"./field-label-BzGmffxM.js";var s=e(n(),1),c=t(),l=o(r),u=`import { TextInput } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState('');

  return (
    <TextInput
      placeholder="Enter some text..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`,d=()=>{let[e,t]=(0,s.useState)(``);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a,{title:`Basic Text Input`,children:(0,c.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,c.jsx)(l,{placeholder:`Enter some text...`,value:e,onChange:e=>t(e.value)})})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(i,{title:`Basic Example`,code:u})})]})};export{d as default};