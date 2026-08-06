import{r as e}from"./rolldown-runtime-hePW80VL.js";import{a as t,i as n,o as r,r as i}from"./StoryThemeContext-De5ZWJ_M.js";import{t as a}from"./PageLayout-DSwLk1XV.js";import{t as o}from"./CodeBlock-C1PblznF.js";import{t as s}from"./PropsTable-B4RgQiZf.js";import{t as c}from"./FeatureCard-D_o4IlGr.js";var l=e(t(),1);r();var u=n(),d=`import { createContainer } from 'fluxo-ui/services';

const services = createContainer();

// Class with static dependencies — constructor args are auto-resolved
class LoggerService {
    log(message: string) {
        console.log(\`[LOG] \${message}\`);
    }
}

class UserRepository {
    static dependencies = ['LoggerService'];

    constructor(private $logger: LoggerService) {}

    findById(id: string) {
        this.$logger.log(\`Finding user \${id}\`);
        return { id, name: 'John Doe' };
    }
}

// Register classes — chained
services
    .registerSingleton(LoggerService, 'LoggerService', '$logger')
    .registerSingleton(UserRepository, 'UserRepository', '$userRepo');

// Resolve by name — container instantiates and injects dependencies
const { $userRepo } = services.resolve('UserRepository');
$userRepo.findById('123'); // Logs: [LOG] Finding user 123

// Resolve multiple at once
const { $logger, $userRepo: repo } = services.resolve('LoggerService', 'UserRepository');`,f=`// With interfaces — register different implementations under the same name
interface ILogger {
    log(message: string): void;
    warn(message: string): void;
}

class ConsoleLogger implements ILogger {
    log(message: string) { console.log(message); }
    warn(message: string) { console.warn(message); }
}

class SilentLogger implements ILogger {
    log(_message: string) { /* noop */ }
    warn(_message: string) { /* noop */ }
}

// Register whichever implementation you need
services.registerSingleton<ILogger>(
    import.meta.env.PROD ? SilentLogger : ConsoleLogger,
    'LoggerService',
    '$logger'
);

// Consumer just uses the interface — doesn't know which class is behind it
const { $logger } = services.resolve<{ $logger: ILogger }>('LoggerService');
$logger.log('works with any implementation');`,p=`// Factory-based — no class needed, just return an object
services.registerSingletonFactory<ILogger>(
    'LoggerService',
    '$logger',
    () => ({
        log: (message: string) => console.log(\`[APP] \${message}\`),
        warn: (message: string) => console.warn(\`[APP] \${message}\`),
    })
);

// Factory with dependencies — resolver gives access to other services
services.registerSingletonFactory(
    'NotificationService',
    '$notification',
    (resolver) => {
        const logger = resolver.resolve<ILogger>('LoggerService');
        return {
            notify(message: string) {
                logger.log(\`Notification: \${message}\`);
            },
        };
    },
    ['LoggerService'] // declare deps for circular detection
);

const { $notification } = services.resolve('NotificationService');
$notification.notify('Hello!'); // Logs: [APP] Notification: Hello!`,m=()=>(0,u.jsxs)(`div`,{className:`space-y-6`,children:[(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Class-Based Registration`}),(0,u.jsx)(o,{code:d,language:`typescript`})]}),(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`With Interfaces`}),(0,u.jsx)(o,{code:f,language:`typescript`})]}),(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Factory-Based Registration`}),(0,u.jsx)(o,{code:p,language:`typescript`})]})]}),h=`import { createContainer } from 'fluxo-ui/services';

const services = createContainer();

class CounterService {
    private value = 0;
    increment() { return ++this.value; }
    getValue() { return this.value; }
}

// SINGLETON (default) — same instance every time
services.registerSingleton(CounterService, 'CounterService', '$counter');

const { $counter: a } = services.resolve('CounterService');
const { $counter: b } = services.resolve('CounterService');
a.increment(); // 1
b.increment(); // 2 — same instance
console.log(a === b); // true


// TRANSIENT — new instance every time
services.registerTransient(CounterService, 'CounterService', '$counter');

const { $counter: c } = services.resolve('CounterService');
const { $counter: d } = services.resolve('CounterService');
c.increment(); // 1
d.increment(); // 1 — different instances
console.log(c === d); // false


// SCOPED — one instance per scope, different across scopes
services.registerScoped(CounterService, 'CounterService', '$counter');

const scope1 = services.createScope();
const scope2 = services.createScope();

const e = scope1.resolve<CounterService>('CounterService');
const f = scope1.resolve<CounterService>('CounterService');
const g = scope2.resolve<CounterService>('CounterService');

e.increment(); // 1
f.increment(); // 2 — same scope, same instance
g.increment(); // 1 — different scope, different instance

scope1.dispose();
scope2.dispose();


// Factory-based works with all lifetimes too
services.registerScopedFactory(
    'RequestContext', '$reqCtx',
    () => ({ requestId: crypto.randomUUID(), startedAt: Date.now() })
);


// RETAIN — singleton that survives clearInstances()
services.registerSingleton(CounterService, 'CounterService', '$counter', { retain: true });`,g=()=>(0,u.jsx)(`div`,{className:`space-y-4`,children:(0,u.jsx)(o,{code:h,language:`typescript`})}),_=`import { createContainer } from 'fluxo-ui/services';

const services = createContainer();

// A singleton auth service
class AuthService {
    getTokenForUser(userId: string) {
        return \`bearer-token-for-\${userId}\`;
    }
}

services.registerSingleton(AuthService, 'AuthService', '$auth');

// Parameterized — userId is passed at resolution time
// The factory receives (resolver, ...args)
services.registerParameterized(
    'ApiClient', '$api', 'scoped',
    (resolver, userId: string) => {
        const auth = resolver.resolve<AuthService>('AuthService');
        const token = auth.getTokenForUser(userId);

        return {
            userId,
            get: async (path: string) => {
                console.log(\`GET \${path} as \${userId} with \${token}\`);
                return { data: 'response' };
            },
        };
    }
);

// Resolve with arguments
const scope = services.createScope();
const client = scope.resolveWithArgs('ApiClient', 'user-42');
await client.get('/api/profile');
// Logs: GET /api/profile as user-42 with bearer-token-for-user-42

// Same args in same scope → same instance (scoped lifetime)
const client2 = scope.resolveWithArgs('ApiClient', 'user-42');
console.log(client === client2); // true

// Different args → different instance
const client3 = scope.resolveWithArgs('ApiClient', 'user-99');
console.log(client === client3); // false

scope.dispose();`,v=()=>(0,u.jsx)(`div`,{className:`space-y-4`,children:(0,u.jsx)(o,{code:_,language:`typescript`})}),y=`import { createContainer, ServiceProvider, ServiceScope } from 'fluxo-ui/services';

const services = createContainer();

// Class-based
class ThemeService {
    primary = '#2563eb';
    toggle() { /* ... */ }
}

services.registerSingleton(ThemeService, 'ThemeService', '$theme');

// Factory-based
services.registerTransientFactory(
    'ApiService', '$api',
    () => ({
        fetch: (url: string) => window.fetch(url).then(r => r.json()),
    })
);

// Parameterized
services.registerParameterized(
    'UserApiService', '$userApi', 'scoped',
    (resolver, userId: string) => {
        const api = resolver.resolve('ApiService');
        return {
            getProfile: () => api.fetch(\`/api/users/\${userId}\`),
            getActivity: () => api.fetch(\`/api/users/\${userId}/activity\`),
        };
    }
);

// App root — defaultParams provides fallback args for parameterized services
function App() {
    const userId = useCurrentUserId();

    return (
        <ServiceProvider container={services} defaultParams={{ UserApiService: [userId] }}>
            <Dashboard />
            <ServiceScope>
                <UserPanel />
            </ServiceScope>
        </ServiceProvider>
    );
}`,b=`import { useService, useServiceWithArgs, useContainer } from 'fluxo-ui/services';

// useService — resolve by name, get { $shortName: instance }
function Dashboard() {
    const { $theme, $api } = useService('ThemeService', 'ApiService');

    return (
        <div style={{ color: $theme.primary }}>
            <button onClick={() => $api.fetch('/api/stats')}>Load Stats</button>
        </div>
    );
}

// useServiceWithArgs — uses defaultParams from ServiceProvider if no args passed
function UserPanel() {
    const userApi = useServiceWithArgs('UserApiService');

    // Or override with explicit args
    const adminApi = useServiceWithArgs('UserApiService', 'admin-user-id');

    return (
        <div>
            <button onClick={() => userApi.getProfile()}>My Profile</button>
            <button onClick={() => adminApi.getActivity()}>Admin Activity</button>
        </div>
    );
}

// useContainer — direct access to the container
function AdminPanel() {
    const container = useContainer();
    const resetAll = () => container.clearInstances();
    return <button onClick={resetAll}>Reset Services</button>;
}`,x=`import { withServices } from 'fluxo-ui/services';

function ProfileComponent({ $theme, $api, username }) {
    return (
        <div style={{ color: $theme.primary }}>
            <h2>{username}</h2>
            <button onClick={() => $api.fetch('/profile')}>Refresh</button>
        </div>
    );
}

const Profile = withServices(ProfileComponent, {
    services: ['ThemeService', 'ApiService'],
});

// Usage — only pass non-injected props
<Profile username="Jane Doe" />`,S=`import { ServiceScope, useScope } from 'fluxo-ui/services';

// ServiceScope auto-creates and disposes a scope on mount/unmount
function RequestHandler() {
    return (
        <ServiceScope>
            <RequestContent />
        </ServiceScope>
    );
}

function RequestContent() {
    const scope = useScope();

    // All scoped services resolved here share the same scope
    const db = scope.resolve('DbConnection');
    const logger = scope.resolve('LoggerService');

    // Scope auto-disposes on unmount
    return <div>...</div>;
}`,C=()=>(0,u.jsxs)(`div`,{className:`space-y-6`,children:[(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Provider Setup`}),(0,u.jsx)(o,{code:y,language:`tsx`})]}),(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Hooks`}),(0,u.jsx)(o,{code:b,language:`tsx`})]}),(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Higher-Order Component`}),(0,u.jsx)(o,{code:x,language:`tsx`})]}),(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Scopes`}),(0,u.jsx)(o,{code:S,language:`tsx`})]})]}),w=`import { createContainer } from 'fluxo-ui/services';

const services = createContainer();

// Define interface
interface IBrowserService {
    openUrl(url: string): void;
    getStorage(key: string): string | null;
}

// Different class implementations
class ChromeBrowserService implements IBrowserService {
    openUrl(url: string) { chrome.tabs.create({ url }); }
    getStorage(key: string) { return localStorage.getItem(key); }
}

class FirefoxBrowserService implements IBrowserService {
    openUrl(url: string) { browser.tabs.create({ url }); }
    getStorage(key: string) { return localStorage.getItem(key); }
}

class DevBrowserService implements IBrowserService {
    openUrl(url: string) { console.log('DEV: would open', url); }
    getStorage(key: string) { return sessionStorage.getItem(key); }
}

// Register the right one based on environment
const browserType = detectBrowser();

if (browserType === 'chrome') {
    services.registerSingleton<IBrowserService>(ChromeBrowserService, 'BrowserService', '$browser');
} else if (browserType === 'firefox') {
    services.registerSingleton<IBrowserService>(FirefoxBrowserService, 'BrowserService', '$browser');
} else {
    services.registerSingleton<IBrowserService>(DevBrowserService, 'BrowserService', '$browser');
}

// Consumer code doesn't care which implementation
class NotificationService {
    static dependencies = ['BrowserService'];
    constructor(private $browser: IBrowserService) {}

    notify(message: string, link?: string) {
        console.log(message);
        if (link) this.$browser.openUrl(link);
    }
}

services.registerSingleton(NotificationService, 'NotificationService', '$notification');
const { $notification } = services.resolve('NotificationService');
$notification.notify('New PR!', 'https://github.com/...');`,T=`// Same pattern works with factories
if (import.meta.env.PROD) {
    services.registerSingletonFactory<IBrowserService>(
        'BrowserService', '$browser',
        () => new ChromeBrowserService()
    );
} else {
    services.registerSingletonFactory<IBrowserService>(
        'BrowserService', '$browser',
        () => ({
            openUrl: (url: string) => console.log('Mock open:', url),
            getStorage: (key: string) => sessionStorage.getItem(key),
        })
    );
}

// Re-registering clears all non-retained singleton caches automatically
services.registerSingleton<IBrowserService>(DevBrowserService, 'BrowserService', '$browser');
// ^ All services that depended on BrowserService will get fresh instances next resolve`,E=()=>(0,u.jsxs)(`div`,{className:`space-y-6`,children:[(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Swapping Classes`}),(0,u.jsx)(o,{code:w,language:`typescript`})]}),(0,u.jsxs)(`div`,{className:`space-y-4`,children:[(0,u.jsx)(`h3`,{className:`text-lg font-medium`,children:`Swapping with Factories`}),(0,u.jsx)(o,{code:T,language:`typescript`})]})]}),D=[{id:`basic`,title:`Basic Usage`,description:`Classes, interfaces, factories`},{id:`lifetimes`,title:`Lifetimes`,description:`Singleton, scoped, transient`},{id:`parameterized`,title:`Parameterized`,description:`Factory with arguments`},{id:`swapping`,title:`Swapping Implementations`,description:`Replace classes at runtime`},{id:`react-integration`,title:`React Integration`,description:`Hooks, HOC, scopes`},{id:`import`,title:`Import`,description:`Import statement`},{id:`container-api`,title:`Container API`,description:`Core methods`},{id:`react-api`,title:`React API`,description:`React hooks and components`},{id:`features`,title:`Features`,description:`Feature summary`}],O=[{title:`Class & Factory Registration`,description:`Register service classes with static dependency arrays, or plain factory functions returning objects. Both support interface typing.`},{title:`3 Lifetimes`,description:`Singleton (one instance), scoped (per-scope), and transient (always new) lifetime management.`},{title:`Parameterized Factories`,description:`Register factories that accept arguments at resolution time for dynamic, user-scoped service creation.`},{title:`Implementation Swapping`,description:`Register different classes or factories under the same service name to swap implementations by environment or config.`},{title:`Circular Dependency Detection`,description:`Detects circular dependencies at registration time and throws descriptive errors with the full dependency chain.`},{title:`React Integration`,description:`ServiceProvider with default params, ServiceScope for isolation, useService hook, useContainer, and withServices HOC.`}],k={registerSingleton:{type:`(Class, name, shortName, opts?) => this`,description:`Register a class as singleton. The class can have a static dependencies array. Constructor args are auto-resolved. Chainable.`},registerScoped:{type:`(Class, name, shortName, opts?) => this`,description:`Register a class as scoped — one instance per scope. Chainable.`},registerTransient:{type:`(Class, name, shortName, opts?) => this`,description:`Register a class as transient — new instance every resolve. Chainable.`},registerSingletonFactory:{type:`(name, shortName, factory, deps?, opts?) => this`,description:`Register a factory function as singleton. Factory receives (resolver) and returns an object. Chainable.`},registerScopedFactory:{type:`(name, shortName, factory, deps?, opts?) => this`,description:`Register a factory function as scoped. Chainable.`},registerTransientFactory:{type:`(name, shortName, factory, deps?, opts?) => this`,description:`Register a factory function as transient. Chainable.`},registerParameterized:{type:`(name, shortName, lifetime, factory, opts?) => this`,description:`Register a parameterized factory. The factory receives (resolver, ...args) and is called with args at resolution time. Chainable.`},resolve:{type:`(...serviceNames) => { $shortName: instance }`,description:`Resolve one or more services by name. Returns an object keyed by short names (e.g. $dashboard, $session).`},resolveScoped:{type:`(...serviceNames) => { $shortName: instance }`,description:`Same as resolve but creates a fresh scope — scoped services get new instances.`},resolveWithArgs:{type:`(serviceName, ...args) => instance`,description:`Resolve a parameterized service by passing arguments to its factory.`},createScope:{type:`() => ScopeHandle`,description:`Create an isolated scope. Scoped services are cached per scope. Call dispose() to clean up.`},clearInstances:{type:`() => void`,description:`Clear all cached singleton instances (except retained ones). Calls dispose() on disposable instances.`},clearService:{type:`(name) => void`,description:`Clear the cached instance for a specific service only.`},has:{type:`(name) => boolean`,description:`Check whether a service is registered under the given name.`}},A={ServiceProvider:{type:`React.FC<{ container, defaultParams?, children }>`,description:`Provides the container and default parameters for parameterized services. If useServiceWithArgs is called without args, these defaults are used.`},ServiceScope:{type:`React.FC<{ children }>`,description:`Creates an isolated scope for scoped services. Auto-disposes on unmount.`},useService:{type:`(...serviceNames) => { $shortName: instance }`,description:`Resolve services by name within the nearest scope (or container if no scope). Returns keyed object.`},useServiceWithArgs:{type:`(serviceName, ...args) => instance`,description:`Resolve a parameterized service. Uses ServiceProvider defaultParams if no args passed.`},useScope:{type:`() => ScopeHandle`,description:`Access the current scope handle directly. Must be within a ServiceScope.`},useContainer:{type:`() => ServiceContainer`,description:`Access the container directly for advanced registration or resolution.`},withServices:{type:`(Component, config) => WrappedComponent`,description:`HOC that injects resolved services as props. Config specifies service names and parameterized args.`}},j=()=>{let{isDark:e}=i(),t=(0,l.default)(`text-2xl font-semibold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),n=(0,l.default)(`text-sm mb-4`,{"text-gray-400":e,"text-gray-500":!e});return(0,u.jsxs)(a,{sectionNavItems:D,children:[(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h1`,{className:(0,l.default)(`text-2xl md:text-4xl font-bold mb-4`,{"text-gray-100":e,"text-gray-900":!e}),children:`Dependency Injection`}),(0,u.jsx)(`p`,{className:(0,l.default)(`text-base md:text-xl`,{"text-gray-400":e,"text-gray-600":!e}),children:`A class-based dependency injection container. Register service classes with static dependency arrays, swap implementations by environment, and resolve by name — the container handles instantiation and wiring.`})]}),(0,u.jsxs)(`section`,{id:`basic`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`Basic Usage`}),(0,u.jsx)(`p`,{className:n,children:`Register classes with injectable(), declare dependencies via static arrays, and resolve by name. The container instantiates the class and injects its dependencies as constructor arguments.`}),(0,u.jsx)(m,{})]}),(0,u.jsxs)(`section`,{id:`lifetimes`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`Service Lifetimes`}),(0,u.jsx)(`p`,{className:n,children:`Control instance caching: singleton (default, one instance forever), scoped (one per scope), transient (always new), and retain (survives clearInstances).`}),(0,u.jsx)(g,{})]}),(0,u.jsxs)(`section`,{id:`parameterized`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`Parameterized Services`}),(0,u.jsx)(`p`,{className:n,children:`Register factories that receive arguments at resolution time. The factory also receives a resolver to access other services. Arguments become part of the cache key for singleton and scoped lifetimes.`}),(0,u.jsx)(v,{})]}),(0,u.jsxs)(`section`,{id:`swapping`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`Swapping Implementations`}),(0,u.jsx)(`p`,{className:n,children:`Register different classes under the same service name based on environment, config, or runtime conditions. Consumer code resolves by name and never knows which implementation it gets.`}),(0,u.jsx)(E,{})]}),(0,u.jsxs)(`section`,{id:`react-integration`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`React Integration`}),(0,u.jsx)(`p`,{className:n,children:`ServiceProvider supplies default parameters for parameterized services. ServiceScope creates isolated scopes that auto-dispose on unmount. Hooks and HOC for consuming services in components.`}),(0,u.jsx)(C,{})]}),(0,u.jsxs)(`section`,{id:`import`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`Import`}),(0,u.jsx)(o,{code:`import {
    createContainer,
    ServiceContainer,
    ServiceProvider,
    ServiceScope,
    useService,
    useServiceWithArgs,
    useScope,
    useContainer,
    withServices,
} from 'fluxo-ui/services';

// Create a container
const services = createContainer();

// Class-based registration (chainable)
services
    .registerSingleton(MyClass, 'MyService', '$myService')
    .registerScoped(OtherClass, 'OtherService', '$other')
    .registerTransient(AnotherClass, 'AnotherService', '$another');

// Factory-based registration (chainable)
services
    .registerSingletonFactory('MyService', '$myService', (resolver) => ({ ... }))
    .registerScopedFactory('OtherService', '$other', (resolver) => ({ ... }))
    .registerTransientFactory('AnotherService', '$another', (resolver) => ({ ... }));

// Parameterized (chainable)
services.registerParameterized('UserApi', '$userApi', 'scoped', (resolver, userId) => ({ ... }));`})]}),(0,u.jsxs)(`section`,{id:`container-api`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`Container API`}),(0,u.jsx)(s,{props:k})]}),(0,u.jsxs)(`section`,{id:`react-api`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:t,children:`React API`}),(0,u.jsx)(s,{props:A})]}),(0,u.jsxs)(`section`,{id:`features`,className:`scroll-mt-8`,children:[(0,u.jsx)(`h2`,{className:(0,l.default)(`text-2xl font-semibold mb-6`,{"text-gray-100":e,"text-gray-900":!e}),children:`Features`}),(0,u.jsx)(c,{features:O})]})]})};export{j as default};