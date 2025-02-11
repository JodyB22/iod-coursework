const basketballGame = {
    score: 0,
    fouls: 0, 

    freeThrow() {
        this.score++;
        return this; 
    },

    basket() {
        this.score += 2;
        return this; 
    },

    threePointer() {
        this.score += 3;
        return this; 
    },

    addFoul() { 
        this.fouls++;
        return this; 
    },

    halfTime() {
        console.log(`Halftime score is ${this.score}, Fouls: ${this.fouls}`);
        return this;
    },

    fullTime() {
        console.log(`Full-time score is ${this.score}, Fouls: ${this.fouls}`);
        return this;
    }
};


basketballGame
    .basket()
    .freeThrow()
    .freeThrow()
    .basket()
    .threePointer()
    .addFoul()
    .addFoul()
    .halfTime()
    .threePointer()
    .basket()
    .addFoul()
    .fullTime();
