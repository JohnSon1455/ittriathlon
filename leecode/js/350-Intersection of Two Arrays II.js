var intersect = function(nums1, nums2) {
  var store, array;
var number = [];
if(nums1.length > nums2.length){
  store = nums1;
  array = nums2;
} else {
  store = nums2;
  array = nums1;       
}

for(var i = 0; i < array.length ; i++){
  var v = array[i];
  if(store.indexOf(v) >= 0){
      store[store.indexOf(v)] = null;
      number.push(v);
  }
}  
return number;
};