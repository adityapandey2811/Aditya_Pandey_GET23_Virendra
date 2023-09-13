
console.log(sum(1000, 6, 5, 2000, 3, 2));

function si(p,r,t) {
    let res = p*r*t;
    res /= 100;
    return res;
}

function sum(p,r,t,p1,r1,t1) {
    res1 = si(p,r,t);
    res2 = si(p1,r1,t1);
    return res1 + res2;
}