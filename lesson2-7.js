//   `` 增强字面量

// Object.entries  将对象 以数组方式储存  [ [ 'name', 's' ], [ 'surname', 't' ] ]
let user = { name:'s', surname: 't'}
console.log(Object.entries(user))
for(let [k, v] of  Object.entries(user)){
  console.log(k, v)
  
}

// 对象的结构赋值

let options = {
  title: '郑',
  width: 100,
  height: 200
}
// 重命名的方式 { title:title2}  可以设置默认值
let { title:title2, width = 130, height } = options
console.log(title2)
let options2 = {
 size: {
   width: 100,
   height: 200
 },
 items: ['Cake', 'Donut'],
 extra: true

}
let { size:{ width } } = options2
console.log(width)
