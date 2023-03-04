// var sf=function(){
//     var sm='hello';
//     (function(){
//         var st='world'
//         return sm='world'
//     }())
//     return sm
    
// }
// console.log(sf());


// var inn;
// var f=function(){
//     var st="hrllo";
//     var n=function(){
//         return st
//     }
//     inn=n
// }
// console.log(f());
// console.log(inn());


// function f(par){
//     var n=function(){
//         return par
//     }
//     par++
//     console.log(par);
//     return n
// }
// let ss=f(123)
// console.log(ss())


// let f=function (){
//     let arr =[];
//     for(let i=0;i<5;i++){
//         arr[i]=function(){
//             return i
//         }
//     }
//     return arr
// }
// let arr=f()
// console.log(arr[2]());
// console.log(arr=f()[2]());


// let o={
//     color:"blue",
//     say:function (){
//         console.log(this.color);
//     }
// }


// function say(){
//     this.color='red'
//     console.log(this.color);
// }

// // this.color='red'
// let say1=()=>console.log(this.color)
// // this.color='red'
// // console.log(this.color);
// say()
// say1()

// o.say()


// function k(){
//     this.name='hello';
//     // setTimeout (()=>console.log(this.ss),1000)
//     (()=>console.log(this.name))()
// }
// function q(){
//     this.ss='world';
//     // (function ss(){
//     //     console.log(this.ss)
//     // })()
//     setTimeout(function(){
//         console.log(this.name)
//     }),1000
// }
// k()
// q()


// function fac(sum){
//     if(sum<=1){
//         return 1
//     }else{
//         return sum*arguments.callee(sum-1)
//     }
    
// }
// console.log(fac(5));
// let ss=fac
// fac=function(){
//     return 0
// }
// console.log(ss(2));
// console.log(fac(0));

// function outr(){
//     inn()
// }
// function inn(){
//     // console.log(arguments.callee.caller);
//     console.log(inn.caller);
// }
// outr()


// function king(){
//     console.log(new.target);
// }
// new king()
// king()

// function sum(sun1,sun2){
//     return sun1+sun2

// }
// function callsum(sun1,sun2){
//     return sum.apply(this,arguments)
// }
// function callsum2(sun1,sun2){
//     return sum.apply(this,[sun1,sun2])
// }
// console.log(callsum(1,2));
// console.log(callsum2(1,2));


// this.color='red'
// o={
//     color:'blue'
// }
// function su(){
//     console.log(this.color);
// }

// let obt=su.bind(this)
// obt()
// su.call(this)
// su.call(o)



// st()
// function st(){
//     console.log('hello');
// }


// function st(s,a){
//     // console.log(1+2);
//     let at=arguments.callee.caller;
//     return function(){
//         console.log(arguments);
//     }

// }
// st(1,2)()



// function foo(a,b){ 
//     this.test='new'
   
//     // console.log(arguments.callee.prototype.color);
//     console.log(this.color);
//     return a+b
// }
// // console.log(foo.length); 
// // console.log(typeof foo.prototype);
// foo.prototype={
//     color:'hello'
// }

// var fot=new foo()
// console.log(foo.prototype.color);

// foo.prototype.get=function(name){
//     return this[name]
// }
// console.log(fot.get('color'));
// console.log(fot.test);
// console.log(fot.constructor.test);
// console.log(foo.prototype);

// let ss='1,2,3'
// let tt=ss.split(',')
// console.log(tt);


// if(navigator.userAgent.match(/iPhone/i)){
//     console.log(666);
// }
// console.log(navigator);  


// let a={
//     f:[1,5,6,10,45,30,6]
// }
// console.log(Math.min.apply(a,a.f));

// let obj={}
// let obj=new Object
// console.log(obj);


// function test(){

// }
// let obj=new test()
// console.log(new test());
// console.log(test.prototype.constructor);
// console.log(obj.__proto__===test.prototype);




// const test={
//     s:1,
//     a:2,
//     c:3
// }
// localStorage.setItem('test1',JSON.stringify(test))
// console.log(JSON.parse(localStorage.getItem('test1')));


// const test={
//     s:1,
//     a:2,
//     c:3
// }

// const testa=JSON.parse(JSON.stringify(test))
// testa.a=6
// console.log(test.a);



// const test={
//     s:1,
//     a:2,
//     c:3
// }
// let test1=JSON.stringify(test,(key,val)=>{
//     if(key==='c'){
//         return undefined
//     }
//     return val
// })

// console.log(JSON.parse(test1));



// const test={
//     s:1,
//     a:2,
//     c:3
// }
// let test1=JSON.stringify(test,['s','c'])

// console.log(JSON.parse(test1));


// function Pron(name,age,paessword){
//     this.name=name
//     this.age=age
//     this.paessword=paessword
//     console.log('hello');
//     // this.fc=function(){
//     //     console.log(this.paessword);
//     // }
//     this.fc=fc

