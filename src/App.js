import React from "react";

const App = () => {
  const row1 = [
    { name: "Name 1", photo: require("../src/images/yash.jpg") },
    { name: "Name 2", photo: require("../src/images/yash.jpg") },
    { name: "Name 3", photo: require("../src/images/yash.jpg") },
    { name: "Name 4", photo: require("../src/images/yash.jpg") },
  ];

  const row2 = [
    { name: "Name 5", photo: require("../src/images/yash.jpg") },
    { name: "Name 6", photo: require("../src/images/yash.jpg") },
    { name: "Name 7", photo: require("../src/images/yash.jpg") },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>About Our Site</h1>

      <p className="site-description">
        Build a web application that aggregates news articles from different
        sources. Implementation: Utilize news APIs to fetch and display news
        articles. Use HTML, CSS, and JavaScript to create a user-friendly
        interface. The goal of this project is to build a web application that
        aggregates news articles from different sources. The application will
        utilize news APIs to fetch and display news articles to the users. The
        user interface will be created using HTML, CSS, and JavaScript to
        provide a user-friendly experience.
      </p>
      <h1 style={{ marginBottom: "10px" }}>Team Members</h1>
      
      <div className="team-container">
        {row1.map((item, index) => (
          <div key={index} className="team-member">
            <img
              src={item.photo}
              alt="Team Member"
              className="team-photo"
            />
            <p className="font-style">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="team-container" >
        {row2.map((item, index) => (
          <div key={index} className="team-member">
            <img
              src={item.photo}
              alt="Team Member"
              className="team-photo"
            />
            <p className="font-style">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

