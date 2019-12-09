var topKFrequent = function(nums, k) {
	const map = new Map();
	for (let i of nums) {
		const v = map.has(i) ? map.get(i) + 1 : 1;
		map.set(i, v);
	}

	const temp = [...map.entries()];

	// 堆化
	function heapifyFromTopToBottom(nums, i, size) {
		while (true) {
			let minPos = i;
			const leftPos = 2 * i + 1;
			const rightPos = 2 * i + 2;

			if (leftPos <= size && nums[leftPos][1] < nums[i][1]) {
				minPos = leftPos;
			}
			if (rightPos <= size && nums[rightPos][1] < nums[minPos][1]) {
				minPos = rightPos;
			}

			if (minPos === i) break;

			const temp = nums[i];
			nums[i] = nums[minPos];
			nums[minPos] = temp;

			i = minPos;
		}
	}
	// 创建堆
	function createHeap(data) {
		const centerPos = Math.floor((data.length - 1) / 2);
		for (let i = centerPos; i > -1; i--) {
			heapifyFromTopToBottom(data, i, data.length - 1);
		}
	}

	const a = temp.slice(0, k);
	const b = temp.slice(k);
	createHeap(a);

	b.forEach(item => {
		if (item[1] > a[0][1]) {
			a.splice(0, 1, item);
			heapifyFromTopToBottom(a, 0, k - 1);
		}
	});
	return a.map(item => item[0]);
};
a = topKFrequent([6,0,1,4,9,7,-3,1,-4,-8,4,-7,-3,3,2,-3,9,5,-4,0], 6);
console.log(a) // [-4, 0, 1, 4, 9, -3]