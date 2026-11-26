import{a as e,i as t,l as n,o as r}from"./StoryThemeContext-BDzcJQOV.js";import{n as i,o as a,r as o}from"./utils-DBbiEiKZ.js";import{t as s}from"./Icon-CZdIQg3D.js";/* empty css                 */import{t as c}from"./CodeBlock-CjEfE45a.js";import{t as l}from"./ComponentDemo-C1QcOIEH.js";import{t as u}from"./check-D9fPb4Xn.js";import{t as d}from"./minus-DewuxBmb.js";import{t as f}from"./red-flag-De1W0kPm.js";import{t as p}from"./warning-DW0mOmkP.js";import{t as m}from"./info-ld0Pv0t5.js";var h=n(e(),1),g=n(r(),1),_=t(),v=()=>{try{if(typeof process<`u`)return!1}catch{}return!0},y=(0,g.forwardRef)(({items:e,value:t,onChange:n,required:r=!1,id:c,disabled:l=!1,className:u,name:d,args:f,ariaLabel:p,...m},y)=>{let{styleProps:b,nativeProps:x}=a(m),[S]=(0,g.useState)(()=>i()),C=c||S,w=e.findIndex(e=>e.value===t),T=w>=0,E=T?e[w]:e[0];(0,g.useEffect)(()=>{v()&&t!==void 0&&!T&&console.warn(`[FluxoUI MultiStateCheckbox] value "${String(t)}" does not match any item in items[]. Falling back to first option.`)},[t,T]);let D=(t,r)=>{if(l)return;let i=e.length;if(i===0)return;let a=e[(w+t+i)%i];n&&n({event:r,value:a.value,name:d,args:f})},O=e=>{l||D(e.shiftKey?-1:1,e)},k=e=>{e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),D(1,e)):(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&(e.preventDefault(),D(-1,e))},A=o({...b,disabled:l},(0,h.default)(`eui-multistate-checkbox`,{"eui-multistate-checkbox-disabled":l},u)),j=(0,h.default)(`eui-multistate-checkbox-icon-box`,{"eui-multistate-checkbox-icon-box-empty":!E?.icon&&!E?.value}),M=E?.icon,N=e.length>=3,P=E?.label||`None selected`;return(0,_.jsxs)(`button`,{...x,ref:y,id:C,type:`button`,onClick:e=>{x.onClick?.(e),O(e)},onKeyDown:e=>{x.onKeyDown?.(e),k(e)},disabled:l,className:A,...N?{}:{"aria-checked":T&&w>0?`true`:w===0?`false`:`mixed`,role:`checkbox`},"aria-label":p||P,children:[(0,_.jsx)(`div`,{className:j,children:!!M&&(0,_.jsx)(s,{icon:M,className:`w-3 h-3`})}),(0,_.jsx)(`span`,{className:`eui-multistate-checkbox-label`,children:E?.label||`Select option`}),(0,_.jsx)(`input`,{type:`hidden`,name:d,value:E?.value?.toString()||``,required:r})]})}),b=[{value:null,label:`No Selection`,icon:void 0},{value:`yes`,label:`Yes`,icon:u},{value:`no`,label:`No`,icon:d}],x=[{value:null,label:`No Priority`,icon:void 0},{value:`low`,label:`Low`,icon:m},{value:`medium`,label:`Medium`,icon:p},{value:`high`,label:`High`,icon:f}],S=[{value:`pending`,label:`Pending`,icon:m},{value:`approved`,label:`Approved`,icon:u},{value:`rejected`,label:`Rejected`,icon:d},{value:`flagged`,label:`Flagged`,icon:f}],C=`import { MultiStateCheckbox } from 'fluxo-ui';

const states = [
  { value: null, label: 'No Selection', icon: undefined },
  { value: 'yes', label: 'Yes', icon: CheckIcon },
  { value: 'no', label: 'No', icon: MinusIcon },
];

function MyComponent() {
  const [value, setValue] = useState(null);

  return (
    <MultiStateCheckbox
      items={states}
      value={value}
      onChange={(e) => setValue(e.value)}
    />
  );
}`,w=()=>{let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(l,{title:`Basic MultiStateCheckbox`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,_.jsx)(y,{items:b,value:e,onChange:e=>t(e.value)}),(0,_.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[`Current value: `,(0,_.jsx)(`strong`,{children:e===null?`null`:String(e)})]})]})}),(0,_.jsx)(`div`,{className:`mt-4`,children:(0,_.jsx)(c,{title:`Basic Example`,code:C})})]})};export{w as default,y as i,b as n,x as r,S as t};