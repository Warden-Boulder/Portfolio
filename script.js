function personal() {
  let personalSelect = document.querySelector('select[onchange="personal()"]');
  let personal = personalSelect.value;
  let display = document.getElementById('display-one');
  display.className = "display-one";
  let text = "";
  
  if (personal === "showcase") {
    text = `<strong><em>Borderlands Vault Hunter Toolbox</strong><br>
      Tech Stack: HTML, CSS, JavaScript<br>
      Description: A web tool to calculate skill cooldowns for characters in the borderlands series</em><br>
    <a href="https://warden-boulder.github.io/Borderlands-2-Cooldown-Website/" target="_blank">Live Site</a>`;
  } else if (personal === "sites") {
    text = `<em><strong>Inkweaver and Codewright Portfolio Website</strong><br>
    Tech Stack: HTML and CSS<br>
    Description: Built the current website to display the translation and developer projects I've worked on or developed.</em><br><br>
    <em><strong>Warden's Outpost</strong><br>
    Tech Stack: HTML and CSS<br>
    Description: A website I built to act as my commissions site.</em><br>
    <a href="https://warden-boulder.github.io/Commissions/" target="_blank">Live Site</a>`;
  } else if (personal === "tools") {
    text = `<em><strong>Unit Conversion</strong><br>
    Tech Stack: HTML, CSS, JavaScript<br>
    Description: A website I built to convert various units of measurements that include length, mass, speed, and temperature to another of the same kind of unit.</em><br>
    <a href="https://warden-boulder.github.io/Converter/" target="_blank">Live Site</a>`;
  } else if (personal === "challenges") {
    text = `<em><strong>FizzBuzz and Palindrome Challenges</strong><br>
    Tech Stack: JavaScript and Python<br>
    Description: These are the only 2 coding challenges I've done to date. My take on both using a mix of Python and JavaScript can be found on my GitHub, linked below.</em><br>
    <a href="https://github.com/Warden-Boulder/Coding-Challenge/tree/main" target="_blank">GitHub</a>`;
  }
  
  display.innerHTML = text;
}

function professional() {
  let proSelect = document.querySelector('select[onchange="professional()"]');
  let pro = proSelect.value;
  let display = document.getElementById('display-two');
  display.className = "display-two";
  let text = "";
  
  if (pro === "aviation") {
    text = `<em><strong>B737 Horizontal Freeplay Calculator</strong><br>
    Type: Job Efficiency Tool<br>
    Tech Stack: HTML, CSS, JavaScript, Python<br>
    Description: Both a web tool and python based tools I developed, with the aid of coworkers to ensure accuracy, to aid myself and coworkers to help verify that the results of a horizontal freeplay check that is performed on both Boeing 737NG and 737 Max aircraft are within or out limits in accordance with all appropriate maintenance manuals and airworthiness directives (ADs).</em><br><br>
    Links:<br>
    <a href="https://warden-boulder.github.io/B737-Horizontal-Freeplay-Website/" target="_blank">Live Site</a><br>
    <a href="https://github.com/Warden-Boulder/B737NG-Horizontal-Freeplay-Calculator" target="_blank">B737NG Python Code</a><br>
    <a href="https://github.com/Warden-Boulder/B737Max-Horizontal-Freeplay-Calculator" target="_blank">B737 Max Python Code</a>`;
  }
  
  display.innerHTML = text;
}
