let array = [1,5,3,7,6,8]




function arrPop(arr){
    let res = []
let x = arr.length-1
for(let i =0;i< x;i++){
    res+=arr[i]

}
let array = [...res]
return array
}


console.log(arrPop(array));

///////////////////////////////////////////////////////////

function arrPush(arr,plus){
    let res = []
for(let i =0;i< arr.length;i++){
    res+=arr[i]
    
}
    res +=plus;
    let array = [...res]
    return array
}


console.log(arrPush(array,'4'));

//////////////////////////////////////////////////////

function fshift(arr){
    
    let res =''

    for(let i = 1;i<arr.length;i++){
        res +=arr[i]
    }
    let array = [...res]
    return array
}

console.log(fshift(array));

////////////////////////////////////////////////////

function funShift(arr,x){
   arr[0] = x
 
    let res =''

    for(let i = 0;i<arr.length;i++){
        res +=arr[i]
    }
    let array = [...res]
    return array

}

console.log(funShift(array,'2'));

///////////////////////////////////////////////
let str = ['open ', 'web ', 'academy']

function funcJoin(arr){
    // let res = ''
    // for(let i = 0; i < arr.length;i++){
    //     res +=arr[i]
    // }
    // return res
    return arr + ' '
}

console.log(funcJoin(str));

//////////////////////////////////////////////////

let sp = 'Hello world'

function funSplit(arr){

    let res = []
    // for(let i = 0; i < arr.length;i++){

    //     res +=arr[i]
    // }
    return res = [...arr]
}

console.log(funSplit(sp))