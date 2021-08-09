function pow(base, power){
    if (power === 0) return 1;

    return base * pow(base, power -1);
}


console.log(pow(3 , 5));
