function makeDough(callback) {
  setTimeout(() => {
    console.log("Dough is ready");
    callback("dough");
  }, 1000);
}

function bakePizza(dough, callback) {
  setTimeout(() => {
    console.log("Pizza baked using", dough);
    callback("baked pizza");
  }, 1000);
}

function cutPizza(pizza, callback) {
  setTimeout(() => {
    console.log("Pizza cut:", pizza);
    callback("cut pizza");
  }, 1000);
}

function servePizza(finalPizza, callback) {
  setTimeout(() => {
    console.log("Pizza served:", finalPizza);
    callback();
  }, 1000);
}

// ❌ CALLBACK HELL STARTS HERE
makeDough(function(dough) {
  bakePizza(dough, function(baked) {
    cutPizza(baked, function(cut) {
      servePizza(cut, function() {
        console.log("All steps completed!");
      });
    });
  });
});