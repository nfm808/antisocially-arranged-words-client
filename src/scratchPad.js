// brute force solution
function euler(n) {
  let sum = 0;
  for(let x = 0; x < n; x ++) {
    if ( x % 3 === 0 && x % 5 === 0) {
      sum = sum + x;
    } else if ( x % 5 === 0) {
      sum = sum + x
    } else if ( x % 3 === 0) {
      sum = sum + x
    }
  }
  return console.log(sum);
};


//euler(1000);

function isIsogram(str) {
  if (!str) {
    return console.log(false)
  }
  let set = [...new Set(str.split(''))]
  if (set.length < str.length) {
    return console.log(false)
  }
  return console.log(true)
}

// isIsogram('', console.log('isfalse'));
// isIsogram('isogram', console.log('istrue'));
// isIsogram('bob', console.log('isfalse'));

function tripledouble(num1, num2) {
  //code me
  function countCheck(num) {
    num = num.toString().split('')
    console.log('num', num);
    let ans = {};
    for (let x = 0; x < num.length; x++) {
      let count = 0;
      let valueOfTwo;
      let valueOfThree;
      for(let y = 1; y < num.length; y++) {
        num[x] === num[y] && count++
        if(count === 3) { valueOfThree = num[x] }
        if(count === 2) { valueOfTwo = num[x] }
      }
      (valueOfTwo && valueOfThree) ? ans.three = valueOfThree :
      (valueOfTwo && !valueOfThree) ? ans.two = valueOfTwo : ans 
    }
    console.log('ans', ans);
    return ans;
  }
  if (countCheck(num1).three === countCheck(num2).two) {
    console.log(1)
  } else {
    console.log(0)
  }
}

tripledouble(451999277, 41177722899);