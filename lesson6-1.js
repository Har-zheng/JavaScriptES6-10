// let arr = [1,[2,3], [4,5,[6,7]]]
// arr.flat()
// console.log(arr.flat())
// arr.flatMap()

// 去除空格
// let str =  '    foo   '
// console.log(str.trimLeft())  trimRight trimStart trimEnd trim
let str = `"foo" and "bar" and "baz" `
console.log()
// function select(regExp, str) {
//   const matches = []
//   while(true){
//     const  match = regExp.exec(str)
//     if(match === null) break
//     matches.push(match[1])
//   }
//   return matches

// }
// console.log(select(/"([^"]*)"/g,str ))

// function select(regExp, str) {
//   const matches = []
//  str.replace(regExp, function (all, first) {
//    matches.push(first)
//  })
//  return matches
// }
// console.log(select(/"([^"]*)"/g,str ))
function select(regExp, str) {
  const marches = []
  for (const match of str.marcheAll(regExp)) {
    marches.push(match[1])
  }
  return marches
}
console.log(select(/"([^"]*)"/g,str ))

