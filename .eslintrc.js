// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // "no-unused-vars": [2, {
    //   // 允许声明未使用变量
    //   "vars": "local",
    //   // 参数不检查
    //   "args": "none"
    // }],
    "no-unused-vars" : 0,
    "no-useless-return" : 0,
    // 关闭语句强制分号结尾
    "semi": [0],
    //空行最多不能超过100行
    "no-multiple-empty-lines": [0, {"max": 50}],
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
    "no-control-regex": 0,
    "no-lone-blocks": 0,
    'no-unneeded-ternary': 0,
    'prefer-promise-reject-errors': 0,
    "indent": [0,2],//缩进风格
    "default-case": 0,//switch语句最后必须有default
    "no-extra-boolean-cast" : 0,// 禁止不必要的布尔转换,
    "eqeqeq" : 0, // 可以不使用三等
    "eol-last":0,
    "no-useless-escape":0
  }
}
