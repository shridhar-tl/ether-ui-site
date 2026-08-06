import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./PageLayout-DSwLk1XV.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./PropsTable-B4RgQiZf.js";import{t as c}from"./ComponentDemo-C0Y_0jmn.js";import{t as l}from"./FeatureCard-D_o4IlGr.js";import u,{a as d,c as f,i as p,l as m,n as h,o as g,r as _,s as v,t as y,u as b}from"./BasicUsage-CeJPvZUi.js";var x=e(t(),1),S=e(r(),1),C=n(),w=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Define any number of columns with custom render templates. Access the full task object inside templates.`}),(0,C.jsx)(c,{title:`Custom Column Rendering`,centered:!1,children:(0,C.jsx)(b,{tasks:y,height:340,columns:h,fieldsPanelWidth:370})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`import type { GanttColumn } from 'fluxo-ui';

const columns: GanttColumn[] = [
  { field: 'name', headerText: 'Task', width: 200 },
  {
    field: 'assignee',
    headerText: 'Owner',
    width: 90,
    align: 'center',
    template: ({ value }) => (
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 26, height: 26, borderRadius: '50%',
        background: '#dbeafe', color: '#1d4ed8', fontWeight: 600, fontSize: 11,
      }}>
        {String(value ?? '?').charAt(0)}
      </span>
    ),
  },
  {
    field: 'progress',
    headerText: '%',
    width: 55,
    align: 'center',
    template: ({ value }) => (
      <span style={{ color: value === 100 ? '#10b981' : '#6b7280', fontWeight: 600 }}>
        {value}%
      </span>
    ),
  },
];

<GanttChart tasks={tasks} columns={columns} fieldsPanelWidth={360} height={400} />`})})]})},T=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Mark important dates (sprint boundaries, deadlines, releases) with labelled vertical lines.`}),(0,C.jsx)(c,{title:`Markers & Deadlines`,centered:!1,children:(0,C.jsx)(b,{tasks:y,height:340,markers:g})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`import type { GanttMarker } from 'fluxo-ui';

const markers: GanttMarker[] = [
  { id: 'today',    date: new Date(),               label: 'Today',      color: '#3b82f6' },
  { id: 'sprint',   date: new Date('2025-02-07'),   label: 'Sprint End', color: '#f59e0b' },
  { id: 'release',  date: new Date('2025-02-28'),   label: 'Release',    color: '#10b981' },
];

<GanttChart tasks={tasks} markers={markers} height={400} />`})})]})},E=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Connect tasks with dependency arrows using four relationship types: Finish-to-Start, Start-to-Start, Finish-to-Finish, and Start-to-Finish.`}),(0,C.jsx)(c,{title:`Dependency Arrows`,centered:!1,children:(0,C.jsx)(b,{tasks:p,height:340,columns:[{field:`name`,headerText:`Task`,width:200}]})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`const tasks: GanttTask[] = [
  {
    id: 'analysis',
    name: 'Analysis',
    start: '2025-01-01',
    end: '2025-01-07',
    progress: 100,
  },
  {
    id: 'design',
    name: 'Design',
    start: '2025-01-08',
    end: '2025-01-14',
    progress: 60,
    dependencies: [{ targetId: 'analysis', type: 'finish-to-start' }],
  },
  {
    id: 'dev',
    name: 'Development',
    start: '2025-01-15',
    end: '2025-01-28',
    progress: 0,
    dependencies: [{ targetId: 'design', type: 'finish-to-start' }],
  },
];

