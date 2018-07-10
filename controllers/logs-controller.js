const logsService = require('../services/logs-services');

// GET list all logs
const listLogs_GET = (req, res) => {
    logsService.listLogs().then((docs) => {
        res.send({
            result: docs
        });
    }, (err) => res.status(400).send(err));
};

// GET get log by id
const getLog_GET = (req, res) => {
    logsService.getLog(req.params.id).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => res.status(400).send(err));
};

// POST save log
const saveLog_POST = (req, res) => {
    logsService.saveLog(req.body).then((doc) => {
        res.send({
            result: doc
        });
    }, (err) => res.status(400).send(err));
};

module.exports = {
    listLogs_GET,
    getLog_GET,
    saveLog_POST
};