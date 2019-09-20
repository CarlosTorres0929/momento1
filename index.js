const fs = require('fs');
let ingles = "good night sir";
let aleman = "gute nacht mein herr" + "\n" + "καλή νύχτα κύριε";
let ruso = "спокойной ночи, сэр" + "\n" + "dobranoc, proszę pana" + "\n"+ "ليلة سعيدة يا سيدي";
console.log("Escribe tu nombre  (ingrese 'salir' para terminar)");
var stdin = process.openStdin();

stdin.addListener("data", function(d) {
  var dato = d.toString().trim();
    console.log("good night sir: " + 
        d.toString().trim());
        if (dato == 'salir') {
          return process.stdin.destroy();
      }
      //process.stdin.destroy();
    var base = parseInt(dato);
    fs.writeFile(
      'ingles.txt', 
      ingles, 
      (err) => {
          if (err) 
              throw err;
      console.log('El archivo con ingles se creo correctamente papi!');
    });

    fs.writeFile(
      'alemangriego.txt', 
      aleman, 
      (err) => {
          if (err) 
              throw err;
      console.log('El archivo con aleman y griego se creo correctamente mijito!');
    });
/*
    fs.writeFile(
      'rusopolaco.txt', 
      ruso, 
      (err) => {
          if (err) 
              throw err;
      console.log('El archivo con ruso, polaco y arabe se creo correctamente salibaba!');
    });
    */
  });


  