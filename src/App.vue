<template>
  <div id="app">
    <navbar/>
    <component :is="currentComp"></component>
  </div>
</template>

<script>
import Headercomponent from './components/Header-component.vue';
import Informationcomponent from './components/Information-component.vue';
import Provincecomponent from './components/Province-component.vue';
import Addresscomponent from './components/Address-component.vue';
import Profilecomponent from './components/Profile-component.vue';
import Resultcomponent from './components/Result-component.vue';
import { vueTest } from './main.js';

export default {
  el: '#app',

  data() {
    return {
      currentComp: 'information',
      provinceLists: [
        {id: 0, text: "Aceh"},
        {id: 1, text: "Bali"},
        {id: 2, text: "Banten"},
        {id: 3, text: "Bengkulu"},
        {id: 4, text: "Gorontalo"},
        {id: 5, text: "Jakarta"},
        {id: 6, text: "Jambi"},
        {id: 7, text: "Jawa Barat"},
        {id: 8, text: "Jawa Tengah"},
        {id: 9, text: "Jawa Timur"},
        {id: 10, text: "Kalimantan Barat"},
        {id: 11, text: "Kalimantan Selatan"},
        {id: 12, text: "Kalimantan Tengah"},
        {id: 13, text: "Kalimantan Timur"},
        {id: 14, text: "Kalimantan Utara"},
        {id: 15, text: "Kepulauan Bangka Belitung"},
        {id: 16, text: "Kepulauan Riau"},
        {id: 17, text: "Lampung"},
        {id: 18, text: "Maluku"},
        {id: 19, text: "Maluku Utara"},
        {id: 20, text: "Nusa Tenggara Barat"},
        {id: 21, text: "Nusa Tenggara Timur"},
        {id: 22, text: "Papua"},
        {id: 23, text: "Papua Barat"},
        {id: 24, text: "Sulawesi Barat"},
        {id: 25, text: "Sulawesi Selatan"},
        {id: 26, text: "Sulawesi Tengah"},
        {id: 27, text: "Sulawesi Tenggara"},
        {id: 28, text: "Sulawesi Utara"},
        {id: 29, text: "Sumatera Barat"},
        {id: 30, text: "Sumatera Selatan"},
        {id: 31, text: "Sumatera Utara"},
        {id: 32, text: "Yogyakarta"}
      ]
    };
  },

  created() {
      vueTest.$on('switchComp', comp => {
           this.currentComp = comp;
      })
  },

  components: {
    'navbar': Headercomponent,
    'information': Informationcomponent,
    'province': Provincecomponent,
    'adrs': Addresscomponent,
    'profile': Profilecomponent,
    'reslt': Resultcomponent
  }
}
</script>
