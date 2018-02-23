try {
    console.log('Start of try runs');  // (1)
    // ...no errors here
    console.log('End of try runs');   // (2)
 } catch (err) {
    ('ignored, no errors'); // (3)
 }
 
 console.log("...Execution continues");
 
 try {
    console.log('Start of try runs');  // (1)
    lalala; // error, variable is not defined!
    console.log('Never reached');  // (2)
 } catch (err) {
    throw ('Error has occurred!'); // (3)
 }
 
 console.log("...Execution continues");

 try {
    llllllll;
  } catch (e) {
    throw new Error('Whoops!');
  }
  try {
    foo.bar();
  } catch (e) {
    if (e instanceof EvalError) {
      console.log(e.name + ': ' + e.message);
    } else if (e instanceof RangeError) {
      console.log(e.name + ': ' + e.message);
    }
    // ... etc
  }