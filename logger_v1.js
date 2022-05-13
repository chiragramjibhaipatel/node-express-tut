const loggerV1 = (req, res, next) =>{
    const url = req.url;
    const method = req.method;
    const time = new Date().toTimeString();
    console.log("V1", method, url, time);
    next();
}

module.exports = loggerV1;
