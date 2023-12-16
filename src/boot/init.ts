import { boot } from 'quasar/wrappers'

import { VueQueryPlugin } from '@tanstack/vue-query'


import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import * as ActPly from '../acts/play.action'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ( dat ) => {

  var win: any = window
  dat.app.provide('SHADE', win.SHADE)
  dat.app.provide('MQTT', win.MQTT)
  dat.app.provide('MARKET', win.MARKET)

  dat.app.use(VueQueryPlugin)

  dat.app

  const prt = 8883;
  const local = 'mqtt://localhost:' + prt;
  const localBit = { idx: 'local', src: local };

  var bit = await win.SHADE.hunt( win.SHADE.ActShd.INIT_SHADE, { val: 0,  src: local });
  var bit = await win.MARKET.hunt( win.MARKET.ActMrk.INIT_MARKET, { val: 0,  src: local });



  //for local development
  //var bit = await win.SHADE.hunt( win.SHADE.ActShd.INIT_SHADE, { val: 0, dat: win.MQTT, src: local });

})
