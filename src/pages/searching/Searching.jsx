import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import "./style.scss";
import { getIsRunning,resetBars,setIsRunning,wait } from '../utils'; 
import Playground from './Playground';
import getLinearSearch from './Algorithms/LinearSearch';
import getBinarySearch from './Algorithms/BinarySearch';
function Searching() {
    const SPEED_LIMIT = 100;
    const PRIMARY_COLOR = 'orange';
    const SECONDARY_COLOR = 'blue';
    const [array, setArray] = useState([]);
    let speed = 5;
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
        speed = currentVal;
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
        speed = document.getElementById("speedSlider").value;
        var arr = [];
        for (let i = 0; i < arraySize; i++) {
            arr.push(Math.floor(Math.random() * (1000) + 8));
        }
        setArray(arr);
        resetBars();
    }
    async function linearSearch() {
        resetBars();
        var str = document.getElementById("searchNumber").value;
        var num = Number(str);
        num = Math.max(0, Math.min(100000, num));
        setIsRunning("true");
        var bars = document.querySelectorAll(".bar");
        var animatedArray = getLinearSearch(array, num);
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                let { type, index } = animatedArray[i];
                if (type === "compare")
                    bars[index].style.backgroundColor = "aqua";
                else if (type === "found") {
                    bars[index].style.backgroundColor = "green";
                }
                await wait();
            }else
                break
        }
        setIsRunning("false");
    }
    async function binarySearch() {
        let arr = [...array]
        arr.sort((a,b)=>a-b);
        setArray(arr);
        resetBars();
        var str = document.getElementById("searchNumber").value;
        var num = Number(str);
        num = Math.max(0, Math.min(100000, num));
        setIsRunning("true");
        var bars = document.querySelectorAll(".bar");
        var animatedArray = getBinarySearch(arr, num);
        console.log("animatedArray",animatedArray);
        let colors = ["blueviolet","crimson","orange"]
        for (let i = 0; i < animatedArray.length; i++) {
            if (getIsRunning()) {
                console.log("index",i,isRunning)
                let { type, index } = animatedArray[i];
                if (type === "compare")
                    bars[index].style.backgroundColor = "aqua";
                else if (type === "found") {
                    bars[index].style.backgroundColor = "green";
                }else if(type === "updating"){
                    let {color} = animatedArray[i];
                    bars[index].style.backgroundColor = colors[color];
                }
                await wait();
            }else break
        }
        setIsRunning("false");
    }
    return (
        <>
            <Navbar
                speedRange={speedRange}
                generateNewArray={generateNewArray}
                sizeRange={sizeRange}
                linearSearch={linearSearch}
                binarySearch={binarySearch} />
            <div className="playground-container">
                {array && <Playground arr={array} />}
            </div>
        </>
    )
}

export default Searching
