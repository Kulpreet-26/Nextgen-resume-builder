document.getElementById("generate-btn").addEventListener("click", generateResume);
document.getElementById("download-btn").addEventListener("click", downloadResume);

function generateResume() {
  const name = document.getElementById("name").value;
  const jobTitle = document.getElementById("job-title").value;
  const skills = document.getElementById("skills").value;
  const experience = document.getElementById("experience").value;

  const preview = `
    <h3>${name}</h3>
    <h4>${jobTitle}</h4>
    <p><strong>Skills:</strong> ${skills}</p>
    <p><strong>Experience:</strong> ${experience}</p>
  `;

  document.getElementById("resume-preview").innerHTML = preview;
}

function downloadResume() {
  const element = document.createElement("a");
  const resumeContent = document.getElementById("resume-preview").innerHTML;
  const blob = new Blob([resumeContent], { type: "text/html" });
  element.href = URL.createObjectURL(blob);
  element.download = "resume.html";
  element.click();
}
