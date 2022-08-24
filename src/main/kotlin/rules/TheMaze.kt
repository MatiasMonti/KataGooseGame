package rules

import GameData
import Rule

class TheMaze: Rule {

    override val order = EnumRulePriority.High.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard == 42 && spaceBoard <= GameData().boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Go back to space 39")
    }
}