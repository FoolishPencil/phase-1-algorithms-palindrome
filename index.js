function isPalindrome(word) {
  const normalizedStr = word.toLowerCase().replace(/\s+/g, '');

  const reversedStr = normalizedStr.split('').reverse().join('');

  return normalizedStr === reversedStr;
}

/* 
function isPalindrome(word);

  Normalize the String: i.e. lowercased then remove the spaces
  
  initialize pointers for rhe start and end of the string

  loop until the pointers meet in the middle
  Inside the loo, the function compares the characters at the current positions of the pointers

  if characters not equal, function returns false, i.e. not a plaindrome

  if characters equal, bothe pointers move towards the center of string

  if all characters match, function returns true, i.e. string is palindrome

*/

/*
Normalize the String:

  First, we make the string case-insensitive and ignore spaces by converting all letters to lowercase and removing spaces. This allows us to focus solely on the actual characters when determining if the string reads the same forwards and backwards.
  
Set Up Pointers for Comparison:

  We set up two pointers: one (startPointer) at the beginning of the string and the other (endPointer) at the end. These pointers will help us compare characters from the outer edges moving inward toward the center.

Check Characters with a Loop:
  As long as the pointers have not met in the middle, we perform the following steps:
    Compare the characters at the positions of startPointer and endPointer.
    
    If they don’t match, we know the string is not a palindrome, so we can return false right away.

    If they do match, we continue by moving startPointer one step to the right and endPointer one step to the left.

    This process repeats, shrinking the range of characters to check as the pointers move toward each other.
    
Determine Result:

If we reach the point where startPointer has moved past endPointer without finding a mismatch, then the string reads the same forwards and backwards. We can confidently return true, indicating it is a palindrome.
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
