import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./Dropdown-BuJGAQnM.js";import{t as o}from"./PageLayout-DSwLk1XV.js";import{t as s}from"./CodeBlock-C1PblznF.js";import{t as c}from"./PropsTable-B4RgQiZf.js";import{t as l}from"./ComponentDemo-C0Y_0jmn.js";import{t as u}from"./FeatureCard-D_o4IlGr.js";import{t as d}from"./field-label-BzGmffxM.js";import f,{a as p,i as m,n as h,r as g,t as _}from"./BasicUsage-DCZJNUXW.js";var v=e(t(),1),y=e(r(),1),b=n(),x=d(a),S=`<Dropdown
  label="Country"
  options={countryOptions}
  value={value}
  onChange={setValue}
  showClear
/>`,C=()=>{let[e,t]=(0,y.useState)(`option2`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{title:`Dropdown with Clear Button`,children:(0,b.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,b.jsx)(x,{label:`Country`,options:h,value:e,onChange:e=>t(e.value),showClear:!0})})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(s,{code:S})})]})},w=d(a),T=`const countries = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
  { name: 'United Kingdom', code: 'UK' },
  { name: 'Germany', code: 'DE' },
];

<Dropdown
  label="Country"
  placeholder="Select a country..."
  options={countries}
  optionLabel="name"
  optionValue="code"
  value={value}
  onChange={setValue}
