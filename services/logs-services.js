const logRepo = require('../repositories/logs-repo');

const listLogs = () => {
    return logRepo.listLogs();
};

const getLog = (id) => {
    return logRepo.getLog(id);
};

const saveLog = (log) => {
    return logRepo.saveLog(log);
}

module.exports = {
    listLogs,
    getLog,
    saveLog
};