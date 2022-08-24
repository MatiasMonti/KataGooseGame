package rules

import GameData
import Rule

class TheWell: Rule {

    override val order = EnumRulePriority.High.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard == 31 && spaceBoard <= GameData().boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Wait until someone comes to pull you out then take your place")
    }
}