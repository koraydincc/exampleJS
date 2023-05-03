


document.getElementById('btn-topla').addEventListener('click', function(){

    let val1 = document.getElementById('inp-no').value;
    let val2 = document.getElementById('inp-no-iki').value;

    let mutlakDeger = Math.abs(val1) + Math.abs(val2);

    document.getElementById('result').innerHTML = `Sonuç = ${mutlakDeger}`;



})

document.getElementById('btn-cikar').addEventListener('click', function(){

    let val1 = document.getElementById('inp-no').value;
    let val2 = document.getElementById('inp-no-iki').value;

    let cikar = val1 - val2;

    document.getElementById('result').innerHTML = `Sonuç = ${cikar}`

    

})

document.getElementById('btn-bol').addEventListener('click', function(){

    let val1 = document.getElementById('inp-no').value;
    let val2 = document.getElementById('inp-no-iki').value;

    let bol = val1 / val2;

    document.getElementById('result').innerHTML = `Sonuç = ${bol}`

    

})

document.getElementById('btn-carp').addEventListener('click', function(){

    let val1 = document.getElementById('inp-no').value;
    let val2 = document.getElementById('inp-no-iki').value;

    let carp = val1 * val2;

    document.getElementById('result').innerHTML = `Sonuç = ${carp}`

    

})

document.getElementById('btn-random').addEventListener('click', function() {
    let val1 = parseInt(document.getElementById('inp-no').value);
    let val2 = Math.floor(Math.random() * 10); 
    let sonuc = val1 * val2 + val1;

    document.getElementById('result').innerHTML = `Sonuç = ${sonuc}, Random Sayınız = ${val2}`;
});


document.getElementById('clear').addEventListener('click', function(){

    document.getElementById('inp-no').value='';
    document.getElementById('inp-no-iki').value='';
    document.getElementById('result').innerHTML='';


})