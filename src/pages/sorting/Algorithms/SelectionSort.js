export default function getSelectionSort(arr){
    let animatedArray = [];
    for(let i = 0; i < arr.length-1; i++){
        let minIndex = i
        if(i) animatedArray.push({type:"setBack",index:i-1});
        animatedArray.push({type:"pivot",index:i});
        for(let j = i+1; j<arr.length; j++){
            animatedArray.push({type:"compare",index:j});
            if(arr[j] < arr[minIndex]){
                if(i!=minIndex)animatedArray.push({type:"setBack",index:minIndex});
                minIndex = j;
                animatedArray.push({type:"overwrite",index:minIndex});
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
        animatedArray.push({type:"swap",indexes:[i,minIndex],values:[arr[i],arr[minIndex]]});
    }
    return animatedArray;
}