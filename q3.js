function sumofall(...args){
    let sum=0;
    for (const arg of args){
        sum+=arg;

    }
    console.log(sum);

}
console.log(sumofall(1,2,3,4));
