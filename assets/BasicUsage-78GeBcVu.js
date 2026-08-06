import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./Autocomplete-lyqoiKre.js";import{t as i}from"./ComponentDemo-C0Y_0jmn.js";var a=e(n(),1),o=[`Apple`,`Banana`,`Cherry`,`Date`,`Elderberry`,`Fig`,`Grape`,`Honeydew`].map(e=>({label:e,value:e})),s=`import { Autocomplete } from 'fluxo-ui';

const items = ['Apple', 'Banana', 'Cherry', 'Date'].map(v => ({ label: v, value: v }));

function MyComponent() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  return (
    <Autocomplete
      items={items}
      value={value}
      selectedValue={selectedValue}
      placeholder="Type to search..."
      onChange={(e) => setValue(e.value)}
      onSelect={(e) => setSelectedValue(e.value)}
    />
  );
}`,c=`import { Autocomplete } from 'fluxo-ui';

function MyComponent() {
  const [value, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const allItems = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'].map(v => ({ label: v, value: v }));

  const handleFilter = async (query) => {
    setLoading(true);
    setTimeout(() => {
      const filtered = allItems.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase())
      );
      setItems(filtered);
      setLoading(false);
    }, 500);
  };

  return (
    <Autocomplete
      items={items}
      value={value}
      selectedValue={selectedValue}
      placeholder="Search fruits..."
      minLength={2}
      maxSuggestions={3}
      debounceMs={300}
      loading={loading}
      onChange={(e) => setValue(e.value)}
      onSelect={(e) => {
        setSelectedValue(e.value);
        console.log('Selected:', e.value);
      }}
      onFilter={handleFilter}
    />
  );
}`,l=t(),u=()=>{let[e,t]=(0,a.useState)(``);return(0,l.jsx)(i,{title:`Basic Autocomplete`,description:`Simple autocomplete with a list of suggestions`,children:(0,l.jsx)(`div`,{className:`w-full max-w-80`,children:(0,l.jsx)(r,{items:o,value:e,placeholder:`Type to search fruits...`,onChange:e=>t(e.value)})})})};export{u as default,s as n,o as r,c as t};