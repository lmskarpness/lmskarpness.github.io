const goTopBtn = document.getElementById("goTopBtn");

function escapeHTML(value) {
    const element = document.createElement("div");
    element.textContent = value;
    return element.innerHTML;
}

function renderTimeline(items) {
    return items.map((item) => `
        <article class="text-secondary my-5 py-1 px-3 font-weight-light border-start border-secondary">
            <p class="lead">${escapeHTML(item.date)}</p>
            <h3 class="lead text-light">${escapeHTML(item.title)}</h3>
            <p><small>${escapeHTML(item.organization)}</small></p>
            ${item.location ? `<p><small>${escapeHTML(item.location)}</small></p>` : ""}
            ${item.details.map((detail) => `<p><small>${escapeHTML(detail)}</small></p>`).join("")}
        </article>
    `).join("");
}

function renderSkills(items) {
    return items.map((item) => `
        <div class="col-lg-4">
            <div class="p-1">
                <div class="lead text-light">${escapeHTML(item.title)}</div>
                <p class="text-secondary"><small>${escapeHTML(item.description)}</small></p>
            </div>
        </div>
    `).join("");
}

function renderProjects(items) {
    const rows = [];

    for (let index = 0; index < items.length; index += 3) {
        const cards = items.slice(index, index + 3).map((project) => `
            <div class="col-lg-4">
                <div class="p-1">
                    <div class="lead text-light">${escapeHTML(project.title)}</div>
                    <p class="text-light mt-2 lh-lg">
                        ${project.technologies.map((technology) =>
                            `<span class="border rounded border-1 border-success p-1 bg-transparent me-1"><small>${escapeHTML(technology)}</small></span>`
                        ).join("")}
                    </p>
                    <p class="small text-secondary">${escapeHTML(project.description)}</p>
                    ${project.url
                        ? `<p class="small text-secondary">Check it out on <a class="link-light" href="${escapeHTML(project.url)}">GitHub &#10148;</a></p>`
                        : ""
                    }
                </div>
            </div>
        `).join("");

        rows.push(`<div class="row justify-content-center g-4 mb-4">${cards}</div>`);
    }

    return rows.join("");
}

function renderPortfolio() {
    const education = document.getElementById("education-list");
    const experience = document.getElementById("experience-list");
    const skills = document.getElementById("skills-list");
    const projects = document.getElementById("projects-list");

    if (education) education.innerHTML = renderTimeline(portfolioData.education);
    if (experience) experience.innerHTML = renderTimeline(portfolioData.experience);
    if (skills) skills.innerHTML = renderSkills(portfolioData.skills);
    if (projects) projects.innerHTML = renderProjects(portfolioData.projects);
}

function scrollFunction() {
    const isScrolled = document.body.scrollTop > 30 || document.documentElement.scrollTop > 30;

    if (goTopBtn) {
        goTopBtn.style.display = isScrolled ? "flex" : "none";
    }
}

renderPortfolio();
window.onscroll = scrollFunction;
scrollFunction();