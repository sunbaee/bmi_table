function myScope() {
    const form = document.querySelector('.form');

    function criaP() {
        const p = document.createElement('p');
        return p;
    }

    function setR (msg, isValid) {
        const resultado = document.querySelector('.resultadoimc');
        resultado.innerHTML = '';

        const p = criaP();

        if (isValid) {
            p.classList.add('correct');
        } else {
            p.classList.add('bad');
        }

        p.innerHTML = msg;
        resultado.appendChild(p);
    }

    function receiveEvent (e) {
        e.preventDefault();
        let p = form.querySelector('.peso').value;
        p = Number.parseFloat(p);
        let h = form.querySelector('.altura').value;
        h = Number.parseFloat(h);
        let r = '';
        if (!p) {
            setR('Peso Inválido! ', false);
            return;
        }
        if (!h) {
            setR('Altura inválida! ', false);
            return;
        }
        const imc = (p / (h*h)).toFixed(2);
        if (imc < 18.5) {
            r = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            r = 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            r = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) {
            r = 'Obesidade grau 1';
        } else if (imc >= 35 && imc < 40) {
            r = 'Obesidade grau 2';
        } else if (imc >= 40) {
            r = 'Obesidade grau 3';
        } else {
            r = 'Dados inválidos!';
        }
        texto = `O seu IMC é ${imc} (${r})`;
        setR(texto, true);
    }
    form.addEventListener('submit', receiveEvent);
}

myScope();
