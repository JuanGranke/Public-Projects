//deixar mais facil para não utilizar toda hora o getID
var b = document.getElementById('b')

//focar no botão da musica
function aut(){
    b.focus()
}

//função de tocar a música
function tocar(){
    var a = document.getElementById('audio')
    if(b.value == 'PLAY'){
        a.play()
        b.value = "PLAYING"
    } else if(b.value == 'PLAYING'){
        a.pause()
        b.value = "PAUSED"
    } else{
        a.play()
        b.value = "PLAYING"
    }
}

//tentativa de fazer com que quando a casa já estivesse ocupada ocorrese o erro e o jogador tivesse que repirir a jogada
function sobre1(){
    if(document.getElementById('i1').value == "X" || document.getElementById('i1').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre2(){
    if(document.getElementById('i2').value == "X" || document.getElementById('i2').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre3(){
    if(document.getElementById('i3').value == "X" || document.getElementById('i3').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre4(){
    if(document.getElementById('i4').value == "X" || document.getElementById('i4').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre5(){
    if(document.getElementById('i5').value == "X" || document.getElementById('i5').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre6(){
    if(document.getElementById('i6').value == "X" || document.getElementById('i6').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre7(){
    if(document.getElementById('i7').value == "X" || document.getElementById('i7').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre8(){
    if(document.getElementById('i8').value == "X" || document.getElementById('i8').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}

function sobre9(){
    if(document.getElementById('i9').value == "X" || document.getElementById('i9').value == "O"){
        alert('Jogada já realizada, por favor tente outra!').focus()
    }
}   


var nome = "JOGADOR1"

//mudança de nomes para indicar a vez de cada jogador e por consequência se será marcado um x ou bolinha
function mudarnome(){
    if (nome == "JOGADOR1"){
        nome = "JOGADOR2"
        document.getElementById('placar').innerHTML = nome
    } else{
        nome = "JOGADOR1"
        document.getElementById('placar').innerHTML = nome
    }
}

//pegar a ID de casa elemento da casa
function clicar1(){
    sobre1()
    document.getElementById('i1').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i1').value = "X"
        }else if(nome == "JOGADOR2"){
            document.getElementById('i1').value = "O"
        }
        mudarnome()
        }
}


function clicar2(){
    sobre2()
    document.getElementById('i2').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i2').value = "X"
        } else{
            document.getElementById('i2').value = "O"
        }
        mudarnome()
    }
}

function clicar3(){
    sobre3()
    document.getElementById('i3').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i3').value = "X"
        } else{
            document.getElementById('i3').value = "O"
        }
        mudarnome()
    }
}

function clicar4(){
    sobre4()
    document.getElementById('i4').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i4').value = "X"
        } else {
            document.getElementById('i4').value = "O"
        }
        mudarnome()
    }
}

function clicar5(){
    sobre5()
    document.getElementById('i5').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i5').value = "X"
        } else{
            document.getElementById('i5').value = "O"
        }
        mudarnome()
    }
}

function clicar6(){
    sobre6()
    document.getElementById('i6').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i6').value = "X"
        } else {
            document.getElementById('i6').value = "O"
        }
        mudarnome()
    }
}

function clicar7(){
    sobre7()
    document.getElementById('i7').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i7').value = "X"
        } else {
            document.getElementById('i7').value = "O"
        }
        mudarnome()
    }
}

function clicar8(){
    sobre8()
    document.getElementById('i8').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i8').value = "X"
        } else {
            document.getElementById('i8').value = "O"
        }
        mudarnome()
    }
}

function clicar9(){
    sobre9()
    document.getElementById('i9').addEventListener("click", mudar)
    function mudar(){
        if (nome == "JOGADOR1"){
            document.getElementById('i9').value = "X"
        } else {
            document.getElementById('i9').value = "O"
        }
        mudarnome()
    }
}