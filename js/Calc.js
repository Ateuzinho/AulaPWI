function Calcular() {
    const p1 = parseFloat(document.getElementById("input-p1").value);
    const p2 = parseFloat(document.getElementById("input-p2").value);
    const re = p1 + p2;
    
    // if(re > 6000) {
    //     alert("Contemplados!");
    // } else if(re <= 3000){
    //     alert("Não podem participar!");
    // } else {
    //     alert("Passar por análise")
    // }

    if(re <= 3000) {
        alert("Não podem participar");
    } else if(re > 3000 && re <=6000) {
        alert("Passar por análise");
    } else {
        alert("Contemplados");
    }
} 