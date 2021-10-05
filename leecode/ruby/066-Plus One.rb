def plus_one(digits)
  digits =( digits.join.to_i + 1).to_s
  arr=Array.new 
  digits.size.times do |i|
     arr.push( digits[i].to_i  )  
  end 
  return arr
end

a = [1,2,3]

p plus_one(a)

# def plus_one(digits)
#   str= ""
#   digits.each do |index|
#     str = str + index.to_s
#   end 
#    data=str.to_i+1
#   newstr=data.to_s
#    arr=Array.new 
#   newstr.size.times do |i|
#      arr.push( newstr[i].to_i  )  
#   end 
#   return arr
# end