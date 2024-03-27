// script.js

// Sample data for skills and experience
const data = {
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  experience: ["Frontend Developer at XYZ Company", "Freelance Web Developer"],
};

// Function to display skills
function displaySkills() {
  const skillsList = document.createElement("ul");
  data.skills.forEach((skill) => {
    const item = document.createElement("li");
    item.textContent = skill;
    skillsList.appendChild(item);
  });
  document.getElementById("content").innerHTML = "<h2>Skills</h2>";
  document.getElementById("content").appendChild(skillsList);
}

// Function to display experience
function displayExperience() {
  const experienceList = document.createElement("ul");
  data.experience.forEach((exp) => {
    const item = document.createElement("li");
    item.textContent = exp;
    experienceList.appendChild(item);
  });
  document.getElementById("content").innerHTML = "<h2>Experience</h2>";
  document.getElementById("content").appendChild(experienceList);
}

// Event listeners for navigation
document.getElementById("homeLink").addEventListener("click", () => {
  document.getElementById("content").innerHTML =
    "<h2>Welcome to my Portfolio</h2><p>This is where you showcase your portfolio.</p>";
});

document.getElementById("aboutLink").addEventListener("click", () => {
  displaySkills();
});

document.getElementById("resumeLink").addEventListener("click", () => {
  displayExperience();
});

document.getElementById("contactLink").addEventListener("click", () => {
  document.getElementById("content").innerHTML =
    "<h2>Contact Me</h2><p>You can reach me at omprakash099507gmail.com</p>";
});
