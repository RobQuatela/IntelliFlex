const {logs} = require('../mock-repository/log-data');

listLogs = () => {
    return logs;
};

getLog = (id) => {
    const log = logs.find(l => l._id === id);
    return log;
};

module.exports = {
    listLogs,
    getLog
};