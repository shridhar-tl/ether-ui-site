import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./PageLayout-DSwLk1XV.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./PropsTable-B4RgQiZf.js";import{t as c}from"./ComponentDemo-C0Y_0jmn.js";import{t as l}from"./FeatureCard-D_o4IlGr.js";import u,{a as d,i as f,n as p,o as m,r as h,s as g,t as _}from"./BasicUsage-pen8cELY.js";var v=e(t(),1),y=e(r(),1),b=n(),x=`import { MenuNav } from 'fluxo-ui';

const [collapsed, setCollapsed] = useState(false);

<MenuNav
  items={items}
  collapsible
  collapsed={collapsed}
  onCollapsedChange={setCollapsed}
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,S=()=>{let[e,t]=(0,y.useState)(`home`),[n,r]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Collapsible Sidebar`,description:`Toggle between full and icon-only mode. Click the hamburger icon to collapse/expand.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 w-full`,children:[(0,b.jsx)(`div`,{className:`shrink-0`,style:{width:n?`auto`:void 0,maxWidth:n?void 0:`240px`,transition:`width 0.2s ease`},children:(0,b.jsx)(g,{items:p,collapsible:!0,collapsed:n,onCollapsedChange:r,selectedId:e,onSelect:e=>t(e)})}),(0,b.jsx)(`div`,{className:`flex-1 flex items-center justify-center text-sm opacity-60`,children:(0,b.jsxs)(`div`,{className:`text-center`,children:[(0,b.jsxs)(`p`,{children:[`Selected: `,(0,b.jsx)(`strong`,{children:e})]}),(0,b.jsxs)(`p`,{className:`mt-1`,children:[`Collapsed: `,(0,b.jsx)(`strong`,{children:n?`Yes`:`No`})]})]})})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:x,language:`tsx`})})]})},C=`import { MenuNav } from 'fluxo-ui';

<MenuNav
  items={items}
  showSearch
  searchPlaceholder="Search menu..."
  headerSlot={
    <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--eui-border)' }}>
      <div style={{ fontWeight: 600, fontSize: '14px' }}>Acme Inc.</div>
      <div style={{ fontSize: '12px', opacity: 0.6 }}>Workspace</div>
    </div>
  }
  footerSlot={
    <div style={{ padding: '12px 16px', borderTop: '1px solid var(--eui-border)', display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--eui-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '13px', fontWeight: 600 }}>JD</div>
      <div>
        <div style={{ fontSize: '13px', fontWeight: 500 }}>John Doe</div>
        <div style={{ fontSize: '11px', opacity: 0.6 }}>john@acme.com</div>
      </div>
    </div>
  }
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,w=(0,b.jsxs)(`div`,{style:{padding:`12px 16px`,borderBottom:`1px solid var(--eui-border)`},children:[(0,b.jsx)(`div`,{style:{fontWeight:600,fontSize:`14px`},children:`Acme Inc.`}),(0,b.jsx)(`div`,{style:{fontSize:`12px`,opacity:.6},children:`Workspace`})]}),T=(0,b.jsxs)(`div`,{style:{padding:`12px 16px`,borderTop:`1px solid var(--eui-border)`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,b.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:`var(--eui-primary)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:`13px`,fontWeight:600},children:`JD`}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`div`,{style:{fontSize:`13px`,fontWeight:500},children:`John Doe`}),(0,b.jsx)(`div`,{style:{fontSize:`11px`,opacity:.6},children:`john@acme.com`})]})]}),E=()=>{let[e,t]=(0,y.useState)(`home`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Header, Footer & Search`,description:`Custom header and footer slots with built-in search functionality.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 w-full`,children:[(0,b.jsx)(`div`,{className:`w-full sm:w-64 shrink-0`,children:(0,b.jsx)(g,{items:p,showSearch:!0,searchPlaceholder:`Search menu...`,headerSlot:w,footerSlot:T,selectedId:e,onSelect:e=>t(e)})}),(0,b.jsxs)(`div`,{className:`flex-1 flex items-center justify-center text-sm opacity-60`,children:[`Selected: `,(0,b.jsx)(`strong`,{className:`ml-1`,children:e})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:C,language:`tsx`})})]})},D=`import { MenuNav } from 'fluxo-ui';
import type { MenuNavGroup } from 'fluxo-ui';

const items = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  {
    id: 'main-group',
    label: 'Main',
    collapsible: true,
    defaultExpanded: true,
    items: [
      { id: 'inbox', label: 'Inbox', icon: <InboxIcon /> },
      { id: 'starred', label: 'Starred', icon: <StarIcon /> },
      { id: 'documents', label: 'Documents', icon: <FileIcon /> },
    ],
  },
  {
    id: 'analytics-group',
    label: 'Analytics',
    collapsible: true,
    defaultExpanded: true,
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: <ChartIcon /> },
      { id: 'reports', label: 'Reports', icon: <FileIcon /> },
    ],
  },
  {
    id: 'admin-group',
    label: 'Administration',
    collapsible: true,
    defaultExpanded: false,
    items: [
      { id: 'users', label: 'Users', icon: <UsersIcon /> },
      { id: 'security', label: 'Security', icon: <ShieldIcon /> },
      { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
    ],
  },
];

<MenuNav
  items={items}
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,O=()=>{let[e,t]=(0,y.useState)(`home`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Grouped Menu Items`,description:`Menu items organized into collapsible groups with section headers.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 w-full`,children:[(0,b.jsx)(`div`,{className:`w-full sm:w-64 shrink-0`,children:(0,b.jsx)(g,{items:h,selectedId:e,onSelect:e=>t(e)})}),(0,b.jsxs)(`div`,{className:`flex-1 flex items-center justify-center text-sm opacity-60`,children:[`Selected: `,(0,b.jsx)(`strong`,{className:`ml-1`,children:e})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:D,language:`tsx`})})]})},k=`import { MenuNav } from 'fluxo-ui';

<MenuNav
  items={items}
  orientation="horizontal"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,A=`import { MenuNav } from 'fluxo-ui';

