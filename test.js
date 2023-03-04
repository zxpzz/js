 let cat={}
 let val=3000
 Object.defineProperty(cat,'price',{
    enumerable:true,
    configurable:true,
    get(){
        console.log('被读取了');
        return val
    },
    set(newval){
        console.log('被更改');
        val=newval
    }
 })
 console.log(cat.price);
 cat.price=5000