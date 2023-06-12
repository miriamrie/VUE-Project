# Website-VUEproject 
Hey! This is for my website-project using the VUE-Framework and a responsive design.

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>M/R Studio</title>
    <!-- Import Styles -->
    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
    <!--start of vue app everything has to be written in this app to be able to be seen in the website output-->
    <div id="app">
        <header class="header"><!--start of the menu navigation in the website-->
          <nav class="navbar">
            <div class="container">
              <a class="navbar-brand" href="index.html"><img src="images/logo.png"></a>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="router-link" href="index.html">Home</a>
                </li>
              <li class="nav-item">
                  <a class="router-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                  <a class="router-link" href="projects.html">Projects</a>
                </li>
                <li class="nav-item">
                  <a class="router-link" href="services.html">Services</a>
                </li>
                <li class="nav-item">
                  <a class="router-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
            <h1>{{brandName}}</h1>
            <p>{{slogan}}</p> <!-- will reactively receive any updates to slogan -->
        </header>
        <!--image displayed on homepage-->
      <div class="display">
        <div class="container">
          <div class="image">
            <img :src="image">
            <a class="router-link" href="contact.html">{{sub5}}</a>
          </div>
        </div>
      </div> 
      <!--some introduction on the homepage-->
      <div id="info">
        <h2>{{heading}}</h2>
        <h3>{{subheading}}</h3>
      </div>
      
      
      <!--copyright and other things related we wnt for the footer to be placed and be reused on other pages throughout the website-->
      <footer class="footer">
        <p>{{social}}</p>
        <a class="router-link" href="index.html">Made by M/R Studio</a> 
        <div class="container">
          <i>@ 2023 All Rights Reserved.</i>
        </div>
      </footer>
    </div>

    
    <!-- Import Components -->
    <script src="./components/ReviewForm.js"></script>
    <script src="./components/ReviewList.js"></script>
    
    <!-- Import Vue.js/Link CDN to vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@3.3.4/dist/vue.global.min.js"></script>
    <script src="https://unpkg.com/vue-router/dist/vue-router.js"></script> 
      
    <!-- Import App/Link to main.js -->
    <script src="./main.js"></script> 
  </body>
</html>
