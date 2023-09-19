/**
 * O(nlogn)
 */

let a =[1,2,[3],[[4]],[[[[5]]]],[6,[[[[7]]]]],8]

function flatten(ary) {
    var ret = [];
    for(var i = 0; i < ary.length; i++) {
        if(Array.isArray(ary[i])) {
            ret = ret.concat(flatten(ary[i]));
        } else {
            ret.push(ary[i]);
        }
    }
    return ret;
}

console.log(flatten(a))



/**
 * Order of N; using Stack
 */
let arr=[1,2,[3],[[4]],[[[[5]]]],[6,[[7]]],8]
function flat(arr){
  let result=[];
  let stack=[...arr]
  while(stack.length){
    let next=stack.pop();
    if(Array.isArray(next)){
      stack.push(...next)
    }
    else
      result.push(next)
  }
  return result.reverse()
}
console.log(flat(arr))

/**
 * Using Queue
 */
let arr1=[1,2,[3],[[4]],[[[[5]]]],[6,[[7]]],8]
function flat(arr){
  let result=[];
  let queue=arr
  while(queue.length){
    let next=queue.shift();
    if(Array.isArray(next)){
      queue.unshift(...next)
    }
    else
      result.push(next)
 }
  return result
}
console.log(flat(arr1))





