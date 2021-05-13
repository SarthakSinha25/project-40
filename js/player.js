class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.score =0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    // getScore() {
    //     var scores = database.ref('players/player1/score');
    //     scores.on("value", (data) => {
    //         this.score = data.val();
    //     })
    // }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    // updateScore(pscore) {
    //     database.ref('players/player1/score').update({
    //         score: pscore
    //     });
    // }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            score:this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    
}
