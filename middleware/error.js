const errorHandler = (err, req, res, next) => {
	if (res.status) {
		res.status(err.status).send({ message: err.message });
	} else {
		res.status(500).json({ message: err.message });
	}
};

module.exports = errorHandler;
