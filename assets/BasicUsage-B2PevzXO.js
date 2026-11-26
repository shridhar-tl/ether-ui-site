import{i as e,l as t,o as n}from"./StoryThemeContext-BDzcJQOV.js";import{a as r}from"../index.DKPR-e6n.js";import{t as i}from"./Drawer-B078AhH2.js";import{t as a}from"./CodeBlock-CjEfE45a.js";import{t as o}from"./ComponentDemo-C1QcOIEH.js";var s=t(n(),1),c=e(),l=`import { Drawer, Button } from 'fluxo-ui';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  header="Drawer Title"
>
  <p>Drawer body content goes here.</p>
</Drawer>`,u=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{title:`Default Drawer`,description:`A right-side drawer with header and close button.`,children:(0,c.jsx)(r,{onClick:()=>t(!0),children:`Open Drawer`})}),(0,c.jsx)(i,{open:e,onClose:()=>t(!1),header:`Drawer Title`,children:(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsx)(`p`,{children:`This is the drawer body content. You can place any content here including forms, lists, or details panels.`}),(0,c.jsx)(`p`,{children:`Click the X button, press Escape, or click the backdrop to close.`})]})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{code:l,language:`tsx`})})]})};export{u as default};