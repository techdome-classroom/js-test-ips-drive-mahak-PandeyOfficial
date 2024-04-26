
function smallestMissingPositiveInteger(nums) {
    
     let len = nums.length;
     let curr = new Array(len+1);

     for(let i = 0; i<len+1; i++){  //for new array
      curr[i] = false;
     }

     for(let i = 0; i<len; i++){    //for existing array

      if(nums[i] > 0 && nums[i] <= len){
        curr[nums[i]] = true;
      }
     }

     for(let i = 1; i<=len ; i++){
      if(!curr[i]) return i;
     }

     return n+1;
    // Implement the function smallest_missing_positive_integer
  
  }

//test this program for given output : uncomment below program to run 
/**   
  let testcase = [3, 4, -1, 1];
  console.log(smallestMissingPositiveInteger(testcase));
  
  let testcase2 = [1, 2, 0];
  console.log(smallestMissingPositiveInteger(testcase2)); 

  let testcase3 = [-1, -3, 4, 2];
  console.log(smallestMissingPositiveInteger(testcase3)); 
 */

  
  module.exports = smallestMissingPositiveInteger;

