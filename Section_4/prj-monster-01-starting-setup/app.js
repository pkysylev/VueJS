const monster = "Monster";
const player = "Player";
const draw = "draw";

const attack = "attack";
const heal = "heal";

const youLost = "You lost!";
const youWin = "You win!";
const itIsADraw = "It's a draw!";

function getRandomValue(minPoint, maxPoint) {
    return Math.floor(Math.random() * (maxPoint - minPoint)) + minPoint;
}

function setBarStyles(currHealth) {
    if (currHealth < 0) {
        return { width: "0%" }
    }
    return { width: `${currHealth}%` };
}

function calculateHealth(currHealthValue, opositePlayerHealthValue, opositePlayer) {
    var winner = null;
    if (currHealthValue <= 0 && opositePlayerHealthValue <= 0) {
        winner = draw;
    } else if (currHealthValue <= 0) {
        winner = opositePlayer;
    }
    return winner;
}

Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 0,
            winner: null,
            logMessages: []
        };
    },
    methods: {
        newGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.logMessages = []
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(5, 12);
            this.monsterHealth -= attackValue;
            this.addLogMessage(player, attack, attackValue)
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(8, 15);
            this.playerHealth -= attackValue;
            this.addLogMessage(monster, attack, attackValue)
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(10, 25);
            this.monsterHealth -= attackValue;
            this.addLogMessage(player, attack, attackValue)
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage(player, heal, healValue)
            this.attackPlayer();
        },
        surrender() {
            this.winner = monster;
        },
        addLogMessage(who, what, value) {
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        },
        getLogSideClass(idx) {
            var currLogMessage = this.logMessages[idx];
            return currLogMessage.actionBy === player ? "log--player" : "log--monster";
        }
    },
    computed: {
        mosterBarStyles() {
            return setBarStyles(this.monsterHealth);
        },
        playerBarStyles() {
            return setBarStyles(this.playerHealth);
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        }        
    },
    watch: {
        playerHealth(value) {
            this.winner = calculateHealth(value, this.monsterHealth, monster);
        },
        monsterHealth(value) {
            this.winner = calculateHealth(value, this.playerHealth, player);
        },
        winner(value) {
            switch (value) {
                case player: {
                    this.winner = youWin;
                    break;
                }
                case monster: {
                    this.winner = youLost;
                    break;
                }
                case draw: {
                    this.winner = itIsADraw;
                    break;
                }

                default:
                    break;
            }
        }
    }
}).mount("#game");