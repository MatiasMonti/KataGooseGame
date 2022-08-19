import rules.DefaultRule
import rules.MultiplesOfSixRule
import rules.NoRule
import rules.NumberSixRule

fun main() {
    val myGooseGame = GooseGame(listOf(DefaultRule(), MultiplesOfSixRule(), NumberSixRule(), NoRule()))
    myGooseGame.runThroughBoard()
}
