const sentence = "hello there from lighthouse labs";

let timer = 0;
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    if (i === sentence.length - 1) {
      process.stdout.write(sentence[i] + "\n");
    } else {
      process.stdout.write(sentence[i]);
    }
  }, timer);
  timer += 50;
}
