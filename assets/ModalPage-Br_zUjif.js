import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./Modal-CNu9dxeu.js";import{E as o}from"../index.BXfAFPWO.js";import{t as s}from"./PageLayout-DSwLk1XV.js";import{t as c}from"./CodeBlock-C1PblznF.js";import{t as l}from"./PropsTable-B4RgQiZf.js";import{t as u}from"./ComponentDemo-C0Y_0jmn.js";import{t as d}from"./FeatureCard-D_o4IlGr.js";import f from"./BasicUsage-Cj-YkRLO.js";var p=e(t(),1),m=e(r(),1),h=n(),g=`<Modal isOpen={isOpen} onClose={onClose}>
  {/* Custom Header */}
  <div className="flex items-center justify-between pb-4 border-b">
    <div>
      <h2 className="text-2xl font-bold">Custom Header</h2>
      <p className="text-sm text-gray-500">With subtitle</p>
    </div>
    <span className="px-3 py-1 bg-green-100 rounded-full">Active</span>
  </div>

  {/* Content */}
  <div className="py-4">
    <p>Your modal content here...</p>
  </div>

  {/* Custom Footer */}
  <div className="flex justify-between pt-4 border-t">
    <Button layout="plain">Skip</Button>
    <div className="flex gap-2">
      <Button onClick={onClose} layout="outlined">Cancel</Button>
      <Button onClick={onSave} variant="success">Save</Button>
    </div>
  </div>
