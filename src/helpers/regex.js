const getLineCommand = (line) => line.match(/^.{0,7}([a-z A-Z][^:]*)/);
const getPlayerId = (line) => line.match(/Client(Connect|UserinfoChanged): ([0-9]*)/);
const getKill = (line) => line.match(/Kill: ([0-9]+) ([0-9]+)/);
const getUserInfoUpdate = (line) => line.match(/ClientUserinfoChanged: [0-9]* n\\(.*)\\t\\[0-9]+\\model/)[1]

module.exports = { getLineCommand, getPlayerId, getKill, getUserInfoUpdate  }

