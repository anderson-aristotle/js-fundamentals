(() => {
  // 1. Create a function that console logs hello world

  const f1 = () => {
    // fill in
    console.log('Hello World');
  };

  f1(); // should console log "Hello World!"

  // 2. Create a function that takes a string and console logs that string

  const f2 = inputString => {
    console.log(inputString + ' ' + 'World!');
  };
  f2('Hello'); // should console log "Hello World!"
  f2('GoodBye'); // should console log "GoodBye World!"

  // 3. Create a function that takes an array of strings an console logs
  const f3 = inputArray => {
    console.log('Hi!');
    console.log('Bye!');
  }; // should console log "Hi!", and then console log "Bye"
  f3(console.log());
  // 4. Create a function that takes an object and console log's its message value
  const f4 = inputObject => {
    // fill in
  };
  f4({ message: 'Hello!' }); // should console log "Hello!"
})();
