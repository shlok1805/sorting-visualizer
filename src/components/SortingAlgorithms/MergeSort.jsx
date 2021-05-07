import React from "react";




function MergeSort(arr) {

    var N = arr.length;
    

    let animations=[];

    mergeSort(arr,0,arr.length-1);

    function merge(arr,l,m,r) {

    
        var n1 = m - l + 1;
        var n2 = r - m;
     
        // Create temp arrays
        var L=[],R=[];
     
        // Copy data to temp arrays L[] and R[]
        for (var i = 0; i < n1; i++)
            L.push(arr[l + i]);
        for (var j = 0; j < n2; j++)
            R.push(arr[m + 1 + j]);
        
        
        // Merge the temp arrays back into arr[l..r]
     
        // Initial index of first subarray
        i = 0;
     
        // Initial index of second subarray
        j = 0;
     
        // Initial index of merged subarray
        var k = l;
     
        while (i < n1 && j < n2) {
            animations.push([0,k,0,0,0]);
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                animations.push([1,k,0,0,L[i]]);
                animations.push([(l===0 && r===N-1)?3:2,k,0,0,0]);
                i++;
            }
            else {
                animations.push([1,k,0,0,R[j]]);
                animations.push([(l===0 && r===N-1)?3:2,k,0,0,0]);
                arr[k] = R[j];
                j++;
            }
            k++;
        }
     
        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            animations.push([0,k,0,0,0]);
            animations.push([1,k,0,0,L[i]]);
            animations.push([(l===0 && r===N-1)?3:2,k,0,0,L[i]]);
            arr[k] = L[i];
            i++;
            k++;
        }
     
        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            animations.push([0,k,0,0,0]);
            animations.push([1,k,0,0,R[j]]);
            animations.push([(l===0 && r===N-1)?3:2,k,0,0,0]);
            arr[k] = R[j];
            j++;
            k++;
        }

    }
    
    function mergeSort(arr,l,r) {
        if(l<r) {
        var mid=Math.floor((l+r)/2);
        mergeSort(arr,l,mid);
        mergeSort(arr,mid+1,r);
        merge(arr,l,mid,r);
        }
    }


    return animations;
}



export default MergeSort;