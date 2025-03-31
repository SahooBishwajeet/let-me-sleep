// import * as runtime from "react/jsx-runtime";
// import Image from "next/image";
// import { Callout } from "./callout";

// const useMDXComponent = (code: string) => {
//   const fn = new Function(code);
//   return fn({ ...runtime }).default;
// };

// const components = {
//   Image,
//   Callout,
// };

// interface MdxProps {
//   code: string;
// }

// export function MDXContent({ code }: MdxProps) {
//   const Component = useMDXComponent(code);
//   return <Component components={components} />;
// }

import Image from "next/image";
import * as runtime from "react/jsx-runtime";
import { Callout } from "./callout";
import { Flowchart, FlowchartStep } from "./flowchart";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

const components = {
  Image,
  Callout,
  Flowchart,
  FlowchartStep,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
