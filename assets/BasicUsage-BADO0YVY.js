import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./ToggleButton-Ds0UPOlC.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./ComponentDemo-C0Y_0jmn.js";var c=e(t(),1),l=e(r(),1),u=n(),d=`import { ToggleButton } from 'fluxo-ui';

function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleButton
      checked={checked}
      onChange={(e) => setChecked(e.value)}
    />
  );
}`,f=()=>{let{isDark:e}=i(),[t,n]=(0,l.useState)(!1);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s,{title:`Default Toggle Button`,children:(0,u.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,u.jsx)(a,{checked:t,onChange:e=>n(e.value)}),(0,u.jsxs)(`p`,{className:(0,c.default)(`text-sm`,{"text-gray-400":e,"text-gray-600":!e}),children:[`Current state: `,t?`On`:`Off`]})]})}),(0,u.jsx)(`div`,{className:`mt-4`,children:(0,u.jsx)(o,{title:`Basic Example`,code:d})})]})};export{f as default};