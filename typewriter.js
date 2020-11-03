const sentence = "hello there from lighthouse labs";
let t = 0;
let d = 50;
for (let c of sentence) {
  
  setTimeout(() => { 
    

    process.stdout.write(c);


  }, t);
  t += d;
  
}
setTimeout(() => {
  process.stdout.write("\n");

}, t);
