function downloadResume() {
  const a = document.createElement("a");
  a.href = "Deepthi_Manasa_Resume.pdf";
  a.download = "Deepthi_Manasa_Resume.pdf";
  a.click();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
