const ProjectList = {

  "portfolio": {
    title: "Portfolio",
    date: "December 2016 - May 2020",
    desc: "My personal portfolio website created to showcase my projects and skills. First created in 2016 as a simple static HTML and CSS website, the site has experienced multiple revisions using newly learnt technologies such as: PHP, Bootstrap, Materialize and jQuery. The site has recently been rebuilt and updated with React and Material UI to replace its PHP predecessor.",
    image: "/img/portfolio3.jpg",
    alt: "Portfolio project page",
    link: "/projects/portfolio",
    github: "https://github.com/KyleGough/portfolio-react",
    chips: ["React", "JavaScript", "Material UI", "HTML", "CSS", "Node"],
    chipsOld: ["PHP", "Sass", "Bootstrap", "Materialize"],
    categories: ["Web"]
  },

  "lucidlab": {
    title: "LucidLab",
    subtitle: "CS407: Group Project",
    date: "October 2019 - May 2020",
    desc: "An adaptable, heterogeneous IoT testbed for which I developed the front-end user interface. The UI allows registered users to upload and configure tests and images to be deployed on the testbed. Additionally, test results and custom metrics including mote availability graphs and mote CCA charts can be viewed.",
    image: "/img/lucidlab1.jpg",
    alt: "LucidLab",
    link: "/projects/lucidlab",
    chips: ["React", "JavaScript", "Material UI", "HTML", "CSS"],
    chipsOther: ["Python", "Shell", "C", "SQL"],
    categories: ["Web", "Group Projects"]
  },

  "sudoku": {
    title: "Logical Sudoku Solver",
    date: "November 2019 - January 2020",
    desc: "CLI logical Sudoku solver that can solve expert level 9x9 Sudoku using only logical techniques and reasoning (in other words no brute forcing, guessing or backtracking). The program outputs a detailed description of the techniques and moves required at each step to solve unique solution Sudoku. The solver reads csv files where each puzzle can be separated by newline characters to allow batch solving. After processing all Sudoku in a given file, in-depth analysis is displayed including but not limited to: difficulty rating, occurrences of each technique, probability of each technique, processing time for each technique and total processing time.",
    image: "/img/sudoku1.jpg",
    alt: "Sudoku",
    link: "/projects/sudoku",
    github: "https://github.com/KyleGough/sudoku",
    chips: ["Python"],
    categories: ["CLI", "Games/Puzzles"]
  },

  "react-minesweeper": {
    title: "React Minesweeper",
    date: "October 2019",
    desc: "First app using React. A simple clone of classic Minesweeper with an 18x18 board. Left click reveals tiles and right click flags tiles. Number of total mines and flagged tiles are shown.",
    image: "/img/react-minesweeper1.jpg",
    alt: "React Minesweeper",
    link: "/projects/react-minesweeper",
    github: "https://github.com/KyleGough/react-minesweeper",
    chips: ["React", "JavaScript", "CSS", "Material UI"],
    categories: ["Web", "Games/Puzzles"]
  },

  "qurve": {
    title: "QuRVe",
    subtitle: "Bank of America Internship Project",
    date: "June 2019 - August 2019",
    desc: "Designed and created an updated UI for the application QuRVe, a credit tech tool using JavaScript, Webix, React and Less. Implemented an interface to retrieve financial instruments data with a configurable dashboard showing graphs, pivot tables and descriptions of selected securities.",
    link: "/projects/qurve",
    chips: ["React", "JavaScript", "Webix", "Less", "CSS"],
    categories: ["Web"]
  },

  "cave-exploration": {
    title: "Using Swarm AI to Map a Cave Network",
    subtitle: "CS310: Dissertation",
    date: "December 2018 - April 2019",
    desc: "Cave exploration is dangerous and time-consuming. This project demonstrates how swarm AI could be used in a group of autonomous flying drones to navigate and explore a cave as efficiently as possible. The project also includes realistic cave environment generation.",
    image: "/img/cave-exploration1.jpg",
    alt: "Cave Exploration",
    link: "/projects/cave-exploration",
    github: "https://github.com/KyleGough/CS310-Dissertation",
    chips: ["C++", "OpenGL"]
  },

  "roller-coaster": {
    title: "Roller Coaster",
    subtitle: "CS324: Computer Graphics",
    date: "December 2018 - January 2019",
    desc: "A simulation of a 3-car roller coaster which traverses a small track featuring a lift hill, drop, loop-the-loop and turns. The coaster can be viewed from a first-person perspective in each of the carts, as well as additional views that follow the carts round the track.",
    image: "/img/roller-coaster1.jpg",
    alt: "Roller Coaster",
    link: "/projects/roller-coaster",
    chips: ["C++", "OpenGL"]
  },

  "rscbot": {
    title: "RSCBot",
    subtitle: "CS261: Software Engineering Group Project",
    date: "February 2018 - March 2019",
    desc: "A specialised, personalisable Trader ChatBot that can fetch data and current news on stocks and sectors from the FTSE 100 index. Our ChatBot communicates with the user in a natural way, and has been designed to identify and adapt to the user’s main interests in the stock market, making for a more personal trading experience.",
    image: "/img/rscbot1.jpg",
    alt: "RSCBot",
    link: "/projects/rscbot",
    chips: ["JavaScript", "jQuery", "HTML", "CSS", "Materialize"],
    chipsOther: ["PHP", "SQL"],
    categories: ["Web", "Group Projects"]
  },

  "url-shortener": {
    title: "URL Shortener",
    date: "April 2017",
    desc: "A URL shortening tool creating using Node.js, Express.js for routing GET and POST requests and MongoDB to store URLs. The project is my first using all three of these technologies. Long URLs are stored in the database and the ID is encoded and used as the short URL.",
    image: "/img/url-shortener1.jpg",
    alt: "URL Shortener",
    link: "/projects/url-shortener",
    chips: ["JavaScript", "Node", "MongoDB", "jQuery", "HTML", "CSS", "Materialize"],
    categories: ["Web"]
  },

  "graph-algorithm-visualiser": {
    title: "Graph Algorithm Visualiser",
    date: "April 2017",
    desc: "A visualiser which displays the process of graph algorithms on complete graphs such as: Prim's, Kruskal's, Graham Scan, Nearest Neighbour and 2-Opt. The project was primarily a learning tool to help me improve my ability using JavaScript and better understand graph algorithms.",
    image: "/img/graph-algorithm-visualiser1.jpg",
    alt: "Graph Algorithm Visualiser",
    link: "/projects/graph-algorithm-visualiser",
    github: "https://github.com/KyleGough/graph-algorithm-visualiser",
    chips: ["JavaScript"],
    categories: ["Web"]
  },

  "cavern-minesweeper": {
    title: "Cavern Minesweeper",
    date: "March 2017",
    desc: "The project served as a tool for teaching me Ruby. It is my first Ruby program. Cavern Minesweeper is based off of Minesweeper but with tiered ores (mines) which can only be mined if the player has levelled up enough. The player can level up by mining ores of lower or the same tier as the player.",
    image: "/img/cavern-minesweeper1.jpg",
    alt: "Cavern Minesweeper",
    link: "/projects/cavern-minesweeper",
    github: "https://github.com/KyleGough/cavern-minesweeper",
    chips: ["Ruby"],
    categories: ["Games/Puzzles"]
  },

  "bsplit": {
    title: "BSplit",
    subtitle: "CS139: Web Development Technologies Coursework",
    date: "February 2017 - March 2017",
    desc: "BSplit is a web application that allows registered users to create and settle payments between parties. The app's dashboard utilises AJAX requests to prevent web page reloading to enchance user experience. Dashboard and Email notifications are sent when a new bill or group is created.",
    image: "/img/bsplit1.jpg",
    alt: "BSplit",
    link: "/projects/bsplit",
    chips: ["PHP", "JavaScript", "jQuery", "SQL", "HTML", "CSS", "Bootstrap"],
    categories: ["Web"]
  },

  "todo-list": {
    title: "To Do List",
    subtitle: "CS139: Web Development Technologies Lab Work",
    date: "January 2017 - February 2017",
    desc: "Created a To Do List Web application where users can signup and create their own lists. Learned and integrated PHP and SQL to store and query user's lists. Protected the application from SQL injection and Cross-Site scripting.",
    image: "/img/todo-list1.jpg",
    alt: "To Do List",
    link: "/projects/todo-list",
    chips: ["PHP", "JavaScript", "jQuery", "SQL", "HTML", "CSS"],
    categories: ["Web"]
  },

  "delivery-route-planner": {
    title: "Delivery Route Planner",
    subtitle: "A-Level Computing Coursework",
    date: "December 2015 - March 2016",
    desc: "Created software in C# which creates an efficient route between multiple delivery locations. Used SQL to store and query data on products, clients and their deliveries. Produced a report which communicates the route, all items in the deliveries and the estimated time. Used graph algorithms such as Dijkstra's &amp; Nearest Neighbour with 2-Opt to optimise the route.",
    image: "/img/delivery-route-planner1.jpg",
    alt: "Delivery Route Planner",
    link: "/projects/delivery-route-planner",
    chips: ["C#", "SQL"]
  },

  "sorting-algorithm-visualiser": {
    title: "Sorting Algorithm Visualiser",
    date: "September 2015 - November 2015",
    desc: "Tool for visualising the sorting process on a generated dataset. Highlights swapping and sorted elements in real-time. Supports 20 different sorting algorithms including: Bubble, Mergesort and Quicksort. The visualiser is fully customisable with options to change the dataset size, range of values in the dataset and delay between each operation. The tool also has the ability to compare and visualise two sorting algorithms concurrently. The initial dataset can be one of 18 configurations such as: random, normally distributed or sawtooth.",
    image: "/img/sorting-algorithm-visualiser1.jpg",
    alt: "Sorting Algorithm Visualiser",
    link: "/projects/sorting-algorithm-visualiser",
    chips: ["C#"]
  }
};

export default ProjectList;

