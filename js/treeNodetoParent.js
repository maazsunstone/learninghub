const { readFileSync,writeFileSync } = require('fs');
const trees= JSON.parse(readFileSync("./tree.json"));
let delay = (ms) => new Promise((res) => setTimeout(res, ms));

 function flatten(items) {
  const flat = [];

  items.forEach(item => {
    flat.push(item)
    if (Array.isArray(item.children) && item.children.length > 0) {
      flat.push(...flatten(item.children));
      delete item.children
    }
    delete item.children
  });
  return flat;
}
let lookup={};
function hashTree(nodes){
 return new Promise(async(resolve,reject)=>{
    let flat=await flatten(nodes)
    for(let item of flat){
      lookup[item.id]=item;
    }
    resolve(lookup)
  })
}
async function findAncestors (nodeId) {
  var ancestors = []
  var parentId = lookup[nodeId] && lookup[nodeId].parentId
  while(parentId) {
    ancestors.unshift(parentId)
    parentId = lookup[parentId] && lookup[parentId].parentId
  }
  return ancestors;
}
hashTree(trees).then(async(el)=>{
  console.log("5: ", await findAncestors(10))
})