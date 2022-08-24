package rules

import GameData
import Rule

class NumberSixRule: Rule {

    override val order = EnumRulePriority.High.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard == 6 && spaceBoard <= GameData().boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("The Bridge: Go to space 12")
    }
}