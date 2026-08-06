import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./Sortable-D_l7v1ud.js";import{t as o}from"./PageLayout-DSwLk1XV.js";import{t as s}from"./CodeBlock-C1PblznF.js";import{t as c}from"./PropsTable-B4RgQiZf.js";import{t as l}from"./ComponentDemo-C0Y_0jmn.js";import{t as u}from"./FeatureCard-D_o4IlGr.js";import d from"./BasicSortable-DPlAW5W6.js";var f=e(r(),1),p=e(t(),1),m=e=>{switch(e){case`high`:return`bg-red-500`;case`medium`:return`bg-yellow-500`;case`low`:return`bg-green-500`;default:return`bg-gray-400`}},h=e=>{switch(e){case`bug`:return`🐛`;case`feature`:return`✨`;case`docs`:return`📝`;case`review`:return`👀`;case`devops`:return`⚙️`;default:return`📌`}},g={todo:`To Do`,inProgress:`In Progress`,done:`Done`},_={todo:`bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700`,inProgress:`bg-yellow-50 dark:bg-yellow-900/30 hover:bg-yellow-100 dark:hover:bg-yellow-900/40 border-yellow-200 dark:border-yellow-700/50`,done:`bg-green-50 dark:bg-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/40 border-green-200 dark:border-green-700/50`},v=n(),y=[{id:1,title:`Setup project`,description:`Initialize repository and install dependencies`,priority:`high`},{id:2,title:`Design UI mockups`,description:`Create wireframes and mockups`,priority:`medium`},{id:3,title:`Implement features`,description:`Build core functionality`,priority:`high`},{id:4,title:`Write tests`,description:`Add unit and integration tests`,priority:`medium`},{id:5,title:`Deploy to production`,description:`Configure CI/CD and deploy`,priority:`low`}],b=`import { Sortable } from 'fluxo-ui';

