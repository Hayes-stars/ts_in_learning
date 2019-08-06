// 类型兼容

// 口诀：
// 结构之间兼容：成员少的兼容成员多的
// 函数之间兼容：参数多的兼容参数少的

/*
 * X（目标类型） = Y（源类型），X 兼容 Y
 */

 let s: string = 'a';
//  s = null; 

// 接口兼容性
interface X {
  a: any;
  b: any;
}
interface Y {
  a: any;
  b: any;
  c: any;
}
let xx: X = {a: 1, b: 2};
let yy: Y = {a: 1, b: 2, c: 3};
xx = yy;
// yy = xx
// 原类型必须具备目标类型的必要属性
// 接口相互兼容，成员少的兼容成员多的


// 函数兼容性
type Handler = (a: number, b: number) => void;
function hof(handler: Handler) {
    return handler;
}

//1:参数个数
let handler1 = (a: number) => {};
hof(handler1);
let handler2 = (a: number, b: number, c: number) => {};
// hof(handler2) // 参数超过目标参数


// 可选参数和剩余参数
let aa = (p1: number, p2: number) => {};
let bb = (p1?: number, p2?: number) => {};
let cc = (...args: number[]) => {};
aa = bb;
aa = cc;
// bb = aa;
// bb = cc;
cc = aa;
cc = bb;

//2:参数类型
let handler3 = (a: string) => {}
// hof(handler3); // 类型不兼容


interface Point3D {
  x: number;
  y: number;
  z: number;
}
interface Point2D {
  x: number;
  y: number;
}
let p3d = (point: Point3D) => {}
let p2d = (point: Point2D) => {}
p3d = p2d;
// p2d = p3d 参数多的兼容参数少的


//3：返回值类型
let ff = () => ({name: 'Alice'})
let gg = () => ({name: 'Alice', location: 'Beijing'})
ff = gg
// gg = ff

// 函数重载
function overload(a: number, b: number): number
function overload(a: string, b: string): string
function overload(a: any, b: any): any {}
// function overload(a: any): any {}
// function overload(a: any, b: any, c: any): any {}
// function overload(a: any, b: any) {}

// 枚举兼容性
enum Fruit { Apple, Banana }
enum Color { Red, Yellow }
let fruit: Fruit.Apple = 1
let no: number = Fruit.Apple
// let color: Color.Red = Fruit.Apple
console.log('tag', no)


// 类兼容性
class A {
  constructor(p: number, q: number) {}
  id: number = 1
  private name: string = ''
}
class B {
  static s = 1
  constructor(p: number) {}
  id: number = 2
  private name: string = ''
}
class CX extends A {}
let aaa = new A(1, 2)
let bbb = new B(1)
// aaa = bbb
// bbb = aaa
let ccc = new CX(1, 2)
aaa = ccc
ccc = aaa


// 泛型兼容性
interface Empty<T> {
  value: T
}
// let obj1: Empty<number> = {};
// let obj2: Empty<string> = {};
// obj1 = obj2

let logg1 = <T>(x: T): T => {
  console.log('x')
  return x
}
let logg2 = <U>(y: U): U => {
  console.log('y')
  return y
}
logg1 = logg2


