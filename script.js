  /* =========================
     Dark Mode Toggle
     ========================= */
  const toggleBtn = document.getElementById("darkModeToggle");
  const body = document.body;
  const instagramIcon = document.getElementById("instagramIcon");
  const facebookIcon = document.getElementById("facebookIcon");
  const tiktokIcon = document.getElementById("tiktokIcon");
  const linkedinIcon = document.getElementById("linkedinIcon");
  const githubIcon = document.getElementById("githubIcon");

  // Load preference
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
      toggleBtn.textContent = "☀️";
      instagramIcon.src = "img/instagram-line-darkmode.png";
      facebookIcon.src = "img/facebook-line-darkmode.png";
      tiktokIcon.src = "img/tiktok-line-darkmode.png";
      linkedinIcon.src = "img/linkedin-line-darkmode.png";
      githubIcon.src = "img/github-line-darkmode.png";
      localStorage.setItem("theme", "dark");
    } else {
      toggleBtn.textContent = "🌙";
      instagramIcon.src = "img/instagram-line.png";
      facebookIcon.src = "img/facebook-line.png";
      tiktokIcon.src = "img/tiktok-line.png";
      linkedinIcon.src = "img/linkedin-line.png";
      githubIcon.src = "img/github-line.png";
      localStorage.setItem("theme", "light");
    }
  });

