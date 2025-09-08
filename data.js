const news = [
  {
    date: "Aug 18th",
    icon: "fa-brands fa-apple",
    title: "Started working as a software engineer at Apple in the simulation team",
  },
  {
    date: "May 16th",
    title: "Graduated from University of Southern California with my master's in computer science",
  },
  {
    date: "Feb 28th",
    icon: "fa-solid fa-chalkboard",
    title: `My co-author Aditya presented <a class="italic" href="" target="_blank" rel="noreferrer">dpvis: A Visual and Interactive Learning Tool for Dynamic Programming</a> at <a href="https://sigcse2025.sigcse.org" target="_blank" rel="noreferrer">SIGCSE 2025</a> in Pittsburg, Pennsylvania`,
  },
  {
    date: "2024",
  },
  {
    date: "Oct 31st",
    icon: "fa-solid fa-chalkboard",
    title: `Presented <a class="italic" href="https://davidhaolong.com/slides/theory_lunch_dpvis" target="_blank" rel="noreferrer">dpvis: A Visual and Interactive Learning Tool for Dynamic Programming</a> at <a href="https://viterbi-web.usc.edu/~cstheory/theory-lunch.html" target="_blank" rel="noreferrer">USC Theory Lunch</a>`,
  },
  {
    date: "Jul 16th",
    icon: "fa-solid fa-chalkboard",
    title: `Presented <a class="italic" href="https://davidhaolong.com/slides/dds" target="_blank" rel="noreferrer">Density Descent Search for Diversity Optimization</a> at <a href="https://gecco-2024.sigevo.org" target="_blank" rel="noreferrer">GECCO 2024</a> in Melbourne, Australia`,
  },
  {
    date: "Apr 25th",
    icon: "fa-solid fa-chalkboard",
    title: `Presented my bachelor's honors thesis <a class="italic" href="https://davidhaolong.com/slides/bachelors_thesis" target="_blank" rel="noreferrer">Quality Diversity Optimization: A Modular Framework and Continuous Density Estimation</a>`,
  },
  {
    date: "2023",
  },
  {
    date: "Dec 6th",
    icon: "fa-solid fa-screwdriver-wrench",
    title: `Released <a class="italic" href="https://dpvis.readthedocs.io/en/latest" target="_blank" rel="noreferrer">dpvis</a>, a simple Python library for interactive visualizations of dynamic programming algorithms`,
  },
]
const projects = [
  {
    title: "dpvis",
    image: "./assets/methodology.png",
    description: "Open-source Python library for interactive visualizations of dynamic programming algorithms, with self-checks and an event-driven architecture built with Plotly Dash.",
    tech: ["Python", "Plotly Dash", "GitHub Actions", "mkdocs"],
    role: "Team Lead, used in university instruction",
    links: [
      { label: "Website", url: "https://dpvis.readthedocs.io/en/latest" },
      { label: "GitHub", url: "https://github.com/itsdawei/dpvis" },
      { label: "Paper", url: "https://arxiv.org/abs/2411.07705" },
    ]
  },
  {
    title: "pyribs",
    description: "A bare-bones Python library for quality diversity (QD) optimization. Pyribs implements the highly modular Rapid Illumination of Behavior Space (RIBS) framework for QD optimization.",
    tech: ["Python", "JAX", "PyTorch", "GitHub"],
    role: "Maintainer, contributed to GECCO 2023 paper",
    links: [
      { label: "Website", url: "https://pyribs.org" },
      { label: "GitHub", url: "https://github.com/icaros-usc/pyribs" },
      { label: "Paper", url: "https://arxiv.org/abs/2303.00191" },
    ]
  },
  {
    title: "DoorDrink",
    description: "Android app for coffee shop discovery and real-time ordering with Firebase backend and routing APIs.",
    tech: ["Java", "Firebase", "Google Maps API"],
    role: "App Developer",
    links: []
  }
];

const presentations = [
  {
    title:
      "dpvis: A Visual and Interactive Learning Tool for Dynamic Programming",
    location: "Theory Lunch @ USC Theory Group",
    date: "Oct. 2024",
    link: "https://davidhaolong.com/slides/theory_lunch_dpvis",
  },
  {
    title: "Density Descent Search for Diversity Optimization",
    location:
      "Genetic and Evolutionary Computation Conference (GECCO) @ Melbourne, Australia",
    date: "Jul. 2024",
    link: "https://davidhaolong.com/slides/dds",
  },
  {
    title:
      "Quality Diversity Optimization: A Modular Framework and Continuous Density Estimation",
    location:
      "Bachelor's Thesis for W.V.T. Rusch Undergraduate Engineering Honors",
    date: "May 2024",
    link: "https://davidhaolong.com/slides/bachelors_thesis",
  },
];

