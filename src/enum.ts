// 一组具有名字的常量集合
// 数字枚举
// 反向映射
// var Role;
// (function (Role) {
//     Role[Role["Reporter"] = 1] = "Reporter";
//     Role[Role["Developer"] = 2] = "Developer";
//     Role[Role["Maintainer"] = 3] = "Maintainer";
//     Role[Role["Owner"] = 4] = "Owner";
//     Role[Role["Guest"] = 5] = "Guest";
// })(Role || (Role = {}));

enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter);
console.log(Role);

// 字符串枚举 不可反向映射
enum Message {
  Success = "恭喜你，成功了",
  Fail = "抱歉，失败了"
}

// 异构枚举
enum Answer {
  N,
  Y = "Yes"
}

// 枚举成员
// Role.Reporter = 2
enum Char {
  // const member
  a,
  b = Char.a,
  c = 1 + 3,
  // computed member
  d = Math.random(),
  e = "123".length,
  f = 4
}

// 常量枚举  不需要对象，只需要对象值
const enum Month {
  Jan,
  Feb,
  Mar,
  Apr = Month.Mar + 1
  // May = () => 5
}
let month = [Month.Jan, Month.Feb, Month.Mar];

// 枚举类型
enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = "apple",
  b = "banana"
}

let e: E = 3;
let f: F = 3;
// console.log(e === f)  不同类型的枚举不能进行比较

let e1: E.a = 3;
let e2: E.b = 3;
let e3: E.a = 3;
// console.log(e1 === e2)
// console.log(e1 === e3)

let g1: G = G.a;
let g2: G.a = G.a;
