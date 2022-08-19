package rules

import Rule

class DefaultRule() : Rule {

    override val order = 3

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (0 < spaceBoard && spaceBoard <= GooseGame.boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Stay in space $spaceBoard")
    }
}