using System;
using System.Collections.Generic;

// Make a list of Insults

List<string> insults = new List<string> { 
    "You look like what morning breath smells like.",
      "If you tried to give me cpr I would probably throw myself back under water",
      "I am not a fan of you",
      "You think you're so special...and you are. The fact of your existence is nearly impossible to believe",
      "I'd rather walk than be on the same plane as you",
      "If I were given a million dollars to hang out with you...I would, but then I'd have to spend half of it on therapy",
      "Do you have to be so...like that?"
      };

      

// This code ensures we don't end up with duplicate insults
 List<int> indexes = new List<int>();
 
    while (indexes.Count < 3) {
      
      int candidate = RandomNumberGenerator.GetRandomInt(0, insults.Count - 1);
     
      if (!indexes.Contains(candidate))
    {
        indexes.Add(candidate);
    }
    }
    
    for (int i=0; i<indexes.Count; i++)
{
      //Within each iteration of the for loop, the current index is retrieved from the indexes array and stored in the index variable.
      int index = indexes[i];
      Console.WriteLine(insults[index]);
    
}


// Function to generates a random number 
public class RandomNumberGenerator
{
    public static int GetRandomInt(int min, int max)
    {
        Random random = new Random();
        return random.Next(min, max + 1);
    }
}

// In another part of the code
// int randomNumber = RandomNumberGenerator.GetRandomInt(0, 3);