// Supported dependency types:
// 'finish-to-start' | 'start-to-start' | 'finish-to-finish' | 'start-to-finish'`})})]})},D=()=>{let{isDark:e}=i(),[t,n]=(0,S.useState)(y),[r,a]=(0,S.useState)(``),[s,l]=(0,S.useState)(null);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Drag task bars to move them or drag either handle to resize. Changes are reported via `,(0,C.jsx)(`code`,{children:`onTaskChange`}),`.`]}),(0,C.jsx)(c,{title:`Interactive — Drag to Move, Handles to Resize`,centered:!1,children:(0,C.jsxs)(`div`,{className:`space-y-3`,children:[(0,C.jsx)(b,{tasks:t,height:320,onTaskChange:e=>{n(t=>t.map(t=>t.id===e.task.id?{...t,start:e.start,end:e.end}:t)),a(`Moved "${e.originalTask.name}" → ${e.start.toLocaleDateString()} – ${e.end.toLocaleDateString()}`)},onTaskClick:e=>{l(e.task),a(`Clicked: "${e.task.name}"`)}}),r&&(0,C.jsxs)(`div`,{className:(0,x.default)(`text-sm px-4 py-2 rounded border`,{"border-blue-800 bg-blue-900/30 text-blue-300":e,"border-blue-200 bg-blue-50 text-blue-800":!e}),children:[`Event: `,r]}),s&&(0,C.jsxs)(`div`,{className:(0,x.default)(`text-sm px-4 py-2 rounded border`,{"border-purple-800 bg-purple-900/30 text-purple-300":e,"border-purple-200 bg-purple-50 text-purple-800":!e}),children:[`Selected: `,(0,C.jsx)(`strong`,{children:s.name}),` — Progress: `,s.progress??0,`%`]})]})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`const [tasks, setTasks] = useState<GanttTask[]>(initialTasks);

const handleTaskChange = (e: GanttTaskChangeEvent) => {
  setTasks(prev =>
    prev.map(t => t.id === e.task.id
      ? { ...t, start: e.start, end: e.end }
      : t
    )
  );
};

<GanttChart
  tasks={tasks}
  height={400}
  allowTaskDrag={true}     // default
  allowTaskResize={true}   // default
  onTaskChange={handleTaskChange}
  onTaskClick={({ task }) => console.log('clicked', task.name)}
  onTaskDoubleClick={({ task }) => openEditModal(task)}
/>`})})]})},O=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Nest child tasks inside a parent using the `,(0,C.jsx)(`code`,{children:`children`}),` array. Use `,(0,C.jsx)(`code`,{children:`type: 'group'`}),` for summary bars and `,(0,C.jsx)(`code`,{children:`type: 'milestone'`}),` for diamond markers. Groups can be collapsed.`]}),(0,C.jsx)(c,{title:`Phases, Groups & Milestones`,centered:!1,children:(0,C.jsx)(b,{tasks:d,height:440,columns:[{field:`name`,headerText:`Task`,width:200},{field:`assignee`,headerText:`Owner`,width:90,align:`center`}]})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`const tasks: GanttTask[] = [
  {
    id: 'phase-1',
    name: 'Phase 1 — Discovery',
    type: 'group',
    start: new Date('2025-01-01'),
    end: new Date('2025-01-14'),
    progress: 90,
    children: [
      { id: 'p1-t1', name: 'Stakeholder Interviews', start: '2025-01-01', end: '2025-01-05', progress: 100 },
      { id: 'p1-t2', name: 'Market Research',        start: '2025-01-03', end: '2025-01-10', progress: 80 },
    ],
  },
  {
    id: 'milestone-1',
    name: 'Design Review',
    type: 'milestone',
    start: new Date('2025-01-14'),
    end: new Date('2025-01-14'),
    color: '#f59e0b',
  },
];

<GanttChart tasks={tasks} height={400} />`})})]})},k=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use `,(0,C.jsx)(`code`,{children:`viewMode="quarter"`}),` or `,(0,C.jsx)(`code`,{children:`"year"`}),` for roadmap-level planning across many months.`]}),(0,C.jsx)(c,{title:`Quarterly Roadmap`,centered:!1,children:(0,C.jsx)(b,{tasks:v,viewMode:`month`,height:380,columns:[{field:`name`,headerText:`Initiative`,width:200}]})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`<GanttChart
  tasks={roadmapTasks}
  viewMode="month"    // or "quarter" | "year" for wider ranges
  height={400}
  columns={[{ field: 'name', headerText: 'Initiative', width: 200 }]}
