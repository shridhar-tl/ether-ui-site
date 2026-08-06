import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./RadioButton-ncM1n2MA.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";import{t as o}from"./field-label-BzGmffxM.js";var s=e(n(),1),c=[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Disabled Option`,value:`disabled`,disabled:!0}],l=[{label:`Low`,value:`low`},{label:`Medium`,value:`medium`},{label:`High`,value:`high`}],u=t(),d=o(r),f=()=>{let[e,t]=(0,s.useState)(`option2`);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(a,{title:`Basic Radio Button Group`,children:(0,u.jsx)(`div`,{className:`max-w-xs`,children:(0,u.jsx)(d,{label:`Choose an option`,items:c,value:e,onChange:e=>t(e.value)})})}),(0,u.jsx)(`div`,{className:`mt-4`,children:(0,u.jsx)(i,{title:`Basic Example`,code:`import { RadioButtonGroup } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState('option2');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled Option', value: 'disabled', disabled: true }
  ];

  return (
    <RadioButtonGroup
      label="Choose an option"
      items={options}
      value={value}
      onChange={setValue}
    />
  );
}`})})]})};export{f as default,l as t};