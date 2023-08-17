export default function getInsertionSort(arr){
    let animationArray = [];
    for(let i = 1; i < arr.length; i++){
        animationArray.push({type:"pivot", index:i});
        let current = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>current){
            animationArray.push({type:"compare", index:j});
            arr[j+1]=arr[j];
            animationArray.push({type:"overwrite", index:j+1,value:arr[j]});
            j--;
        }
        arr[j+1]=current;
        animationArray.push({type:"overwrite", index:j+1, value:current});
    }
    return animationArray;
}