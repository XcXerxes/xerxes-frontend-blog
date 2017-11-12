import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import {Button, Row, Col, Input, Spinner, Tabs, TabPane, Loading, Message, Icon, Form, FormItem, Dialog} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Spinner)
Vue.use(Icon)
Vue.use(Loading)
Vue.use(Dialog)

Vue.prototype.$loading = Loading.service
Vue.prototype.$message = Message
