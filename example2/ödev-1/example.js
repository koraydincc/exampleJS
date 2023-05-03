let temp = ''; 
let counter = 0;



document.getElementById('btn-kaydet').addEventListener('click', function () {

    // Kullanıcın yaptığı işlem sayısını loglayalım 
    counter++;

    // inputttaki veriyi al
    let val1 = document.getElementById('inpbir').value;
    let val2 = document.getElementById('inpiki').value;


    document.getElementById('inpbir').value = '';

    document.getElementById('inpiki').value = '';

    temp += ' ' + val1 +' ' + val2; 

    

    document.getElementById('result').innerHTML =
        `${temp}  Numaralı biletiniz tanımlanmıştır. (Toplamda ${counter} bilet tanımlanmıştır)`

    console.log(counter)
})

document.getElementById('clear').addEventListener('click', function(){
        
    document.getElementById('inpbir').value = '';
    document.getElementById('inpiki').value = '';
    document.getElementById('result').innerHTML = '';


})
