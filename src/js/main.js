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

var currentDate = new Date();

// Get current date
var d = d_today =  currentDate.getDate();
var m = m_today = currentDate.getMonth();
var y = y_today = currentDate.getFullYear();

// Get first day of month
var firstIndex = new Date().getDay(y, m, d);
var firstDay = days[firstIndex];

console.log(d);
console.log(m);
console.log(y);
console.log(firstIndex);
console.log(firstDay);