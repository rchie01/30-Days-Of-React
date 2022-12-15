// index.js
import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from "./images/asabeneh.jpg";
import htmlImage from "./images/html_logo.png";
import cssImage from "./images/css_logo.png";
import jsImage from "./images/js_logo.png";
import reactImage from "./images/react_logo.png";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => {
  const bgColor = hexaColor();
  const styles = {
    height: "100px",
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
    fontFamily: "Montserrat",
    margin: "2px auto",
    borderRadius: "5px",
    width: "75%",
    border: "2px solid black",
    color: "white",
    backgroundColor: `${bgColor}`,
  };
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  );
};

// Header Component
const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days Of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <p>Asabeneh Yetayeh</p>
      <small>Oct 3, 2020</small>
    </div>
  </header>
);

// User Card Component
const UserCard = () => {
  const details = {
    name: "Asabeneh Yetayeh",
    position: "Senior Developer",
    country: "Finland"
  }

  return (
    <div className="user-card">
      <img src={asabenehImage} alt="asabeneh image" />
      <h2>{details.name}</h2>
      <p>{details.position}, {details.country}</p>
      <h3>Skills</h3>
      <ul>
        <TechList />
      </ul>
    </div>
  );
};

// TechList Component
const TechList = () => {
  const techs = ["HTML", "CSS", "JS", "React", "Redux", "Node", "MongoDB", "Python", "Flask", "Django", "NumPy"];
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techsFormatted;
};
const buttonStyles = {
  padding: "10px 20px",
  background: "rgb(0, 255, 0)",
  border: "none",
  borderRadius: 5,
};

const Button = () => <button style={buttonStyles}> action </button>;

const imageStyles = {
  width: "150px",
  margin: "30px",
};

const divStyle = {
  margin: "50px auto",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#eeeeee",
};

const Technologies = () => {
  const images = [htmlImage, cssImage, jsImage, reactImage];
  const imgFormat = images.map((item) => {
    return <img key={item} src={item} alt={item} style={imageStyles} />;
  });

  return (
    <div style={divStyle}>
      <h3>Front End Technologies</h3>
      <div>{imgFormat}</div>
    </div>
  );
};

const subStyles = {
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E1F5FE",
  padding: "40px",
  borderRadius: "10px",
  width: "900px",
};

const inputContainerStyles = {
  display: "flex",
};

const inputStyles = {
  width: "170px",
  border: "none",
  borderRadius: "5px",
  padding: "10px",
  margin: "30px 10px 0px 10px",
};

const subBtnStyles = {
  color: "white",
  backgroundColor: "tomato",
  width: "200px",
  border: "none",
  borderRadius: "8px",
  padding: "10px",
  marginTop: "25px",
};

const SubscribeButton = () => <button style={subBtnStyles}>Subscribe</button>;

const SubscribeSection = () => {
  return (
    <div style={subStyles}>
      <h3>SUBSCRIBE</h3>
      <p>Sign up with your email address to receive news and updates</p>
      <div style={inputContainerStyles}>
        <input style={inputStyles} type="text" placeholder="First name" />
        <input style={inputStyles} type="text" placeholder="Last name" />
        <input style={inputStyles} type="text" placeholder="Email" />
      </div>
      <SubscribeButton />
    </div>
  );
};

// Main Component
const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <div>
        {/* Generate two different hexa colors every time */}
        <HexaColor />
        <HexaColor />
      </div>
      <div>
        <Technologies />
      </div>
      <div>
        <SubscribeSection />
      </div>
      <div>
        <UserCard />
      </div>
    </div>
  </main>
);

// Footer Component
const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
const App = () => (
  <div className="app">
    <Header />
    <Main />
    {/* <Footer /> */}
  </div>
);

const rootElement = document.getElementById("root");
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement);
