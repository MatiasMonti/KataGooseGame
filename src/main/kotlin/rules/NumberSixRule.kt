package rules

import Rule

class NumberSixRule: Rule {

    override val order = 1

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard == 6 && spaceBoard <= GooseGame.boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("The Bridge: Go to space 12")
    }
}