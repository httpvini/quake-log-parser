class GamesController {

  listGames(parse) {
    return (request, reply) => {
      reply(parse.toObject());
    }
  }

  getGame(parse) {
    return (request, reply) => {
      const game = parse.toObject()[`game_${request.params.id}`];
      if (!game) {
        reply({ error: `Game ${request.params.id} not found` }).code(404);
        return
      }
      reply(game);
    }
  }
}

const gamesController = new GamesController();
module.exports = gamesController