const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado')

const calcular = () =>{
    if(peso.value != "" && altura.value != ""){
        const imc = (peso.value /(altura.value * altura.value)).toFixed(2);
        let classificacao = '';
        
        if(imc < 18.5){
            classificacao = '(Abaixo do peso)'
        }else if(imc < 25){
            classificacao = '(Peso normal)'
        }else if(imc < 30){
            classificacao = '(Acima do peso)'
        }else if(imc < 35){
            classificacao = '(Obesidade grau I)'
        }else if(imc < 41){
            classificacao = '(Obesidade Grau II)'
        }else{
            classificacao = '(Obesidade Grau III)'
        }

        resultado.innerHTML = imc + '' + classificacao
    }else{
        resultado.innerHTML = 'Preencha os campos.'
    }
}

