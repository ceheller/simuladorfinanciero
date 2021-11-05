

function mostrarUltimoResultado() {
    let Usuario = JSON.parse(localStorage.getItem("Usuario"));
    document.getElementById("ultimoResultado").innerHTML = "La última vez que usaste el simulador, declaraste gastar: <br> USD " + Usuario.alquiler + " en alquiler; <br> USD " + Usuario.educacion + " en educación,<br> USD " + Usuario.salidas + " en salidas; <br>USD " + Usuario.compras + " en el supermercado;<br> USD " + Usuario.salud + " en salud.";
}


function crearUsuario() {
    gastosAlquiler = parseInt(document.getElementById('gastoAlquiler').value);
    gastosEducacion = parseInt(document.getElementById('gastoEducacion').value);
    gastosSalidas = parseInt(document.getElementById('gastoSalidas').value);
    gastosSupermercado = parseInt(document.getElementById('gastoSupermercado').value);
    gastosSalud = parseInt(document.getElementById('gastoSalud').value);
    monthlyBudget = gastosAlquiler + gastosEducacion + gastosSalidas + gastosSupermercado + gastosSalud;
    return monthlyBudget;
    };

function mostrarResultadoConservador() {
    let monthlyBudget2 = crearUsuario();
    document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/3)*100) + " dólares, invertidos a una tasa del 3% en el mercado inmobiliario, para vivir sin trabajar.";
    const Usuario = {"alquiler": gastosAlquiler, "educacion": gastosEducacion, "salidas": gastosSalidas, "compras": gastosSupermercado, "salud": gastosSalud};
    const UsuarioJson = JSON.stringify(Usuario); 
    localStorage.setItem("Usuario", UsuarioJson);
    }

function mostrarResultadoMedio() {
    let monthlyBudget2 = crearUsuario();
    document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/9)*100) + " dólares, invertidos a una tasa del 9% en el mercado de obligaciones negociables de renta fija, para vivir sin trabajar.";
    const Usuario = {"alquiler": gastosAlquiler, "educacion": gastosEducacion, "salidas": gastosSalidas, "compras": gastosSupermercado, "salud": gastosSalud};
    const UsuarioJson = JSON.stringify(Usuario); 
    localStorage.setItem("Usuario", UsuarioJson);
    }

function mostrarResultadoAgresivo() {
    let monthlyBudget2 = crearUsuario();
    document.getElementById("resultado").innerHTML = "Según nuestros cálculos, tus gastos mensuales ascienden a USD " + monthlyBudget2 + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/25)*100) + " dólares, invertidos en instrumentos de renta variable de alto riesgo al efecto de obtener una rentabilidad del 25% anual, para vivir sin trabajar (aunque deberás trabajar en elegir qué comprar y qué vender).";
    const Usuario = {"alquiler": gastosAlquiler, "educacion": gastosEducacion, "salidas": gastosSalidas, "compras": gastosSupermercado, "salud": gastosSalud};
    const UsuarioJson = JSON.stringify(Usuario); 
    localStorage.setItem("Usuario", UsuarioJson);
    }

