import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{i as t,o as n}from"./StoryThemeContext-D_RQ2m_6.js";import{t as r}from"./Popover-CVvCqp8o.js";import{a as i}from"../index.CMtGGzpB.js";import{t as a}from"./CodeBlock-C4FaW1je.js";import{t as o}from"./ComponentDemo-ClYgVMrt.js";var s=e(n(),1),c=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Dragonfruit`,value:`dragonfruit`},{label:`Elderberry`,value:`elderberry`},{label:`Fig`,value:`fig`},{label:`Grape`,value:`grape`},{label:`Honeydew`,value:`honeydew`}],l=[{label:`Red`,value:`red`},{label:`Blue`,value:`blue`},{label:`Green`,value:`green`},{label:`Yellow`,value:`yellow`},{label:`Purple`,value:`purple`},{label:`Orange`,value:`orange`}],u=[{label:`Fruits`,items:[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`}]},{label:`Vegetables`,items:[{label:`Carrot`,value:`carrot`},{label:`Broccoli`,value:`broccoli`},{label:`Spinach`,value:`spinach`}]}],d=[{label:`Apple`,value:`apple`},{label:`Banana`,value:`banana`},{label:`Cherry`,value:`cherry`},{label:`Carrot`,value:`carrot`},{label:`Broccoli`,value:`broccoli`},{label:`Spinach`,value:`spinach`}],f=t(),p=`const [isOpen, setIsOpen] = useState(false);
const [selected, setSelected] = useState<ListItem | null>(null);
const triggerRef = useRef<HTMLButtonElement>(null);

<Button ref={triggerRef} onClick={() => setIsOpen(!isOpen)}>
  {selected ? selected.label : 'Pick a fruit'}
</Button>

<Popover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  triggerElement={triggerRef.current}
  items={fruitItems}
  onSelect={(item) => {
    setSelected(item);
    setIsOpen(false);
  }}
  selectedIndex={fruitItems.findIndex(
    (i) => i.value === selected?.value
  )}
/>`,m=()=>{let[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)(null),u=(0,s.useRef)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{title:`Simple popover with selectable items`,description:`Click the button to open a popover list and select an item.`,children:(0,f.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,f.jsx)(`span`,{ref:u,children:(0,f.jsx)(i,{onClick:()=>t(!e),children:n?n.label:`Pick a fruit`})}),(0,f.jsx)(r,{isOpen:e,onClose:()=>t(!1),triggerElement:u.current,items:c,onSelect:e=>{l(e),t(!1)},selectedIndex:c.findIndex(e=>e.value===n?.value)}),n&&(0,f.jsxs)(`span`,{className:`text-sm opacity-70`,children:[`Selected: `,n.label]})]})}),(0,f.jsx)(`div`,{className:`mt-4`,children:(0,f.jsx)(a,{code:p})})]})};export{m as default,u as i,l as n,c as r,d as t};