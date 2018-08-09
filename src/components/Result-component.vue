<template>

  <div>

    <!-- step profile start -->
    <div class="row step">
      <div class="col s1 circle" id="stepOne">
        <span class="dot">
          <img src="../assets/done.png" />
        </span>
      </div>
      <div class="col s1 line" id="lineOne">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepTwo">
        <span class="dot">
          <img src="../assets/done.png" />
        </span>
      </div>
      <div class="col s1 line" id="lineTwo">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepThree">
        <span class="dot">
          <img src="../assets/done.png" />
        </span>
      </div>
      <div class="col s1 line" id="lineThree">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepFour">
        <span class="dot">
          <img src="../assets/done.png" />
        </span>
      </div>
      <div class="col s1 line" id="lineFour">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepFive">
        <span class="dot">
          <img src="../assets/done.png" />
        </span>
      </div>
    </div>
    <!-- step profile end -->

    <!-- contain profile start -->
    <div class="container">
      <div class="row valign-wrapper">
        <div class="col s1 offset-s4 valign key">
          <img src="../assets/key.png" />
        </div>
      </div>
      <div class="row valign-wrapper">
        <div class="col s5 offset-s4 valign key">
          <h5>Congratulations!</h5>
          <p>We have send you email to verification you account!</p>
        </div>
      </div>
    </div>
    <!-- contain profile end -->

    <!-- button profile start -->
    <div class="row rowButton">
      <div class="col s1 left">
        <button class="waves-effect waves-light btn" id="btnCancel" @click="switchComponent('profile')">Back</button>
      </div>
      <div class="col s1 right">
        <button class="waves-effect waves-light btn" id="btnNext">Finish</button>
      </div>
    </div>
    <!-- button profile end -->

  </div>

</template>

<script>
  import { vueTest } from '../main.js';

  export default {
    methods: {
        switchComponent(comp) {
            vueTest.$emit('switchComp', comp);
        }
    },

  }
</script>

<style scoped>
  .step {
    margin: 50px 75px 25px;
    margin-left: 125px;
  }

  .step #lineOne,
  .step #lineTwo,
  .step #lineThree,
  .step #lineFour {
    margin: 23px -42px;
  }

  .step #stepOne {
    margin: 8px -6px 0 0px;
  }

  .step #stepTwo,
  .step #stepThree,
  .step #stepFour,
  .step #stepFive {
    margin: 8px -6px 0 148px;
  }

  .dot {
    height: 50px;
    width: 50px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
  }

  .bar {
    height: 11px;
    width: 210px;
    background-color: #bbb;
    display: inline-block;
  }

  .step #stepOne .dot,
  .step #lineOne .bar,
  .step #stepTwo .dot,
  .step #lineTwo .bar,
  .step #stepThree .dot,
  .step #lineThree .bar,
  .step #stepFour .dot,
  .step #lineFour .bar,
  .step #stepFive .dot {
    background: linear-gradient(to right, #c700ff, #ff77b4);
  }

  .step span img {
    margin: 11px 0 0 7px;
  }

  .key {
    margin: 15px 0 0 0;
  }

  h5 {
    color: #ff77b4;
    margin: -25px 0px 0px 60px;
  }

  p {
    margin: 5px 0 0 -18px;
  }

  .rowButton {
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  #btnCancel {
    left: 200px;
  }

  #btnNext {
    right: 200px;
  }
</style>
