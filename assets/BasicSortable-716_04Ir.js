import{i as e,l as t,o as n}from"./StoryThemeContext-BDzcJQOV.js";import{t as r}from"./Sortable-DcfpCgcU.js";import{t as i}from"./CodeBlock-CjEfE45a.js";import{t as a}from"./ComponentDemo-C1QcOIEH.js";var o=t(n(),1),s=e(),c=`import { Sortable } from 'fluxo-ui';

function SortableList() {
  const [items, setItems] = useState([
    'First Item',
    'Second Item',
    'Third Item',
    'Fourth Item',
  ]);

  return (
    <Sortable
      items={items}
      onChange={(newItems) => setItems(newItems)}
      dropIndicator="line"
    >
      {(item, index) => (
        <div className="bg-blue-600 px-4 py-3 rounded-md">
          {index + 1}. {item}
        </div>
      )}
    </Sortable>
  );
}`,l=()=>{let[e,t]=(0,o.useState)([`First Item`,`Second Item`,`Third Item`,`Fourth Item`,`Fifth Item`]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a,{title:`Simple List Reordering`,children:(0,s.jsx)(r,{items:e,onChange:e=>t(e),children:(e,t)=>(0,s.jsxs)(`div`,{className:`bg-blue-600 text-white px-4 py-3 rounded-md shadow-sm hover:bg-blue-500 transition-colors`,children:[t+1,`. `,e]})})}),(0,s.jsx)(`div`,{className:`mt-4`,children:(0,s.jsx)(i,{code:c})})]})};export{l as default};