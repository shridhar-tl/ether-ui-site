import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./Modal-CNu9dxeu.js";import{E as i}from"../index.BXfAFPWO.js";import{t as a}from"./CodeBlock-C1PblznF.js";import{t as o}from"./ComponentDemo-C0Y_0jmn.js";var s=e(n(),1),c=t(),l=`import { Modal, Button } from 'fluxo-ui';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Modal Title"
      >
        <p>Modal content goes here...</p>

        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={() => setIsOpen(false)} layout="outlined">
            Cancel
          </Button>
          <Button onClick={() => setIsOpen(false)} variant="primary">
            Confirm
          </Button>
        </div>
      </Modal>
    </>
  );
}`,u=()=>{let[e,t]=(0,s.useState)(!1);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o,{title:`Basic Modal`,children:[(0,c.jsx)(i,{onClick:()=>t(!0),variant:`primary`,children:`Open Modal`}),(0,c.jsx)(r,{isOpen:e,onClose:()=>t(!1),title:`Modal Title`,children:(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsx)(`p`,{className:`text-theme-default`,children:`This is a basic modal dialog. It contains a title, content area, and a close button.`}),(0,c.jsx)(`p`,{className:`text-theme-default`,children:`You can close this modal by clicking the X button, pressing Escape, or clicking outside the modal.`}),(0,c.jsxs)(`div`,{className:`flex justify-end gap-2 mt-6`,children:[(0,c.jsx)(i,{onClick:()=>t(!1),layout:`outlined`,children:`Cancel`}),(0,c.jsx)(i,{onClick:()=>t(!1),variant:`primary`,children:`Confirm`})]})]})})]}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(a,{title:`Basic Example`,code:l})})]})};export{u as default};