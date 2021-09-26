# Difficulty:Medium
def length_of_longest_substring(s)    
    max = 0

    for i in 0..s.length-1
        check = Array.new(256, false)
        for j in i..s.length-1
            index = s[j].ord
            if check[index] == false
                check[index] = true
            else
                break
            end
            
        end
        if check.count(true) > max      
            max = check.count(true)
        end
    end
    max
end

p length_of_longest_substring('c')
p length_of_longest_substring('')
p length_of_longest_substring('abcabcbb')
p length_of_longest_substring('bbbbb')
p length_of_longest_substring('pwwkew')