const calcular = document.getElementById('calcular')

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== ''){

        const valorIMC = (peso / (altura * altura)).toFixed(1)

        let classificacao = '';

        if (valorIMC < 16.9){
            classificacao = 'muito abaixo do Peso. Atenção';
        } else if (valorIMC < 18.4){
            classificacao = 'abaixo do Peso.'; 
        } else if (valorIMC < 24.9){
            classificacao = 'com peso ideal. Parabéns';
        } else if (valorIMC < 29.9){
            classificacao = 'acima do peso';
        } else if (valorIMC < 34.9){
            classificacao = 'com obesidade grau I';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III, Cuidado!';
        }  

        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;
        

    } else {
        resultado.textContent = 'Preencha todos os Campos';
    }
}
  
calcular.addEventListener('click', imc)