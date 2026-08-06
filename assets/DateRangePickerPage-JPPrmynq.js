import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./DateRangePicker-DfcehqFT.js";import{t as o}from"./Dropdown-BuJGAQnM.js";import{t as s}from"./PageLayout-DSwLk1XV.js";import{t as c}from"./CodeBlock-C1PblznF.js";import{t as l}from"./PropsTable-B4RgQiZf.js";import{t as u}from"./ComponentDemo-C0Y_0jmn.js";import{t as d}from"./FeatureCard-D_o4IlGr.js";import f from"./BasicUsage-2pNhiMDK.js";var p=e(t(),1),m=e(r(),1),h=n(),g=()=>{let[e,t]=(0,m.useState)([new Date,new Date(Date.now()+6048e5)]);return(0,h.jsx)(u,{title:`With Constraints`,description:`Limited to future dates only`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e,minDate:new Date,onChange:e=>t(e.value)})})})},_=()=>{let[e,t]=(0,m.useState)([new Date,new Date(Date.now()+6048e5)]);return(0,h.jsx)(u,{title:`Custom Format`,description:`Custom date format and separator`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e,dateFormat:`yyyy-MM-dd`,separator:` to `,onChange:e=>t(e.value)})})})},v=()=>{let[e]=(0,m.useState)([new Date,new Date(Date.now()+6048e5)]);return(0,h.jsx)(u,{title:`Disabled State`,description:`DateRangePicker in disabled state`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e,disabled:!0,onChange:()=>{}})})})},y=`<DateRangePicker
  firstDayOfWeek={1} // Monday
  onChange={(sel) => console.log(sel.value)}
