export default function getMergeSort(arr) {
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