let a=[1,2,3,4,2,3,5,3]
let map={}
let finalOut=[];
for(let i=0;i<a.length; i++){
    if(map[a[i]]){
        map[a[i]]++;
    }else{
       map[a[i]]=1 
    }
    
}
for(let i in map){
    if(map[i]>1){
        finalOut.push(map[i])
    }    
}
console.log(finalOut)
