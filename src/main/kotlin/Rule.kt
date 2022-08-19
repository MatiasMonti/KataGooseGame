interface Rule {

    val order: Int
    fun theInputFits(spaceBoard: Int) : Boolean
    fun getRule(spaceBoard: Int) : String
}