buildHeap = function(nums, k) {
  let middle = Math.floor((nums.length - 1) / 2);
  for (let i = middle; i >= 0; i--) {
      let j = i;
      while(j <= middle) {
          let maxPos = j;
          const leftPos = 2*j + 1;
          const rightPos = 2*j + 2;

          if (nums[leftPos] > nums[j]) { maxPos = leftPos };
          if (nums[rightPos] > nums[maxPos]) { maxPos = rightPos };

          if (maxPos === j) break;

          const temp = nums[j];
          nums[j] = nums[maxPos];
          nums[maxPos] = temp;
          
          j = maxPos;
      }
  }
  return nums;
}

var a = [3,1,2,5,6,4]
console.log(buildHeap(a))
