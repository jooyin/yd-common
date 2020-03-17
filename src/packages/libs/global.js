let GLOBAL;
if (process.env.NODE_ENV == 'production') {
    GLOBAL = require('../../../env.prod');
} else if (process.env.NODE_ENV == 'beta') {
    GLOBAL = require('../../../env.beta');
} else {
    GLOBAL = require('../../../env');
}
export default GLOBAL