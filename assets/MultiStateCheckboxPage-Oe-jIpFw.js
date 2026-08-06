import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{E as a}from"../index.BXfAFPWO.js";import{t as o}from"./PageLayout-DSwLk1XV.js";import{t as s}from"./CodeBlock-C1PblznF.js";import{t as c}from"./PropsTable-B4RgQiZf.js";import{t as l}from"./ComponentDemo-C0Y_0jmn.js";import{t as u}from"./FeatureCard-D_o4IlGr.js";import d,{i as f,n as p,r as m,t as h}from"./BasicUsage-CniLMn5C.js";var g=e(t(),1),_=e(r(),1),v=n(),y=`import { MultiStateCheckbox, Button } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState(null);

  return (
    <div>
      <MultiStateCheckbox
        items={states}
        value={value}
        onChange={(e) => setValue(e.value)}
      />
      <Button label="Reset" onClick={() => setValue(null)} />
      <MultiStateCheckbox
        items={states}
        value={value}
        disabled
      />
    </div>
  );
}`,b=()=>{let[e,t]=(0,_.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{title:`Controlled & Disabled States`,children:(0,v.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(`span`,{className:`text-sm font-medium text-gray-500`,children:`Controlled`}),(0,v.jsxs)(`div`,{className:`flex items-center gap-4 flex-wrap`,children:[(0,v.jsx)(f,{items:p,value:e,onChange:e=>t(e.value)}),(0,v.jsx)(a,{label:`Reset`,variant:`secondary`,size:`sm`,onClick:()=>t(null)})]}),(0,v.jsxs)(`p`,{className:`text-sm text-gray-500`,children:[`Current value: `,(0,v.jsx)(`strong`,{children:e===null?`null`:String(e)})]})]}),(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(`span`,{className:`text-sm font-medium text-gray-500`,children:`Disabled`}),(0,v.jsx)(f,{items:p,value:`yes`,disabled:!0})]})]})}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{title:`Controlled & Disabled Example`,code:y})})]})},x=`import { MultiStateCheckbox } from 'fluxo-ui';
import { InfoIcon, WarningIcon, FlagIcon, CheckIcon, MinusIcon } from 'fluxo-ui/icons';

const priorityStates = [
  { value: null, label: 'No Priority', icon: undefined },
  { value: 'low', label: 'Low', icon: InfoIcon },
  { value: 'medium', label: 'Medium', icon: WarningIcon },
  { value: 'high', label: 'High', icon: FlagIcon },
];

const approvalStates = [
  { value: 'pending', label: 'Pending', icon: InfoIcon },
  { value: 'approved', label: 'Approved', icon: CheckIcon },
  { value: 'rejected', label: 'Rejected', icon: MinusIcon },
  { value: 'flagged', label: 'Flagged', icon: FlagIcon },
];

function MyComponent() {
  const [priority, setPriority] = useState(null);
  const [approval, setApproval] = useState('pending');

  return (
    <>
      <MultiStateCheckbox
        items={priorityStates}
        value={priority}
        onChange={(e) => setPriority(e.value)}
      />
      <MultiStateCheckbox
        items={approvalStates}
        value={approval}
        onChange={(e) => setApproval(e.value)}
      />
    </>
  );
}`,S=()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(`pending`);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{title:`Custom State Configurations`,children:(0,v.jsxs)(`div`,{className:`flex flex-col gap-6`,children:[(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(`span`,{className:`text-sm font-medium text-gray-500`,children:`Priority Selector (3 states)`}),(0,v.jsx)(f,{items:m,value:e,onChange:e=>t(e.value)})]}),(0,v.jsxs)(`div`,{className:`flex flex-col gap-2`,children:[(0,v.jsx)(`span`,{className:`text-sm font-medium text-gray-500`,children:`Approval Workflow (4 states)`}),(0,v.jsx)(f,{items:h,value:n,onChange:e=>r(e.value)})]})]})}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{title:`Custom States Example`,code:x})})]})},{multiStateCheckboxProps:C}={multiStateCheckboxProps:{items:{type:`ListItem[]`,description:`Array of state items to cycle through. Each item has value, label, and optional icon`,required:!0},value:{type:`any`,description:`Current value of the checkbox (controlled component)`},onChange:{type:`(event: ComponentEvent<T>) => void`,description:`Change event handler. Receives event object with value, name, and args properties`},required:{type:`boolean`,default:`false`,description:`Mark the hidden input as required for form validation`},disabled:{type:`boolean`,default:`false`,description:`Disable the checkbox interaction`},id:{type:`string`,description:`HTML id attribute for the button element`},name:{type:`string`,description:`Name attribute for the hidden input (used in forms)`},args:{type:`any`,description:`Additional arguments passed to onChange handler`},className:{type:`string`,description:`Additional CSS classes for the container`}}},w=[{id:`basic-usage`,title:`Basic Usage`,description:`Default multi-state checkbox example`},{id:`custom-states`,title:`Custom States`,description:`Custom icons and state configurations`},{id:`controlled`,title:`Controlled & Disabled`,description:`Controlled value and disabled state`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],T=[{title:`Multiple States`,description:`Cycle through any number of custom states with a single click`,icon:`M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99`},{title:`Custom Icons`,description:`Each state can display a unique icon to visually indicate its meaning`,icon:`M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42`},{title:`Controlled`,description:`Fully controlled value state via the value and onChange props`,icon:`M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`},{title:`Keyboard Accessible`,description:`Supports Space and Enter keys for cycling through states`,icon:`M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z`},{title:`Form Integration`,description:`Hidden input with name attribute for seamless form submission`,icon:`M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25Z`},{title:`Theming`,description:`Full dark/light mode and brand theme support via CSS variables`,icon:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`}],E=()=>{let{isDark:e}=i();return(0,v.jsxs)(o,{sectionNavItems:w,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h1`,{className:(0,g.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`MultiStateCheckbox`}),(0,v.jsx)(`p`,{className:(0,g.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A checkbox-style component that cycles through multiple predefined states on each click, with support for custom icons and labels.`})]}),(0,v.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic-usage`,children:[(0,v.jsx)(`h2`,{className:(0,g.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,v.jsx)(d,{})]}),(0,v.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-states`,children:[(0,v.jsx)(`h2`,{className:(0,g.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom States`}),(0,v.jsx)(S,{})]}),(0,v.jsxs)(`section`,{className:`scroll-mt-8`,id:`controlled`,children:[(0,v.jsx)(`h2`,{className:(0,g.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Controlled & Disabled`}),(0,v.jsx)(b,{})]}),(0,v.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,v.jsx)(`h2`,{className:(0,g.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,v.jsx)(s,{code:`import { MultiStateCheckbox } from 'fluxo-ui';`})]}),(0,v.jsxs)(`section`,{className:`scroll-mt-8`,id:`props`,children:[(0,v.jsx)(`h2`,{className:(0,g.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,v.jsx)(c,{props:C})]}),(0,v.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,v.jsx)(`h2`,{className:(0,g.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,v.jsx)(u,{features:T})]})]})};export{E as default};