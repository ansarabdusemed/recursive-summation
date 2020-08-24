function sum(arr, n) {
    //if there are 0 elemenets in the array return nothing
    if (n <= 0){
      return 0;
    }
    //else use recursive call 
    else {
      //keep calling sum() until n = 0, 
      //sum is taking the arr param & decrementing the n
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  
sum([2, 3, 4, 5], 3)