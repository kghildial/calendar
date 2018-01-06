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
    var th = document.createElement('th');
    th.textContent = day;
    tr.appendChild(th);
  });
  monthView.appendChild(tr);
}

var currentDate = new Date();

// Get current date
var d_today =  currentDate.getDate();
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
  if(year.textContent == y_today) {
    year.classList.add('onHover');
  }
  year.addEventListener('click', function(e) {
    yListItems.forEach(function(year) {
      year.classList.remove('onHover');
    });
    year.classList.add('onHover');
    y = e.target.textContent;
    firstIndex = getFirstIndex(y, m);
    firstDay = days[firstIndex];
    showMonth(y, m);
  });
});

const mListItems = document.querySelectorAll('#monthTable td');

mListItems.forEach(function(month) {
  if(months.indexOf(month.textContent) == m_today) {
    month.classList.add('onHover');
  }
  month.addEventListener('click', function(e) {
    mListItems.forEach(function(month) {
      month.classList.remove('onHover');
    });
    month.classList.add('onHover');
    m = months.indexOf(e.target.textContent);
    firstIndex = getFirstIndex(y, m);
    firstDay = days[firstIndex];
    showMonth(y, m);
  });
});

function getMaxDate(y, m) {
  y += '';
  var yArr = y.split('');
  var lastTwo = Number(yArr[yArr.length - 2] + yArr[yArr.length - 1]);
  var maxDate;

  if((m % 2 === 0 && m < 7) || m === 7 || m === 9 || m === 11 || m === -1) {
    maxDate = 32; // for 31 day month
  }
  else if(lastTwo % 4 === 0 && m === 1){
    maxDate = 30; // for 29 day feb
  }
  else if(m === 1) {
    maxDate = 29; // for 28 day feb
  }
  else {
    maxDate = 31; // for 30 day month
  }

  return maxDate;
}

function fillPrevDates(y, m, tr) {

  var maxDate = getMaxDate(y,m-1);
  var prevDate = maxDate - firstIndex;
  for(var  i = 0; i < firstIndex; i++) {
    var td = document.createElement('td');
    td.textContent = prevDate;
    td.style.color = '#fff'; //style here
    td.style.cursor = 'no-drop';
    tr.appendChild(td);
    prevDate++;
  }
}

showMonth(y, m);

//Display monthView
function showMonth(y, m) {
  var date = 1;
  var maxDate = getMaxDate(y, m);
  var tr = document.createElement('tr');
  monthView.innerHTML = '';
  listDays(days);

  fillPrevDates(y, m, tr);
  
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
  fadeInTD();
}

//Display tds

function fadeInTD() {
  const tds = document.querySelectorAll('#monthView td');
  const tdArr = Array.prototype.slice.call(tds);

  tdArr.forEach(function(td) {
    setTimeout(function() {
     td.style.opacity = '1'
    }, 50*tdArr.indexOf(td));
  });
}