/>`,E=()=>{let[e,t]=(0,y.useState)(``);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{title:`Dropdown with optionLabel / optionValue`,children:(0,b.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,b.jsx)(w,{label:`Country`,placeholder:`Select a country...`,options:g,optionLabel:`name`,optionValue:`code`,value:e,onChange:e=>t(e.value)})})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(s,{code:T})})]})},D=d(a),O=`<Dropdown label="Normal" placeholder="Normal state" options={options} />
<Dropdown label="Selected" options={options} value="option2" onChange={setValue} />
<Dropdown label="Disabled" placeholder="Disabled state" options={options} disabled />
<Dropdown label="Read Only" options={options} value="option1" readonly />
<Dropdown label="Required" placeholder="Required field" options={options} required />
<Dropdown label="With Error" options={options} error="This field is required" />`,k=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{title:`Dropdown States`,children:(0,b.jsxs)(`div`,{className:`w-full max-w-sm space-y-4`,children:[(0,b.jsx)(D,{label:`Normal`,placeholder:`Normal state`,options:_}),(0,b.jsx)(D,{label:`Selected`,options:_,value:`option2`}),(0,b.jsx)(D,{label:`Disabled`,placeholder:`Disabled state`,options:_,disabled:!0}),(0,b.jsx)(D,{label:`Read Only`,options:_,value:`option1`,readOnly:!0}),(0,b.jsx)(D,{label:`Required`,placeholder:`Required field`,options:_,required:!0}),(0,b.jsx)(D,{label:`With Error`,placeholder:`Select an option`,options:_,error:`This field is required`})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(s,{code:O})})]}),A=d(a),j=`const groupedOptions = [
  {
    label: 'Frontend',
    items: [
      { label: 'React', value: 'react' },
      { label: 'Vue.js', value: 'vue' },
      { label: 'Angular', value: 'angular' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { label: 'Node.js', value: 'nodejs' },
      { label: 'Django', value: 'django' },
    ],
  },
];

<Dropdown
  label="Technology"
  placeholder="Select a technology..."
  options={groupedOptions}
  value={value}
  onChange={setValue}
  searchable
/>`,M=()=>{let[e,t]=(0,y.useState)(``);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{title:`Dropdown with Grouped Items`,children:(0,b.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,b.jsx)(A,{label:`Technology`,placeholder:`Select a technology...`,options:p,value:e,onChange:e=>t(e.value),searchable:!0})})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(s,{code:j})})]})},N=d(a),P=`const frameworkOptions = [
  { label: 'React', value: 'react' },
  { label: 'Vue.js', value: 'vue' },
  { label: 'Angular', value: 'angular' },
  { label: 'Svelte', value: 'svelte' },
  // ... more options
];

<Dropdown
  label="Frontend Framework"
  placeholder="Search frameworks..."
  options={frameworkOptions}
  value={value}
  onChange={setValue}
  searchable
/>`,F=()=>{let[e,t]=(0,y.useState)(`react`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(l,{title:`Dropdown with Search`,children:(0,b.jsx)(`div`,{className:`w-full max-w-sm`,children:(0,b.jsx)(N,{label:`Frontend Framework`,placeholder:`Search frameworks...`,options:m,value:e,onChange:e=>t(e.value),searchable:!0})})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(s,{code:P})})]})},{dropdownProps:I}={dropdownProps:{value:{type:`any`,description:`Currently selected value (controlled component)`},options:{type:`ListItem[] | ListItemGroup[]`,required:!0,description:`Flat array of items or grouped items. Each group has a label, optional icon, and an items array.`},onChange:{type:`function`,description:`Change event handler called with {event, value, name, args}`},placeholder:{type:`string`,description:`Placeholder text when no option is selected`},label:{type:`string`,description:`Label text for the dropdown`},error:{type:`string`,description:`Error message to display`},disabled:{type:`boolean`,default:!1,description:`Disable the dropdown`},readonly:{type:`boolean`,default:!1,description:`Make the dropdown read-only`},required:{type:`boolean`,default:!1,description:`Mark the dropdown as required`},searchable:{type:`boolean`,default:!1,description:`Enable search/filter functionality`},loading:{type:`boolean`,default:!1,description:`Show loading state`},emptyMessage:{type:`string`,default:`No options available`,description:`Message to display when no options are available`},showClear:{type:`boolean`,default:!1,description:`Show clear button to deselect`},renderItem:{type:`function`,description:`Custom render function for dropdown items: (item, index, isSelected, isHighlighted) => ReactNode`},renderValue:{type:`function`,description:`Custom render function for selected value: (item) => ReactNode`},id:{type:`string`,description:`HTML id attribute for the input element`},name:{type:`string`,description:`HTML name attribute for form submission`},args:{type:`any`,description:`Custom arguments passed to onChange event`},optionLabel:{type:`string`,default:`label`,description:`Property name to use as the display label from each option object`},optionValue:{type:`string`,default:`value`,description:`Property name to use as the value from each option object`},className:{type:`string`,description:`Additional CSS classes`}}},L=[{id:`basic-usage`,title:`Basic Usage`,description:`Default dropdown example`},{id:`searchable`,title:`Searchable`,description:`Filter options by typing`},{id:`clearable`,title:`Clearable`,description:`Clear selected value`},{id:`grouped`,title:`Grouped Options`,description:`Options organized by category`},{id:`custom-fields`,title:`Custom Field Mapping`,description:`optionLabel and optionValue`},{id:`states`,title:`States`,description:`Normal, disabled, error, etc.`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],R=[{title:`Single Select`,description:`Controlled single-value selection with clear and searchable support`,icon:`M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9`},{title:`Searchable`,description:`Built-in filter input to quickly find options in long lists`,icon:`M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z`},{title:`Clearable`,description:`Optional clear button to reset selected value to empty`,icon:`M6 18 18 6M6 6l12 12`},{title:`Grouped Options`,description:`Organize options into labeled groups with nested item arrays`,icon:`M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z`},{title:`Custom Field Mapping`,description:`optionLabel and optionValue props map any data shape to the dropdown`,icon:`M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5`},{title:`Custom Rendering`,description:`renderItem and renderValue callbacks for full JSX control over items`,icon:`M17.25 6.75 22.5 12l-5.25 5.25-5.25-5.25 5.25-5.25Zm-10.5 0L1.5 12l5.25 5.25 5.25-5.25-5.25-5.25Zm4.872-4.099 4.562 18.171`},{title:`States`,description:`Disabled, read-only, required, error, and loading states built in`,icon:`M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`},{title:`Accessibility`,description:`ARIA roles, keyboard navigation, and screen reader support`,icon:`M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z`},{title:`Theming`,description:`Full dark/light + 5 brand themes via CSS variables — zero extra config`,icon:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`}],z=()=>{let{isDark:e}=i();return(0,b.jsxs)(o,{sectionNavItems:L,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h1`,{className:(0,v.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Dropdown`}),(0,b.jsx)(`p`,{className:(0,v.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A versatile dropdown component for selecting single options with search and clear functionality.`})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic-usage`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,b.jsx)(f,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`searchable`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Searchable Dropdown`}),(0,b.jsx)(F,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`clearable`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Clearable Dropdown`}),(0,b.jsx)(C,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`grouped`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Grouped Options`}),(0,b.jsx)(M,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-fields`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Field Mapping`}),(0,b.jsx)(E,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`states`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`States`}),(0,b.jsx)(k,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,b.jsx)(s,{code:`import { Dropdown } from 'fluxo-ui';`})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`props`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,b.jsx)(c,{props:I})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,b.jsx)(u,{features:R})]})]})};export{z as default};