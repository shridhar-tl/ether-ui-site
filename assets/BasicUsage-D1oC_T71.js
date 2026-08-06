import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./Multiselect-bdrQyTI-.js";import{t as i}from"./CodeBlock-C1PblznF.js";import{t as a}from"./ComponentDemo-C0Y_0jmn.js";import{t as o}from"./field-label-BzGmffxM.js";var s=e(n(),1),c=[{label:`React`,value:`react`},{label:`Vue.js`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`},{label:`TypeScript`,value:`typescript`},{label:`JavaScript`,value:`javascript`},{label:`Next.js`,value:`nextjs`},{label:`Nuxt.js`,value:`nuxtjs`}],l=[{label:`Red`,value:`red`},{label:`Blue`,value:`blue`},{label:`Green`,value:`green`},{label:`Yellow`,value:`yellow`},{label:`Purple`,value:`purple`},{label:`Orange`,value:`orange`}],u=[{label:`HTML`,value:`html`},{label:`CSS`,value:`css`},{label:`JavaScript`,value:`javascript`},{label:`React`,value:`react`},{label:`Node.js`,value:`nodejs`},{label:`Python`,value:`python`},{label:`SQL`,value:`sql`},{label:`Git`,value:`git`}],d=[{label:`Frontend`,items:[{label:`React`,value:`react`},{label:`Vue.js`,value:`vue`},{label:`Angular`,value:`angular`},{label:`Svelte`,value:`svelte`}]},{label:`Backend`,items:[{label:`Node.js`,value:`nodejs`},{label:`Django`,value:`django`},{label:`Spring Boot`,value:`spring`},{label:`Laravel`,value:`laravel`}]},{label:`Mobile`,items:[{label:`React Native`,value:`react-native`},{label:`Flutter`,value:`flutter`},{label:`Swift`,value:`swift`,disabled:!0}]}],f=[{name:`United States`,code:`US`},{name:`Canada`,code:`CA`},{name:`United Kingdom`,code:`UK`},{name:`Germany`,code:`DE`},{name:`France`,code:`FR`}],p=t(),m=o(r),h=`import { Multiselect } from 'fluxo-ui';

function MyComponent() {
  const [values, setValues] = useState(['react', 'typescript']);

  const options = [
    { label: 'React', value: 'react' },
    { label: 'Vue.js', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'TypeScript', value: 'typescript' },
    // ... more options
  ];

  return (
    <Multiselect
      label="Technologies"
      placeholder="Select technologies..."
      options={options}
      value={values}
      onChange={setValues}
    />
  );
}`,g=()=>{let[e,t]=(0,s.useState)([`react`,`typescript`]);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a,{title:`Basic Multiselect`,children:(0,p.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,p.jsx)(m,{label:`Technologies`,placeholder:`Select technologies...`,options:c,value:e,onChange:e=>t(e.value)})})}),(0,p.jsx)(`div`,{className:`mt-4`,children:(0,p.jsx)(i,{title:`Basic Example`,code:h})})]})};export{g as default,u as i,f as n,d as r,l as t};