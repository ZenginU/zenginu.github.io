function addFooter() {
  document.body.innerHTML += `
  <footer>
    <ul>
      <li><a href="https://www.linkedin.com/in/zenginumut/" target="popup">LinkedIn</a></li>
      <li><a href="https://github.com/ZenginU" target="popup">GitHub</a></li>
      <li><a href="mailto:umutzengin00@gmail.com" target="popup">Mail</a></li>
    </ul>
  </footer>`;
}

function addHome() {
  document.getElementById('main').innerHTML =
  `
  <h2>About Me</h2>
  <p style="padding-left: 16px;">
    Enthusiastic engineering student eager to learn new technologies.
  </p>
  `;
}

function addEducation() {
  document.getElementById('main').innerHTML =
  `
  <h2>Education : </h2>
  <ul>
    <li>Koc University - Electrical and Electronics Engineering</li>
    <li>Koc University - Computer Engineering (Double Major)</li>
  </ul>
  `;
}

function addProjects() {
  document.getElementById('main').innerHTML =
  `
  <h2>Projects</h2>
  <ul>
    <li>FTP Server</li>
  </ul>
  `;
}
