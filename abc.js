function fun(value) {
    switch (value) {
      case 'A':
        console.log("A")
        break;
      case undefined:
        console.log("undefined")
        break;
      default:
        console.log('4444')
        break;
    }
}
fun( new String('A'))