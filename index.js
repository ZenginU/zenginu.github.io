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
  Enthusiastic Engineering student eager to contribute to team success through hard work, attention to detail,
   and excellent organizational skills. A clear understanding of Matlab, C, and Python and training in C++. Motivated to learn, grow and excel in Software development and Machine Learning
  </p>
  `;
}

function addEducation() {
  document.getElementById('main').innerHTML =
  `
  <h2>Education</h2>
  <ul>
    <li>Koc University - Electrical and Electronics Engineering</li>
    <li>Koc University - Computer Engineering (Double Major)</li>
  </ul>
  `;
}

function addProjects() {
  document.getElementById('main').innerHTML =
  `
  <h2>FTP Server</h2>
  <ul>
    <li>Designed and implemented a FTP server from scratch.</li>
    <li>Written in Embedded C.</li>
    <li>Multi-threaded server works for multi-client.</li>
    <li>Comply with RFC Standard.</li>
  </ul>
  <h2>Data Generation and Model Training</h2>
  <ul>
    <li>Trained Machine Learning and Neural Network based on real-life data.</li>
    <li>Generated data based on real-life product.</li>
    <li>Used numpy, pandas, keras and seaborn.</li>
    <li>Designed data pipeline and code architecture from scratch.</li>
  </ul>

  `;
}

function addExp() {
  document.getElementById('main').innerHTML =
  `
  <h2 style="margin-bottom: 0;">Machine Learning Intern - Havelsan</h2>
  <ul>
    <li>Work with group of machine learning engineers.</li>
    <li>Programmed section of pipeline for a large project.</li>
  </ul>
  `;
}
