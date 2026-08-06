import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./SelectButton-BwpKgQQs.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./ComponentDemo-C0Y_0jmn.js";var c=e(t(),1),l=e(r(),1),u=n(),d=[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`}],f=[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Option 4`,value:`option4`}],p=[{label:`Small`,value:`small`},{label:`Medium`,value:`medium`},{label:`Large`,value:`large`}],m=[{label:`Available`,value:`available`},{label:`Disabled`,value:`disabled`,disabled:!0},{label:`Also Available`,value:`available2`}],h=[{label:`Heart`,value:`heart`,icon:e=>(0,u.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,...e,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z`})})},{label:`Star`,value:`star`,icon:e=>(0,u.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,...e,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z`})})},{label:`Fire`,value:`fire`,icon:e=>(0,u.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,fill:`none`,viewBox:`0 0 24 24`,strokeWidth:1.5,stroke:`currentColor`,...e,children:[(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z`}),(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,d:`M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z`})]})}],g=`import { SelectButton } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState('option2');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  return (
    <SelectButton
      items={options}
      value={value}
      onChange={(e) => setValue(e.value)}
    />
  );
}`,_=()=>{let{isDark:e}=i(),[t,n]=(0,l.useState)(`option2`);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(s,{title:`Single Selection`,children:[(0,u.jsx)(a,{items:d,value:t,onChange:e=>n(e.value)}),(0,u.jsxs)(`div`,{className:(0,c.default)(`mt-4 text-sm`,{"text-gray-400":e,"text-gray-600":!e}),children:[`Selected: `,t]})]}),(0,u.jsx)(`div`,{className:`mt-4`,children:(0,u.jsx)(o,{title:`Basic Example`,code:g})})]})};export{p as a,_ as default,f as i,m as n,h as r,d as t};