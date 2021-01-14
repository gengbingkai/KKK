function target_1(){
    // target_1 = document.getElementById('target_1').style.display='block'
    var target_1 = document.getElementById('target_1').style.display
    if (target_1 != 'block'){
        document.getElementById('target_1').style.display='block'
        document.getElementById('target_2').style.display='none'
        document.getElementById('target_3').style.display='none'
    }else{
        document.getElementById('target_1').style.display='none'
    }
}

function target_2(){
    var target_2 = document.getElementById('target_2').style.display
    if (target_2 != 'block'){
        document.getElementById('target_2').style.display='block'
        document.getElementById('target_1').style.display='none'
        document.getElementById('target_3').style.display='none'
    }else{
        document.getElementById('target_2').style.display='none'
    }
}

function target_3(){
    // target_1 = document.getElementById('target_1').style.display='block'
    var target_3 = document.getElementById('target_3').style.display
    if (target_3 != 'block'){
        document.getElementById('target_3').style.display='block'
        document.getElementById('target_2').style.display='none'
        document.getElementById('target_1').style.display='none'
    }else{
        document.getElementById('target_3').style.display='none'
    }
}