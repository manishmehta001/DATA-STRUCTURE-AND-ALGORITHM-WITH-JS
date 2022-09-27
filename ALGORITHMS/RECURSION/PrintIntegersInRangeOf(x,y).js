function PrintIntegerOfXandY(x,y){
    let array=[];
    if(x==y-2){
        return x+1;
    }
    array.push(x+1);
    return array.concat(PrintIntegerOfXandY(x+1,y));
}
console.log(PrintIntegerOfXandY(3,9));