// 类

// 抽象类  只能被继承  不能被实例化
// 可以抽出类的共性  有利于复用扩展，有利于多态

abstract class Animal { 
    // 方法复用
    eat() {
        console.log('eat');
    }

    abstract sleep(): void
}

// let animal = new Animal(); // 不能被实例化



// 类的修饰符

class Dog extends Animal{
    // private constructor(name: string) { // 如果构造函数被私有化，则不能实例化也不能被继承
    // protected constructor(name: string){ // 不能被实例化，只能继承
    constructor(name: string){
        super();
        this.name = name
    }
    public name?: string = 'dog'
    run() {}
    private pri() {}
    protected pro() {} // 受保护成员只能在类或者子类中访问，不能在实例中访问
    readonly legs: number = 4; // 只读，不可更改，一定要初始化
    static food: string = 'bones'; // 静态成员 只能通过类名调用，不能通过实例化调用

    sleep() {
        console.log('dog sleep');
    }
}

console.log(Dog.prototype);
let dog = new Dog('wangwang');
console.log(dog);
// dog.pri();
// dog.pro();
console.log(Dog.food); // 静态成员
dog.eat();


class Husky extends Dog {
    // 继承
    constructor(name: string, public color: string) { // 如果构造函数的传参添加public修饰符则需要被实例化
        super(name);
        this.color = color; // 在super后调用
        // this.pri(); // 私有
        this.pro(); // 受保护
    }
    // color: string;

}

console.log(Husky.food); // 静态成员


class Cat extends Animal {
    sleep() {
        console.log('Cat sleep');
    }
}
let cat = new Cat();

let animals: Animal[] = [dog, cat];
animals.forEach(i=>{
    i.sleep()
});


// 方法链式调用  继承时，this可以表示多态
class WorkFlow {
    step1() {
        return this;
    }
    step2() {
        return this;
    }
}

new WorkFlow().step1().step2();


class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
new MyFlow().next().step1().next().step2();  // 父类子类之家调用连贯性




