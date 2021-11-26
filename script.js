
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
        let Usuario = JSON.parse(localStorage.getItem("Usuario"));
    $("#ultimoResultado").append("La última vez que usaste el simulador, declaraste gastar: <br> USD " + Usuario.alquiler + " en alquiler; <br> USD " + Usuario.educacion + " en educación,<br> USD " + Usuario.salidas + " en salidas; <br>USD " + Usuario.compras + " en el supermercado;<br> USD " + Usuario.salud + " en salud.");
    }); 
 });

function crearUsuario() {
    gastosAlquiler = parseFloat($('#gastoAlquiler').val());
    gastosEducacion = parseFloat($('#gastoEducacion').val());
    gastosSalidas = parseFloat($('#gastoSalidas').val());
    gastosSupermercado = parseFloat($('#gastoSupermercado').val());
    gastosSalud = parseFloat($('#gastoSalud').val());
    monthlyBudget = gastosAlquiler + gastosEducacion + gastosSalidas + gastosSupermercado + gastosSalud;
    return monthlyBudget;
};


$(document).ready(function() {
    $("#resultadoConservador").click(function () {
        let monthlyBudget2 = crearUsuario();
        document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12) / 3) * 100) + " dólares, invertidos a una tasa del 3% en el mercado inmobiliario, para vivir sin trabajar.";
        const Usuario = { "alquiler": gastosAlquiler, "educacion": gastosEducacion, "salidas": gastosSalidas, "compras": gastosSupermercado, "salud": gastosSalud };
        const UsuarioJson = JSON.stringify(Usuario);
        localStorage.setItem("Usuario", UsuarioJson);
    });

    $("#resultadoMedio").click(function () {
        let monthlyBudget2 = crearUsuario();
        document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12) / 9) * 100) + " dólares, invertidos a una tasa del 9% en el mercado de obligaciones negociables de renta fija, para vivir sin trabajar.";
        const Usuario = { "alquiler": gastosAlquiler, "educacion": gastosEducacion, "salidas": gastosSalidas, "compras": gastosSupermercado, "salud": gastosSalud };
        const UsuarioJson = JSON.stringify(Usuario);
        localStorage.setItem("Usuario", UsuarioJson);
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
    $("#resultadoAgresivo").click(function () {
        let monthlyBudget2 = crearUsuario();
        const Usuario = { "alquiler": gastosAlquiler, "educacion": gastosEducacion, "salidas": gastosSalidas, "compras": gastosSupermercado, "salud": gastosSalud };
        const UsuarioJson = JSON.stringify(Usuario);
        localStorage.setItem("Usuario", UsuarioJson);
        btcNeeded = (((monthlyBudget * 12) / 25) * 100) / bitcoinPrice2;
        btcNeeded2 = btcNeeded.toFixed(4);
        document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar " + btcNeeded2 + " Bitcoins al precio actual de mercado de USD " + bitcoinPrice2 + ", los que de valorizarse según la predicción matemática de Satoshi te permitirán vivir sin trabajar.";
    });
    console.log(bitcoinPrice2)
    document.getElementById("header").scrollIntoView({ behavior: "smooth" });

    $("#goToMain").click(function () {
        document.getElementById("main").scrollIntoView({ behavior: "smooth" });
    });

    $("#goToResults").click(function () {
        document.getElementById("results").scrollIntoView({ behavior: "smooth" });
    });

    $("#mostrarUltimo").click(function () {
        let Usuario = JSON.parse(localStorage.getItem("Usuario"));
        $("#ultimoResultado").append("La última vez que usaste el simulador, declaraste gastar: <br> USD " + Usuario.alquiler + " en alquiler; <br> USD " + Usuario.educacion + " en educación,<br> USD " + Usuario.salidas + " en salidas; <br>USD " + Usuario.compras + " en el supermercado;<br> USD " + Usuario.salud + " en salud.");
    });
});