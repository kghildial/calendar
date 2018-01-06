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

var firstIndex = getFirstIndex(y, m);

// Get first day of month
function getFirstIndex(y, m) {
  var firstIndex = new Date(y, m, 1).getDay();
  return firstIndex;
}

var firstDay = days[firstIndex];


// Add event handlers for getting first day
const yListItems = document.querySelectorAll('#yList li');

yListItems.forEach(function(year) {
  year.addEventListener('click', function(e) {
    y = e.target.textContent;
    firstIndex = getFirstIndex(y, m);
    firstDay = days[firstIndex];
  });
});

const mListItems = document.querySelectorAll('#monthTable td');

mListItems.forEach(function(month) {
  month.addEventListener('click', function(e) {
    m = months.indexOf(e.target.textContent);
    firstIndex = getFirstIndex(y, m);
    firstDay = days[firstIndex];
  });
});

function getMaxDate(y, m) {
  y += '';
  var yArr = y.split('');
  var lastTwo = Number(yArr[yArr.length - 2] + yArr[yArr.length - 1]);
  var maxDate;

  if((m % 2 === 0 && m < 7) || m === 7 || m === 9 || m === 11) {
    maxDate = 32;
  }
  else if(lastTwo % 4 === 0 && m === 1){
    maxDate = 29;
  }
  else if(m === 2) {
    maxDate = 28;
  }
  else {
    maxDate = 30;
  }

  return maxDate;
}

showMonth(y, m);

//Display monthView
function showMonth(y, m) {
  var date = 1;
  var maxDate = getMaxDate(y, m);
  var tr = document.createElement('tr');
  
  for(var i = firstIndex; i < days.length + 1; i++) {
    if(date === maxDate) {
      break;
    }
    var td = document.createElement('td');
    td.textContent = date;
    date++;

    if(i === 7) {
      var tr = document.createElement('tr');
      i = 0;
    }

    tr.appendChild(td)
    monthView.appendChild(tr);
  }
}