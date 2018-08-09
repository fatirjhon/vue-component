<template>

  <div>

    <!-- step address start -->
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
          <img src="../assets/board.png" />
        </span>
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
    <!-- step address end -->

    <!-- contain address start -->
    <div class="container">
      <div class="row">
        <div class="">
          <h5>Address</h5>
        </div>
      </div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="col s2">
            </div>
            <div class="input-field col s4">
              <input placeholder="City" />
            </div>
            <div class="col s6">
            </div>
          </div>
          <div class="row">
            <div class="col s2">
            </div>
            <div class="input-field col s2">
              <input placeholder="Zip Code" />
            </div>
            <div class="col s8">
            </div>
          </div>
          <div class="row">
            <div class="col s2">
            </div>
            <div class="input-field col s7">
              <input placeholder="Complete Address" />
            </div>
            <div class="col s3">
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- contain address end -->

    <!-- button address start -->
    <div class="row rowButton">
      <div class="col s1 left">
        <button class="waves-effect waves-light btn" id="btnCancel" @click="switchComponent('province')">Back</button>
      </div>
      <div class="col s1 right">
        <button class="waves-effect waves-light btn" id="btnNext" @click="switchComponent('profile')">Next</button>
      </div>
    </div>
    <!-- button address end -->

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
  .step #stepThree .dot {
    background: linear-gradient(to right, #c700ff, #ff77b4);
  }

  .step #stepOne span img,
  .step #stepTwo span img {
    margin: 11px 0 0 7px;
  }

  .step span img {
    margin: 7px;
  }

  h5 {
    color: #ff77b4;
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
