const sentence = "hello there from lighthouse labs\n";
for (const i in sentence) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, i * 500);
}
