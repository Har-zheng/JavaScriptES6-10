// console.log(/foo.bar/s.test('foo\nbar'))
// const re = /foo.bar/sugi
// console.log(re.dotAll) 
// console.log(re.flags) 
// const t = '2020-11-23'.match(/(\d{4})-(\d{2})-(\d{2})/)
// const t = '2020-11-23'.match(/(?<year>))
const  test = 'hello world'
console.log(test.match(/hello(?=\sworld)/))
console.log(test.match(/(?<=hello\s)world/))