<MenuNav
  items={items}
  orientation="horizontal"
  selectionStyle="glow"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,j=()=>{let[e,t]=(0,y.useState)(`home`),[n,r]=(0,y.useState)(`home`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Horizontal Menu`,description:`A horizontal navigation bar with dropdown submenus.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`w-full`,children:[(0,b.jsx)(g,{items:f,orientation:`horizontal`,selectedId:e,onSelect:e=>t(e)}),(0,b.jsxs)(`div`,{className:`mt-4 text-sm opacity-60 text-center`,children:[`Selected: `,(0,b.jsx)(`strong`,{children:e})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:k,language:`tsx`})}),(0,b.jsx)(c,{title:`Glow Pill Track`,description:`A pill-shaped track with an animated, primary-tinted glowing indicator that slides behind the active item.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`w-full`,style:{display:`flex`,flexDirection:`column`,gap:16},children:[(0,b.jsx)(g,{items:_,orientation:`horizontal`,selectionStyle:`glow`,selectedId:n,onSelect:e=>r(e)}),(0,b.jsxs)(`div`,{style:{padding:`12px 16px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,color:`var(--eui-text-muted)`},children:[`Selected: `,(0,b.jsx)(`strong`,{style:{color:`var(--eui-text)`},children:n})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:A,language:`tsx`})})]})},M=`import { MenuNav } from 'fluxo-ui';

const items = [
  { id: 'home', label: 'Home', icon: <HomeIcon /> },
  {
    id: 'settings', label: 'Settings', icon: <SettingsIcon />,
    children: [
      {
        id: 'general', label: 'General',
        children: [
          { id: 'profile', label: 'Profile' },
          { id: 'preferences', label: 'Preferences' },
          {
            id: 'notifications', label: 'Notifications',
            children: [
              { id: 'email-notifs', label: 'Email' },
              { id: 'push-notifs', label: 'Push' },
              { id: 'sms-notifs', label: 'SMS' },
            ],
          },
        ],
      },
      {
        id: 'security', label: 'Security',
        children: [
          { id: 'password', label: 'Password' },
          { id: 'two-factor', label: 'Two-Factor Auth' },
        ],
      },
    ],
  },
];

<MenuNav
  items={items}
  maxSubMenuDepth={3}
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,N=()=>{let[e,t]=(0,y.useState)(`home`);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Nested Submenus`,description:`Up to 3 levels of nested submenus with expand/collapse behavior.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 w-full`,children:[(0,b.jsx)(`div`,{className:`w-full sm:w-72 shrink-0`,children:(0,b.jsx)(g,{items:d,maxSubMenuDepth:3,selectedId:e,onSelect:e=>t(e)})}),(0,b.jsxs)(`div`,{className:`flex-1 flex items-center justify-center text-sm opacity-60`,children:[`Selected: `,(0,b.jsx)(`strong`,{className:`ml-1`,children:e})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:M,language:`tsx`})})]})},P=`import { MenuNav } from 'fluxo-ui';
import type { MenuNavSelectionStyle } from 'fluxo-ui';

<MenuNav
  items={items}
  selectionStyle="border-left"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>

<MenuNav
  items={items}
  selectionStyle="background"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>

<MenuNav
  items={items}
  selectionStyle="arrow"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>

<MenuNav
  items={items}
  selectionStyle="highlight"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>

<MenuNav
  items={items}
  selectionStyle="glow"
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,F=[{label:`Border Left`,value:`border-left`},{label:`Border Bottom`,value:`border-bottom`},{label:`Background`,value:`background`},{label:`Arrow`,value:`arrow`},{label:`Highlight`,value:`highlight`},{label:`Glow`,value:`glow`}],I=()=>{let[e,t]=(0,y.useState)({"border-left":`home`,"border-bottom":`home`,background:`home`,arrow:`home`,highlight:`home`,glow:`home`});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Selection Styles`,description:`Six different visual styles for the selected menu item.`,centered:!1,children:(0,b.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full`,children:F.map(({label:n,value:r})=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`text-xs font-semibold mb-2 opacity-70`,children:n}),(0,b.jsx)(`div`,{className:`w-full`,children:(0,b.jsx)(g,{items:_,selectionStyle:r,selectedId:e[r],onSelect:e=>t(t=>({...t,[r]:e}))})})]},r))})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:P,language:`tsx`})})]})},L=`import { MenuNav } from 'fluxo-ui';

<MenuNav items={items} size="xs" />
<MenuNav items={items} size="sm" />
<MenuNav items={items} size="md" />
<MenuNav items={items} size="lg" />
<MenuNav items={items} size="xl" />`,R=[{label:`Extra Small (xs)`,value:`xs`},{label:`Small (sm)`,value:`sm`},{label:`Medium (md)`,value:`md`},{label:`Large (lg)`,value:`lg`},{label:`Extra Large (xl)`,value:`xl`}],z=()=>{let[e,t]=(0,y.useState)({xs:`home`,sm:`home`,md:`home`,lg:`home`,xl:`home`});return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Size Variants`,description:`The menu supports five size options from extra small to extra large.`,centered:!1,children:(0,b.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full`,children:R.map(({label:n,value:r})=>(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`text-xs font-semibold mb-2 opacity-70`,children:n}),(0,b.jsx)(g,{items:_,size:r,selectedId:e[r],onSelect:e=>t(t=>({...t,[r]:e}))})]},r))})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:L,language:`tsx`})})]})},B=`import { MenuNav } from 'fluxo-ui';

const items = [
  { id: 'file', label: 'File', children: [
    { id: 'new', label: 'New' },
    { id: 'open', label: 'Open' },
    { id: 'save', label: 'Save' },
  ]},
  { id: 'edit', label: 'Edit', children: [
    { id: 'undo', label: 'Undo' },
    { id: 'redo', label: 'Redo' },
    { id: 'copy', label: 'Copy' },
  ]},
  { id: 'view', label: 'View', children: [
    { id: 'zoom-in', label: 'Zoom In' },
    { id: 'zoom-out', label: 'Zoom Out' },
  ]},
  { id: 'help', label: 'Help', children: [
    { id: 'docs', label: 'Documentation' },
    { id: 'about', label: 'About' },
  ]},
];

<MenuNav
  items={items}
  toolbar
  selectedId={selectedId}
  onSelect={(id) => setSelectedId(id)}
/>`,V=()=>{let[e,t]=(0,y.useState)(``);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(c,{title:`Toolbar Mode`,description:`A horizontal toolbar-style menu, typical of application menu bars.`,centered:!1,children:(0,b.jsxs)(`div`,{className:`w-full`,children:[(0,b.jsx)(g,{items:m,toolbar:!0,selectedId:e,onSelect:e=>t(e)}),e&&(0,b.jsxs)(`div`,{className:`mt-4 text-sm opacity-60 text-center`,children:[`Selected: `,(0,b.jsx)(`strong`,{children:e})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(o,{code:B,language:`tsx`})})]})},{menuNavProps:H}={menuNavProps:{items:{type:`(MenuNavItem | MenuNavGroup)[]`,required:!0,description:`Array of menu items or groups to render.`},orientation:{type:`'vertical' | 'horizontal'`,default:`'vertical'`,description:`Layout orientation of the menu.`},size:{type:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,default:`'md'`,description:`Size of menu items.`},selectedId:{type:`string`,description:`Controlled selected item ID.`},defaultSelectedId:{type:`string`,default:`''`,description:`Default selected item ID for uncontrolled usage.`},onSelect:{type:`(id: string, item: MenuNavItem) => void`,description:`Callback when a menu item is selected.`},selectionStyle:{type:`'border-left' | 'border-bottom' | 'background' | 'arrow' | 'highlight' | 'glow'`,default:`'border-left'`,description:`Visual style for the selected item indicator. 'glow' renders an animated, primary-tinted glowing pill that slides behind the selected item (works in both vertical and horizontal orientations).`},iconPosition:{type:`'left' | 'right'`,default:`'left'`,description:`Position of icons relative to label text.`},collapsed:{type:`boolean`,description:`Controlled collapsed state (icon-only mode).`},collapsible:{type:`boolean`,default:`false`,description:`Whether the menu can be collapsed to icon-only mode.`},onCollapsedChange:{type:`(collapsed: boolean) => void`,description:`Callback when collapsed state changes.`},mobileBreakpoint:{type:`number`,default:`768`,description:`Viewport width below which mobile mode activates.`},mobileFullScreen:{type:`boolean`,default:`true`,description:`Whether mobile menu takes full screen.`},showSearch:{type:`boolean`,default:`false`,description:`Show a search input to filter menu items.`},searchPlaceholder:{type:`string`,default:`'Search...'`,description:`Placeholder text for the search input.`},searchAriaLabel:{type:`string`,default:`'Search navigation'`,description:`Accessible label for the search input (used for screen readers).`},headerSlot:{type:`ReactNode`,description:`Custom content rendered above the menu.`},footerSlot:{type:`ReactNode`,description:`Custom content rendered below the menu.`},maxSubMenuDepth:{type:`number`,default:`3`,description:`Maximum depth of nested submenus.`},toolbar:{type:`boolean`,default:`false`,description:`Enable toolbar mode (horizontal with border-bottom selection).`},className:{type:`string`,description:`Additional CSS class for the nav element.`},ariaLabel:{type:`string`,default:`'Navigation'`,description:`ARIA label for the nav element.`}}},U=[{id:`basic-usage`,title:`Basic Usage`,description:`Simple vertical menu`},{id:`horizontal`,title:`Horizontal`,description:`Horizontal menu with submenus`},{id:`selection-styles`,title:`Selection Styles`,description:`Six visual selection styles`},{id:`sizes`,title:`Sizes`,description:`All size options`},{id:`nested-menus`,title:`Nested Menus`,description:`3 levels of nested submenus`},{id:`grouped-menus`,title:`Grouped Menus`,description:`Collapsible group sections`},{id:`collapsible`,title:`Collapsible`,description:`Icon-only collapsed mode`},{id:`toolbar-mode`,title:`Toolbar Mode`,description:`Application toolbar style`},{id:`custom-slots`,title:`Custom Slots`,description:`Header, footer, and search`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],W=[{title:`Dual Orientation`,description:`Vertical sidebar or horizontal navbar layout with automatic style adjustments.`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Nested Submenus`,description:`Supports up to 3 levels of nested submenus with expand/collapse.`,icon:`M8.25 6.75h12M8.25 12h12M8.25 17.25h12M3.75 6.75h.007v.008H3.75V6.75zm0 5.25h.007v.008H3.75V12zm0 5.25h.007v.008H3.75v-.008z`},{title:`Selection Styles`,description:`Six distinct visual styles for highlighting the active menu item, including an animated glow pill.`,icon:`M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z`},{title:`Collapsible Sidebar`,description:`Toggle between full menu and compact icon-only mode.`,icon:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5`},{title:`Grouped Items`,description:`Organize items into collapsible groups with section headers.`,icon:`M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM2.25 16.125c0-.621.504-1.125 1.125-1.125h6c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-2.25z`},{title:`Mobile Responsive`,description:`Automatic mobile mode with fullscreen overlay and drill-down navigation.`,icon:`M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3`}],G=()=>{let{isDark:e}=i();return(0,b.jsxs)(a,{sectionNavItems:U,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h1`,{className:(0,v.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`MenuNav`}),(0,b.jsx)(`p`,{className:(0,v.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A versatile navigation menu component supporting vertical sidebars, horizontal navbars, nested submenus, collapsible groups, and toolbar mode.`})]}),(0,b.jsxs)(`section`,{id:`basic-usage`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,b.jsx)(u,{})]}),(0,b.jsxs)(`section`,{id:`horizontal`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Horizontal`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set `,(0,b.jsx)(`code`,{children:`orientation="horizontal"`}),` for a top navigation bar with dropdown submenus.`]}),(0,b.jsx)(j,{})]}),(0,b.jsxs)(`section`,{id:`selection-styles`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Selection Styles`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,b.jsx)(`code`,{children:`selectionStyle`}),` to change how the active item is visually indicated.`]}),(0,b.jsx)(I,{})]}),(0,b.jsxs)(`section`,{id:`sizes`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sizes`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`The `,(0,b.jsx)(`code`,{children:`size`}),` prop controls the overall scale of menu items.`]}),(0,b.jsx)(z,{})]}),(0,b.jsxs)(`section`,{id:`nested-menus`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Nested Menus`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Items can have `,(0,b.jsx)(`code`,{children:`children`}),` arrays for multi-level navigation, controlled by `,(0,b.jsx)(`code`,{children:`maxSubMenuDepth`}),`.`]}),(0,b.jsx)(N,{})]}),(0,b.jsxs)(`section`,{id:`grouped-menus`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Grouped Menus`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,b.jsx)(`code`,{children:`MenuNavGroup`}),` objects to organize items into labeled, collapsible sections.`]}),(0,b.jsx)(O,{})]}),(0,b.jsxs)(`section`,{id:`collapsible`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Collapsible`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Enable `,(0,b.jsx)(`code`,{children:`collapsible`}),` to allow toggling between full and icon-only mode.`]}),(0,b.jsx)(S,{})]}),(0,b.jsxs)(`section`,{id:`toolbar-mode`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Toolbar Mode`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set `,(0,b.jsx)(`code`,{children:`toolbar`}),` for an application-style menu bar with dropdown items.`]}),(0,b.jsx)(V,{})]}),(0,b.jsxs)(`section`,{id:`custom-slots`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Slots`}),(0,b.jsxs)(`p`,{className:(0,v.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,b.jsx)(`code`,{children:`headerSlot`}),`, `,(0,b.jsx)(`code`,{children:`footerSlot`}),`, and `,(0,b.jsx)(`code`,{children:`showSearch`}),` to add custom content around the menu.`]}),(0,b.jsx)(E,{})]}),(0,b.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,b.jsx)(o,{code:`import { MenuNav } from 'fluxo-ui';
import type { MenuNavProps, MenuNavItem, MenuNavGroup, MenuNavSize, MenuNavSelectionStyle } from 'fluxo-ui';`})]}),(0,b.jsxs)(`section`,{id:`props`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,b.jsx)(s,{props:H})]}),(0,b.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:(0,v.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,b.jsx)(l,{features:W})]})]})};export{G as default};