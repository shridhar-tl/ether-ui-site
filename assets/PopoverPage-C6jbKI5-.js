import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./Popover-BTpqnUgk.js";import{t as o}from"./TextInput-eVRCCUOC.js";import{E as s}from"../index.BXfAFPWO.js";import{t as c}from"./PageLayout-DSwLk1XV.js";import{t as l}from"./CodeBlock-C1PblznF.js";import{t as u}from"./PropsTable-B4RgQiZf.js";import{t as d}from"./ComponentDemo-C0Y_0jmn.js";import{t as f}from"./FeatureCard-D_o4IlGr.js";import p,{i as m,n as h,r as g,t as _}from"./BasicUsage-DBaeABgd.js";var v=e(t(),1),y=e(r(),1),b=n(),x=`const [isOpen, setIsOpen] = useState(false);
const triggerRef = useRef<HTMLButtonElement>(null);

<div className="flex gap-3">
  <Button ref={triggerRef} onClick={() => setIsOpen(true)}>
    Open Popover
  </Button>
  <Button variant="danger" layout="outlined"
    onClick={() => setIsOpen(false)}>
    Close Popover
  </Button>
</div>

<Popover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  triggerElement={triggerRef.current}
  items={colorItems}
  onSelect={(item) => {
    setSelected(item);
    setIsOpen(false);
  }}
/>`,S=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(null),i=(0,y.useRef)(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{title:`Controlled open and close`,description:`Programmatically control the popover with separate open and close buttons.`,children:(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,b.jsxs)(`div`,{className:`flex gap-3`,children:[(0,b.jsx)(`span`,{ref:i,children:(0,b.jsx)(s,{variant:`primary`,onClick:()=>t(!0),children:`Open Popover`})}),(0,b.jsx)(s,{variant:`danger`,layout:`outlined`,onClick:()=>t(!1),children:`Close Popover`})]}),(0,b.jsx)(a,{isOpen:e,onClose:()=>t(!1),triggerElement:i.current,items:h,onSelect:e=>{r(e),t(!1)},selectedIndex:h.findIndex(e=>e.value===n?.value)}),n&&(0,b.jsxs)(`span`,{className:`text-sm opacity-70`,children:[`Selected: `,n.label]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(l,{code:x})})]})},C=[{label:`Online`,value:`online`},{label:`Away`,value:`away`},{label:`Busy`,value:`busy`},{label:`Offline`,value:`offline`}],w={online:`#22c55e`,away:`#eab308`,busy:`#ef4444`,offline:`#6b7280`},T=`const renderItem = (item, index, isSelected, isHighlighted) => (
  <div
    className={cn('eui-popover-item', {
      'eui-popover-item-highlighted': isHighlighted,
      'eui-popover-item-selected': isSelected,
    })}
    onClick={() => handleSelect(item, index)}
    onMouseEnter={() => setHighlighted(index)}
  >
    <span
      style={{
        width: 8, height: 8,
        borderRadius: '50%',
        backgroundColor: statusColors[item.value],
      }}
    />
    <span>{item.label}</span>
  </div>
);

<Popover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  triggerElement={triggerRef.current}
  items={statusItems}
  onSelect={handleSelect}
  renderItem={renderItem}
  width="180px"
/>`,E=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(C[0]),i=(0,y.useRef)(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{title:`Custom renderItem`,description:`Use the renderItem prop to fully customize how each list item is rendered.`,children:(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,b.jsx)(`span`,{ref:i,children:(0,b.jsx)(s,{onClick:()=>t(!e),children:(0,b.jsxs)(`span`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:w[n.value],display:`inline-block`}}),n.label]})})}),(0,b.jsx)(a,{isOpen:e,onClose:()=>t(!1),triggerElement:i.current,items:C,onSelect:e=>{r(e),t(!1)},selectedIndex:C.findIndex(e=>e.value===n.value),renderItem:(e,n,i,a)=>(0,b.jsxs)(`div`,{className:`eui-popover-item${a?` eui-popover-item-highlighted`:``}${i?` eui-popover-item-selected`:``}`,onClick:()=>{r(e),t(!1)},children:[(0,b.jsx)(`span`,{style:{width:8,height:8,borderRadius:`50%`,backgroundColor:w[e.value],display:`inline-block`,flexShrink:0}}),(0,b.jsx)(`span`,{className:`eui-popover-item-label`,children:e.label})]}),width:`180px`})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(l,{code:T})})]})},D=`const [filter, setFilter] = useState('');

<Popover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  triggerElement={triggerRef.current}
  items={fruitItems}
  filter={filter}
  onSelect={(item) => {
    setSelected(item);
    setIsOpen(false);
  }}
  emptyMessage="No fruits match your search"
>
  <div style={{ padding: '8px' }}>
    <TextInput
      value={filter}
      onChange={setFilter}
      placeholder="Search fruits..."
    />
  </div>
</Popover>`,O=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(null),[i,c]=(0,y.useState)(``),u=(0,y.useRef)(null),f=()=>{t(!1),c(``)};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{title:`Filterable popover with children`,description:`Use the filter prop alongside children to render a search input above the list.`,children:(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,b.jsx)(`span`,{ref:u,children:(0,b.jsx)(s,{variant:`primary`,layout:`outlined`,onClick:()=>t(!e),children:n?n.label:`Search & select`})}),(0,b.jsx)(a,{isOpen:e,onClose:f,triggerElement:u.current,items:g,filter:i,onSelect:e=>{r(e),f()},selectedIndex:g.findIndex(e=>e.value===n?.value),emptyMessage:`No fruits match your search`,width:`220px`,children:(0,b.jsx)(`div`,{style:{padding:`8px 8px 0`},children:(0,b.jsx)(o,{value:i,onChange:e=>c(e.value||e),placeholder:`Search fruits...`})})}),n&&(0,b.jsxs)(`span`,{className:`text-sm opacity-70`,children:[`Selected: `,n.label]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(l,{code:D})})]})},k=`const groups = [
  {
    label: 'Fruits',
    items: [
      { label: 'Apple', value: 'apple' },
      { label: 'Banana', value: 'banana' },
    ],
  },
  {
    label: 'Vegetables',
    items: [
      { label: 'Carrot', value: 'carrot' },
      { label: 'Broccoli', value: 'broccoli' },
    ],
  },
];

