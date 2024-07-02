const fibonacci = function(num) {
    let count;
    if(typeof num!=='number'){
        count=parseInt(num)
    }else{
        count=num;
    }
    if(count<0){
        return 'OOPS';
    }
    if(count===0){
        return 0;
    }
    let first=1;
    let sec=0;
    for(let i=2;i<=count;i++){
        let temp=first+sec;
        sec=first;
        first=temp;
    }
    return first;
};

// Do not edit below this line
module.exports = fibonacci;
