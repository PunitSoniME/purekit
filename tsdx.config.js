const replace = require('@rollup/plugin-replace');

module.exports = {
    // This function will run for each entry/format/env combination
    rollup(config, opts) {
        config.plugins = config.plugins.map(p =>
            p.name === 'replace'
                ? replace({
                    preventAssignment: true,
                })
                : p
        );
        
        //  Uncomment below code to ignore sourcemap files
        //  config.output = { ...config.output, sourcemap: false };

        return config; // always return a config.
    },
};