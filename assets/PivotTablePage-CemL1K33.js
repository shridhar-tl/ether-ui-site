import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{a,i as o,n as s,r as c,t as l}from"./pivot-table-story-data-BCe1icNX.js";import{E as u}from"../index.BXfAFPWO.js";import{t as d}from"./PageLayout-DSwLk1XV.js";import{t as f}from"./CodeBlock-C1PblznF.js";import{t as p}from"./PropsTable-B4RgQiZf.js";import{t as m}from"./ComponentDemo-C0Y_0jmn.js";import{t as h}from"./FeatureCard-D_o4IlGr.js";import g from"./BasicUsage-gnl3RO7k.js";var _=e(t(),1),v=e(r(),1),y=n(),b={rows:[`region`],columns:[`quarter`],values:[{field:`revenue`,label:`Revenue`,aggregateFunction:`sum`,format:l}]},x=`import { PivotTable } from 'fluxo-ui';
import type { PivotConfig } from 'fluxo-ui';

const config: PivotConfig = {
    rows: ['region'],
    columns: ['quarter'],
    values: [
        { field: 'revenue', label: 'Revenue', aggregateFunction: 'sum', format: currencyFormat },
    ],
};

<PivotTable
    data={salesData}
    config={config}
    showGrandTotal
    showColumnTotals
    compact
/>`,S=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{title:`Column Pivoting by Quarter`,description:`Revenue by region with quarterly columns. Each quarter becomes a column header, creating a cross-tabulation view.`,children:(0,y.jsx)(a,{data:o,config:b,showGrandTotal:!0,showColumnTotals:!0,compact:!0})}),(0,y.jsx)(`div`,{className:`mt-4`,children:(0,y.jsx)(f,{code:x,language:`tsx`})})]}),C=[`All Regions`,`North America`,`Europe`,`Asia Pacific`],w=[`All Categories`,`Electronics`,`Accessories`],T=`import { PivotTable } from 'fluxo-ui';
import type { PivotConfig, PivotFilter } from 'fluxo-ui';

const filters: PivotFilter[] = [
    { field: 'region', operator: 'eq', value: 'Europe' },
    { field: 'category', operator: 'eq', value: 'Electronics' },
];

const config: PivotConfig = {
    rows: ['country', 'product'],
    columns: [],
    values: [
        { field: 'revenue', label: 'Revenue', aggregateFunction: 'sum', format: currencyFormat },
        { field: 'quantity', label: 'Quantity', aggregateFunction: 'sum', format: numberFormat },
        { field: 'profit', label: 'Profit', aggregateFunction: 'sum', format: currencyFormat },
    ],
    filters,
};

<PivotTable data={salesData} config={config} expandAll />`,E=()=>{let[e,t]=(0,v.useState)(`All Regions`),[n,r]=(0,v.useState)(`All Categories`),i=(0,v.useMemo)(()=>{let t=[];return e!==`All Regions`&&t.push({field:`region`,operator:`eq`,value:e}),n!==`All Categories`&&t.push({field:`category`,operator:`eq`,value:n}),{rows:[`country`,`product`],columns:[],values:[{field:`revenue`,label:`Revenue`,aggregateFunction:`sum`,format:l},{field:`quantity`,label:`Quantity`,aggregateFunction:`sum`,format:c},{field:`profit`,label:`Profit`,aggregateFunction:`sum`,format:l}],filters:t}},[e,n]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(m,{title:`Filtered Pivot Data`,description:`Apply filters to narrow pivot table data. Select a region and/or category to see filtered results.`,children:[(0,y.jsxs)(`div`,{className:`flex flex-wrap gap-3 mb-4`,children:[(0,y.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:C.map(n=>(0,y.jsx)(u,{variant:e===n?`primary`:`default`,size:`sm`,onClick:()=>t(n),children:n},n))}),(0,y.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:w.map(e=>(0,y.jsx)(u,{variant:n===e?`primary`:`default`,size:`sm`,onClick:()=>r(e),children:e},e))})]}),(0,y.jsx)(a,{data:o,config:i,expandAll:!0,showToolbar:!0})]}),(0,y.jsx)(`div`,{className:`mt-4`,children:(0,y.jsx)(f,{code:T,language:`tsx`})})]})},D=`import { PivotTable } from 'fluxo-ui';
import type { PivotConfig, FieldDefinition, PivotPlugin } from 'fluxo-ui';

const [config, setConfig] = useState<PivotConfig>({
  rows: ['region'],
  columns: [],
  values: [{ field: 'revenue', label: 'Revenue', aggregateFunction: 'sum' }],
});

<PivotTable
  data={data}
  config={config}
  onConfigChange={setConfig}
  showConfigPanel
  editable
  showToolbar
  exportable
  fieldDefinitions={fieldDefs}
  plugins={myPlugins}
  disabledFunctions={['product', 'variance']}
/>`,O=()=>{let{isDark:e}=i(),[t,n]=(0,v.useState)({rows:[`region`,`country`],columns:[],values:[{field:`revenue`,label:`Revenue`,aggregateFunction:`sum`,format:l},{field:`quantity`,label:`Qty`,aggregateFunction:`sum`}]}),[r,s]=(0,v.useState)(o);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{title:`Interactive Pivot`,description:`Drag fields between zones. Double-click leaf cells to edit. Change aggregation functions on value chips.`,children:(0,y.jsx)(`div`,{className:(0,_.default)(`rounded-lg overflow-hidden border`,{"border-white/10":e,"border-gray-200":!e}),children:(0,y.jsx)(a,{data:r,config:t,onConfigChange:n,onDataChange:e=>s(e),showConfigPanel:!0,configPanelPosition:`left`,showToolbar:!0,editable:!0,exportable:!0,showGrandTotal:!0,showSubTotals:!0,expandAll:!0,height:`400px`,fieldDefinitions:[{field:`region`,label:`Region`,dataType:`string`},{field:`country`,label:`Country`,dataType:`string`},{field:`city`,label:`City`,dataType:`string`},{field:`product`,label:`Product`,dataType:`string`},{field:`category`,label:`Category`,dataType:`string`},{field:`quarter`,label:`Quarter`,dataType:`string`},{field:`salesperson`,label:`Salesperson`,dataType:`string`},{field:`revenue`,label:`Revenue`,dataType:`number`,editable:!0},{field:`quantity`,label:`Quantity`,dataType:`number`,editable:!0},{field:`profit`,label:`Profit`,dataType:`number`,editable:!0}]})})}),(0,y.jsx)(`div`,{className:`mt-4`,children:(0,y.jsx)(f,{code:D,language:`tsx`})})]})},k={rows:[`region`,`country`,`city`],columns:[],values:[{field:`revenue`,label:`Revenue`,aggregateFunction:`sum`,format:l},{field:`quantity`,label:`Quantity`,aggregateFunction:`sum`,format:c},{field:`profit`,label:`Profit`,aggregateFunction:`sum`,format:l}]},A=`import { PivotTable } from 'fluxo-ui';
import type { PivotConfig } from 'fluxo-ui';

const config: PivotConfig = {
    rows: ['region', 'country', 'city'],
    columns: [],
    values: [
        { field: 'revenue', label: 'Revenue', aggregateFunction: 'sum', format: currencyFormat },
        { field: 'quantity', label: 'Quantity', aggregateFunction: 'sum', format: numberFormat },
        { field: 'profit', label: 'Profit', aggregateFunction: 'sum', format: currencyFormat },
    ],
};

<PivotTable
    data={salesData}
    config={config}
    expandAll
    showSubTotals
    showToolbar
    bordered
/>`,j=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{title:`Multi-Level Row Pivot`,description:`Three levels of row grouping: Region > Country > City. Use the toolbar to expand or collapse all rows.`,children:(0,y.jsx)(a,{data:o,config:k,expandAll:!0,showSubTotals:!0,showToolbar:!0,bordered:!0})}),(0,y.jsx)(`div`,{className:`mt-4`,children:(0,y.jsx)(f,{code:A,language:`tsx`})})]}),M={rows:[`category`],columns:[],values:[{field:`revenue`,label:`Total Revenue (Sum)`,aggregateFunction:`sum`,format:l},{field:`revenue`,label:`Avg Revenue`,aggregateFunction:`average`,format:l},{field:`revenue`,label:`Min Revenue`,aggregateFunction:`min`,format:l},{field:`revenue`,label:`Max Revenue`,aggregateFunction:`max`,format:l},{field:`quantity`,label:`Orders (Count)`,aggregateFunction:`count`,format:c},{field:`profit`,label:`Median Profit`,aggregateFunction:`median`,format:l},{field:`salesperson`,label:`Unique Sellers`,aggregateFunction:`distinctCount`,format:s}]},N=`import { PivotTable } from 'fluxo-ui';
import type { PivotConfig } from 'fluxo-ui';

const config: PivotConfig = {
    rows: ['category'],
    columns: [],
    values: [
        { field: 'revenue', label: 'Total Revenue (Sum)', aggregateFunction: 'sum', format: currencyFormat },
        { field: 'revenue', label: 'Avg Revenue', aggregateFunction: 'average', format: currencyFormat },
        { field: 'revenue', label: 'Min Revenue', aggregateFunction: 'min', format: currencyFormat },
        { field: 'revenue', label: 'Max Revenue', aggregateFunction: 'max', format: currencyFormat },
        { field: 'quantity', label: 'Orders (Count)', aggregateFunction: 'count', format: numberFormat },
        { field: 'profit', label: 'Median Profit', aggregateFunction: 'median', format: currencyFormat },
        { field: 'salesperson', label: 'Unique Sellers', aggregateFunction: 'distinctCount' },
    ],
};

<PivotTable data={salesData} config={config} striped />`,P=()=>(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(m,{title:`Aggregate Functions`,description:`Demonstrates sum, average, min, max, count, median, and distinctCount aggregations on sales data by category.`,children:(0,y.jsx)(a,{data:o,config:M,striped:!0})}),(0,y.jsx)(`div`,{className:`mt-4`,children:(0,y.jsx)(f,{code:N,language:`tsx`})})]}),{pivotTableProps:F}={pivotTableProps:{data:{type:`T[]`,required:!0,description:`Array of data objects to pivot.`},config:{type:`PivotConfig`,required:!0,description:`Configuration with rows, columns, values, and optional filters.`},fieldDefinitions:{type:`FieldDefinition[]`,description:`Defines field types, labels, editors, templates, and validators.`},onConfigChange:{type:`(config: PivotConfig) => void`,description:`Called when user changes pivot configuration via drag-drop.`},onDataChange:{type:`(data: T[], rowIndex, field, newValue) => void`,description:`Called after inline cell edits.`},showConfigPanel:{type:`boolean`,default:`false`,description:`Show the interactive drag-and-drop configuration panel.`},configPanelPosition:{type:`'left' | 'right' | 'top'`,default:`'left'`,description:`Position of the config panel.`},configPanelCollapsible:{type:`boolean`,default:`true`,description:`Allow collapsing the config panel.`},editable:{type:`boolean`,default:`false`,description:`Enable inline cell editing on double-click.`},onCellEdit:{type:`(row, field, oldVal, newVal) => boolean | void`,description:`Validate or intercept cell edits. Return false to cancel.`},plugins:{type:`PivotPlugin[]`,description:`Array of plugin objects for custom functions, renderers, and editors.`},disabledFunctions:{type:`BuiltInAggregateFunction[]`,description:`Remove specific built-in aggregate functions.`},permissions:{type:`PivotPermissions`,description:`Fine-grained control over what users can do (drag, edit, filter, export).`},cellTemplate:{type:`ComponentType<CellTemplateProps> | function`,description:`Global custom cell renderer for all value cells.`},headerTemplate:{type:`(field, label) => ReactNode`,description:`Custom renderer for column headers.`},rowHeaderTemplate:{type:`(label, depth, node) => ReactNode`,description:`Custom renderer for row headers.`},exportable:{type:`boolean`,default:`false`,description:`Show CSV/JSON export buttons in toolbar.`},onExport:{type:`(format: 'csv' | 'json') => void`,description:`Custom export handler.`},loading:{type:`boolean`,default:`false`,description:`Show loading spinner.`},height:{type:`string | number`,description:`Max height for scrollable area.`},expandAll:{type:`boolean`,default:`false`,description:`Expand all row groups on initial render.`},showGrandTotal:{type:`boolean`,default:`true`,description:`Show a grand total row at the bottom.`},showSubTotals:{type:`boolean`,default:`true`,description:`Show subtotal rows for expanded groups.`},sortable:{type:`boolean`,default:`true`,description:`Enable column header sorting.`},striped:{type:`boolean`,default:`false`,description:`Apply alternating row backgrounds.`},bordered:{type:`boolean`,default:`true`,description:`Show cell borders.`},compact:{type:`boolean`,default:`false`,description:`Reduce cell padding for a denser layout.`},showToolbar:{type:`boolean`,default:`false`,description:`Show toolbar with expand/collapse, export, and record count.`}}},I=[{id:`interactive`,title:`Interactive`,description:`Drag-drop config, inline editing`},{id:`basic-usage`,title:`Basic Usage`,description:`Simple region pivot`},{id:`aggregate-functions`,title:`Aggregate Functions`,description:`Sum, avg, min, max, count, median`},{id:`multi-level`,title:`Multi-Level Pivot`,description:`Region > Country > City`},{id:`column-pivot`,title:`Column Pivot`,description:`Quarterly column headers`},{id:`filtering`,title:`Filtering`,description:`Dynamic filter controls`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API reference`},{id:`features`,title:`Features`,description:`Feature summary`}],L=[{title:`Multi-Level Grouping`,description:`Group rows by multiple fields to create a hierarchical drill-down structure.`,icon:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5`},{title:`Column Pivoting`,description:`Pivot field values into column headers for cross-tabulation analysis.`,icon:`M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12`},{title:`Aggregate Functions`,description:`Sum, average, count, min, max, product, median, distinct, and distinctCount.`,icon:`M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z`},{title:`Data Filtering`,description:`Apply filters with operators like eq, neq, gt, lt, contains, and in.`,icon:`M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z`},{title:`Sortable Columns`,description:`Click column headers to sort data ascending, descending, or reset.`,icon:`M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5`},{title:`Custom Formatting`,description:`Apply custom format functions to display values as currency, percentages, or any format.`,icon:`M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z`}],R=()=>{let{isDark:e}=i();return(0,y.jsxs)(d,{sectionNavItems:I,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`h1`,{className:(0,_.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`PivotTable`}),(0,y.jsx)(`p`,{className:(0,_.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`An interactive pivot table with drag-and-drop configuration, inline editing, custom plugins, cell templates, and 15+ aggregate functions.`})]}),(0,y.jsxs)(`section`,{id:`interactive`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Interactive Pivot Table`}),(0,y.jsx)(`p`,{className:(0,_.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Drag fields between zones (Available, Rows, Columns, Values, Filters). Change aggregation functions inline. Double-click leaf cells to edit values.`}),(0,y.jsx)(O,{})]}),(0,y.jsxs)(`section`,{id:`basic-usage`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Basic Usage`}),(0,y.jsx)(`p`,{className:(0,_.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`A simple pivot table grouping sales data by region with sum aggregations.`}),(0,y.jsx)(g,{})]}),(0,y.jsxs)(`section`,{id:`aggregate-functions`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Aggregate Functions`}),(0,y.jsx)(`p`,{className:(0,_.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Use different aggregate functions on value fields: sum, average, min, max, count, median, and distinctCount.`}),(0,y.jsx)(P,{})]}),(0,y.jsxs)(`section`,{id:`multi-level`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Multi-Level Pivot`}),(0,y.jsxs)(`p`,{className:(0,_.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Specify multiple fields in the `,(0,y.jsx)(`code`,{children:`rows`}),` array to create nested drill-down grouping.`]}),(0,y.jsx)(j,{})]}),(0,y.jsxs)(`section`,{id:`column-pivot`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Column Pivot`}),(0,y.jsxs)(`p`,{className:(0,_.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Add fields to the `,(0,y.jsx)(`code`,{children:`columns`}),` array to pivot values into column headers for cross-tabulation.`]}),(0,y.jsx)(S,{})]}),(0,y.jsxs)(`section`,{id:`filtering`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Filtering`}),(0,y.jsxs)(`p`,{className:(0,_.default)(`mb-4 text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Apply filters via the `,(0,y.jsx)(`code`,{children:`config.filters`}),` array to narrow down displayed data dynamically.`]}),(0,y.jsx)(E,{})]}),(0,y.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,y.jsx)(f,{code:`import { PivotTable } from 'fluxo-ui';
import type {
  PivotConfig, PivotField, PivotFilter, AggregateFunction,
  FieldDefinition, PivotPlugin, PivotPermissions,
  CellEditorProps, CellTemplateProps, CustomAggregatePlugin,
} from 'fluxo-ui';`})]}),(0,y.jsxs)(`section`,{id:`props`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Props`}),(0,y.jsx)(p,{props:F})]}),(0,y.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,y.jsx)(`h2`,{className:(0,_.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,y.jsx)(h,{features:L})]})]})};export{R as default};