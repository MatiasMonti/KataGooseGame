import rules.DefaultRule
import rules.MultiplesOfSixRule
import rules.NoRule
import rules.NumberSixRule

class GooseGame {
    companion object {
        const val boardSize = 63
    }
    object GooseGameFactory{
        fun createCustom(): GooseGame{
            val game = GooseGame()
            game.rules = listOf(DefaultRule(), MultiplesOfSixRule(), NumberSixRule(), NoRule())
            return game
        }
    }
    private lateinit var rules: List<Rule>

    fun showSpaceRule(boardSpaceNumber: Int): String {
        return if (this::rules.isInitialized) getRule(boardSpaceNumber) else "Start the game first"
    }

    fun runThroughBoard() {
        for(x in 1.. boardSize){
            println( showSpaceRule(x))
        }
    }

    private fun getRule(boardSpaceNumber: Int): String{
        return  rules.filter { it.theInputFits(boardSpaceNumber) }
            .sortedBy { it.order }
            .map { it.getRule(boardSpaceNumber) }
            .first()
    }

}