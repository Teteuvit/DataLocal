function meuEscopo() {
    const dados = document.querySelector('#dados');

    const data = new Date();
    const diaSemana = data.getDay();
    const diaSemanaTexto = diaSemanaFormat(diaSemana);
    const diaData = data.getDate();
    const mes = data.getMonth();
    const mesText = mesFormat(mes);
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();

    function zeroAEsquerda (num) {
        return num >= 10 ? num : `0${num}`;
    }



    function diaSemanaFormat(diaSemana) {
        let diaSemanaTexto;

        switch (diaSemana) {
            case 0:
                diaSemanaTexto = 'Domingo'
                return diaSemanaTexto;
            case 1:
                diaSemanaTexto = 'Segunda-Feira'
                return diaSemanaTexto;
            case 2:
                diaSemanaTexto = 'Terça-Feira'
                return diaSemanaTexto;
            case 3:
                diaSemanaTexto = 'Quarta-Feira'
                return diaSemanaTexto;
            case 4:
                diaSemanaTexto = 'Quinta-Feira'
                return diaSemanaTexto;
            case 5:
                diaSemanaTexto = 'Sexta-feira'
                return diaSemanaTexto;
            case 6:
                diaSemanaTexto = 'Sábado'
                return diaSemanaTexto;
            default:
                diaSemanaTexto = 'Null'
                return diaSemanaTexto;
        }
    }
    function mesFormat(mes) {
        let mesText = '';
        switch (mes) {
            case 0:
                mesText = 'Janeiro'
                return mesText;
            case 1:
                mesText = 'Fevereiro'
                return mesText;
            case 2:
                mesText = 'Março'
                return mesText;
            case 3:
                mesText = 'Abril'
                return mesText;
            case 4:
                mesText = 'Maio'
                return mesText;
            case 5:
                mesText = 'Junho'
                return mesText;
            case 6:
                mesText = 'Julho'
                return mesText;
            case 7:
                mesText = 'Agosto'
                return mesText;
            case 8:
                mesText = 'Setembro'
                return mesText;
            case 9:
                mesText = 'Outubro'
                return mesText;
            case 10:
                mesText = 'Novembro'
                return mesText;
            case 11:
                mesText = 'Dezembro'
                return mesText;
            default: 'Null'
                return mesText;     

        }


    }


    dados.innerHTML = `<scam> Data em   tempo real <scam>
    <h1>${diaSemanaTexto}, ${diaData} de ${mesText} de ${ano}</h1> <h1>
    ${zeroAEsquerda(hora)}:${zeroAEsquerda(min)} Minutos </h1>`
}
meuEscopo();