const portfolioData = {
  education: [
    {
      date: "2021 - Present",
      title: "Bachelor of Science in Computer Science",
      organization: "University of Minnesota - Twin Cities • College of Science and Engineering",
      location: "Minneapolis, MN",
      details: [
        "GPA 3.4",
        "Relevant Coursework: Algorithms, Data Structures, Machine Architecture, Operating Systems, Internet Programming, Databases, Discrete Structures, Software Engineering, Artificial Intelligence"
      ]
    }
  ],
  experience: [
    {
      date: "June 2023 - December 2023",
      title: "IT Helpdesk Technician",
      organization: "CSE IT Department • University of Minnesota Twin Cities",
      location: "Minneapolis, MN",
      details: [
        "Managed the assembly, installation, and maintenance of computer lab equipment, ensuring a seamless and intuitive learning environment for students and faculty.",
        "Contributed to sustainability efforts by securely formatting computers using DBAN for recycling, guaranteeing the safe disposal of electronic devices while adhering to university policies.",
        "Demonstrated strong problem-solving skills by resolving a wide range of technical issues for both students and faculty, encompassing hardware, software, and network connectivity problems."
      ]
    },
    {
      date: "June 2021 - August 2021",
      title: "Team Member",
      organization: "Target Corporation • Alexandria",
      location: "Alexandria, MN",
      details: [
        "Handled returns, defective items, backroom and sales floor stocking, and organization to optimize inventory logistics.",
        "Communicated with guests and resolved requests to ensure customer satisfaction on the sales floor, at the customer service desk, and during order pick-up."
      ]
    }
  ],
  skills: [
    {
      title: "Programming Languages",
      description: "Python, Java, C/C++, HTML5/CSS, JavaScript, TypeScript, Assembly, OCaml, SQL"
    },
    {
      title: "Methods",
      description: "Agile Scrum and Waterfall methodologies"
    },
    {
      title: "Software and Tools",
      description: "Visual Studio Code, IntelliJ IDEA, CAD, Docker/Javadocs, Google Maps API, Node.js, PostgreSQL"
    }
  ],
  projects: [
    {
      title: "Election Processor",
      technologies: ["Java", "Javadocs"],
      description: "Written in Java utilizing agile scrum as a development method, the software spans roughly 2500 lines and can process 100,000 ballots in less than a second. This project involved documenting software and design requirements which outlined all product features and constraints. Extensive unit and system testing ensured the system's results are valid.",
      url: null
    },
    {
      title: "log-lib",
      technologies: ["C"],
      description: "A lightweight logger library that saves date/time and message data to a file.",
      url: "https://github.com/lmskarpness/log-lib/tree/main"
    },
    {
      title: "abys-sim",
      technologies: ["Python", "NumPy", "Pygame"],
      description: "A simple gravity simulator written in Python.",
      url: "https://github.com/lmskarpness/abys-sim"
    },
    {
      title: "Stock Visualizer",
      technologies: ["Node.js", "Express.js", "Axios", "Apache ECharts", "Bootstrap 5", "API"],
      description: "Served on a simple Node and Express framework and styled with Bootstrap 5, this tool reads an API key and ticker (or uses demo parameters) and returns an interactive candlestick chart powered by Apache ECharts.",
      url: "https://github.com/lmskarpness/Stock-Visualizer/tree/main"
    }
  ]
};
