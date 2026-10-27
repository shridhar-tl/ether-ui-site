import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{i as t,o as n}from"./StoryThemeContext-D_RQ2m_6.js";import{t as r}from"./Drawer-PBm9ptZP.js";import{a as i}from"../index.CMtGGzpB.js";import{t as a}from"./CodeBlock-C4FaW1je.js";import{t as o}from"./ComponentDemo-ClYgVMrt.js";var s=e(n(),1),c=t(),l=`import { Drawer, Button } from 'fluxo-ui';

const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  header="Drawer Title"
>
  <p>Drawer body content goes here.</p>
</Drawer>`,u=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o,{title:`Default Drawer`,description:`A right-side drawer with header and close button.`,children:(0,c.jsx)(i,{onClick:()=>t(!0),children:`Open Drawer`})}),(0,c.jsx)(r,{open:e,onClose:()=>t(!1),header:`Drawer Title`,children:(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsx)(`p`,{children:`This is the drawer body content. You can place any content here including forms, lists, or details panels.`}),(0,c.jsx)(`p`,{children:`Click the X button, press Escape, or click the backdrop to close.`})]})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{code:l,language:`tsx`})})]})};export{u as default};