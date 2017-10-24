// see http://eslint.org/docs/user-guide/configuring.html#configuring-rules
const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  extends: 'react-app',
  rules: {
    quotes: [WARNING, 'single', 'avoid-escape']
  }
};
