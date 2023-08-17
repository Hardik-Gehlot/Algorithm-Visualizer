export default function getBubbleSort(arr) {
    const animationArray = [];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        animationArray.push({ type: "compare", indexes: [j, j + 1] });
        if (arr[j] > arr[j + 1]) {
          animationArray.push({ type: "swap", indexes: [j, j + 1] ,values: [arr[j+1],arr[j]]});
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
    return animationArray;
  }