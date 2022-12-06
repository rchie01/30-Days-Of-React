// Exercises

// Exercises: What is React?
// What is React?
// - React is a JavaScript library for building reusable user interfaces.
// What is a library?
// - libraries are collections pre-written code that are imported and downloaded.
// What is a single page application?
// - A single page application is a web application that dynamically rewrites current web page data with new data.
// What is a component?
// - A component is an independent and reusable body of code.
// What is the latest version of React?
// - As of 2022/12/06, the latest version of React is 18.2.0.
// What is DOM?
// - Document Object Model (DOM) defines the logical structure of a website's document and how it may be accessed and manipulated.
// What is React Virtual DOM?
// - React Virtual DOM allows changes and updates to specific elements that need changing without having to direct interact with the DOM.
// What does a web application or a website(composed of) have?
// - A web application or a website is composed of HTML, CSS, and JavaScript elements that make up the structure, styling, and user interaction.

// Exercises: Why React?
// Why did you chose to use react?
// - React is one of the two most popular JavaScript libraries that is used by many companies which opens more oppoertunities.
// What measures do you use to know popularity?
// - GitHub stars, forks, watchers, and other relevant statistic that can justify one's popularity.
// What is more popular, React or Vue?
// - As of now, Vue is more popular in terms of its statistics (forks, watches, stars).

// Exercises: JSX
// What is an HTML element?
// - An HTML element defines a web application's structure (main, header, body, footer).
// How to write a self closing HTML element?
// - A self-closing HTML element can be written by adding a back slash before ending the tag.
// - ex: "<img />"
// What is an HTML attribute? Write some of them
// - An HTML attribute provides additional information and definition for an HTML element.
// - ex: "<p style="color:red;">This is a test paragraph</p>"
// What is JSX?
// - JSX allows the user to write HTML elements with JS code.
// What is babel?
// - Babel helps transpile JSX to JavaScript for the browser to read.
// What is a transpiler?
// - A transpiler translates one programming language to another.

// Exercises: JSX Elements
// What is a JSX element?
// - A JSX element consistes of HTML elements with JS code.
// Write your name in a JSX element and store it in a name variable
// - const name = (
//      <p>Archie Yves M. Lim</p>
//   )
// Write a JSX element which displays your full name, country, title, gender, email, phone number. Use h1 for the name and p for the rest of the information and store it in a user variable
// - const user = (
//      <h1>Full Name: Archie Yves M. Lim</h1>
//      <p>Country: Philippines</p>
//      <p>Jr. Front End Developer</p>
//      <p>Gender: Male</p>
//      <p>Email Address: rchie01@gmail.com</p>
//      <p>Phone Number: 09360264842</p>
//  )
// Write a footer JSX element
// - const footer = (
//     <footer>
//       <div className='footer'>
//         <p>Copyright 2022</p>
//       </div>
//     </footer>
// )

// Exercises: Inline Style
// Create a style object for the main JSX
// - const mainStyles = {{ border: '1px solid black', color: 'red' }}
// Create a style object for the footer and app JSX
// - const appStyles = {{ backgroundColor: '#61dbfb', margin: '5px' }}
// - const footerStyles = {{ padding: '20px', border: '2px solid tomato' }}>
// Add more styles to the JSX elements
// - const header1Styles = {{ border: '1px solid tomato', color: 'grey', fontSize: '20px' }}
// - const header2Styles = {{ color: 'black', backgroundColor: "tomato"}}

// Exercises: Internal Styles
// Apply different styles to your JSX elements
// - const headerStyles = {
//     backgroundColor: 'tomato',
//     fontFamily: 'Times New Roman',
//     padding: 10
//   }
//
//   const header = (
//     <header style={headerStyles}>
//       <div className='header-wrapper'>
//         <h1>Welcome to 30 Days Of React</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScript Library</h3>
//         <p>Asabeneh Yetayeh</p>
//         <small>Oct 2, 2020</small>
//       </div>
//     </header>
//   )

// Exercise: Inject data to JSX
// - const user = {
//     firstName: 'Archie',
//     lastName: 'Lim'
//   }
//   const header = (
//     <h1>Welcome, {user.firstName} {user.lastName}!</h1>
//   )
//
// Practice how to make JSX element and injecting dynamic data(string, number, boolean, array, object)
//-  
// const greeting = "Welcome to 30 Days of React!"; //String
// const currentYear = 2022; // Number
// const isEmployed = true; // Boolean
// const tech = ["HTML", "CSS", "JavaScript", "React"]; // Array
// const techStack = tech.map((tech) => {
//   <li key={tech}>{tech}</li>;
// });
// const userDetails = {
//   fname: "Archie",
//   lname: "Lim",
// }; // Object
// const user = (
//   <main>
//     <h1>{greeting}</h1>
//     <h2>Year: {currentYear}</h2>
//     <h3>Name: {userDetails.fname} {userDetails.lname}</h3>
//     <ul>
//         {techStack}
//     </ul>
//     <p>Employed: {isEmployed}</p>
//   </main>
// );
