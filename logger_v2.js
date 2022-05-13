const loggerV2 = (req, res, next) =>{
    const url = req.url;
    const method = req.method;
    const time = new Date().toTimeString();
    console.log("V2", method, url, time);
    next();
}

module.exports = loggerV2;
