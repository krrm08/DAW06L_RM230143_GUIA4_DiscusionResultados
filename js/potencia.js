class Potencia {
    constructor(base, exponente) {
        this.base = base;
        this.exponente = exponente;
        this.resultado = this.calcularPotencia();
    }

    calcularPotencia() {
        return Math.pow(this.base, this.exponente);
    }
}

function calcular() {
    event.preventDefault(); 

    const baseInput = document.getElementById("baseInput");
    const exponentInput = document.getElementById("exponentInput");
    const resultElement = document.getElementById("result");

    const base = parseFloat(baseInput.value);
    const exponente = parseFloat(exponentInput.value);

    if (!isNaN(base) && !isNaN(exponente)) {
        const potencia = new Potencia(base, exponente);
        resultElement.textContent = `${base} elevado a la ${exponente} es igual a ${potencia.resultado}`;
    } else {
        resultElement.textContent = "Por favor, ingrese valores válidos para la base y la potencia.";
    }
}

const powerForm = document.getElementById("powerForm");
powerForm.addEventListener("submit", calcular);