</Modal>`,_=()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{title:`Modal with Custom Layout`,children:[(0,h.jsx)(o,{onClick:()=>t(!0),variant:`success`,children:`Open Custom Modal`}),(0,h.jsx)(a,{isOpen:e,onClose:()=>t(!1),children:(0,h.jsxs)(`div`,{className:`space-y-6`,children:[(0,h.jsxs)(`div`,{className:`flex items-center justify-between pb-4 border-b border-theme-default`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-theme-default`,children:`Custom Header`}),(0,h.jsx)(`p`,{className:`text-sm text-theme-muted`,children:`With subtitle and custom styling`})]}),(0,h.jsx)(`span`,{className:`px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium`,children:`Active`})]}),(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`You can create completely custom headers and footers by not providing a title prop and structuring your content however you like.`}),(0,h.jsx)(`div`,{className:`bg-info-50 p-4 rounded border border-info-500/20`,children:(0,h.jsxs)(`p`,{className:`text-sm text-info-700`,children:[(0,h.jsx)(`strong`,{children:`Pro tip:`}),` Use custom layouts for complex forms, multi-step processes, or when you need more control over the modal structure.`]})})]}),(0,h.jsxs)(`div`,{className:`flex items-center justify-between pt-4 border-t border-theme-default`,children:[(0,h.jsx)(o,{onClick:()=>t(!1),layout:`plain`,children:`Maybe later`}),(0,h.jsxs)(`div`,{className:`flex gap-2`,children:[(0,h.jsx)(o,{onClick:()=>t(!1),layout:`outlined`,children:`Cancel`}),(0,h.jsx)(o,{onClick:()=>t(!1),variant:`success`,children:`Save Changes`})]})]})]})})]}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:g})})]})},v=`function FormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Add User</Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add New User">
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-6">
            <Button type="button" onClick={() => setIsOpen(false)} layout="outlined">Cancel</Button>
            <Button type="submit" variant="primary">Create User</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}`,y=()=>{let{isDark:e}=i();return(0,h.jsx)(u,{title:`Modal with Form`,children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:(0,p.default)(`text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Modals work great for forms. Here's an example of how to structure a form inside a modal:`}),(0,h.jsx)(c,{code:v})]})})},b=`function MyComponent() {
  const [firstModal, setFirstModal] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  return (
    <>
      <Button onClick={() => setFirstModal(true)}>Open First Modal</Button>

      <Modal isOpen={firstModal} onClose={() => setFirstModal(false)} title="First Modal">
        <p>First modal content</p>
        <Button onClick={() => setSecondModal(true)}>Open Second Modal</Button>
      </Modal>

      <Modal isOpen={secondModal} onClose={() => setSecondModal(false)} title="Second Modal">
        <p>Nested modal content</p>
      </Modal>
    </>
  );
}`,x=()=>{let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{title:`Modal Opening Another Modal`,children:[(0,h.jsx)(o,{onClick:()=>t(!0),variant:`secondary`,children:`Open First Modal`}),(0,h.jsx)(a,{isOpen:e,onClose:()=>t(!1),title:`First Modal`,children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is the first modal. You can open another modal from here.`}),(0,h.jsx)(o,{onClick:()=>r(!0),variant:`primary`,children:`Open Second Modal`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>t(!1),layout:`outlined`,children:`Close`})})]})}),(0,h.jsx)(a,{isOpen:n,onClose:()=>r(!1),title:`Second Modal`,size:`sm`,children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is a nested modal opened from the first modal.`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>r(!1),variant:`primary`,children:`Close This Modal`})})]})})]}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:b})})]})},S=`<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Important Action"
  closeOnBackdrop={false}
>
  <p>This modal requires explicit action.</p>
  <p>Clicking outside won't close it.</p>

  <div className="flex justify-end gap-2 mt-4">
    <Button onClick={onClose}>Cancel</Button>
    <Button onClick={handleConfirm} variant="danger">Confirm</Button>
  </div>
</Modal>`,C=()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{title:`Modal Without Backdrop Close`,children:[(0,h.jsx)(o,{onClick:()=>t(!0),variant:`warning`,children:`Open Non-closable Modal`}),(0,h.jsx)(a,{isOpen:e,onClose:()=>t(!1),title:`Important Action`,closeOnBackdrop:!1,children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This modal cannot be closed by clicking outside of it. You must use the buttons below or press Escape.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is useful for critical actions that require explicit user choice.`}),(0,h.jsxs)(`div`,{className:`flex justify-end gap-2 mt-6`,children:[(0,h.jsx)(o,{onClick:()=>t(!1),layout:`outlined`,children:`Cancel`}),(0,h.jsx)(o,{onClick:()=>t(!1),variant:`danger`,children:`Delete`})]})]})})]}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:S})})]})},w=`<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="Terms and Conditions"
  footer={
    <div className="flex justify-end gap-2">
      <Button onClick={onClose} layout="outlined">Decline</Button>
      <Button onClick={onClose} variant="success">Accept</Button>
    </div>
  }
>
  {/* Content scrolls automatically when it exceeds viewport */}
  <p>Long content...</p>
  <p>More content...</p>
</Modal>`,T=()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{title:`Modal with Long Content`,children:[(0,h.jsx)(o,{onClick:()=>t(!0),variant:`info`,children:`Open Scrollable Modal`}),(0,h.jsx)(a,{isOpen:e,onClose:()=>t(!1),title:`Terms and Conditions`,footer:(0,h.jsxs)(`div`,{className:`flex justify-end gap-2`,children:[(0,h.jsx)(o,{onClick:()=>t(!1),layout:`outlined`,children:`Decline`}),(0,h.jsx)(o,{onClick:()=>t(!1),variant:`success`,children:`Accept`})]}),children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`})]})})]}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:w})})]})},E=`<Modal size="sm" isOpen={isOpen} onClose={onClose} title="Small">
  Small modal content
</Modal>

<Modal size="md" isOpen={isOpen} onClose={onClose} title="Medium">
  Medium modal content (default)
</Modal>

<Modal size="lg" isOpen={isOpen} onClose={onClose} title="Large">
  Large modal content
</Modal>

<Modal size="xl" isOpen={isOpen} onClose={onClose} title="Extra Large">
  Extra large modal content
</Modal>`,D=()=>{let[e,t]=(0,m.useState)(!1),[n,r]=(0,m.useState)(!1),[i,s]=(0,m.useState)(!1),[l,d]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{title:`Modal Sizes`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-4`,children:[(0,h.jsx)(o,{onClick:()=>t(!0),size:`sm`,children:`Small (sm)`}),(0,h.jsx)(o,{onClick:()=>r(!0),children:`Medium (md)`}),(0,h.jsx)(o,{onClick:()=>s(!0),size:`lg`,children:`Large (lg)`}),(0,h.jsx)(o,{onClick:()=>d(!0),size:`lg`,children:`Extra Large (xl)`})]}),(0,h.jsxs)(a,{isOpen:e,onClose:()=>t(!1),title:`Small Modal`,size:`sm`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is a small modal (max-width: 28rem / 448px)`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>t(!1),variant:`primary`,children:`Close`})})]}),(0,h.jsxs)(a,{isOpen:n,onClose:()=>r(!1),title:`Medium Modal`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is the default medium modal (max-width: 32rem / 512px)`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>r(!1),variant:`primary`,children:`Close`})})]}),(0,h.jsxs)(a,{isOpen:i,onClose:()=>s(!1),title:`Large Modal`,size:`lg`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is a large modal (max-width: 42rem / 672px)`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>s(!1),variant:`primary`,children:`Close`})})]}),(0,h.jsxs)(a,{isOpen:l,onClose:()=>d(!1),title:`Extra Large Modal`,size:`xl`,children:[(0,h.jsx)(`p`,{className:`text-theme-default`,children:`This is an extra large modal (max-width: 56rem / 896px)`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>d(!1),variant:`primary`,children:`Close`})})]})]}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:E})})]})},O=`<Modal isOpen={isOpen} onClose={onClose}>
  <h2 className="text-xl font-semibold mb-4">Custom Header</h2>
  <p>Your custom content here...</p>
</Modal>`,k=()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u,{title:`Modal Without Title`,children:[(0,h.jsx)(o,{onClick:()=>t(!0),variant:`secondary`,children:`Open Modal Without Title`}),(0,h.jsx)(a,{isOpen:e,onClose:()=>t(!1),children:(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`h2`,{className:`text-xl font-semibold text-theme-default`,children:`Custom Content Header`}),(0,h.jsx)(`p`,{className:`text-theme-default`,children:`When no title prop is provided, the close button appears in the top-right corner, giving you full control over the modal content layout.`}),(0,h.jsx)(`div`,{className:`flex justify-end mt-4`,children:(0,h.jsx)(o,{onClick:()=>t(!1),variant:`primary`,children:`Got it`})})]})})]}),(0,h.jsx)(`div`,{className:`mt-4`,children:(0,h.jsx)(c,{code:O})})]})},{modalProps:A}={modalProps:{isOpen:{type:`boolean`,required:!0,description:`Controls whether the modal is visible`},onClose:{type:`() => void`,required:!0,description:`Callback function triggered when modal should close`},title:{type:`string`,description:`Modal title displayed in the header. If not provided, close button appears in top-right corner`},children:{type:`React.ReactNode`,required:!0,description:`Modal content (scrollable when it overflows)`},footer:{type:`React.ReactNode`,description:`Footer content rendered below the scrollable area. Always visible on screen regardless of content height`},size:{type:`'sm' | 'md' | 'lg' | 'xl' | 'fullScreen'`,default:`'md'`,description:`Modal width size (sm: 28rem, md: 32rem, lg: 42rem, xl: 56rem, fullScreen: full viewport)`},closeOnBackdrop:{type:`boolean`,default:`true`,description:`Whether clicking the backdrop (overlay) closes the modal. Drag-out gestures starting inside the modal are ignored.`},initialFocus:{type:`RefObject<HTMLElement>`,description:`Element to receive focus when the modal opens. Defaults to the first focusable element.`},ariaLabel:{type:`string`,description:`Accessible label when no title is provided`}}},j=[{id:`basic-usage`,title:`Basic Usage`,description:`Default modal example`},{id:`sizes`,title:`Sizes`,description:`sm, md, lg, xl width options`},{id:`without-title`,title:`Without Title`,description:`Full layout control`},{id:`scrollable`,title:`Scrollable Content`,description:`Long content with sticky footer`},{id:`non-closable`,title:`Non-closable`,description:`Disable backdrop close`},{id:`nested`,title:`Nested Modals`,description:`Stacked modal support`},{id:`custom-layout`,title:`Custom Layout`,description:`Custom header and footer`},{id:`form-example`,title:`Form Example`,description:`Form inside a modal`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],M=[{title:`Portal Rendering`,description:`Rendered via React portals so modals always appear above all other content`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Multiple Sizes`,description:`Four preset widths — sm, md, lg, xl — to fit any content need`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Scrollable Body`,description:`Content area scrolls independently while the footer stays fixed on screen`,icon:`M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25`},{title:`Sticky Footer`,description:`Optional footer prop always visible at the bottom, even with long content`,icon:`M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12`},{title:`Keyboard Support`,description:`Escape key closes the modal; focus is trapped inside while open`,icon:`M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z`},{title:`Backdrop Control`,description:`closeOnBackdrop prop disables click-outside for critical confirmations`,icon:`M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z`},{title:`Nested Modals`,description:`Multiple modals can be stacked with independent close handlers`,icon:`M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z`},{title:`Scroll Lock`,description:`Body scrolling is locked while the modal is open to prevent background movement`,icon:`M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z`},{title:`Smooth Animations`,description:`Scale and opacity transitions on open and close for a polished feel`,icon:`M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z`},{title:`Accessibility`,description:`ARIA dialog role, focus management, and screen reader labels built in`,icon:`M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z`}],N=()=>{let{isDark:e}=i();return(0,h.jsxs)(s,{sectionNavItems:j,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h1`,{className:(0,p.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Modal`}),(0,h.jsx)(`p`,{className:(0,p.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A dialog component that displays content in a layer above the main application. Modals can be used for confirmations, forms, detailed information, or any content that requires focused user attention.`})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic-usage`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,h.jsx)(f,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`sizes`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sizes`}),(0,h.jsx)(D,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`without-title`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Without Title`}),(0,h.jsx)(k,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`scrollable`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Scrollable Content`}),(0,h.jsx)(T,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`non-closable`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Non-closable Modal`}),(0,h.jsx)(C,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`nested`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Nested Modals`}),(0,h.jsx)(x,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-layout`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Header and Footer`}),(0,h.jsx)(_,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`form-example`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Form Example`}),(0,h.jsx)(y,{})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,h.jsx)(c,{code:`import { Modal } from 'fluxo-ui';`})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`props`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,h.jsx)(l,{props:A})]}),(0,h.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,h.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,h.jsx)(d,{features:M})]})]})};export{N as default};