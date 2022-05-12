
document.getElementById("output").style.visibility = "hidden";
document.getElementById("lbsInput").addEventListener("input", function (e) {
    document.getElementById("output").style.visibility = "visible";
    let lbs = e.target.value;
    document.getElementById("gramsOutput").innerHTML = lbs * 580;
    document.getElementById("kgOutput").innerHTML = lbs * 1.23;
    document.getElementById("ozOutput").innerHTML = lbs * 1.17;
});


