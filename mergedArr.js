var merge = function(nums1, m, nums2, n) {
  let numb = []
  if(m===0){
      return nums2;
  }else if(n===0){
      return nums1;
  }else{
      if(m > 1 && n > 1){
          for(let i=0; i<m; i++){
              numb.push(nums1[i])
          }
          for(let i=0; i<n; i++){
              numb.push(nums2[i])
          }
      }
      return numb.sort((a,b) => a-b);
  }
};
[1,2,3,0,0,0]
3
[2,5,6]
3
console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3))