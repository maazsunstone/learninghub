// Example usage
// const object1 = { name: “raj”, age: 30, details: { city: "New York", job: "Developer" } };
// const object2 = { name: “raj, age: 30, details: { city: "New York", job: "Developer" } };
// const object3 = { name: “deep”, age: 31, details: { city: "New York", job: "Developer" } };
// console.log(deepEqual(object1, object2)); // Should return true
// console.log(deepEqual(object1, object3)); // Should return false
// console.log(deepEqual(object1, "not an object")); // Should return false

// Implement a TypeScript function that performs a deep comparison between two objects. 
// The function should return `true` if the objects are equivalent (i.e., have the same properties with equal values,
//  including nested objects) and `false` otherwise.
//   The solution should be able to handle objects with nested structures and different data types.

type DetailsObj={
    city:string,
    job: string
}
type ObjdectDefinition={
    name:string,
    age:number,
    details:DetailsObj
}
  

function deepEqual(obj1:ObjdectDefinition| DetailsObj|string, obj2:ObjdectDefinition| DetailsObj|string):Boolean{
    if(typeof(obj1)!=typeof(obj2)){
        return false;
    }
    const Obj1Keys = Object.keys(obj1);
    const Obj2Keys = Object.keys(obj2);

    for(let i=0;i<Obj1Keys.length;i++){
         if(!Obj2Keys.includes(Obj1Keys[i])){
            return false;
      
        }
    }
   
   const Obj1Values = Object.values(obj1);
    const Obj2Values = Object.values(obj2);
    for(let i=0;i<Obj1Values.length;i++){
        if(typeof(Obj1Values[i])=='object'){
            deepEqual(Obj1Values[i], Obj2Values[]) 
        }
         if(!Obj2Values.includes(Obj2Values[i])){
            return false;
      
        }
    }
   


    return true;

}
const object1 = { name: "raj", age: 30, details: { city: "New York", job: "Developer" } };
const object2 = { name: "raj", age: 30, details: { city: "New York", job: "Developer" } };
const object3 = { name: "deep", age: 31, details: { city: "New York", job: "Developer" } };
console.log(deepEqual(object1,object2 ))

//final solution' optimised
for (const key in obj1) {
        if (!(key in obj2)) return false;
        if (!deepEqual(obj1[key], obj2[key])) return false;
    }