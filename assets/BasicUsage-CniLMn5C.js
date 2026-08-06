import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r}from"./StoryThemeContext-De5ZWJ_M.js";import{n as i,o as a,r as o}from"./utils-BlFIg1vA.js";import{t as s}from"./check-DYeVXz8r.js";import{t as c}from"./info-Cs1P4_5K.js";import{n as l,t as u}from"./red-flag-DdCm1rZD.js";import{t as d}from"./warning-DZT4UbAf.js";import{j as f}from"../index.BXfAFPWO.js";import{t as p}from"./CodeBlock-C1PblznF.js";import{t as m}from"./ComponentDemo-C0Y_0jmn.js";var h=e(t(),1),g=e(r(),1),_=n(),v=()=>{try{if(typeof process<`u`)return!1}catch{}return!0},y=(0,g.forwardRef)(({items:e,value:t,onChange:n,required:r=!1,id:s,disabled:c=!1,className:l,name:u,args:d,ariaLabel:p,...m},y)=>{let{styleProps:b,nativeProps:x}=a(m),[S]=(0,g.useState)(s||i()),C=e.findIndex(e=>e.value===t),w=C>=0,T=w?e[C]:e[0];(0,g.useEffect)(()=>{v()&&t!==void 0&&!w&&console.warn(`[FluxoUI MultiStateCheckbox] value "${String(t)}" does not match any item in items[]. Falling back to first option.`)},[t,w]);let E=(t,r)=>{if(c)return;let i=e.length;if(i===0)return;let a=e[(C+t+i)%i];n&&n({event:r,value:a.value,name:u,args:d})},D=e=>{c||E(e.shiftKey?-1:1,e)},O=e=>{e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),E(1,e)):(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&(e.preventDefault(),E(-1,e))},k=o({...b,disabled:c},(0,h.default)(`eui-multistate-checkbox`,{"eui-multistate-checkbox-disabled":c},l)),A=(0,h.default)(`eui-multistate-checkbox-icon-box`,{"eui-multistate-checkbox-icon-box-empty":!T?.icon&&!T?.value}),j=T?.icon,M=e.length>=3,N=T?.label||`None selected`;return(0,_.jsxs)(`button`,{...x,ref:y,id:S,type:`button`,onClick:e=>{x.onClick?.(e),D(e)},onKeyDown:e=>{x.onKeyDown?.(e),O(e)},disabled:c,className:k,...M?{}:{"aria-checked":w&&C>0?`true`:C===0?`false`:`mixed`,role:`checkbox`},"aria-label":p||N,children:[(0,_.jsx)(`div`,{className:A,children:!!j&&(0,_.jsx)(f,{icon:j,className:`w-3 h-3`})}),(0,_.jsx)(`span`,{className:`eui-multistate-checkbox-label`,children:T?.label||`Select option`}),(0,_.jsx)(`input`,{type:`hidden`,name:u,value:T?.value?.toString()||``,required:r})]})}),b=[{value:null,label:`No Selection`,icon:void 0},{value:`yes`,label:`Yes`,icon:s},{value:`no`,label:`No`,icon:l}],x=[{value:null,label:`No Priority`,icon:void 0},{value:`low`,label:`Low`,icon:c},{value:`medium`,label:`Medium`,icon:d},{value:`high`,label:`High`,icon:u}],S=[{value:`pending`,label:`Pending`,icon:c},{value:`approved`,label:`Approved`,icon:s},{value:`rejected`,label:`Rejected`,icon:l},{value:`flagged`,label:`Flagged`,icon:u}],C=`import { MultiStateCheckbox } from 'fluxo-ui';

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
}`,w=()=>{let[e,t]=(0,g.useState)(null);return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(m,{title:`Basic MultiStateCheckbox`,children:(0,_.jsxs)(`div`,{className:`flex flex-col gap-4`,children:[(0,_.jsx)(y,{items:b,value:e,onChange:e=>t(e.value)}),(0,_.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[`Current value: `,(0,_.jsx)(`strong`,{children:e===null?`null`:String(e)})]})]})}),(0,_.jsx)(`div`,{className:`mt-4`,children:(0,_.jsx)(p,{title:`Basic Example`,code:C})})]})};export{w as default,y as i,b as n,x as r,S as t};