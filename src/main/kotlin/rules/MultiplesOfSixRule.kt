package rules

import GameData
import Rule

class MultiplesOfSixRule: Rule {

    override val order = EnumRulePriority.Medium.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard % 6 == 0 && spaceBoard <= GameData().boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Move two spaces forward.")
    }
}