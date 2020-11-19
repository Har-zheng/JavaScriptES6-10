let grade = {
  'lilei': 95,
  'hanmeimei': 99
}
let result = []
for (let k in grade) {
  result.push(k)
}
console.log(result)
console.log(Object.keys(grade))
console.log(Object.values(grade))
console.log(Object.entries(grade))
console.log(Object.keys(grade).filter(item => item === 'lilei'))
for (let [k, v] of Object.entries(grade)) {
  console.log(k, v)
}

// es8    中增加补白
/*
padStart  起始位置    padStart结束为止
*/
for (let i = 1; i < 30020; i++) {
  console.log(i.toString().padStart(5, '*#'))
}