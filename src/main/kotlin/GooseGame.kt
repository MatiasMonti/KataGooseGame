
class GooseGame(private val rules: List<Rule>) {
    companion object {
        const val boardSize = 63
    }


    fun showSpaceRule(boardSpaceNumber: Int): String {

        return rules.filter{ it.theInputFits(boardSpaceNumber) }
            .sortedBy { it.order}
            .map{it.getRule(boardSpaceNumber)}
            .first()
    }
    fun runThroughBoard() {
        for(x in 1.. boardSize){
            println( showSpaceRule(x))
        }
    }

}