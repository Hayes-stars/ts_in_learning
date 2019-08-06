// 类型推断

// 基础类型
let a = 1;
let b = [1, null]; 

// let c = (x=1) => {};
let c = (x=1) => x=1;

window.onkeydown = (event) => {
  // console.log('tag', event.buttton)
}

// 使用

interface Foo{
  bar: number
}

// let foo = {} as Foo;
let foo: Foo = {
  bar: 1
}
// foo.bar = 1;