/>`,b=[{label:`Sunday`,value:0},{label:`Monday`,value:1},{label:`Tuesday`,value:2},{label:`Saturday`,value:6}],x=()=>{let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(0);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{title:`First Day of Week`,description:`Configure which day the calendar week starts on.`,centered:!1,children:(0,h.jsxs)(`div`,{className:`flex flex-wrap items-end gap-4`,children:[(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`label`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Start day`}),(0,h.jsx)(o,{value:n,options:b,onChange:e=>r(e.value),size:`sm`})]}),(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`label`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Week Picker`}),(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e||void 0,placeholder:`Select a week...`,selectionMode:`week`,firstDayOfWeek:n,onChange:e=>t(e.value)})})]})]})}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:y,title:`First Day of Week`})})]})},S=()=>{let[e,t]=(0,m.useState)([new Date,new Date(Date.now()+2592e5)]);return(0,h.jsx)(u,{title:`Popover Position — Top`,description:`Picker opens upward using topStart position`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80 mt-32`,children:(0,h.jsx)(a,{value:e,position:`topStart`,onChange:e=>t(e.value)})})})},C=()=>{let[e,t]=(0,m.useState)([new Date,new Date(Date.now()+6048e5)]);return(0,h.jsx)(u,{title:`With Preset Dates`,description:`Date range picker with preset values`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e,placeholder:`Modify date range...`,onChange:e=>t(e.value)})})})},w=`import { DateRangePicker } from 'fluxo-ui';
import { useState } from 'react';

function MyComponent() {
  const [dateRange, setDateRange] = useState<[Date, Date] | null>(null);

  return (
    <DateRangePicker
      value={dateRange}
      placeholder="Select date range..."
      onChange={(selection) => setDateRange(selection.value)}
    />
  );
}`,T=`import { DateRangePicker } from 'fluxo-ui';
import { useState } from 'react';

function MyComponent() {
  const [dateRange, setDateRange] = useState<[Date, Date]>([new Date(), new Date()]);

  const quickRanges = [
    {
      value: 'today',
      label: 'Today',
      range: [new Date(), new Date()] as [Date, Date],
    },
    {
      value: 'last7days',
      label: 'Last 7 Days',
      range: [
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        new Date(),
      ] as [Date, Date],
    },
    {
      value: 'last30days',
      label: 'Last 30 Days',
      range: [
        new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        new Date(),
      ] as [Date, Date],
    },
  ];

  return (
    <DateRangePicker
      value={dateRange}
      ranges={quickRanges}
      onChange={(selection) => setDateRange(selection.value)}
      onClose={() => console.log('Picker closed')}
    />
  );
}`,E=`import { DateRangePicker } from 'fluxo-ui';
import { useState } from 'react';

function MyComponent() {
  const [dateRange, setDateRange] = useState<[Date, Date]>([new Date(), new Date()]);

  const today = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() + 1);

  return (
    <DateRangePicker
      value={dateRange}
      dateFormat="yyyy-MM-dd"
      separator=" to "
      minDate={today}
      maxDate={maxDate}
      customLabel="Custom Range"
      showTodayButton={true}
      onChange={(selection) => {
        setDateRange(selection.value);
        console.log('Range changed:', selection);
      }}
      onClose={() => console.log('Date range selection complete')}
    />
  );
}`,D=[{value:`today`,label:`Today`,range:[new Date,new Date]},{value:`last7days`,label:`Last 7 Days`,range:[new Date(Date.now()-6048e5),new Date]},{value:`last30days`,label:`Last 30 Days`,range:[new Date(Date.now()-2592e6),new Date]},{value:`thismonth`,label:`This Month`,range:[new Date(new Date().getFullYear(),new Date().getMonth(),1),new Date]}],O=()=>{let[e,t]=(0,m.useState)(`today`),[,n]=(0,m.useState)([new Date,new Date(Date.now()+6048e5)]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{title:`With Quick Select Ranges`,description:`Date range picker with predefined quick ranges`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e,ranges:D,onChange:e=>{t(String(e.range||`custom`)),Array.isArray(e.value)&&n(e.value)}})})}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:T,language:`typescript`})})]})},k=`<DateRangePicker
  selectionMode="week"
  range={false}
  firstDayOfWeek={1}
  onChange={(sel) => console.log(sel.value)}
/>

<DateRangePicker
  selectionMode="month"
  range={false}
  onChange={(sel) => console.log(sel.value)}
/>

<DateRangePicker
  selectionMode="year"
  range={false}
  onChange={(sel) => console.log(sel.value)}
/>`,A=()=>{let[e,t]=(0,m.useState)(null),[n,r]=(0,m.useState)(null),[i,o]=(0,m.useState)(null),[s,l]=(0,m.useState)(null),d=e=>e?`${e[0].toLocaleDateString()} – ${e[1].toLocaleDateString()}`:`None selected`;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{title:`Selection Modes`,description:`Control what unit is selected: day (default), week, month, or year.`,centered:!1,children:(0,h.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-6`,children:[(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`label`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Day Mode (default)`}),(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:s||void 0,placeholder:`Select day range...`,onChange:e=>l(e.value)})}),(0,h.jsx)(`p`,{className:`text-xs text-gray-400`,children:d(s)})]}),(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`label`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Week Mode`}),(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e||void 0,placeholder:`Select a week...`,selectionMode:`week`,range:!1,onChange:e=>t(e.value)})}),(0,h.jsx)(`p`,{className:`text-xs text-gray-400`,children:d(e)})]}),(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`label`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Month Mode`}),(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:n||void 0,placeholder:`Select a month...`,selectionMode:`month`,range:!1,onChange:e=>r(e.value)})}),(0,h.jsx)(`p`,{className:`text-xs text-gray-400`,children:d(n)})]}),(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`label`,{className:`text-xs font-semibold text-gray-500 uppercase tracking-wide`,children:`Year Mode`}),(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:i||void 0,placeholder:`Select a year...`,selectionMode:`year`,range:!1,onChange:e=>o(e.value)})}),(0,h.jsx)(`p`,{className:`text-xs text-gray-400`,children:d(i)})]})]})}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:k,title:`Selection Modes`})})]})},j=`<DateRangePicker
  range={false}
  placeholder="Pick a date..."
  onChange={(sel) => {
    // sel.value is [Date, Date] where both are the same
    const selectedDate = sel.value[0];
    console.log(selectedDate);
  }}
/>`,M=()=>{let[e,t]=(0,m.useState)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u,{title:`Single Date Selection`,description:`Set range={false} to select a single date instead of a range. The picker closes immediately on selection.`,children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e||void 0,range:!1,placeholder:`Pick a date...`,onChange:e=>t(e.value)})}),e&&(0,h.jsxs)(`p`,{className:`text-xs text-gray-400`,children:[`Selected: `,e[0].toLocaleDateString(`en-US`,{weekday:`long`,year:`numeric`,month:`long`,day:`numeric`})]})]})}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:j,title:`Single Date`})})]})},N=()=>{let[e,t]=(0,m.useState)([new Date,new Date(Date.now()+6048e5)]);return(0,h.jsx)(u,{title:`With Today Button`,description:`Date range picker with today button and custom label`,children:(0,h.jsx)(`div`,{className:`w-full max-w-80`,children:(0,h.jsx)(a,{value:e,showTodayButton:!0,customLabel:`Select Custom Range`,onChange:e=>t(e.value),onClose:()=>console.log(`Picker closed`)})})})},{dateRangePickerProps:P}={dateRangePickerProps:{value:{type:`DateRangeValue | string | number`,description:`Selected date range [Date, Date] or range option key`},ranges:{type:`RangeOption[]`,description:`Predefined quick range options`},onChange:{type:`(selection: DateSelectedCallbackArg) => void`,description:`Callback fired when date range selection changes`},onClose:{type:`() => void`,description:`Callback fired when date picker closes`},dateFormat:{type:`string`,default:`MM/dd/yyyy`,description:`Date format string for display`},separator:{type:`string`,default:`' ~ '`,description:`Separator between start and end dates`},minDate:{type:`Date`,description:`Minimum selectable date`},maxDate:{type:`Date`,description:`Maximum selectable date`},customLabel:{type:`string`,default:`Custom`,description:`Label for custom date range option`},showTodayButton:{type:`boolean`,default:!1,description:`Whether to show today button in date picker`},disabled:{type:`boolean`,default:!1,description:`Whether the picker is disabled`},placeholder:{type:`string`,description:`Placeholder text for empty state`},position:{type:`PopoverPosition`,default:`auto`,description:`Popover position: bottomStart, bottomEnd, topStart, topEnd, auto`},id:{type:`string`,description:`HTML id attribute`},name:{type:`string`,description:`Name attribute for form integration`},className:{type:`string`,description:`CSS class name for container`},styles:{type:`React.CSSProperties`,description:`Inline styles for container`},classNames:{type:`{ container?: string; control?: string; popover?: string }`,description:`Object with CSS classes for specific elements`},range:{type:`boolean`,default:`true`,description:`When false, picker selects a single date instead of a range. Closes immediately on selection.`},selectionMode:{type:`'day' | 'week' | 'month' | 'year'`,default:`day`,description:`Controls what unit is selected: individual days, whole weeks, months, or years`},firstDayOfWeek:{type:`number`,default:`0`,description:`Day the week starts on (0=Sunday, 1=Monday, etc.). Affects calendar grid and week selection.`},args:{type:`any`,description:`Additional arguments passed in onChange callback`},locale:{type:`any`,description:`Locale configuration for date formatting`}}},F=[{id:`basic`,title:`Basic Usage`,description:`Simple date range selection`},{id:`preset`,title:`Preset Dates`,description:`Picker with preset values`},{id:`quick-select`,title:`Quick Select`,description:`Predefined quick ranges`},{id:`custom-format`,title:`Custom Format`,description:`Custom date format and separator`},{id:`constraints`,title:`Constraints`,description:`Min/max date limits`},{id:`today-button`,title:`Today Button`,description:`Today button and custom label`},{id:`position`,title:`Position`,description:`Popover position control`},{id:`disabled`,title:`Disabled`,description:`Disabled state`},{id:`single-date`,title:`Single Date`,description:`Single date selection mode`},{id:`selection-modes`,title:`Selection Modes`,description:`Week, month, year selection`},{id:`first-day-of-week`,title:`First Day of Week`,description:`Custom week start day`},{id:`usage-examples`,title:`Usage Examples`,description:`Code examples`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],I=[{title:`Calendar Interface`,description:`Dual-month calendar for intuitive date range selection with visual range highlighting.`,icon:`M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5`},{title:`Quick Select Ranges`,description:`Pre-built range options like Today, Last 7 Days, Last 30 Days for fast selection.`,icon:`M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z`},{title:`Custom Formatting`,description:`Configure any date format string and custom separator between start and end dates.`,icon:`M16.862 4.487l1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931zm0 0L19.5 7.125`},{title:`Date Constraints`,description:`Restrict selectable dates with minDate and maxDate to enforce business rules.`,icon:`M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636`},{title:`Popover Positioning`,description:`Control popover placement with bottomStart, bottomEnd, topStart, topEnd, or auto.`,icon:`M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z`},{title:`Today Button`,description:`Optional today button for quick navigation back to the current date.`,icon:`M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`},{title:`Disabled State`,description:`Full disabled support prevents user interaction while maintaining visual clarity.`,icon:`M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636`},{title:`Theming`,description:`Full dark/light mode and all 5 brand themes supported automatically via CSS variables.`,icon:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`}],L=()=>{let{isDark:e}=i();return(0,h.jsxs)(s,{sectionNavItems:F,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h1`,{className:(0,p.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`DateRangePicker`}),(0,h.jsx)(`p`,{className:(0,p.default)(`text-xl leading-relaxed`,{"text-gray-400":e,"text-gray-600":!e}),children:`A component for selecting date ranges with calendar interface and customizable formatting.`})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,h.jsx)(f,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`preset`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`With Preset Dates`}),(0,h.jsx)(C,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`quick-select`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Quick Select Ranges`}),(0,h.jsx)(O,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-format`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Format`}),(0,h.jsx)(_,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`constraints`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Constraints`}),(0,h.jsx)(g,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`today-button`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Today Button`}),(0,h.jsx)(N,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`position`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Popover Position`}),(0,h.jsx)(S,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`disabled`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Disabled State`}),(0,h.jsx)(v,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`single-date`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Single Date Selection`}),(0,h.jsx)(M,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`selection-modes`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Selection Modes`}),(0,h.jsx)(A,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`first-day-of-week`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`First Day of Week`}),(0,h.jsx)(x,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`usage-examples`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Usage Examples`}),(0,h.jsxs)(`div`,{className:`space-y-6`,children:[(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`h3`,{className:(0,p.default)(`text-lg font-medium`,{"text-gray-300":e,"text-gray-700":!e}),children:`Basic Usage`}),(0,h.jsx)(c,{code:w,language:`typescript`})]}),(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`h3`,{className:(0,p.default)(`text-lg font-medium`,{"text-gray-300":e,"text-gray-700":!e}),children:`With Quick Select Ranges`}),(0,h.jsx)(c,{code:T,language:`typescript`})]}),(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`h3`,{className:(0,p.default)(`text-lg font-medium`,{"text-gray-300":e,"text-gray-700":!e}),children:`Advanced Usage`}),(0,h.jsx)(c,{code:E,language:`typescript`})]})]})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,h.jsx)(c,{code:`import { DateRangePicker } from 'fluxo-ui';`,language:`typescript`})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`props`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,h.jsx)(l,{props:P})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,h.jsx)(d,{features:I})]})]})};export{L as default};