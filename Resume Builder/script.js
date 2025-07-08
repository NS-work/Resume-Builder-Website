
function generatePreview() {
  const name = document.getElementById('name').value || "Your Name";
  const email = document.getElementById('email').value || "example@example.com";
  const phone = document.getElementById('phone').value || "0000000000";
  const summary = document.getElementById('summary').value || "Your summary goes here...";
  const education = document.getElementById('education').value || "Education details...";
  const experience = document.getElementById('experience').value || "Experience details...";

  const resume = `
    <h1>${name}</h1>
    <p>Email: ${email}</p>
    <p>Phone: ${phone}</p>
    <h3>Professional Summary</h3>
    <p>${summary}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
  `;

  document.getElementById('resume').innerHTML = resume;
}

function downloadPDF() {
  generatePreview(); 
  const resume=document.getElementById('resume');
  resume.style.border="1px solid #ddd";
  resume.style.marginLeft="60px"
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({
    unit: 'px',
    format: 'a4'
  });
  doc.html(document.getElementById('resume'), {
    callback: function (pdf) {
      pdf.save("Resume.pdf");
    },
    x: 20,
    y: 20,
    html2canvas: {
    scale: 0.5
  }
  });
}
