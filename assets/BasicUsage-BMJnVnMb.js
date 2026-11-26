import{i as e,o as t}from"./StoryThemeContext-BDzcJQOV.js";import{t as n}from"./ProgressBar-CPm5YKrd.js";import{t as r}from"./CodeBlock-CjEfE45a.js";import{t as i}from"./ComponentDemo-C1QcOIEH.js";t();var a=e(),o=`import { ProgressBar } from 'fluxo-ui';

function MyComponent() {
  return (
    <div className="space-y-4">
      <ProgressBar value={25} />
      <ProgressBar value={50} />
      <ProgressBar value={75} />
      <ProgressBar value={100} />
    </div>
  );
}`,s=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{title:`Basic Progress Bar`,description:`Simple progress bars with different values`,centered:!1,children:(0,a.jsxs)(`div`,{className:`space-y-6 w-full p-2`,children:[(0,a.jsx)(n,{value:25}),(0,a.jsx)(n,{value:50}),(0,a.jsx)(n,{value:75}),(0,a.jsx)(n,{value:100})]})}),(0,a.jsx)(`div`,{className:`mt-4`,children:(0,a.jsx)(r,{code:o,language:`tsx`})})]});export{s as default};