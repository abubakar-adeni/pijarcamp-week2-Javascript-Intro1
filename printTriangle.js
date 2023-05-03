function printTriangle(num) {
    if (typeof num === "number") {
      for (let row = num; row >= 1; row--) {
        let output = "";
        for (let col = 1; col <= num - row + 1; col++) {
          output += col;
        }
        console.log(output);
      }
    } else {
      console.log("Input harus berupa angka!");
    }
  }
  

  //output
  printTriangle(5); 
  //  1
  //  12
  //  123
  //  1234
  //  12345
  

  