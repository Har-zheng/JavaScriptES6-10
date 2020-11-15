// Reflect  反射机制

// Reflect.construct
// 相当于运行 new
let d = Reflect.construct(Date, [])
console.log(d.getTime())


// Reflect.defineProperty()
// 和 Object.defineProperty() 类似, Reflect返回boolean, Object成功返回对象，失败抛出错误
let student = {}
const r = Reflect.defineProperty(student, 'name', {
  value: "ajanuw"
})
console.log(student, r)
// Reflect.deleteProperty
// 返回boolean 很像 delete
// Reflect.get(obj, 'name');
// 类似 obj['name']
// Reflect.getOwnPropertyDescriptor(obj,'name')
// 返回属性描述符，类似 Object.getOwnPropertyDescriptor()

// Reflect.getPrototypeOf(obj)
// 返回指定对象的原型, 与Object.getPrototypeOf() 方法是一样的

// Reflect.has(obj, prop)
// 返回boolean, 类似 in映射

// Reflect.isExtensible(obj), 可扩展返回true
// 判断一个对象是否可扩展,与 Object.isExtensible()相似

// Reflect.set(obj,'name','ajanuw');
// 类似 obj.name = 'ajanuw', obj['name'] = 'ajanuw'

// Reflect.setPrototypeOf(obj, null)
// 指定对象的原型, 类似 Object.setPrototypeOf()

// Reflect.ownKeys( obj )
// 返回对象自身的属性键组成的数组, 类似 Object.getOwnPropertyNames(obj)
// Reflect.preventExtensions(obj);
// 封闭一个对象，类似 Object.preventExtensions(obj)