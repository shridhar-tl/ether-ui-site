import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{n as r,t as i}from"./Droppable-S9zil2UM.js";import{t as a}from"./CodeBlock-C1PblznF.js";import{t as o}from"./ComponentDemo-C0Y_0jmn.js";var s=e(n(),1),c=[`Item 1`,`Item 2`,`Item 3`,`Item 4`],l=t(),u=`import { Draggable, Droppable } from 'fluxo-ui';

function DragDropExample() {
  const [items] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (source, target) => {
    setDroppedItems([...droppedItems, source.item]);
  };

  return (
    <div className="flex gap-8">
      {/* Source */}
      <div>
        {items.map((item, index) => (
          <Draggable
            key={index}
            containerId="source"
            index={index}
            item={item}
            itemType="task"
          >
            <div className="bg-blue-600 px-4 py-3 rounded cursor-move">
              {item}
            </div>
          </Draggable>
        ))}
      </div>

      {/* Drop Zone — built-in highlight indicator, no manual border logic needed */}
      <Droppable
        containerId="target"
        index={0}
        accept="task"
        onDrop={handleDrop}
        className="min-h-50 border-2 border-dashed border-gray-300 rounded-lg p-4"
      >
        {droppedItems.length > 0
          ? droppedItems.map((item, idx) => <div key={idx}>{item}</div>)
          : 'Drop here'}
      </Droppable>
    </div>
  );
}`,d=()=>{let[e,t]=(0,s.useState)([]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{title:`Simple Drag & Drop`,children:(0,l.jsxs)(`div`,{className:`flex flex-col sm:flex-row gap-6 sm:gap-8`,children:[(0,l.jsxs)(`div`,{className:`flex-1`,children:[(0,l.jsx)(`h3`,{className:`text-sm font-medium mb-3`,style:{color:`var(--eui-text)`},children:`Draggable Items`}),(0,l.jsx)(`div`,{className:`space-y-2`,children:c.map((e,t)=>(0,l.jsx)(r,{containerId:`source`,index:t,item:e,itemType:`task`,children:(0,l.jsx)(`div`,{className:`bg-blue-600 text-white px-4 py-3 rounded cursor-move hover:bg-blue-500 transition-colors`,children:e})},t))})]}),(0,l.jsxs)(`div`,{className:`flex-1`,children:[(0,l.jsx)(`h3`,{className:`text-sm font-medium mb-3`,style:{color:`var(--eui-text)`},children:`Drop Zone`}),(0,l.jsx)(i,{containerId:`target`,index:0,accept:`task`,onDrop:e=>{t(t=>[...t,e.item])},className:`min-h-50 rounded-lg border-2 border-dashed p-4`,style:{borderColor:`var(--eui-border)`,background:`var(--eui-bg-subtle)`},children:e.length>0?(0,l.jsx)(`div`,{className:`space-y-2`,children:e.map((e,t)=>(0,l.jsx)(`div`,{className:`bg-green-600 text-white px-4 py-3 rounded`,children:e},t))}):(0,l.jsx)(`div`,{className:`text-center py-16`,style:{color:`var(--eui-text-muted)`},children:`Drop items here`})})]})]})}),(0,l.jsx)(`div`,{className:`mt-4`,children:(0,l.jsx)(a,{code:u})})]})};export{d as default};