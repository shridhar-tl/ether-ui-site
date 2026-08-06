import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./Lightbox-C4LWkQyq.js";import{E as o}from"../index.BXfAFPWO.js";import{t as s}from"./CodeBlock-C1PblznF.js";import{t as c}from"./ComponentDemo-C0Y_0jmn.js";var l=e(t(),1);r();var u=n(),d=`import { Lightbox } from 'fluxo-ui';

<Lightbox
  trigger="hover"
  content={<img src="https://picsum.photos/400/300" />}
>
  <span>Hover me</span>
</Lightbox>

<Lightbox
  trigger="click"
  position="center"
  zoomOut
  zoomScale={0.4}
  content={<LargeComponent />}
  header="Zoomed Preview"
>
  <Button>Click to preview</Button>
</Lightbox>`,f=()=>{let{isDark:e}=i();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c,{title:`Lightbox Variants`,description:`Hover and click triggers with normal and zoomed-out views.`,children:(0,u.jsxs)(`div`,{className:`flex flex-wrap gap-6 items-start`,children:[(0,u.jsx)(a,{trigger:`hover`,content:(0,u.jsx)(`img`,{src:`https://picsum.photos/seed/lb1/400/300`,alt:`Preview`,style:{width:`100%`,display:`block`}}),width:400,showCloseButton:!1,children:(0,u.jsxs)(`div`,{className:(0,l.default)(`px-4 py-3 rounded-lg border cursor-pointer transition-all`,{"bg-white/5 border-white/10 hover:border-white/25":e,"bg-white border-gray-200 hover:border-gray-400 hover:shadow":!e}),children:[(0,u.jsx)(`p`,{className:`text-sm font-medium`,style:{color:`var(--eui-text)`},children:`Hover for image preview`}),(0,u.jsx)(`p`,{className:`text-xs`,style:{color:`var(--eui-text-muted)`},children:`Image loads in a popover`})]})}),(0,u.jsx)(a,{trigger:`click`,position:`center`,content:(0,u.jsxs)(`div`,{className:`p-6`,style:{backgroundColor:`var(--eui-bg)`},children:[(0,u.jsx)(`h3`,{className:`text-lg font-bold mb-3`,style:{color:`var(--eui-text)`},children:`Modal Content`}),(0,u.jsx)(`p`,{className:`text-sm mb-4`,style:{color:`var(--eui-text-muted)`},children:`This opens centered like a modal. Click the backdrop or press Escape to close.`}),(0,u.jsx)(`img`,{src:`https://picsum.photos/seed/lb2/500/300`,alt:`Full preview`,style:{width:`100%`,borderRadius:`8px`}})]}),width:560,header:`Image Preview`,children:(0,u.jsx)(o,{children:`Click for modal preview`})}),(0,u.jsx)(a,{trigger:`click`,position:`center`,zoomOut:!0,zoomScale:.35,zoomWidth:`1200px`,zoomHeight:`800px`,content:(0,u.jsxs)(`div`,{style:{width:`1200px`,padding:`2rem`,backgroundColor:`var(--eui-bg)`},children:[(0,u.jsx)(`h2`,{className:`text-3xl font-bold mb-4`,style:{color:`var(--eui-text)`},children:`Zoomed Out View`}),(0,u.jsx)(`p`,{className:`text-lg mb-6`,style:{color:`var(--eui-text-muted)`},children:`This content is rendered at 1200px wide but displayed scaled down to 35%. Useful for previewing large dashboards or complex layouts.`}),(0,u.jsx)(`div`,{className:`grid grid-cols-3 gap-4`,children:Array.from({length:6},(e,t)=>(0,u.jsxs)(`div`,{className:`p-4 rounded-lg border`,style:{borderColor:`var(--eui-border)`,backgroundColor:`var(--eui-bg-subtle)`},children:[(0,u.jsxs)(`div`,{className:`text-xl font-bold`,style:{color:`var(--eui-primary)`},children:[`Card `,t+1]}),(0,u.jsx)(`p`,{style:{color:`var(--eui-text-muted)`},children:`This renders at full resolution then scales down`})]},t))})]}),width:500,height:400,header:`Zoomed Out Preview`,children:(0,u.jsx)(o,{variant:`secondary`,children:`Click for zoomed-out view`})})]})}),(0,u.jsx)(`div`,{className:`mt-4`,children:(0,u.jsx)(s,{code:d,language:`tsx`})})]})};export{f as default};