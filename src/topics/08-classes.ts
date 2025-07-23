


export class Person {

    // public name: string;
    // public address: string;

    constructor(
        public name: string,
        public lastName: string,
        private address: string = "No Addresse"
    ) {}

}

// export class Hero extends Person {

//     constructor(
//         public alterEgo: string,
//         public age: number,
//         public realName: string
//     ) {
//         super(realName, "Ney York");
//     }
// }

export class Hero{

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,

    ) {
        
        // this.person = new Person(realName);
    }
}

const tony = new Person("Tony", "Stark", "Mew York")
const ironman = new Hero("Ironman",45,"Tony", tony);

console.log(ironman);