type userType={
    name:string;
    age:number;
    address:string;
    phone?:number    
}

let myFn=(usser:userType)=>{
    console.log(usser.address)
}

type myType={
    name:string;
    age:number;
    phone?:number;
    theme:"dark"| "light"
}

const userTheme : myType = {
    name :"raza",
    age:23,
    phone:33434,
    theme:"dark",
}