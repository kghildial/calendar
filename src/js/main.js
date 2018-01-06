const monthTable = document.querySelector('#monthTable');
const yListItems = document.querySelectorAll('#yList li');

// Create a new Date() object
var currentDate = new Date();

// Get current date
var d_today =  currentDate.getDate();
var m = m_today = currentDate.getMonth();
var y = y_today = currentDate.getFullYear();

// Populate months table from this array of months
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
populateMonths(months);

const monthView = document.querySelector('#monthView');
const mListItems = document.querySelectorAll('#monthTable td');
disablePastMonths();

// Populate calender days
var days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
listDays(days);

// Get first day of month
var firstIndex = getFirstIndex(y, m);
var firstDay = days[firstIndex];

function getFirstIndex(y, m) {
  var firstIndex = new Date(y, m, 1).getDay();
  return firstIndex;
} 

showMonth(y, m);

// Event handlers for year and month buttons
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
