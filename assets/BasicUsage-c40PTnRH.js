import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./Chips-DZlKFFTB.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";var o=e(n(),1),s=`import { Chips } from 'fluxo-ui';

function MyComponent() {
  const [chips, setChips] = useState(['React', 'TypeScript']);

  return (
    <Chips
      value={chips}
      placeholder="Add tags..."
      onChange={(e) => setChips(e.value)}
    />
  );
}`,c=`import { Chips } from 'fluxo-ui';

function MyComponent() {
  const [chips, setChips] = useState([]);

  return (
    <Chips
      value={chips}
      placeholder="Max 5 tags, comma separated..."
      maxItems={5}
      separator=","
      allowDuplicates={false}
      onChange={(e) => setChips(e.value)}
    />
  );
}`,l=t(),u=()=>{let[e,t]=(0,o.useState)([`React`,`TypeScript`]),[n,c]=(0,o.useState)([`Apple`,`Banana`,`Cherry`]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(`div`,{className:`grid gap-8`,children:[(0,l.jsx)(a,{title:`Basic Chips`,description:`Simple chips with add and remove functionality`,children:(0,l.jsx)(`div`,{className:`w-full max-w-96`,children:(0,l.jsx)(r,{value:e,placeholder:`Add programming languages...`,onChange:e=>t(e.value)})})}),(0,l.jsx)(a,{title:`Fruit Tags`,description:`Chips with custom placeholder and preset values`,children:(0,l.jsx)(`div`,{className:`w-full max-w-96`,children:(0,l.jsx)(r,{value:n,placeholder:`Add fruits...`,onChange:e=>c(e.value)})})})]}),(0,l.jsx)(`div`,{className:`mt-4`,children:(0,l.jsx)(i,{code:s,language:`typescript`})})]})};export{u as default,c as t};