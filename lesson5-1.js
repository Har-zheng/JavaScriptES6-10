// For await of
// function Gen(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(params)
//     },params)
//   })
// }
// async function test() {
//   let arr = [Gen(2000), Gen(1000), Gen(3000)]
//   for await (let item of arr){
//     console.log(Date.now(),  item)
//   }
// }
// test()


const obj ={
  count:0,
  Gen(time){
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve({done: false, value: time})
      }, time)
    })
  },
  [Symbol.asyncIterator](){
    let self = this
    return {
      next(){
        self.count++
        if(self.count < 4){
          return self.Gen(Math.random() * 1000)
        }else{
          return  Promise.resolve({
            done: true,
            value: ''
          })
        }
      }
    }
  }
}
console.log(obj)
async function test() {
  for await(let item of obj){
    console.log(Date.now(), item)
  }
}
test()