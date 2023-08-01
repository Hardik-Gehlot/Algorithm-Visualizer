import bubbleSort from "../Algorithms/Sorting";
function SortingMenu({bubbleSort,mergeSort,insertionSort}) {
  return (
    <div className="menu-container">
        <div className="divbtn bubble-sort" onClick={bubbleSort}>Bubble Sort</div>  
        <div className="divbtn merge-sort" onClick={mergeSort}>Merge Sort</div> 
        <div className="divbtn insertion-sort" onClick={insertionSort}>Insertion Sort</div> 
        <div className="divbtn quick-sort">Quick Sort</div> 
        <div className="divbtn selection-sort">selection Sort</div>     
    </div>
  )
}

export default SortingMenu
