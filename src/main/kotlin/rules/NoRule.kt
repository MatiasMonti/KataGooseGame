package rules

import Rule

class NoRule: Rule {

    override val order = EnumRulePriority.Lowest.priority

    override fun theInputFits(spaceBoard: Int): Boolean {
        return (true)
    }

    override fun getRule(spaceBoard: Int): String {
        return ("There is no Rule for that Board Space")
    }
}