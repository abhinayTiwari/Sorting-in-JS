function MAX_Heapify(A, n, i){
	var left = 2*i+1;
	var right = (2*i) +2, largest =i, length = n;
	if(left < n && A[left] > A[largest] ){
		largest = left;
	}
	if(right < n && A[right] > A[largest])
		largest = right;
	
	if( largest !== i){
            swap(A, i, largest);
			console.log(A)
		    MAX_Heapify(A,length,largest);
	}
	
}

function swap(a, i,j){
    let temp = A[i];
	A[i] = A[j];
	A[j] = temp;
}

function heapsort(A){
	var n = A.length;
	for(var i= Math.floor(n/2 -1); i >=0; i--){
		MAX_Heapify(A, n, i);
	}
	
	for(var i= n-1; i >=0; i--){
		console.log(A[0]);
		swap(A,0, i);
		MAX_Heapify(A,i, 0);
	}
}

var A = [2,6,3,5,7,8,9]
heapsort(A)