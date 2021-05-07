import React from "react";

function BubbleSort(a) {
    let animations= [];
    for(var i=a.length-1;i>=0;i--) {
        for(var j=0;j<i;j++) {
            animations.push([0,j,j+1,0,0]);
            if(a[j]>a[j+1]) {
                animations.push([1,j,j+1,a[j],a[j+1]]);
                var temp=a[j];
                a[j]=a[j+1];
                a[j+1]=temp;
            }
            animations.push([2,j,j+1,0,0]);
        }
        animations.push([3,i,0,0,0]);
    }
    return animations;
}

export default BubbleSort;