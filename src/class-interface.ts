// 类与接口的关系

interface Human {
  // new (name: string): void
  name: string;
  eat(): void;
}

// 类实现接口时，必须实现接口中所有的属性
// 接口只能约束类的公有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  // private name: string;
  eat() {}
  sleep() {}
}

// 接口可以相互继承
interface Man extends Human {
  run(): void;
}

interface Child {
  cry(): void;
}

interface Boy extends Man, Child {}
// 接口的继承可以抽离可以重用的接口，可以将多个接口合并为一个接口
let boy: Boy = {
  name: "",
  run() {},
  eat() {},
  cry() {}
};

// 接口继承类 只有类的结构 没有实现
// 接口在抽离类的成员的时候不仅抽离公共成员而且抽离了私有和受保护
class Auto {
  state = 1;
  // private state2 = 0;
}

// 要想实现AutoInterface 只需一个state属性
interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1;
}

class Bus extends Auto implements AutoInterface {}

// 接口  类  容易混淆的点：
// 接口之间可以相互继承   可以实现接口的复用
// 类之间可以相互继承    可以实现方法  属性的复用
// 接口可以通过类实现
// 接口只能约束类的公有成员  接口可以抽离出类的成员   抽离会包括 公有 私有受 保护
