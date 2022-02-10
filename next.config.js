module.exports = {
	images: {
		domains: ["*"],
	},
	target: "serverless",
	target: "experimental-serverless-trace",
	webpack: function (config) {
		config.module.rules.push({
			test: /\.md$/,
			use: "raw-loader",
		});
		return config;
	},
};
