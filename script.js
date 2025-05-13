
function generateResearch() {
    const title = document.getElementById('title').value;
    const group = document.getElementById('group').value;
    const students = document.getElementById('students').value.split('\n');
    const supervisor = document.getElementById('supervisor').value;
    const text = document.getElementById('researchText').value;

    const output = document.getElementById('output');

    const header = `
        <h2>غلاف البحث</h2>
        <p><strong>جامعة نواكشوط العصرية</strong></p>
        <p><strong>عنوان البحث:</strong> ${title}</p>
        <p><strong>رقم المجموعة:</strong> ${group}</p>
        <p><strong>أسماء الطلبة:</strong></p>
        <ul>${students.map(name => `<li>${name}</li>`).join('')}</ul>
        <p><strong>اسم الدكتور:</strong> ${supervisor}</p>
        <hr>
    `;

    const body = `
        <h3>محتوى البحث:</h3>
        ${text.split(/\n\n+/).map(paragraph => `<p>${paragraph}</p>`).join('')}
    `;

    const references = `
        <h3>المراجع:</h3>
        <p>يتم توليدها لاحقًا تلقائيًا أو إدخالها يدويًا.</p>
    `;

    output.innerHTML = header + body + references;
}

function downloadPDF() {
    const {{ jsPDF }} = window.jspdf;
    const doc = new jsPDF('p', 'pt', 'a4');
    doc.html(document.getElementById('output'), {
        callback: function (pdf) {
            pdf.save("البحث_الجامعي.pdf");
        },
        margin: [20, 20, 20, 20],
        x: 10,
        y: 10
    });
}
