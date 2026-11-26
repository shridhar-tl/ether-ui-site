import{i as e,l as t,o as n}from"./StoryThemeContext-BDzcJQOV.js";import{a as r}from"../index.DKPR-e6n.js";import{t as i}from"./OverlayPanel-UFUsPC6t.js";import{t as a}from"./CodeBlock-CjEfE45a.js";import{t as o}from"./ComponentDemo-C1QcOIEH.js";var s=t(n(),1),c=e(),l=`const [isOpen, setIsOpen] = useState(false);
const targetRef = useRef<HTMLSpanElement>(null);

<span ref={targetRef}>
  <Button onClick={() => setIsOpen((value) => !value)}>Show details</Button>
</span>
<OverlayPanel
  isOpen={isOpen}
  target={targetRef.current}
  onClose={() => setIsOpen(false)}
  title="Release 4.2"
>
  <p>Planned for 20 Nov. 12 of 15 issues are done.</p>
</OverlayPanel>`,u=()=>{let[e,t]=(0,s.useState)(!1),n=(0,s.useRef)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o,{title:`Click to open`,description:`Anchored to the button. Closes with the close button, Escape or a click outside.`,children:[(0,c.jsx)(`span`,{ref:n,children:(0,c.jsx)(r,{onClick:()=>t(e=>!e),"aria-expanded":e,children:`Show details`})}),(0,c.jsx)(i,{isOpen:e,target:n.current,onClose:()=>t(!1),title:`Release 4.2`,children:(0,c.jsx)(`p`,{style:{margin:0,color:`var(--eui-text-muted)`},children:`Planned for 20 Nov. 12 of 15 issues are done.`})})]}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{code:l})})]})};export{u as default};