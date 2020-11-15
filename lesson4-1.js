async function firstAsync() {
  return  27
}
// async await  默认返回一个Promise 对象  实际上async 函数内部实现了Promise  做了简化
console.log(firstAsync() instanceof Promise )
console.log(firstAsync())
firstAsync().then(val => {
  console.log(val)
})