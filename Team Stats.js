//Creating and extracting information about sports team
const team = {
    _players: [{firstName: 'Pablo', lastName: 'Sanchez', age: 20}, 
      {firstName: 'Ansu', lastName: 'Fati',age: 19}, 
      {firstName: 'C', lastName: 'Ronaldo', age: 30}],
    _games: [{opponent: 'Broncos', teamPoints: 42,
    opponentPoints: 27},
      {opponent: 'Brute', teamPoints: 34, opponentPoints: 20},
      {opponent: 'Carl', teamPoints: 52,
    opponentPoints: 30}],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  team.addGame('Titans', 100, 98);
  team.addGame('Titus', 50, 90);
  team.addGame('Ben', 68, 70);