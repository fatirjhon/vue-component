<template>

  <div>

    <!-- step profile start -->
    <div class="row step">
      <div class="col s1 circle" id="stepOne">
        <span class="dot"></span>
      </div>
      <div class="col s1 line" id="lineOne">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepTwo">
        <span class="dot"></span>
      </div>
      <div class="col s1 line" id="lineTwo">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepThree">
        <span class="dot"></span>
      </div>
      <div class="col s1 line" id="lineThree">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepFour">
        <span class="dot"></span>
      </div>
      <div class="col s1 line" id="lineFour">
        <span class="bar"></span>
      </div>
      <div class="col s1 circle" id="stepFive">
        <span class="dot"></span>
      </div>
    </div>
    <!-- step profile end -->

    <!-- contain profile start -->
    <div class="container">
      <div class="row">
        <div class="">
          <h5>Upload Profile Picture</h5>
        </div>
      </div>
      <div class="row valign-wrapper">
        <div class="col s1 offset-s5 valign" id="circleProfile">
          <img src="../assets/profile.png" />
        </div>
      </div>
      <div class="row valign-wrapper">
        <div class="col s1 offset-s5 valign">
          <button class="waves-effect waves-light btn uploadBtn">Upload</button>
        </div>
      </div>
    </div>
    <!-- contain profile end -->

    <!-- button profile start -->
    <div class="row rowButton">
      <div class="col s1 left">
        <button class="waves-effect waves-light btn" id="btnCancel" @click="switchComponent('adrs')">Back</button>
      </div>
      <div class="col s1 right">
        <button class="waves-effect waves-light btn right-align" id="btnNext" @click="switchComponent('reslt')">Next</button>
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
  .step #stepFour .dot {
    background: linear-gradient(to right, #c700ff, #ff77b4);
  }

  h5 {
    color: #ff77b4;
  }

  #circleProfile {
    padding: 15px;
    text-align: center;
    width: 175px;
    height: 175px;
    line-height: 200px;
    border-radius: 50%;
    border-style: solid;
    box-shadow: 0px 0px 15px #fc699b;
    color: white;
    background-color: transparent;
  }

  .uploadBtn {
    margin: 5px 32px 20px 32px;
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
