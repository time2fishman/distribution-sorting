function insertionSort(array) {
	// completed insertionSort, do not alter
	for (let i = 1; i < array.length; i++) {
		let currentValue = array[i];
		let j = i - 1;
		for (j; j >= 0 && array[j] > currentValue; j--) {
			array[j + 1] = array[j];
		}
		array[j + 1] = currentValue;
	}
	return array;
}

function bucketSort(array) {
	// if the array has one or less element, return it (it is sorted)
	if (array.length <= 1) {
		return array
	}

	// calculate the count of buckets
	const bucketCount = Math.ceil(Math.sqrt(array.length))

	// create an array containing the count number of arrays
	const buckets = []
	for (let index = 0; index < array.length; index++) {
		buckets.push([]);
	}

	// calculate the minimum value of the array
	const minValue = Math.min(...array)

	// calculate the maximum value of the array
	const maxValue = Math.max(...array)

	// calculate the range ((max - min) / bucketCount) + 1
	const range = Math.floor(((maxValue - minValue) / bucketCount) + 1)

	// for each number in the array
	array.forEach(element => {
		// calculate the index to push the number to: (item - min) / range, rounded down
		const bucketIndex = Math.floor(((element - minValue) / range))

		// push the number to the index array of your array of arrays
		buckets[bucketIndex].push(element)
	})

	// sort each array within the parent array
	const sortedBuckets = buckets.map(bucket => {
		return insertionSort(bucket)
	});

	// combine the sorted arrays into one and return!
	return sortedBuckets.flat()
}

module.exports = bucketSort;
