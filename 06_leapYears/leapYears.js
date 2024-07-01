const leapYears = function(year) {
    const isDivBy4=year%4===0;
    const isCentury=year%100===0;
    const isDivBy400=year%400===0;

    if(isDivBy4 && (!isCentury || isDivBy400)){
            return true;
        }else{
            return false;
        }
    };

// Do not edit below this line
module.exports = leapYears;
