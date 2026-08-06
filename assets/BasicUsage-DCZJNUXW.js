import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./Dropdown-BuJGAQnM.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";import{t as o}from"./field-label-BzGmffxM.js";var s=e(n(),1),c=[{label:`Option 1`,value:`option1`},{label:`Option 2`,value:`option2`},{label:`Option 3`,value:`option3`},{label:`Disabled Option`,value:`disabled`,disabled:!0},{label:`Option 4`,value:`option4`},{label:`Option 5`,value:`option5`},{label:`Option 6`,value:`option6`},{label:`Option 7`,value:`option7`},{label:`Option 8`,value:`option8`},{label:`Option 9`,value:`option9`},{label:`Option 10`,value:`option10`},{label:`Option 11`,value:`option11`},{label:`Option 12`,value:`option12`},{label:`Option 13`,value:`option13`},{label:`Option 14`,value:`option14`}],l=[{label:`React`,value:`react`},{label:`Vue.js`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`Next.js`,value:`nextjs`},{label:`Nuxt.js`,value:`nuxtjs`},{label:`Gatsby`,value:`gatsby`}],u=[{label:`United States`,value:`us`},{label:`Canada`,value:`ca`},{label:`United Kingdom`,value:`uk`},{label:`Germany`,value:`de`},{label:`France`,value:`fr`},{label:`Japan`,value:`jp`},{label:`Australia`,value:`au`}],d=[{label:`Frontend`,items:[{label:`React`,value:`react`},{label:`Vue.js`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`}]},{label:`Backend`,items:[{label:`Node.js`,value:`nodejs`},{label:`Django`,value:`django`},{label:`Spring Boot`,value:`spring`},{label:`Laravel`,value:`laravel`}]},{label:`Mobile`,items:[{label:`React Native`,value:`react-native`},{label:`Flutter`,value:`flutter`},{label:`Swift`,value:`swift`,disabled:!0}]}],f=[{name:`United States`,code:`US`},{name:`Canada`,code:`CA`},{name:`United Kingdom`,code:`UK`},{name:`Germany`,code:`DE`},{name:`France`,code:`FR`}],p=t(),m=o(r),h=`import { Dropdown } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState('');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Disabled Option', value: 'disabled', disabled: true }
  ];

  return (
    <Dropdown
      label="Select an option"
      placeholder="Choose one..."
      options={options}
      value={value}
      onChange={setValue}
    />
  );
}`,g=()=>{let[e,t]=(0,s.useState)(``);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{title:`Basic Dropdown`,children:(0,p.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,p.jsx)(m,{label:`Select an option`,placeholder:`Choose one...`,options:c,value:e,onChange:e=>t(e.value)})})}),(0,p.jsx)(`div`,{className:`mt-4`,children:(0,p.jsx)(i,{title:`Basic Example`,code:h})})]})};export{d as a,g as default,l as i,u as n,f as r,c as t};