/>`})})]})},A=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Set `,(0,C.jsx)(`code`,{children:`readOnly`}),` to disable all interactions. Useful for dashboards and reports.`]}),(0,C.jsx)(c,{title:`Read-Only Gantt`,centered:!1,children:(0,C.jsx)(b,{tasks:y,height:300,readOnly:!0,markers:g})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`<GanttChart
  tasks={tasks}
  height={400}
  readOnly={true}
/>`})})]})},j=e=>e.getDay()===0||e.getDay()===6,M=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Use extra `,(0,C.jsx)(`code`,{children:`data`}),` fields with column templates to show metadata like priority or task type alongside the timeline.`]}),(0,C.jsx)(c,{title:`Sprint Backlog View`,centered:!1,children:(0,C.jsx)(b,{tasks:m,height:420,columns:f,fieldsPanelWidth:360,markers:[{id:`sprint-start`,date:_(-7),label:`Sprint Start`,color:`#3b82f6`},{id:`sprint-end`,date:_(11),label:`Sprint End`,color:`#f59e0b`}],isHoliday:j})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`const tasks: GanttTask[] = [
  {
    id: 'feature-auth',
    name: 'Feature: Auth',
    start: '2025-01-06',
    end: '2025-01-14',
    progress: 75,
    assignee: 'Alice',
    data: { priority: 'High', type: 'Dev' },
  },
  // ...
];

