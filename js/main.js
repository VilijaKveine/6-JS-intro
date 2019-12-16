console.log('Labas rytas');
console.log('ljdifgogl');
console.log('-----------------');
console.log('-----------------');
console.log('-----------------');
const PI=3.141592654
console.log(PI);

const vardas = 'Vilija';
console.log(vardas);

let manoAmzius = 10;
console.log(manoAmzius);
manoAmzius = 10;

const sunsVardas = 'Rexas';
console.log(sunsVardas);

let miestas = 'Vilnius';
console.log(miestas);

let personazas = "Don' Ki Chotas";
console.log(personazas);

var kintamasis = 'x';
console.log(kintamasis);

const skaitmenys = [0, 1, 2];
console.log(skaitmenys);

const raides = []

console.log('-----------------');
console.log('-----------------');
console.log('-----------------');

const suma = 2+2;
console.log(suma);

const suma2 = manoAmzius + 7;
console.log(suma2);

const tekstas = 'a' + 'a'
console.log(tekstas);

console.log(skaitmenys);

const skaitmenuSuma = skaitmenys[0] + skaitmenys[1] + skaitmenys[2];
console.log(skaitmenuSuma);

console.log('---------------------');
console.log('SKAICIU KIEKIS INTERVALE BE LIEKANOS');

let intStart = 0;
let intEnd = 11;
let daliklis = 3;
let kartai = 0;

for ( let i=intStart; i<=intEnd; i++) {
    console.log(i, daliklis, i/daliklis);
}
//reikia pereiti per visus skaicius intervale 
    //jeigu eianmasis skaicius dalinasi be liekanos
        //kartai++

for ( let i=intStart; i<=intEnd; i++ ) {
    if (i % daliklis === 0) {
            kartai++;
    }
}
     

console.log('skaiciu intervale tarp'+ intStart + ' ir ' + intEnd + ', besidalinanciu be liekanos is ' + daliklis + ' yra ' + kartai + ' vienetai.');


intStart = 0 ;
intEnd = 11;
daliklis = 5;
kartai = 0;

for ( let i=intStart; i<=intEnd; i++) {
    console.log(i, daliklis, i/daliklis);
}

for ( let i=intStart; i<=intEnd; i++ ) {
    if (i % daliklis === 0) {
            kartai++;
    }
}
     

console.log('skaiciu intervale tarp'+ intStart + ' ir ' + intEnd + ', besidalinanciu be liekanos is ' + daliklis + ' yra ' + kartai + ' vienetai.');

console.log('-----------------');
console.log('-----------------');
console.log('-----------------');
console.log('FUNKCIJOS');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );

console.log('-----------------');

// function daugyba(skaicius1, skaicius2 ) {
//     // console.log('man dave:', skaicius1, skaicius2,
//     //     skaicius1 * skaicius2);
// ,
//     if ( typeof(skaicius1) !== 'number' ) {
//         return 'Durnelis1...';
//     }
//     if ( typeof(skaicius2) !== 'number') {
//         return 'Durnelis2...';
//     }
//     return skaicius1 * skaicius2; 
// }
// console.log( daugyba(3, 8 ) );
// console.log( daugyba(3,-8 ) );
// console.log( daugyba(-3, 8 ) );
// console.log( daugyba(-3, -8 ) );

console.log('-------------------');
console.log('DIDZIAUSIAS SKAICIUS SARASE');

function didziausiasSkaiciusSarase( list ) {
    // patikrinimai
    if ( Array.isArray(list) === false ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( list.length === 0 ) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }

    // logika
    let didziausias = -Infinity;

    // einame per skaiciu sarasa
    for ( let i=0; i<list.length; i++ ) {
        const skaicius = list[i];

        // ar jis apskritai skaicius
        if ( typeof(skaicius) !== 'number' ||
             isFinite(skaicius) === false ) {
            // einame i sekanti cikla, nes cia nera ka veikti
            continue;
        }
        // jeigu, einamasis skaicius didesnis uz zinoma didziausia
        if ( skaicius > didziausias ) {
            // didziausias = einamasis skaicius;
            didziausias = skaicius;
        }
    }

    if ( didziausias === -Infinity ) {
        return 'Tavo sarase taip ir nebuvo skaiciu :(';
    }

    return didziausias;
}

console.log( didziausiasSkaiciusSarase( 'pomidoras' ) );
console.log( didziausiasSkaiciusSarase( {} ) );
console.log( didziausiasSkaiciusSarase( [] ) );
console.log( didziausiasSkaiciusSarase( [ 'a', 'b', 'c' ] ) );

console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 'asd', 4 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 'asd' ] ) );
console.log( didziausiasSkaiciusSarase( [ 'asd', 2, 5 ] ) );
console.log( didziausiasSkaiciusSarase( [ 'asd', 'asd', 'asd', 'asd', 2, 7 ] ) );
console.log( didziausiasSkaiciusSarase( [ 'asd', true, false, NaN, -Infinity, Infinity, 2, 8 ] ) );


console.log( '-------------');
console.log( 'ISRINKTI RAIDES');

function isrinktiRaides ( text, step ) {
    if (typeof(text) !== 'string') { 
        return 'pirmas parametras turi buti tekstas';
    }
    if (typeof(step) !== 'number') {
        return 'antras parametras turi buti skaicius';
    }
    if (step === 0 ) {
        return 'zingsnis negali buti nulinis';
    }
    if (step % 1 !== 0 ) {
        return 'duok man sveika skaiciu'; 
    }
    if (Math.abs (step) > text.length ) {
        return 'tekstas per trumpas isrinkti raides';
    }
    let ats = '';
    if ( step > 0 ){
        for (let i=step-1; i<text.length; i=i+step ) {
            ats +=  text [i];
            // ats = ats + text[i];
        // console.log(text[i]);
        }  
    } else {
            for (let i=text.length+step; i>=0; i=i+step ) {
                ats +=  text [i];  
        }
    }


    return ats;
}

console.log( isrinktiRaides (1561, 2 ));
console.log( isrinktiRaides ('abcdefg', 2 ) );
console.log( isrinktiRaides ('abcdefghijkl', 3 ) );
console.log( isrinktiRaides ('abcdefghijkl', 3.2 ));
console.log( isrinktiRaides ('abc', 0 ) );
console.log( isrinktiRaides ('abcd', 4 ));
console.log( isrinktiRaides ('abcdef', 4 ));

console.log( isrinktiRaides ('abdefc', -2));
console.log( isrinktiRaides ('abcdefg ', -8 ));


console.log('-------------------');
console.log('DALYBA');

function dalyba (s1, s2) {
    if (isFinite (s1) === false || s1===null || Array.isArray(s1) ===true ) {
        return 'duok pirma skaiciu';
    }
    if (isFinite (s2) === false ||s2===null || Array.isArray(s2) ===true) {
        return 'duok antra skaiciu';
    }
    if ( s2 === 0 ) {
        return 'dalyba is nulio negalima';
    }
    return s1 / s2;

}
  
    console.log( dalyba ('a', 'b') );
    console.log( dalyba (Infinity, -7) );
    console.log( dalyba (null, NaN) );
    console.log( dalyba ('eards', '8') );
    console.log( dalyba (1, 0) );

    console.log( dalyba (3, 1) );
    console.log( dalyba (10, 5) );
    console.log( dalyba (1/3, 3) );





    








 


 
















