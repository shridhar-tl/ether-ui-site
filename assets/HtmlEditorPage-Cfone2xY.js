import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{E as r}from"../index.BXfAFPWO.js";import{t as i}from"./PageLayout-DSwLk1XV.js";import{t as a}from"./CodeBlock-C1PblznF.js";import{t as o}from"./PropsTable-B4RgQiZf.js";import{t as s}from"./ComponentDemo-C0Y_0jmn.js";import{t as c}from"./FeatureCard-D_o4IlGr.js";import l,{n as u,r as d,t as f}from"./BasicUsage-BRpit6IS.js";var p=e(n(),1),m=t(),h=[`bold`,`italic`,`underline`,`divider`,`h2`,`h3`,`divider`,`textColor`,`bgColor`,`divider`,`link`,`quote`],g=`<h1>Custom Toolbars</h1>
<p>Configure exactly which formatting buttons appear. Pass <code>toolbar</code> with any subset of actions, or use the built-in <code>MINIMAL_HTML_TOOLBAR</code>.</p>
<ul>
    <li><strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike</s></li>
    <li><a href="https://fluxo-ui.utilsware.com/">Link to docs</a></li>
</ul>
<blockquote><p>Quotes still work even when the toolbar is hidden — all keyboard shortcuts are always available.</p></blockquote>`,_=`import { HtmlEditor, MINIMAL_HTML_TOOLBAR } from 'fluxo-ui';

<HtmlEditor toolbar={MINIMAL_HTML_TOOLBAR} />

<HtmlEditor
  toolbar={['bold', 'italic', 'underline', 'divider', 'h2', 'h3', 'divider', 'textColor', 'link', 'quote']}
/>

<HtmlEditor toolbar={false} />`,v=()=>{let[e,t]=(0,p.useState)(g),[n,r]=(0,p.useState)(g),[i,o]=(0,p.useState)(g);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Minimal Toolbar`,description:`Use the built-in minimal preset for simple comment boxes.`,children:(0,m.jsx)(f,{value:e,onChange:t,toolbar:u,maxHeight:320})}),(0,m.jsx)(`div`,{className:`mt-6`,children:(0,m.jsx)(s,{title:`Custom Selection`,description:`Pass an explicit list of toolbar actions in your preferred order.`,children:(0,m.jsx)(f,{value:n,onChange:r,toolbar:h,maxHeight:320})})}),(0,m.jsx)(`div`,{className:`mt-6`,children:(0,m.jsx)(s,{title:`No Toolbar`,description:`Disable the toolbar entirely — keyboard shortcuts still work.`,children:(0,m.jsx)(f,{value:i,onChange:o,toolbar:!1,maxHeight:320})})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:_,language:`tsx`})})]})},y=`<h1>Deferred Upload (Flush on Submit)</h1>
<p>Drop or paste images — they appear instantly via local <code>blob:</code> URLs. When you click <strong>Submit</strong>, the editor flushes all pending uploads via <code>flushUploads()</code> and replaces the blob URLs with the real ones.</p>
<h2>Workflow</h2>
<ol>
    <li>Drop or paste any <strong>image</strong> into the editor</li>
    <li>Keep editing — images show up immediately</li>
    <li>Click <strong>Submit</strong> to run all uploads and get the final HTML</li>
</ol>
<p><img src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800" alt="Pre-uploaded image" /></p>
<blockquote><p>Use this strategy when you don't want to upload until the user actually commits their content.</p></blockquote>`,b=`const editorRef = useRef<HtmlEditorHandle>(null);

<HtmlEditor
  ref={editorRef}
  value={value}
  onChange={setValue}
  uploadStrategy="deferred"
  uploadImage={async (file) => await myUploader(file)}
/>

<Button
  onClick={async () => {
    const finalHtml = await editorRef.current?.flushUploads();
    submitForm(finalHtml);
  }}
>
  Submit
</Button>`,x=async e=>(await new Promise(e=>setTimeout(e,800)),`https://cdn.utilsware.com/uploads/`+encodeURIComponent(e.name)),S=()=>{let[e,t]=(0,p.useState)(y),[n,i]=(0,p.useState)(null),[o,c]=(0,p.useState)(!1),l=(0,p.useRef)(null),u=(0,p.useCallback)(async()=>{if(l.current){c(!0);try{let e=await l.current.flushUploads();i(e)}finally{c(!1)}}},[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Deferred Upload Strategy`,description:`Images are inserted as blob URLs immediately for instant preview, then uploaded only when you flush.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(f,{ref:l,value:e,onChange:t,uploadStrategy:`deferred`,uploadImage:x,maxImageSize:5242880,maxHeight:460}),(0,m.jsx)(`div`,{style:{padding:`12px 16px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6},children:(0,m.jsx)(r,{onClick:u,disabled:o,children:o?`Uploading...`:`Submit`})}),n&&(0,m.jsx)(`pre`,{style:{margin:0,padding:14,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontSize:12,color:`var(--eui-text)`,whiteSpace:`pre-wrap`,overflow:`auto`,maxHeight:240},children:n})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:b,language:`tsx`})})]})},C=`<h1>Immediate Upload</h1>
<p>Click the <strong>image</strong> button in the toolbar, or <em>paste / drop</em> an image directly into the editor.</p>
<p>The editor calls your <code>uploadImage</code> callback immediately and inserts the final URL once it resolves.</p>
<h2>Things to try</h2>
<ol>
    <li>Click the image toolbar button and choose <strong>Upload</strong></li>
    <li>Paste an image from your clipboard</li>
    <li>Drag an image file from your desktop onto the editor</li>
</ol>
<p><img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" alt="A valley at dawn" /></p>
<blockquote><p>Already-hosted images work too — paste the URL via the <strong>From URL</strong> tab in the image dialog.</p></blockquote>`,w=`<HtmlEditor
  value={value}
  onChange={setValue}
  uploadStrategy="immediate"
  uploadImage={async (file) => {
    const url = await myUploader(file);
    return url;
  }}
  maxImageSize={5 * 1024 * 1024}
  acceptedImageTypes={['image/png', 'image/jpeg', 'image/webp']}
/>`,T=async e=>(await new Promise(e=>setTimeout(e,800)),URL.createObjectURL(e)),E=()=>{let[e,t]=(0,p.useState)(C),[n,r]=(0,p.useState)([]),i=(0,p.useCallback)(async e=>{r(t=>[...t,`Uploading `+e.name+` (`+(e.size/1024).toFixed(0)+` KB)`]);let t=await T(e);return r(t=>[...t,`Uploaded `+e.name]),t},[]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Immediate Upload Strategy`,description:`Every selected image uploads right away and the final URL is inserted into the HTML.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(f,{value:e,onChange:t,uploadStrategy:`immediate`,uploadImage:i,maxImageSize:5242880,acceptedImageTypes:[`image/png`,`image/jpeg`,`image/webp`,`image/gif`],onUploadError:e=>r(t=>[...t,`Error: `+e]),maxHeight:480}),n.length>0&&(0,m.jsx)(`div`,{style:{padding:14,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontFamily:`ui-monospace, monospace`,fontSize:12,color:`var(--eui-text-muted)`},children:n.slice(-6).map((e,t)=>(0,m.jsx)(`div`,{children:e},t))})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:w,language:`tsx`})})]})},D=`<h1>Preview-only Renderer</h1>
<p>Use <strong>HtmlPreview</strong> when you only need to <em>render</em> sanitized HTML — comments, blog posts, or read-only docs.</p>
<h2>What this renderer supports</h2>
<p>Inline: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike</s>, <code>code</code>, <mark>highlight</mark>, <sup>sup</sup>, <sub>sub</sub>, and <a href="https://fluxo-ui.utilsware.com/">links</a>.</p>
<p>Colors: <span style="color: #3b82f6;">blue</span>, <span style="color: #ef4444;">red</span>, <span style="background-color: #fef3c7;">highlighted</span>.</p>
<h3>Lists</h3>
<ol>
    <li>First top-level item</li>
    <li>Second with nested list
        <ul>
            <li>Nested bullet</li>
            <li>Another nested bullet</li>
        </ul>
    </li>
</ol>
<h3>Blockquote</h3>
<blockquote><p>Blockquotes can span multiple lines and contain <strong>inline formatting</strong>.</p></blockquote>
<h3>Code block</h3>
<pre><code>import { HtmlPreview } from 'fluxo-ui';
&lt;HtmlPreview value={html} /&gt;</code></pre>
<h3>Table</h3>
<table>
    <thead><tr><th>Left</th><th>Center</th><th>Right</th></tr></thead>
    <tbody>
        <tr><td>one</td><td>two</td><td>three</td></tr>
        <tr><td>short</td><td>long</td><td>text</td></tr>
    </tbody>
</table>
<hr/>
<p>Dangerous scripts and <code>javascript:</code> URLs are automatically stripped.</p>`,O=`<p>Safe paragraph</p><script>alert('xss')<\/script><p><a href="javascript:alert(1)">click</a></p><p onclick="alert(1)">event handler attempt</p>`,k=`import { HtmlPreview } from 'fluxo-ui';

<HtmlPreview value={html} openLinksInNewTab />`,A=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Preview Only`,description:`Render sanitized HTML without the editor — ideal for displaying user-generated content.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(`div`,{style:{border:`1px solid var(--eui-border-subtle)`,borderRadius:6,background:`var(--eui-bg)`},children:(0,m.jsx)(d,{value:D})}),(0,m.jsxs)(`div`,{style:{padding:`12px 16px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontSize:12,color:`var(--eui-text-muted)`},children:[`Input: `,(0,m.jsx)(`code`,{children:O.replace(/</g,`&lt;`)}),(0,m.jsx)(`div`,{style:{marginTop:8,padding:10,background:`var(--eui-bg)`,borderRadius:4,border:`1px solid var(--eui-border-subtle)`},children:(0,m.jsx)(d,{value:O})}),(0,m.jsx)(`div`,{style:{marginTop:6},children:`Scripts and unsafe URLs were removed automatically.`})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:k,language:`tsx`})})]}),j=`<h1>Read-only Mode</h1>
<p>The editor can be rendered in <strong>read-only</strong> mode — content remains selectable, but the toolbar is disabled.</p>
<h2>What you can see</h2>
<p>Inline formatting still renders: <strong>bold</strong>, <em>italic</em>, <u>underline</u>, <s>strike</s>, <code>inline code</code>, and <a href="https://fluxo-ui.utilsware.com/">links</a>.</p>
<ul>
    <li>Useful for displaying the editor with its chrome intact</li>
    <li>Prevents any formatting changes</li>
    <li>Still allows copy to clipboard</li>
</ul>
<blockquote><p>Read-only doesn't mean "hidden". It means "visible but immutable."</p></blockquote>`,M=`<HtmlEditor value={value} readOnly defaultView="split" />`,N=()=>(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Read-only Editor`,description:`All toolbar actions and keyboard shortcuts are disabled.`,children:(0,m.jsx)(f,{value:j,readOnly:!0,defaultView:`split`,maxHeight:420})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:M,language:`tsx`})})]}),P=`<h1>View Modes</h1>
<p>Switch between <strong>Edit</strong>, <em>Split</em>, and <strong>Preview</strong> from the top-right toolbar.</p>
<h2>Sample content</h2>
<p>Inline: <strong>bold</strong>, <em>italic</em>, <s>strike</s>, <code>inline code</code>, and a <a href="https://fluxo-ui.utilsware.com/">link</a>.</p>
<ul>
    <li>Edit-only hides the preview pane</li>
    <li>Split shows both side-by-side (tabs on mobile)</li>
    <li>Preview hides the editor entirely</li>
</ul>
<blockquote><p>Each view can be controlled externally via the <code>view</code> prop.</p></blockquote>`,F=`const [view, setView] = useState<EditorViewMode>('split');

<HtmlEditor
  value={value}
  onChange={setValue}
  view={view}
  onViewChange={setView}
/>`,I=()=>{let[e,t]=(0,p.useState)(P),[n,r]=(0,p.useState)(`split`);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(s,{title:`Edit / Split / Preview`,description:`Fully controlled view mode — wire it to your own UI if you want external toggles.`,children:(0,m.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:16},children:[(0,m.jsx)(f,{value:e,onChange:t,view:n,onViewChange:r,maxHeight:460}),(0,m.jsxs)(`div`,{style:{padding:`12px 16px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6,fontSize:13,color:`var(--eui-text-muted)`},children:[`Current view: `,(0,m.jsx)(`strong`,{style:{color:`var(--eui-text)`},children:n})]})]})}),(0,m.jsx)(`div`,{className:`mt-4`,children:(0,m.jsx)(a,{code:F,language:`tsx`})})]})},{editorProps:L,previewProps:R}={editorProps:{value:{type:`string`,description:`Controlled HTML value.`},defaultValue:{type:`string`,description:`Initial value when uncontrolled.`},onChange:{type:`(value: string) => void`,description:`Called whenever the HTML changes.`},placeholder:{type:`string`,default:`'Start writing...'`,description:`Placeholder shown when empty.`},readOnly:{type:`boolean`,default:`false`,description:`Disable all editing while keeping the chrome.`},disabled:{type:`boolean`,default:`false`,description:`Fully disable the editor.`},minHeight:{type:`string | number`,default:`'320px'`,description:`Minimum height of the editor body.`},maxHeight:{type:`string | number`,description:`Optional max height (scrolls beyond).`},view:{type:`'edit' | 'split' | 'preview'`,description:`Controlled view mode.`},defaultView:{type:`'edit' | 'split' | 'preview'`,default:`'edit'`,description:`Initial view when uncontrolled.`},onViewChange:{type:`(view: EditorViewMode) => void`,description:`Called when the user toggles views.`},allowedViews:{type:`EditorViewMode[]`,description:`Restrict which view modes appear in the switcher.`},toolbar:{type:`HtmlToolbarItem[] | false`,default:`DEFAULT_HTML_TOOLBAR`,description:`Toolbar configuration or false to hide.`},showToolbar:{type:`boolean`,default:`true`,description:`Hide the toolbar entirely.`},showStatusBar:{type:`boolean`,default:`true`,description:`Show word/char count footer.`},showWordCount:{type:`boolean`,default:`true`,description:`Toggle word count in the status bar.`},uploadImage:{type:`(file: File) => Promise<string>`,description:`Async upload callback — must resolve with the final URL.`},uploadStrategy:{type:`'immediate' | 'deferred'`,default:`'immediate'`,description:`Upload immediately or defer to flushUploads().`},maxImageSize:{type:`number`,description:`Maximum file size in bytes.`},acceptedImageTypes:{type:`string[]`,description:`Array of MIME types accepted for upload.`},onUploadError:{type:`(message: string, file?: File) => void`,description:`Called when validation or upload fails.`},sanitize:{type:`(html: string) => string`,description:`Custom sanitizer for paste and preview (defaults to built-in allow-list).`},sanitizerConfig:{type:`HtmlSanitizerConfig`,description:`Override the allow-list used by the built-in sanitizer.`},openLinksInNewTab:{type:`boolean`,default:`true`,description:`Open preview links with target="_blank".`},spellCheck:{type:`boolean`,default:`true`,description:`Enable browser spellcheck on the editable surface.`},autoFocus:{type:`boolean`,default:`false`,description:`Focus the editor on mount.`},ariaLabel:{type:`string`,default:`'Rich text editor'`,description:`Accessible label for the editor.`}},previewProps:{value:{type:`string`,description:`HTML source to render.`},sanitize:{type:`(html: string) => string`,description:`Custom sanitizer — defaults to the built-in allow-list.`},sanitizerConfig:{type:`HtmlSanitizerConfig`,description:`Override the allow-list used by the built-in sanitizer.`},openLinksInNewTab:{type:`boolean`,default:`true`,description:`Add target="_blank" rel="noopener" to links.`},emptyFallback:{type:`React.ReactNode`,description:`Shown when value is empty.`}}},z=[{id:`basic`,title:`Basic Usage`,description:`WYSIWYG editor with split preview`},{id:`views`,title:`View Modes`,description:`Edit, Split, Preview`},{id:`preview-only`,title:`Preview Only`,description:`Render sanitized HTML`},{id:`toolbar`,title:`Custom Toolbar`,description:`Configure toolbar actions`},{id:`upload-immediate`,title:`Upload (Immediate)`,description:`Upload on selection`},{id:`upload-deferred`,title:`Upload (Deferred)`,description:`Upload on submit via flushUploads`},{id:`readonly`,title:`Read-only`,description:`Display-only mode`},{id:`import`,title:`Import`,description:`Import statement`},{id:`editor-props`,title:`HtmlEditor Props`,description:`Editor API`},{id:`preview-props`,title:`HtmlPreview Props`,description:`Preview API`},{id:`features`,title:`Features`,description:`Feature summary`}],B=[{title:`True WYSIWYG`,description:`contentEditable-based rich text surface — you see formatting as you type.`,icon:`M4 6h16M4 12h16M4 18h16`},{title:`Complete formatting`,description:`Bold, italic, underline, strike, code, sup/sub, highlight, colors, fonts, alignment, tables, lists.`,icon:`M12 6v6m0 0v6m0-6h6m-6 0H6`},{title:`Safe by default`,description:`Built-in HTML sanitizer strips scripts, event handlers, and dangerous URL schemes.`,icon:`M9 12l2 2 4-4`},{title:`Image uploads`,description:`Immediate or deferred uploads with paste, drop, and URL input flows.`,icon:`M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7l-9-4-9 4z`},{title:`Configurable toolbar`,description:`Pick any subset of 30+ toolbar actions, or hide the toolbar entirely.`,icon:`M13 10V3L4 14h7v7l9-11h-7z`},{title:`Theme-aware`,description:`All colors flow from --eui-* variables — auto-supports light, dark, and brand themes.`,icon:`M12 3v2m0 14v2m9-9h-2M5 12H3`}],V={color:`var(--eui-text)`},H={color:`var(--eui-text-muted)`},U=()=>(0,m.jsxs)(i,{sectionNavItems:z,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h1`,{className:`text-2xl md:text-4xl font-bold mb-4`,style:V,children:`HTML Editor & Preview`}),(0,m.jsx)(`p`,{className:`text-base md:text-xl`,style:H,children:`A WYSIWYG rich text editor with full formatting — inline marks, colors, fonts, alignment, lists, tables, images, and a safe HTML preview renderer. Theme-aware and accessible by default.`})]}),(0,m.jsxs)(`section`,{id:`basic`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Basic Usage`}),(0,m.jsx)(l,{})]}),(0,m.jsxs)(`section`,{id:`views`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`View Modes`}),(0,m.jsx)(I,{})]}),(0,m.jsxs)(`section`,{id:`preview-only`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Preview Only`}),(0,m.jsx)(A,{})]}),(0,m.jsxs)(`section`,{id:`toolbar`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Custom Toolbar`}),(0,m.jsx)(v,{})]}),(0,m.jsxs)(`section`,{id:`upload-immediate`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Image Upload — Immediate`}),(0,m.jsx)(E,{})]}),(0,m.jsxs)(`section`,{id:`upload-deferred`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Image Upload — Deferred`}),(0,m.jsx)(S,{})]}),(0,m.jsxs)(`section`,{id:`readonly`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Read-only`}),(0,m.jsx)(N,{})]}),(0,m.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`Import`}),(0,m.jsx)(a,{code:`import { HtmlEditor, HtmlPreview } from 'fluxo-ui';
import type { HtmlEditorProps, HtmlEditorHandle, HtmlPreviewProps } from 'fluxo-ui';`})]}),(0,m.jsxs)(`section`,{id:`editor-props`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`HtmlEditor Props`}),(0,m.jsx)(o,{props:L})]}),(0,m.jsxs)(`section`,{id:`preview-props`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:V,children:`HtmlPreview Props`}),(0,m.jsx)(o,{props:R})]}),(0,m.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,m.jsx)(`h2`,{className:`text-2xl font-semibold mb-6`,style:V,children:`Features`}),(0,m.jsx)(c,{features:B})]})]});export{U as default};