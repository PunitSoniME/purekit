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
        return config; // always return a config.
    },
};