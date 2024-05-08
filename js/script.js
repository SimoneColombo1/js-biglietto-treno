const prezzo=0.276;
const eta= prompt('inserire la propria età');
const km= prompt('inserire la quantità di km che vuole percorrere');
const sum = km * prezzo;
const scontoA= 42;
const scontoB= 21;
if  (eta > 18){

    if (eta > 65){
        const PrezzoScontato= (sum / 100) * scontoA;
        const totale= (sum - PrezzoScontato).toFixed(2);
        console.log(totale);
        document.writeln(totale);
 
    }
    else{
        console.log(sum);
        document.writeln(sum); 
    }
}
else{
    const PrezzoScontato= (sum / 100) * scontoB;
    const totale= (sum - PrezzoScontato).toFixed(2);
    console.log(totale);
    document.writeln(totale); 
}