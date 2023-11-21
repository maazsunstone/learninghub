let x = {
    value: 1,
    valueOf: function() {
      return this.value++;
    }
  };
  
  if (x == 1 && x == 2 && x == 3 ) {
    console.log("hello");
  }

  // will print hello