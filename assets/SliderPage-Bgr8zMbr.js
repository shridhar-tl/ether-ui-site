import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./Slider-BTdD8M5J.js";import{t as o}from"./PageLayout-DSwLk1XV.js";import{t as s}from"./CodeBlock-C1PblznF.js";import{t as c}from"./PropsTable-B4RgQiZf.js";import{t as l}from"./ComponentDemo-C0Y_0jmn.js";import{t as u}from"./FeatureCard-D_o4IlGr.js";import d from"./BasicUsage-CfHvUCn2.js";var f=e(t(),1),p=e(r(),1),m=n(),h=`import { Slider } from 'fluxo-ui';

// Currency formatting
<Slider
  min={0}
  max={1000}
  step={10}
  defaultValue={500}
  showTooltip="always"
  tooltipFormat={(v) => \`$\${v}\`}
  valueFormat={(v) => \`$\${v.toLocaleString()}\`}
  showValue
  valuePosition="top"
/>

// Percentage formatting
<Slider
  defaultValue={65}
  showTooltip="always"
  tooltipFormat={(v) => \`\${v}%\`}
  showMinMax
/>

// Temperature with unit
<Slider
  min={-20}
  max={50}
  defaultValue={22}
  showTooltip
  tooltipFormat={(v) => \`\${v}°F\`}
  showValue
  valuePosition="right"
  valueFormat={(v) => \`\${v}°F\`}
/>`,g=()=>{let[e,t]=(0,p.useState)(500),[n,r]=(0,p.useState)(65);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Value Formatting`,description:`Use tooltipFormat and valueFormat to customize how values are displayed.`,children:(0,m.jsxs)(`div`,{className:`space-y-10 w-full max-w-lg`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Currency format`}),(0,m.jsx)(a,{min:0,max:1e3,step:10,value:e,onChange:e=>t(e),showTooltip:`always`,tooltipFormat:e=>`$${e}`,valueFormat:e=>`$${e.toLocaleString()}`,showValue:!0,valuePosition:`top`,variant:`success`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Percentage format`}),(0,m.jsx)(a,{value:n,onChange:e=>r(e),showTooltip:`always`,tooltipFormat:e=>`${e}%`,showMinMax:!0,variant:`primary`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Temperature with unit`}),(0,m.jsx)(a,{min:-20,max:50,defaultValue:22,showTooltip:!0,tooltipFormat:e=>`${e}\u00B0F`,showValue:!0,valuePosition:`right`,valueFormat:e=>`${e}\u00B0F`,variant:`danger`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Time duration (minutes)`}),(0,m.jsx)(a,{min:0,max:120,step:5,defaultValue:45,showTooltip:`always`,tooltipFormat:e=>{let t=Math.floor(e/60),n=e%60;return t>0?`${t}h ${n}m`:`${n}m`},showValue:!0,valuePosition:`top`,valueFormat:e=>{let t=Math.floor(e/60),n=e%60;return t>0?`${t}h ${n}m`:`${n}m`},variant:`info`})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:h,language:`tsx`})})]})},_=`import { Slider } from 'fluxo-ui';

// Snap to step with smooth animation
<Slider
  defaultValue={50}
  snap
  step={10}
  marks
  showTooltip
/>

// Grid step with custom duration
<Slider
  defaultValue={0}
  gridStep={25}
  gridDuration={200}
  marks
  showTooltip="always"
  variant="success"
/>`,v=()=>{let[e,t]=(0,p.useState)(50),[n,r]=(0,p.useState)(0);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Grid & Snap Behavior`,description:`Enable snap for step-based snapping, or use gridStep for coarser grid alignment with animated transitions.`,children:(0,m.jsxs)(`div`,{className:`space-y-10 w-full max-w-lg`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Snap to step=10 (value: `,e,`)`]}),(0,m.jsx)(a,{value:e,onChange:e=>t(e),snap:!0,step:10,marks:!0,showTooltip:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Grid step=25 with animation (value: `,n,`)`]}),(0,m.jsx)(a,{value:n,onChange:e=>r(e),gridStep:25,gridDuration:200,marks:!0,showTooltip:`always`,variant:`success`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Snap to step=5 with no fill`}),(0,m.jsx)(a,{defaultValue:30,snap:!0,step:5,marks:!0,filled:!1,showTooltip:!0,variant:`info`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Grid step=20, range mode`}),(0,m.jsx)(a,{range:!0,defaultRangeValue:[20,60],gridStep:20,gridDuration:150,marks:!0,showTooltip:`always`,variant:`warning`})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:_,language:`tsx`})})]})},y=`import { Slider } from 'fluxo-ui';

const [range, setRange] = useState<[number, number]>([20, 80]);

<Slider
  range
  rangeValue={range}
  onChange={(v) => setRange(v as [number, number])}
  showTooltip="always"
  showMinMax
/>

<Slider
  range
  defaultRangeValue={[1000, 5000]}
  min={0}
  max={10000}
  step={100}
  showValue
  valuePosition="top"
  valueFormat={(v) => \`$\${v.toLocaleString()}\`}
/>`,b=()=>{let[e,t]=(0,p.useState)([20,80]),[n,r]=(0,p.useState)([1e3,5e3]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Range Slider`,description:`Use the range prop for dual-thumb selection of a value range.`,children:(0,m.jsxs)(`div`,{className:`space-y-8 w-full max-w-lg`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Basic range (`,e[0],` - `,e[1],`)`]}),(0,m.jsx)(a,{range:!0,rangeValue:e,onChange:e=>t(e),showTooltip:`always`,showMinMax:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Price range filter`}),(0,m.jsx)(a,{range:!0,rangeValue:n,onChange:e=>r(e),min:0,max:1e4,step:100,showValue:!0,valuePosition:`top`,valueFormat:e=>`$${e.toLocaleString()}`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Range with marks`}),(0,m.jsx)(a,{range:!0,defaultRangeValue:[25,75],marks:!0,step:25,showTooltip:!0})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:y,language:`tsx`})})]})},x=`import { Slider } from 'fluxo-ui';
import type { SliderSize } from 'fluxo-ui';

const sizes: SliderSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

{sizes.map((size) => (
  <Slider key={size} size={size} defaultValue={50} showTooltip />
))}`,S=[{size:`xs`,label:`Extra Small`},{size:`sm`,label:`Small`},{size:`md`,label:`Medium (default)`},{size:`lg`,label:`Large`},{size:`xl`,label:`Extra Large`}],C=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Slider Sizes`,description:`Five size options control the track height, thumb size, and font size.`,children:(0,m.jsx)(`div`,{className:`space-y-6 w-full max-w-lg`,children:S.map(({size:e,label:t})=>(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[t,` (`,e,`)`]}),(0,m.jsx)(a,{size:e,defaultValue:50,showTooltip:!0,showMinMax:!0})]},e))})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:x,language:`tsx`})})]}),w=`import { Slider } from 'fluxo-ui';

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

