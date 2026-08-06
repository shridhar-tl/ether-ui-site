import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{n as r,t as i}from"./TabView-9f8jttM9.js";import{t as a}from"./CodeBlock-C1PblznF.js";import{t as o}from"./ComponentDemo-C0Y_0jmn.js";var s=e(n(),1),c=t(),l=`import { TabView, TabPage } from 'fluxo-ui';

function MyComponent() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
      <TabPage header="Dashboard">Dashboard content</TabPage>
      <TabPage header="Analytics">Analytics content</TabPage>
      <TabPage header="Settings">Settings content</TabPage>
    </TabView>
  );
}`,u=()=>{let[e,t]=(0,s.useState)(0);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{title:`Basic TabView`,description:`Simple tab navigation with multiple panels`,children:(0,c.jsxs)(i,{activeIndex:e,onTabChange:e=>t(e.index),children:[(0,c.jsx)(r,{header:`Dashboard`,children:(0,c.jsxs)(`div`,{className:`p-4`,children:[(0,c.jsx)(`h3`,{className:`text-lg font-semibold mb-2`,children:`Dashboard`}),(0,c.jsx)(`p`,{children:`Welcome to the dashboard. Here you can see an overview of your data.`})]})}),(0,c.jsx)(r,{header:`Analytics`,children:(0,c.jsxs)(`div`,{className:`p-4`,children:[(0,c.jsx)(`h3`,{className:`text-lg font-semibold mb-2`,children:`Analytics`}),(0,c.jsx)(`p`,{children:`View detailed analytics and reports about your performance.`})]})}),(0,c.jsx)(r,{header:`Settings`,children:(0,c.jsxs)(`div`,{className:`p-4`,children:[(0,c.jsx)(`h3`,{className:`text-lg font-semibold mb-2`,children:`Settings`}),(0,c.jsx)(`p`,{children:`Configure your application settings and preferences.`})]})})]})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{code:l,language:`tsx`})})]})};export{u as default};