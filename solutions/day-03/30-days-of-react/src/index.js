import React from "react";
import ReactDOM from "react-dom";
import reactGIF from "./images/react_logo.gif"
import New from "./New";

const welcome = 'Welcome to 30 Days Of React Challenge'
      const title = 'Getting Started React'
      const subtitle = 'JavaScript Library'
      const author = {
        firstName: 'Asabeneh',
        lastName: 'Yetayeh',
      }
const date = 'Oct 2, 2020'

const copyRight = "Copyright 2020";
const techs = ["HTML", "CSS", "JavaScript"];
const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);

const header = (
  <header>
    <div className="header-wrapper">
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>Instructor: {author.firstName} {author.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
);

const user = (
  <div>
    <img src={reactGIF} alt='react logo gif' style={{width: "450px"}}/>
  </div>
)

const main = (
  <main>
    <div className="main-wrapper">
      {user}
      <p>
        Prerequisite to get started{" "}
        <strong>
          <em>react.js</em>
        </strong>
        :
      </p>
      <ul>{techsFormatted}</ul>
      <New />
    </div>
  </main>
);

const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
);

const app = (
  <div className="app">
    {header}
    {main}
    {footer}
  </div>
);

const root = document.getElementById("root");

ReactDOM.render(app, root);
