// function identity<T>(arg: T): T {
//     return arg
// }
// //表示类型是 <T>(arg:T)=>T   也可以写成这样{<T>(arg:T):T}
// let myidentity: <T>(arg: T) => T = identity

// let myidentity2: { <T>(arg: T): T } = identity

// interface GenericIdentityFn<T> {  //写成接口
//     (arg: T): T;
// }

// let myidentity3: GenericIdentityFn<string> = identity


// console.log(myidentity3('阿萨德'))

// class GenericNumber<T>{
//     zeroValue?: T
//     add?: (x: T, y: T) => T
// }


// let myGenNum = new GenericNumber<number>();
// myGenNum.zeroValue = 0
// myGenNum.add = function (x, y) {
//     return x + y
// }

// console.log(myGenNum.add(2, 3))

// let myGenStr = new GenericNumber<string>();
// myGenStr.zeroValue = ""
// myGenStr.add = function (x, y) { return x + "" + y }




// interface legnthwise { //泛型约束
//     lenght: number;
// }

// function loggingId<T extends legnthwise>(arg: T): T {
//     console.log(arg.lenght)
//     return arg
// }



// let a  = {
//     a:'a'
// }
// let b = {
//     b:'b'
// }

// Object.assign(a,b)

// interface ObjectA {
//     a: string
// }
// interface ObjectB {
//     b: string
// }

// let A: ObjectA = {
//     a: 'a'
// }
// let B: ObjectB = {
//     b: 'b'
// }
// let AB: ObjectA & ObjectB = Object.assign(A, B) //交叉类型  对象的混入
// console.log(AB) //对象的混入


// class C {
//     funcC() {
//         console.log('C')
//     }
// }
// class D {
//     funcD() {
//         console.log('d')
//     }
// }
// const mixin = (target, from) => {
//     Object.getOwnPropertyNames(from).forEach(key => { })
// }
// const mixins = (target, from) => {
//     Object.getOwnPropertyNames(from).forEach(key => {
//         console.log(key)
//         basename[key] = from[key]
//     })
// }
// function getData<T>(value:T):T{
//     return value
// }
// getData<number>(123)



// function getKey<T,K extends keyof T>(obj:T,key:K){ //extend 表示约束关键字  k extend keyof T 表示K是T里面的KEY
//     return obj[key]
//   }
  
  
//   function create<T>( c:new()=>T ):T{ // c:new()=>T 表示是构造器类型 返回的是T的实例
//       return new c();
//   }
//   class Student{
//       constructor(){
  
//       }
//       say(){
//           console.log('student say')
//       }
//   }
  
//   let  result =create<Student>(Student)  //固定写法