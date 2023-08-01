// export function getMergeSortAnimations(array) {
//   const animations = [];
//   if (array.length <= 1) return array;
//   const auxiliaryArray = array.slice();
//   mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
//   return animations;
// }

// function mergeSortHelper(
//   mainArray,
//   startIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   if (startIdx === endIdx) return;
//   const middleIdx = Math.floor((startIdx + endIdx) / 2);
//   mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
//   mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
//   doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
// }

// function doMerge(
//   mainArray,
//   startIdx,
//   middleIdx,
//   endIdx,
//   auxiliaryArray,
//   animations,
// ) {
//   let k = startIdx;
//   let i = startIdx;
//   let j = middleIdx + 1;
//   while (i <= middleIdx && j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, j]);
//     if (auxiliaryArray[i] <= auxiliaryArray[j]) {
//       // We overwrite the value at index k in the original array with the
//       // value at index i in the auxiliary array.
//       animations.push([k, auxiliaryArray[i]]);
//       mainArray[k++] = auxiliaryArray[i++];
//     } else {
//       // We overwrite the value at index k in the original array with the
//       // value at index j in the auxiliary array.
//       animations.push([k, auxiliaryArray[j]]);
//       mainArray[k++] = auxiliaryArray[j++];
//     }
//   }
//   while (i <= middleIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([i, i]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([i, i]);
//     // We overwrite the value at index k in the original array with the
//     // value at index i in the auxiliary array.
//     animations.push([k, auxiliaryArray[i]]);
//     mainArray[k++] = auxiliaryArray[i++];
//   }
//   while (j <= endIdx) {
//     // These are the values that we're comparing; we push them once
//     // to change their color.
//     animations.push([j, j]);
//     // These are the values that we're comparing; we push them a second
//     // time to revert their color.
//     animations.push([j, j]);
//     // We overwrite the value at index k in the original array with the
//     // value at index j in the auxiliary array.
//     animations.push([k, auxiliaryArray[j]]);
//     mainArray[k++] = auxiliaryArray[j++];
//   }
// }


export function getMergeSortAnimations(arr) {
  const animationArray = [];
  const auxArray = arr.slice();
  mergeSortHelper(arr, 0, arr.length - 1, auxArray, animationArray);
  return animationArray;
}

function mergeSortHelper(mainArray, startIdx, endIdx, auxArray, animationArray) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxArray, startIdx, middleIdx, mainArray, animationArray);
  mergeSortHelper(auxArray, middleIdx + 1, endIdx, mainArray, animationArray);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animationArray);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxArray, animationArray) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animationArray.push({ type: "compare", indexes: [i, j] });
    if (auxArray[i] <= auxArray[j]) {
      animationArray.push({ type: "overwrite", index: k, value: auxArray[i] });
      mainArray[k++] = auxArray[i++];
    } else {
      animationArray.push({ type: "overwrite", index: k, value: auxArray[j] });
      mainArray[k++] = auxArray[j++];
    }
  }
  while (i <= middleIdx) {
    animationArray.push({ type: "overwrite", index: k, value: auxArray[i] });
    mainArray[k++] = auxArray[i++];
  }
  while (j <= endIdx) {
    animationArray.push({ type: "overwrite", index: k, value: auxArray[j] });
    mainArray[k++] = auxArray[j++];
  }
}


export function getBubbleSortAnimations(arr) {
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
export function getInsertionSortAlgorithm(arr) {
  
}
export function getSelectionSortAlgorithm(arr) {
  let temp = 0;
  for (let i = 1; i < arr.length; i++) {
    let min = i;
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[min] > arr[j + 1]) {
        min = j + 1;
      }
    }
    if (arr[i - 1] > arr[min]) {
      temp = arr[min];
      arr[min] = arr[i - 1];
      arr[i - 1] = temp;
    }
  }
}
export default getBubbleSortAnimations;