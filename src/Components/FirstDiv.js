
import Algorithms from "./Algorithms";
import Button from "./Button";
import Home from "./Home";
import SortingMenu from "./SortingMenu";
import SearchingMenu from "./SearchingMenu";
import SecondDiv from "./SecondDiv";
import bubbleSort from "../Algorithms/Sorting";

function FirstDiv({bubbleSort, mergeSort,insertionSort,arr,speed,speedRange,sizeRange,generateNewArray,getAlgorithm,algo}) {
    return (
        <div className="left">
            <p>Speed: <span id="speedValue">5</span></p>
            <input id="speedSlider" type="range" min="1" max="10" step="1" defaultValue="5" onInput={speedRange} />

            <p>Array Size: <span id="sizeValue">20</span></p>
            <input id="sizeSlider" type="range" min="3" max="100" step="1" defaultValue="25" onInput={sizeRange} />

            <Button text={"Generate New Array"} className={"smallbtn"} onClick={generateNewArray}></Button>

            <div className="dropdown">
                <Button idx={"algobtn"} className={"smallbtn"} text={"Sorting"}></Button>
                <div className="dropdown-content">
                    <span id="sortingSpan" onClick={()=>getAlgorithm(1,"Sorting")}>Sorting</span>
                    <span id="searchinSpan" onClick={()=>getAlgorithm(2,"Searching")}>Searching</span>
                </div>
            </div>

            {algo==1 && <SortingMenu array={arr} speed={speed} mergeSort={mergeSort} bubbleSort={bubbleSort} insertionSort={insertionSort}></SortingMenu>}
            {algo==2 && <SearchingMenu></SearchingMenu>}
            

        </div>
    )
}

export default FirstDiv
