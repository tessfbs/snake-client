const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf-8');
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
}

const handleUserInput = (command) => {
  if(command === "\u0003" ){
    console.log("detected ctrl + c ")
    process.exit();
  }
};

module.exports = setupInput;