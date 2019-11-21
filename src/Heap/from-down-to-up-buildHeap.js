buildHeap = function(nums, k) {
  for (let i = 0; i < nums.length; i++) {
      let j = i;
      while(j > 0) {
          const parentPos = Math.ceil((j - 1) / 2);
          
          if (nums[j] > nums[parentPos]) {
              const temp = nums[j];
              nums[j] = nums[parentPos];
              nums[parentPos] = temp;
          }

          j = parentPos;
      }
  }
  return nums;
}

var a = [3,1,2,5,6,4]
console.log(buildHeap(a))
