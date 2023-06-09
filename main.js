function main() {
    const insults = [
      "You look like what morning breath smells like.",
      "If you tried to give me cpr I would probably throw myself back under water",
      "I am not a fan of you",
      "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
      "I'd rather walk than be on the same plane as you",
      "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
      "Do you have to be so...like that?"
    ];
  
    // This code ensures we don't end up with duplicate insults
    const indexes = [];
    while (indexes.length < 3) {
      //getRandomInt is called with two arguments: 0 and insults.length - 1. Generates a random integer between the two given values. The result is stored in the candidate variable.
      const candidate = getRandomInt(0, insults.length - 1);
      // checks if the candidate index is not already present in the indexes array. to ensure only unique indexes are added to the array.
      if (!indexes.includes(candidate)) {
        indexes.push(candidate);
      }
    }
  
    for (let i=0; i<indexes.length; i++) {
      //Within each iteration of the for loop, the current index is retrieved from the indexes array and stored in the index variable.
      const index = indexes[i];
      console.log(insults[index]);
    }
  }
  
  // Remember getting a random integer in C# is different
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  main();