function triangleArea(args){
    let arr = [...args];
    let x1 = arr[0];
    let y1 = arr[1];
    let x2 = arr[2];
    let y2 = arr[3];
    let x3 = arr[4];
    let y3 = arr[5];
    let a = Math.abs(x3 - x2);
    let h = Math.abs(y3 - y1);
    let s = (a * h) / 2;

    if(y2 == y3){
        console.log(s);
    }else{
        console.log("y2 must be the same as y3");
    }
}
triangleArea([4, 1, -1, -3, 3, -3]);