
// union type
let strNum:string | number 
strNum = "123"
strNum = 123
// ///////

// Array

let arr:string[]

arr = ["one", "two",]

let num:number[]
num = [1,2,3,4]

let numStr:(number | string)[]

numStr = [1,2,3,4,"five"]   

// ////////////

// Any Type////////////

let anyVar;

anyVar = "123"
anyVar = 123
anyVar = true
anyVar = {}
anyVar = ["23",23,true]

let anyArray:any[]

anyArray = ["myName",43,false,[]]

//////////////////////

// function//////////

let myFunc=(a:number,b:number,another?:string):number=>{
    return a+b;
}
console.log(myFunc(1,2))    