// }
// function fc(){
//     console.log(this.name);
// }
// let test=new Pron(1,2,3)
// // console.log(test.__proto__.constructor);
// // console.log(Pron.prototype.isPrototypeOf(test));
// console.log(Object.getPrototypeOf(Object));


// test.fc()




// const test={
//     name:'hello'
// }
// const test01=Object.create(test)
// test01.age=20
// console.log(test01.name);
// console.log(test01.age);
// console.log(test01.__proto__==test);


// function test(){

// }
// test.prototype.name='hello'
// let test01=new test
// console.log(test01.hasOwnProperty('name'));
// test01.name='nihao'
// console.log(test01.hasOwnProperty('name'));
// delete test01.name
// console.log(test01.hasOwnProperty('name'));



// const object1 = {
//     property1: 42
//   };
  
//   const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
  
//   console.log(descriptor1.configurable);
//   // Expected output: true
  
//   console.log(descriptor1.value);
//   console.log(descriptor1);




// function test(){

// }
// test.prototype.name='hello'
// const test01=new test
// const test02=new test
// test02.name='nihao'
// console.log('name' in test01);
// console.log('name' in test02);


// function has(obj,name){
//     return !obj.hasOwnProperty(name)&&(name in obj)
// }
// console.log(has(test01,'name'));//true
// console.log(has(test02,'name'));//false





// function test(){

// }
// test.prototype.name='name'
// test.prototype.age=20

// console.log(Object.keys(test.prototype));
// const test01=new test
// test01.password=20
// console.log(Object.keys(test01));


// //如果想要列出所有实例属性，无论是否可以被枚举
// console.log(Object.getOwnPropertyNames(test.prototype));



// const test={
//     name:'name',
//     age:20,
//     password:123,
//     say:function(){}
// }
// console.log(Object.values(test));//[ 'name', 20, 123, [Function: say] ]
// console.log(Object.entries(test));//[[ 'name', 'name' ], [ 'age', 20 ], [ 'password', 123 ],[ 'say', [Function: say] ]]
// console.log(Object.entries(test)[3][1]==test.say)//true




// function test(){

// }
// test.prototype={
//     name:'name',
//     age:20
// }
// //恢复constructor属性
// Object.defineProperty(test.prototype,'constructor',{
//     enumerable:false,//不可枚举
//     value:test
// })
// console.log(test.prototype.constructor);


// let test='hello world'
// console.log(test.indexOf('hello'));

// function Super(){
//     this.pro=true
// }
// Super.prototype.getsuper=function(){
//     return this.pro
// }
// function sub(){
//     this.subpro=false
// }
// //继承super
// sub.prototype=new Super()
// sub.prototype.getsub=function(){
//     return this.subpro
// }

// let ins=new sub()
// console.log(sub.prototype.__proto__===Super.prototype);//true
// Super.prototype.gethello='hello'
// console.log(sub.prototype.gethello);
// console.log(ins.gethello);
// console.log(ins.getsuper());//true
// console.log(ins.getsub());//false

// //原型链扩展了原型搜索机制，读取实例上属性时，先会在实例上寻找，如过没找到，则会继承搜索实例的原型
// //在通过原型链实现继承之后，搜索就可以继承向上，搜索原型的原型
// //调用ns.getsuper()经历了3步，ins、sub.prototypr、Super.prototype






// function Super(){
//     this.colors=['red','blue']
// }
// function sub(){
//     //继承Super
//     Super.call(this)
// }
// let ins = new sub
// ins.colors.push('black')
// console.log(ins.colors);//[ 'red', 'blue', 'black' ]
// let ins1=new sub
// console.log(ins1.colors);//[ 'red', 'blue' ]


// //子类构造函数像父类构造函数传参
// function Super(name){
//     this.name=name
// }
// function sub(){
//     Super.call(this,'hello')
//     this.age=20
// }
// let ins=new sub
// console.log(ins.age);
// console.log(ins.name);
// //20
// //hello






// function Super(name){
//     this.name=name
//     this.colors=['red','blue']
// }
// Super.prototype.sayName=function(){
//     console.log(this.name);
// }
// function sub(name,age){
//     //继承属性
//     Super.call(this,name)
//     this.age=age
// }
// //继承方法
// sub.prototype=new Super
// sub.prototype.sayAge=function(){
//     console.log(this.age);
// }
// let ins=new sub('hello',20)
// ins.colors.push('black')
// console.log(ins.colors);//[ 'red', 'blue', 'black' ]
// console.log(ins.sayAge());//20
// console.log(ins.sayName());//hello


// let ins1=new sub('hello1',21)
// console.log(ins1.colors);//[ 'red', 'blue' ]
// console.log(ins1.sayAge());//21
// console.log(ins1.sayName());//hello1





let test=class{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    get(){
        console.log('被访问了');
        return this.cla()
    }
    cla(){
        return this.x+this.y
    }
}
const test01=new test(1,2)
console.log(test01);


