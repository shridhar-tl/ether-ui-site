import"./rolldown-runtime-XKyaHtl9.js";import{i as e,o as t}from"./StoryThemeContext-D_RQ2m_6.js";import{t as n}from"./FileUpload-CKYDodHa.js";import{t as r}from"./CodeBlock-C4FaW1je.js";import{t as i}from"./ComponentDemo-ClYgVMrt.js";t();var a=e(),o=`import { FileUpload } from 'fluxo-ui';

<FileUpload
  accept="image/*"
  multiple
  maxFileSize={5 * 1024 * 1024}
  maxFiles={5}
  showPreview
  onFilesSelect={(files) => console.log('Selected:', files)}
  onUpload={async (file, onProgress) => {
    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 200));
      onProgress(i);
    }
  }}
/>`,s=async(e,t)=>{for(let e=0;e<=100;e+=10)await new Promise(e=>setTimeout(e,200)),t(e)},c=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{title:`Image Upload`,description:`Drag and drop or click to upload images with progress tracking and preview.`,children:(0,a.jsx)(`div`,{className:`w-full max-w-lg`,children:(0,a.jsx)(n,{accept:`image/*`,multiple:!0,maxFileSize:5242880,maxFiles:5,showPreview:!0,onFilesSelect:e=>console.log(`Selected:`,e),onUpload:s})})}),(0,a.jsx)(`div`,{className:`mt-4`,children:(0,a.jsx)(r,{code:o,language:`tsx`})})]});export{c as default};