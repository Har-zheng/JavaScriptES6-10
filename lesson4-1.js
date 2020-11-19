async function firstAsync() {
  return  27
}
// async await  默认返回一个Promise 对象  实际上async 函数内部实现了Promise  做了简化
console.log(firstAsync() instanceof Promise )
console.log(firstAsync())
firstAsync().then(val => {
  console.log(val)
})



async function asyncFun(params) {
  let promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve('not it is done')
    },1000)
  })
  await promise.then(val => {
    console.log(val)
  })
  // return Promise.resolve(3)
}
asyncFun().then(val => {
  console.log( val)
})