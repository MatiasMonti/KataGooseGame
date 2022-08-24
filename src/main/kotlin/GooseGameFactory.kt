import rules.DefaultRule
import rules.MultiplesOfSixRule
import rules.NoRule
import rules.NumberSixRule


object GooseGameFactory{

    fun create(): GooseGame{
        return GooseGame(listOf(DefaultRule(), MultiplesOfSixRule(), NumberSixRule(), NoRule()))
    }
}