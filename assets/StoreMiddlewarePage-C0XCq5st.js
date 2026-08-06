import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./FieldLabel-Dn6OVp05.js";import{t as o}from"./TextInput-eVRCCUOC.js";import{E as s}from"../index.BXfAFPWO.js";import{t as c}from"./PageLayout-DSwLk1XV.js";import{t as l}from"./CodeBlock-C1PblznF.js";import{t as u}from"./ComponentDemo-C0Y_0jmn.js";import{t as d}from"./FeatureCard-D_o4IlGr.js";import{t as f}from"./state-CXVRcCSP.js";import{t as p}from"./react-hooks-CAv9oUXU.js";import{t as m}from"./undo-redo-LrfNX3PY.js";var h=(e=300)=>t=>{let n=null,r=null,i,a,o=t.setState;return t.setState=(s,c,l)=>{let u=typeof s==`function`?s(t.getState()):s,d,f=!1;typeof c==`function`?(d=c,f=l||!1):typeof c==`boolean`&&(f=c),r=f?u:r?{...r,...u}:u,i=d,a=f,n&&clearTimeout(n),n=setTimeout(()=>{r&&(o(r,i,a),r=null,i=void 0,a=void 0),n=null},e)},t},g=e=>t=>(t.on(`init`,t=>{(!e||e(t))&&(console.group(`🚀 Store Initialized`),console.log(`State:`,t),console.groupEnd())}),t.on(`change`,(t,{previous:n})=>{(!e||e(t,n))&&(console.group(`🔄 State Changed`),console.log(`Previous:`,n),console.log(`Current:`,t),console.groupEnd())}),t);function _(e){return t=>{let n=0,r=e.rollbackStrategy??`snapshot`,i=(i,a,o)=>{let s=r===`snapshot`?structuredClone(t.getState()):null,c,l=!1;typeof a==`function`?(c=a,l=o===!0):typeof a==`boolean`&&(l=a),n++,t.setState(i,i=>{c?.(i);let a=s??i;Promise.resolve().then(()=>e.commit(i,a)).then(()=>{e.onCommit?.(i)}).catch(n=>{r===`snapshot`&&s&&t.setState(s,!0),e.onRollback?.(a,i,n)}).finally(()=>{n--})},l)};return{...t,optimistic:i,isPending:()=>n>0,pendingCount:()=>n}}}var v=e=>typeof e==`object`&&!!e&&typeof e.getItem==`function`&&typeof e.length==`number`&&typeof e.key==`function`,y=e=>{if(typeof e==`string`){let t=e===`local`?localStorage:sessionStorage;return{getItem:e=>t.getItem(e),setItem:(e,n)=>t.setItem(e,n),removeItem:e=>t.removeItem(e)}}return v(e)?{getItem:t=>e.getItem(t),setItem:(t,n)=>e.setItem(t,n),removeItem:t=>e.removeItem(t)}:e},b=(e,t,n)=>{if(!e||typeof e!=`object`)return e;if(n===`include`){let n=Array.isArray(e)?[]:{};for(let r of t){let t=String(r).split(`.`),i=e,a=n;for(let e=0;e<t.length;e++){let n=t[e];if(i==null)break;e===t.length-1?a[n]=i[n]:(a[n]===void 0&&(a[n]={}),a=a[n],i=i[n])}}return n}let r=JSON.parse(JSON.stringify(e));for(let e of t){let t=String(e).split(`.`),n=r;for(let e=0;e<t.length-1&&n!=null;e++)n=n[t[e]];n&&typeof n==`object`&&delete n[t[t.length-1]]}return r};function x(e={}){return t=>{let n=y(e.storage??`local`),r=e.key??`fluxo-store`,i=e.include?.map(String),a=e.exclude?.map(String),o=e.version??0,s=e.debounceMs??0,c=e.serialize??JSON.stringify,l=e.deserialize??JSON.parse,u=e.onError??((e,t)=>console.error(`persistMiddleware [${t}]:`,e)),d=e=>i&&i.length?b(e,i,`include`):a&&a.length?b(e,a,`exclude`):e;(async()=>{try{let i=await n.getItem(r);if(i==null)return;let a=l(i),s=typeof a?.__v==`number`?a.__v:0,c=a?.state??a;if(s!==o){if(e.migrate)try{c=e.migrate(c,s)}catch(e){u(e,`migrate`);return}else return}t.setState(e=>({...e,...c}))}catch(e){u(e,`load`)}})();let f=null,p=null,m=e=>{try{let t=d(e),i=c({__v:o,state:t});if(i===p)return;p=i;let a=n.setItem(r,i);a instanceof Promise&&a.catch(e=>u(e,`save`))}catch(e){u(e,`save`)}};return t.on(`change`,e=>{s>0?(f&&clearTimeout(f),f=setTimeout(()=>{m(e),f=null},s)):m(e)}),t}}var S=()=>Math.random().toString(36).slice(2,10),ee=(e,t)=>({...e,...t});function te(e){return t=>{let n=typeof e.transport==`function`?e.transport():e.transport,r=e.instanceId??S(),i=e.resolve??`remote-wins`,a=!1,o=n.onReceive(n=>{if(!n||typeof n!=`object`||n.senderId===r||e.accept&&!e.accept(n))return;let o=n.state;if(o!=null){a=!0;try{i===`remote-wins`?t.setState(o,!0):i===`local-wins`||(i===`merge`?t.setState(e=>ee(e,o)):t.setState(e=>i(e,o)))}finally{a=!1}}});t.on(`change`,t=>{if(a)return;let i=e.filter?e.filter(t):t;n.send({senderId:r,state:i})});let s=t.reset;return t.reset=()=>{s(),n.close&&o()},t}}function ne(e){if(typeof BroadcastChannel>`u`)return{send:()=>{},onReceive:()=>()=>{}};let t=new BroadcastChannel(e);return{send:e=>t.postMessage(e),onReceive:e=>{let n=t=>e(t.data);return t.addEventListener(`message`,n),()=>t.removeEventListener(`message`,n)},close:()=>t.close()}}var re=(e=100)=>t=>{let n=0,r=null,i=null,a,o,s=t.setState,c=()=>{i&&(n=Date.now(),s(i,a,o),i=null,a=void 0,o=void 0)};return t.setState=(s,l,u)=>{let d=typeof s==`function`?s(t.getState()):s,f,p=!1;typeof l==`function`?(f=l,p=u||!1):typeof l==`boolean`&&(p=l),i=p?d:i?{...i,...d}:d,a=f,o=p;let m=Date.now()-n;m>=e?c():(r&&clearTimeout(r),r=setTimeout(()=>{c(),r=null},e-m))},t},ie=e=>e&&typeof e.safeParse==`function`,ae=e=>e&&typeof e.parse==`function`,C=e=>{let t={};if(!Array.isArray(e))return t;for(let n of e){let e=Array.isArray(n?.path)?n.path.join(`.`):String(n?.path??`_`),r=String(n?.message??`Invalid`);t[e]||(t[e]=r)}return t},oe=(e,t)=>{if(ie(e)){let n=e.safeParse(t);if(n.success)return;let r=n.error.issues??n.error.errors??[];return r.length?C(r):{_:n.error.message??`Validation failed`}}if(ae(e))try{e.parse(t);return}catch(e){let t=e?.issues??e?.errors;return Array.isArray(t)?C(t):{_:e?.message??String(e)}}};function w(e){let t=e.behavior??`reject`;return n=>{let r=n.setState,i=t=>{e.onValidationError&&e.onValidationError(t)},a=(e,t)=>{let r=n.getState();if(typeof e==`function`){let n=e(r);return t?n:{...r,...n}}return t?e:{...r,...e}};return n.setState=(o,s,c)=>{let l,u=!1;typeof s==`function`?(l=s,u=c===!0):typeof s==`boolean`&&(u=s);let d=a(o,u),f;if(e.validator){let t=e.validator(d);t&&Object.keys(t).length>0&&(f=t)}!f&&e.schema&&(f=oe(e.schema,d)),!(f&&Object.keys(f).length>0&&(i(f),t===`reject`))&&(r(o,l,u),e.asyncValidator&&Promise.resolve().then(()=>e.asyncValidator(n.getState())).then(e=>{e&&Object.keys(e).length>0&&i(e)}).catch(e=>{i({_:e?.message??String(e)})}))},n}}var T=e(t(),1),E=e(r(),1),D=n(),se=`// A middleware is just a function that takes the store and returns a (usually wrapped) store.
import type { Middleware, Store } from 'fluxo-ui/store';

