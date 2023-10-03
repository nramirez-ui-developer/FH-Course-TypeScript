(() => {

    abstract class Mutante {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return 'Salvar Mundo!';
        }
    }
    class Villian extends Mutante{
        conquistarMundo(){
            return 'Mundo conquistado!';
        }
    }

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus');

    /* console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo()); */

    const printName = ( character: Mutante ) => {
        console.log( character.realName );
    }

    // printName( wolverine );
    

})()