class Game {

  constructor () {
    this.total_kills = 0;
    this.players = new Map();
  }

  static new (parser) {
    parser.addGame(new Game());
  }

  addKill () {
    this.total_kills++;
  }

  getPlayerById (id) {
    if (this.players.has(id)) {
      return this.players.get(id);
    }
    return null;
  }

  newPlayer (player) {
    this.players.set(player.id, player);
  }

  playersNames () {
    let result = [];
    this.players.forEach(player => {
      result.push(player.username);
    })
    return result;
  }

  playersKills () {
    let result = {};
    this.players.forEach(player => {
      result[player.username] = player.calcScore();
    })
    return result;
  }

}

module.exports = Game
