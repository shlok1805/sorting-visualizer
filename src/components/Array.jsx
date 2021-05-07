import React, { useEffect, useState } from "react";
import BubbleSort from "./SortingAlgorithms/BubbleSort"
import "./Array.css";
import MergeSort from "./SortingAlgorithms/MergeSort";
import QuickSort from "./SortingAlgorithms/QuickSort";
import HeapSort from "./SortingAlgorithms/HeapSort";

function Array() {


    const [array,setArray] = useState([]);

    useEffect (() => {
        resetArray();
    }, []);

    function resetArray() {
        var arr=[];
        for(var i=0;i<150;i++) {
            arr.push(Math.floor((Math.random() * 650) + 5));
        }
        setArray(arr);
    }

    function changeCSS() {
        const arrayBars=document.getElementsByClassName('array-bar');
        for(var i =0;i<150;i++) 
            arrayBars[i].style.backgroundColor='blue';
    }


    function handleBubbleSort() {
        const animations=BubbleSort(array);
        
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [code, bar1, bar2,newHeight1,newHeight2]= animations[i];
            setTimeout(() => {
                if(code===0) {
                    arrayBars[bar1].style.backgroundColor='red';
                    arrayBars[bar2].style.backgroundColor='red';
                }
                else if(code===1) {
                    arrayBars[bar1].style.height=`${newHeight2}px`;
                    arrayBars[bar2].style.height=`${newHeight1}px`;
                }
                else if(code===2) {
                    arrayBars[bar1].style.backgroundColor='blue';
                    arrayBars[bar2].style.backgroundColor='blue';
                }
                else {
                    arrayBars[bar1].style.backgroundColor='turquoise';
                }
            },i*0.5);
            
        }
    }

    function handleMergeSort() {
        const animations=MergeSort(array);

        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [code, bar1, bar2,newHeight1,newHeight2]= animations[i];
            setTimeout(() => {
                if(code===0) {
                    arrayBars[bar1].style.backgroundColor='red';
                }
                else if(code===1) {
                    arrayBars[bar1].style.height=`${newHeight2}px`;
                }
                else if(code===2) {
                    arrayBars[bar1].style.backgroundColor='blue';
                }
                else {
                    arrayBars[bar1].style.backgroundColor='turquoise';
                }
            },i*2);
            
        }

    }

    function handleQuickSort() {
        const animations=QuickSort(array);
    
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [code, bar1, bar2,newHeight1,newHeight2]= animations[i];
            setTimeout(() => {
                if(code===0) {
                    arrayBars[bar1].style.backgroundColor='red';
                    arrayBars[bar2].style.backgroundColor='red';
                }
                else if(code===1) {
                    arrayBars[bar1].style.height=`${newHeight2}px`;
                    arrayBars[bar2].style.height=`${newHeight1}px`;
                }
                else if(code===2) {
                    arrayBars[bar1].style.backgroundColor='blue';
                    arrayBars[bar2].style.backgroundColor='blue';
                }
                else if(code===3) {
                    arrayBars[bar1].style.backgroundColor='yellow';
                }
                else {
                    arrayBars[bar1].style.backgroundColor='turquoise';
                }
            },i*5);
        
        }
    } 

    function handleHeapSort() {
        const animations=HeapSort(array);
        
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [code, bar1, bar2,newHeight1,newHeight2]= animations[i];
            setTimeout(() => {
                if(code===0) {
                    arrayBars[bar1].style.backgroundColor='red';
                    arrayBars[bar2].style.backgroundColor='red';
                }
                else if(code===1) {
                    arrayBars[bar1].style.height=`${newHeight2}px`;
                    arrayBars[bar2].style.height=`${newHeight1}px`;
                }
                else if(code===2) {
                    arrayBars[bar1].style.backgroundColor='blue';
                    arrayBars[bar2].style.backgroundColor='blue';
                }
                else {
                    arrayBars[bar1].style.backgroundColor='turquoise';
                }
            },i*5);
            
        }
    }

        




    return (
        
            <div className="array-container">
            {array.map((num,index) => 
                <div
                className="array-bar"
                key={index}
                style={{height:`${num}px`}}
                >
                {/* {num} */}
                </div>
            )}
            <button onClick={() => {resetArray(); changeCSS();}}>Generate New Array</button>
            <button onClick={handleBubbleSort}>Bubble Sort</button>
            <button onClick={handleMergeSort}>Merge Sort</button>
            <button onClick={handleQuickSort}>Quick Sort</button>
            <button onClick={handleHeapSort}>Heap Sort</button>
            </div>

        
    );

}


export default Array;