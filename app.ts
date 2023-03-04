export {}
// var message:string = "Hello World" 
// console.log(message)

// var sum : number=100
// console.log(sum);


// var sum1:string= <string> <any> sum


// interface add{
//     user:string,
//     age:Number
// }
// function stn(per:add){
//     return 'hello'+per.user+per.age+'world'
// }
// let find={
//     user:'zz',
//     age:20
// }
// console.log(stn(find));

// 创建一个类
// class Stu {
//     userall:string
// 创建一个构造器
//constructor(public user:string,public password:number){
//              this.userall=user+password
//     }
// }
// 创建一个接口
// interface add{
//     user:string,
//     password:number

// }

// function Findall(per:add){
//     return 'hello'+per.user+per.password
// }

// let User=new Stu('world',200)
// let find={
//         user:'zz',
//         password:20
//     }

// console.log(Findall(User));

// interface add{
//     user:string,
//     age:number,
//     password:number
// }

// let test:Array<add>=[
//     {
//         user:'hello',
//         age:20,
//         password:200
//     },
//     {
//         user:'hello',
//         age:20,
//         password:200
//     }

// ]
// console.log(test);

// let testname:add=test[0]

// enum testcs{
//     a=1,
//     b=2
// }
// let cstest=testcs.b
// console.log(cstest);


// let list:any[]=['ss',true]
// console.log(list);
// list[0]=100
// console.log(list);


// interface add{
//     user:string,
//     name:string,
//     age:number
// }
// function test(add:add){
//     return add.name+add.user+add.age
// }
// let nihao='ssss'
// let hello:add={
//     user:'name',
//     name:'zxp',
//     age:100

// }
// console.log(test(hello));
// console.log(nihao);


// let test:string="123456"
// let ss:number=<any>test
// console.log(ss);

// function find(){
//     for (let index = 0; index < 10; index++) {
//        setTimeout(()=>{
//         console.log(index);
//        },100*index)
        
//     }

// }
// find()


// let sum:number[]=[1,2]
// let [sum1,sum2]=sum
// console.log(sum1);
// function f([s1,s2]:number[]){
//     console.log(s1);
//     console.log(s2);
    
    
// }
// f(sum)
// f([sum1,sum2])

// let [f1,...f2]=[1,2,3,4,5,6,7]
// console.log(f1);
// console.log(f2);


interface ss{
    a:number,
    b:number,
    c:number
}
let s:ss={
    a:2,
    b:3,
    c:6
}

let {a,b}=s
console.log(a);
console.log(b);










