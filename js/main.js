// Сохранение данных при вводе
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
  const opt = {
    margin: 1,
    filename: 'resume.pdf',
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(resume).save();
});
