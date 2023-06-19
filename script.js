const dayValue = document.getElementById('day');
const monthValue = document.getElementById('month');
const yearValue = document.getElementById('year');
const yearOutputValue = document.getElementById('YY');
const monthOutputValue = document.getElementById('MM');
const dayOutputValue = document.getElementById('DD');
const errorDay = document.querySelector('.errorDay');
const errorYear = document.querySelector('.errorYear');
const errorMonth = document.querySelector('.errorMonth');
const button = document.querySelector('.btn');
const errorLabelDay = document.querySelector('.errorLabelDay');
const errorLabelMonth = document.querySelector('.errorLabelMonth');
const errorLabelYear = document.querySelector('.errorLabelYear');
button.addEventListener('click', () => {
  let dateObj = new Date();
  let month = String(dateObj.getMonth() + 1).padStart(2, '0');
  let day = String(dateObj.getDate()).padStart(2, '0');
  let year = dateObj.getFullYear();
  const yearOutput = year - yearValue.value;
  let monthOutput = month - monthValue.value;
  let dayOutput = day - dayValue.value;
  if (monthOutput < 0) {
    monthOutput *= -1;

    monthOutputValue.innerHTML = monthOutput;
  } else if (monthValue.value == 0 || monthValue.value == '') {
    monthOutputValue.innerHTML = '--';
  } else {
    monthOutputValue.innerHTML = monthOutput;
  }
  //FOR YEAR
  if (yearValue.value == 0 || yearValue.value == '' || yearOutput < 0) {
    yearOutputValue.innerHTML = '--';
  } else {
    yearOutputValue.innerHTML = yearOutput;
  }
  // For days
  if (dayOutput < 0) {
    dayOutput *= -1;

    dayOutputValue.innerHTML = dayOutput;
  } else if (dayValue.value == 0 || dayValue.value == '') {
    dayOutputValue.innerHTML = '--';
  } else {
    dayOutputValue.innerHTML = dayOutput;
  }

  /* -----------------------Error Section ---------------------------------- */
  // For Empty field

  if (dayValue.value == '') {
    errorDay.textContent = 'This field is required';
    dayValue.style.borderColor = ' red ';
    errorLabelDay.style.color = 'red';
  }

  if (monthValue.value == '') {
    errorMonth.textContent = 'This field is required';
    monthValue.style.borderColor = ' red ';
    errorLabelMonth.style.color = 'red';
  }

  if (yearValue.value == '') {
    errorYear.textContent = 'This field is required';
    yearValue.style.borderColor = ' red ';
    errorLabelYear.style.color = 'red';
  }
});
// Checking input value of Day Input
dayValue.addEventListener('input', () => {
  if (dayValue.value > 31 || dayValue.value <= 0) {
    errorDay.textContent = 'Must be a valid day';
    dayValue.style.borderColor = ' red ';
    errorLabelDay.style.color = 'red';
  }
  if (dayValue.value != '' && dayValue.value < 31 && dayValue.value > 0) {
    errorDay.textContent = '';
    dayValue.style.borderColor = 'black';
    errorLabelDay.style.color = 'black';
  }
});

monthValue.addEventListener('input', () => {
  if (monthValue.value > 12 || monthValue.value <= 0) {
    errorMonth.textContent = 'Must be a valid Month';
    monthValue.style.borderColor = ' red ';
    errorLabelMonth.style.color = 'red';
  }
  if (monthValue.value != '' && monthValue.value < 12 && monthValue.value > 0) {
    errorMonth.textContent = '';
    monthValue.style.borderColor = 'black';
  
    errorLabelMonth.style.color = 'black';
  }
});

yearValue.addEventListener('input', () => {
  let dateObj = new Date();
  let year = dateObj.getFullYear();
  if (yearValue.value > year || yearValue.value <= 0) {
    errorYear.textContent = 'Must be a valid Year';
    yearValue.style.borderColor = ' red ';
    errorLabelYear.style.color = 'red';
  }
  if (yearValue.value != '' && yearValue.value < 31 && yearValue.value > 0) {
    errorYear.textContent = '';
    yearValue.style.borderColor = 'black';
    errorLabelYear.style.color = 'black';
  }
});
