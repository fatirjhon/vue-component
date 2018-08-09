<template>

  <div>

    <!-- step information start -->
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
    <!-- step information end -->

    <!-- contain information start -->
    <div class="container">
      <div class="row">
        <div class="">
          <h5>General Information</h5>
        </div>
      </div>
      <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="col s2">
            </div>
            <div class="input-field col s4">
              <input placeholder="First Name" />
            </div>
            <div class="input-field col s4">
              <input placeholder="Last Name" />
            </div>
            <div class="col s2">
            </div>
          </div>
          <div class="row">
            <div class="col s2">
            </div>
            <div class="input-field col s4">
              <input placeholder="Phone Number" />
            </div>
            <div class="col s6">
            </div>
          </div>
          <div class="row">
            <div class="col s2">
            </div>
            <div class="input-field col s4">
              <input placeholder="Email" />
            </div>
            <div class="col s6">
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- contain information end -->

    <!-- button information start -->
    <div class="row rowButton">
      <div class="col s1 left">
        <button class="waves-effect waves-light btn" id="btnCancel">Cancel</button>
      </div>
      <div class="col s1 right">
        <button class="waves-effect waves-light btn" id="btnNext" @click="switchComponent('province')">Next </button>
      </div>
    </div>
    <!-- button information end -->

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

  .step #stepOne .dot {
    background: linear-gradient(to right, #c700ff, #ff77b4);
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
