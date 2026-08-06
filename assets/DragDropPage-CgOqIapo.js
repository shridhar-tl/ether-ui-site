import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{n as a,t as o}from"./Droppable-S9zil2UM.js";import{t as s}from"./Sortable-D_l7v1ud.js";import{t as c}from"./PageLayout-DSwLk1XV.js";import{t as l}from"./CodeBlock-C1PblznF.js";import{t as u}from"./PropsTable-B4RgQiZf.js";import{t as d}from"./ComponentDemo-C0Y_0jmn.js";import{t as f}from"./FeatureCard-D_o4IlGr.js";import p from"./BasicDragDrop-Byq6LKnI.js";var m=e(t(),1),h=e(r(),1),g=n(),_=[{id:1,title:`Install grip handles`,description:`Only the grip on the left starts a drag.`},{id:2,title:`Body is interactive`,description:`You can still click buttons and select text in the body.`},{id:3,title:`Touch friendly`,description:`Works the same on mouse, touch, and pen.`}],v=`function HandleRow({ card }) {
  const handleRef = useRef(null);
  return (
    <Draggable
      containerId="handles"
      index={card.index}
      item={card}
      dragHandle={handleRef}
    >
      <div className="row">
        <button ref={handleRef} aria-label="Drag">≡</button>
        <div className="body">{card.title}</div>
      </div>
    </Draggable>
  );
}`,y=({card:e,index:t})=>{let n=(0,h.useRef)(null);return(0,g.jsx)(a,{containerId:`handle-strict`,index:t,id:e.id,item:e,itemType:`card`,dragHandle:n,children:(0,g.jsxs)(`div`,{className:`flex items-stretch gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden`,children:[(0,g.jsx)(`button`,{ref:n,type:`button`,className:`px-3 flex items-center text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 cursor-grab active:cursor-grabbing bg-gray-50 dark:bg-gray-900`,"aria-label":`Drag handle`,children:(0,g.jsxs)(`svg`,{width:`14`,height:`14`,viewBox:`0 0 16 16`,fill:`currentColor`,children:[(0,g.jsx)(`circle`,{cx:`5`,cy:`3`,r:`1.2`}),(0,g.jsx)(`circle`,{cx:`11`,cy:`3`,r:`1.2`}),(0,g.jsx)(`circle`,{cx:`5`,cy:`8`,r:`1.2`}),(0,g.jsx)(`circle`,{cx:`11`,cy:`8`,r:`1.2`}),(0,g.jsx)(`circle`,{cx:`5`,cy:`13`,r:`1.2`}),(0,g.jsx)(`circle`,{cx:`11`,cy:`13`,r:`1.2`})]})}),(0,g.jsxs)(`div`,{className:`py-3 pr-4 flex-1 min-w-0`,children:[(0,g.jsx)(`div`,{className:`font-semibold text-gray-900 dark:text-gray-100 text-sm`,children:e.title}),(0,g.jsx)(`div`,{className:`text-xs text-gray-500 dark:text-gray-400 mt-0.5`,children:e.description}),(0,g.jsx)(`button`,{type:`button`,className:`mt-2 text-xs text-indigo-600 dark:text-indigo-400 hover:underline`,onClick:e=>{e.stopPropagation(),alert(`Body button still works!`)},children:`Click a body button`})]})]})})},b=()=>{let[e,t]=(0,h.useState)(_);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d,{title:`Strict Drag Handles (handle-only activation)`,children:[(0,g.jsx)(`div`,{className:`w-full max-w-lg`,children:(0,g.jsx)(s,{items:e,onChange:t,idProp:`id`,itemType:`card`,gap:`0.5rem`,children:(e,t)=>(0,g.jsx)(y,{card:e,index:t})})}),(0,g.jsx)(`p`,{className:`mt-3 text-xs text-gray-500 dark:text-gray-500 text-center max-w-lg`,children:`Try dragging the card body — nothing happens. Drag from the grip icon on the left to reorder. The body remains fully interactive (text selection, button clicks).`})]}),(0,g.jsx)(`div`,{className:`mt-4`,children:(0,g.jsx)(l,{code:v})})]})},x=[{id:1,label:`Alpha`},{id:2,label:`Bravo`},{id:3,label:`Charlie`},{id:4,label:`Delta`},{id:5,label:`Echo`}],S=`// dropPosition="auto" splits each target in half and returns
// the exact insert index via position ('before' | 'after').
<Droppable
  containerId="list"
  index={i}
  dropPosition="auto"
  dropIndicator="line"
  edgeThreshold={12}
  onDrop={(source, target) => {
    // target.index already reflects before/after choice
    setItems((prev) => reorder(prev, source.index, target.index));
  }}
>
  {item}
</Droppable>`;function C(e,t,n){let r=[...e],[i]=r.splice(t,1),a=n;return t<n&&--a,r.splice(a,0,i),r}var w=()=>{let[e,t]=(0,h.useState)(x);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d,{title:`Drop Position Auto (before / after insertion)`,children:[(0,g.jsx)(`div`,{className:`flex flex-col gap-1 w-full max-w-md`,children:e.map((e,n)=>(0,g.jsx)(o,{containerId:`drop-pos-auto`,index:n,id:e.id,accept:`row`,dropIndicator:`line`,dropPosition:`auto`,edgeThreshold:12,onDrop:(e,n)=>{e.containerId===`drop-pos-auto`&&e.index!==n.index&&e.index+1!==n.index&&t(t=>C(t,e.index,n.index))},children:(0,g.jsx)(a,{containerId:`drop-pos-auto`,index:n,id:e.id,item:e,itemType:`row`,children:(0,g.jsx)(`div`,{className:`bg-indigo-600 text-white px-4 py-3 rounded-md shadow-sm cursor-grab select-none`,children:e.label})})},e.id))}),(0,g.jsx)(`p`,{className:`mt-3 text-xs text-gray-500 dark:text-gray-500 text-center max-w-md`,children:`Hover the top half of any row to see the insertion line on the top edge; hover the bottom half to see it on the bottom edge. Dropping lands exactly where the line is shown.`})]}),(0,g.jsx)(`div`,{className:`mt-4`,children:(0,g.jsx)(l,{code:S})})]})},T=`<Droppable
  containerId="files"
  index={0}
  acceptFiles
  onDrop={(source) => {
    const fileList = source.item.files as FileList;
    // handle files...
  }}
>
  <div>Drop files from your desktop here</div>
</Droppable>`;function E(e){return e<1024?`${e} B`:e<1048576?`${(e/1024).toFixed(1)} KB`:`${(e/1048576).toFixed(2)} MB`}var D=()=>{let[e,t]=(0,h.useState)([]);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{title:`Native OS File Drop`,children:(0,g.jsxs)(`div`,{className:`w-full max-w-xl`,children:[(0,g.jsx)(o,{containerId:`file-drop-zone`,index:0,acceptFiles:!0,dropIndicator:`highlight`,className:`min-h-40 flex items-center justify-center p-6 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900/30`,onDrop:e=>{let n=e.item.files;if(!n)return;let r=[];for(let e=0;e<n.length;e++){let t=n[e];r.push({name:t.name,size:t.size,type:t.type||`unknown`})}t(e=>[...r,...e].slice(0,20))},children:(0,g.jsxs)(`div`,{className:`text-center`,children:[(0,g.jsx)(`div`,{className:`text-3xl mb-1`,children:`📁`}),(0,g.jsx)(`div`,{className:`text-sm font-medium text-gray-700 dark:text-gray-200`,children:`Drop files from your desktop here`}),(0,g.jsx)(`div`,{className:`text-xs text-gray-500 dark:text-gray-500 mt-0.5`,children:`Accepts any file type — uses native OS drag`})]})}),e.length>0&&(0,g.jsxs)(`div`,{className:`mt-4 space-y-1`,children:[(0,g.jsxs)(`div`,{className:`text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide`,children:[`Recently dropped (`,e.length,`)`]}),e.map((e,t)=>(0,g.jsxs)(`div`,{className:`flex items-center justify-between text-sm bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700 px-3 py-1.5`,children:[(0,g.jsx)(`span`,{className:`truncate text-gray-900 dark:text-gray-100`,children:e.name}),(0,g.jsxs)(`span`,{className:`text-xs text-gray-500 dark:text-gray-400 ml-3 flex-shrink-0`,children:[E(e.size),` · `,e.type]})]},`${e.name}-${t}`))]})]})}),(0,g.jsx)(`div`,{className:`mt-4`,children:(0,g.jsx)(l,{code:T})})]})},O=`import { Draggable, Droppable } from 'fluxo-ui';

function KanbanBoard() {
  const [items, setItems] = useState({
    todo: ['Task A', 'Task B', 'Task C'],
    done: [],
  });

  const handleDrop = (source, target) => {
    const sourceContainer = source.containerId;
    const targetContainer = target.containerId;

    if (sourceContainer === targetContainer) return;

    setItems(prev => ({
      todo: sourceContainer === 'todo'
        ? prev.todo.filter((_, i) => i !== source.index)
        : prev.todo,
      done: targetContainer === 'done'
        ? [...prev.done, source.item]
        : prev.done,
    }));
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
      <Droppable containerId="todo" index={0} accept="task" onDrop={handleDrop}>
        {({ dropRef, isOver }) => (
          <div ref={dropRef}>
            {items.todo.map((item, index) => (
              <Draggable
                key={index}
                containerId="todo"
                index={index}
                item={item}
                itemType="task"
              >
                <div>{item}</div>
              </Draggable>
            ))}
          </div>
        )}
      </Droppable>

      <Droppable containerId="done" index={0} accept="task" onDrop={handleDrop}>
        {({ dropRef }) => (
          <div ref={dropRef}>
            {items.done.map((item, idx) => (
              <div key={idx}>{item}</div>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}`,k=()=>{let{isDark:e}=i(),[t,n]=(0,h.useState)({source:[`Task A`,`Task B`,`Task C`],done:[]}),r=(e,t)=>{let r=e.containerId,i=t.containerId;r!==i&&n(t=>({source:r===`source`?t.source.filter((t,n)=>n!==e.index):t.source,done:i===`done`?[...t.done,e.item]:t.done}))};return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{title:`Kanban-style Board`,children:(0,g.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 sm:gap-8`,children:[(0,g.jsxs)(`div`,{className:`flex-1`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`To Do`}),(0,g.jsx)(o,{containerId:`source`,index:0,accept:`task`,onDrop:r,className:`border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-62.5 bg-gray-50 dark:bg-gray-900/40`,children:(0,g.jsx)(`div`,{className:`space-y-2`,children:t.source.map((e,t)=>(0,g.jsx)(a,{containerId:`source`,index:t,item:e,itemType:`task`,children:(0,g.jsx)(`div`,{className:`bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-3 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors`,children:e})},t))})})]}),(0,g.jsxs)(`div`,{className:`flex-1`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`Done`}),(0,g.jsx)(o,{containerId:`done`,index:0,accept:`task`,onDrop:r,className:`border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 min-h-62.5 bg-gray-50 dark:bg-gray-900/40`,children:(0,g.jsxs)(`div`,{className:`space-y-2`,children:[t.done.map((e,t)=>(0,g.jsx)(`div`,{className:`bg-green-600 text-white px-4 py-3 rounded`,children:e},t)),t.done.length===0&&(0,g.jsx)(`div`,{className:`text-gray-500 text-center py-8`,children:`Drop completed tasks here`})]})})]})]})}),(0,g.jsx)(`div`,{className:`mt-4`,children:(0,g.jsx)(l,{code:O})})]})},A=`<Draggable containerId="source" index={0} item={item} itemType="feature">
  {({ isDragging, dragRef }) => (
    <div
      ref={dragRef}
      className={\`\${isDragging ? 'opacity-50 scale-105' : ''}\`}
    >
      {item}
    </div>
  )}
</Draggable>

<Droppable containerId="target" index={0} accept="feature" onDrop={handleDrop}>
  {({ dropRef, isOver, canDrop }) => (
    <div
      ref={dropRef}
      className={\`\${isOver && canDrop ? 'bg-green-500/20' : ''}\`}
    >
      {isOver ? 'Release to drop' : 'Drop here'}
    </div>
  )}
</Droppable>`,j=()=>{let{isDark:e}=i(),[t,n]=(0,h.useState)({available:[`Feature 1`,`Feature 2`,`Feature 3`],selected:[]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(d,{title:`Visual Feedback with Render Props`,children:(0,g.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 sm:gap-8`,children:[(0,g.jsxs)(`div`,{className:`flex-1`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`Available Features`}),(0,g.jsx)(`div`,{className:`space-y-2`,children:t.available.map((e,t)=>(0,g.jsx)(a,{containerId:`available`,index:t,item:e,itemType:`feature`,children:({isDragging:t,dragRef:n})=>(0,g.jsx)(`div`,{ref:n,className:`px-4 py-3 rounded cursor-move transition-all ${t?`bg-blue-400 opacity-50 scale-105`:`bg-blue-600 hover:bg-blue-500`} text-white`,children:e})},t))})]}),(0,g.jsxs)(`div`,{className:`flex-1`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`Selected Features`}),(0,g.jsx)(o,{containerId:`selected`,index:0,accept:`feature`,onDrop:(e,t)=>{let r=e.containerId,i=t.containerId;r!==i&&n(t=>({available:r===`available`?t.available.filter((t,n)=>n!==e.index):t.available,selected:i===`selected`?[...t.selected,e.item]:t.selected}))},children:({dropRef:e,isOver:n,canDrop:r})=>(0,g.jsx)(`div`,{ref:e,className:`border-2 border-dashed rounded p-4 min-h-50 transition-all ${n&&r?`border-purple-500 bg-purple-500/20 scale-105`:r?`border-purple-500 dark:border-purple-600 bg-purple-50 dark:bg-purple-500/5`:`border-gray-300 dark:border-gray-700`}`,children:t.selected.length>0?(0,g.jsx)(`div`,{className:`space-y-2`,children:t.selected.map((e,t)=>(0,g.jsx)(`div`,{className:`bg-purple-600 text-white px-4 py-3 rounded`,children:e},t))}):(0,g.jsx)(`div`,{className:`text-gray-500 text-center py-16`,children:n?`Release to drop`:`Drag features here`})})})]})]})}),(0,g.jsx)(`div`,{className:`mt-4`,children:(0,g.jsx)(l,{code:A})})]})},M=()=>{let{isDark:e}=i();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`p`,{className:(0,m.default)(`mb-4`,{"text-gray-400":e,"text-gray-600":!e}),children:[`Drag & drop components work out of the box — no provider wrapping, no extra peer dependencies. Just import from `,(0,g.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm`,children:`fluxo-ui`}),` and go.`]}),(0,g.jsx)(l,{title:`Use it directly`,code:`import { Draggable, Droppable } from 'fluxo-ui';

function MyList() {
  return (
    <>
      <Draggable containerId="list" index={0} item={myItem}>
        <div>Drag me</div>
      </Draggable>
      <Droppable containerId="target" index={0} onDrop={handleDrop}>
        <div>Drop here</div>
      </Droppable>
    </>
  );
}`}),(0,g.jsxs)(`p`,{className:(0,m.default)(`mt-4 text-sm`,{"text-gray-400":e,"text-gray-600":!e}),children:[`The built-in engine supports mouse, touch, pen, drag handles, delay activation, custom live previews, auto-scroll near container edges, and scroll-aware positioning — all with zero third-party dependencies. An optional`,` `,(0,g.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm`,children:`DragDropProvider`}),` `,`is still exported for backwards compatibility but is no longer required.`]})]})},N=`import { Draggable, Droppable } from 'fluxo-ui';

function TypeBasedDragDrop() {
  const [items, setItems] = useState({
    images: [
      { id: 1, name: 'photo1.jpg', type: 'image' },
      { id: 2, name: 'photo2.png', type: 'image' },
    ],
    documents: [
      { id: 3, name: 'report.pdf', type: 'document' },
    ],
    imageFolder: [],
    recyclingBin: [],
  });

  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Images Source */}
      <div>
        {items.images.map((item, index) => (
          <Draggable
            key={item.id}
            containerId="images"
            index={index}
            item={item}
            itemType="image"
            onRemove={(source) => {
              setItems(prev => ({
                ...prev,
                images: prev.images.filter((_, i) => i !== source.index),
              }));
            }}
          >
            <div>{item.name}</div>
          </Draggable>
        ))}
      </div>

      {/* Image Folder - Only accepts images */}
      <Droppable
        containerId="image-folder"
        index={0}
        accept="image"
        onDrop={(source) => {
          setItems(prev => ({
            ...prev,
            imageFolder: [...prev.imageFolder, source.item],
          }));
        }}
      >
        {({ dropRef, isOver, canDrop }) => (
          <div
            ref={dropRef}
            className={\`\${isOver && canDrop ? 'bg-blue-500/20' : ''}\`}
          >
            {items.imageFolder.length > 0
              ? items.imageFolder.map(item => <div key={item.id}>{item.name}</div>)
              : 'Drop images here'}
          </div>
        )}
      </Droppable>

      {/* Recycling Bin - Accepts both types */}
      <Droppable
        containerId="bin"
        index={0}
        accept={['image', 'document']}
        onDrop={(source) => {
          setItems(prev => ({
            ...prev,
            recyclingBin: [...prev.recyclingBin, source.item],
          }));
        }}
      >
        {({ dropRef }) => (
          <div ref={dropRef}>
            {items.recyclingBin.map(item => (
              <div key={item.id}>{item.name}</div>
            ))}
          </div>
        )}
      </Droppable>
    </div>
  );
}`,P=()=>{let{isDark:e}=i(),[t,n]=(0,h.useState)({images:[{id:1,name:`photo1.jpg`,type:`image`},{id:2,name:`photo2.png`,type:`image`},{id:3,name:`photo3.gif`,type:`image`}],documents:[{id:4,name:`report.pdf`,type:`document`},{id:5,name:`notes.docx`,type:`document`}],imageFolder:[],documentFolder:[],recyclingBin:[]});return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(d,{title:`Accept Only Specific Item Types`,children:[(0,g.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:[(0,g.jsxs)(`div`,{className:`space-y-3`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-2`,{"text-gray-300":e,"text-gray-700":!e}),children:`Images`}),(0,g.jsx)(`div`,{className:`space-y-2`,children:t.images.map((e,t)=>(0,g.jsx)(a,{containerId:`images-source`,index:t,item:e,itemType:`image`,onRemove:e=>{n(t=>({...t,images:t.images.filter((t,n)=>n!==e.index)}))},children:(0,g.jsxs)(`div`,{className:`bg-blue-600 text-white px-3 py-2 rounded cursor-move hover:bg-blue-500 transition-colors flex items-center gap-2`,children:[(0,g.jsx)(`span`,{children:`🖼️`}),(0,g.jsx)(`span`,{className:`text-sm`,children:e.name})]})},e.id))}),(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-2 mt-4`,{"text-gray-300":e,"text-gray-700":!e}),children:`Documents`}),(0,g.jsx)(`div`,{className:`space-y-2`,children:t.documents.map((e,t)=>(0,g.jsx)(a,{containerId:`documents-source`,index:t,item:e,itemType:`document`,onRemove:e=>{n(t=>({...t,documents:t.documents.filter((t,n)=>n!==e.index)}))},children:(0,g.jsxs)(`div`,{className:`bg-green-600 text-white px-3 py-2 rounded cursor-move hover:bg-green-500 transition-colors flex items-center gap-2`,children:[(0,g.jsx)(`span`,{children:`📄`}),(0,g.jsx)(`span`,{className:`text-sm`,children:e.name})]})},e.id))})]}),(0,g.jsxs)(`div`,{className:`space-y-3`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-2`,{"text-gray-300":e,"text-gray-700":!e}),children:`Image Folder (Images Only)`}),(0,g.jsx)(o,{containerId:`image-folder`,index:0,accept:`image`,onDrop:e=>{n(t=>({...t,imageFolder:[...t.imageFolder,e.item]}))},className:`min-h-30 border-2 border-dashed rounded-lg p-3 border-blue-400 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20`,children:t.imageFolder.length>0?(0,g.jsx)(`div`,{className:`space-y-1`,children:t.imageFolder.map(e=>(0,g.jsxs)(`div`,{className:`bg-blue-700 text-white px-2 py-1 rounded text-xs flex items-center gap-1`,children:[(0,g.jsx)(`span`,{children:`🖼️`}),(0,g.jsx)(`span`,{children:e.name})]},e.id))}):(0,g.jsx)(`div`,{className:`text-gray-500 text-center py-8 text-sm`,children:`Drop images here`})}),(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-2 mt-4`,{"text-gray-300":e,"text-gray-700":!e}),children:`Document Folder (Documents Only)`}),(0,g.jsx)(o,{containerId:`document-folder`,index:0,accept:`document`,onDrop:e=>{n(t=>({...t,documentFolder:[...t.documentFolder,e.item]}))},className:`min-h-30 border-2 border-dashed rounded-lg p-3 border-green-400 dark:border-green-600 bg-green-50 dark:bg-green-900/20`,children:t.documentFolder.length>0?(0,g.jsx)(`div`,{className:`space-y-1`,children:t.documentFolder.map(e=>(0,g.jsxs)(`div`,{className:`bg-green-700 text-white px-2 py-1 rounded text-xs flex items-center gap-1`,children:[(0,g.jsx)(`span`,{children:`📄`}),(0,g.jsx)(`span`,{children:e.name})]},e.id))}):(0,g.jsx)(`div`,{className:`text-gray-500 text-center py-8 text-sm`,children:`Drop documents here`})})]}),(0,g.jsxs)(`div`,{className:`space-y-3`,children:[(0,g.jsx)(`h3`,{className:(0,m.default)(`text-sm font-medium mb-2`,{"text-gray-300":e,"text-gray-700":!e}),children:`Recycling Bin (Accepts All)`}),(0,g.jsx)(o,{containerId:`recycling-bin`,index:0,accept:[`image`,`document`],onDrop:e=>{n(t=>({...t,recyclingBin:[...t.recyclingBin,e.item]}))},className:`min-h-75 border-2 border-dashed rounded-lg p-3 border-red-400 dark:border-red-600 bg-red-50 dark:bg-red-900/20`,children:t.recyclingBin.length>0?(0,g.jsx)(`div`,{className:`space-y-1`,children:t.recyclingBin.map(e=>(0,g.jsxs)(`div`,{className:`px-2 py-1 rounded text-xs flex items-center gap-1 ${e.type===`image`?`bg-blue-700 text-white`:`bg-green-700 text-white`}`,children:[(0,g.jsx)(`span`,{children:e.type===`image`?`🖼️`:`📄`}),(0,g.jsx)(`span`,{children:e.name})]},e.id))}):(0,g.jsxs)(`div`,{className:`text-gray-500 text-center py-24 text-sm`,children:[(0,g.jsx)(`div`,{className:`text-4xl mb-2`,children:`🗑️`}),`Drop any file here`]})})]})]}),(0,g.jsx)(`p`,{className:(0,m.default)(`text-sm mt-4`,{"text-gray-400":e,"text-gray-600":!e}),children:`Try dragging files to different folders. The Image Folder only accepts images, Document Folder only accepts documents, but the Recycling Bin accepts both types. Try dragging a document to the Image Folder — it won't be accepted!`})]}),(0,g.jsx)(`div`,{className:`mt-4`,children:(0,g.jsx)(l,{code:N})})]})},{draggableProps:F,droppableProps:I}={draggableProps:{containerId:{type:`string`,required:!0,description:`Unique identifier for the container this draggable belongs to`},index:{type:`number`,required:!0,description:`Index of the item in the container`},item:{type:`any`,required:!0,description:`The actual item data being dragged`},id:{type:`string | number`,description:`Optional unique identifier for the item`},itemType:{type:`string`,default:`'any'`,description:`Type of the draggable item (used for drop validation)`},args:{type:`any`,description:`Additional arguments to pass along with drag data`},canDrag:{type:`boolean`,default:`true`,description:`Whether the item can be dragged`},onRemove:{type:`(source: { index: number; id?: string | number }, dropResult: DropResult | null) => void`,description:`Callback when item is removed from its original container`},onDragStart:{type:`(item: DragItem, monitor: DragSourceMonitor) => void`,description:`Callback when drag starts`},onDragEnd:{type:`(item: DragItem | undefined, monitor: DragSourceMonitor) => void`,description:`Callback when drag ends`},className:{type:`string`,description:`Additional CSS classes`},draggingClassName:{type:`string`,description:`Extra CSS classes applied only while the item is being dragged`},hideDefaultPreview:{type:`boolean`,default:`false`,description:`Hide the default browser drag preview (useful for custom overlays)`},children:{type:`ReactNode | ((props: DraggableRenderProps) => ReactNode)`,description:`Children can be ReactNode or render prop function`}},droppableProps:{containerId:{type:`string`,required:!0,description:`Unique identifier for the container`},index:{type:`number`,required:!0,description:`Index position within the container`},id:{type:`string | number`,description:`Optional unique identifier`},accept:{type:`string | string[]`,default:`'any'`,description:`Type(s) of draggable items this droppable accepts`},args:{type:`any`,description:`Additional arguments to pass to drop handler`},canDrop:{type:`boolean | ((item: DragItem, monitor: DropTargetMonitor) => boolean)`,default:`true`,description:`Whether dropping is currently allowed`},onDrop:{type:`(source: DragItem, target: DropResult) => void`,description:`Callback when an item is dropped`},onHover:{type:`(item: DragItem, monitor: DropTargetMonitor) => void`,description:`Callback when a draggable item hovers over this droppable`},className:{type:`string`,description:`Additional CSS classes`},dropIndicator:{type:`'highlight' | 'line' | 'none'`,default:`'highlight'`,description:`Built-in visual indicator style for drop targets`},linePosition:{type:`'start' | 'end'`,default:`'start'`,description:`Where to render the insertion line when dropIndicator='line'`},orientation:{type:`'vertical' | 'horizontal'`,default:`'vertical'`,description:`Direction of the line indicator`},children:{type:`ReactNode | ((props: DroppableRenderProps) => ReactNode)`,description:`Children can be ReactNode or render prop function`}}},L=[{id:`setup`,title:`Setup`,description:`Import and use`},{id:`basic`,title:`Basic Drag & Drop`,description:`Simple drag and drop`},{id:`multi-container`,title:`Multi-Container`,description:`Kanban-style board`},{id:`render-props`,title:`Render Props`,description:`Custom styling`},{id:`type-based`,title:`Type-Based`,description:`Drop type restrictions`},{id:`drop-position-auto`,title:`Drop Position Auto`,description:`Before / after insertion`},{id:`drag-handles`,title:`Drag Handles`,description:`Handle-only activation`},{id:`file-drop`,title:`File Drop`,description:`Native OS file drops`},{id:`import`,title:`Import`,description:`Import statement`},{id:`draggable-props`,title:`Draggable Props`,description:`Draggable API`},{id:`droppable-props`,title:`Droppable Props`,description:`Droppable API`},{id:`features`,title:`Features`,description:`Feature summary`}],R=[{title:`Draggable`,description:`Wrap any element to make it draggable with full control over item type and drag callbacks`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Droppable`,description:`Define drop zones that accept specific item types with hover and drop callbacks`,icon:`M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3`},{title:`Type-Based Restrictions`,description:`Accept only specific item types per drop zone using the accept prop`,icon:`M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z`},{title:`Render Props`,description:`Access isDragging, isOver, canDrop, and ref callbacks via render prop pattern`,icon:`M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z`},{title:`Multi-Container`,description:`Move items between multiple containers for kanban boards and category sorting`,icon:`M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z`},{title:`onRemove Callback`,description:`Cleanly remove items from their source container when dropped elsewhere`,icon:`M6 18 18 6M6 6l12 12`},{title:`Accessibility`,description:`Keyboard drag support and ARIA attributes for screen reader compatibility`,icon:`M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z`},{title:`Theming`,description:`Full dark/light + 5 brand themes via CSS variables — zero extra config`,icon:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`}],z=()=>{let{isDark:e}=i();return(0,g.jsxs)(c,{sectionNavItems:L,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h1`,{className:(0,m.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Drag & Drop`}),(0,g.jsx)(`p`,{className:(0,m.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`Powerful drag and drop components with scroll-aware positioning, auto-scroll, touch support, and fine-grained drop validation — zero third-party dependencies.`})]}),(0,g.jsxs)(`section`,{id:`setup`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Setup`}),(0,g.jsx)(M,{})]}),(0,g.jsxs)(`section`,{id:`basic`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Drag & Drop`}),(0,g.jsx)(p,{})]}),(0,g.jsxs)(`section`,{id:`multi-container`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Multi-Container Drag & Drop`}),(0,g.jsx)(k,{})]}),(0,g.jsxs)(`section`,{id:`render-props`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Styling with Render Props`}),(0,g.jsx)(j,{})]}),(0,g.jsxs)(`section`,{id:`type-based`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Type-Based Drag & Drop Restrictions`}),(0,g.jsx)(P,{})]}),(0,g.jsxs)(`section`,{id:`drop-position-auto`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Drop Position — Before / After`}),(0,g.jsx)(w,{})]}),(0,g.jsxs)(`section`,{id:`drag-handles`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Strict Drag Handles`}),(0,g.jsx)(b,{})]}),(0,g.jsxs)(`section`,{id:`file-drop`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Native File Drop`}),(0,g.jsx)(D,{})]}),(0,g.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,g.jsx)(l,{code:`import { Draggable, Droppable } from 'fluxo-ui';`})]}),(0,g.jsxs)(`section`,{id:`draggable-props`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Draggable Props`}),(0,g.jsx)(u,{props:F})]}),(0,g.jsxs)(`section`,{id:`droppable-props`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Droppable Props`}),(0,g.jsx)(u,{props:I})]}),(0,g.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,g.jsx)(`h2`,{className:(0,m.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,g.jsx)(f,{features:R})]})]})};export{z as default};