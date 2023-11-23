const fs = require('fs')
const Game = require('./game')
const Player = require('./player')
const regex = require('./../helpers/regex')

class Parser {
  
  constructor () {
    this.games = new Map();
    this.currentGame = 0;
  }
  
  addGame(game) {
    this.currentGame++;
    this.games.set(this.currentGame, game);
    return this;
  }
  
  toObject() {
    let gameObject = {}
    this.games.forEach((game, idx) => {
      gameObject[`game_${parseInt(idx)}`] = {
        total_kills: game.total_kills,
        players: game.playersNames(),
        kills: game.playersKills()
      }
    })
    return gameObject;
  }
  
  readFile (logFile) {
    let lines = fs.readFileSync(logFile).toString().split("\n");
    this.parseLines(lines);
  }
  
  parseLines (lines) {
    let command = '';
    let lastLine = lines.length;
    let i;
    
    for (i = 0; i < lastLine; i++) {
      command = regex.getLineCommand(lines[i]);
      if (command) {
        this.checkCommand(command[1], lines[i], i);
      } else {
        console.log(`Could not find command on line ${i}`);
      }
    }
  }
  
  checkCommand (command, line) {
    switch (command) {
      case 'InitGame':
      Game.new(this, line);
      break
      case 'ClientConnect':
      Player.new(this, line);
      break
      case 'ClientUserinfoChanged':
      Player.update(this, line);
      break
      case 'Kill':
      Player.kill(this, line);
      break
      default:
       //console.log(`[INFO] Command ${command} ignored (line: ${idx})`)
      break
    }
  }
  
  getCurrentGame () {
    return this.games.get(this.currentGame);
  }
}

module.exports = Parser
