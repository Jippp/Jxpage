import { ComponentType, lazy } from "react";

// const delay = (time: number) => {
//   let timer: NodeJS.Timer;
//   return new Promise(
//     (resolve) =>
//       (timer = setTimeout(() => {
//         clearTimeout(timer);
//         resolve("");
//       }, time)),
//   );
// };

const delayLazy = (acComp: () => Promise<{ default: ComponentType<any> }>) => {
  // return lazy(() => delay(500).then(() => acComp()));
  return lazy(() => acComp());
};

export default delayLazy;
