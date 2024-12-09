// Сохранение данных при вводе
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
<script src="js/script.js"></script>
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
