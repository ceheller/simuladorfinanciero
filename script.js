let gastosAlquiler = 0;
let gastosEducacion = 0;
let gastosSalidas = 0;
let gastosSupermercado = 0;
let gastosSalud = 0;
let monthlyBudget = 0;

function crearUsuario() {
    gastosAlquiler = parseInt(prompt("Bienvenido al simulador financiero, donde proyectaremos cuánto dinero tenés que ahorrar para vivir sin trabajar. Ahora contanos cuántos dólares por mes gastás en alquiler"));
    gastosEducacion = parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en educación"));
    gastosSalidas = parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en salidas"));
    gastosSupermercado = parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en supermercado"));
    gastosSalud = parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en salud"));
    monthlyBudget = gastosAlquiler + gastosEducacion + gastosSalidas + gastosSupermercado + gastosSalud;
    };

function mostrarResultadoConservador() {
    document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/3)*100) + " dólares, invertidos a una tasa del 3% en el mercado inmobiliario, para vivir sin trabajar.";
    }

function mostrarResultadoMedio() {
    document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + (monthlyBudget) + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/9)*100) + " dólares, invertidos a una tasa del 9% en el mercado de obligaciones negociables de renta fija, para vivir sin trabajar.";
    }

function mostrarResultadoAgresivo() {
    document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + (monthlyBudget) + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/25)*100) + " dólares, invertidos en instrumentos de renta variable de alto riesgo al efecto de obtener una rentabilidad del 25% anual, para vivir sin trabajar (aunque deberás trabajar en elegir qué comprar y qué vender).";
    }

