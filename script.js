// Sample project data
const projects = [
    {
        title: "Calculator App",
        description: "A simple calculator app built with JavaScript.",
        link: "#"
    },
    {
        title: "To-Do List App",
        description: "A web app to manage your tasks using React.",
        link: "#"
    },
    {
        title: "Weather App",
        description: "Displays real-time weather information using an API.",
        link: "#"
    }
];

// Sample experience data
const experiences = [
    {
        company: "Forty-Niner",
        role: "Full Stack Java Developer",
        duration: "Sep 2022 – May 2024",
        description: "Led development of interactive user interfaces using React and Angular."
    },
    {
        company: "Accenture",
        role: "Software Engineer",
        duration: "Jan 2021 – Oct 2021",
        description: "Implemented RESTful APIs and established CI/CD workflows using Azure DevOps."
    },
    {
        company: "FI",
        role: "Associate Software Engineer",
        duration: "Jun 2020 – Dec 2020",
        description: "Developed reusable NPM packages with Angular components."
    }
];

// Function to display projects
function displayProjects() {
    const projectList = document.querySelector('.project-list');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project');

        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectList.appendChild(projectCard);
    });
}

// Function to display experience
function displayExperience() {
    const experienceList = document.querySelector('.experience-list');

    experiences.forEach(exp => {
        const experienceCard = document.createElement('div');
        experienceCard.classList.add('experience');

        experienceCard.innerHTML = `
            <h3>${exp.company}</h3>
            <h4>${exp.role}</h4>
            <p><strong>${exp.duration}</strong></p>
            <p>${exp.description}</p>
        `;

        experienceList.appendChild(experienceCard);
    });
}

// Call functions to display content
displayProjects();
displayExperience();
