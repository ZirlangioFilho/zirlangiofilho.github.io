declare module 'swiper/css';
declare module 'swiper/css/pagination';
declare module 'swiper/css/navigation';

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.svg?react' {
  import React from 'react';
  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}