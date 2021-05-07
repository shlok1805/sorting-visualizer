import React from "react";

function HeapSort(arr) {

    var animations=[];

    heapSort(arr,arr.length);

    // To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i)
{
    var largest = i; // Initialize largest as root
    var l = 2 * i + 1; // left = 2*i + 1
    var r = 2 * i + 2; // right = 2*i + 2
 
    // If left child is larger than root
    if (l < n && arr[l] > arr[largest])
        largest = l;
 
    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest])
        largest = r;
 
    // If largest is not root
    if (largest != i) {
        animations.push([0,i,largest,0,0]);
        animations.push([1,i,largest,arr[i],arr[largest]]);
        var temp=arr[i];
        arr[i]=arr[largest];
        arr[largest]=temp;
        animations.push([2,i,largest,0,0]);
 
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}
 
// main function to do heap sort
function heapSort(arr, n)
{
    // Build heap (rearrange array)
    for (var i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);
 
    // One by one extract an element from heap
    for (var i = n - 1; i >= 0; i--) {
        // Move current root to end
        animations.push([0,0,i,0,0]);
        animations.push([1,0,i,arr[0],arr[i]]);
        var temp=arr[i];
        arr[i]=arr[0];
        arr[0]=temp;
        animations.push([2,0,i,0,0]);
        animations.push([3,i,0,0,0]);
 
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

return animations;

}

export default HeapSort;