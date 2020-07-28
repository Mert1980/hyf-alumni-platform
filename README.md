# HYF Alumni Platform

> **HYF Alumni Platform** enables companies to screen HYF Alumni for their vacancies, while reducing the administrative burden over HYF coordinators and creating more jobs for skilled refugees & immigrants. 

> App is live on (https://hyf-alumni-platform.herokuapp.com/)

---
## Index
* [Learning Objectives and Supported Skills](#learning-objectives-and-supported-skills)
* [Setup Environment](#setup-environment)
	* [Installation](#installation)
	* [Running Application](#running-application)
	* [Project Structure](#project-structure)
* [Technology-Tool-Stack](#technology-tool-stack)
* [API Documentation](https://github.com/oSoc20/hyf-almuni-backend)
* [Contributing](#contributing)
* [License](#license)

---

## Learning Objectives and Supported Skills
* Creating a user friendly React Application (using Functional/Class Bases Components and Hooks)
* Building wireframes, mocks and prototype of pages
* Setting up a professional folder structure
* Implementing Continuous Integration and Continuous Deployment (CI/CD)
* Using GitHub Project Board as project management tool
* Setting up NodeJS and database connection
* Debugging React code in IDE
* Exploring and understanding DOM

---
## Setup Environment

### installation:

```
git clone https://github.com/oSoc20/hyf-alumni-frontend.git
cd hyf-alumni-frontend
npm install
```
### running-application

```
cd hyf-alumni-frontend
npm run dev
```
### project-structure

 * :file_folder: **hyf-alumni-frontend**
   * :file_folder: **public**
   * :file_folder: **src**
     * :file_folder: **components**
        * :file_folder: [landing](https://github.com/oSoc20/hyf-alumni-frontend/tree/development-master/src/components/landing)
        * :file_folder: [signup](https://github.com/oSoc20/hyf-alumni-frontend/tree/development-master/src/components/signup)
        * :file_folder: [login](https://github.com/oSoc20/hyf-alumni-frontend/tree/development-master/src/components/login)
        * :file_folder: [profile](https://github.com/oSoc20/hyf-alumni-frontend/tree/development-master/src/components/profile)
        * :file_folder: [logout](https://github.com/oSoc20/hyf-alumni-frontend/tree/development-master/src/components/logout)
      * :file_folder: **routers**
  * .gitignore
  * README.md
  * index.js
  * package.json    
   
## Technology-Tool-Stack
It is build by *HTML5, CSS3, Material UI, MongoDB, Express, NodeJS and ReactJS (**MERN Stack***). The tools used in development are described below.
- **NodeJS** : Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server- and client-side scripts. For more info (https://nodejs.org/en/)
- **MongoDB Atlas** : Cloud-hosted MongoDB service on AWS, Azure and Google Cloud. With MongoDB Atlas, your self-healing clusters are made up of geographically distributed database instances to ensure no single point of failure. MongoDB Atlas makes it easy to control access to your database. Your database instances are deployed in a unique Virtual Private Cloud (VPC) to ensure network isolation. For more info (https://www.mongodb.com/cloud/atlas)
- **MongoDB Compass**: The GUI for MongoDB. Visualize, understand, and work with your data through an intuitive GUI. Modify your data with a powerful visual editing tool. Understand performance issues with visual explain plans, view utilization and manage your indices. For more info (https://www.mongodb.com/products/compass)
- **Mongoose** : Provides a straight-forward, schema-based solution to model our application data. It includes built-in type casting, validation, query building. For more info (https://mongoosejs.com/)
- **ExpressJS** : Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs.[3] It has been called the de facto standard server framework for Node.js. For more info (https://expressjs.com/)
- **JWT** : JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. For more info (https://jwt.io/)
- **React** : React. js is an open-source JavaScript library that is used for building user interfaces specifically for single-page applications. It's used for handling the view layer for web and mobile apps. React also allows us to create reusable UI components. For more info (https://reactjs.org/docs/getting-started.html)
- **Axios** : Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API. For more info (https://github.com/axios/axios)
- **Material UI** : Material is an adaptable system of guidelines, components, and tools that support the best practices of user interface design. Backed by open-source code, Material streamlines collaboration between designers and developers, and helps teams quickly build beautiful products. For more info (https://material-ui.com/) (https://material.io/design)

---

## Contributing
   - You can contribute in this project by opening an issue or sending a pull request.
---

## License
   MIT
