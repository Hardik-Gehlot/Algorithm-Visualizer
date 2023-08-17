export default function getBinarySearch(arr, val){
    var animatedArray = [];
    let low = 0
    let high = arr.length-1
    animatedArray.push({type:"updating",index:low,color:0});
    animatedArray.push({type:"updating",index:high,color:0});
    while(low <= high){
        let mid = parseInt((low + high)/2);
        animatedArray.push({type:"updating",index:mid,color:1});
        animatedArray.push({type:"compare",index:mid});
        if(arr[mid] === val){
            animatedArray.push({type:"found",index:mid});
            break;
        }else if(arr[mid] < val){
            animatedArray.push({type:"updating",index:low,color:2});
            animatedArray.push({type:"updating",index:mid+1,color:0});
            low=mid+1;
        }else{
            animatedArray.push({type:"updating",index:high,color:2});
            animatedArray.push({type:"updating",index:mid-1,color:0});
            high = mid-1;
        }
    }
    return animatedArray
}