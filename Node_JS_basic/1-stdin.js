process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.resume();

process.stdin.on('data', (data) => {
  const dataa = data.toString();
  process.stdout.write(`Your name is: ${dataa}`);
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
