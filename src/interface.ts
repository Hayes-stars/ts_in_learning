// 接口
interface List {
  readonly id: number; // 只读属性
  name: string;
  // [x: string]: any; // 索引签名  就可以支持多个属性
  age?: number; // 问号代表可选属性
}
interface Result {
  data: List[];
}
function render(result: Result) {
  result.data.forEach(value => {
    console.log(value.id, value.name);
    if (value.age) {
      console.log(value.age);
    }
    // value.id++ // 只读属性不允许修改
  });
}
let result = {
  data: [
    { id: 1, name: "A", sex: "male" }, // ts 压式变形
    { id: 2, name: "B", age: 10 }
  ]
};
render(result); // 只要满足接口的必要条件，多余的字段也是可以验证通过

// 类型断言
// render(<Result>{
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, // ts 压式变形
//         {id: 2, name: 'B', age: 10}
//     ]
// }); // 可以绕过类型检查

// 类型断言
// render({
//     data: [
//         {id: 1, name: 'A', sex: 'male'}, // ts 压式变形
//         {id: 2, name: 'B', age: 10}
//     ]
// } as Result); // 可以绕过类型检查

interface StringArray {
  [index: number]: string;
}
let chars: StringArray = ["a", "b"];

interface Names {
  [x: string]: any;
  // y: number;
  // [z: number]: string;
  [z: number]: number;
}

// let add: (x: number, y: number) => number
// interface Add {
//     (x: number, y: number): number
// }
type Add = (x: number, y: number) => number; // 类型别名定义
// let add: Add =  (a, b) => a+b;
// let add: Add = (a: number, b: number) => a + b

// 混合类型接口
interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

// 函数类型
function getLib() {
  let lib = (() => {}) as Lib;
  lib.version = "1.0.0";
  lib.doSomething = () => {};
  return lib;
}
let lib1 = getLib();
lib1();
let lib2 = getLib();
lib2.doSomething();
