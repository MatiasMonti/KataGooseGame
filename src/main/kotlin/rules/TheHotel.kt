package rules

import GameData
import Rule

class TheHotel: Rule {

    override val order = EnumRulePriority.High.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (spaceBoard == 19 && spaceBoard <= GameData().boardSize)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("Stay for (miss) one turn")
    }
}