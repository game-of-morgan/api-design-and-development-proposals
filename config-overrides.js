module.exports = function override(config, env) {
    if (config.module && config.module.rules && Array.isArray(config.module.rules)) {
        const rules = [{
            test: /\.md$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }
            ]
        }];

        config.module.rules.forEach(function(rule) {
            rules.push(rule);
        });

        config.module.rules = rules;
    }

    return config;
};
