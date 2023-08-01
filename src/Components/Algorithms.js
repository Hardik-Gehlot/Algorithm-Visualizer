import { Link } from "react-router-dom";
function Algorithms() {
  return (
    <div className="algo-container">
      <div className="sorting-algo-container">
        <span>Sorting Algorithm</span>
        <Link to={"/algorithms/sorting/bubble-sort"} className="divbtn bubble-sort">
        bubble sort
        </Link>
        <Link to={"/algorithms/sorting/quick-sort"} className="divbtn quick-sort">
        quick sort
        </Link>
        <Link to={"/algorithms/sorting/merge-sort"} className="divbtn merge-sort">
        merge sort
        </Link>
        <Link to={"/algorithms/sorting/selection-sort"} className="divbtn selection-sort">
        selection sort
        </Link>
        <Link to={"/algorithms/sorting/insertion-sort"} className="divbtn insertion-sort">
        insertion sort
        </Link>
      </div>
    </div>
  )
}

export default Algorithms;
