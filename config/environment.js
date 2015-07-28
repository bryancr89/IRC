module.exports = function getEnvironment(env) {
	return require('./' + env);
};