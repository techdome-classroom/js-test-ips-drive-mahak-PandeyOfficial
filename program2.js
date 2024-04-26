function differ( str, i, j){
   var visit = new Array(256);

   for(var k = i ; k<j ; k++){
 if(visit[str.charAt(k) == true])
    return false;
    visit[str.charAt(k)] == true;
    
   }
}


function longestSubstring(s) {
     var len = s.length;
     var result = 0;
     for(var i = 0; i<len; i++){
        for(var j = i ; j<len ; j++){
            if(differ(s, i, j)){
                result = Math.max(result, j-i+1);
                return result;
            }
        }
     }
    // Implementation of longestSubstring function
}



module.exports = { longestSubstring };
