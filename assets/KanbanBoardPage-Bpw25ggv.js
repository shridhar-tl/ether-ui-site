import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./PageLayout-DSwLk1XV.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./PropsTable-B4RgQiZf.js";import{t as c}from"./ComponentDemo-C0Y_0jmn.js";import{t as l}from"./FeatureCard-D_o4IlGr.js";import u,{a as d,c as f,d as p,f as m,g as h,h as g,i as _,l as v,m as y,n as b,o as x,p as S,r as C,s as w,t as T,u as ee}from"./BasicUsage-TMg9kvS3.js";var E=e(t(),1),D=e(r(),1),O=n(),k=`const cards: KanbanCardData[] = [
  {
    id: 'b1',
    title: 'Implement SSO integration',
    columnId: 'in-progress',
    order: 0,
    priority: 'high',
    blocked: true,
    color: '#ef4444',
    description: 'Blocked: Waiting for IdP credentials.',
  },
  {
    id: 'b2',
    title: 'Mobile push notifications',
    columnId: 'in-progress',
    order: 1,
    priority: 'medium',
    blocked: true,
  },
  // non-blocked cards...
];

<KanbanBoard
  columns={columns}
  cards={cards}
  cardSize="detailed"
  draggable
  showCardCount
/>`,A=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Blocked Cards`,description:`Set blocked: true on a card to visually indicate it is blocked. Combine with color to add a colored left border.`,centered:!1,children:(0,O.jsx)(h,{columns:_,cards:C,cardSize:`detailed`,draggable:!0,showCardCount:!0})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:k,language:`tsx`})})]}),j=`<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  showCardCount
  cardActionsTemplate={(card, column) => (
    <div className="flex items-center gap-1">
      <button
        className="px-2 py-0.5 text-xs rounded hover:bg-gray-100"
        onClick={() => console.log('Edit:', card.title)}
      >
        Edit
      </button>
      <button
        className="px-2 py-0.5 text-xs rounded hover:bg-gray-100"
        onClick={() => console.log('Archive:', card.title)}
      >
        Archive
      </button>
    </div>
  )}
/>`,M=()=>{let{isDark:e}=i();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Custom Card Actions`,description:`Use cardActionsTemplate to add action buttons in the card footer area.`,centered:!1,children:(0,O.jsx)(h,{columns:x,cards:d,draggable:!0,showCardCount:!0,cardActionsTemplate:(t,n)=>(0,O.jsxs)(`div`,{className:`flex items-center gap-1 mt-1`,children:[(0,O.jsx)(`button`,{className:(0,E.default)(`px-2 py-0.5 text-[11px] rounded transition-colors`,{"hover:bg-white/10 text-gray-400":e,"hover:bg-gray-100 text-gray-500":!e}),onClick:e=>{e.stopPropagation(),console.log(`Edit:`,t.title)},type:`button`,children:`Edit`}),(0,O.jsx)(`button`,{className:(0,E.default)(`px-2 py-0.5 text-[11px] rounded transition-colors`,{"hover:bg-white/10 text-gray-400":e,"hover:bg-gray-100 text-gray-500":!e}),onClick:e=>{e.stopPropagation(),console.log(`Archive:`,t.title)},type:`button`,children:`Archive`})]})})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:j,language:`tsx`})})]})},N=[{id:`backlog`,title:`Backlog`,color:`#94a3b8`},{id:`todo`,title:`To Do`,color:`#3b82f6`},{id:`in-progress`,title:`In Progress`,color:`#f59e0b`},{id:`review`,title:`Code Review`,color:`#8b5cf6`,collapsed:!0},{id:`done`,title:`Done`,color:`#10b981`}],P=[{id:`1`,title:`Design landing page mockup`,columnId:`backlog`,order:0,priority:`medium`},{id:`2`,title:`Implement user auth API`,columnId:`backlog`,order:1,priority:`high`},{id:`3`,title:`Set up CI/CD pipeline`,columnId:`todo`,order:0,priority:`low`},{id:`4`,title:`Write unit tests for auth`,columnId:`todo`,order:1,priority:`medium`},{id:`5`,title:`Build dashboard layout`,columnId:`in-progress`,order:0,priority:`high`},{id:`6`,title:`API rate limiting`,columnId:`in-progress`,order:1,priority:`critical`},{id:`7`,title:`Review PR #142`,columnId:`review`,order:0,priority:`medium`},{id:`8`,title:`Database migration script`,columnId:`done`,order:0,priority:`low`},{id:`9`,title:`Setup logging infrastructure`,columnId:`done`,order:1,priority:`medium`}],F=`import { KanbanBoard } from 'fluxo-ui';
import type { KanbanColumnData, KanbanCardData, KanbanColumnId } from 'fluxo-ui';

const columns: KanbanColumnData[] = [
  { id: 'backlog', title: 'Backlog', color: '#94a3b8' },
  { id: 'todo', title: 'To Do', color: '#3b82f6' },
  { id: 'in-progress', title: 'In Progress', color: '#f59e0b' },
  { id: 'review', title: 'Code Review', color: '#8b5cf6', collapsed: true },
  { id: 'done', title: 'Done', color: '#10b981' },
];

// Set collapsed: true on a column to have it collapsed by default.
// Enable allowCollapse to show collapse/expand toggle in column headers.
// Collapsed columns shrink to ~40px with a vertically rotated title.
// Click on a collapsed column to expand it.

<KanbanBoard
  columns={columns}
  cards={cards}
  allowCollapse
  showCardCount
  onColumnCollapse={(columnId, collapsed) => {
    console.log(columnId, collapsed ? 'collapsed' : 'expanded');
  }}
/>`,I=()=>{let[e,t]=(0,D.useState)(``);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)(c,{title:`Collapsible Columns`,description:`Click the collapse button in the column header to collapse a column. The 'Code Review' column starts collapsed. Collapsed columns display a rotated vertical title and remaining columns fill the available space. Click a collapsed column to expand it.`,centered:!1,children:[(0,O.jsx)(h,{columns:N,cards:P,allowCollapse:!0,showCardCount:!0,onColumnCollapse:(e,n)=>{t(`${String(e)} ${n?`collapsed`:`expanded`}`)}}),e&&(0,O.jsxs)(`p`,{className:`mt-2 text-xs text-gray-500`,children:[`Last event: `,(0,O.jsx)(`strong`,{children:e})]})]}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:F,language:`tsx`})})]})},L=`const columns: KanbanColumnData[] = [
  { id: 'todo', title: 'To Do', color: '#3b82f6' },
  { id: 'dev', title: 'Development', color: '#f59e0b', limit: 2 },
  { id: 'qa', title: 'QA', color: '#8b5cf6', limit: 2 },
  { id: 'done', title: 'Done', color: '#10b981' },
];

<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  showCardCount
  showColumnLimit
/>`,R=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`WIP Limits`,description:`Set limit on columns to enforce work-in-progress constraints. Columns exceeding their limit display a visual warning.`,centered:!1,children:(0,O.jsx)(h,{columns:g,cards:y,draggable:!0,showCardCount:!0,showColumnLimit:!0})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:L,language:`tsx`})})]}),z=`<KanbanBoard
  columns={columns}
  cards={cards}
  cardSize="compact"
  draggable
  showCardCount
  columnWidth={240}
/>`,B=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Compact Mode`,description:`Minimal card display ideal for high-density boards with many items.`,centered:!1,children:(0,O.jsx)(h,{columns:x,cards:d,cardSize:`compact`,draggable:!0,showCardCount:!0,columnWidth:240})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:z,language:`tsx`})})]}),V=`<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  columnHeaderTemplate={(column, cardCount) => (
    <div className="flex items-center gap-2 px-3 py-2">
      <span
        className="w-3 h-3 rounded-full"
        style={{ backgroundColor: column.color }}
      />
      <span className="text-sm font-semibold flex-1">
        {column.title}
      </span>
      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100">
        {cardCount}
      </span>
    </div>
  )}
  emptyColumnTemplate={(column) => (
    <div className="text-center py-8 text-sm text-gray-400 italic">
      No items in {column.title}
    </div>
  )}
/>`,te=()=>{let{isDark:e}=i();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Custom Column Header & Empty State`,description:`Use columnHeaderTemplate and emptyColumnTemplate for full control over column rendering.`,centered:!1,children:(0,O.jsx)(h,{columns:b,cards:T,draggable:!0,columnHeaderTemplate:(t,n)=>(0,O.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2.5`,children:[(0,O.jsx)(`span`,{className:`w-3 h-3 rounded-full shrink-0`,style:{backgroundColor:t.color}}),(0,O.jsx)(`span`,{className:(0,E.default)(`text-sm font-semibold flex-1`,{"text-gray-100":e,"text-gray-800":!e}),children:t.title}),(0,O.jsx)(`span`,{className:(0,E.default)(`text-[11px] font-medium px-2 py-0.5 rounded-full`,{"bg-white/10 text-gray-400":e,"bg-gray-100 text-gray-500":!e}),children:n})]}),emptyColumnTemplate:t=>(0,O.jsxs)(`div`,{className:(0,E.default)(`text-center py-8 text-sm italic`,{"text-gray-600":e,"text-gray-400":!e}),children:[`No items in `,t.title]})})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:V,language:`tsx`})})]})},H=`<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  showCardCount
  columnWidth={260}
  cardTemplate={(card) => (
    <div className="flex items-center gap-3 p-2">
      <span
        className={cn('w-2 h-2 rounded-full shrink-0', {
          'bg-red-500': card.priority === 'high' || card.priority === 'critical',
          'bg-yellow-500': card.priority === 'medium',
          'bg-green-500': card.priority === 'low',
        })}
      />
      <span className="text-sm font-medium truncate">
        {card.title}
      </span>
    </div>
  )}
/>`,U=()=>{let{isDark:e}=i();return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Custom Card Template`,description:`Use cardTemplate to render fully custom card content with any layout.`,centered:!1,children:(0,O.jsx)(h,{columns:x,cards:d,draggable:!0,showCardCount:!0,columnWidth:260,cardTemplate:t=>(0,O.jsxs)(`div`,{className:`flex items-center gap-3 p-2`,children:[(0,O.jsx)(`span`,{className:(0,E.default)(`w-2 h-2 rounded-full shrink-0`,{"bg-red-500":t.priority===`high`||t.priority===`critical`,"bg-yellow-500":t.priority===`medium`,"bg-green-500":t.priority===`low`})}),(0,O.jsx)(`span`,{className:(0,E.default)(`text-sm font-medium truncate`,{"text-gray-200":e,"text-gray-700":!e}),children:t.title})]})})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:H,language:`tsx`})})]})},W=`<KanbanBoard
  columns={columns}
  cards={cards}
  cardSize="detailed"
  draggable
  showCardCount
  showColumnLimit
  allowCollapse
/>

// Card data for detailed view includes:
const card: KanbanCardData = {
  id: 'd1',
  title: 'Redesign dashboard',
  columnId: 'todo',
  order: 0,
  description: 'Update all components to match new brand.',
  priority: 'high',
  labels: [
    { id: 'design', text: 'Design', color: '#8b5cf6' },
    { id: 'frontend', text: 'Frontend', color: '#3b82f6' },
  ],
  assignees: [
    { id: 'a1', name: 'Alice Martin' },
    { id: 'a2', name: 'Bob Chen' },
  ],
  dueDate: new Date('2025-04-15'),
  progress: 30,
  subtaskCount: 12,
  subtaskCompleted: 4,
  commentCount: 8,
  attachmentCount: 3,
};`,G=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Detailed Card View`,description:`Cards with descriptions, progress bars, labels, subtask counts, and assignee stacking.`,centered:!1,children:(0,O.jsx)(h,{columns:f,cards:w,cardSize:`detailed`,draggable:!0,showCardCount:!0,showColumnLimit:!0,allowCollapse:!0})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:W,language:`tsx`})})]}),K=`const [cards, setCards] = useState<KanbanCardData[]>(initialCards);
const [columns, setColumns] = useState<KanbanColumnData[]>(initialColumns);

<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  columnDraggable
  allowAddCard
  allowAddColumn
  allowDeleteCard
  allowDeleteColumn
  allowEditColumn
  allowCollapse
  showCardCount
  showColumnLimit
  showSearch
  onCardMove={(e) => {
    setCards(prev => {
      const without = prev.filter(c => c.id !== e.cardId);
      const target = without
        .filter(c => c.columnId === e.toColumnId)
        .sort((a, b) => a.order - b.order);
      const others = without.filter(c => c.columnId !== e.toColumnId);
      const moved = { ...e.card, columnId: e.toColumnId, order: e.toIndex };
      target.splice(e.toIndex, 0, moved);
      return [...others, ...target.map((c, i) => ({ ...c, order: i }))];
    });
  }}
  onCardReorder={(e) => {
    setCards(prev => {
      const other = prev.filter(c => c.columnId !== e.columnId);
      return [...other, ...e.cards.map((c, i) => ({ ...c, order: i }))];
    });
  }}
  onCardCreate={(e) => {
    setCards(prev => [...prev, {
      id: \`new-\${Date.now()}\`,
      title: e.title,
      columnId: e.columnId,
      order: prev.filter(c => c.columnId === e.columnId).length,
    }]);
  }}
  onCardDelete={(e) => setCards(prev => prev.filter(c => c.id !== e.card.id))}
  onColumnCreate={(e) => setColumns(prev => [...prev, { id: \`col-\${Date.now()}\`, title: e.title }])}
  onColumnDelete={(e) => {
    setColumns(prev => prev.filter(c => c.id !== e.column.id));
    setCards(prev => prev.filter(c => c.columnId !== e.column.id));
  }}
  onColumnUpdate={(e) => setColumns(prev =>
    prev.map(c => c.id === e.column.id ? { ...c, [e.field]: e.value } : c)
  )}
  onColumnReorder={(e) => setColumns(e.columns)}
/>`,q=()=>{let{isDark:e}=i(),[t,n]=(0,D.useState)(T),[r,a]=(0,D.useState)(b),[s,l]=(0,D.useState)(``),u=(0,D.useCallback)(e=>{n(t=>{let n=t.filter(t=>t.id!==e.cardId),r=n.filter(t=>t.columnId===e.toColumnId).sort((e,t)=>e.order-t.order),i=n.filter(t=>t.columnId!==e.toColumnId),a={...e.card,columnId:e.toColumnId,order:e.toIndex};r.splice(e.toIndex,0,a);let o=r.map((e,t)=>({...e,order:t}));return[...i,...o]}),l(`Moved "${e.card.title}" to column "${e.toColumnId}"`)},[]),d=(0,D.useCallback)(e=>{n(t=>{let n=t.filter(t=>t.columnId!==e.columnId),r=e.cards.map((e,t)=>({...e,order:t}));return[...n,...r]})},[]),f=(0,D.useCallback)(e=>{let r={id:v(),title:e.title,columnId:e.columnId,order:t.filter(t=>t.columnId===e.columnId).length};n(e=>[...e,r]),l(`Created card "${e.title}"`)},[t]),p=(0,D.useCallback)(e=>{n(t=>t.filter(t=>t.id!==e.card.id)),l(`Deleted card "${e.card.title}"`)},[]),m=(0,D.useCallback)(e=>{l(`Clicked: "${e.card.title}"`)},[]),g=(0,D.useCallback)(e=>{let t={id:v(),title:e.title};a(e=>[...e,t]),l(`Created column "${e.title}"`)},[]),_=(0,D.useCallback)(e=>{a(t=>t.filter(t=>t.id!==e.column.id)),n(t=>t.filter(t=>t.columnId!==e.column.id)),l(`Deleted column "${e.column.title}"`)},[]),y=(0,D.useCallback)(e=>{a(t=>t.map(t=>t.id===e.column.id?{...t,[e.field]:e.value}:t))},[]),x=(0,D.useCallback)(e=>{a(e.columns)},[]);return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Interactive Board`,description:`Full interactive demo: drag cards, add/delete cards and columns, edit column titles, reorder columns.`,centered:!1,children:(0,O.jsxs)(`div`,{className:`space-y-3`,children:[(0,O.jsx)(h,{columns:r,cards:t,draggable:!0,columnDraggable:!0,allowAddCard:!0,allowAddColumn:!0,allowDeleteCard:!0,allowDeleteColumn:!0,allowEditColumn:!0,allowCollapse:!0,showCardCount:!0,showColumnLimit:!0,showSearch:!0,onCardMove:u,onCardReorder:d,onCardCreate:f,onCardDelete:p,onCardClick:m,onColumnCreate:g,onColumnDelete:_,onColumnUpdate:y,onColumnReorder:x}),s&&(0,O.jsxs)(`div`,{className:(0,E.default)(`text-sm px-4 py-2 rounded border`,{"border-blue-800 bg-blue-900/30 text-blue-300":e,"border-blue-200 bg-blue-50 text-blue-800":!e}),children:[`Event: `,s]})]})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:K,language:`tsx`})})]})},J=`const columns: KanbanColumnData[] = [
  { id: 'new', title: 'New', color: '#3b82f6' },
  { id: 'active', title: 'Active', color: '#f59e0b' },
  { id: 'archived', title: 'Archived', color: '#94a3b8', locked: true },
];

<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  allowAddCard
  showCardCount
/>`,Y=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Locked Columns`,description:`Set locked: true on a column to prevent drag-and-drop and hide add/delete controls. Ideal for archival or read-only columns.`,centered:!1,children:(0,O.jsx)(h,{columns:p,cards:ee,draggable:!0,allowAddCard:!0,showCardCount:!0})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:J,language:`tsx`})})]}),X=`<KanbanBoard
  columns={columns}
  cards={cards}
  draggable
  showCardCount
  stickyColumnHeaders
  maxColumnHeight={300}
/>`,Z=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Sticky Column Headers`,description:`Enable stickyColumnHeaders with maxColumnHeight to keep column headers visible while scrolling through cards.`,centered:!1,children:(0,O.jsx)(h,{columns:b,cards:T,draggable:!0,showCardCount:!0,stickyColumnHeaders:!0,maxColumnHeight:300})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:X,language:`tsx`})})]}),Q=`<KanbanBoard
  columns={columns}
  cards={cards}
  layout="vertical"
  draggable
  showCardCount
  allowCollapse
