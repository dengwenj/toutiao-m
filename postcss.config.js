/* 
   postcss 的配置文件
*/

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      // 表示根元素字体大小，他会根据元素大小进行单位转换
      rootValue: 37.5,
      // 需要转换的 css 属性 ，* 就是所有属性都要转换
      propList: ['*'],
    },
  },
};