import{r as e}from"./rolldown-runtime-XKyaHtl9.js";import{a as t,i as n,o as r}from"./StoryThemeContext-D_RQ2m_6.js";import{n as i,o as a,r as o}from"./utils-DMnP6d_P.js";import{t as s}from"./Icon-CCrItGQ6.js";/* empty css                 */import{t as c}from"./CodeBlock-C4FaW1je.js";import{t as l}from"./ComponentDemo-ClYgVMrt.js";import{t as u}from"./check-VQvanP4l.js";import{n as d,t as f}from"./red-flag-u7EBfXbb.js";import{t as p}from"./warning-zzsVmu8g.js";import{t as m}from"./info-BcAfXVnX.js";var h=e(t(),1),g=e(r(),1),_=n(),v=()=>{try{if(typeof process<`u`)return!1}catch{}return!0},y=(0,g.forwardRef)(({items:e,value:t,onChange:n,required:r=!1,id:c,disabled:l=!1,className:u,name:d,args:f,ariaLabel:p,...m},y)=>{let{styleProps:b,nativeProps:x}=a(m),[S]=(0,g.useState)(c||i()),C=e.findIndex(e=>e.value===t),w=C>=0,T=w?e[C]:e[0];(0,g.useEffect)(()=>{v()&&t!==void 0&&!w&&console.warn(`[FluxoUI MultiStateCheckbox] value "${String(t)}" does not match any item in items[]. Falling back to first option.`)},[t,w]);let E=(t,r)=>{if(l)return;let i=e.length;if(i===0)return;let a=e[(C+t+i)%i];n&&n({event:r,value:a.value,name:d,args:f})},D=e=>{l||E(e.shiftKey?-1:1,e)},O=e=>{e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),E(1,e)):(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&(e.preventDefault(),E(-1,e))},k=o({...b,disabled:l},(0,h.default)(`eui-multistate-checkbox`,{"eui-multistate-checkbox-disabled":l},u)),A=(0,h.default)(`eui-multistate-checkbox-icon-box`,{"eui-multistate-checkbox-icon-box-empty":!T?.icon&&!T?.value}),j=T?.icon,M=e.length>=3,N=T?.label||`None selected`;return(0,_.jsxs)(`button`,{...x,ref:y,id:S,type:`button`,onClick:e=>{x.onClick?.(e),D(e)},onKeyDown:e=>{x.onKeyDown?.(e),O(e)},disabled:l,className:k,...M?{}:{"aria-checked":w&&C>0?`true`:C===0?`false`:`mixed`,role:`checkbox`},"aria-label":p||N,children:[(0,_.jsx)(`div`,{className:A,children:!!j&&(0,_.jsx)(s,{icon:j,className:`w-3 h-3`})}),(0,_.jsx)(`span`,{className:`eui-multistate-checkbox-label`,children:T?.label||`Select option`}),(0,_.jsx)(`input`,{type:`hidden`,name:d,value:T?.value?.toString()||``,required:r})]})}),b=[{value:null,label:`No Selection`,icon:void 0},{value:`yes`,label:`Yes`,icon:u},{value:`no`,label:`No`,icon:d}],x=[{value:null,label:`No Priority`,icon:void 0},{value:`low`,label:`Low`,icon:m},{value:`medium`,label:`Medium`,icon:p},{value:`high`,label:`High`,icon:f}],S=[{value:`pending`,label:`Pending`,icon:m},{value:`approved`,label:`Approved`,icon:u},{value:`rejected`,label:`Rejected`,icon:d},{value:`flagged`,label:`Flagged`,icon:f}],C=`import { MultiStateCheckbox } from 'fluxo-ui';

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