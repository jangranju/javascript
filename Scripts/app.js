// IIFE -> Immediately invoked function expression

(function(){

    function start() {
        console.log(`%cApp Started...`, "font-size:30px; color:green;")

        document.getElementById("Paragraph2").innerText = " I am going to drink tonic";

        document.getElementById("Paragraph3").innerText = " Pata nahi bnaenge k nhi Tonic";

        document.getElementById("Paragraph3").innerHTML = "I am going to <br/> drink tonic"
    }
    
    window.addEventListener("load",start);
})();