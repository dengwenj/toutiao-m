/* 
  配置相关的 dayjs
*/

import Vue from "vue";
import dayjs from "dayjs"
import 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

// 配置使用中文语言包
dayjs.locale('zh-cn')

// 配置使用处理相对时间
dayjs.extend(relativeTime)

// 把处理相对时间的代码包装为全局过滤器
// 然后就可以在任何组件的模板中使用了
// 所谓的过滤器其实就是一个可以在模板中调用的函数而已
// 在组件的模板中使用过滤器：{{ article.pubdate | relativeTime }}
// 管道前面的内容会作为参数传递给过滤器函数
// article.pubdate 作为参数传递给 value 了
Vue.filter('relativeTime', value => {
  // 过滤器的返回值会渲染到使用过滤器的模板中
  return dayjs(value).from(dayjs())
})

Vue.filter('formatComment', value => {
  // 过滤器的返回值会渲染到使用过滤器的模板中
  return dayjs(value).format('DD-MM HH:mm')
})

// console.log(dayjs('2020-7-2').from())

// console.log(dayjs('2019-01-25').format('YYYY-MM-DD'));