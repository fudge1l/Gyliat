/* jshint esversion: 6 */

// Сохранение данных в localStorage
document.querySelectorAll('.editable').forEach(element => {
  const savedValue = localStorage.getItem(element.innerText);
  if (savedValue) {
    element.innerText = savedValue;
  }

  element.addEventListener('input', () => {
    localStorage.setItem(element.innerText, element.innerText);
  });
});

// Генерация PDF
document.getElementById('download-btn').addEventListener('click', () => {
  const resume = document.querySelector('.resume-container');
  const options = {
    margin: 1,
    filename: 'resume.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  if (typeof html2pdf !== 'undefined') {
    html2pdf().set(options).from(resume).save();
  } else {
    console.error('html2pdf.js не подключён!');
  }
});
