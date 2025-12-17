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
