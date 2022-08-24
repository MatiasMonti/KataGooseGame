package rules

import GameData
import Rule
import EnumRulePriority

class DefaultRule() : Rule {

    override val order: Int = EnumRulePriority.Low.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (0 < spaceBoard && spaceBoard <= GameData().boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Stay in space $spaceBoard")
    }
}