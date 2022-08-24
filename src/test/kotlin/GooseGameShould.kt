import kotlin.test.Test
import kotlin.test.assertEquals

class GooseGameShould {
    private val myGooseGame = GooseGameFactory.create()
    private val myGooseGame2 = GooseGame2Factory.create()

    @Test
    fun printSpace1Should() {
        val result = myGooseGame.showSpaceRule(1)
        assertEquals(result, "Stay in space 1" )
    }

    @Test
    fun printSpace2Should() {
        val result = myGooseGame.showSpaceRule(2)
        assertEquals(result, "Stay in space 2" )
    }

    @Test
    fun printMultipleOfSixShould() {
        val result = myGooseGame.showSpaceRule(12)
        assertEquals(result, "Move two spaces forward." )
    }

    @Test
    fun printAnotherMultipleOfSixShould() {
        val result = myGooseGame.showSpaceRule(18)
        assertEquals(result, "Move two spaces forward." )
    }

    @Test
    fun printNumberSixShould() {
        val result = myGooseGame.showSpaceRule(6)
        assertEquals(result, "The Bridge: Go to space 12" )
    }

    @Test
    fun wrongSpaceBoardShould() {
        val result = myGooseGame.showSpaceRule(78)
        assertEquals(result, "There is no Rule for that Board Space" )
    }

    @Test
    fun gooseGame2TheHotelShould() {
        val result = myGooseGame2.showSpaceRule(19)
        assertEquals(result, "Stay for (miss) one turn" )
    }

    @Test
    fun gooseGame2TheWellShould() {
        val result = myGooseGame2.showSpaceRule(31)
        assertEquals(result, "Wait until someone comes to pull you out then take your place" )
    }

    @Test
    fun gooseGame2TheMazeShould() {
        val result = myGooseGame2.showSpaceRule(42)
        assertEquals(result, "Go back to space 39" )
    }

    @Test
    fun gooseGame2ThePrison50Should() {
        val result = myGooseGame2.showSpaceRule(50)
        assertEquals(result, "Wait until someone comes to release you then take your place" )
    }

    @Test
    fun gooseGame2ThePrison55Should() {
        val result = myGooseGame2.showSpaceRule(55)
        assertEquals(result, "Wait until someone comes to release you then take your place" )
    }
}