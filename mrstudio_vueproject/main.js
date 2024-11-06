/*creating the vue app and building variable instances for functions the website properties or elements and components*/
const app = Vue.createApp({     
  data() {
    return {
      brandName: 'M/R Studio',
      slogan: 'Adverse, Bold, Creative',
      image: 'images/band.jpg',
      image1: 'images/band2.jpg',
      image2: 'images/makeup.jpg',
      image3: 'images/artshow.jpg',
      image4: 'images/profile.jpg',
      image5: 'images/white.jpg',
      social: 'Follow us: Facebook, Instagram.',
      heading: 'Welcome to My Website',
      subheading: 'Please have a look around',
      sub: 'Lets build your journey together - scroll down',
      sub1: 'Photography',
      sub2: 'Make up',
      sub3: 'Artevents',
      sub4: 'Klara.Project',
      sub5: 'Get.In.Touch',
      sub6: 'Marja.Reich',
      email: 'hello@m/rstudio.co.nz',
      details: '11 Oderings Place, Hamilton, NZ',
      phone: '0222177859',
      contactMessage: 'Contact',
      url: 'https://www.m/rstudio.co.nz/',
      projectMessage: 'Recent Projects',
      serviceMessage: 'Services',
      message1: 'Feel free to ask me for information about projects, prices and collaborations',
      message: 'M/R Studio is a diverse, small size creative studio for photography and make up artistry practices founded in NZ by Marja Reich in 2019. Her vision is to have creative direction to projects understanding contemporary aesthetics',
      about: 'About',
      message3: 'edit me'
    }
  }   
})


//Mount App
const mountedApp = app.mount('#app')