//代理的作用 
let o = {
  name: 'xiaoming',
  price: 190
}
let d = new Proxy(o, {
  get(target, key){
    if(key === 'price'){
      return target[key] + 20
    }else{
      return target[key]
    }
  }
})
console.log(d.price)
console.log(o)
for(let [key, value] of Object.entries(o)){
  console.log(key)
  console.log(value)
  Object.defineProperty(o,key, {
    writable: false
  })
}
// Proxy.revocable
