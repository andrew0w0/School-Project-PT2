

window.onload = async function () {
  const div = document.getElementById('explanation');

  const directories = [
    { directory: 'state', centertext: 'LO STATO E I SUOI ORGANI', images: [1, 2] },
    { directory: 'presidente', centertext: 'IL PRESIDENTE', images: [3] },
    { directory: 'governo', centertext: 'IL GOVERNO', images: [4, 5] },
    { directory: 'magistratura', centertext: 'MAGISTRATURA', images: [6, 7] },
    { directory: 'corte', centertext: 'CORTE COSTITUZIONALE', images: [8, 9] },
    { directory: 'parlamento', centertext: 'PARLAMENTO', images: [10, 11] }
   ]
   
   const center_text = document.getElementsByClassName('center-text').item(0).innerHTML;
   
   const directory = directories.find(element => element.centertext === center_text);
   
   for (const image of directory.images) {
     var imageElement = document.createElement('img')

     if(directory.images.indexOf(image) == 0) imageElement.style.paddingTop = '0px'

     if(center_text == 'LO STATO E I SUOI ORGANI') imageElement.src = `./src/images/${directory.directory}/${image}.png`;
     else imageElement.src = `../../images/${directory.directory}/${image}.png`;
   
     div.appendChild(imageElement);
   }

   /*div.addEventListener('', function() {
    // Codice da eseguire quando l'utente entra nel divisore
  document.getElementsByTagName('header').item(0).style.background = "rgba(0, 0, 0, 0.8)";
    // Puoi aggiungere qui qualsiasi altra logica o azione che desideri eseguire
});

div.addEventListener('focusout', function() {
  // Codice da eseguire quando l'utente entra nel divisore
document.getElementsByTagName('header').item(0).style.background = "rgba(0, 0, 0, 0.2)";
  // Puoi aggiungere qui qualsiasi altra logica o azione che desideri eseguire
})*/
}