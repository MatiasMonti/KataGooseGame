object GooseGameBoardPrinter {

    fun play(game: GooseGame) {
        for(x in 1.. GameData().boardSize){
            println( game.showSpaceRule(x))
        }
    }
}