//Return the length of the longest word in the provided sentence.
function findLongestWord(str) {
    var newWord=str.split(" ");
    var  maxLength=0;
    for(var i=0;i<newWord.length;i++){
        if (newWord[i].length > maxLength) {
            maxLength = newWord[i].length;
      
            var maxLengtht=newWord[i];
        }
        }
        
       
        return maxLength;
        
    }
  
  
  console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));