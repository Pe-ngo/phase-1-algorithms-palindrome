// a function to check if the string is a Palindrome or not
function isPalindrome(word)
{
  let j = word.length -1;
  for( let i = 0 ; i < j/2 ;i++)
  {
    let x = word[i] ;//forward character
    let y = word[j-i];//backward character
    if( x !== y)
    {
      // return false if string not match
      return false;
    }
  }
  /// return true if string is palindrome
  return true;
   
}

//function that print output is string is palindrome
function checkPalindrome(word)
{
  // variable that is true ig string is palindrome
  let ans = isPalindrome(word);
  //condition checking ans is true or not
  if( ans == true )
  {
    console.log("passed string is palindrome ");
  }
  else
  {
    console.log("passed string not a palindrome");
  }
}
// test variable
let test = "racecar";
checkPalindrome(test);

/* 
  Add your pseudocode here
  check if input (word is a palindrome )
  if the word is a palindrome return true
  if not return false 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
