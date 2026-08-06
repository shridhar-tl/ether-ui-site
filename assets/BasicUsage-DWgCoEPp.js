import"./rolldown-runtime-hePW80VL.js";import{i as e,o as t}from"./StoryThemeContext-De5ZWJ_M.js";import{t as n}from"./Breadcrumb-pdPIx-t-.js";import{t as r}from"./CodeBlock-C1PblznF.js";import{t as i}from"./ComponentDemo-C0Y_0jmn.js";t();var a=e(),o=[{label:`Home`,href:`#`},{label:`Products`,href:`#`},{label:`Electronics`,href:`#`},{label:`Laptops`}],s=`import { Breadcrumb } from 'fluxo-ui';
import type { BreadcrumbItem } from 'fluxo-ui';

const items: BreadcrumbItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Electronics', href: '/products/electronics' },
  { label: 'Laptops' },
];

<Breadcrumb
  items={items}
  onItemClick={(item, index) => console.log(item.label, index)}
/>`,c=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{title:`Standard Breadcrumb`,description:`A simple breadcrumb trail with the last item as the current page.`,children:(0,a.jsx)(n,{items:o,onItemClick:(e,t)=>console.log(`Clicked:`,e.label,t)})}),(0,a.jsx)(`div`,{className:`mt-4`,children:(0,a.jsx)(r,{code:s,language:`tsx`})})]});export{c as default};