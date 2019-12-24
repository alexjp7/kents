/* eslint-disable prettier/prettier */
<template>
    <div id="board">
        <br>
        <v-card v-if="playerTurn" color="green">
            <v-card-title  class="justify-center">
                {{gameOver ? " P2 has Won! ":turnDescription.p1}}
            </v-card-title>
        </v-card>
        <v-card v-else color="red">
            <v-card-title  class="justify-center">
                {{gameOver ? " P1 has Won! ":turnDescription.p2}}
            </v-card-title>
        </v-card>
        <br>
        <br>
        <div  class="game-board">
            <div class="box" v-for="(square,index) in squares" v-bind:key="square"  @click="boxClicked(index)"> 
                <div v-if="gameOver && square !== null && checkWinningCombination(index)">
                    <v-card flat color="green">
                        <v-card-title>
                            <h1>{{square}}</h1>
                        </v-card-title>
                    </v-card>
                </div>
                <div v-else>
                    <v-card flat>
                        <v-card-title>
                            <h1>{{square}}</h1>
                        </v-card-title>
                    </v-card>
                </div>
            </div>
        </div>
        <br>
        <v-row>
            <v-col>
                <v-btn large block  color="blue" @click="resetGame">Replay</v-btn>
            </v-col>
            <v-col>
                <v-btn large  block  color="orange" @click="resetScores">Reset Scores</v-btn>
            </v-col>
        </v-row>
      <div  style="color:white;">
          <v-row>
              <v-col>
                    <v-card-title  class="justify-center">
                     Player 1's Score
                    </v-card-title>
              </v-col>
              <v-col>
                    <v-card-title  class="justify-center">
                     Player 2's Score
                    </v-card-title>
              </v-col>
          </v-row>
          <v-row>
              <v-col>
                <v-card-title  class="justify-center">
                    {{playerScores.p1Score}}
                  </v-card-title>
              </v-col>
              <v-col>
                  <v-card-title class="justify-center">
                    {{playerScores.p2Score}}
                  </v-card-title>
              </v-col>
          </v-row>
      </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        squares: [], 
        squareGroups: [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8], [0,4,8], [2,4,6]],
        playerTurn: true,
        turnDescription: {p1:"Player 1's Turn!",p2:"Player 2's Turn!"},
        gameOver:false,
        winningCombination:[],
        playerScores:{p1Score:0,p2Score:0}
    }),

    methods:{
        boxClicked(boxClicked) {
            if(this.squares[boxClicked] !== null || this.gameOver) return;
            if(this.playerTurn) this.makePlayerMove(boxClicked);
            else this.makeBotsTurn(boxClicked)
            if(this.checkWin(boxClicked)) {
                this.gameOver = true;
                if(this.playerTurn) this.playerScores.p2Score++;
                else this.playerScores.p1Score++;
            }
        },
        makePlayerMove(box) {
            this.squares.splice(box, 1, "X");
            this.playerTurn = false
        },
        makeBotsTurn(box) {
            this.squares.splice(box, 1, "O");
            this.playerTurn = true
        },
        checkWin(lastMove) {
            if(this.squareGroups[0].some(e => e === lastMove) && this.squares[0] === this.squares[1] && this.squares[1] === this.squares[2]) {
                this.winningCombination = 0;
                return true;
            } 
            if(this.squareGroups[1].some(e => e === lastMove) && this.squares[3] === this.squares[4] && this.squares[4] === this.squares[5]) {
                this.winningCombination = 1;
                return true;
            }
            if(this.squareGroups[2].some(e => e === lastMove) && this.squares[6] === this.squares[7] && this.squares[7] === this.squares[8]) {
                this.winningCombination = 2;
                return true;
            }
            if(this.squareGroups[3].some(e => e === lastMove) && this.squares[0] === this.squares[3] && this.squares[3] === this.squares[6]) {
                this.winningCombination = 3;
                return true;
            }
            if(this.squareGroups[4].some(e => e === lastMove) && this.squares[1] === this.squares[4] && this.squares[4] === this.squares[7]) {
               this.winningCombination = 4;
               return true;
            }
            if(this.squareGroups[5].some(e => e === lastMove) && this.squares[2] === this.squares[5] && this.squares[5] === this.squares[8]){
                this.winningCombination = 5;
                return true;
            }
            if(this.squareGroups[6].some(e => e === lastMove) && this.squares[0] === this.squares[4] && this.squares[4] === this.squares[8]){
                this.winningCombination = 6;
                return true;
            }
            if(this.squareGroups[7].some(e => e === lastMove) && this.squares[2] === this.squares[4] && this.squares[4] === this.squares[6]) {
                this.winningCombination = 7;
                return true;
            }

            return false;
        },
        checkWinningCombination(index) {
            return this.squareGroups[this.winningCombination].includes(index);
        },
        resetGame() {
             this.squares =  new Array(9).fill(null);
             this.playerTurn = true;
             this.gameOver = false;
        },
        resetScores() {
            this.playerScores.p1Score = 0;
            this.playerScores.p2Score = 0;
        }
    },
    mounted() {
        this.squares = new Array(9).fill(null);
    },

}
</script>

<style scoped>



.game-board
{
    min-width: 200px;
    min-height: 200px;
    margin: 0 auto;
    background-color:white;
    color: #fff;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
}

.box
{
  border: 6px solid #2c3e50;
  color:black;
  border-radius: 1%;
  font-family: Helvetica;
  font-weight: bold;
  font-size: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#board {
    background-image:url("../assets/homeBkg.png");
    height:900px;
}
</style>