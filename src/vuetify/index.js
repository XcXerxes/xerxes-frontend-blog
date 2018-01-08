import Vue from 'vue'
import 'vuetify/src/stylus/main.styl'
/*eslint-disable */
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VSubheader,
  VBtn,
  VIcon,
  VGrid,
  VToolbar,
  transitions,
  VTabs,
  VCard,
  VForm,
  VDialog,
  VTextField,
  VDivider,
  VMenu,
  VTooltip,
  VProgressCircular
} from 'vuetify'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VSubheader,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VCard,
    VToolbar,
    transitions,
    VTabs,
    VForm,
    VDialog,
    VTextField,
    VDivider,
    VMenu,
    VTooltip,
    VProgressCircular
  },
  theme: {
    primary: '#e43256',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    dark: '#000000'
  }
})
