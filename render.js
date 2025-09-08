function resolve_badges(item) {
  let badges = "";

  if (item.arxiv) {
    badges += `
      <a href="${item.arxiv}" target="_blank" rel="noreferrer" >
        <i class="ai ai-arxiv icon"></i>arXiv
      </a>
      `;
  }

  if (item.pdf) {
    badges += `
      <a href="${item.pdf}" target="_blank" rel="noreferrer" >
        <i class="far fa-file-pdf icon"></i>PDF
      </a>
      `;
  }

  if (item.slides) {
    badges += `
      <a href="${item.slides}" target="_blank" rel="noreferrer" >
        <i class="fas fa-desktop icon"></i>Slides
      </a>
      `;
  }

  if (item.github) {
    badges += `
      <a href="${item.github}" target="_blank" rel="noreferrer" >
        <i class="fab fa-github icon"></i>GitHub
      </a>
      `;
  }

  if (item.website) {
    badges += `
      <a href="${item.website}" target="_blank" rel="noreferrer" >
        <i class="fas fa-globe-americas icon"></i>Website
      </a>
      `;
  }
  return badges;
}

function renderSoftwares(containerId, list) {
  const container = document.getElementById(containerId);
  container.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-4";

  list.forEach((project) => {
    const primaryLink = project.links?.[0]?.url || "#";

    const card = document.createElement("a");
    card.href = primaryLink;
    card.target = "_blank";
    card.rel = "noreferrer";
    card.className =
      "block p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors duration-200";

    card.innerHTML = `
      <div class="p-4">
        <h3 class="text-white text-lg font-bold mb-1">${project.title}</h3>
        <p class="text-secondary text-sm mb-3">${project.description}</p>
        <p class="text-sm text-gray-400 mb-2">🛠️ ${project.tech.join(", ")}</p>
        <div class="flex flex-wrap gap-3">
          ${project.links
            .map(
              (link) =>
                `<span class="text-blue-400 hover:text-white underline text-sm">${link.label}</span>`,
            )
            .join("")}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderPublications(containerId, list) {
  const container = document.getElementById(containerId);

  list.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "border-l-4 border-accent pl-4 mb-4 ml-4";

    let badges = resolve_badges(item);

    wrapper.innerHTML = `
    <span class="font-bold text-white">${item.title}</span>
    <br />
    ${item.authors}
    <br />
    <span class="text-gray-500 italic">${item.publisher}, ${item.date}</span>
    <br />
    ${badges}
    `;

    container.appendChild(wrapper);
  });
}

function renderManuscripts(containerId, list) {
  const container = document.getElementById(containerId);

  list.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "border-l-4 border-accent pl-4 mb-4 ml-4";

    let badges = resolve_badges(item);

    wrapper.innerHTML = `
    <div class="flex items-start justify-between">
      <div>
        <span class="font-bold text-white">${item.title}</span>
        <br />
        ${item.authors}
        <br />
        ${badges}
      </div>
      <span class="text-sm text-gray-400 mt-1 ml-8 pl-8 whitespace-nowrap">${item.date}</span>
    </div>

    `;

    container.appendChild(wrapper);
  });
}

function renderTeaching(containerId, list) {
  const container = document.getElementById(containerId);

  list.forEach((item) => {
    const wrapper = document.createElement("div");

    let semesters = Object.entries(item.semesters)
      .map(([name, url]) =>
        url
          ? `<a href="${url}" target="_blank" rel="noreferrer">${name}</a>`
          : name,
      )
      .join(", ");

    wrapper.className = "border-l-4 border-accent pl-4 mb-4 ml-4";
    wrapper.innerHTML = `
    <div class="flex items-start justify-between">
      <div>
        <span class="font-bold text-white">${item.title}</span>
        <p class="text-sm text-gray-400 italic">${item.role}</p>
      </div>
      <span class="text-sm text-gray-400 mt-1 ml-8 pl-8 whitespace-nowrap">${semesters}</span>
    </div>
    `;

    container.appendChild(wrapper);
  });
}

function renderPresentations(containerId, list) {
  const container = document.getElementById(containerId);

  list.forEach((item) => {
    const wrapper = document.createElement("div");
    wrapper.className = "border-l-4 border-accent pl-4 mb-4 ml-4";

    const link = document.createElement("a");
    link.href = item.link;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.className =
      "block hover:bg-gray-700 rounded-lg transition-colors duration-200";

    link.innerHTML = `
      <div class="flex items-start justify-between">
        <div>
          <span class="font-bold text-white">${item.title}</span>
          <p class="text-sm text-gray-400 italic">${item.location}</p>
        </div>
        <span class="text-sm text-gray-400 mt-1 ml-8 pl-8 whitespace-nowrap">${item.date}</span>
      </div>
    `;

    wrapper.appendChild(link);
    container.appendChild(wrapper);
  });
}

function renderNews(containerId, list) {
  const container = document.getElementById(containerId);
  const ul = document.createElement("ul");
  ul.className = "space-y-2";

  list.forEach((item) => {
    icon = item.icon ?? "fa-solid fa-graduation-cap";
    const li = document.createElement("li");
    li.className = "flex";
    li.innerHTML = `
        <div class="basis-24 flex-none flex justify-center">
          <span class="inline-flex px-3 py-1 rounded-full bg-surface text-xs font-bold self-start">
            ${item.date}
          </span>
        </div>
    `;
    if (item.title) {
      li.innerHTML += `
        <div class="flex min-w-0 items-baseline">
          <i class='${icon} fa-fw mr-2 shrink-0'></i>
          <span class="whitespace-normal break-words text-sm">${item.title}</span>
        </div>
      `;
    } else {
      li.className = "flex items-center";
      li.innerHTML += `
        <div class="flex-1 border-b border-gray-300"></div>
      `;
    }

    ul.appendChild(li);
  });

  container.appendChild(ul);
}
