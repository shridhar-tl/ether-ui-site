import"./rolldown-runtime-hePW80VL.js";import{i as e,o as t}from"./StoryThemeContext-De5ZWJ_M.js";import{t as n}from"./Carousel-CTkh9bI8.js";import{t as r}from"./CodeBlock-C1PblznF.js";import{t as i}from"./ComponentDemo-C0Y_0jmn.js";t();var a=e(),o=[{id:`s1`,type:`image`,src:`https://picsum.photos/seed/carousel1/800/400`,alt:`Mountain landscape`},{id:`s2`,type:`image`,src:`https://picsum.photos/seed/carousel2/800/400`,alt:`Ocean sunset`},{id:`s3`,type:`image`,src:`https://picsum.photos/seed/carousel3/800/400`,alt:`City skyline`},{id:`s4`,type:`image`,src:`https://picsum.photos/seed/carousel4/800/400`,alt:`Forest trail`},{id:`s5`,type:`image`,src:`https://picsum.photos/seed/carousel5/800/400`,alt:`Desert dunes`}],s=`import { Carousel } from 'fluxo-ui';
import type { CarouselSlide } from 'fluxo-ui';

const slides: CarouselSlide[] = [
  { id: 's1', type: 'image', src: '/photo1.jpg', alt: 'Mountain landscape' },
  { id: 's2', type: 'image', src: '/photo2.jpg', alt: 'Ocean sunset' },
  { id: 's3', type: 'image', src: '/photo3.jpg', alt: 'City skyline' },
];

<Carousel slides={slides} />`,c=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i,{title:`Image Carousel`,description:`A basic image carousel with dot navigation and arrow buttons.`,centered:!1,children:(0,a.jsx)(`div`,{className:`w-full max-w-2xl mx-auto`,children:(0,a.jsx)(n,{slides:o,aspectRatio:`16/9`})})}),(0,a.jsx)(`div`,{className:`mt-4`,children:(0,a.jsx)(r,{code:s,language:`tsx`})})]});export{c as default};