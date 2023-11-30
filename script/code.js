let myPromise = new Promise( args )
function args(resolve, reject) {
    let numb1 = +prompt("Enter only a number")
    if(typeof numb1 == 'number'){
        resolve(`The entered number is ${numb1}`)
        reject(`unfortunately ${numb1} is not a number`)
    }
     
}
myPromise.then(
    completed=> console.log(completed),
    rejected => console.log(rejected)
)