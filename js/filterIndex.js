var data = [{
    "name": "placeHolder",
    "id": 1
  }, 
  {
    "name": "placeHolder2",
    "id": 2
  },
  {
    "name": "placeHolder3",
    "id": 3
  }
  ];
  let finalIndex = -1;
  let val =1
  let filteredObj = data.filter((data, index)=> {
    if (data.id === val) {
      finalIndex = index;
      return index;
    }
  });
  console.log("filteredObj",filteredObj)
  console.log("index",finalIndex)
  
  