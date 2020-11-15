//  Generator（如何让遍历“停”下来）
function * loop(){
  for(let i = 0 ; i<5; i++){
    yield console.log(i)
  }
}
const l = loop()
l.next()


function * gen(){
  let val
  val = yield  [1,2,3]
  console.log(val)
}
const L = gen()

console.log(L.next())
console.log(L.next())