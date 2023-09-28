const nama = 'nauli aldre';
let umur = 24;

let biodata = document.getElementById('biodata');  
console.log('biodata');

function generateBiodata() {
    let generasi;

    if(umur > 10 && umur < 18) {
        generasi = 'generasi remaja'; 
    } 
    else if (umur > 18 && umur < 30 ) {
        generasi = 'generasi dewasa';
    }
    else if ( umur >= 30) {
        generasi = 'generasi tua';
    }
    else if (umur > 2 && umur < 10) {
        generasi = 'generasi masih anak-anak';
    }
    else {
        generasi  = 'generasi bayi';
    } 

    return biodata.innerHTML = generasi;
}

console.log(nama);
console.log(umur);

generateBiodata();




