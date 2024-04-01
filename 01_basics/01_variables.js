const id=123
var name='vijay'
let className='MBA'
var a='amit'

rollno=123
// id=321  //Assignment to constant variable
{
    /*console.log(name)
    console.log(className)
    console.log(id)*/
    var a='vijay'  // override a variable here. and outside the block same value 'vijay' available
    let b='MBA' // not accessible after block
    console.table([a,b,id,name,className]) // name is @deprecated
}
console.table([a,id,name,className])   // b is not defined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
