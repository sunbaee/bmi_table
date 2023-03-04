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
            setR('Invalid weight!', false);
            return;
        }
        if (!h) {
            setR('Invalid height!', false);
            return;
        }
        const imc = (p / (h*h)).toFixed(2);
        if (imc < 18.5) {
            r = 'Underweight';
        } else if (imc >= 18.5 && imc < 25) {
            r = 'Normal weight';
        } else if (imc >= 25 && imc < 30) {
            r = 'Overweight';
        } else if (imc >= 30 && imc < 35) {
            r = 'Grade 1 obesity';
        } else if (imc >= 35 && imc < 40) {
            r = 'Grade 2 obesity';
        } else if (imc >= 40) {
            r = 'Grade 3 obesity';
        } else {
            r = 'Invalid data!';
        }
        texto = `Your BMI is ${imc} (${r})`;
        setR(texto, true);
    }
    form.addEventListener('submit', receiveEvent);
}

myScope();
