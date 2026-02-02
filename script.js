function personal() {
  let personalSelect = document.querySelector('select[onchange="personal()"]');
  let personal = personalSelect.value;
  let display = document.getElementById('personal-display');
  display.className = "personal-display";
  let text = "";
  
  if (personal === "showcase") {
    text = `<strong class="silverback"><em>Vault Hunter's Toolbox</strong><br>
      <strong class="tech">Tech Stack:</strong> 
      <ol class="tech-li">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      </ol>
      <p class="silverback"><strong class="des">Description:</strong><br>
      A web tool to assist any borderlands player in calculating the total time their action skill will be in cooldown for as well as be able to calculate the total time it'll take their shields or health to reach 100% capacity.</em></p>
    <a href="https://warden-boulder.github.io/Borderlands-2-Cooldown-Website/" target="_blank">Live Site</a>`;
  } else if (personal === "portfolio") {
    text = `<em><strong class="silverback">Personal Portfolio Site</strong><br>
    <strong class="tech">Tech Stack:</strong> 
    <ol class="tech-li">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    </ol>
    <p class="silverback"><strong class="des">Description:</strong><br>
    Built and designed the current website to display both my translation work and developer projects I've either worked on and/or developed.<p></em>`;
  } else if (personal === "commission") {
    text = `<em><strong class="silverback">Personal Commission Site</strong><br>
    <strong class="tech">Tech Stack:</strong> 
    <ol class="tech-li">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    </ol>
    <p class="silverback"><strong class="des">Description:</strong><br>
    Built and designed to act as a go to place for the services that I offer ranging from translations services to web development services.<p></em>
    <a href="https://warden-boulder.github.io/Commission/index.html">Live Site</a>`;
  } else if (personal === "convert") {
    text = `<em><strong class="silverback">Unit Converter</strong><br>
    <strong class="tech">Tech Stack:</strong> 
    <ol class="tech-li">
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    </ol>
    <p class="silverback"><strong class="des">Description:</strong><br>A conversion tool to help convert measurements between various unit categories that include units like length, mass, speed, and temperature.</p></em><br>
    <a href="https://warden-boulder.github.io/Converter/" target="_blank">Live Site</a>`;
  } else if (personal === "challenge") {
    text = `<em><strong class="silverback">Various Challenges</strong><br>
    <strong class="tech">Tech Stack:</strong> 
    <ol class="tech-li">
    <li>JavaScript</li>
    <li>Python</li>
    </ol>
    <p class="silverback"><strong class="des">Description:</strong><br>
    The only 2 challenges that I've done thus far are the fizzbuzz and palindrome coding challenges. Both linked to my GitHub below.</p></em><br>
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
    text = `<em><strong class="amethyst">Aviation Maintenance Toolbox</strong><br>
    <strong class="amethyst underline"><em class="amethyst">Build Type:</strong> Job Efficiency Tool</em><br>
    <strong class="tech2">Tech Stack:</strong> 
    <ol class="tech-li2">
    <li>JavaScript</li>
    <li>Python</li>
    </ol>
    <p class="amethyst"><strong class="des2">Description:</strong><br> Both a web tool and python based tool I developed, with the aid of coworkers to ensure accuracy, to aid myself and coworkers to help verify that the results of a horizontal freeplay check that is performed on both Boeing 737NG and 737 Max aircraft are within or out limits in accordance with all appropriate maintenance manuals and airworthiness directives (ADs).</p></em>
    <a href="https://warden-boulder.github.io/Aviation-Maintenance-Toolbox/" target="_blank">Live Site</a><br>
    <a href="https://github.com/Warden-Boulder/B737-Horizontal-Freeplay/tree/main">Python Code</a>`;
  }
  
  display.innerHTML = text;
}
