const goTopBtn = document.getElementById("goTopBtn");
const data = window.portfolioData;

function escapeHtml(value) {
    const element = document.createElement("span");
    element.textContent = value;
    return element.innerHTML;
}

function renderProfile(profile) {
    document.getElementById("profile").innerHTML = `
        <div class="col text-center text-light">
            <img class="col-5 rounded-pill img-fluid" src="${escapeHtml(profile.portrait)}" alt="Portrait of Lucas Skarpness">
            <h3 class="lead text-light mt-4">${escapeHtml(profile.name)}</h3>
            <p class="text-secondary"><small>${escapeHtml(profile.role)}</small></p>
            <p class="text-secondary"><small>${escapeHtml(profile.location)}</small></p>
            <p class="text-secondary">
                <a href="${escapeHtml(profile.github)}" class="lead text-secondary text-decoration-none" aria-label="GitHub">
                    <img src="assets/github-icon.png" alt="GitHub" class="img-fluid social-icon">
                </a>
                <a href="${escapeHtml(profile.linkedin)}" class="lead text-secondary text-decoration-none" aria-label="LinkedIn">
                    <img src="assets/li-icon.png" alt="LinkedIn" class="img-fluid social-icon">
                </a>
            </p>
            <p class="text-secondary"><small>© ${escapeHtml(profile.name)}</small></p>
        </div>`;
}

function renderIntro(intro) {
    document.getElementById("intro").innerHTML = `
        <div class="container-lg">
            <div class="row justify-content-center align-items-center">
                <div class="col-md-11">
                    <div class="display-3">
                        <span class="text-light">${escapeHtml(intro.title)}</span>
                        <span class="text-secondary"> ${escapeHtml(intro.highlight)}</span>
                    </div>
                    <div class="lead text-secondary mt-4 font-weight-light">${escapeHtml(intro.description)}</div>
                </div>
            </div>
        </div>`;
}

function renderEducation(entries) {
    document.getElementById("education-list").innerHTML = entries.map(entry => `
        <article class="text-secondary my-2 p-3 font-weight-light border-start border-secondary">
            <p class="lead">${escapeHtml(entry.dates)}</p>
            <h3 class="lead text-light">${escapeHtml(entry.degree)}</h3>
            <p><small>${escapeHtml(entry.institution)}</small></p>
            <p><small>${escapeHtml(entry.location)}</small></p>
            <p><small>${escapeHtml(entry.gpa)}</small></p>
            <p><small>Relevant Coursework: ${escapeHtml(entry.coursework)}</small></p>
        </article>`).join("");
}

function renderExperience(entries) {
    document.getElementById("experience-list").innerHTML = entries.map(entry => `
        <article class="text-secondary my-5 py-1 px-3 font-weight-light border-start border-secondary">
            <p class="lead">${escapeHtml(entry.dates)}</p>
            <h3 class="lead text-light">${escapeHtml(entry.title)}</h3>
            <p><small>${escapeHtml(entry.organization)}</small></p>
            <p><small>${escapeHtml(entry.location)}</small></p>
            ${entry.details.map(detail => `<p><small>${escapeHtml(detail)}</small></p>`).join("")}
        </article>`).join("");
}

function renderSkills(entries) {
    document.getElementById("skills-list").innerHTML = entries.map(entry => `
        <div class="col-lg-4">
            <div class="p-1">
                <div class="lead text-light">${escapeHtml(entry.title)}</div>
                <p class="text-secondary"><small>${escapeHtml(entry.items)}</small></p>
            </div>
        </div>`).join("");
}

function renderProjects(entries) {
    document.getElementById("project-list").innerHTML = entries.map(project => `
        <article class="col-lg-4">
            <div class="p-1">
                <div class="lead text-light">${escapeHtml(project.title)}</div>
                <p class="text-light mt-2 lh-lg">
                    ${project.technologies.map(technology =>
                        `<span class="border rounded border-1 border-success p-1 bg-transparent"><small>${escapeHtml(technology)}</small></span>`
                    ).join(" ")}
                </p>
                <p class="small text-secondary">${escapeHtml(project.description)}</p>
                ${project.url ? `<p class="small text-secondary">Check it out on <a class="link-light" href="${escapeHtml(project.url)}">GitHub &#10148;</a></p>` : ""}
            </div>
        </article>`).join("");
}

renderProfile(data.profile);
renderIntro(data.intro);
renderEducation(data.education);
renderExperience(data.experience);
renderSkills(data.skills);
renderProjects(data.projects);

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        goTopBtn.style.display = "flex";
    } else {
        goTopBtn.style.display = "none";
    }
}

window.onscroll = scrollFunction;
scrollFunction();