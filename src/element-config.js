import Vue from 'vue'
import 'element-ui/lib/theme-default/index.css'
import {Button, Row, Col, Input, Spinner, Tabs, TabPane, Loading, Message} from 'element-ui'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Spinner)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
