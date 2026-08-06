import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./bar-chart-CAKlaI3C.js";import{t as i}from"./filter-DbjKZRlp.js";import{t as a}from"./search-CByNG2U-.js";import{t as o}from"./settings-DvV_vEFp.js";import{t as s}from"./folder-AJ_IiHSb.js";import{t as c}from"./DockedLayout-DeqMHv9G.js";import{t as l}from"./CodeBlock-C1PblznF.js";import{t as u}from"./ComponentDemo-C0Y_0jmn.js";var d=e(n(),1),f=t(),p=[{id:`explorer`,title:`Explorer`,icon:s,defaultPosition:`left`,defaultState:`pinned`,defaultSize:220,children:(0,f.jsxs)(`div`,{style:{padding:`12px`,color:`var(--eui-text)`},children:[(0,f.jsx)(`div`,{style:{fontWeight:600,fontSize:12,marginBottom:8,color:`var(--eui-text-muted)`},children:`FILES`}),[`src/`,`public/`,`package.json`,`tsconfig.json`,`README.md`].map(e=>(0,f.jsx)(`div`,{style:{padding:`4px 8px`,borderRadius:4,fontSize:13,cursor:`pointer`},onMouseEnter:e=>{e.currentTarget.style.background=`var(--eui-bg-hover)`},onMouseLeave:e=>{e.currentTarget.style.background=`transparent`},children:e},e))]})},{id:`search`,title:`Search`,icon:a,defaultPosition:`left`,defaultState:`pinned`,defaultSize:220,children:(0,f.jsxs)(`div`,{style:{padding:`12px`,color:`var(--eui-text)`},children:[(0,f.jsx)(`input`,{placeholder:`Search files...`,style:{width:`100%`,padding:`6px 10px`,borderRadius:4,border:`1px solid var(--eui-border)`,background:`var(--eui-bg-subtle)`,color:`var(--eui-text)`,fontSize:13,boxSizing:`border-box`},"aria-label":`Search files`}),(0,f.jsx)(`div`,{style:{marginTop:12,fontSize:12,color:`var(--eui-text-muted)`},children:`Type to search across files`})]})},{id:`properties`,title:`Properties`,icon:o,defaultPosition:`right`,defaultState:`pinned`,defaultSize:240,children:(0,f.jsxs)(`div`,{style:{padding:`12px`,color:`var(--eui-text)`},children:[(0,f.jsx)(`div`,{style:{fontWeight:600,fontSize:12,marginBottom:8,color:`var(--eui-text-muted)`},children:`PROPERTIES`}),[[`Name`,`MyComponent`],[`Type`,`React.FC`],[`Width`,`100%`],[`Height`,`auto`]].map(([e,t])=>(0,f.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,padding:`4px 0`,fontSize:13,borderBottom:`1px solid var(--eui-border-subtle)`},children:[(0,f.jsx)(`span`,{style:{color:`var(--eui-text-muted)`},children:e}),(0,f.jsx)(`span`,{children:t})]},e))]})},{id:`filters`,title:`Filters`,icon:i,defaultPosition:`right`,defaultState:`auto-hide`,defaultSize:240,children:(0,f.jsxs)(`div`,{style:{padding:`12px`,color:`var(--eui-text)`},children:[(0,f.jsx)(`div`,{style:{fontWeight:600,fontSize:12,marginBottom:8,color:`var(--eui-text-muted)`},children:`FILTERS`}),(0,f.jsx)(`div`,{style:{fontSize:13,color:`var(--eui-text-muted)`},children:`No active filters`})]})},{id:`output`,title:`Output`,icon:r,defaultPosition:`bottom`,defaultState:`pinned`,defaultSize:150,children:(0,f.jsxs)(`div`,{style:{padding:`8px 12px`,fontFamily:`Menlo, monospace`,fontSize:12,color:`var(--eui-text)`},children:[(0,f.jsx)(`div`,{style:{color:`#22c55e`},children:`[INFO] Build complete in 324ms`}),(0,f.jsx)(`div`,{style:{color:`var(--eui-text-muted)`},children:`[INFO] Watching for file changes...`}),(0,f.jsx)(`div`,{style:{color:`#f59e0b`},children:`[WARN] Unused variable at line 42`})]})}],m=`import { DockedLayout } from 'fluxo-ui';
import type { PanelConfig } from 'fluxo-ui';

const panels: PanelConfig[] = [
  {
    id: 'explorer',
    title: 'Explorer',
    icon: FolderIcon,
    defaultPosition: 'left',
    defaultState: 'pinned',
    defaultSize: 220,
    children: <ExplorerPanel />,
  },
  {
    id: 'properties',
    title: 'Properties',
    icon: SettingsIcon,
    defaultPosition: 'right',
    defaultState: 'pinned',
    defaultSize: 240,
    children: <PropertiesPanel />,
  },
  {
    id: 'output',
    title: 'Output',
    icon: BarChartIcon,
    defaultPosition: 'bottom',
    defaultState: 'pinned',
    defaultSize: 150,
    children: <OutputPanel />,
  },
];

<DockedLayout panels={panels}>
  <main style={{ padding: 24 }}>Main content here</main>
</DockedLayout>`,h=()=>{let[e,t]=(0,d.useState)(0);return(0,f.jsx)(u,{title:`Basic Usage`,description:`Left, right, and bottom panels with tabbed groups. 'Filters' starts as auto-hide. Drag panel headers to re-dock. Click the pin button to toggle pinned/auto-hide.`,centered:!1,children:(0,f.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,f.jsx)(`div`,{style:{height:480,width:`100%`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,overflow:`hidden`},children:(0,f.jsx)(c,{panels:p,children:(0,f.jsxs)(`div`,{style:{padding:24,color:`var(--eui-text)`},children:[(0,f.jsx)(`h2`,{style:{margin:`0 0 8px`,fontSize:20,fontWeight:600},children:`Main Content`}),(0,f.jsx)(`p`,{style:{color:`var(--eui-text-muted)`,fontSize:14,margin:`0 0 16px`},children:`Resize by dragging the edge between panel and center. Drag a panel header to re-dock it. Press the pin icon to toggle auto-hide.`}),(0,f.jsxs)(`button`,{onClick:()=>t(e=>e+1),style:{padding:`8px 16px`,borderRadius:6,border:`1px solid var(--eui-border)`,background:`var(--eui-primary)`,color:`#fff`,cursor:`pointer`,fontSize:13},children:[`Clicked `,e,` times`]})]})})}),(0,f.jsx)(l,{code:m})]})})};export{h as default};