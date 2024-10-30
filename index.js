
function countSheeps(list){
    let lenghtList = list.length;
    let sheeps = 0;

    for (let index=0;index<lenghtList;index++){
        if(true==list[index]){
            sheeps++;
        };
    }

    if(sheeps > 0){
        return("There are "+sheeps+" sheeps in total");
    };
    
    if(sheeps == 0){
        return("OOPS!!! Wolves have eaten some sheeps");
    };

}

let list = [true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true]
let result = countSheeps(list);
console.log(result);

list = [false,  false,  false]
result = countSheeps(list);
console.log(result);