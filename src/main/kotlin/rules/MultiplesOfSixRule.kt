package rules

import GooseGame
import Rule

class MultiplesOfSixRule: Rule {

    override val order = 2

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard % 6 == 0 && spaceBoard <= GooseGame.boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Move two spaces forward.")
    }
}