// 泛型 不预先确定的数据类型，具体的类型在使用的时候才确定

interface Length {
	length: number
}
// T继承Length接口  约束数据类型
function log<T extends Length>(value: T): T {
	console.log('tag', value);
	console.log('tag', value.length);
	return value;
}
log([1, 2]);
log('1234');
log({length: 1});
log<string[]>(['a', 'b']); // 指定字符串数组
log(['a', 'b']);

// type Log = <T>(value: T) => T // 类型别名
// let myLog: Log = log;  // 泛型函数的实现

// interface Log<T = string> { // 泛型接口
// 	<T>(value: T): T
// }

// let myLog: Log = log; // 接口类型
// // myLog([{a: '1', b: '2'}, {c: '3', d: '4'}]);
// myLog({a: '1', b: '2'});

// 泛型不能应用于类的静态成员 static
class Log<T> {
	// static run(value: T) {
	run(value: T) {
		console.log(value);
		return value;
	}
}

let log1 = new Log<number>(); // 约束为number类型
log1.run(1);

let log2 = new Log(); // 可以任意类型
log2.run({a: 1, b: 2});
log2.run('2');


// 泛型的好处：
// 函数和类可以轻松地支持多种类型，增强程序的扩展性
// 不必谢多条函数重载，冗长的联合类型声明，增强代码可读性
// 灵活控制类型之间的约束关系


