import React, { useEffect, useState } from "react";
import BubbleSort from "./SortingAlgorithms/BubbleSort";
import "./Array.css";
import MergeSort from "./SortingAlgorithms/MergeSort";
import QuickSort from "./SortingAlgorithms/QuickSort";
import HeapSort from "./SortingAlgorithms/HeapSort";

function Array() {
    const [array, setArray] = useState([]);
    const [originalArray, setOriginalArray] = useState([]);
    const [isSorting, setIsSorting] = useState(false);

    useEffect(() => {
        resetArray();
    }, []);

    function resetArray() {
        const arr = [];
        for (let i = 0; i < 150; i++) {
            arr.push(Math.floor((Math.random() * 650) + 5));
        }
        setArray(arr);
        setOriginalArray(arr); // Keep a copy of the original array
        setIsSorting(false);
    }

    function changeCSS() {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < arrayBars.length; i++) {
            arrayBars[i].style.backgroundColor = 'blue';
        }
    }

    function handleBubbleSort() {
        startSorting(BubbleSort);
    }

    function handleMergeSort() {
        startSorting(MergeSort);
    }

    function handleQuickSort() {
        startSorting(QuickSort);
    }

    function handleHeapSort() {
        startSorting(HeapSort);
    }

    function startSorting(sortingAlgorithm) {
        setIsSorting(true);
        // Create a copy of the original array for sorting
        const animations = sortingAlgorithm([...originalArray]);
        animateSorting(animations);
    }

    function animateSorting(animations) {
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const [code, bar1, bar2, newHeight1, newHeight2] = animations[i];
            setTimeout(() => {
                if (code === 0) {
                    arrayBars[bar1].style.backgroundColor = 'red';
                    arrayBars[bar2].style.backgroundColor = 'red';
                } else if (code === 1) {
                    arrayBars[bar1].style.height = `${newHeight2}px`;
                    arrayBars[bar2].style.height = `${newHeight1}px`;
                } else if (code === 2) {
                    arrayBars[bar1].style.backgroundColor = 'blue';
                    arrayBars[bar2].style.backgroundColor = 'blue';
                } else {
                    arrayBars[bar1].style.backgroundColor = 'turquoise';
                }

                if (i === animations.length - 1) {
                    setIsSorting(false); // Reset sorting state when done
                    // changeCSS(); // Reset bar colors after sorting is done
                }
            }, i * 5); // Adjust the delay as necessary
        }
    }

    return (
        <div className="array-container">
            {array.map((num, index) => (
                <div
                    className="array-bar"
                    key={index}
                    style={{ height: `${num}px` }}
                />
            ))}
            <button onClick={() => { resetArray(); changeCSS(); }} disabled={isSorting}>Generate New Array</button>
            <button onClick={handleBubbleSort} disabled={isSorting}>Bubble Sort</button>
            <button onClick={handleMergeSort} disabled={isSorting}>Merge Sort</button>
            <button onClick={handleQuickSort} disabled={isSorting}>Quick Sort</button>
            <button onClick={handleHeapSort} disabled={isSorting}>Heap Sort</button>
        </div>
    );
}

export default Array;