const publications = [
  {
    title:
      "dpvis: A Visual and Interactive Learning Tool for Dynamic Programming",
    authors:
      "<span class='font-bold'>David H. Lee</span>, Aditya Prasad, Ramiro Deo-Campo Vuong, Tianyu Wang, Eric Han, David Kempe",
    publisher: "Technical Symposium on Computer Science Education (SIGCSE TS)",
    date: "Feb. 2025",
    arxiv: "https://arxiv.org/abs/2411.07705",
    slides: "https://davidhaolong.com/slides/theory_lunch_dpvis",
  },
  {
    title: "Density Descent Search for Diversity Optimization",
    authors:
      "<span class='font-bold'>David H. Lee</span>, Anishalakshmi V. Palaparthi, Matthew C. Fontaine, Bryon Tjanaka, Stefanos Nikolaidis",
    publisher: "Genetic and Evolutionary Computation Conference (GECCO)",
    date: "Jul. 2024",
    arxiv: "https://arxiv.org/abs/2312.11331",
    slides: "https://davidhaolong.com/slides/dds",
  },
  {
    title:
      "Training Diverse High-Dimensional Controllers by Scaling Covariance Matrix Adaptation MAP-Annealing",
    authors:
      "Bryon Tjanaka, Matthew C. Fontaine, <span class='font-bold'>David H. Lee</span>, Aniruddha Kalkar, Stefanos Nikolaidis",
    publisher:
      "IEEE Robotics and Automation Letters (RA-L), vol. 8, no. 10, pp. 6771-6778",
    date: "Oct. 2023",
    arxiv: "https://arxiv.org/abs/2210.02622",
    github: "https://github.com/icaros-usc/scaling-cma-mae",
    website: "https://scalingcmamae.github.io/",
  },
  {
    title:
      "pyribs: A Bare-Bones Python Library for Quality Diversity Optimization",
    authors:
      "Bryon Tjanaka, Matthew C. Fontaine, <span class='font-bold'>David H. Lee</span>, Yulun Zhang, Nivedit Reddy Balam, Nathaniel Dennler, Sujay S. Garlanka, Nikitas Dimitri Klapsis, Stefanos Nikolaidis",
    publisher: "Genetic and Evolutionary Computation Conference (GECCO)",
    date: "Jul. 2023",
    arxiv: "https://arxiv.org/abs/2303.00191",
    github: "https://github.com/icaros-usc/pyribs",
    website: "https://pyribs.org/",
  },
  // {
  //   title: "A Uniform Parcel Delivery System Based on IoT",
  //   authors:
  //     "Yuhui Wang, Hongbo Zhu, Zechun Wang, <span class='font-bold'>David H. Lee</span>, Guangyao Li",
  //   publisher: "Advances in Internet of Things, vol. 8, pp. 39-63",
  //   date: "Jan. 2018",
  //   arxiv: "https://doi.org/10.4236/ait.2018.84004",
  // },
];

const manuscripts = [
  {
    title:
      "Quality Diversity Optimization: A Modular Framework and Continuous Density Estimation",
    authors: "<span class='font-bold'>David H. Lee</span>",
    date: "May 2024",
    pdf: "./assets/documents/bachelors_thesis.pdf",
    slides: "https://davidhaolong.com/slides/bachelors_thesis",
  },
  {
    title: "Upgrading CMA-ME to CMA-MAE on the Sphere Benchmark",
    authors:
      "<span class='font-bold'>David H. Lee</span>, Bryon Tjanaka, Nivedit Reddy Balam, Matthew C. Fontaine, Stefanos Nikolaidis",
    date: "Mar. 2023",
    website: "https://docs.pyribs.org/en/stable/tutorials/cma_mae.html",
  },
  {
    title:
      "An Overview of Low-Rank Matrix Completion using Convex Optimization Techniques",
    authors:
      "Ramiro Deo-Campo Vuong, <span class='font-bold'>David H. Lee</span>, Aditya Prasad, Yibo Wen",
    date: "May 2022",
    pdf: "./assets/documents/lrmc.pdf",
    github: "https://github.com/itsdawei/NBA-matrix-completion",
  },
];

const teachings = [
  {
    title: "Introduction to Algorithms and the Theory of Computing",
    role: "CSCI 270 @ USC, Teaching Assistant",
    semesters: {
      "Spring 2024": "https://bytes.usc.edu/cs270/",
    },
  },
  {
    title: "Discrete Methods in Computer Science",
    role: "CSCI 170 @ USC, Teaching Assistant",
    semesters: {
      "Spring 2023": "",
      "Summer 2023": "",
      "Fall 2024": "",
    },
  },
];
