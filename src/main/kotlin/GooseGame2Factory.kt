import rules.*


object GooseGame2Factory{

    fun create(): GooseGame{
        return GooseGame(listOf(DefaultRule(), MultiplesOfSixRule(),TheHotel(),TheWell(),TheMaze(),ThePrison(),
                         NumberSixRule(), NoRule()))
    }
}