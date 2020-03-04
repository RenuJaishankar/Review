//this is a typescript file
//typescript is a superset of javascript, meaning all legal javascript is legal typescript
//typescript is strongly typed as opposed to dynamically typed
//tuples are natively supported in typescript
let tup= [3,'hello',true]
//similar arry operations on atuple such as indexing
//the following log will print out the string hello at index
console.log(tup[1])

let bigTup = [3, 'hi',false, 'hello',true,45,[1,2,4],{name:"mike"}]
console.log(bigTup)
//the type is and always will number but that type is inferred
let foofoo = 3;
//this is how you would explicitly declare a variable type in typescript
//this type is explicit instead of inferred or implicit
let xoo:number = 4;
//typescript has additional types that include the following
//tuple
//enum
enum Color{RED="red", GREEN="green", BLUE="blue"}
let c:Color = Color.BLUE
console.log(c)
//any
//void
//never
let list:number[] = [1,2,3]
let genericList: Array<number> = [1,2,3]

class Cat{
    x:number
    y:string
//This is how you would write a generic type or function
    doesThing<T>(arg:T):T{
            return arg;
    }
}
//This is my constructor, its exactly as in javscript
let cat = new Cat();
console.log(cat.doesThing<string>("435"))