
class GooseGame(private val rules : List<Rule>) {

    fun showSpaceRule(boardSpaceNumber: Int): String{
        return  rules.filter { it.theInputFits(boardSpaceNumber) }
            .sortedBy { it.order }
            .map { it.getRule(boardSpaceNumber) }
            .first()
    }
}