import{r as e}from"./rolldown-runtime-hePW80VL.js";import{i as t,o as n}from"./StoryThemeContext-De5ZWJ_M.js";import{t as r}from"./split-view-uJFbMJ5i.js";import{t as i}from"./align-left-2Qbc7U8d.js";import{t as a}from"./Checkbox-Cd3MqUdP.js";import{t as o}from"./NumericInput-BKO-64P1.js";import{t as s}from"./SelectButton-BwpKgQQs.js";import{E as c}from"../index.BXfAFPWO.js";import{t as l}from"./PageLayout-DSwLk1XV.js";import{t as u}from"./CodeBlock-C1PblznF.js";import{t as d}from"./PropsTable-B4RgQiZf.js";import{t as f}from"./ComponentDemo-C0Y_0jmn.js";import p,{a as m,i as h,n as g,r as _,t as v}from"./BasicUsage-BhY3ZPaA.js";var y=e(n(),1),b=t(),x=[{name:`server.js`,path:`src/server.js`,added:18,removed:6,oldValue:`import express from 'express';
import { createPool } from 'mysql2/promise';
import bcrypt from 'bcrypt';

const app = express();
const PORT = 3000;

const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'users_db',
});

app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing fields' });
    }
    const hashed = await bcrypt.hash(password, 10);
    await pool.execute(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, hashed]
    );
    res.status(201).json({ message: 'User created' });
});

app.get('/users', async (req, res) => {
    const [rows] = await pool.execute('SELECT id, username FROM users');
    res.json(rows);
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
`,newValue:`import express from 'express';
import { createPool } from 'mysql2/promise';
import bcrypt from 'bcrypt';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

const app = express();
const PORT = process.env.PORT ?? 3000;

const pool = createPool({
    host: process.env.DB_HOST ?? 'localhost',
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASS ?? '',
    database: process.env.DB_NAME ?? 'users_db',
    connectionLimit: 10,
});

app.use(helmet());
app.use(express.json({ limit: '16kb' }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100 });
app.use('/register', limiter);

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    if (password.length < 8) {
        return res.status(400).json({ error: 'Password too short' });
    }
    const hashed = await bcrypt.hash(password, 12);
    await pool.execute(
        'INSERT INTO users (username, password_hash, created_at) VALUES (?, ?, NOW())',
        [username, hashed]
    );
    res.status(201).json({ message: 'User registered successfully' });
});

app.get('/users', async (req, res) => {
    const [rows] = await pool.execute(
        'SELECT id, username, created_at FROM users ORDER BY created_at DESC'
    );
    res.json({ users: rows, total: (rows as unknown[]).length });
});

app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});
`},{name:`auth.ts`,path:`src/middleware/auth.ts`,added:14,removed:8,oldValue:`import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET = 'hardcoded-secret-key';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ error: 'No token provided' });
    }
    try {
        const decoded = jwt.verify(token, SECRET);
        (req as any).user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ error: 'Invalid token' });
    }
};
`,newValue:`import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error('JWT_SECRET env variable is required');

const BEARER_PREFIX = 'Bearer ';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader || !authHeader.startsWith(BEARER_PREFIX)) {
        return res.status(401).json({ error: 'Authorization header missing or malformed' });
    }
    const token = authHeader.slice(BEARER_PREFIX.length);
    try {
        const decoded = jwt.verify(token, SECRET as string, { algorithms: ['HS256'] });
        (req as any).user = decoded;
        next();
    } catch (err) {
        const message = err instanceof jwt.TokenExpiredError ? 'Token expired' : 'Invalid token';
        return res.status(403).json({ error: message });
    }
};

export const requireRole = (role: string) => (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user || user.role !== role) {
        return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
};
`},{name:`.env.example`,path:`.env.example`,added:7,removed:2,oldValue:`PORT=3000
DB_HOST=localhost
`,newValue:`PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=
DB_NAME=users_db
JWT_SECRET=change-me-in-production
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100
`},{name:`package.json`,path:`package.json`,added:4,removed:1,oldValue:`{
  "name": "api-server",
  "version": "1.0.0",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.0",
    "jsonwebtoken": "^9.0.0",
    "mysql2": "^3.6.0"
  }
}
`,newValue:`{
  "name": "api-server",
  "version": "1.1.0",
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^4.18.0",
    "express-rate-limit": "^7.1.0",
    "helmet": "^7.1.0",
    "jsonwebtoken": "^9.0.0",
    "mysql2": "^3.6.0"
  }
}
`}],S=[{label:`Unified`,value:`unified`,icon:(0,b.jsx)(i,{style:{width:14,height:14},"aria-hidden":`true`})},{label:`Split`,value:`split`,icon:(0,b.jsx)(r,{style:{width:14,height:14},"aria-hidden":`true`})}],C=`<DiffViewer
    variant={view}
    oldValue={selectedFile.oldValue}
    newValue={selectedFile.newValue}
    oldTitle={\`\${selectedFile.name} (before)\`}
    newTitle={\`\${selectedFile.name} (after)\`}
    wordDiff={wordDiff}
    ignoreWhitespace={ignoreWs}
    ignoreCase={ignoreCase}
    ignoreEmptyLines={ignoreEmpty}
    collapseUnchanged={3}
/>`,w=x.reduce((e,t)=>e+t.added,0),T=x.reduce((e,t)=>e+t.removed,0),E=()=>{let[e,t]=(0,y.useState)(0),[n,r]=(0,y.useState)(`unified`),[i,o]=(0,y.useState)(!0),[c,l]=(0,y.useState)(!1),[d,p]=(0,y.useState)(!1),[h,g]=(0,y.useState)(!1),_=x[e];return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{title:`Interactive Diff Viewer`,description:`File list on the left, diff on the right. Switch between unified and split view, toggle word highlighting and ignore options.`,children:(0,b.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:0},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:8,padding:`8px 12px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderBottom:`none`,borderRadius:`6px 6px 0 0`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,flexWrap:`wrap`},children:[(0,b.jsxs)(`span`,{style:{fontSize:`0.8rem`,fontWeight:600,color:`var(--eui-text)`},children:[x.length,` files changed`]}),(0,b.jsxs)(`span`,{style:{fontSize:`0.72rem`,fontWeight:600,color:`#16a34a`,background:`rgba(34,197,94,0.12)`,border:`1px solid rgba(34,197,94,0.25)`,borderRadius:4,padding:`1px 7px`},children:[`+`,w]}),(0,b.jsxs)(`span`,{style:{fontSize:`0.72rem`,fontWeight:600,color:`#dc2626`,background:`rgba(239,68,68,0.12)`,border:`1px solid rgba(239,68,68,0.25)`,borderRadius:4,padding:`1px 7px`},children:[`−`,T]})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:12,flexWrap:`wrap`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:14,alignItems:`center`,flexWrap:`wrap`},children:[(0,b.jsx)(a,{checked:i,onChange:e=>o(e.value),label:`Word diff`}),(0,b.jsx)(a,{checked:c,onChange:e=>l(e.value),label:`Ignore whitespace`}),(0,b.jsx)(a,{checked:d,onChange:e=>p(e.value),label:`Ignore case`}),(0,b.jsx)(a,{checked:h,onChange:e=>g(e.value),label:`Ignore empty lines`})]}),(0,b.jsx)(`div`,{style:{width:1,height:20,background:`var(--eui-border-subtle)`,flexShrink:0},"aria-hidden":`true`}),(0,b.jsx)(s,{items:S,value:n,size:`sm`,onChange:e=>r(e.value)})]})]}),(0,b.jsxs)(`div`,{style:{display:`flex`,border:`1px solid var(--eui-border-subtle)`,borderRadius:`0 0 6px 6px`,overflow:`hidden`,minHeight:520},children:[(0,b.jsxs)(`div`,{style:{width:220,flexShrink:0,borderRight:`1px solid var(--eui-border-subtle)`,background:`var(--eui-bg-subtle)`,display:`flex`,flexDirection:`column`,overflowY:`auto`},role:`list`,"aria-label":`Changed files`,children:[(0,b.jsx)(`div`,{style:{padding:`8px 10px 4px`,fontSize:`0.7rem`,fontWeight:700,textTransform:`uppercase`,letterSpacing:`0.06em`,color:`var(--eui-text-muted)`},children:`Files changed`}),x.map((n,r)=>(0,b.jsxs)(`button`,{role:`listitem`,onClick:()=>t(r),"aria-current":r===e?`true`:void 0,style:{display:`flex`,flexDirection:`column`,gap:2,padding:`7px 10px`,background:r===e?`var(--eui-primary-subtle, rgba(var(--eui-primary-rgb,59,130,246),0.1))`:`transparent`,borderLeft:r===e?`2px solid var(--eui-primary, #3b82f6)`:`2px solid transparent`,borderTop:`none`,borderRight:`none`,borderBottom:`1px solid var(--eui-border-subtle)`,cursor:`pointer`,textAlign:`left`,width:`100%`,boxSizing:`border-box`},children:[(0,b.jsx)(`span`,{style:{fontSize:`0.78rem`,fontWeight:r===e?600:400,color:r===e?`var(--eui-primary, #3b82f6)`:`var(--eui-text)`,fontFamily:`monospace`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,display:`block`},children:n.name}),(0,b.jsx)(`span`,{style:{fontSize:`0.68rem`,color:`var(--eui-text-muted)`,fontFamily:`monospace`,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`,display:`block`},children:n.path}),(0,b.jsxs)(`div`,{style:{display:`flex`,gap:5,marginTop:1},children:[(0,b.jsxs)(`span`,{style:{fontSize:`0.65rem`,fontWeight:600,color:`#16a34a`},children:[`+`,n.added]}),(0,b.jsxs)(`span`,{style:{fontSize:`0.65rem`,fontWeight:600,color:`#dc2626`},children:[`−`,n.removed]})]})]},r))]}),(0,b.jsxs)(`div`,{style:{flex:1,minWidth:0,display:`flex`,flexDirection:`column`},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,padding:`6px 12px`,background:`var(--eui-bg-subtle)`,borderBottom:`1px solid var(--eui-border-subtle)`},children:[(0,b.jsx)(`span`,{style:{fontSize:`0.78rem`,color:`var(--eui-text-muted)`,fontFamily:`monospace`,flex:1,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`},children:_.path}),(0,b.jsxs)(`span`,{style:{fontSize:`0.72rem`,fontWeight:600,color:`#16a34a`,whiteSpace:`nowrap`},children:[`+`,_.added]}),(0,b.jsxs)(`span`,{style:{fontSize:`0.72rem`,fontWeight:600,color:`#dc2626`,whiteSpace:`nowrap`},children:[`−`,_.removed]})]}),(0,b.jsx)(`div`,{style:{flex:1},children:(0,b.jsx)(m,{variant:n,oldValue:_.oldValue,newValue:_.newValue,oldTitle:`${_.name} (before)`,newTitle:`${_.name} (after)`,wordDiff:i,ignoreWhitespace:c,ignoreCase:d,ignoreEmptyLines:h,collapseUnchanged:3,maxHeight:480})})]})]})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(u,{code:C,language:`tsx`})})]})},D=`// Config file
const   HOST = "localhost";
const   PORT = 3000;

const   USER = "Admin";
const   PASS = "Secret";


const DB = "mydb";
const TIMEOUT = 30;
`,O=`// config file
const HOST = "localhost";
const PORT = 3000;
const user = "admin";
const pass = "secret";
const DB = "mydb";
const TIMEOUT = 30;
`,k=`<DiffViewer
    oldValue={oldText}
    newValue={newText}
    ignoreWhitespace
    ignoreCase
    ignoreEmptyLines
/>`,A=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(!1),[i,o]=(0,y.useState)(!1);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{title:`Ignore Options`,description:`Toggle whitespace, case, and empty-line sensitivity.`,children:(0,b.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:14},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:16,flexWrap:`wrap`,padding:`10px 14px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6},children:[(0,b.jsx)(a,{checked:e,onChange:e=>t(e.value),label:`Ignore whitespace`}),(0,b.jsx)(a,{checked:n,onChange:e=>r(e.value),label:`Ignore case`}),(0,b.jsx)(a,{checked:i,onChange:e=>o(e.value),label:`Ignore empty lines`})]}),(0,b.jsx)(m,{oldValue:D,newValue:O,ignoreWhitespace:e,ignoreCase:n,ignoreEmptyLines:i})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(u,{code:k,language:`tsx`})})]})},j=`<DiffViewer
    oldValue={oldLarge}
    newValue={newLarge}
    variant="split"
    collapseUnchanged
    maxLines={5000}
    maxHeight={500}
/>`,M=()=>{let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(2e3);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{title:`Large File Performance`,description:`Virtualized rendering. 2000+ lines diff smoothly. Use maxLines to cap comparison.`,children:(0,b.jsxs)(`div`,{style:{width:`100%`,display:`flex`,flexDirection:`column`,gap:14},children:[(0,b.jsxs)(`div`,{style:{display:`flex`,gap:10,flexWrap:`wrap`,alignItems:`center`,padding:`10px 14px`,background:`var(--eui-bg-subtle)`,border:`1px solid var(--eui-border-subtle)`,borderRadius:6},children:[(0,b.jsx)(`span`,{style:{fontSize:13,color:`var(--eui-text)`},children:`maxLines:`}),(0,b.jsx)(`div`,{style:{width:140},children:(0,b.jsx)(o,{value:n,onChange:e=>r(Number(e.value)||0)})}),(0,b.jsx)(c,{label:e?`Hide diff`:`Render 2000-line diff`,size:`sm`,variant:`primary`,onClick:()=>t(e=>!e)})]}),e&&(0,b.jsx)(m,{oldValue:g,newValue:v,variant:`split`,collapseUnchanged:!0,maxLines:n,maxHeight:480})]})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(u,{code:j,language:`tsx`})})]})},N=`<DiffViewer variant="split" oldValue={...} newValue={...} />
<DiffViewer variant="inline" oldValue={...} newValue={...} />
<DiffViewer variant="minimal" collapseUnchanged oldValue={...} newValue={...} />`,P=()=>(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(f,{title:`Split View`,description:`Side-by-side two-column layout.`,children:(0,b.jsx)(`div`,{style:{width:`100%`},children:(0,b.jsx)(m,{variant:`split`,oldValue:h,newValue:_,oldTitle:`before.js`,newTitle:`after.js`})})}),(0,b.jsx)(`div`,{className:`mt-4`,children:(0,b.jsx)(u,{code:N,language:`tsx`})}),(0,b.jsx)(`div`,{className:`mt-6`,children:(0,b.jsx)(f,{title:`Inline Diff`,description:`Compact inline word-level diff for small snippets.`,children:(0,b.jsx)(`div`,{style:{width:`100%`},children:(0,b.jsx)(m,{variant:`inline`,oldValue:h,newValue:_})})})}),(0,b.jsx)(`div`,{className:`mt-6`,children:(0,b.jsx)(f,{title:`Collapse Unchanged`,description:`Runs of unchanged lines are folded into context hunks.`,children:(0,b.jsx)(`div`,{style:{width:`100%`},children:(0,b.jsx)(m,{oldValue:h,newValue:_,collapseUnchanged:2})})})})]}),{diffProps:F}={diffProps:{oldValue:{type:`string`,description:`The old/before text.`},newValue:{type:`string`,description:`The new/after text.`},variant:{type:`'unified' | 'split' | 'inline' | 'minimal'`,default:`'unified'`,description:`Diff display style.`},oldTitle:{type:`string`,description:`Header label for the old side.`},newTitle:{type:`string`,description:`Header label for the new side.`},showLineNumbers:{type:`boolean`,default:`true`,description:`Show gutter line numbers.`},wordDiff:{type:`boolean`,default:`true`,description:`Highlight word-level changes inside replaced lines.`},collapseUnchanged:{type:`boolean | number`,default:`false`,description:`Fold unchanged runs. A number sets the context line count (default 3).`},maxHeight:{type:`number | string`,default:`480`,description:`Max scroll viewport height.`},ignoreWhitespace:{type:`boolean`,default:`false`,description:`Collapse whitespace runs when comparing.`},ignoreCase:{type:`boolean`,default:`false`,description:`Case-insensitive comparison.`},ignoreEmptyLines:{type:`boolean`,default:`false`,description:`Treat blank lines as equal.`},maxLines:{type:`number`,description:`Stop comparing after N lines. Larger files are truncated with a footer notice.`},rowHeight:{type:`number`,default:`22`,description:`Row pixel height used for virtualization.`},highlight:{type:`(line: string) => ReactNode`,description:`Custom syntax-highlight hook.`}}},I=[{id:`basic-usage`,title:`Basic Usage`,description:`Unified diff`},{id:`variants`,title:`Variants`,description:`Split, inline, minimal, collapse`},{id:`ignore`,title:`Ignore Options`,description:`Whitespace, case, empty lines`},{id:`bitbucket`,title:`Interactive Viewer`,description:`File list, view switcher, and all options`},{id:`large`,title:`Large Files`,description:`Virtualized rendering`},{id:`import`,title:`Import`,description:`Import statement`},{id:`props`,title:`Props`,description:`Component API`}],L={color:`var(--eui-text)`},R={color:`var(--eui-text-muted)`},z=()=>(0,b.jsxs)(l,{sectionNavItems:I,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h1`,{className:`text-2xl md:text-4xl font-bold mb-4`,style:L,children:`Diff Viewer`}),(0,b.jsx)(`p`,{className:`text-base md:text-xl`,style:R,children:`High-performance text diff viewer with unified, split, inline, and minimal variants. Handles very large files via row virtualization, supports ignore options and a configurable comparison cap.`})]}),(0,b.jsxs)(`section`,{id:`basic-usage`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Basic Usage`}),(0,b.jsx)(p,{})]}),(0,b.jsxs)(`section`,{id:`variants`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Variants`}),(0,b.jsx)(P,{})]}),(0,b.jsxs)(`section`,{id:`ignore`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Ignore Options`}),(0,b.jsx)(A,{})]}),(0,b.jsxs)(`section`,{id:`bitbucket`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Interactive Viewer`}),(0,b.jsx)(E,{})]}),(0,b.jsxs)(`section`,{id:`large`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Large Files`}),(0,b.jsx)(M,{})]}),(0,b.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Import`}),(0,b.jsx)(u,{code:`import { DiffViewer } from 'fluxo-ui';
import type { DiffViewerProps, DiffVariant } from 'fluxo-ui';`})]}),(0,b.jsxs)(`section`,{id:`props`,className:`scroll-mt-8`,children:[(0,b.jsx)(`h2`,{className:`text-2xl font-semibold mb-4`,style:L,children:`Props`}),(0,b.jsx)(d,{props:F})]})]});export{z as default};