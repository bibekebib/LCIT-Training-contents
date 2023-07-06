var sum = 1;
function fact(n){
    if (n==1){
        return 1
    }
    else{
        sum *=(fact(n-1))
    }
}

tot = fact(9)