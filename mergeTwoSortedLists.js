var mergeTwoLists = function(list1, list2) {
  if(list1 === undefined){
      return list2.sort((a, b) => a - b)
  }else if(list2 === undefined){
      return list1.sort((a,b) => a - b)
  }else if(list1 && list2 === undefined){
      return list1
  }
     let merged = [...list1, ...list2]
  return merged.sort((a, b) => a - b)
 
};

console.log(mergeTwoLists([1], []))