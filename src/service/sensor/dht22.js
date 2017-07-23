var execSync = require('child_process').execSync;

var sensor = {
    getCurrent: function() {
        var result = execSync('/usr/src/dht22/current.py').toString().split('\n');
        if(result[0] === 'error') {
            return {
                success: false,
                error: result[1]
            };
        } else {
            return {
                success: true,
                temperature: result[0],
                humidity: result[1]
            };
        }
    }
};

module.exports = sensor;
