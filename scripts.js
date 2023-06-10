// Creates list of affirmation.
const affirmations = [
    "You are a lovable, wonderful friend.",
    "You are super talented! Look at you go!",
    "Someone in your life looks up to you, you're amazing!",
    "You deserve nothing but the best!",
    "You're doing a great job.",
    "You're here because you matter.",
    "You are beautiful inside and out.",
    "Here's a reminder: love yourself first.",
    "I am confident and brave.",
    "My self-worth is not tied to my abilities.",
    "Other people do not designate my worth.", 
    "I am important and special.",
    "I can be a positive leader to others.",
    "I am proud of myself and my accomplishments.", 
    "Mistakes help me learn and grow.",
    "I am a problem-solver.",
    "I go after my dreams.",
    "I will do great things today.",
    "I am strong enough to complete this task. ",
    "My brain and body are powerful.",
    "I like to be challenged so that I can grow.",
    "I can accomplish anything I set my mind to. ",
    "A fresh start is always possible. ",
    "I may fail, but I will get back up again. ",
    "I am a fighter who doesn’t give up. ",
    "I am capable of doing hard things. ",
    "I am worthy of love. ",
    "My body is beautiful and strong.",
    "I have good friends who love me. ",
    "Today, I will be kind to myself.",
    "I have great ideas. ",
    "I am in control of my own happiness.",
    "I am grateful for the good things in my life. ",
    "I can ask for help when I need it.  ",
    "I am a gift to those around me. ",
  ];
  
  // Selects the button.
  const affirmBtn = document.querySelector(".form-inputs input");
  
  // Selects the text that you are about to change.
  const text = document.querySelector(".text p");
  
  // Sets up randomizer function.
  function shuffle(max) {
  
  // Randomizer selects random index.
    let index = Math.floor(Math.random() * Math.floor(max));
  
    // Set p tag text to that selected affirmation.
    text.innerHTML = affirmations[index];
  }
  
  // Checks for button click.
  affirmBtn.addEventListener("click", function () {
    shuffle(affirmations.length);
  });