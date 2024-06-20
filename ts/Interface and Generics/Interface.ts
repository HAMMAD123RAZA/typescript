
// In general, you should use a type when you want to define a simple object that does not need any methods or properties. You should use an interface when you want to define a complex object that needs to have methods and properties.

// Here are some examples of how you can use types and interfaces in TypeScript:

// Define a type for a simple object

type Person = {
  name: string;
  age: number;
};

// Define an interface for a complex object

interface Animal {
  name: string;
  age: number;
  speak(): void;
}

///////Generics////////

// When you start needing a generic is when you truly don't know what the type is going to be passed into the function, or you have things inside the function that rely on knowing that type

type user={
    id:number;
    user: string;
    isAdmin: boolean;
}

interface Cat{
  id:number;
  user: string;
}

interface Admin{
  id:number;
  user: string;
  isAdmin: boolean;
}

interface Post{
  title: string;
  body: string;
  id: number;
  extra :Cat[] | Admin[] |user[]; /// <= so here we don't know how many types and interface are going to be passed 
}

//so to avoid this we use generics

interface item<T>{
  title: string;
  body: string;
  id: number;
  extra :T[]; 
} 

const testMe:item<string>={
  title:"raza",
  body:"jsdf",
  id:23,
  extra:["12","hmm"]
}

interface it<T>{
  title: string;
  body: string;
  id: Number;
  extra:T[]
}

const checkMe:it<any>={
  title:'got mine',
  body:"jsdf",
  id:21,
  extra:[true,false,"uiux",23]  /// <= so here we don't know how many types and interface are going to be passed
}

interface item2<T extends object>{
  title: string;
  body: string;
  id: number;
  extra :T[]; 
}

interface my{
  id:number,
  body:string,
  title:boolean,
}

const testMe2:item2<my>={
  title:"raza",
  body:"jsdf",
  id:23,
  extra:[{id:12,body:"hmm",title:true},{id:1,body:"hmm" ,title:true}]
}