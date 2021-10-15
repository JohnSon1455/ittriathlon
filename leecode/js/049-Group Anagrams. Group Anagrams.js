var groupAnagrams = function(strs) {
  let len = strs.length, str = '', res = new Map() 
  for(let i=0; i<len; i++) {
      str = strs[i].split('').sort().join('')
      if(!res.has(str)) res.set(str, new Array())
      res.get(str).push(strs[i])
  } 
  return [...res.values()]
};