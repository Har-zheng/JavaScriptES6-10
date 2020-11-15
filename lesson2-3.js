// let Animal = function (type) {
//   this.type = type
//   this.eat = function name(params) {

//   }
// }
// const dog = new Animal('dog')
// const monkey = new Animal('monkey')
// console.log(dog)
// console.log(monkey)


// class Animal{
//   constructor(type){
//     this.type = type
//   }
//   get age(){
//     return 4
//   }
// }
// setter getter


// 
const s = new Set()

s.add('zheng').add('hongzhen').add('zhen')
console.log(s)
console.log(s.has('zh'))
console.log(s.size)
console.log(s.keys())
console.log(s.values())
console.log(s.entries())

// s.forEach(item => {
//   console.log(item)
// })

for (let item of s) {
  console.log(item)
}

// new Map([[1,2],[3,4]])
let map = new Map()

map.set(1, 2)
map.set('p', 6)
console.log(map)
console.log(map.size)
console.log(map.has(1))
console.log(map.get(1))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
// map.forEach((value, key)=> {
//   console.log(value, key)
// })
for (let [key, value] of map) {
  console.log

  (value, key)
}

let obj = {
  m: 1,
  a: 3,
  b: 4
}
let teaget = {}
Object.assign(teaget, obj)
console.log(teaget)

//  y  和  g 的区别 
const r = 'aaa_aa_a'
const reg = /a+/g
const reg2 = /a+/y
console.log(reg.exec(r))
console.log(reg2.exec(r))
console.log(reg.exec(r))
console.log(reg2.exec(r))
// sticky
