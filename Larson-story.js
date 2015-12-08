var name = prompt("What is your name, sonny?");
if (name === "Larson"){
  alert("Hello Larson!");
}
else if(name === "Grant"){
  alert("Hello Grant!")
}
else if (name === "Donnie"){
  alert("Hello Donnie!")
}
else{
  alert("I don't know you, sonny! GET OfF MY LAWN")
  if (confirm("Get off his lawn?")){
      alert("Running as fast as you can!")
      confirm("Take a break?");
      alert("You are so tired it doesn't matter if you want to.")
      for(var i=0;i<5;i+=1){
          alert("Resting...");
      }
     alert("You fall into a deep sleep...");
     alert("YOU WIN");
  }
  alert("The old man hits you with a shovel.");
  alert("GAME OVER");
}
