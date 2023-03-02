//table 
// let td1=document.createElement("td");
// let td2=document.createElement("td");
let cnt=0;
let avg_salary=0;
function display(){
    document.write(cnt)
    let doctor={
        name:document.getElementById("name").value,
        id:document.getElementById("ID").value,
        onduty_from: document.getElementById("time1").value,
        onduty_to: document.getElementById("time2").value,
        salary: document.getElementById("salary").value,
        age:document.getElementById("age").value,
        address:{
            city:document.getElementById("city").value,
            state:document.getElementById("state").value,
        },
    };
    let body = document.body,
        tbl = document.createElement('table');
  tbl.style.width = '100px';
  tbl.style.border = '1px solid black';

  for (let i = 0; i < 3; i++) {
    let tr = tbl.insertRow();
    for (let j = 0; j < 2; j++) {
      if (i === 2 && j === 1) {
        break;
      } else {
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(`Cell I${i}/J${j}`));
        td.style.border = '1px solid black';
        if (i === 1 && j === 1) {
          td.setAttribute('rowSpan', '2');
        }
      }
    }
  }
  body.appendChild(tbl);
    for (var i = 0; i < doctor.length; i++) {

        tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');


        let TD1 = document.appendChild('');
        td2.appendChild(document.createTextNode());
        td3.appendChild(document.createTextNode());

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        tbl.appendChild(tr);
}
var myTableDiv = document.getElementById("myDynamicTable");
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++) {
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 4; j++) {
      var td = document.createElement('TD');
      td.width = '75';
      td.appendChild(document.createTextNode("Cell " + i + "," + j));
      tr.appendChild(td);
    }
  }
  myTableDiv.appendChild(table);
  cnt++;
}
addTable();

    