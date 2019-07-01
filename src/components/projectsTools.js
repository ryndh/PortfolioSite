import movieImg from "../../static/assets/movie.png";
import dinerImg from "../../static/assets/diner.png";
import madlibsImg from "../../static/assets/mad.png";
import calcImg from "../../static/assets/calc.png";
import reactImg from "../../static/assets/react.png";
import pythonImg from "../../static/assets/python.png";
import sassImg from "../../static/assets/sass.png";
import htmlImg from "../../static/assets/html.png";
import jsImg from "../../static/assets/js.png";
import gitImg from "../../static/assets/git.png";

export const portfolioObj = {
  projects: [
    {
      title: "Movie Micro Service",
      url: "https://moviereactdb.herokuapp.com/",
      description: "React/Python project with a PostgreSQL database",
      classname: "project-movie",
      image: movieImg
    },

    {
      title: "Diner",
      url: "https://reactdiner.herokuapp.com",
      description: "Diner with shopping cart and checkout functionality",
      classname: "project-diner",
      image: dinerImg
    },
    {
      title: "Mad Libs",
      url: "https://reactmadlibs.herokuapp.com/",
      description: "React app with multiple madlibs that can be cycled through",
      classname: "project-mad",
      image: madlibsImg
    },

    {
      title: "Calculator",
      url: "https://basic-react-calculator.herokuapp.com/",
      description:
        "Calculator with basic functionality, gradient that changes based on value",
      classname: "project-calc",
      image: calcImg
    }
  ],
  tools: [
    {
      title: "React",
      icon: "../../static/assets/react.png",
      class: "react",
      image: reactImg
    },
    {
      title: "Python",
      icon: "../../static/assets/python.png",
      class: "python",
      image: pythonImg
    },
    {
      title: "SCSS/CSS",
      icon: "../../static/assets/sass.png",
      class: "scss",
      image: sassImg
    },
    {
      title: "HTML5",
      icon: "../../static/assets/html.png",
      class: "html",
      image: htmlImg
    },
    {
      title: "Git",
      icon: "../../static/assets/git.png",
      class: "git",
      image: gitImg
    },
    {
      title: "Javascript",
      icon: "../../static/assets/js.png",
      class: "js",
      image: jsImg
    }
  ]
};
