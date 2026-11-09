import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{i as t,o as n}from"./StoryThemeContext-D_RQ2m_6.js";import{t as r}from"./Password-CirEs3Z2.js";import{t as i}from"./field-label-Cpg2xTYP.js";import{t as a}from"./CodeBlock-C4FaW1je.js";import{t as o}from"./ComponentDemo-ClYgVMrt.js";var s=e(n(),1),c=t(),l=i(r),u=`import { Password } from 'fluxo-ui';

function MyComponent() {
  const [password, setPassword] = useState('');

  return (
    <Password
      label="Password"
      placeholder="Enter your password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}`,d=()=>{let[e,t]=(0,s.useState)(``);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{title:`Basic Password Input`,children:(0,c.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,c.jsx)(l,{label:`Password`,placeholder:`Enter your password`,value:e,onChange:e=>t(e.value)})})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{title:`Basic Example`,code:u})})]})};export{d as default};