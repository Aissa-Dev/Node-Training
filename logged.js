exports.log = (req, res, next) => {
    res.send('logged');
    next()
}