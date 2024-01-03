/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const numindices = new Map()
    for(i=0;i< nums.length;i++){
        const compliment = target - nums[i]
      

        if(numindices.has(compliment)){
            return[numindices.get(compliment),i]
        }
        numindices.set(nums[i],i)
          }
          return[]
    } ;
    const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1));