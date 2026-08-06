import"./rolldown-runtime-hePW80VL.js";import{i as e,o as t}from"./StoryThemeContext-De5ZWJ_M.js";import{a as n,i as r,r as i,t as a}from"./pivot-table-story-data-BCe1icNX.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./ComponentDemo-C0Y_0jmn.js";t();var c=e(),l={rows:[`region`],columns:[],values:[{field:`revenue`,label:`Revenue`,aggregateFunction:`sum`,format:a},{field:`quantity`,label:`Quantity`,aggregateFunction:`sum`,format:i},{field:`profit`,label:`Profit`,aggregateFunction:`sum`,format:a}]},u=`import { PivotTable } from 'fluxo-ui';
import type { PivotConfig } from 'fluxo-ui';

const config: PivotConfig = {
    rows: ['region'],
    columns: [],
    values: [
        { field: 'revenue', label: 'Revenue', aggregateFunction: 'sum', format: currencyFormat },
        { field: 'quantity', label: 'Quantity', aggregateFunction: 'sum', format: numberFormat },
        { field: 'profit', label: 'Profit', aggregateFunction: 'sum', format: currencyFormat },
    ],
};

<PivotTable data={salesData} config={config} showToolbar />`,d=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{title:`Simple Pivot Table`,description:`Sales data pivoted by region showing revenue, quantity, and profit totals.`,children:(0,c.jsx)(n,{data:r,config:l,showToolbar:!0})}),(0,c.jsx)(`div`,{className:`mt-4`,children:(0,c.jsx)(o,{code:u,language:`tsx`})})]});export{d as default};