const columns: GanttColumn[] = [
  { field: 'name', headerText: 'Task', width: 180 },
  { field: 'assignee', headerText: 'Assignee', width: 80, align: 'center' },
  {
    field: 'data.priority',
    headerText: 'Priority',
    width: 75,
    align: 'center',
    template: ({ task }) => {
      const priority = (task.data as any)?.priority;
      const colors = { Critical: '#ef4444', High: '#f59e0b', Medium: '#3b82f6' };
      return (
        <span style={{
          padding: '1px 6px', borderRadius: 10, fontSize: 10, fontWeight: 600,
          background: \`\${colors[priority]}20\`, color: colors[priority],
        }}>
          {priority}
        </span>
      );
    },
  },
];

// Mark weekends as holidays
const isHoliday = (date: Date) => date.getDay() === 0 || date.getDay() === 6;

<GanttChart
  tasks={tasks}
  columns={columns}
  fieldsPanelWidth={360}
  isHoliday={isHoliday}
  markers={[
    { date: sprintStart, label: 'Sprint Start', color: '#3b82f6' },
    { date: sprintEnd,   label: 'Sprint End',   color: '#f59e0b' },
  ]}
  height={420}
/>`})})]})},N=()=>{let{isDark:e}=i(),[t,n]=(0,S.useState)([{id:`c1`,name:`Existing Task`,start:_(-3),end:_(3),progress:50}]),[r,a]=(0,S.useState)(``);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Enable `,(0,C.jsx)(`code`,{children:`allowTaskCreate`}),` and let users draw new tasks by clicking and dragging on empty row space.`]}),(0,C.jsx)(c,{title:`Draw New Tasks (drag on empty area)`,centered:!1,children:(0,C.jsxs)(`div`,{className:`space-y-3`,children:[(0,C.jsx)(b,{tasks:t,height:300,allowTaskCreate:!0,onTaskCreate:e=>{let t={id:`new-${Date.now()}`,name:`New Task`,start:e.start,end:e.end,progress:0,color:`#8b5cf6`};n(n=>{let r=[...n],i=Math.min(Math.max(e.rowIndex,0),r.length);return r.splice(i,0,t),r}),a(`Created task at row ${e.rowIndex+1}: ${e.start.toLocaleDateString()} – ${e.end.toLocaleDateString()}`)},onTaskChange:e=>n(t=>t.map(t=>t.id===e.task.id?{...t,start:e.start,end:e.end}:t))}),r.startsWith(`Created`)&&(0,C.jsx)(`div`,{className:(0,x.default)(`text-sm px-4 py-2 rounded border`,{"border-green-800 bg-green-900/30 text-green-300":e,"border-green-200 bg-green-50 text-green-800":!e}),children:r})]})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`const [tasks, setTasks] = useState<GanttTask[]>(initialTasks);

const handleTaskCreate = (e: GanttTaskCreateEvent) => {
  const newTask: GanttTask = {
    id: \`task-\${Date.now()}\`,
    name: 'New Task',
    start: e.start,
    end: e.end,
    progress: 0,
  };
  setTasks(prev => [...prev, newTask]);
};

<GanttChart
  tasks={tasks}
  height={400}
  allowTaskCreate={true}
  onTaskCreate={handleTaskCreate}
/>`})})]})},P=()=>{let{isDark:e}=i();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Hide the left fields panel entirely with `,(0,C.jsx)(`code`,{children:`showFieldsPanel={false}`}),` for a compact timeline.`]}),(0,C.jsx)(c,{title:`No Fields Panel`,centered:!1,children:(0,C.jsx)(b,{tasks:y,height:280,showFieldsPanel:!1,markers:[{id:`t`,date:_(0),label:`Today`,color:`#3b82f6`}]})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`<GanttChart
  tasks={tasks}
  height={300}
  showFieldsPanel={false}
/>`})})]})},F=()=>{let{isDark:e}=i(),[t,n]=(0,S.useState)(`day`);return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(`p`,{className:(0,x.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Switch between Day, Week, Month, Quarter, and Year views. Can be controlled externally or left to the built-in toolbar.`}),(0,C.jsx)(c,{title:`Controlled View Mode`,centered:!1,children:(0,C.jsx)(b,{tasks:y,height:320,viewMode:t,onViewModeChange:n})}),(0,C.jsx)(`div`,{className:`mt-4`,children:(0,C.jsx)(o,{code:`const [viewMode, setViewMode] = useState<GanttViewMode>('day');

<GanttChart
  tasks={tasks}
  height={400}
  viewMode={viewMode}
  onViewModeChange={setViewMode}
/>`})})]})},{ganttProps:I,taskProps:L}={ganttProps:{tasks:{type:`GanttTask[]`,required:!0,description:`Array of task objects to display on the chart`},columns:{type:`GanttColumn[]`,default:`[{ field: 'name', headerText: 'Task Name', width: 200 }]`,description:`Column definitions for the left fields panel`},viewMode:{type:`'day' | 'week' | 'month' | 'quarter' | 'year'`,default:`'day'`,description:`Controls how the timeline is rendered and grouped`},startDate:{type:`Date | string`,description:`Override the auto-computed start date of the visible range`},endDate:{type:`Date | string`,description:`Override the auto-computed end date of the visible range`},height:{type:`number | string`,default:`500`,description:`Total height of the Gantt chart container`},rowHeight:{type:`number`,default:`40`,description:`Height of each task row in pixels`},columnWidth:{type:`number`,description:`Width of each timeline column. Defaults vary by view mode`},fieldsPanelWidth:{type:`number | string`,default:`300`,description:`Width of the left-side fields/columns panel`},showFieldsPanel:{type:`boolean`,default:`true`,description:`Toggle the left fields panel visibility`},showToday:{type:`boolean`,default:`true`,description:`Highlight today with a vertical line and scroll to it on mount`},showDependencies:{type:`boolean`,default:`true`,description:`Render SVG dependency arrows between tasks`},showProgress:{type:`boolean`,default:`true`,description:`Render the progress overlay on task bars`},showTooltip:{type:`boolean`,default:`true`,description:`Show hover tooltip with task details`},markers:{type:`GanttMarker[]`,default:`[]`,description:`Vertical date markers (deadlines, milestones, events)`},isHoliday:{type:`(date: Date) => boolean`,description:`Callback to determine if a date should be marked as a holiday`},allowTaskDrag:{type:`boolean`,default:`true`,description:`Allow users to drag tasks to new dates`},allowTaskResize:{type:`boolean`,default:`true`,description:`Allow users to resize task bars from either end`},allowTaskCreate:{type:`boolean`,default:`false`,description:`Allow users to drag on empty rows to create new tasks`},readOnly:{type:`boolean`,default:`false`,description:`Disable all drag, resize, and create interactions`},taskBarTemplate:{type:`(props: TaskBarTemplateProps) => JSX.Element`,description:`Custom render function for task bar content`},tooltipTemplate:{type:`(task: GanttTask) => ReactNode`,description:`Custom render function for the hover tooltip`},onTaskChange:{type:`(event: GanttTaskChangeEvent) => void`,description:`Fires when a task is moved or resized`},onTaskClick:{type:`(event: GanttTaskClickEvent) => void`,description:`Fires when a task bar is clicked`},onTaskDoubleClick:{type:`(event: GanttTaskClickEvent) => void`,description:`Fires when a task bar is double-clicked`},onTaskCreate:{type:`(event: GanttTaskCreateEvent) => void`,description:`Fires when a new task range is drawn (requires allowTaskCreate)`},onViewModeChange:{type:`(mode: GanttViewMode) => void`,description:`Fires when the user switches the view mode`},onExpandToggle:{type:`(task: GanttTask, expanded: boolean) => void`,description:`Fires when a group task is expanded or collapsed`}},taskProps:{id:{type:`string`,required:!0,description:`Unique identifier for the task`},name:{type:`string`,required:!0,description:`Display name of the task`},start:{type:`Date | string`,required:!0,description:`Start date of the task`},end:{type:`Date | string`,required:!0,description:`End date of the task`},progress:{type:`number`,default:`0`,description:`Completion percentage (0-100)`},type:{type:`'task' | 'milestone' | 'group'`,default:`'task'`,description:`Determines visual style and behavior`},color:{type:`string`,description:`Custom background color for the task bar`},textColor:{type:`string`,description:`Custom text color inside the task bar`},dependencies:{type:`GanttDependency[]`,description:`Array of dependency connections to other tasks`},children:{type:`GanttTask[]`,description:`Nested child tasks (makes this task a group/parent)`},collapsed:{type:`boolean`,default:`false`,description:`Whether this group is initially collapsed`},assignee:{type:`string`,description:`Assignee name shown in tooltip and custom columns`},draggable:{type:`boolean`,default:`true`,description:`Override draggability for this specific task`},resizable:{type:`boolean`,default:`true`,description:`Override resizability for this specific task`},tooltip:{type:`ReactNode | ((task: GanttTask) => ReactNode)`,description:`Custom tooltip content for this task`},data:{type:`Record<string, unknown>`,description:`Arbitrary extra data accessible in templates`}}},R=[{id:`basic-usage`,title:`Basic Usage`,description:`Minimal Gantt chart with default columns`},{id:`view-modes`,title:`View Modes`,description:`Day, Week, Month, Quarter, Year views`},{id:`hierarchical-tasks`,title:`Hierarchical Tasks`,description:`Nested tasks, groups, and milestones`},{id:`dependencies`,title:`Dependencies`,description:`Task dependency arrows`},{id:`date-markers`,title:`Date Markers`,description:`Vertical date markers`},{id:`drag-and-drop`,title:`Drag & Drop`,description:`Interactive drag and resize`},{id:`task-creation`,title:`Task Creation`,description:`Draw new tasks by dragging`},{id:`custom-columns`,title:`Custom Columns`,description:`Custom column rendering`},{id:`sprint-planning`,title:`Sprint Planning`,description:`Resource and sprint view`},{id:`quarterly-view`,title:`Quarterly View`,description:`Long-range roadmap planning`},{id:`read-only`,title:`Read-Only`,description:`Non-interactive mode`},{id:`timeline-only`,title:`Timeline-Only`,description:`Hide fields panel`},{id:`import`,title:`Import`,description:`Import statement`},{id:`gantt-props`,title:`GanttChart Props`,description:`Component API reference`},{id:`task-props`,title:`GanttTask Properties`,description:`Task object reference`},{id:`features`,title:`Features`,description:`Feature summary`}],z=[{title:`View Modes`,description:`5 built-in scales: Day, Week, Month, Quarter, Year with smart header grouping`,icon:`M3 17V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m4 0V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10M3 17h18`},{title:`Drag & Drop`,description:`Move tasks and resize from both ends with live visual feedback`,icon:`M7 11.5V14m0-2.5-3 3m3-3 3 3M17 11.5V14m0-2.5 3 3m-3-3-3 3M12 4v16M4 8h16M4 16h16`},{title:`Task Creation`,description:`Draw new tasks by clicking and dragging on empty row space`,icon:`M12 4.5v15m7.5-7.5h-15`},{title:`Hierarchical Tasks`,description:`Unlimited nesting depth with expand/collapse support`,icon:`M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6Z`},{title:`Task Types`,description:`Regular tasks, group/summary bars with caps, and diamond milestones`,icon:`M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z M6 6h.008v.008H6V6Z`},{title:`Dependencies`,description:`4 dependency types (FS, SS, FF, SF) rendered as curved SVG arrows`,icon:`M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244`},{title:`Progress Bars`,description:`Visual completion overlay on each task bar`,icon:`M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z`},{title:`Date Markers`,description:`Labelled vertical lines for deadlines, sprints, and events`,icon:`M3 3v1.5M3 21v-6m0 0 2.77-.693a9 9 0 0 1 6.208.682l.108.054a9 9 0 0 0 6.086.71l3.114-.732a48.524 48.524 0 0 1-.005-10.499l-3.11.732a9 9 0 0 1-6.085-.711l-.108-.054a9 9 0 0 0-6.208-.682L3 4.5M3 15V4.5`},{title:`Custom Columns`,description:`Any field from task data with full JSX template support`,icon:`M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z`},{title:`Custom Tooltips`,description:`Per-task or global tooltip template override`,icon:`M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z`},{title:`Holiday Support`,description:`isHoliday callback colors non-working days differently`,icon:`M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5`},{title:`Scroll Sync`,description:`Left and right panels stay vertically synchronized`,icon:`M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5`},{title:`Theming`,description:`Full dark/light + 5 brand themes via CSS variables — zero extra config`,icon:`M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z`},{title:`Responsive`,description:`Fields panel auto-hides on mobile, toolbar wraps on small screens`,icon:`M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3`},{title:`Accessibility`,description:`ARIA labels, keyboard focus, semantic roles on all interactive elements`,icon:`M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z`},{title:`Performance`,description:`React.memo, useMemo, useCallback throughout — handles large datasets`,icon:`M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z`}],B=()=>{let{isDark:e}=i();return(0,C.jsxs)(a,{sectionNavItems:R,children:[(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`h1`,{className:(0,x.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Gantt Chart`}),(0,C.jsx)(`p`,{className:(0,x.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A full-featured project timeline component with drag & drop, hierarchical tasks, dependencies, multiple view modes, and rich customization.`})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`basic-usage`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,C.jsx)(u,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`view-modes`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`View Modes`}),(0,C.jsx)(F,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`hierarchical-tasks`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Hierarchical Tasks & Milestones`}),(0,C.jsx)(O,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`dependencies`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Task Dependencies`}),(0,C.jsx)(E,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`date-markers`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Date Markers`}),(0,C.jsx)(T,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`drag-and-drop`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Drag & Drop / Resize`}),(0,C.jsx)(D,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`task-creation`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Creating Tasks by Drawing`}),(0,C.jsx)(N,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`custom-columns`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Custom Columns`}),(0,C.jsx)(w,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`sprint-planning`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sprint / Resource Planning`}),(0,C.jsx)(M,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`quarterly-view`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Quarterly / Annual View`}),(0,C.jsx)(k,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`read-only`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Read-Only Mode`}),(0,C.jsx)(A,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`timeline-only`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-2`,{"text-gray-100":e,"text-gray-900":!e}),children:`Timeline-Only View`}),(0,C.jsx)(P,{})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`import`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,C.jsx)(o,{code:`import { GanttChart } from 'fluxo-ui';

// Type imports
import type {
  GanttTask,
  GanttColumn,
  GanttMarker,
  GanttDependency,
  GanttViewMode,
  GanttTaskChangeEvent,
  GanttTaskClickEvent,
  GanttTaskCreateEvent,
  GanttColumnTemplateProps,
  TaskBarTemplateProps,
} from 'fluxo-ui';`})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`gantt-props`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`GanttChart Props`}),(0,C.jsx)(s,{props:I})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`task-props`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`GanttTask Properties`}),(0,C.jsx)(s,{props:L})]}),(0,C.jsxs)(`section`,{className:`scroll-mt-8`,id:`features`,children:[(0,C.jsx)(`h2`,{className:(0,x.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,C.jsx)(l,{features:z})]})]})};export{B as default};