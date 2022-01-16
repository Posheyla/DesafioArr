function siempreHambriento(arr) {
    let valor = 0;
    for( let i = 0; i < arr.length; i++){
        if ( arr[i] === "comida"){
            valor+=1;
        }
        else{
            valor+=0;
        }
    }
    if (valor>0){
        return console.log("Delicioso");
    }
    else{
        return console.log("Tengo Hambre");
    }
}

siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"