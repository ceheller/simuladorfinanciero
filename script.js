
$(document).ready(function() {
    document.getElementById("header").scrollIntoView({behavior: "smooth"});
 });

 $(document).ready(function() {
    $("#goToMain").click(function(){
        document.getElementById("main").scrollIntoView({behavior: "smooth"});
    }); 
 });

 $(document).ready(function() {
    $("#goToResults").click(function(){
        document.getElementById("results").scrollIntoView({behavior: "smooth"});
    }); 
 });

$(document).ready(function() {
    $("#mostrarUltimo").click(function(){
        let User = JSON.parse(localStorage.getItem("User"));
    $("#ultimoResultado").append("La última vez que usaste el simulador, declaraste gastar: <br> USD " + Usuario.alquiler + " en alquiler; <br> USD " + Usuario.educacion + " en educación,<br> USD " + Usuario.salidas + " en salidas; <br>USD " + Usuario.compras + " en el supermercado;<br> USD " + Usuario.salud + " en salud.");
    }); 
 });

function addExpenses() {
    rentBudget = parseFloat($('#rentBudget').val());
    educationBudget = parseFloat($('#educationBudget').val());
    goingOutBudget = parseFloat($('#goingOutBudget').val());
    supermarketBudget = parseFloat($('#supermarketBudget').val());
    healthBudget = parseFloat($('#healthBudget').val());
    monthlyBudget = rentBudget + educationBudget + goingOutBudget + supermarketBudget + healthBudget;
    return monthlyBudget;
};

function showResult(param1) {
    let monthlyBudget2 = addExpenses();
    part1 = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar ";
    part2 = Math.round(((monthlyBudget * 12) / param1) * 100);
    document.getElementById("result").innerHTML = part1 + part2 + part3;
    const User = { "rent": rentBudget, "education": educationBudget, "goingOut": goingOutBudget, "supermarket": supermarketBudget, "health": healthBudget };
    const UserJson = JSON.stringify(User);
    localStorage.setItem("User", UserJson); 
    return part2
}

$(document).ready(function() {
    $("#conservativeResult").click(function () {
    part3 = " dólares, invertidos a una tasa del 3% en el mercado inmobiliario, para vivir sin trabajar."
    showResult(3);
    });

    $("#middleRiskResult").click(function () {
    part3 = " dólares, invertidos a una tasa del 9% en el mercado bursátil, para vivir sin trabajar."
    showResult(9);
    });

    $("#agressiveResult").click(function () {
    part3 = ", los que de valorizarse según la predicción matemática de Satoshi te permitirán vivir sin trabajar";
    btcNeeded = showResult(25) / bitcoinPrice2;
    btcNeeded2 = btcNeeded.toFixed(4);
    part2 = btcNeeded2 + " Bitcoins al precio actual de mercado de USD " + bitcoinPrice2
    document.getElementById("result").innerHTML = part1 + part2 + part3;
});
    
    bitcoinPrice2 = 0;
    getBtcData = async () => {
        fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD')
            .then(response => response.json())
            .then(data => {
                bitcoinPrice1 = data;
                bitcoinPrice2 = bitcoinPrice1.USD;
            });
    }
    getBtcData();
    console.log(bitcoinPrice2)
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });

    $("#goToMain").click(function () {
        document.getElementById("main").scrollIntoView({ behavior: "smooth" });
    });

    $("#goToResults").click(function () {
        document.getElementById("results").scrollIntoView({ behavior: "smooth" });
    });

    $("#showLast").click(function () {
        let User = JSON.parse(localStorage.getItem("User"));
        $("#lastResult").append("La última vez que usaste el simulador, declaraste gastar: <br> USD " + User.rent + " en alquiler; <br> USD " + User.education + " en educación,<br> USD " + User.goingOut + " en salidas; <br>USD " + User.supermarket + " en el supermercado;<br> USD " + User.health + " en salud.");
    });
});