/>`,$=()=>(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(c,{title:`Vertical Layout`,description:`Stack columns vertically instead of horizontally. Useful for priority triage or narrow containers.`,centered:!1,children:(0,O.jsx)(h,{columns:S,cards:m,layout:`vertical`,draggable:!0,showCardCount:!0,allowCollapse:!0})}),(0,O.jsx)(`div`,{className:`mt-4`,children:(0,O.jsx)(o,{code:Q,language:`tsx`})})]}),{boardProps:ne,cardProps:re,columnProps:ie}={boardProps:{columns:{type:`KanbanColumnData[]`,required:!0,description:`Array of column definitions with id, title, color, icon, limit, collapsed, locked.`},cards:{type:`KanbanCardData[]`,required:!0,description:`Array of card data with id, title, columnId, order, priority, labels, assignees, etc.`},layout:{type:`"horizontal" | "vertical"`,default:`horizontal`,description:`Board layout direction.`},cardSize:{type:`"compact" | "default" | "detailed"`,default:`default`,description:`Card display density. Compact hides labels/progress, detailed shows descriptions.`},className:{type:`string`,description:`Additional CSS class for the board container.`},columnWidth:{type:`number | string`,description:`Fixed column width (px or CSS value).`},columnMinHeight:{type:`number | string`,description:`Minimum column body height.`},maxColumnHeight:{type:`number | string`,description:`Maximum column body scroll height.`},draggable:{type:`boolean`,default:!0,description:`Enable drag-and-drop for cards.`},columnDraggable:{type:`boolean`,default:!1,description:`Enable drag-and-drop reordering of columns.`},allowAddCard:{type:`boolean`,default:!1,description:`Show "Add card" button in each column footer.`},allowAddColumn:{type:`boolean`,default:!1,description:`Show "Add Column" button at the end.`},allowDeleteCard:{type:`boolean`,default:!1,description:`Show delete button on card hover.`},allowDeleteColumn:{type:`boolean`,default:!1,description:`Show delete button in column headers.`},allowEditColumn:{type:`boolean`,default:!1,description:`Enable double-click to edit column title.`},allowCollapse:{type:`boolean`,default:!1,description:`Show collapse/expand toggle in column headers.`},showCardCount:{type:`boolean`,default:!1,description:`Display card count badge in column headers.`},showColumnLimit:{type:`boolean`,default:!1,description:`Display WIP limit alongside card count.`},showSearch:{type:`boolean`,default:!1,description:`Show search input above the board.`},stickyColumnHeaders:{type:`boolean`,default:!1,description:`Make column headers sticky on scroll.`},cardTemplate:{type:`(card, column) => ReactNode`,description:`Custom render function for card content.`},columnHeaderTemplate:{type:`(column, count) => ReactNode`,description:`Custom render function for column headers.`},columnFooterTemplate:{type:`(column, cards) => ReactNode`,description:`Custom render function for column footers.`},emptyColumnTemplate:{type:`(column) => ReactNode`,description:`Custom render function for empty columns.`},cardActionsTemplate:{type:`(card, column) => ReactNode`,description:`Custom actions rendered in card footer area.`},onCardMove:{type:`(event: KanbanCardMoveEvent) => void`,description:`Called when a card is moved between columns.`},onCardReorder:{type:`(event: KanbanCardReorderEvent) => void`,description:`Called when cards are reordered within a column.`},onCardClick:{type:`(event: KanbanCardClickEvent) => void`,description:`Called when a card is clicked.`},onCardDoubleClick:{type:`(event: KanbanCardClickEvent) => void`,description:`Called when a card is double-clicked.`},onCardCreate:{type:`(event: KanbanCardCreateEvent) => void`,description:`Called when a new card is created via the add button.`},onCardDelete:{type:`(event: KanbanCardDeleteEvent) => void`,description:`Called when a card delete button is clicked.`},onColumnReorder:{type:`(event: KanbanColumnReorderEvent) => void`,description:`Called when columns are reordered via drag.`},onColumnCreate:{type:`(event: KanbanColumnCreateEvent) => void`,description:`Called when a new column is created.`},onColumnDelete:{type:`(event: KanbanColumnDeleteEvent) => void`,description:`Called when a column is deleted.`},onColumnUpdate:{type:`(event: KanbanColumnUpdateEvent) => void`,description:`Called when a column title is edited.`},onColumnCollapse:{type:`(columnId, collapsed) => void`,description:`Called when a column is collapsed or expanded.`},onSearchChange:{type:`(filter: KanbanSearchFilter) => void`,description:`Called when the search input changes.`}},cardProps:{id:{type:`string | number`,required:!0,description:`Unique identifier for the card.`},title:{type:`string`,required:!0,description:`Card title displayed prominently.`},columnId:{type:`string | number`,required:!0,description:`ID of the column this card belongs to.`},order:{type:`number`,required:!0,description:`Sort position within the column.`},description:{type:`string`,description:`Card description shown in detailed view.`},priority:{type:`"critical" | "high" | "medium" | "low" | "none"`,description:`Priority level with visual indicator.`},labels:{type:`KanbanLabel[]`,description:`Color-coded labels shown on the card.`},assignee:{type:`KanbanAssignee`,description:`Single assignee with name and optional avatar.`},assignees:{type:`KanbanAssignee[]`,description:`Multiple assignees with stacked display.`},dueDate:{type:`Date | string`,description:`Due date with overdue/soon indicators.`},coverImage:{type:`string`,description:`Cover image URL shown in detailed mode.`},progress:{type:`number`,description:`Completion percentage (0-100) shown as a progress bar.`},subtaskCount:{type:`number`,description:`Total number of subtasks.`},subtaskCompleted:{type:`number`,description:`Number of completed subtasks.`},commentCount:{type:`number`,description:`Number of comments shown as a badge.`},attachmentCount:{type:`number`,description:`Number of attachments shown as a badge.`},blocked:{type:`boolean`,default:!1,description:`Mark the card as blocked with a visual overlay.`},color:{type:`string`,description:`Left border color for the card.`}},columnProps:{id:{type:`string | number`,required:!0,description:`Unique identifier for the column.`},title:{type:`string`,required:!0,description:`Column header title.`},color:{type:`string`,description:`Accent color for the column header indicator.`},icon:{type:`ReactNode`,description:`Icon displayed next to the column title.`},limit:{type:`number`,description:`Maximum number of cards (WIP limit). Visual warning when exceeded.`},collapsed:{type:`boolean`,default:!1,description:`Initial collapsed state of the column.`},locked:{type:`boolean`,default:!1,description:`Prevent all interactions (drag, edit, add, delete).`}}},ae=[{id:`overview`,title:`Overview`,description:`Introduction and feature highlights`},{id:`basic-usage`,title:`Basic Usage`,description:`Standard board with drag-and-drop`},{id:`detailed-cards`,title:`Detailed Cards`,description:`Rich card content with descriptions`},{id:`compact-mode`,title:`Compact Mode`,description:`High-density minimal cards`},{id:`column-limits`,title:`WIP Limits`,description:`Work-in-progress constraints`},{id:`collapsible-columns`,title:`Collapsible Columns`,description:`Collapse columns with rotated titles`},{id:`blocked-cards`,title:`Blocked Cards`,description:`Visual blocked state on cards`},{id:`locked-columns`,title:`Locked Columns`,description:`Read-only archival columns`},{id:`vertical-layout`,title:`Vertical Layout`,description:`Columns stacked vertically`},{id:`sticky-headers`,title:`Sticky Headers`,description:`Fixed headers with scrollable body`},{id:`custom-card-template`,title:`Custom Card Template`,description:`Fully custom card rendering`},{id:`custom-column-header`,title:`Custom Column Header`,description:`Custom header & empty state`},{id:`card-actions`,title:`Card Actions`,description:`Custom action buttons on cards`},{id:`interactive`,title:`Interactive Board`,description:`Full CRUD demo`},{id:`import`,title:`Import`,description:`Import statement`},{id:`board-props`,title:`Board Props`,description:`KanbanBoard API reference`},{id:`card-props`,title:`Card Properties`,description:`KanbanCardData reference`},{id:`column-props`,title:`Column Properties`,description:`KanbanColumnData reference`},{id:`features`,title:`Features`,description:`Feature summary`}],oe=[{title:`Drag & Drop`,description:`Reorder cards within columns and drag cards between columns with smooth animations.`,icon:`M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5`},{title:`Column WIP Limits`,description:`Set work-in-progress limits per column with visual warnings when exceeded.`,icon:`M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z`},{title:`Priority & Labels`,description:`Visual priority indicators and customizable color-coded labels on cards.`,icon:`M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z`},{title:`Assignee Avatars`,description:`Show assignees with avatar images or auto-generated initials with overlap stacking.`,icon:`M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z`},{title:`Collapsible Columns`,description:`Collapse columns to save space with smooth transitions and vertical title display.`,icon:`M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15`},{title:`Search & Filter`,description:`Built-in search bar to filter cards across all columns by title or description.`,icon:`M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z`},{title:`Blocked Cards`,description:`Visually mark cards as blocked with a distinct overlay and optional color border.`,icon:`M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636`},{title:`Locked Columns`,description:`Lock columns to prevent drag-and-drop, editing, and adding cards.`,icon:`M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z`},{title:`Custom Templates`,description:`Full control over card, header, footer, empty state, and action rendering.`,icon:`M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42`},{title:`Multiple Layouts`,description:`Horizontal (default) and vertical board layouts for different use cases.`,icon:`M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z`},{title:`Card Sizes`,description:`Three built-in card sizes: compact, default, and detailed.`,icon:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12`},{title:`Accessibility`,description:`ARIA labels, keyboard navigation, focus-visible outlines, and semantic HTML.`,icon:`M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z`}],se=()=>{let{isDark:e}=i();return(0,O.jsxs)(a,{sectionNavItems:ae,children:[(0,O.jsx)(`div`,{id:`overview`,children:(0,O.jsxs)(`div`,{className:`mb-2`,children:[(0,O.jsx)(`h1`,{className:(0,E.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Kanban Board`}),(0,O.jsx)(`p`,{className:(0,E.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A fully-featured Kanban board component with drag-and-drop, customizable cards, column WIP limits, priority indicators, assignee avatars, collapsible columns, and search filtering.`})]})}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic-usage`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,O.jsx)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`A standard Kanban board with drag-and-drop, card counts, search filtering, and collapsible columns.`}),(0,O.jsx)(u,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`detailed-cards`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Detailed Card View`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,O.jsx)(`code`,{children:`cardSize="detailed"`}),` to show descriptions, progress bars, subtask counts, and stacked assignee avatars.`]}),(0,O.jsx)(G,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`compact-mode`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Compact Mode`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,O.jsx)(`code`,{children:`cardSize="compact"`}),` for a minimal card display ideal for high-density boards.`]}),(0,O.jsx)(B,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`column-limits`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`WIP Limits`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set a `,(0,O.jsx)(`code`,{children:`limit`}),` on columns to enforce work-in-progress constraints. Columns that exceed their limit display a visual warning indicator.`]}),(0,O.jsx)(R,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`collapsible-columns`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Collapsible Columns`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Enable `,(0,O.jsx)(`code`,{children:`allowCollapse`}),` to add collapse/expand toggles in column headers. Collapsed columns shrink to a narrow strip with a vertically rotated title. Set `,(0,O.jsx)(`code`,{children:`collapsed: true`}),` on a column for an initially collapsed state. Click a collapsed column to expand it.`]}),(0,O.jsx)(I,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`blocked-cards`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Blocked Cards`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set `,(0,O.jsx)(`code`,{children:`blocked: true`}),` on a card to visually indicate it is blocked. Combine with `,(0,O.jsx)(`code`,{children:`color`}),` for a colored left border.`]}),(0,O.jsx)(A,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`locked-columns`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Locked Columns`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set `,(0,O.jsx)(`code`,{children:`locked: true`}),` on a column to prevent all interactions including drag-and-drop, editing, and adding cards.`]}),(0,O.jsx)(Y,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`vertical-layout`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Vertical Layout`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,O.jsx)(`code`,{children:`layout="vertical"`}),` to stack columns vertically instead of horizontally. Useful for priority triage boards or narrow containers.`]}),(0,O.jsx)($,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`sticky-headers`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sticky Column Headers`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Enable `,(0,O.jsx)(`code`,{children:`stickyColumnHeaders`}),` with `,(0,O.jsx)(`code`,{children:`maxColumnHeight`}),` to keep headers visible while scrolling through cards.`]}),(0,O.jsx)(Z,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-card-template`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Card Template`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,O.jsx)(`code`,{children:`cardTemplate`}),` to render fully custom card content with any layout.`]}),(0,O.jsx)(U,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-column-header`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Column Header & Empty State`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,O.jsx)(`code`,{children:`columnHeaderTemplate`}),` and `,(0,O.jsx)(`code`,{children:`emptyColumnTemplate`}),` for full control over column rendering.`]}),(0,O.jsx)(te,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`card-actions`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Card Actions`}),(0,O.jsxs)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,O.jsx)(`code`,{children:`cardActionsTemplate`}),` to add custom action buttons in the card footer area.`]}),(0,O.jsx)(M,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`interactive`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Interactive Board`}),(0,O.jsx)(`p`,{className:(0,E.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Full interactive demo with all CRUD operations: drag cards between columns, add/delete cards and columns, edit column titles, and reorder columns.`}),(0,O.jsx)(q,{})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,O.jsx)(o,{code:`import { KanbanBoard } from 'fluxo-ui';

// Type imports
import type {
  KanbanBoardProps,
  KanbanCardData,
  KanbanCardId,
  KanbanColumnData,
  KanbanColumnId,
  KanbanCardMoveEvent,
  KanbanCardReorderEvent,
  KanbanCardClickEvent,
  KanbanCardCreateEvent,
  KanbanCardDeleteEvent,
  KanbanColumnCreateEvent,
  KanbanColumnDeleteEvent,
  KanbanColumnUpdateEvent,
  KanbanColumnReorderEvent,
  KanbanSearchFilter,
  KanbanLabel,
  KanbanAssignee,
  KanbanPriority,
  KanbanLayout,
  KanbanCardSize,
} from 'fluxo-ui';`})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`board-props`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`KanbanBoard Props`}),(0,O.jsx)(s,{props:ne})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`card-props`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`KanbanCardData Properties`}),(0,O.jsx)(s,{props:re})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`column-props`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`KanbanColumnData Properties`}),(0,O.jsx)(s,{props:ie})]}),(0,O.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,O.jsx)(`h2`,{className:(0,E.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,O.jsx)(l,{features:oe})]})]})};export{se as default};