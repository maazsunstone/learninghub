

const arr = [
    { name: 'Jean-Luc Picard', age: 59 },
    { name: 'Will Riker', age: 29 },
    { name: 'Deanna Troi', age: 29 }
  ];
  //[59, 29, 29]
  const findingAge = arr.map(i=>i.age)
  
  let initialValue={}
  let reducer=(map, val)=>{
     if(map[val]==null){
         map[val]=1
     }
     else{
         map[val]++
     }
      return map
  }
  const ageArrayCount = findingAge.reduce(reducer, initialValue)
  
  console.log(ageArrayCount)