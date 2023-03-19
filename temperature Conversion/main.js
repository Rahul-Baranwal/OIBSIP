document.getElementById('convert').onclick = tempconvert
document.getElementById('Reset').onclick = Clearform

function tempconvert(){

    var fahrenheit = document.getElementById("fahrenheit").value
    var Celsius = document.getElementById("Celsius").value

    if(fahrenheit != ''){
        Celsius = (parseFloat(fahrenheit) -32)/1.8
    }
    else{
        fahrenheit = (parseFloat(Celsius) * 1.8)+ 32
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1)
    document.getElementById('Celsius').value = parseFloat(Celsius).toFixed(1)
}

function Clearform(){
    document.getElementById('fahrenheit').value = ''
    document.getElementById('Celsius').value = ''
}
