import kotlin.test.Test
import kotlin.test.assertEquals

class GooseGameShould {
    private val myGooseGame = GooseGame.GooseGameFactory.createCustom()

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
}