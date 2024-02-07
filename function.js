    function pulaLinha() {
    document.write("<br><br>");        
    }

    function mostra(frase) {
        document.write(frase);
        pulaLinha();
        
    }

    var numeroTabuada = parseInt(prompt("Deseja ver o resultado da tabuada de qual número?"));

    // valida se o numero informado e valido
    while(isNaN(numeroTabuada)) {
        numeroTabuada = parseInt(prompt("Número inválido. Deseja ver o resultado da tabuada de qual número?"));
    }

    /*tabuada de adição */

    mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");

    for(var contador = 1; contador <= 10; contador++) {
        mostra(numeroTabuada + " + " + contador + " = " + (numeroTabuada + contador));
    }
    while(isNaN(numeroTabuada)) {
        numeroTabuada = parseInt(prompt("Número inválido. Deseja ver o resultado da tabuada de qual número?"));
    }

     /*tabuada de subtração */

    mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");

    for(var contador = 1; contador <= 10; contador++) {
        mostra(numeroTabuada + " - " + contador + " = " + (numeroTabuada -  contador));
    }
    while(isNaN(numeroTabuada)) {
        numeroTabuada = parseInt(prompt("Número inválido. Deseja ver o resultado da tabuada de qual número?"));
    }

    mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");

    /*tabuada de multiplicação */

    for(var contador = 1; contador <= 10; contador++) {
        mostra(numeroTabuada + " x " + contador + " = " + (numeroTabuada * contador));
    }
    while(isNaN(numeroTabuada)) {
        numeroTabuada = parseInt(prompt("Número inválido. Deseja ver o resultado da tabuada de qual número?"));
    }

    /*tabuada de divisão */

    mostra("<big>Tabuada do número " + numeroTabuada + ": </big>");

    for(var contador = 1; contador <= 10; contador++) {
        mostra(numeroTabuada + " / " + contador + " = " + (numeroTabuada / contador));
    }


   

