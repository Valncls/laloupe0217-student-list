// Write yout Javascript code in this files
console.log("test");

var req = new XMLHttpRequest();
req.open('GET', 'students.json', true);
req.onreadystatechange = function () {
  if (req.readyState == 4) {
     if(req.status == 200) {
      var students = JSON.parse(req.responseText);
     console.log(students);
  }   else {
      dump("Erreur pendant le chargement de la page.\n");
    }
  }
};
req.send();
