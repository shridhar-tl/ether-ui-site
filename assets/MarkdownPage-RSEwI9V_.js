import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{E as r}from"../index.BXfAFPWO.js";import{t as i}from"./PageLayout-DSwLk1XV.js";import{t as a}from"./CodeBlock-C1PblznF.js";import{t as o}from"./PropsTable-B4RgQiZf.js";import{t as s}from"./ComponentDemo-C0Y_0jmn.js";import{t as c}from"./FeatureCard-D_o4IlGr.js";import l,{n as u,r as d,t as f}from"./BasicUsage-BZbvoN2m.js";var p=e(n(),1),m=t(),h=[`bold`,`italic`,`divider`,`h2`,`h3`,`divider`,`link`,`quote`],g=`# Custom Toolbars

Configure exactly which formatting buttons appear. Pass \`toolbar\` with any subset of actions, or use the built-in \`MINIMAL_MARKDOWN_TOOLBAR\`.

## Try the available formatting

- **bold**, *italic*, ~~strike~~, \`inline code\`
- [Link to docs](https://fluxo-ui.utilsware.com/)
- ![Small image](https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600)

> Quotes still work even when the toolbar is hidden — all keyboard shortcuts are always available.

1. Select some text
2. Press \`Ctrl+B\` for bold
3. Press \`Ctrl+K\` to insert a link`,_=`import { MarkdownEditor, MINIMAL_MARKDOWN_TOOLBAR } from 'fluxo-ui';

<MarkdownEditor toolbar={MINIMAL_MARKDOWN_TOOLBAR} />

<MarkdownEditor
  toolbar={['bold', 'italic', 'divider', 'h2', 'h3', 'divider', 'link', 'quote']}
/>

<MarkdownEditor toolbar={false} />`,v=()=>{let[e,t]=(0,p.useState)(g),[n,r]=(0,p.useState)(g),[i,o]=(0,p.useState)(g);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Minimal Toolbar`,description:`Use the built-in minimal preset for simple comment boxes.`,children:(0,m.jsx)(f,{value:e,onChange:t,toolbar:u,maxHeight:320})}),(0,m.jsx)(`div`,{className:`mt-6`,children:(0,m.jsx)(s,{title:`Custom Selection`,description:`Pass an explicit list of toolbar actions in your preferred order.`,children:(0,m.jsx)(f,{value:n,onChange:r,toolbar:h,maxHeight:320})})}),(0,m.jsx)(`div`,{className:`mt-6`,children:(0,m.jsx)(s,{title:`No Toolbar`,description:`Disable the toolbar entirely — keyboard shortcuts still work.`,children:(0,m.jsx)(f,{value:i,onChange:o,toolbar:!1,maxHeight:320})})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:_,language:`tsx`})})]})},y=`# Deferred Upload (Flush on Submit)

Drop or paste images — they appear instantly via local \`blob:\` URLs.
When you click **Submit**, the editor flushes all pending uploads via \`flushUploads()\` and replaces the blob URLs with the real ones.

## Workflow

1. Drop or paste any **image** into the editor
2. Keep editing — images show up immediately
3. Click **Submit** to run all uploads and get the final markdown

![Pre-uploaded image](https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800)

> Use this strategy when you don't want to upload until the user actually commits their content.

\`\`\`ts
const final = await editorRef.current.flushUploads();
await api.save(final);
\`\`\`

| Field     | Stored as       |
| --------- | --------------- |
| Drafts    | \`blob:\` URLs  |
| Submitted | \`https://\` URL |
`,b=`const editorRef = useRef<MarkdownEditorHandle>(null);

<MarkdownEditor
  ref={editorRef}
  value={value}
  onChange={setValue}
  uploadStrategy="deferred"
  uploadImage={async (file) => {
    return await myUploader(file);
  }}
/>

<Button
  onClick={async () => {
    const finalMarkdown = await editorRef.current?.flushUploads();
    submitForm(finalMarkdown);
  }}
>
  Submit
</Button>`,x=async e=>(await new Promise(e=>setTimeout(e,800)),`https://cdn.utilsware.com/uploads/`+encodeURIComponent(e.name)),S=()=>{let[e,t]=(0,p.useState)(y),[n,i]=(0,p.useState)(null),[o,c]=(0,p.useState)(!1),l=(0,p.useRef)(null),u=(0,p.useCallback)(async()=>{if(l.current){c(!0);try{let e=await l.current.flushUploads();i(e)}finally{c(!1)}}},[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Deferred Upload Strategy`,description:`Images are inserted as blob URLs immediately for instant preview, then uploaded only when you flush.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(f,{ref:l,value:e,onChange:t,uploadStrategy:`deferred`,uploadImage:x,maxImageSize:5242880,maxHeight:460}),(0,m.jsx)(`div`,{style:{padding:`12px 16px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6},children:(0,m.jsx)(r,{onClick:u,disabled:o,children:o?`Uploading...`:`Submit`})}),n&&(0,m.jsx)(`pre`,{style:{margin:0,padding:14,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontSize:12,color:`var(--eui-text)`,whiteSpace:`pre-wrap`,overflow:`auto`,maxHeight:240},children:n})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:b,language:`tsx`})})]})},C=`# Immediate Upload

Click the **image** button in the toolbar, or *paste / drop* an image directly into the editor.

The editor calls your \`uploadImage\` callback immediately and inserts the final URL once it resolves.

## Things to try

1. Click the image toolbar button and choose **Upload**
2. Paste an image from your clipboard
3. Drag an image file from your desktop onto the editor

![Existing hosted image](https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800 "A valley at dawn")

> Already-hosted images work too — paste the URL via the **From URL** tab in the image dialog.

| Action      | Works         |
| ----------- | :-----------: |
| Toolbar     | yes           |
| Paste       | yes           |
| Drag & drop | yes           |
`,w=`<MarkdownEditor
  value={value}
  onChange={setValue}
  uploadStrategy="immediate"
  uploadImage={async (file) => {
    const url = await myUploader(file);
    return url;
  }}
  maxImageSize={5 * 1024 * 1024}
  acceptedImageTypes={['image/png', 'image/jpeg', 'image/webp']}
/>`,T=async e=>(await new Promise(e=>setTimeout(e,800)),URL.createObjectURL(e)),E=()=>{let[e,t]=(0,p.useState)(C),[n,r]=(0,p.useState)([]),i=(0,p.useCallback)(async e=>{r(t=>[...t,`Uploading `+e.name+` (`+(e.size/1024).toFixed(0)+` KB)`]);let t=await T(e);return r(t=>[...t,`Uploaded `+e.name]),t},[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Immediate Upload Strategy`,description:`Every selected image uploads right away and the final URL is inserted into the markdown.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(f,{value:e,onChange:t,uploadStrategy:`immediate`,uploadImage:i,maxImageSize:5242880,acceptedImageTypes:[`image/png`,`image/jpeg`,`image/webp`,`image/gif`],onUploadError:e=>r(t=>[...t,`Error: `+e]),maxHeight:480}),n.length>0&&(0,m.jsx)(`div`,{style:{padding:14,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontFamily:`ui-monospace, monospace`,fontSize:12,color:`var(--eui-text-muted)`},children:n.slice(-6).map((e,t)=>(0,m.jsx)(`div`,{children:e},t))})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:w,language:`tsx`})})]})},D=`# Preview-only Renderer

Use **MarkdownPreview** when you only need to *render* markdown — comments, blog posts, or read-only docs.

## What this renderer supports

Inline: **bold**, *italic*, ***bold italic***, ~~strike~~, \`code\`, and [links](https://fluxo-ui.utilsware.com/).

![Ocean sunset](https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800 "Golden hour")

### Lists with nesting

1. First top-level item
2. Second with a nested list
   - Nested bullet
   - Another nested bullet
     1. Deep ordered
     2. Deep ordered two
3. Third top-level item

### Task list

- [x] Safe URL sanitization
- [x] Lazy-loaded images
- [ ] Custom image resolver

### Blockquote

> Blockquotes can span multiple lines and contain **inline formatting**.
>
> They can even contain \`code\` and [links](https://fluxo-ui.utilsware.com/).

### Fenced code block

\`\`\`ts
import { MarkdownPreview } from 'fluxo-ui';

<MarkdownPreview value={markdown} openLinksInNewTab />
\`\`\`

### Table with alignment

| Left-aligned | Centered | Right-aligned |
| :----------- | :------: | ------------: |
| one          |   two    |         three |
| short        |   long   |          text |
| a            |    b     |             c |

---

Unsafe URLs like \`javascript:alert(1)\` are automatically blocked.
`,O=`import { MarkdownPreview } from 'fluxo-ui';

<MarkdownPreview value={markdown} openLinksInNewTab />`,k=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Preview Only`,description:`Render markdown without the editor — ideal for displaying user-generated content.`,children:(0,m.jsx)(`div`,{style:{border:`1px solid var(--eui-border-subtle)`,borderRadius:6,background:`var(--eui-bg)`},children:(0,m.jsx)(d,{value:D})})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:O,language:`tsx`})})]}),A=`# Read-only Mode

The editor can be rendered in **read-only** mode — the textarea remains selectable, but the toolbar is disabled.

## What you can see

Inline formatting still renders: **bold**, *italic*, ~~strike~~, \`inline code\`, and [links](https://fluxo-ui.utilsware.com/).

![A calm lake](https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800)

- Useful for displaying the editor with its chrome intact
- Prevents any formatting changes
- Still allows copy to clipboard

1. Open this in split view
2. Try clicking a toolbar button — it's disabled
3. Text remains selectable so users can copy it

> Read-only doesn't mean "hidden". It means "visible but immutable."

\`\`\`tsx
<MarkdownEditor value={markdown} readOnly defaultView="split" />
\`\`\`

| Behavior         | Read-only |
| ---------------- | :-------: |
| Toolbar enabled  |    no     |
| Text selectable  |    yes    |
| Shortcuts work   |    no     |
| Preview updates  |    yes    |
`,j=`<MarkdownEditor value={value} readOnly defaultView="split" />`,M=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Read-only Editor`,description:`All toolbar actions and keyboard shortcuts are disabled.`,children:(0,m.jsx)(f,{value:A,readOnly:!0,defaultView:`split`,maxHeight:420})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:j,language:`tsx`})})]}),N=`# View Modes

Switch between **Edit**, *Split*, and **Preview** from the top-right toolbar.

## Sample content

Inline: **bold**, *italic*, ~~strike~~, \`inline code\`, and a [link](https://fluxo-ui.utilsware.com/).

![Forest](https://images.unsplash.com/photo-1448375240586-882707db888b?w=800)

- Edit-only hides the preview pane
- Split shows both side-by-side (tabs on mobile)
- Preview hides the editor entirely

1. Try the **Edit** button
2. Try **Split**
3. Try **Preview**

> Each view can be controlled externally via the \`view\` prop.

\`\`\`tsx
<MarkdownEditor view={view} onViewChange={setView} />
\`\`\`

| Mode    | Editor | Preview |
| ------- | :----: | :-----: |
| edit    |  yes   |   no    |
| split   |  yes   |   yes   |
| preview |   no   |   yes   |
`,P=`const [view, setView] = useState<EditorViewMode>('split');

<MarkdownEditor
  value={value}
  onChange={setValue}
  view={view}
  onViewChange={setView}
/>`,F=()=>{let[e,t]=(0,p.useState)(N),[n,r]=(0,p.useState)(`split`);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Edit / Split / Preview`,description:`Fully controlled view mode — wire it to your own UI if you want external toggles.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(f,{value:e,onChange:t,view:n,onViewChange:r,maxHeight:460}),(0,m.jsxs)(`div`,{style:{padding:`12px 16px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontSize:13,color:`var(--eui-text-muted)`},children:[`Current view: `,(0,m.jsx)(`strong`,{style:{color:`var(--eui-text)`},children:n})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:P,language:`tsx`})})]})},{editorProps:I,previewProps:L}={editorProps:{value:{type:`string`,description:`Controlled markdown value.`},defaultValue:{type:`string`,description:`Initial value when uncontrolled.`},onChange:{type:`(value: string) => void`,description:`Called whenever the markdown changes.`},placeholder:{type:`string`,default:`'Write markdown...'`,description:`Placeholder shown when empty.`},readOnly:{type:`boolean`,default:`false`,description:`Disable all editing while keeping the chrome.`},disabled:{type:`boolean`,default:`false`,description:`Fully disable the editor.`},minHeight:{type:`string | number`,default:`'320px'`,description:`Minimum height of the editor body.`},maxHeight:{type:`string | number`,description:`Optional max height (scrolls beyond).`},view:{type:`'edit' | 'split' | 'preview'`,description:`Controlled view mode.`},defaultView:{type:`'edit' | 'split' | 'preview'`,default:`'edit'`,description:`Initial view when uncontrolled.`},onViewChange:{type:`(view: EditorViewMode) => void`,description:`Called when the user toggles views.`},allowedViews:{type:`EditorViewMode[]`,description:`Restrict which view modes appear in the switcher.`},toolbar:{type:`MarkdownToolbarItem[] | false`,default:`DEFAULT_MARKDOWN_TOOLBAR`,description:`Toolbar configuration or false to hide.`},showToolbar:{type:`boolean`,default:`true`,description:`Hide the toolbar entirely.`},showStatusBar:{type:`boolean`,default:`true`,description:`Show word/char count footer.`},showWordCount:{type:`boolean`,default:`true`,description:`Toggle word count in the status bar.`},uploadImage:{type:`(file: File) => Promise<string>`,description:`Async upload callback — must resolve with the final URL.`},uploadStrategy:{type:`'immediate' | 'deferred'`,default:`'immediate'`,description:`Upload immediately on selection or defer to flushUploads().`},maxImageSize:{type:`number`,description:`Maximum file size in bytes.`},acceptedImageTypes:{type:`string[]`,description:`Array of MIME types accepted for upload.`},onUploadError:{type:`(message: string, file?: File) => void`,description:`Called when validation or upload fails.`},openLinksInNewTab:{type:`boolean`,default:`true`,description:`Open preview links with target="_blank".`},spellCheck:{type:`boolean`,default:`true`,description:`Enable browser spellcheck on the textarea.`},autoFocus:{type:`boolean`,default:`false`,description:`Focus the editor on mount.`},ariaLabel:{type:`string`,default:`'Markdown editor'`,description:`Accessible label for the textarea.`}},previewProps:{value:{type:`string`,description:`Markdown source to render.`},openLinksInNewTab:{type:`boolean`,default:`true`,description:`Render links with target="_blank" rel="noopener".`},sanitizeUrl:{type:`(url: string) => string | null`,description:`Custom URL sanitizer — return null to block.`},imageResolver:{type:`(src: string) => string`,description:`Rewrite image URLs before rendering.`},emptyFallback:{type:`React.ReactNode`,description:`Shown when value is empty.`}}},R=[{id:`basic`,title:`Basic Usage`,description:`Editor with split preview`},{id:`views`,title:`View Modes`,description:`Edit, Split, Preview`},{id:`preview-only`,title:`Preview Only`,description:`Render markdown without the editor`},{id:`toolbar`,title:`Custom Toolbar`,description:`Configure toolbar actions`},{id:`upload-immediate`,title:`Upload (Immediate)`,description:`Upload on selection`},{id:`upload-deferred`,title:`Upload (Deferred)`,description:`Upload on submit via flushUploads`},{id:`readonly`,title:`Read-only`,description:`Display-only mode`},{id:`import`,title:`Import`,description:`Import statement`},{id:`editor-props`,title:`MarkdownEditor Props`,description:`Editor API`},{id:`preview-props`,title:`MarkdownPreview Props`,description:`Preview API`},{id:`features`,title:`Features`,description:`Feature summary`}],z=[{title:`Zero Dependencies`,description:`Custom markdown parser and renderer with no third-party libraries.`,icon:`M13 10V3L4 14h7v7l9-11h-7z`},{title:`Image Uploads`,description:`Plug in any async upload callback. Immediate or deferred (flush on submit) strategies.`,icon:`M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7l-9-4-9 4z`},{title:`Toggle Views`,description:`Edit-only, preview-only, or split — with mobile tabs and keyboard shortcuts.`,icon:`M4 6h16M4 12h16M4 18h16`},{title:`Accessible`,description:`Full keyboard operability, ARIA roles, focus trap in dialogs, high-contrast themes.`,icon:`M9 12l2 2 4-4`},{title:`Configurable Toolbar`,description:`Pick any subset of 20+ toolbar actions, or hide the toolbar entirely.`,icon:`M12 6v6m0 0v6m0-6h6m-6 0H6`},{title:`Theme-aware`,description:`All colors flow from --eui-* variables — auto-supports light, dark, and brand themes.`,icon:`M12 3v2m0 14v2m9-9h-2M5 12H3`}],B={color:`var(--eui-text)`},V={color:`var(--eui-text-muted)`},H=()=>(0,m.jsxs)(i,{sectionNavItems:R,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h1`,{className:`text-2xl md:text-4xl font-bold mb-4`,style:B,children:`Markdown Editor & Preview`}),(0,m.jsx)(`p`,{className:`text-base md:text-xl`,style:V,children:`A zero-dependency markdown editor and renderer with toolbar configuration, image upload callbacks, split view, and full dark-mode and theme support.`})]}),(0,m.jsxs)(`section`,{id:`basic`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Basic Usage`}),(0,m.jsx)(l,{})]}),(0,m.jsxs)(`section`,{id:`views`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`View Modes`}),(0,m.jsx)(F,{})]}),(0,m.jsxs)(`section`,{id:`preview-only`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Preview Only`}),(0,m.jsx)(k,{})]}),(0,m.jsxs)(`section`,{id:`toolbar`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Custom Toolbar`}),(0,m.jsx)(v,{})]}),(0,m.jsxs)(`section`,{id:`upload-immediate`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Image Upload — Immediate`}),(0,m.jsx)(E,{})]}),(0,m.jsxs)(`section`,{id:`upload-deferred`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Image Upload — Deferred`}),(0,m.jsx)(S,{})]}),(0,m.jsxs)(`section`,{id:`readonly`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Read-only`}),(0,m.jsx)(M,{})]}),(0,m.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`Import`}),(0,m.jsx)(a,{code:`import { MarkdownEditor, MarkdownPreview } from 'fluxo-ui';
import type { MarkdownEditorProps, MarkdownEditorHandle, MarkdownPreviewProps } from 'fluxo-ui';`})]}),(0,m.jsxs)(`section`,{id:`editor-props`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`MarkdownEditor Props`}),(0,m.jsx)(o,{props:I})]}),(0,m.jsxs)(`section`,{id:`preview-props`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:B,children:`MarkdownPreview Props`}),(0,m.jsx)(o,{props:L})]}),(0,m.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-6`,style:B,children:`Features`}),(0,m.jsx)(c,{features:z})]})]});export{H as default};