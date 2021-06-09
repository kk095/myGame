console.log("hello console");

one=document.getElementById('1')
two=document.getElementById("2")
three=document.getElementById("3")
four=document.getElementById("4")
five=document.getElementById("5")
six=document.getElementById("6")
seven=document.getElementById("7")
eight=document.getElementById("8")
nine=document.getElementById("9")

result=document.getElementById("result")

if (result.innerHTML==''){
    result.style.display='none'
}

function choose(){
    let com=Math.floor((Math.random()*10))
    if (com==0){
        com=1
        return com
    }
    return com
}

function x(com){
    if(com==1){
        if(one.innerHTML != 'O'&& one.innerHTML != 'X'){
            one.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
        
    }
    else if(com==2){
        if(two.innerHTML != 'O'&& two.innerHTML != 'X'){
            two.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==3){
        if(three.innerHTML != 'O'&& three.innerHTML != 'X'){
            three.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==4){
        if(four.innerHTML != 'O'&& four.innerHTML != 'X'){
            four.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==5){
        if(five.innerHTML != 'O'&& five.innerHTML != 'X'){
            five.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==6){
        if(six.innerHTML != 'O'&& six.innerHTML != 'X'){
            six.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==7){
        if(seven.innerHTML != 'O'&& seven.innerHTML != 'X'){
            seven.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==8){
        if(eight.innerHTML != 'O'&& eight.innerHTML != 'X'){
            eight.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else if(com==9){
        if(nine.innerHTML != 'O'&& nine.innerHTML != 'X'){
            nine.innerHTML='X'
        }
        else{
            let comm=choose()
            x(comm)
        }
    }
    else{
        result.innerHTML='something wrong'
    }

    
}


function fun(e){
    console.log('clicked');
    if (e.childNodes[0].innerHTML !='X' && e.childNodes[0].innerHTML !='O'){
        e.childNodes[0].innerHTML ='O'
    }

    // computer choose

    let com=choose()
    x(com)    

    // for user win

    if (one.innerHTML=='O' && two.innerHTML=='O' && three.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (four.innerHTML=='O' && five.innerHTML=='O' && six.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (seven.innerHTML=='O' && eight.innerHTML=='O' && nine.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (one.innerHTML=='O' && four.innerHTML=='O' && seven.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (two.innerHTML=='O' && five.innerHTML=='O' && eight.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (three.innerHTML=='O' && six.innerHTML=='O' && nine.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (one.innerHTML=='O' && five.innerHTML=='O' && nine.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    if (three.innerHTML=='O' && five.innerHTML=='O' && seven.innerHTML=='O'){
        result.innerHTML='Congratulations, You win!'
    }
    // for user lost

    if (one.innerHTML=='X' && two.innerHTML=='X' && three.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (four.innerHTML=='X' && five.innerHTML=='X' && six.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (seven.innerHTML=='X' && eight.innerHTML=='X' && nine.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (one.innerHTML=='X' && four.innerHTML=='X' && seven.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (two.innerHTML=='X' && five.innerHTML=='X' && eight.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (three.innerHTML=='X' && six.innerHTML=='X' && nine.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (one.innerHTML=='X' && five.innerHTML=='X' && nine.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }
    if (three.innerHTML=='X' && five.innerHTML=='X' && seven.innerHTML=='X'){
        result.innerHTML='Oops!, You lost :)'
    }

    

    if (result.innerHTML!=''){
        result.style.display='block'
        console.log('check');
    }
}

if (result.innerHTML!=''){
    result.style.display='block'
    console.log('check');
}