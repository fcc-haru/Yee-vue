<template>
  <div id="app" class="container">
    <div class="header row">
          <div class="col-md-3 col-sm-12" style="text-align:center">
            <img src="./assets/icon-noolde.png" id="yeePic">
          </div>
          <div class="col-12 d-block d-md-none" style="text-align:center;margin-top:10px">
            <h4 class="fontArial">Hello! I’m <span id="yee">Yee</span>, a UX/UI designer.</h4>
          </div>
          <div class="col-md-6 d-none d-md-block">
            <h4 class="fontArial">Hello! I’m <span id="yee">Yee</span>, a UX/UI designer.</h4>
            <p class="text-secondary fontHelvetica">I'm a UX Designer passionate about transforming complex problems into meaningful and effortless solutions. Having worked with both startups and enterprises, I'm skilled at practicing agile, connecting different stakeholders and thinking about both user and business values. On weekends, you will find me walking around with my camera to capture the beauty of life or sketching what I see. </p>
          </div>
          <div class="col-md-3 d-none d-md-block fontArial contactBox">
            <p class="text-secondary contact">CONTACT ME</p>
            <p class="text-muted mail"><span class="mailIcon"></span>yeewan912@gmail.com</p>
            <p class="text-muted"><span class="phoneIcon"></span>(+64) 0211068631</p>
            <p class="text-muted"><span class="wechatIcon"></span>wanyi0912</p>
            <div class="iconBox">
              <img src="./assets/dribble-black-2x.png" alt="">
              <img src="./assets/ins-black-2x.png" alt="">
              <img src="./assets/youtube-black-2x.png" alt="">
            </div>
          </div>
    </div>
    <div id="nav">
      <router-link to="/projects">PROJECTS</router-link>
      <router-link to="/illustrations">ILLUSTRATIONS</router-link>
      <router-link to="/photography">PHOTOGRAPHY</router-link>
      <router-link to="/resume">RESUME</router-link>
    </div>
    <router-view/>
    <div class="col-12 d-block d-md-none fontArial">
      <p class="text-secondary contact">CONTACT ME</p>
      <p class="text-muted mail"><span class="mailIcon"></span>yeewan912@gmail.com</p>
      <p class="text-muted"><span class="phoneIcon"></span>(+64) 0211068631</p>
      <p class="text-muted"><span class="wechatIcon"></span>wanyi0912</p>
      <div class="flex-row iconBox">
        <img src="./assets/dribble-black-2x.png" alt="">
              <img src="./assets/ins-black-2x.png" alt="">
              <img src="./assets/youtube-black-2x.png" alt="">
      </div>
    </div>
    <div class="footer">
      <small>Design &amp; code by Yi Wan © 2018 ❤️Last update: December 10th, 2018 @ Christchurch,New Zealand</small>
    </div>
  </div>
</template>
<style lang="stylus">
#app{
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
}

#nav{
  padding 30px
}
  
#yeePic{
    width:10rem;
    height:10rem;
}

.fontArial{
    font-family: Arial!important;
}

.fontHelvetica{
    font-family: Helvetica!important;
}

#yee{
    color:#EF5D58;
}

.contactBox{
  text-align:left;
}

.mail{
    white-space: nowrap;
}

.mailIcon,.phoneIcon,.wechatIcon{
    display: inline-block;
    width: 1.0rem;
    height: 1.0rem;
    vertical-align: middle;
    padding: 2px 6px 2px 0;
}
.mailIcon{
    background: url("./assets/email-3x.png") no-repeat;
    background-origin: content-box;
    background-size:100% 100%; 
}
.phoneIcon{
    background: url("./assets/telphone-3x.png") no-repeat;
    background-origin: content-box;
    background-size:100% 100%; 
}
.wechatIcon{
    background: url("./assets/wechat-3x.png") no-repeat;
    background-origin: content-box;
    background-size:100% 100%; 
}

.iconBox img{
    width: 1.1rem;
    height: 1.1rem;
    padding-right:1.3rem;
}
</style>
