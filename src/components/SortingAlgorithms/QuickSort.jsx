import React from "react";



function QuickSort(arr) {

    var animations=[];
    quickSort(arr,0,arr.length-1);

    function partition (arr,  low, high) {
        var pivot = arr[high]; // pivot
        // animations.push([3,high,0,0,0]);
        var i = (low - 1); // Index of smaller element and indicates the right position of pivot found so far
 
        for (var j = low; j <= high - 1; j++) {
            // If current element is smaller than the pivot
            animations.push([0,i+1,j,0,0]);
            if (arr[j] < pivot) {
                i++; // increment index of smaller element
                animations.push([1,i,j,arr[i],arr[j]]);
                animations.push([2,i,j,0,0]);
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
            else {
                animations.push([2,i+1,j,0,0]);
            }
        }
        animations.push([0,i+1,high,0,0]);
        animations.push([1,i+1,high,arr[i+1],arr[high]]);
        animations.push([2,i+1,high,0,0]);
        var temp=arr[i+1];
        arr[i+1]=arr[high];
        arr[high]=temp;
        animations.push([4,i+1,0,0,0]);
        return (i + 1);
    }

    function quickSort(arr, low, high) {
        if (low <= high) {
            /* pi is partitioning index, arr[p] is now
            at right place */
            var pi = partition(arr, low, high);

            // Separately sort elements before
            // partition and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    return animations;

}

export default QuickSort;