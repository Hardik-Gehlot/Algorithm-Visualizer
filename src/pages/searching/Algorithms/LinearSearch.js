export default function getLinearSearch(arr, val){
    var animatedArray = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i] == val){
            animatedArray.push({type:"found",index:i})
            break;
        }
        animatedArray.push({type:"compare",index:i});
    }
    return animatedArray
}