import Vue from 'vue';
import VueMq from 'vue-mq';

//exlg以外はsassとあわせること
// p(v-if= "$mq === 'sm'") モバイル表示
// p(v-else) その他の表示
// this.$mq === 'sm' ? 'I am small' : 'I am large'

Vue.use(VueMq, {
  defaultBreakpoint: 'sp',
  breakpoints: {
    exlg: Infinity,
    lg: 1140,
    md: 1000,
    sm: 750,
    sp: 480
  }
});