interface Task {
  id: number;
  title: string;
  description?: string;
  priority?: 'low' | 'medium' | 'high';
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: 'Setup project', priority: 'high' },
    { id: 2, title: 'Design UI', priority: 'medium' },
    { id: 3, title: 'Deploy', priority: 'low' },
  ]);

  return (
    <Sortable
      items={tasks}
      onChange={(newTasks) => setTasks(newTasks)}
      className="space-y-3"
    >
      {(task) => (
        <div className="bg-gray-100 rounded-lg p-4 cursor-move">
          <h3>{task.title}</h3>
          <span className={\`priority-\${task.priority}\`}>
            {task.priority}
          </span>
        </div>
      )}
    </Sortable>
  );
}`,x=()=>{let[e,t]=(0,f.useState)(y);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{title:`Task List with Priority`,children:(0,v.jsx)(a,{items:e,onChange:e=>t(e),gap:`0.75rem`,children:(e,t)=>(0,v.jsx)(`div`,{className:`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-700`,children:(0,v.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,v.jsx)(`div`,{className:`shrink-0 mt-1`,children:(0,v.jsx)(`div`,{className:`w-3 h-3 rounded-full ${m(e.priority)}`})}),(0,v.jsxs)(`div`,{className:`flex-1`,children:[(0,v.jsx)(`h3`,{className:`text-gray-900 dark:text-white font-medium mb-1`,children:e.title}),e.description&&(0,v.jsx)(`p`,{className:`text-gray-600 dark:text-gray-400 text-sm`,children:e.description})]}),(0,v.jsx)(`div`,{className:`shrink-0`,children:(0,v.jsxs)(`span`,{className:`text-gray-500 text-sm`,children:[`#`,t+1]})})]})})})}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{code:b})})]})},S=`import { Sortable } from 'fluxo-ui';

function ListWithHandles() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);

  return (
    <Sortable
      items={items}
      onChange={setItems}
      provideDragRef
    >
      {(item, index, { draggable }) => (
        <div className="flex items-center gap-3">
          {/* Custom drag handle */}
          <div ref={draggable?.dragRef} className="cursor-move">
            ⋮⋮
          </div>
          <div className="flex-1">{item}</div>
        </div>
      )}
    </Sortable>
  );
}`,C=()=>{let[e,t]=(0,f.useState)([`First Item`,`Second Item`,`Third Item`]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{title:`Using provideDragRef for Custom Handles`,children:(0,v.jsx)(a,{items:e,onChange:e=>t(e),provideDragRef:!0,children:(e,t,{draggable:n})=>(0,v.jsxs)(`div`,{className:`bg-white dark:bg-gray-800 rounded-lg p-4 flex items-center gap-3 border border-gray-200 dark:border-gray-700 shadow-sm`,children:[(0,v.jsx)(`div`,{ref:n?.dragRef,className:`cursor-grab active:cursor-grabbing text-gray-400 dark:text-gray-500 hover:text-gray-700 dark:hover:text-white transition-colors`,children:(0,v.jsx)(`svg`,{className:`w-5 h-5`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,v.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M4 8h16M4 16h16`})})}),(0,v.jsx)(`div`,{className:`flex-1 text-gray-900 dark:text-white`,children:e}),(0,v.jsxs)(`div`,{className:`text-gray-500 text-sm`,children:[`#`,t+1]})]})})}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{code:S})})]})},w={todo:[{id:101,text:`Review pull requests`,type:`review`},{id:102,text:`Update documentation`,type:`docs`},{id:103,text:`Fix bug in login`,type:`bug`}],inProgress:[{id:104,text:`Implement dark mode`,type:`feature`}],done:[{id:105,text:`Setup CI/CD pipeline`,type:`devops`}]},T=`import { Sortable } from 'fluxo-ui';

function KanbanBoard() {
  const [columns, setColumns] = useState({
    todo: [{ id: 1, text: 'Task 1' }],
    inProgress: [{ id: 2, text: 'Task 2' }],
    done: [{ id: 3, text: 'Task 3' }],
  });

  const handleDrop = (columnKey, source, target) => {
    if (source.containerId !== target.containerId) {
      const sourceKey = Object.keys(columns).find(
        key => columns[key].some(item => item.id === source.item.id)
      );

      setColumns({
        ...columns,
        [sourceKey]: columns[sourceKey].filter(
          item => item.id !== source.item.id
        ),
        [columnKey]: [...columns[columnKey], source.item],
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Object.keys(columns).map(columnKey => (
        <Sortable
          key={columnKey}
          items={columns[columnKey]}
          onChange={(newItems) =>
            setColumns({ ...columns, [columnKey]: newItems })
          }
          onDrop={(source, target) =>
            handleDrop(columnKey, source, target)
          }
          showPlaceholder
        >
          {(item) => <div>{item.text}</div>}
        </Sortable>
      ))}
    </div>
  );
}`,E=()=>{let{isDark:e}=i(),[t,n]=(0,f.useState)(w);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(l,{title:`Kanban Board with Sortable Columns`,children:(0,v.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:Object.keys(t).map(r=>(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:(0,p.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:g[r]}),(0,v.jsx)(a,{items:t[r],onChange:e=>{n(t=>({...t,[r]:e}))},onDrop:e=>{n(t=>{let n={...t};return Object.keys(n).forEach(t=>{n[t]=n[t].filter(t=>t.id!==e.item.id)}),n[r]=[...n[r],e.item],n})},className:`min-h-75 bg-gray-50 dark:bg-gray-900/50 rounded-lg p-3`,dropIndicator:`highlight`,showPlaceholder:!0,placeholder:(0,v.jsx)(`div`,{className:`text-center text-gray-500 text-sm`,children:`Drop here`}),children:e=>(0,v.jsx)(`div`,{className:`rounded-lg p-3 transition-colors border ${_[r]}`,children:(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(`span`,{className:`text-lg`,children:h(e.type)}),(0,v.jsx)(`span`,{className:`text-gray-800 dark:text-white text-sm flex-1`,children:e.text})]})})})]},r))})}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{code:T})})]})},D=[`#2563eb`,`#16a34a`,`#d97706`,`#dc2626`,`#7c3aed`,`#0891b2`,`#db2777`,`#65a30d`];function O(e,t=0){return Array.from({length:e},(e,n)=>({id:n+t+1,label:`Row #${n+t+1}`,color:D[(n+t)%D.length]}))}var k=`// Scroll-aware Sortable: 500 items inside a 320px-tall scrollable container.
// Positioning is computed from viewport coordinates + getBoundingClientRect,
// so it remains correct at any scroll position. Auto-scroll engages near edges.
const [items, setItems] = useState(() => makeRows(500));

<div style={{ height: 320, overflow: 'auto' }}>
  <Sortable items={items} onChange={setItems} idProp="id">
    {(row) => <div style={{ background: row.color }}>{row.label}</div>}
  </Sortable>
</div>`,A=()=>{let[e,t]=(0,f.useState)(()=>O(500)),n=(0,f.useMemo)(()=>({count:e.length,first:e[0]?.label,last:e[e.length-1]?.label}),[e]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(l,{title:`Scrollable Container + Long List (500 items)`,children:[(0,v.jsxs)(`div`,{className:`mb-3 text-sm text-gray-600 dark:text-gray-400`,children:[n.count.toLocaleString(),` rows · first: `,(0,v.jsx)(`strong`,{children:n.first}),` · last: `,(0,v.jsx)(`strong`,{children:n.last})]}),(0,v.jsx)(`div`,{style:{height:320,overflow:`auto`},className:`rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 p-3`,children:(0,v.jsx)(a,{items:e,onChange:t,idProp:`id`,gap:`0.375rem`,children:e=>(0,v.jsx)(`div`,{className:`rounded-md px-3 py-2 text-white text-sm font-medium select-none`,style:{background:e.color},children:e.label})})}),(0,v.jsx)(`p`,{className:`mt-3 text-xs text-gray-500 dark:text-gray-500`,children:`Drag a row near the top or bottom edge of the container — it auto-scrolls. Scroll the container while holding a drag, or scroll the page — the insertion line stays locked to where the item will actually land.`})]}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{code:k})})]})},j=()=>{let{isDark:e}=i();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`p`,{className:(0,p.default)(`mb-4`,{"text-gray-400":e,"text-gray-600":!e}),children:[(0,v.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm`,children:`Sortable`}),` `,`is available from the main `,(0,v.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm`,children:`fluxo-ui`}),` `,`entry — no provider wrapping and no extra peer dependencies.`]}),(0,v.jsx)(s,{title:`Use it directly`,code:`import { Sortable } from 'fluxo-ui';

function MyList() {
  const [items, setItems] = useState(['One', 'Two', 'Three']);
  return (
    <Sortable items={items} onChange={setItems}>
      {(item) => <div className="row">{item}</div>}
    </Sortable>
  );
}`}),(0,v.jsxs)(`p`,{className:(0,p.default)(`mt-4 text-sm`,{"text-gray-400":e,"text-gray-600":!e}),children:[`Sortable ships with scroll-aware positioning, auto-scroll near container edges, touch and pen support, optional drag handles, delay activation, and fine-grained`,` `,(0,v.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm`,children:`canDragItem`}),` /`,` `,(0,v.jsx)(`code`,{className:`px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-sm`,children:`canDropItem`}),` callbacks — all in the main library bundle.`]})]})},M=`import { Sortable } from 'fluxo-ui';

function TypeBasedSorting() {
  const [items, setItems] = useState({
    features: [
      { id: 1, text: 'User Auth', type: 'feature' },
      { id: 2, text: 'Dark Mode', type: 'feature' },
    ],
    bugs: [
      { id: 3, text: 'Memory Leak', type: 'bug' },
    ],
    mixed: [],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Features - only accepts feature type */}
      <Sortable
        items={items.features}
        onChange={(newItems) =>
          setItems(prev => ({ ...prev, features: newItems }))
        }
        itemType="feature"
      >
        {(item) => <div>{item.text}</div>}
      </Sortable>

      {/* Bugs - only accepts bug type */}
      <Sortable
        items={items.bugs}
        onChange={(newItems) =>
          setItems(prev => ({ ...prev, bugs: newItems }))
        }
        itemType="bug"
      >
        {(item) => <div>{item.text}</div>}
      </Sortable>

      {/* Mixed - accepts both types */}
      <Sortable
        items={items.mixed}
        accept={['feature', 'bug']}
        onChange={(newItems) =>
          setItems(prev => ({ ...prev, mixed: newItems }))
        }
        onDrop={(source) => {
          setItems(prev => {
            const newState = { ...prev };
            if (source.itemType === 'feature') {
              newState.features = newState.features.filter(
                item => item.id !== source.item.id
              );
            } else if (source.itemType === 'bug') {
              newState.bugs = newState.bugs.filter(
                item => item.id !== source.item.id
              );
            }
            newState.mixed = [...newState.mixed, source.item];
            return newState;
          });
        }}
      >
        {(item) => <div>{item.text}</div>}
      </Sortable>
    </div>
  );
}`,N=()=>{let{isDark:e}=i(),[t,n]=(0,f.useState)({features:[{id:201,text:`User Authentication`,type:`feature`},{id:202,text:`Dark Mode Toggle`,type:`feature`},{id:203,text:`File Upload`,type:`feature`}],bugs:[{id:204,text:`Memory Leak in Dashboard`,type:`bug`},{id:205,text:`Form Validation Error`,type:`bug`}],mixed:[]});return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(l,{title:`Accept Only Specific Types`,children:[(0,v.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-3 gap-4`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:(0,p.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`Features`}),(0,v.jsx)(a,{items:t.features,onChange:e=>{n(t=>({...t,features:e}))},itemType:`feature`,className:`min-h-62.5 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3`,children:e=>(0,v.jsx)(`div`,{className:`bg-blue-600 rounded-lg p-3 hover:bg-blue-500 transition-colors`,children:(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(`span`,{className:`text-lg`,children:`✨`}),(0,v.jsx)(`span`,{className:`text-white text-sm flex-1`,children:e.text})]})})})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:(0,p.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`Bugs`}),(0,v.jsx)(a,{items:t.bugs,onChange:e=>{n(t=>({...t,bugs:e}))},itemType:`bug`,className:`min-h-62.5 bg-red-50 dark:bg-red-900/20 rounded-lg p-3`,children:e=>(0,v.jsx)(`div`,{className:`bg-red-600 rounded-lg p-3 hover:bg-red-500 transition-colors`,children:(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(`span`,{className:`text-lg`,children:`🐛`}),(0,v.jsx)(`span`,{className:`text-white text-sm flex-1`,children:e.text})]})})})]}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h3`,{className:(0,p.default)(`text-sm font-medium mb-3`,{"text-gray-300":e,"text-gray-700":!e}),children:`Mixed (Accepts Both)`}),(0,v.jsx)(a,{items:t.mixed,accept:[`feature`,`bug`],onChange:e=>{n(t=>({...t,mixed:e}))},onDrop:e=>{n(t=>{let n={...t};return e.itemType===`feature`?n.features=n.features.filter(t=>t.id!==e.item.id):e.itemType===`bug`&&(n.bugs=n.bugs.filter(t=>t.id!==e.item.id)),n.mixed.some(t=>t.id===e.item.id)||(n.mixed=[...n.mixed,e.item]),n})},className:`min-h-62.5 bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3`,dropIndicator:`highlight`,showPlaceholder:!0,placeholder:(0,v.jsx)(`div`,{className:`text-center text-purple-600 dark:text-purple-400 text-sm`,children:`Drop features or bugs here`}),children:e=>(0,v.jsx)(`div`,{className:`rounded-lg p-3 transition-colors ${e.type===`feature`?`bg-blue-700 hover:bg-blue-600`:`bg-red-700 hover:bg-red-600`}`,children:(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(`span`,{className:`text-lg`,children:e.type===`feature`?`✨`:`🐛`}),(0,v.jsx)(`span`,{className:`text-white text-sm flex-1`,children:e.text})]})})})]})]}),(0,v.jsx)(`p`,{className:(0,p.default)(`text-sm mt-4`,{"text-gray-400":e,"text-gray-600":!e}),children:`Try dragging items between columns. The "Mixed" column accepts both features and bugs, but features and bugs columns only accept their own types.`})]}),(0,v.jsx)(`div`,{className:`mt-4`,children:(0,v.jsx)(s,{code:M})})]})},{sortableProps:P}={sortableProps:{items:{type:`T[]`,required:!0,description:`Array of items to render`},accept:{type:`string | string[]`,description:`Type(s) of external draggable items this sortable accepts`},itemType:{type:`string`,default:`'any'`,description:`Default item type for items within this sortable`},itemTypeProp:{type:`string`,description:`Property name on items to get their type (for mixed item types)`},args:{type:`any`,description:`Additional arguments passed to callbacks`},allowRemove:{type:`boolean`,default:`false`,description:`Auto-remove items from source list on cross-container drop (default false — manage removal in destination onDrop)`},showPlaceholder:{type:`boolean`,default:`false`,description:`Whether to show a placeholder drop zone at the end`},placeholder:{type:`ReactNode`,description:`Custom placeholder content`},dropIndicator:{type:`'highlight' | 'line' | 'none'`,default:`'line'`,description:`Drop indicator style — 'line' shows an insertion line between items, 'highlight' glows the slot`},orientation:{type:`'vertical' | 'horizontal'`,default:`'vertical'`,description:`Layout direction for items`},gap:{type:`string`,default:`'0.5rem'`,description:`Gap between items (any valid CSS length)`},as:{type:`ElementType`,default:`'div'`,description:`HTML tag name for the container element`},provideDropRef:{type:`boolean`,default:`false`,description:`Pass drop ref to children render function`},provideDragRef:{type:`boolean`,default:`false`,description:`Pass drag ref to children render function`},keyboardReorder:{type:`boolean`,default:`true`,description:`Enable keyboard reorder: Space/Enter to grab, arrow keys to move, Enter to drop, Escape to cancel. Adds role=listbox and aria-grabbed semantics.`},itemAriaLabel:{type:`(item: T, index: number) => string`,description:`Compute the accessible name announced for each draggable slot. Defaults to 'Item N of M'.`},onChange:{type:`(items: T[], args?: any, event?: SortableChangeEvent) => void`,required:!0,description:`Callback when items are reordered or changed`},onDrop:{type:`(source: DragItem, target: DropResult, args?: any) => void`,description:`Callback when an external item is dropped`},onRemove:{type:`(removed: { index: number; id?: string | number }, dropResult: DropResult | null) => void`,description:`Callback when an item is removed (dragged out)`},className:{type:`string`,description:`Additional CSS classes`},children:{type:`(item: T, index: number, refs: { draggable?: DraggableRenderProps; droppable?: DroppableRenderProps }) => ReactNode`,required:!0,description:`Render function for each item`}}},F=[{id:`setup`,title:`Setup`,description:`Import and use`},{id:`basic`,title:`Basic Sortable`,description:`Simple list reordering`},{id:`complex-items`,title:`Complex Items`,description:`Task list with priority`},{id:`multiple-lists`,title:`Multiple Lists`,description:`Kanban board`},{id:`type-based`,title:`Type-Based`,description:`Accept specific types`},{id:`drag-handles`,title:`Drag Handles`,description:`Custom drag handles`},{id:`scrollable-long`,title:`Scrollable + Long List`,description:`500 items with auto-scroll`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],I=[{title:`Reordering`,description:`Drag items within a list to reorder them with smooth visual feedback`,icon:`M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25`},{title:`Multi-List Transfer`,description:`Move items between multiple Sortable lists for kanban-style boards`,icon:`M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z`},{title:`Type Restrictions`,description:`Restrict which item types each Sortable accepts using itemType and accept props`,icon:`M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z`},{title:`Custom Drag Handles`,description:`Use provideDragRef to attach the drag ref to a specific handle element`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Placeholder Drop Zone`,description:`Show a placeholder at the end of the list to indicate the drop target`,icon:`M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3`},{title:`Render Props`,description:`Full access to dragging state for per-item visual feedback via render function`,icon:`M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z`},{title:`Accessibility`,description:`Keyboard drag support and ARIA attributes for screen reader compatibility`,icon:`M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z`},{title:`Theming`,description:`Full dark/light + 5 brand themes via CSS variables — zero extra config`,icon:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`}],L=()=>{let{isDark:e}=i();return(0,v.jsxs)(o,{sectionNavItems:F,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h1`,{className:(0,p.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sortable`}),(0,v.jsx)(`p`,{className:(0,p.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A powerful sortable list component that combines dragging and dropping for easy reordering.`})]}),(0,v.jsxs)(`section`,{id:`setup`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Setup`}),(0,v.jsx)(j,{})]}),(0,v.jsxs)(`section`,{id:`basic`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Sortable List`}),(0,v.jsx)(d,{})]}),(0,v.jsxs)(`section`,{id:`complex-items`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Complex Items with Details`}),(0,v.jsx)(x,{})]}),(0,v.jsxs)(`section`,{id:`multiple-lists`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Multiple Sortable Lists`}),(0,v.jsx)(E,{})]}),(0,v.jsxs)(`section`,{id:`type-based`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Type-Based Drag & Drop Restrictions`}),(0,v.jsx)(N,{})]}),(0,v.jsxs)(`section`,{id:`drag-handles`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Drag Handles`}),(0,v.jsx)(C,{})]}),(0,v.jsxs)(`section`,{id:`scrollable-long`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Scrollable Container + Long List`}),(0,v.jsx)(A,{})]}),(0,v.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,v.jsx)(s,{code:`import { Sortable } from 'fluxo-ui';`})]}),(0,v.jsxs)(`section`,{id:`props`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,v.jsx)(c,{props:P})]}),(0,v.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,v.jsx)(`h2`,{className:(0,p.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,v.jsx)(u,{features:I})]})]})};export{L as default};