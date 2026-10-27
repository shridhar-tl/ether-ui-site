import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{i as t,o as n}from"./StoryThemeContext-D_RQ2m_6.js";import{t as r}from"./Chips-gVcU8Pih.js";import{t as i}from"./CodeBlock-C4FaW1je.js";import{t as a}from"./ComponentDemo-ClYgVMrt.js";var o=e(n(),1),s=`import { Chips } from 'fluxo-ui';

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