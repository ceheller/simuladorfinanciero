let valoresUsuario = [];

function crearUsuario() {
    valoresUsuario.push(parseInt(prompt("Bienvenido al simulador financiero, donde proyectaremos cuánto dinero tenés que ahorrar para vivir sin trabajar. Ahora contanos cuántos dólares por mes gastás en alquiler")));
    valoresUsuario.push(parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en educación de todos los miembros de tu familia")));
    valoresUsuario.push(parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en salidas")));
    valoresUsuario.push(parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en supermercado")));
    valoresUsuario.push(parseInt(prompt("Ahora contanos cuántos dólares por mes gastás en salud")));
    };

function mostrarResultadoConservador() {
    let usuario = {
        rent: valoresUsuario[0],
        education: valoresUsuario[1],
        goingOut: valoresUsuario[2],
        supermarket: valoresUsuario[3],
        health: valoresUsuario[4],
    };
    let monthlyBudget = usuario.rent + usuario.education + usuario.goingOut + usuario.supermarket + usuario.health;
    alert("Según nuestros cálculos, tus gastos mensuales ascienden a USD " + (monthlyBudget) + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/3)*100) + " dólares, invertidos a una tasa del 3% en el mercado inmobiliario, para vivir sin trabajar.");
    }

function mostrarResultadoMedio() {
    let usuario = {
        rent: valoresUsuario[0],
        education: valoresUsuario[1],
        goingOut: valoresUsuario[2],
        supermarket: valoresUsuario[3],
        health: valoresUsuario[4],
    };
    let monthlyBudget = usuario.rent + usuario.education + usuario.goingOut + usuario.supermarket + usuario.health;
    alert("Según nuestros cálculos, tus gastos mensuales ascienden a USD " + (monthlyBudget) + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/9)*100) + " dólares, invertidos a una tasa del 9% en el mercado de obligaciones negociables de renta fija, para vivir sin trabajar.");
    }

function mostrarResultadoAgresivo() {
    let usuario = {
        rent: valoresUsuario[0],
        education: valoresUsuario[1],
        goingOut: valoresUsuario[2],
        supermarket: valoresUsuario[3],
        health: valoresUsuario[4],
    };
    let monthlyBudget = usuario.rent + usuario.education + usuario.goingOut + usuario.supermarket + usuario.health;
    alert("Según nuestros cálculos, tus gastos mensuales ascienden a USD " + (monthlyBudget) + ". Teniendo ello presente, necesitarás ahorrar " + Math.round(((monthlyBudget * 12)/25)*100) + " dólares, invertidos en instrumentos de renta variable de alto riesgo al efecto de obtener una rentabilidad del 25% anual, para vivir sin trabajar (aunque deberás trabajar en elegir qué comprar y qué vender).");
    }
