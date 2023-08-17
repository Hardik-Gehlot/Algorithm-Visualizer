function quicksort(array, low, high,animationArray) {
    if (low < high) {
        const p = Math.floor((low + high) / 2);
        const pivot = array[p];
        animationArray.push({type:"pivot",index:p})
        let i = low;
        let j = high;
        while (i < j) {
            while (array[i] < pivot) {
                animationArray.push({type:"compare",index:i})
                i++;
            }
            while (array[j] > pivot) {
                animationArray.push({type:"compare",index:j})
                j--;
            }
            if (i < j) {
                [array[i], array[j]] = [array[j], array[i]];
                animationArray.push({type:"swap",indexes:[i,j],values:[array[i],array[j]]})
            }
        }
        animationArray.push({type:"setBack",index:p})
        quicksort(array, low, i - 1,animationArray);
        quicksort(array, i + 1, high,animationArray);
    }
}
export default function getQuicksort(arr) {
    var animationArray = [];
    quicksort(arr, 0, arr.length - 1,animationArray);
    return animationArray
}