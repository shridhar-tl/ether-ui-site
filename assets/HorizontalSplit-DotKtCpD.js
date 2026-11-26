import{i as e,o as t}from"./StoryThemeContext-BDzcJQOV.js";import{n,t as r}from"./Splitter-Bg7hstOO.js";import{t as i}from"./CodeBlock-CjEfE45a.js";import{t as a}from"./ComponentDemo-C1QcOIEH.js";t();var o=e(),s=`import { Splitter, SplitterPanel } from 'fluxo-ui';

<Splitter style={{ height: '200px' }}>
  <SplitterPanel>
    <div className="p-4">Left Panel</div>
  </SplitterPanel>
  <SplitterPanel>
    <div className="p-4">Right Panel</div>
  </SplitterPanel>
</Splitter>`,c=()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a,{title:`Horizontal Split`,children:(0,o.jsx)(`div`,{className:`h-48 w-full border border-gray-200 dark:border-white/10 rounded overflow-hidden`,children:(0,o.jsxs)(r,{style:{height:`100%`},children:[(0,o.jsx)(n,{children:(0,o.jsxs)(`div`,{className:`h-full p-4`,children:[(0,o.jsx)(`p`,{className:`font-semibold mb-1`,children:`Left Panel`}),(0,o.jsx)(`p`,{className:`text-sm opacity-60`,children:`Drag the gutter to resize horizontally.`})]})}),(0,o.jsx)(n,{children:(0,o.jsxs)(`div`,{className:`h-full p-4`,children:[(0,o.jsx)(`p`,{className:`font-semibold mb-1`,children:`Right Panel`}),(0,o.jsx)(`p`,{className:`text-sm opacity-60`,children:`Fills the remaining space automatically.`})]})})]})})}),(0,o.jsx)(`div`,{className:`mt-4`,children:(0,o.jsx)(i,{code:s})})]});export{c as default};