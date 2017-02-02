let newArr = []

function add (myArr){
	for ( var i = 0; i < myArr.length; i++){
		// newArr = []
		newArr.push(myArr[i] + 2)
		
	}
	console.log(newArr)
}

let randomArr = [1,2,3]
add (randomArr)

// function myLoop (array)
// {
//     for ( var i = 0; i < array.length; i++) {
//          array[i] = array[i]  + 2;
//      console.log (array)
//     }
//     console.log (array); 
// }

// let arr = [ 1, 2, 3 ]
// myLoop (arr) 