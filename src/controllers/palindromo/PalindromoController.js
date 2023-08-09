exports.VerifyPalindrome = (req, res) => {
  const palindromeString = "Amor a Roma";
  var palindromeStatus = false;
  try {
    function checkPalindrome(str) {
      var re = /[\W_]/g;
      var lowRegStr = str.toLowerCase().replace(re, '');
      var reverseStr = lowRegStr.split('').reverse().join(''); 
      return reverseStr === lowRegStr;
    }
    palindromeStatus = checkPalindrome(palindromeString);
  } catch (error) {
    res.send(error);
  }

  res.send(palindromeStatus);
}