
// function addNumbers(a: number, b: number): number{
//     return a + b;
// }

// const addNumberArrow = (a: number, b: number):string => {
//     return `${a + b}`;
// }

// function multiply(firstNumber: number, secondNumbre?: number, base: number = 2){
//     return firstNumber * base;
// }

// const result: number = addNumbers(1,2);
// const result2: string = addNumberArrow(1,2);
// const result3: number = multiply(5);

//console.log({result, result2, result3});

interface Character{
    name: string;
    hp: number;
    showHp: () => void;
}
const healCharacter = ( character: Character, amount: number) => {

    character.hp += amount;
}

const strider: Character = {
    name: "Strider",
    hp: 50,
    showHp(){
        console.log(`Puntosde vida ${this.hp}`);
    }
}

healCharacter(strider, 10);
healCharacter(strider, 25);

strider.showHp();

export{};