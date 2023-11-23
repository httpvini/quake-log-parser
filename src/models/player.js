const regex = require('./../helpers/regex');
const USER_WORLD_ID = 1022;

class Player {

  constructor ( line = '' ) {
    this.id = Player.getPlayerId(line);
    this.username = '';
    this.kills = 0;
    this.deadsByWorld = 0;
  }

  static getPlayerId (line) {
    let playerId = regex.getPlayerId(line);
    return playerId ? playerId[2] : 0;
  }

  static new (parser, line) {
    let currentGame = parser.getCurrentGame();
    currentGame.newPlayer(new Player(line));
  }

  static update (parser, line) {
    let currentGame = parser.getCurrentGame();
    let player = currentGame.getPlayerById(Player.getPlayerId(line));

    if (player) {
      player.update(line);
    } else {
      console.log(`[WARNING] Could not find player by ID (line: ${line})`);
    }
  }

  static kill (parser, line) {
    let currentGame = parser.getCurrentGame();
    let players = regex.getKill(line);

    if (players) {
      currentGame.addKill();
      if (players[1] == USER_WORLD_ID) {
        currentGame.players.get(players[2]).deadsByWorld++;
      } else {
        currentGame.players.get(players[1]).addKill();
      }
    } else {
      console.log(`[WARNING] Could not find players to count kills (line: ${line})`);
    }
  }

  calcScore () {
    const score = this.kills - this.deadsByWorld;
    return score < 0 ? 0 : score;
  }

  addKill () {
    this.kills++;
  }

  removeKill () {
    const killsToBeRemoved = this.kills > 0 ? 1 : 0;
    this.kills -= killsToBeRemoved;
  }
  
  update (line) {
    this.username = regex.getUserInfoUpdate(line);
  }

}

module.exports = Player