const myMiddleware: Middleware<MyState> = (store: Store<MyState>) => {
  // Inspect, wrap, or augment the store, then return it.
  return store;
};

const store = create<MyState>(() => initial, [myMiddleware]);
`,ce=`// Pattern 1: Wrap setState — useful for throttling, validating, transforming writes.
const upperCaseNames: Middleware<{ name: string }> = (store) => {
  const original = store.setState;
  store.setState = (next, ...rest) => {
    if (typeof next !== 'function' && next?.name) next.name = next.name.toUpperCase();
    return original(next as any, ...rest as [any, any?]);
  };
  return store;
};
`,le=`// Pattern 2: Subscribe via store.on() — useful for logging, persistence, broadcasting.
const auditMiddleware: Middleware<any> = (store) => {
  store.on('change', (state, { previous }) => {
    track('state_changed', { previous, state });
  });
  return store;
};
`,O=`// Pattern 3: Augment the returned store with new methods — useful for undo/redo, optimistic, etc.
interface SnapshotStore<T> extends Store<T> {
  snapshot: () => T;
}

const snapshotMiddleware = <T,>(store: Store<T>): SnapshotStore<T> => {
  return {
    ...store,
    snapshot: () => structuredClone(store.getState()),
  };
};
`,ue=`// Order matters: middlewares wrap left-to-right.
// The leftmost middleware sees user calls first; the rightmost is closest to the underlying store.
const store = create(() => initial, [
  loggerMiddleware(),       // sees the original setState from the user
  throttleMiddleware(100),  // throttles before the change reaches persist
  persistMiddleware({ debounceMs: 200 }),
]);
`,k=()=>{let{isDark:e}=i();return(0,D.jsx)(u,{title:`Build Your Own Middleware`,description:`The middleware contract is one line. Three patterns cover almost every use case.`,centered:!1,children:(0,D.jsxs)(`div`,{className:`p-6 flex flex-col gap-5`,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:(0,T.default)(`text-base font-semibold mb-2`,{"text-gray-200":e,"text-gray-800":!e}),children:`The contract`}),(0,D.jsx)(l,{code:se,language:`ts`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:(0,T.default)(`text-base font-semibold mb-2`,{"text-gray-200":e,"text-gray-800":!e}),children:`Pattern 1 — wrap setState`}),(0,D.jsx)(l,{code:ce,language:`ts`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:(0,T.default)(`text-base font-semibold mb-2`,{"text-gray-200":e,"text-gray-800":!e}),children:`Pattern 2 — subscribe via store.on()`}),(0,D.jsx)(l,{code:le,language:`ts`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:(0,T.default)(`text-base font-semibold mb-2`,{"text-gray-200":e,"text-gray-800":!e}),children:`Pattern 3 — augment the store`}),(0,D.jsx)(l,{code:O,language:`ts`})]}),(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h3`,{className:(0,T.default)(`text-base font-semibold mb-2`,{"text-gray-200":e,"text-gray-800":!e}),children:`Composition order`}),(0,D.jsx)(l,{code:ue,language:`ts`})]})]})})},A=f(()=>({query:``,searchCount:0}),[h(500)]),de=p(A),j=f(()=>({query:``,searchCount:0})),fe=p(j),pe=`import { create, createHook } from 'fluxo-ui/store';
import { debounceMiddleware } from 'fluxo-ui/store/middlewares';

const store = create<{ query: string }>(
  () => ({ query: '' }),
  [debounceMiddleware(500)]
);
const useStore = createHook(store);

function SearchInput() {
  const { query } = useStore();
  // State only updates 500ms after the user stops typing
  return (
    <TextInput
      value={query}
      onChange={(e) => store.setState({ query: e.target.value })}
      placeholder="Type to search..."
    />
  );
}`,M=({title:e,store:t,hook:n})=>{let{isDark:r}=i(),a=n(),s=(0,E.useRef)(0);return s.current++,(0,D.jsxs)(`div`,{className:(0,T.default)(`flex-1 rounded-lg border p-4`,{"border-white/10 bg-white/5":r,"border-gray-200 bg-gray-50":!r}),children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs font-semibold uppercase tracking-wider mb-3`,{"text-gray-400":r,"text-gray-500":!r}),children:e}),(0,D.jsx)(o,{value:a.query,onChange:e=>t.setState({query:e.target.value,searchCount:t.getState().searchCount+1}),placeholder:`Type rapidly...`}),(0,D.jsxs)(`div`,{className:(0,T.default)(`mt-3 text-sm space-y-1`,{"text-gray-300":r,"text-gray-600":!r}),children:[(0,D.jsxs)(`div`,{children:[`Updates: `,(0,D.jsx)(`span`,{className:`font-bold text-[var(--eui-primary)]`,children:a.searchCount})]}),(0,D.jsxs)(`div`,{children:[`Renders: `,(0,D.jsx)(`span`,{className:`font-bold text-[var(--eui-primary)]`,children:s.current})]})]})]})},N=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Debounce`,description:`Delay state updates until input activity stops. Compare debounced vs immediate updates.`,children:(0,D.jsxs)(`div`,{className:`flex gap-4 flex-col sm:flex-row w-full`,children:[(0,D.jsx)(M,{title:`With Debounce (500ms)`,store:A,hook:de}),(0,D.jsx)(M,{title:`Without Debounce`,store:j,hook:fe})]})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:pe,language:`tsx`})})]}),P=f(()=>({count:0,label:`Hello`}),[g()]),F=p(P),I=`import { create, createHook } from 'fluxo-ui/store';
import { loggerMiddleware } from 'fluxo-ui/store/middlewares';

const store = create<{ count: number; label: string }>(
  () => ({ count: 0, label: 'Hello' }),
  [loggerMiddleware()]
);
const useStore = createHook(store);

// With predicate — only log when count changes
const store2 = create<{ count: number }>(
  () => ({ count: 0 }),
  [loggerMiddleware((state, previous) => state.count !== previous?.count)]
);

// Open browser DevTools console to see logs`,L=()=>{let{isDark:e}=i(),{count:t,label:n}=F(),[r,a]=(0,E.useState)(!0);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Logger`,description:`Logs state changes to the browser console with loggerMiddleware`,children:(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[r&&(0,D.jsxs)(`div`,{className:(0,T.default)(`text-xs px-4 py-2 rounded-lg flex items-center gap-2`,{"bg-blue-500/10 text-blue-400 border border-blue-500/20":e,"bg-blue-50 text-blue-700 border border-blue-200":!e}),children:[`Open browser DevTools console to see the logs`,(0,D.jsx)(s,{label:`×`,size:`xs`,layout:`plain`,onClick:()=>a(!1)})]}),(0,D.jsxs)(`div`,{className:(0,T.default)(`text-sm`,{"text-gray-300":e,"text-gray-700":!e}),children:[`Count: `,(0,D.jsx)(`span`,{className:`font-bold text-[var(--eui-primary)]`,children:t}),` · `,`Label: `,(0,D.jsx)(`span`,{className:`font-bold text-[var(--eui-primary)]`,children:n})]}),(0,D.jsxs)(`div`,{className:`flex gap-2`,children:[(0,D.jsx)(s,{label:`Increment`,size:`sm`,onClick:()=>P.setState(e=>({count:e.count+1}))}),(0,D.jsx)(s,{label:`Change Label`,size:`sm`,onClick:()=>P.setState({label:n===`Hello`?`World`:`Hello`})}),(0,D.jsx)(s,{label:`Reset`,size:`sm`,variant:`secondary`,onClick:()=>P.reset()})]})]})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:I,language:`tsx`})})]})},R=(e,t)=>new Promise((n,r)=>{setTimeout(()=>{Math.random()<e.value?r(Error(`Server rejected the change`)):n()},t)}),z={value:.4},B=f(()=>({likes:0,serverLikes:0}),[_({commit:async e=>{await R(z,600),B.setState({serverLikes:e.likes})}})]),me=p(B),he=`import { create } from 'fluxo-ui/store';
import { optimisticMiddleware } from 'fluxo-ui/store/middlewares';

const store = create<LikeState>(
  () => ({ likes: 0, serverLikes: 0 }),
  [optimisticMiddleware<LikeState>({
    commit: async (next) => {
      // Send to server. If this rejects, the state automatically rolls back.
      await fetch('/api/likes', { method: 'POST', body: JSON.stringify(next) });
      store.setState({ serverLikes: next.likes });
    },
    onRollback: (prev, attempted, error) => {
      showSnackbar({ severity: 'error', message: 'Save failed — reverted' });
    },
  })]
);

// Use store.optimistic() instead of setState() for changes that need server confirmation
store.optimistic((s) => ({ likes: s.likes + 1 }));
`,ge=()=>{let{isDark:e}=i(),t=me(),[n,r]=(0,E.useState)([]),a=(0,E.useRef)(0);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Optimistic Updates with Auto-Rollback`,description:`Click +1 — UI updates immediately. A simulated server fails ~40% of the time. On failure the change rolls back automatically.`,children:(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-4 w-full max-w-md`,children:[(0,D.jsxs)(`div`,{className:`flex gap-8`,children:[(0,D.jsxs)(`div`,{className:`text-center`,children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs uppercase tracking-wide mb-1`,{"text-gray-500":e,"text-gray-400":!e}),children:`Optimistic`}),(0,D.jsx)(`div`,{className:`text-4xl font-bold tabular-nums text-[var(--eui-primary)]`,children:t.likes})]}),(0,D.jsxs)(`div`,{className:`text-center`,children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs uppercase tracking-wide mb-1`,{"text-gray-500":e,"text-gray-400":!e}),children:`Server`}),(0,D.jsx)(`div`,{className:(0,T.default)(`text-4xl font-bold tabular-nums`,{"text-emerald-400":e,"text-emerald-600":!e}),children:t.serverLikes})]})]}),(0,D.jsxs)(`div`,{className:`flex gap-2 flex-wrap justify-center`,children:[(0,D.jsx)(s,{label:`+1 Like (optimistic)`,size:`sm`,onClick:()=>{a.current++;let e=a.current;B.optimistic(e=>({likes:e.likes+1})),r(t=>[...t.slice(-9),`#${e} optimistic +1 (sending...)`]),setTimeout(()=>{let t=B.getState(),n=t.likes===t.serverLikes;r(r=>[...r.slice(-9),`#${e} ${n?`committed`:`rolled back`} → likes=${t.likes}`])},700)}}),(0,D.jsx)(s,{label:`Lower failure rate`,size:`sm`,variant:`secondary`,onClick:()=>{z.value=.05,r(e=>[...e.slice(-9),`failure rate → 5%`])}}),(0,D.jsx)(s,{label:`Reset`,size:`sm`,variant:`secondary`,onClick:()=>B.setState({likes:0,serverLikes:0},!0)})]}),(0,D.jsxs)(`div`,{className:(0,T.default)(`w-full text-xs font-mono p-3 rounded max-h-40 overflow-auto`,{"bg-black/30 text-gray-300":e,"bg-gray-100 text-gray-700":!e}),children:[n.length===0&&(0,D.jsx)(`div`,{className:`italic opacity-60`,children:`Click +1 to see commits and rollbacks`}),n.map((e,t)=>(0,D.jsx)(`div`,{children:e},t))]})]})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:he,language:`tsx`})})]})},V=`fluxo-store-demo-persist`,H=f(()=>({count:0}),[x({storage:`local`,key:V})]),_e=p(H);function U(){try{let e=localStorage.getItem(V);if(e){let t=JSON.parse(e);return typeof t.count==`number`?t.count:null}}catch{}return null}var ve=`import { create, createHook } from 'fluxo-ui/store';
import { persistMiddleware } from 'fluxo-ui/store/middlewares';

const store = create<{ count: number }>(
  () => ({ count: 0 }),
  [persistMiddleware({ storage: 'local', key: 'my-app-counter' })]
);
const useStore = createHook(store);

function PersistDemo() {
  const { count } = useStore();

  return (
    <div>
      <span>Persisted count: {count}</span>
      <Button label="Increment"
        onClick={() => store.setState(s => ({ count: s.count + 1 }))} />
      <Button label="Refresh Page"
        onClick={() => window.location.reload()} />
    </div>
  );
}`,ye=()=>{let{isDark:e}=i(),{count:t}=_e(),[n,r]=(0,E.useState)(!0),[a]=(0,E.useState)(()=>U()!==null&&U()!==0),[o,c]=(0,E.useState)(!1);(0,E.useEffect)(()=>{if(t===0)return;c(!0);let e=setTimeout(()=>c(!1),1200);return()=>clearTimeout(e)},[t]);let d=(0,E.useMemo)(()=>{try{return localStorage.getItem(V)}catch{return null}},[t]);return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Persistence`,description:`Automatically save and restore state from localStorage with persistMiddleware`,children:(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[n?(0,D.jsxs)(D.Fragment,{children:[a&&(0,D.jsxs)(`div`,{className:(0,T.default)(`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full`,{"bg-blue-500/15 text-blue-400 border border-blue-500/25":e,"bg-blue-50 text-blue-700 border border-blue-200":!e}),children:[(0,D.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`w-3.5 h-3.5`,children:(0,D.jsx)(`path`,{fillRule:`evenodd`,d:`M15.312 11.424a5.5 5.5 0 0 1-9.201 2.466l-.312-.311h2.433a.75.75 0 0 0 0-1.5H4.598a.75.75 0 0 0-.75.75v3.634a.75.75 0 0 0 1.5 0v-2.033l.312.311a7 7 0 0 0 11.712-3.138.75.75 0 0 0-1.449-.389Zm-1.873-5.848a7 7 0 0 0-11.712 3.138.75.75 0 0 0 1.449.389 5.5 5.5 0 0 1 9.201-2.466l.312.311H10.256a.75.75 0 0 0 0 1.5h3.634a.75.75 0 0 0 .75-.75V4.064a.75.75 0 0 0-1.5 0v2.033l-.312-.311Z`,clipRule:`evenodd`})}),`Restored from localStorage`]}),(0,D.jsxs)(`div`,{className:`relative flex items-center gap-3`,children:[(0,D.jsx)(`div`,{className:`text-4xl font-bold tabular-nums text-[var(--eui-primary)]`,children:t}),(0,D.jsx)(`div`,{className:(0,T.default)(`absolute -right-16 top-1/2 -translate-y-1/2 text-xs font-medium px-2 py-0.5 rounded transition-opacity duration-300`,o?`opacity-100`:`opacity-0`,{"bg-green-500/15 text-green-400":e,"bg-green-50 text-green-600":!e}),children:`Saved`})]}),(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs text-center px-4 py-2 rounded-lg max-w-sm`,{"bg-green-500/10 text-green-400 border border-green-500/20":e,"bg-green-50 text-green-700 border border-green-200":!e}),children:`This value is persisted to localStorage. Try refreshing the page — the count will be restored!`}),(0,D.jsxs)(`div`,{className:`flex gap-2 flex-wrap justify-center`,children:[(0,D.jsx)(s,{label:`Increment`,size:`sm`,onClick:()=>H.setState(e=>({count:e.count+1}))}),(0,D.jsx)(s,{label:`Decrement`,size:`sm`,variant:`secondary`,onClick:()=>H.setState(e=>({count:e.count-1}))}),(0,D.jsx)(s,{label:`Refresh Page`,size:`sm`,variant:`info`,onClick:()=>window.location.reload()}),(0,D.jsx)(s,{label:`Unmount`,size:`sm`,variant:`warning`,onClick:()=>r(!1)})]}),(0,D.jsxs)(`div`,{className:(0,T.default)(`w-full max-w-md rounded-lg px-4 py-3 text-xs font-mono`,{"bg-white/5 text-gray-400 border border-white/10":e,"bg-gray-50 text-gray-500 border border-gray-200":!e}),children:[(0,D.jsxs)(`div`,{className:(0,T.default)(`text-[10px] uppercase tracking-wider font-semibold mb-1`,{"text-gray-500":e,"text-gray-400":!e}),children:[`localStorage["`,V,`"]`]}),(0,D.jsx)(`div`,{className:`truncate`,children:d||`null`})]})]}):(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-3`,children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-sm`,{"text-gray-400":e,"text-gray-500":!e}),children:`Component unmounted. Value is persisted in localStorage.`}),(0,D.jsx)(s,{label:`Remount`,size:`sm`,variant:`success`,onClick:()=>r(!0)})]}),(0,D.jsx)(s,{label:`Clear Storage & Reset`,size:`xs`,variant:`secondary`,layout:`plain`,onClick:()=>{localStorage.removeItem(V),H.reset()}})]})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:ve,language:`tsx`})})]})},W=Math.random().toString(36).slice(2,6).toUpperCase(),G=f(()=>({count:0,lastUpdatedBy:`none`}),[te({transport:ne(`fluxo-ui-demo-sync`),resolve:`merge`})]),be=p(G),xe=`import { create } from 'fluxo-ui/store';
import {
  syncMiddleware,
  broadcastChannelTransport,
  webSocketTransport,
  storageEventTransport,
} from 'fluxo-ui/store/middlewares';

const store = create<SyncState>(() => ({ count: 0 }), [
  syncMiddleware<SyncState>({
    transport: broadcastChannelTransport('my-app'),       // or webSocketTransport('wss://...')
    resolve: 'merge',                                      // 'remote-wins' | 'local-wins' | 'merge' | (local, remote) => Partial<T>
  }),
]);

// Implement your own SyncTransport to use any other channel:
// { send(msg), onReceive(handler): unsubscribe, close?() }
`,Se=()=>{let{isDark:e}=i(),t=be();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Sync Middleware (Pluggable Transport)`,description:`syncMiddleware abstracts the transport. Below uses BroadcastChannel; the same store can swap to WebSocket or a custom transport without changing call sites. Open the page in two tabs to see updates flow through.`,children:(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-4 w-full max-w-sm mx-auto`,children:[(0,D.jsxs)(`div`,{className:(0,T.default)(`text-xs font-mono px-2 py-1 rounded`,{"bg-white/10 text-gray-400":e,"bg-gray-100 text-gray-500":!e}),children:[`Tab ID: `,W]}),(0,D.jsx)(`div`,{className:`text-4xl font-bold tabular-nums text-[var(--eui-primary)]`,children:t.count}),t.lastUpdatedBy!==`none`&&(0,D.jsxs)(`div`,{className:(0,T.default)(`text-xs`,{"text-gray-400":e,"text-gray-500":!e}),children:[`Last updated by: `,t.lastUpdatedBy===W?`this tab`:`tab ${t.lastUpdatedBy}`]}),(0,D.jsxs)(`div`,{className:`flex gap-2`,children:[(0,D.jsx)(s,{label:`+1`,size:`sm`,onClick:()=>G.setState(e=>({count:e.count+1,lastUpdatedBy:W}))}),(0,D.jsx)(s,{label:`+5`,size:`sm`,onClick:()=>G.setState(e=>({count:e.count+5,lastUpdatedBy:W}))}),(0,D.jsx)(s,{label:`Reset`,size:`sm`,variant:`secondary`,onClick:()=>G.setState({count:0,lastUpdatedBy:W})})]})]})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:xe,language:`tsx`})})]})},K=f(()=>({value:0}),[re(500)]),Ce=p(K),q=f(()=>({value:0})),we=p(q),Te=`import { create, createHook } from 'fluxo-ui/store';
import { throttleMiddleware } from 'fluxo-ui/store/middlewares';

// Updates are batched within a 500ms window
const store = create<{ value: number }>(
  () => ({ value: 0 }),
  [throttleMiddleware(500)]
);
const useStore = createHook(store);

function ThrottleDemo() {
  const { value } = useStore();

  const handleRapidClicks = () => {
    // These rapid calls are merged and applied once after 500ms
    for (let i = 0; i < 10; i++) {
      store.setState((s) => ({ value: s.value + 1 }));
    }
  };

  return (
    <div>
      <span>Value: {value}</span>
      <Button label="Rapid +10" onClick={handleRapidClicks} />
    </div>
  );
}`,Ee=()=>{let{isDark:e}=i(),t=(0,E.useRef)(0),n=(0,E.useRef)(0);t.current++;let{value:r}=Ce();n.current++;let{value:a}=we();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Throttle`,description:`Batch rapid state updates within a time window using throttleMiddleware`,centered:!1,children:(0,D.jsx)(`div`,{className:`p-6`,children:(0,D.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-4`,children:[(0,D.jsxs)(`div`,{className:(0,T.default)(`rounded-lg p-4 border text-center`,{"border-white/10 bg-white/5":e,"border-gray-200 bg-gray-50":!e}),children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs uppercase tracking-wide mb-2 font-semibold`,{"text-gray-500":e,"text-gray-400":!e}),children:`With Throttle (500ms)`}),(0,D.jsx)(`div`,{className:`text-3xl font-bold tabular-nums text-[var(--eui-primary)] mb-1`,children:r}),(0,D.jsxs)(`div`,{className:(0,T.default)(`text-xs mb-3`,{"text-gray-500":e,"text-gray-400":!e}),children:[`Renders: `,t.current]}),(0,D.jsx)(s,{label:`Rapid +10`,size:`sm`,onClick:()=>{for(let e=0;e<10;e++)K.setState(e=>({value:e.value+1}))}})]}),(0,D.jsxs)(`div`,{className:(0,T.default)(`rounded-lg p-4 border text-center`,{"border-white/10 bg-white/5":e,"border-gray-200 bg-gray-50":!e}),children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs uppercase tracking-wide mb-2 font-semibold`,{"text-gray-500":e,"text-gray-400":!e}),children:`Without Throttle`}),(0,D.jsx)(`div`,{className:`text-3xl font-bold tabular-nums text-[var(--eui-primary)] mb-1`,children:a}),(0,D.jsxs)(`div`,{className:(0,T.default)(`text-xs mb-3`,{"text-gray-500":e,"text-gray-400":!e}),children:[`Renders: `,n.current]}),(0,D.jsx)(s,{label:`Rapid +10`,size:`sm`,onClick:()=>{for(let e=0;e<10;e++)q.setState(e=>({value:e.value+1}))}})]})]})})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:Te,language:`tsx`})})]})},J=f(()=>({value:0}),[m({maxHistorySize:20})]),De=p(J),Y=J,Oe=`import { create, createHook } from 'fluxo-ui/store';
import { undoRedoMiddleware } from 'fluxo-ui/store/middlewares';
import type { UndoRedoStateProps, UndoRedoStore } from 'fluxo-ui/store/middlewares';

interface CounterState { value: number; }

const store = create<CounterState>(
  () => ({ value: 0 }),
  [undoRedoMiddleware({ maxHistorySize: 20 })]
);
const useStore = createHook<CounterState, CounterState & UndoRedoStateProps>(store);
const typedStore = store as UndoRedoStore<CounterState>;

function UndoDemo() {
  const { value, canUndo, canRedo } = useStore();

  return (
    <div>
      <span>{value}</span>
      <Button label="+1"
        onClick={() => store.setState(s => ({ value: s.value + 1 }))} />
      <Button label="+5"
        onClick={() => store.setState(s => ({ value: s.value + 5 }))} />
      <Button label="Undo" disabled={!canUndo}
        onClick={() => typedStore.undo()} />
      <Button label="Redo" disabled={!canRedo}
        onClick={() => typedStore.redo()} />
    </div>
  );
}`,ke=()=>{let{value:e,canUndo:t,canRedo:n}=De();return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(u,{title:`Undo / Redo`,description:`Track state history and navigate back and forth with undoRedoMiddleware`,children:(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,D.jsx)(`div`,{className:`text-4xl font-bold tabular-nums text-[var(--eui-primary)]`,children:e}),(0,D.jsxs)(`div`,{className:`flex gap-2 flex-wrap justify-center`,children:[(0,D.jsx)(s,{label:`+1`,size:`sm`,onClick:()=>J.setState(e=>({value:e.value+1}))}),(0,D.jsx)(s,{label:`+5`,size:`sm`,onClick:()=>J.setState(e=>({value:e.value+5}))}),(0,D.jsx)(s,{label:`Undo`,size:`sm`,variant:`secondary`,disabled:!t,onClick:()=>Y.undo()}),(0,D.jsx)(s,{label:`Redo`,size:`sm`,variant:`secondary`,disabled:!n,onClick:()=>Y.redo()})]})]})}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:Oe,language:`tsx`})})]})},X={current:{}},Z=f(()=>({name:``,email:``,age:0}),[w({validator:e=>{let t={};return e.name.length>0&&e.name.length<2&&(t.name=`Name must be at least 2 characters`),e.name.length>50&&(t.name=`Name cannot exceed 50 characters`),e.email.length>0&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)&&(t.email=`Please enter a valid email address`),e.age<0&&(t.age=`Age cannot be negative`),e.age>150&&(t.age=`Age cannot exceed 150`),Object.keys(t).length>0?t:void 0},onValidationError:e=>{X.current=e}})]),Ae=p(Z),Q={current:``},$=f(()=>({amount:10}),[w({validator:e=>{let t={};return e.amount<0&&(t.amount=`Amount cannot be negative`),e.amount>100&&(t.amount=`Amount cannot exceed 100`),Object.keys(t).length>0?t:void 0},onValidationError:e=>{Q.current=e.amount||`Validation failed`}})]),je=p($),Me=`import { create, createHook } from 'fluxo-ui/store';
import { validationMiddleware } from 'fluxo-ui/store/middlewares';

interface FormState {
  name: string;
  email: string;
  age: number;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const validationErrors: { current: FormErrors } = { current: {} };

const formStore = create<FormState>(
  () => ({ name: '', email: '', age: 0 }),
  [validationMiddleware<FormState>({
    validator: (state) => {
      const errors: FormErrors = {};
      if (state.name.length > 0 && state.name.length < 2) {
        errors.name = 'Name must be at least 2 characters';
      }
      if (state.email.length > 0 &&
          !/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(state.email)) {
        errors.email = 'Please enter a valid email address';
      }
      if (state.age < 0) errors.age = 'Age cannot be negative';
      if (state.age > 150) errors.age = 'Age cannot exceed 150';
      return Object.keys(errors).length > 0 ? errors : undefined;
    },
    onValidationError: (errors) => {
      validationErrors.current = errors as FormErrors;
    }
  })]
);

const useFormStore = createHook(formStore);

function FormDemo() {
  const { name, email, age } = useFormStore();
  const [errors, setErrors] = useState<FormErrors>({});

  const updateField = (update: Partial<FormState>) => {
    validationErrors.current = {};
    formStore.setState(update);
    requestAnimationFrame(() => {
      setErrors({ ...validationErrors.current });
    });
  };

  return (
    <form>
      <TextInput label="Name" value={name}
        onChange={v => updateField({ name: v })} />
      {errors.name && <span className="error">{errors.name}</span>}

      <TextInput label="Email" value={email}
        onChange={v => updateField({ email: v })} />
      {errors.email && <span className="error">{errors.email}</span>}

      <TextInput label="Age" type="number" value={String(age)}
        onChange={v => updateField({ age: Number(v) })} />
      {errors.age && <span className="error">{errors.age}</span>}
    </form>
  );
}`,Ne=()=>{let{isDark:e}=i(),{amount:t}=je(),[n,r]=(0,E.useState)(null),a=(0,E.useCallback)(e=>{Q.current=``,$.setState({amount:e}),requestAnimationFrame(()=>{Q.current?r(Q.current):r(null)})},[]);return(0,D.jsx)(u,{title:`Basic Validation`,description:`Reject invalid state updates with validationMiddleware. Invalid setState calls are blocked entirely.`,children:(0,D.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,D.jsx)(`div`,{className:`text-4xl font-bold tabular-nums text-[var(--eui-primary)]`,children:t}),(0,D.jsx)(`div`,{className:(0,T.default)(`text-xs`,{"text-gray-500":e,"text-gray-400":!e}),children:`Valid range: 0 to 100`}),n&&(0,D.jsxs)(`div`,{className:(0,T.default)(`flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg`,{"bg-red-500/10 text-red-400 border border-red-500/20":e,"bg-red-50 text-red-600 border border-red-200":!e}),children:[(0,D.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`w-4 h-4 shrink-0`,children:(0,D.jsx)(`path`,{fillRule:`evenodd`,d:`M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`,clipRule:`evenodd`})}),n]}),(0,D.jsxs)(`div`,{className:`flex gap-2 flex-wrap justify-center`,children:[(0,D.jsx)(s,{label:`+10`,size:`sm`,onClick:()=>a(t+10)}),(0,D.jsx)(s,{label:`-10`,size:`sm`,onClick:()=>a(t-10)}),(0,D.jsx)(s,{label:`Set -5 (blocked)`,size:`sm`,variant:`danger`,onClick:()=>a(-5)}),(0,D.jsx)(s,{label:`Set 150 (blocked)`,size:`sm`,variant:`danger`,onClick:()=>a(150)})]})]})})},Pe=()=>{let{isDark:e}=i(),{name:t,email:n,age:r}=Ae(),[c,l]=(0,E.useState)({}),[d,f]=(0,E.useState)(new Set),[p,m]=(0,E.useState)(!1),[h,g]=(0,E.useState)(!1),_=(0,E.useCallback)((e,t)=>{X.current={},Z.setState({[e]:t}),f(t=>new Set(t).add(e)),requestAnimationFrame(()=>{l(t=>{let n={...t};return X.current[e]?n[e]=X.current[e]:delete n[e],n}),g(!1)})},[]),v=(0,E.useCallback)(()=>{m(!0),f(new Set([`name`,`email`,`age`]));let e=Z.getState(),t={};e.name||(t.name=`Name is required`),e.email||(t.email=`Email is required`),e.age||(t.age=`Age is required`);let n={...t,...c};Object.keys(n).length>0?(l(n),g(!1)):(l({}),g(!0))},[c]),y=(0,E.useCallback)(()=>{Z.setState({name:``,email:``,age:0}),l({}),f(new Set),m(!1),g(!1)},[]),b=e=>(d.has(e)||p)&&!!c[e];return(0,D.jsx)(u,{title:`Form Validation`,description:`Field-level validation with per-field error messages. Invalid updates are rejected by the middleware.`,children:(0,D.jsxs)(`div`,{className:`w-full max-w-md mx-auto flex flex-col gap-4`,children:[(0,D.jsx)(a,{label:`Name`,error:b(`name`)?c.name:void 0,children:(0,D.jsx)(o,{value:t,placeholder:`Enter your name`,onChange:e=>_(`name`,e.value)})}),(0,D.jsx)(a,{label:`Email`,error:b(`email`)?c.email:void 0,children:(0,D.jsx)(o,{value:n,placeholder:`user@example.com`,onChange:e=>_(`email`,e.value)})}),(0,D.jsx)(a,{label:`Age`,error:b(`age`)?c.age:void 0,children:(0,D.jsx)(o,{value:r===0&&!d.has(`age`)?``:String(r),placeholder:`Enter your age`,onChange:e=>_(`age`,Number(e.value)||0)})}),h&&(0,D.jsxs)(`div`,{className:(0,T.default)(`flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg`,{"bg-green-500/10 text-green-400 border border-green-500/20":e,"bg-green-50 text-green-700 border border-green-200":!e}),children:[(0,D.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 20 20`,fill:`currentColor`,className:`w-4 h-4 shrink-0`,children:(0,D.jsx)(`path`,{fillRule:`evenodd`,d:`M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z`,clipRule:`evenodd`})}),`All fields are valid! Form submitted successfully.`]}),(0,D.jsxs)(`div`,{className:`flex gap-2 justify-end pt-2`,children:[(0,D.jsx)(s,{label:`Reset`,size:`sm`,variant:`secondary`,onClick:y}),(0,D.jsx)(s,{label:`Submit`,size:`sm`,onClick:v})]}),(0,D.jsxs)(`div`,{className:(0,T.default)(`rounded-lg px-4 py-3 text-xs font-mono`,{"bg-white/5 text-gray-400 border border-white/10":e,"bg-gray-50 text-gray-500 border border-gray-200":!e}),children:[(0,D.jsx)(`div`,{className:(0,T.default)(`text-[10px] uppercase tracking-wider font-semibold mb-2`,{"text-gray-500":e,"text-gray-400":!e}),children:`Current Store State`}),(0,D.jsx)(`pre`,{className:`whitespace-pre-wrap`,children:JSON.stringify({name:t,email:n,age:r},null,2)})]})]})})},Fe=()=>(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`div`,{className:`space-y-8`,children:[(0,D.jsx)(Ne,{}),(0,D.jsx)(Pe,{})]}),(0,D.jsx)(`div`,{className:`mt-4`,children:(0,D.jsx)(l,{code:Me,language:`tsx`})})]}),Ie=[{id:`undo-redo`,title:`Undo / Redo`,description:`Scoped, grouped, capped history`},{id:`persist`,title:`Persistence`,description:`Scoped, versioned, debounced`},{id:`optimistic`,title:`Optimistic`,description:`Apply locally, rollback on error`},{id:`validation`,title:`Validation`,description:`Function, schema, or async`},{id:`sync`,title:`Sync`,description:`Cross-tab + WS + custom transport`},{id:`logging`,title:`Logger`,description:`Console logging`},{id:`throttle`,title:`Throttle`,description:`Rate-limit updates`},{id:`debounce`,title:`Debounce`,description:`Delay until idle`},{id:`authoring`,title:`Build Your Own`,description:`Middleware contract`},{id:`import`,title:`Import`,description:`Import statement`},{id:`features`,title:`Features`,description:`Feature summary`}],Le=[{title:`Undo / Redo`,description:`Navigate state history with configurable max history size and one-call undo/redo`,icon:`M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3`},{title:`Persistence`,description:`Auto-save state to localStorage or sessionStorage with a configurable key`,icon:`M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375`},{title:`Validation`,description:`Intercept setState calls and reject updates that fail validation rules`,icon:`M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z`},{title:`Logger`,description:`Log state changes to the console with optional predicate filtering`,icon:`M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6V7.5Z`},{title:`Throttle`,description:`Batch rapid setState calls within a configurable delay window to reduce noise`,icon:`M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`},{title:`Debounce`,description:`Delay state updates until activity stops — ideal for search inputs and auto-save`,icon:`M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`},{title:`Optimistic Updates`,description:`Apply changes locally, await an async commit, and roll back automatically when the commit rejects`,icon:`M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z`},{title:`Pluggable Sync`,description:`syncMiddleware accepts any transport — BroadcastChannel, storage event, WebSocket, or your own`,icon:`M3 8l4-4m0 0 4 4M7 4v16m10-4 4 4m0 0-4 4m4-4H7`},{title:`Composable`,description:`Middlewares are composable — stack multiple middlewares to combine behaviors`,icon:`M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L21.75 16.5 12 21.75 2.25 16.5l4.179-2.25m0 0 5.571 3 5.571-3`}],Re=()=>{let{isDark:e}=i();return(0,D.jsxs)(c,{sectionNavItems:Ie,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h1`,{className:(0,T.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Store Middleware`}),(0,D.jsx)(`p`,{className:(0,T.default)(`text-xl leading-relaxed`,{"text-gray-400":e,"text-gray-600":!e}),children:`Composable middleware functions that extend store behavior. Add undo/redo, persistence, validation, logging, and throttling with a single line.`})]}),(0,D.jsxs)(`section`,{id:`undo-redo`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Undo / Redo`}),(0,D.jsx)(ke,{})]}),(0,D.jsxs)(`section`,{id:`persist`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Persistence`}),(0,D.jsx)(ye,{})]}),(0,D.jsxs)(`section`,{id:`optimistic`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Optimistic Updates`}),(0,D.jsx)(ge,{})]}),(0,D.jsxs)(`section`,{id:`validation`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Validation`}),(0,D.jsx)(Fe,{})]}),(0,D.jsxs)(`section`,{id:`sync`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Sync`}),(0,D.jsx)(Se,{})]}),(0,D.jsxs)(`section`,{id:`logging`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Logger`}),(0,D.jsx)(L,{})]}),(0,D.jsxs)(`section`,{id:`throttle`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Throttle`}),(0,D.jsx)(Ee,{})]}),(0,D.jsxs)(`section`,{id:`debounce`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Debounce`}),(0,D.jsx)(N,{})]}),(0,D.jsxs)(`section`,{id:`authoring`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Build Your Own Middleware`}),(0,D.jsx)(k,{})]}),(0,D.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Import`}),(0,D.jsx)(l,{code:`import {
  persistMiddleware,
  undoRedoMiddleware,
  optimisticMiddleware,
  validationMiddleware,
  syncMiddleware,
  broadcastChannelTransport,
  webSocketTransport,
  storageEventTransport,
  loggerMiddleware,
  throttleMiddleware,
  debounceMiddleware,
  devToolsMiddleware,
  immerMiddleware,
} from 'fluxo-ui/store/middlewares';`})]}),(0,D.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,D.jsx)(`h2`,{className:(0,T.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,D.jsx)(d,{features:Le})]})]})};export{Re as default};