const ans=Math.floor(Math.random()*(101));
let chn=8
function guess(){
    const ent=document.getElementById("num").value;
    const v=parseInt(ent);
    if(ent!=v || v>100 || v<1){
        document.getElementById("res").innerHTML="Chances are precious! Don't try to waste it.";
    }
    else if(ans==ent){
        document.getElementById("res").innerHTML="Your is guess is right.";
    }
    else if(ans<ent){
        document.getElementById("res").innerHTML="Your guess is high.";
    }
    else{
        document.getElementById("res").innerHTML="Your guess is low.";
    }

}
