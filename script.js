function buttonclick(params) {
    console.log(print);
    let n;
    let l;
        n=Math.floor(Math.random() * 4);
if (n==1){
    l="play.html"
}
if (n==2){
    l="play2.html"
}
if (n==3){
    l="play2.html"
}
if (n==0){
    l="play2.html"
}

window.location.replace(l)
}

