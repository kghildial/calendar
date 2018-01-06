const monthTable = document.querySelector('#monthTable');

var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

populateMonths(months);


function populateMonths(months) {
  var monthCount = 0;
  var tr = document.createElement('tr');
  for(var i = 0; i < months.length; i++) {
    var td = document.createElement('td');
    td.textContent = months[i];
    if(monthCount % 4 === 0) {
      var tr = document.createElement('tr');
    }
    tr.appendChild(td);
    monthTable.appendChild(tr);
    monthCount++;
  }
}

// Populate Calender Days
const monthView = document.querySelector('#monthView');

var days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

listDays(days);

function listDays(days) {
  var tr = document.createElement('tr');
  days.forEach(function(day) {
    var td = document.createElement('td');
    td.textContent = day;
    tr.appendChild(td);
  });
  monthView.appendChild(tr);
}