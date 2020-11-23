const input = {
  a: 1,
  b: 2,
  q: 1,
  w: 5
}
const test = {
  d: 5
}
const output = {
  ...input,
  ...test,
  c: 3
}
console.log(input, output)
input.a = 4
console.log(input, output)
const { a, b, ...rest } = input
console.log(a, b, rest)