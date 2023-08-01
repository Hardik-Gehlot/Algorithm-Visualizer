import FirstDiv from "./FirstDiv"
import SecondDiv from "./SecondDiv"
import { useEffect, useState } from "react";
import { getMergeSortAnimations, getBubbleSortAnimations, getInsertionSortAlgorithm } from '../Algorithms/SortingAlgorithms';

function Playground() {
  const SPEED_LIMIT = 25;
  const PRIMARY_COLOR = 'orange';
  const SECONDARY_COLOR = 'blue';
  const [algo, setAlgo] = useState(1);
  const [speed, setSpeed] = useState(5);
  const [arraySize, setArraySize] = useState(20);
  const [array, setArray] = useState([]);
  const [isRunning, setIsRunning] = useState(false)
  useEffect(() => {
    generateNewArray();
  }, [arraySize]);
  function bubbleSort() {
    const animationArray = getBubbleSortAnimations(array);
    const divs = document.querySelectorAll(".bar");
    let currentIndex = 0;
    const animationInterval = setInterval(() => {
      if (currentIndex >= animationArray.length) {
        clearInterval(animationInterval);
        return;
      }

      const currentStep = animationArray[currentIndex];
      const [index1, index2] = currentStep.indexes;

      if (currentStep.type === "compare") {
        divs[index1].style.backgroundColor = "blue";
        divs[index2].style.backgroundColor = "blue";
      } else if (currentStep.type === "swap") {
        const tempHeight = divs[index1].style.height;
        divs[index1].style.height = divs[index2].style.height;
        divs[index2].style.height = tempHeight;

        divs[index1].textContent = array[index1];
        divs[index2].textContent = array[index2];

        divs[index1].style.backgroundColor = "green";
        divs[index2].style.backgroundColor = "green";
        divs[index1].textContent = currentStep.values[0];
        divs[index2].textContent = currentStep.values[1];
      }
      setTimeout(() => {
        divs[index1].style.backgroundColor = "orange";
        divs[index2].style.backgroundColor = "orange";
      }, 300);

      currentIndex++;
    }, 1000);
  }
  function mergeSort() {
    // const animations = getMergeSortAnimations(array);
    // for (let i = 0; i < animations.length; i++) {
    //   const arrayBars = document.getElementsByClassName('bar');
    //   const isColorChange = i % 3 !== 2;
    //   if (isColorChange) {
    //     const [barOneIdx, barTwoIdx] = animations[i];
    //     const barOneStyle = arrayBars[barOneIdx].style;
    //     const barTwoStyle = arrayBars[barTwoIdx].style;
    //     const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
    //     setTimeout(() => {
    //       barOneStyle.backgroundColor = color;
    //       barTwoStyle.backgroundColor = color;
    //     }, i * speed * SPEED_LIMIT);
    //   } else {
    //     setTimeout(() => {
    //       const [barOneIdx, newHeight] = animations[i];
    //       const barOneStyle = arrayBars[barOneIdx].style;
    //       barOneStyle.height = `${newHeight / 10}vh`;
    //       arrayBars[barOneIdx].innerHTML = newHeight;
    //     }, i * speed * SPEED_LIMIT);
    //   }
    // }



    const animationArray = getMergeSortAnimations(array);
    const divs = document.querySelectorAll(".bar");
    let currentIndex = 0;
    const animationInterval = setInterval(() => {
      if (currentIndex >= animationArray.length) {
        clearInterval(animationInterval);
        return;
      }

      const currentStep = animationArray[currentIndex];
      

      if (currentStep.type === "compare") {
        const [index1, index2] = currentStep.indexes;
        divs[index1].style.backgroundColor = "blue";
        divs[index2].style.backgroundColor = "blue";
      } else if (currentStep.type === "overwrite") {
        const [index1] = currentStep.index;
        divs[index1].style.height = currentStep.value * 10 + "px";
        divs[index1].textContent = currentStep.value;
        divs[index1].style.backgroundColor = "green";
      }

      setTimeout(() => {
        if(currentStep.type === "compare"){
          divs[currentStep.indexes[0]].style.backgroundColor = "orange";
          divs[currentStep.indexes[1]].style.backgroundColor = "orange";
        }else{
          divs[currentStep.index].style.backgroundColor = "orange";
        }
        
      }, 300);

      currentIndex++;
    }, 1000);
  }
  function insertionSort() {
    
  }
  function speedRange() {
    var input = document.getElementById("speedSlider");
    var text = document.getElementById("speedValue");
    var currentVal = input.value;
    text.innerHTML = currentVal;
    setSpeed(currentVal);
  }
  function sizeRange() {
    var input = document.getElementById("sizeSlider");
    var text = document.getElementById("sizeValue");
    var currentVal = input.value;
    text.innerHTML = currentVal;
    setArraySize(currentVal);
  }
  function generateNewArray() {
    setIsRunning(false)
    var arr = [];
    for (let i = 0; i < arraySize; i++) {
      arr.push(Math.floor(Math.random() * (1000) + 8));
    }
    setArray(arr);
  }
  function getAlgorithm(val, text) {
    var btn = document.getElementById("algobtn");
    btn.innerText = text;
    setAlgo(val);
  }
  return (
    <div className="playground-container">
      <FirstDiv arr={array} speedRange={speedRange} bubbleSort={bubbleSort} mergeSort={mergeSort} insertionSort={insertionSort} sizeRange={sizeRange} generateNewArray={generateNewArray} getAlgorithm={getAlgorithm} algo={algo} />
      {array && <SecondDiv arr={array} />}
    </div>
  )
}

export default Playground
