// Write yout Javascript code in this files


var req = new XMLHttpRequest();
var table = document.getElementById('students');
req.open('GET', 'students.json', true);
req.onreadystatechange = function () {
  if (req.readyState == 4) {
     if(req.status == 200) {
      var students = JSON.parse(req.responseText);
     students.forEach(function (student) {
       let tr = document.createElement('tr');
       tr.innerHTML = `<td>${student.firstname}</td>
                       <td>${student.lastname}</td>`;
      table.appendChild(tr);
       console.log(student.firstname);
     });
  }   else {
      dump("Erreur pendant le chargement de la page.\n");
    }
  }
};
req.send();
