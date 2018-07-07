const logsService = require('../services/logs-services');

// GET list all logs
const listLogs_GET = (req, res) => {
    res.send({
        result: logsService.listLogs()
    });
};

// GET get log by id
const getLog_GET = (req, res) => {
    res.send({
        result: logsService.getLog(parseInt(req.params.id))
    });
};

module.exports = {
    listLogs_GET,
    getLog_GET
};