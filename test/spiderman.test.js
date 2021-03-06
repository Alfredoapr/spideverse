const Spiderman = require('./../app/spiderman')

describe("Test Suite Description", () => {
    test("Case 1 Dummy", () => {
        const resultOfSomething = 1 + 2
        expect(resultOfSomething).toBe(3)
    });
})

describe("Unit Test for Spiderman Class", () => {
    test('1 ) Create a Spiderman Object', () => {
        
        //Aqui escribimos el código que queremos usar tal cuál
        //Quiero poder instanciar un objeto Spiderman con está información
        const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony Picture")
    
        //Validamos que este código funcione de la forma que esperamos
        expect(andrewGarfield.name).toBe("Spiderman Sony")
        expect(andrewGarfield.age).toBe(31)
        expect(andrewGarfield.actor).toBe("Andrew Garfield")
        expect(andrewGarfield.movies).toBe(2)
        expect(andrewGarfield.studio).toBe("Sony Picture")  
    })
})

describe("Unit test for method getInform",() =>{ 
    test('2) Use the method getInfot()', () =>{
        //lo que quiero usar
        const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel Studio")
        
        //Lo que quiero validar
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel Studios")

    })
})