<Slider
  labels={months}
  defaultValue={3}
  marks
  showTooltip="always"
/>

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

<Slider
  labels={sizes}
  defaultValue={2}
  marks
  showValue
  valuePosition="top"
/>`,T=[`Jan`,`Feb`,`Mar`,`Apr`,`May`,`Jun`,`Jul`,`Aug`,`Sep`,`Oct`,`Nov`,`Dec`],E=[`XS`,`S`,`M`,`L`,`XL`,`XXL`],D=[`Low`,`Medium`,`High`,`Critical`],O=()=>{let[e,t]=(0,p.useState)(3),[n,r]=(0,p.useState)(2);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`String Labels`,description:`Use the labels prop to map slider positions to string values like months or sizes.`,children:(0,m.jsxs)(`div`,{className:`space-y-10 w-full max-w-lg`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Month selector (selected: `,T[e],`)`]}),(0,m.jsx)(a,{labels:T,value:e,onChange:e=>t(e),marks:!0,showTooltip:`always`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsxs)(`div`,{className:`text-sm mb-2 opacity-70`,children:[`Clothing size (selected: `,E[n],`)`]}),(0,m.jsx)(a,{labels:E,value:n,onChange:e=>r(e),marks:!0,showValue:!0,valuePosition:`right`,variant:`info`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Priority level`}),(0,m.jsx)(a,{labels:D,defaultValue:1,marks:!0,showTooltip:!0,variant:`warning`,size:`lg`})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:w,language:`tsx`})})]})},k=`import { Slider } from 'fluxo-ui';
import type { SliderVariant } from 'fluxo-ui';

const variants: SliderVariant[] = [
  'default', 'primary', 'success', 'warning', 'danger', 'info'
];

{variants.map((variant) => (
  <Slider key={variant} variant={variant} defaultValue={60} />
))}`,A=[{variant:`default`,label:`Default`,defaultVal:45},{variant:`primary`,label:`Primary`,defaultVal:55},{variant:`success`,label:`Success`,defaultVal:65},{variant:`warning`,label:`Warning`,defaultVal:50},{variant:`danger`,label:`Danger`,defaultVal:40},{variant:`info`,label:`Info`,defaultVal:70}],j=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Color Variants`,description:`Six color variants for different semantic purposes.`,children:(0,m.jsx)(`div`,{className:`space-y-6 w-full max-w-lg`,children:A.map(({variant:e,label:t,defaultVal:n})=>(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:t}),(0,m.jsx)(a,{variant:e,defaultValue:n,showTooltip:!0})]},e))})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:k,language:`tsx`})})]}),M=`import { Slider } from 'fluxo-ui';

<Slider
  orientation="vertical"
  defaultValue={60}
  showTooltip
/>

<Slider
  orientation="vertical"
  range
  defaultRangeValue={[20, 80]}
  showTooltip="always"
  variant="success"
/>`,N=()=>{let[e,t]=(0,p.useState)(60);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Vertical Orientation`,description:`Set orientation to vertical for a top-to-bottom slider.`,children:(0,m.jsxs)(`div`,{className:`flex flex-wrap gap-8 md:gap-12 items-end`,style:{height:250},children:[(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(a,{orientation:`vertical`,value:e,onChange:e=>t(e),showTooltip:!0}),(0,m.jsx)(`span`,{className:`text-xs opacity-70`,children:`Default`})]}),(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(a,{orientation:`vertical`,defaultValue:40,variant:`success`,showTooltip:!0,showMinMax:!0}),(0,m.jsx)(`span`,{className:`text-xs opacity-70`,children:`Success`})]}),(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(a,{orientation:`vertical`,defaultValue:75,variant:`warning`,size:`lg`,showTooltip:!0}),(0,m.jsx)(`span`,{className:`text-xs opacity-70`,children:`Large`})]}),(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(a,{orientation:`vertical`,range:!0,defaultRangeValue:[20,80],variant:`info`,showTooltip:`always`}),(0,m.jsx)(`span`,{className:`text-xs opacity-70`,children:`Range`})]}),(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,m.jsx)(a,{orientation:`vertical`,defaultValue:50,disabled:!0}),(0,m.jsx)(`span`,{className:`text-xs opacity-70`,children:`Disabled`})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:M,language:`tsx`})})]})},P=`import { Slider } from 'fluxo-ui';

// Auto-generated marks based on step
<Slider defaultValue={50} marks step={10} showTooltip />

// Custom marks with labels
<Slider
  defaultValue={37}
  min={0}
  max={100}
  marks={[
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 37, label: '37°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
  ]}
  showTooltip
  variant="danger"
/>`,F=[{value:0,label:`0°C`},{value:25,label:`25°C`},{value:37,label:`37°C`},{value:50,label:`50°C`},{value:75,label:`75°C`},{value:100,label:`100°C`}],I=[{value:0,label:`0%`},{value:25,label:`25%`},{value:50,label:`50%`},{value:75,label:`75%`},{value:100,label:`100%`}],L=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l,{title:`Slider with Marks`,description:`Display marks along the track using auto-generated or custom mark definitions.`,children:(0,m.jsxs)(`div`,{className:`space-y-10 w-full max-w-lg`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Auto marks (step=25)`}),(0,m.jsx)(a,{defaultValue:50,marks:!0,step:25,showTooltip:!0})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Temperature marks`}),(0,m.jsx)(a,{defaultValue:37,min:0,max:100,marks:F,showTooltip:!0,variant:`danger`,tooltipFormat:e=>`${e}\u00B0C`})]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`text-sm mb-2 opacity-70`,children:`Percentage marks with range`}),(0,m.jsx)(a,{range:!0,defaultRangeValue:[25,75],marks:I,showTooltip:!0,variant:`success`})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(s,{code:P,language:`tsx`})})]}),{sliderProps:R}={sliderProps:{value:{type:`number`,description:`Controlled value of the slider.`},defaultValue:{type:`number`,default:`0`,description:`Initial value for uncontrolled usage.`},min:{type:`number`,default:`0`,description:`Minimum value.`},max:{type:`number`,default:`100`,description:`Maximum value.`},step:{type:`number`,default:`1`,description:`Step increment between values.`},orientation:{type:`'horizontal' | 'vertical'`,default:`'horizontal'`,description:`Slider axis direction.`},size:{type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,default:`'md'`,description:`Size of the track and thumb.`},variant:{type:`'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'`,default:`'primary'`,description:`Color variant.`},disabled:{type:`boolean`,default:`false`,description:`Disable interaction.`},range:{type:`boolean`,default:`false`,description:`Enable dual-thumb range mode.`},rangeValue:{type:`[number, number]`,description:`Controlled range value (low, high).`},defaultRangeValue:{type:`[number, number]`,description:`Initial range value for uncontrolled usage.`},marks:{type:`SliderMark[] | boolean`,description:`Display marks on the track. Pass true for auto-generated marks or an array for custom marks.`},showTooltip:{type:`boolean | 'always'`,default:`false`,description:`Show tooltip on hover/drag or always.`},tooltipFormat:{type:`(value: number) => string`,description:`Custom formatter for tooltip text.`},valueFormat:{type:`(value: number) => string`,description:`Custom formatter for displayed value.`},showValue:{type:`boolean`,default:`false`,description:`Display the current value alongside the slider.`},valuePosition:{type:`'top' | 'bottom' | 'left' | 'right'`,default:`'top'`,description:`Position of the displayed value.`},snap:{type:`boolean`,default:`false`,description:`Snap the thumb to the nearest step.`},gridStep:{type:`number`,description:`Coarser step for grid-based snapping.`},gridDuration:{type:`number`,default:`150`,description:`Animation duration (ms) for grid snap transitions.`},labels:{type:`string[]`,description:`Map slider positions to string labels. Min/max auto-set from array length.`},showMinMax:{type:`boolean`,default:`false`,description:`Show min and max labels at the ends.`},trackHeight:{type:`number`,description:`Override the track height/width in pixels.`},thumbSize:{type:`number`,description:`Override the thumb size in pixels.`},filled:{type:`boolean`,default:`true`,description:`Show a filled track from min to current value.`},onChange:{type:`(value: number | [number, number]) => void`,description:`Called on every value change during interaction.`},onChangeEnd:{type:`(value: number | [number, number]) => void`,description:`Called when interaction ends (pointer up or keyboard).`},name:{type:`string`,description:"When set, renders hidden form inputs so the slider value submits with surrounding forms. Range mode produces `${name}_min` and `${name}_max`."},rangeStartLabel:{type:`string`,default:`'Minimum'`,description:`ARIA label for the lower thumb in range mode (helps screen readers distinguish thumbs).`},rangeEndLabel:{type:`string`,default:`'Maximum'`,description:`ARIA label for the upper thumb in range mode.`}}},z=[{id:`basic-usage`,title:`Basic Usage`,description:`Simple slider with defaults`},{id:`range-slider`,title:`Range Slider`,description:`Dual-thumb range selection`},{id:`sizes`,title:`Sizes`,description:`All size variants`},{id:`variants`,title:`Variants`,description:`Color variants`},{id:`vertical`,title:`Vertical`,description:`Vertical orientation`},{id:`marks`,title:`With Marks`,description:`Marks and labels on track`},{id:`string-values`,title:`String Values`,description:`String labels like months`},{id:`formatting`,title:`Formatting`,description:`Custom value formatting`},{id:`grid-snap`,title:`Grid & Snap`,description:`Snap and grid behavior`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],B=[{title:`Range Mode`,description:`Dual-thumb slider for selecting value ranges with independent low/high controls.`,icon:`M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5`},{title:`Five Sizes`,description:`Extra small to extra large with proportional track, thumb, and font scaling.`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Six Variants`,description:`Semantic color variants: default, primary, success, warning, danger, and info.`,icon:`M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072`},{title:`Marks & Labels`,description:`Auto-generated or custom marks with labels along the track for precise selection.`,icon:`M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z`},{title:`Grid Snap`,description:`Snap to steps or a custom grid with configurable animation duration.`,icon:`M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125`},{title:`Accessibility`,description:`Full keyboard support with arrow keys, Page Up/Down, Home/End, and ARIA attributes.`,icon:`M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z`}],V=()=>{let{isDark:e}=i();return(0,m.jsxs)(o,{sectionNavItems:z,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h1`,{className:(0,f.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Slider`}),(0,m.jsx)(`p`,{className:(0,f.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A versatile slider component with range mode, marks, string labels, snap behavior, and full keyboard accessibility.`})]}),(0,m.jsxs)(`section`,{id:`basic-usage`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,m.jsx)(d,{})]}),(0,m.jsxs)(`section`,{id:`range-slider`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Range Slider`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Enable dual-thumb mode with the `,(0,m.jsx)(`code`,{children:`range`}),` prop for selecting a value range.`]}),(0,m.jsx)(b,{})]}),(0,m.jsxs)(`section`,{id:`sizes`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sizes`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use the `,(0,m.jsx)(`code`,{children:`size`}),` prop to control the track height, thumb size, and label font size.`]}),(0,m.jsx)(C,{})]}),(0,m.jsxs)(`section`,{id:`variants`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Variants`}),(0,m.jsx)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Six color variants for different semantic contexts.`}),(0,m.jsx)(j,{})]}),(0,m.jsxs)(`section`,{id:`vertical`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Vertical`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set `,(0,m.jsx)(`code`,{children:`orientation="vertical"`}),` for a vertical slider layout.`]}),(0,m.jsx)(N,{})]}),(0,m.jsxs)(`section`,{id:`marks`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`With Marks`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Add marks along the track with `,(0,m.jsx)(`code`,{children:`marks={true}`}),` for auto-generated marks or pass a custom array.`]}),(0,m.jsx)(L,{})]}),(0,m.jsxs)(`section`,{id:`string-values`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`String Values`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use the `,(0,m.jsx)(`code`,{children:`labels`}),` prop to map slider positions to string values such as months, sizes, or priorities.`]}),(0,m.jsx)(O,{})]}),(0,m.jsxs)(`section`,{id:`formatting`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Formatting`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Customize how values appear with `,(0,m.jsx)(`code`,{children:`tooltipFormat`}),` and `,(0,m.jsx)(`code`,{children:`valueFormat`}),` callbacks.`]}),(0,m.jsx)(g,{})]}),(0,m.jsxs)(`section`,{id:`grid-snap`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Grid & Snap`}),(0,m.jsxs)(`p`,{className:(0,f.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,m.jsx)(`code`,{children:`snap`}),` for step-based snapping or `,(0,m.jsx)(`code`,{children:`gridStep`}),` for coarser grid alignment with animated transitions.`]}),(0,m.jsx)(v,{})]}),(0,m.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,m.jsx)(s,{code:`import { Slider } from 'fluxo-ui';
import type { SliderProps, SliderMark, SliderSize, SliderVariant } from 'fluxo-ui';`})]}),(0,m.jsxs)(`section`,{id:`props`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,m.jsx)(c,{props:R})]}),(0,m.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:(0,f.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,m.jsx)(u,{features:B})]})]})};export{V as default};