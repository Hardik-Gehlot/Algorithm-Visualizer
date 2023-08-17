import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import "./style.scss";
import { getIsRunning, resetBars, setIsRunning, wait } from '../utils';
import Playground from './Playground';
import getBubbleSort from './Algorithms/BubbleSort';
import getMergeSort from './Algorithms/MergeSort';
import getInsertionSort from './Algorithms/InsertionSort';
import getSelectionSort from './Algorithms/SelectionSort';
import getQuickSort from './Algorithms/QuickSort'
function Sorting() {
    const [array, setArray] = useState([]);
    let isRunning = false
    let arraySize = 20;
    useEffect(() => {
        generateNewArray();
    }, []);
    function speedRange() {
        var input = document.getElementById("speedSlider");
        var text = document.getElementById("speedValue");
        var currentVal = input.value;
        text.innerHTML = currentVal;
    }
    function sizeRange() {
        var input = document.getElementById("sizeSlider");
        var text = document.getElementById("sizeValue");
        var currentVal = input.value;
        text.innerHTML = currentVal;
        arraySize = currentVal;
    }
    function generateNewArray() {
        setIsRunning("false");
        arraySize = document.getElementById("sizeSlider").value;
        // speed = document.getElementById("speedSlider").value;
        var arr = [];
        for (let i = 0; i < arraySize; i++) {
            arr.push(Math.floor(Math.random() * (1000) + 8));
        }
        setArray(arr);
        resetBars();
    }
    async function bubbleSort() {
        resetBars();
        setIsRunning("true");
        var divs = document.querySelectorAll(".bar");
        var animatedArray = getBubbleSort(array);
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                let { type, indexes } = animatedArray[i];
                let [index1, index2] = indexes;
                if (type === "compare") {
                    divs[index1].style.backgroundColor = "aqua";
                    divs[index2].style.backgroundColor = "aqua";
                }
                else if (type === "swap") {
                    let [val1, val2] = animatedArray[i].values;
                    const tempHeight = divs[index1].style.height;
                    divs[index1].style.height = divs[index2].style.height;
                    divs[index2].style.height = tempHeight;

                    divs[index1].textContent = array[index1];
                    divs[index2].textContent = array[index2];

                    divs[index1].style.backgroundColor = "green";
                    divs[index2].style.backgroundColor = "green";
                    divs[index1].textContent = val1;
                    divs[index2].textContent = val2;
                }
                await wait();
                divs[index1].style.backgroundColor = "orange";
                divs[index2].style.backgroundColor = "orange";
            } else
                break
        }
        setIsRunning("false");
    }

    async function mergeSort() {
        resetBars();
        setIsRunning("true");
        var divs = document.querySelectorAll(".bar");
        var animatedArray = getMergeSort(array);
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                let currStep = animatedArray[i];
                if (currStep.type === "compare") {
                    const [ind1, ind2] = currStep.indexes;
                    divs[ind1].style.backgroundColor = "aqua";
                    divs[ind2].style.backgroundColor = "aqua";
                    await wait();
                    divs[ind1].style.backgroundColor = "orange";
                    divs[ind2].style.backgroundColor = "orange";
                }
                else if (currStep.type === "overwrite") {
                    let ind = currStep.index;
                    let val = currStep.value;
                    divs[ind].style.backgroundColor = "green";
                    divs[ind].style.height = (val / 10) + "%";
                    divs[ind].textContent = val;
                    await wait();
                    divs[ind].style.backgroundColor = "orange";
                }
            } else break
        }
        setIsRunning("false");
    }

    async function insertionSort() {
        resetBars();
        setIsRunning("true");
        var divs = document.querySelectorAll(".bar");
        var animatedArray = getInsertionSort(array);
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                let { type, index } = animatedArray[i];
                if (type === "compare") {
                    divs[index].style.backgroundColor = "aqua";
                }
                else if (type === "overwrite") {
                    let { value } = animatedArray[i];
                    divs[index].style.backgroundColor = "green";
                    divs[index].style.height = (value / 10) + "%";
                    divs[index].textContent = value;
                } else if (type === "pivot") {
                    divs[index].style.backgroundColor = "crimson";
                }
                await wait();
                divs[index].style.backgroundColor = "orange"
            } else break
        }
        setIsRunning("false");
    }
    async function selectionSort() {
        resetBars();
        setIsRunning("true");
        var divs = document.querySelectorAll(".bar");
        var animatedArray = getSelectionSort(array);
        console.log(animatedArray);
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                let currStep = animatedArray[i];
                if (currStep.type === "compare") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "aqua";
                    await wait();
                    divs[index].style.backgroundColor = "orange"
                }
                else if (currStep.type === "overwrite") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "purple";
                    await wait();
                } else if (currStep.type === "pivot") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "crimson";
                    await wait();
                } else if (currStep.type === "swap") {
                    let [index1, index2] = currStep.indexes;
                    let [val1, val2] = currStep.values;
                    const tempHeight = divs[index1].style.height;
                    divs[index1].style.height = divs[index2].style.height;
                    divs[index2].style.height = tempHeight;

                    divs[index1].style.backgroundColor = "green";
                    divs[index2].style.backgroundColor = "green";
                    divs[index1].textContent = val1;
                    divs[index2].textContent = val2;
                    await wait();
                    divs[index1].style.backgroundColor = "orange";
                    divs[index2].style.backgroundColor = "orange";
                } else if (currStep.type === "setBack") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "orange";
                }
            } else break
        }
        setIsRunning("false");
    }
    async function quickSort() {
        resetBars();
        setIsRunning("true");
        var divs = document.querySelectorAll(".bar");
        var animatedArray = getQuickSort(array);
        console.log(animatedArray);
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                let currStep = animatedArray[i];
                if (currStep.type === "compare") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "aqua";
                    await wait();
                    divs[index].style.backgroundColor = "orange"
                } else if (currStep.type === "pivot") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "crimson";
                    await wait();
                } else if (currStep.type === "swap") {
                    let [index1, index2] = currStep.indexes;
                    let [val1, val2] = currStep.values;
                    const tempHeight = divs[index1].style.height;
                    divs[index1].style.height = divs[index2].style.height;
                    divs[index2].style.height = tempHeight;

                    divs[index1].style.backgroundColor = "green";
                    divs[index2].style.backgroundColor = "green";
                    divs[index1].textContent = val1;
                    divs[index2].textContent = val2;
                    await wait();
                    divs[index1].style.backgroundColor = "orange";
                    divs[index2].style.backgroundColor = "orange";
                } else if (currStep.type === "setBack") {
                    let { index } = animatedArray[i];
                    divs[index].style.backgroundColor = "orange";
                }
            } else break
        }
        setIsRunning("false");
    }

    return (
        <>
            <Navbar
                speedRange={speedRange}
                generateNewArray={generateNewArray}
                sizeRange={sizeRange}
                bubbleSort={bubbleSort}
                mergeSort={mergeSort}
                insertionSort={insertionSort}
                selectionSort={selectionSort}
                quickSort={quickSort} />
            <div className="playground-container">
                {array && <Playground arr={array} />}
            </div>
        </>
    )
}

export default Sorting
