const createNumberOfArraysBetweenRange = (start: number, end: number) => {
  return (
    Array(end - start + 1)
      //@ts-expect-error ignore
      .fill()
      .map((_, idx) => start + idx)
  )
}

const onlyUnique = (value: number, index: number, self: unknown) => {
  //@ts-expect-error not sure how to type "self"
  return self.indexOf(value) === index
}

export const arrayOfNumbersBasedOnRanges = (
  arrayOfArrayNumbers: Array<number[]>
): number[] => {
  const numbersArray: number[] = []

  arrayOfArrayNumbers.map((arr) => {
    // Sort array first
    const sortedArray = arr.sort(function (a, b) {
      return a - b
    })

    // Only unique items
    const uniqueSortedArray = sortedArray.filter(onlyUnique)

    const allNumbers: number[] = []

    if (uniqueSortedArray.length === 1) {
      numbersArray.push(uniqueSortedArray[0])
    }

    for (let i = 0; i < uniqueSortedArray.length; i++) {
      let diff = 1
      const numbersToPush: number[] = []

      // If it's not the last item
      if (i !== uniqueSortedArray.length - 1) {
        diff = uniqueSortedArray[i + 1] - uniqueSortedArray[i]
        if (diff === 1) {
          numbersToPush.push(uniqueSortedArray[i])
        }

        numbersToPush.push(
          ...createNumberOfArraysBetweenRange(
            uniqueSortedArray[i],
            uniqueSortedArray[i + 1]
          )
        )
      }

      allNumbers.push(...numbersToPush)
    }

    numbersArray.push(...allNumbers)
  })

  return numbersArray
}
