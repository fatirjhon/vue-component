<template>

  <div>

    <!-- step province start -->
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
    <!-- step province end -->

    <!-- contain province start -->
    <div class="container">
      <div class="row">
        <div class="">
          <h5>Province</h5>
        </div>
      </div>
      <div class="row">
        <div class="paginate">
          <pagination-page :settings="settings">
            <div slot="page" slot-scope="item">
              <div>{{item.originalEvent.data}}</div>
            </div>
          </pagination-page>
          <pagination-control :settings="settings" />
        </div>
      </div>
    </div>
    <!-- contain province end -->

    <!-- button province start -->
    <div class="row rowButton">
      <div class="col s1 left">
        <button class="waves-effect waves-light btn" id="btnCancel" @click="switchComponent('information')">Back</button>
      </div>
      <div class="col s1 right">
        <button class="waves-effect waves-light btn" id="btnNext" @click="switchComponent('adrs')">Next</button>
      </div>
    </div>
    <!-- button province end -->

  </div>

</template>

<script>
  import { vueTest } from '../main.js';

  export default {
      data() {
        return {
          arrayData: [
            {
              data: "Aceh"
            },
            {
              data: "Bali"
            },
            {
              data: "Banten"
            },
            {
              data: "Bengkulu"
            },
            {
              data: "Gorontalo"
            },
            {
              data: "Jakarta"
            },
            {
              data: "Jambi"
            },
            {
              data: "Jawa Barat"
            },
            {
              data: "Jawa Tengah"
            },
            {
              data: "Jawa Timur"
            },
            {
              data: "Kalimantan Barat"
            },
            {
              data: "Kalimantan Selatan"
            },
            {
              data: "Kalimantan Tengah"
            },
            {
              data: "Kalimantan Timur"
            },
            {
              data: "Kalimantan Utara"
            },
            {
              data: "Kepulauan Bangka Belitung"
            },
            {
              data: "Kepulauan Riau"
            },
            {
              data: "Lampung"
            },
            {
              data: "Maluku"
            },
            {
              data: "Maluku Utara"
            },
            {
              data: "Nusa Tenggara Barat"
            },
            {
              data: "Nusa Tenggara Timur"
            },
            {
              data: "Papua"
            },
            {
              data: "Papua Barat"
            },
            {
              data: "Sulawesi Barat"
            },
            {
              data: "Sulawesi Selatan"
            },
            {
              data: "Sulawesi Tengah"
            },
            {
              data: "Sulawesi Tenggara"
            },
            {
              data: "Sulawesi Utara"
            },
            {
              data: "Sumatera Barat"
            },
            {
              data: "Sumatera Selatan"
            },
            {
              data: "Sumatera Utara"
            },
            {
              data: "Yogyakarta"
            }
          ]
        }
      },

      methods: {
          switchComponent(comp) {
              vueTest.$emit('switchComp', comp);
          }
      },

      computed: {
        settings: function () {
          return {
            arrayData: this.arrayData
          }
        }
      }
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
  .step #stepTwo .dot {
    background: linear-gradient(to right, #c700ff, #ff77b4);
  }

  h5 {
    color: #ff77b4;
  }

  .paginate {
    margin-top: -50px;
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
