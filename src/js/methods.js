// Function for populating the months table
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

// Function to disable all past months of current year
function disablePastMonths() {
  mListItems.forEach(function(month) {
    if(months.indexOf(month.textContent) < m_today) {
      month.style.pointerEvents = 'none';
      month.style.backgroundColor = '#eee';
      month.style.color = '#aaa';
    }
  });
}

// Function for populating calender days
function listDays(days) {
  var tr = document.createElement('tr');
  days.forEach(function(day) {
    var th = document.createElement('th');
    th.textContent = day;
    tr.appendChild(th);
  });
  monthView.appendChild(tr);
}

// Function for deciding the number of days in a month
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

// Function for filling prev months days
function fillPrevDates(y, m, tr) {

  var maxDate = getMaxDate(y,m-1);
  var prevDate = maxDate - firstIndex;
  for(var  i = 0; i < firstIndex; i++) {
    var td = document.createElement('td');
    td.textContent = prevDate;
    td.style.color = '#aaa';
    td.style.backgroundColor = '#eee';
    td.style.pointerEvents = 'none';
    tr.appendChild(td);
    prevDate++;
  }
}

// Display monthView
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

// Function for month-dates fade-in
function fadeInTD() {
  const tds = document.querySelectorAll('#monthView td');
  const tdArr = Array.prototype.slice.call(tds);

  tdArr.forEach(function(td) {
    setTimeout(function() {
     td.style.opacity = '1'
    }, 50*tdArr.indexOf(td));
  });
}