<Popover
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  triggerElement={triggerRef.current}
  items={allItems}
  groups={groups}
  onSelect={(item) => {
    setSelected(item);
    setIsOpen(false);
  }}
/>`,A=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(null),i=(0,y.useRef)(null);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(d,{title:`Grouped list items`,description:`Items organized into labeled groups with section headers.`,children:(0,b.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,b.jsx)(`span`,{ref:i,children:(0,b.jsx)(s,{variant:`primary`,onClick:()=>t(!e),children:n?n.label:`Select category item`})}),(0,b.jsx)(a,{isOpen:e,onClose:()=>t(!1),triggerElement:i.current,items:_,groups:m,onSelect:e=>{r(e),t(!1)},selectedIndex:_.findIndex(e=>e.value===n?.value)}),n&&(0,b.jsxs)(`span`,{className:`text-sm opacity-70`,children:[`Selected: `,n.label]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(l,{code:k})})]})},{popoverProps:j}={popoverProps:{isOpen:{type:`boolean`,required:!0,description:`Controls whether the popover is visible.`},onClose:{type:`(e?: MouseEvent) => void`,required:!0,description:`Callback invoked when the popover should close (click outside, Escape key).`},triggerElement:{type:`HTMLElement | null`,required:!0,description:`The DOM element the popover is anchored to for positioning.`},items:{type:`ListItem[]`,required:!0,description:`Array of list items to display inside the popover.`},groups:{type:`ListItemGroup[]`,description:`Optional grouping of items with labeled section headers.`},onSelect:{type:`(item: ListItem, index: number) => void`,required:!0,description:`Callback invoked when an item is selected.`},selectedIndex:{type:`number`,default:`-1`,description:`Index of the currently selected item (shows a check mark).`},renderItem:{type:`(item, index, isSelected, isHighlighted) => ReactNode`,description:`Custom render function for each list item.`},maxHeight:{type:`string`,default:`'300px'`,description:`Maximum height of the popover container before scrolling.`},width:{type:`string`,description:`Width of the popover. Defaults to the trigger element's width.`},filter:{type:`string`,default:`''`,description:`Filter string to narrow down displayed items by label.`},loading:{type:`boolean`,default:`false`,description:`Shows a loading spinner instead of items.`},emptyMessage:{type:`string`,default:`'No items found'`,description:`Message displayed when no items match the filter.`},children:{type:`ReactNode`,description:`Content rendered above the item list (e.g., a search input).`}}},M=[{id:`basic-usage`,title:`Basic Usage`,description:`Simple selectable list`},{id:`grouped-items`,title:`Grouped Items`,description:`Categorized item groups`},{id:`controlled`,title:`Controlled`,description:`Programmatic open/close`},{id:`custom-content`,title:`Custom Render`,description:`Custom item rendering`},{id:`filterable`,title:`Filterable`,description:`Search with children slot`},{id:`import`,title:`Import`,description:`Import statement`},{id:`api-reference`,title:`API Reference`,description:`Props table`},{id:`features`,title:`Features`,description:`Feature summary`}],N=[{title:`Portal Rendering`,description:`Renders in a portal so the popover is never clipped by overflow:hidden containers or stacking contexts.`,icon:`M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25`},{title:`Keyboard Navigation`,description:`Full keyboard support with ArrowUp, ArrowDown to navigate, Enter to select, and Escape to close.`,icon:`M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z`},{title:`Smart Positioning`,description:`Automatically calculates the best position relative to the trigger element using usePosition hook.`,icon:`M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z`},{title:`Grouped Items`,description:`Organize items into labeled groups with section headers for better categorization.`,icon:`M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z`},{title:`Custom Rendering`,description:`Supply a renderItem function to fully control the appearance of each item in the list.`,icon:`M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5`},{title:`Built-in Filtering`,description:`Pass a filter string to narrow items by label, and use the children slot to render a search input.`,icon:`M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z`},{title:`Mobile Responsive`,description:`Adapts to mobile viewports with a full-width bottom sheet layout using the useMobile hook.`,icon:`M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3`},{title:`Click Outside to Close`,description:`Clicking anywhere outside the popover automatically closes it via the useClickOutside hook.`,icon:`M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59`}],P=()=>{let{isDark:e}=i();return(0,b.jsxs)(c,{sectionNavItems:M,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h1`,{className:(0,v.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Popover`}),(0,b.jsx)(`p`,{className:(0,v.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A floating panel anchored to a trigger element that displays a selectable list of items. Supports keyboard navigation, grouped items, custom rendering, built-in filtering, and mobile-responsive layout.`})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic-usage`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,b.jsx)(p,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`grouped-items`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Grouped Items`}),(0,b.jsx)(A,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`controlled`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Controlled Open/Close`}),(0,b.jsx)(S,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-content`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Render Item`}),(0,b.jsx)(E,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`filterable`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Filterable Popover`}),(0,b.jsx)(O,{})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,b.jsx)(l,{code:`import { Popover } from 'fluxo-ui';`})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`api-reference`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`API Reference`}),(0,b.jsx)(u,{props:j})]}),(0,b.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,b.jsx)(f,{features:N})]})]})};export{P as default};