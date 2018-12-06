<template>
  <div class="projects">
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="cardBox">
          <div class="ymhPic"></div>
          <div class="ymhText">
            <p>益民惠 / Yiming</p>
            <small>User Research + Product Design</small>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="cardBox">
          <div class="tripPic"></div>
          <div class="tripText">
            <p>Trip Flow ( Concept product )</p>
            <small>Product Design</small>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-sm-12">
        <div class="cardBox">
          <div class="huoliPic"></div>
          <div class="huoliText">
            <p>伙力食 / Huoli</p>
            <small>UX + Interaction Design</small>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-12">
        <div class="cardBox">
          <div class="flightPic"></div>
          <div class="flightText">
            <p>航班管家 / Flight Butler</p>
            <small>UX + Interaction Design</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus">
.cardBox {
  box-shadow: -2px 20px 30px -10px rgba(169, 168, 170, 0.27);
  border-radius: 10px;
  margin-bottom: 3.75rem;
}

.cardBox div p {
  margin: 0;
}

.ymhPic,
.tripPic,
.huoliPic,
.flightPic {
  width: 100%;
  height: 15.625rem;
  box-shadow: -2px 20px 30px -10px rgba(169, 168, 170, 0.27);
  border-radius: 10px 10px 0 0;
}

.ymhPic {
  background: #C4EBDC url('../assets/icon-noolde.png') center/20% no-repeat;
}

.tripPic {
  background: #F9FEBF url('../assets/icon-HotAirBalloon.png') center/10% no-repeat;
}

.huoliPic {
  background: #FFDED6 url('../assets/icon-party.png') center/30% no-repeat;
}

.flightPic {
  background: #BFF0FE url('../assets/icon-airplan.png') center/20% no-repeat;
}

.ymhText,
.tripText,
.huoliText,
.flightText {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 5px;
  height: 4.75rem;
}
</style>
