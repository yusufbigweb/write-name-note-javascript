//script
const btnAddName = document.querySelector("#btnAddName");
const btnAddSure = document.querySelector("#addSureName");
const tableShow = document.getElementById("tableBody");
const tableShow2 = document.getElementById("tableBody-2");

btnAddName.addEventListener("click", function () {
  const rowNewTable = document.createElement("tr");
  const dataCall = prompt("Enter Your First Name:");
  rowNewTable.innerHTML = `
    <td><ul  style="list-style-type:circle"><li class="listGap">${dataCall}</li></ul></td>
  `;
  tableShow.appendChild(rowNewTable);
});

btnAddSure.addEventListener("click", function () {
  const rowNewTable = document.createElement("tr");
  const dataCall = prompt("Enter Your Last Name:");

  rowNewTable.innerHTML = ` <td> <ul  style="list-style-type:circle"><li class="listGap">${dataCall} </li></ul> </td>`;

  tableShow2.appendChild(rowNewTable);

});