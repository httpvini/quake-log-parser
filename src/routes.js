const gamesController = require('./controllers/games_controller');

const Router = (app, parser) => {
  [
    [ 'GET', '/games', gamesController.listGames(parser) ],
    [ 'GET', '/game/{id}', gamesController.getGame(parser) ]
  ].forEach(routeData => {
    
    app.route({
      method: routeData[0],
      path: `/api/v1${routeData[1]}`,
      handler: routeData[2]
    });
    
    console.log(`/api/v1${routeData[1]} - route registered`);
  });
}

module.exports = Router