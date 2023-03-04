let users: User[] = [];
interface User {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
};
const user1: User = {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep',
        car: 'VW'
    };
const user2: User = {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut',
        children: 2
};
users.push(user1, user2);



interface User {
    name: string,
    age: number,
    occupation?: string,
    role?: string
};
interface Admin {
    name: string,
    age: number,
    role: 'Administrator'
};
const user1: User = {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
};
const admin: Admin = {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
};
const user3: User = {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
};
const user4: User = {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
};
type Person = User | Admin;
let persons: Person[] = [];
persons.push(user1, admin, user3, user4);


export class ObjectManipulator {
    constructor(protected obj:[]) {}
    public set(key:number, value:never) {
        return new ObjectManipulator({...this.obj, [key]: value});
    }
    public get(key:number) {
        return this.obj[key];
    }
    public delete(key:number) {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    public getObject() {
        return this.obj;
    }
}


export function map(mapper: never, input:[]) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: []) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


export function filter(filterer:never, input:[]) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: []) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


export function add(a: number, b: number) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB: number) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}