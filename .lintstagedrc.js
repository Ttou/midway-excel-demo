const { defineLintStagedConfig } = require('@ttou/define-config')

module.exports = defineLintStagedConfig({
  '*.{ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '*.{css,less,vue}': [
    'stylelint --fix --allow-empty-input',
    'prettier --write'
  ]
})
