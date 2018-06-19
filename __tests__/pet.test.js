const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet('Fido');
        expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');
        expect(pet.age).toEqual(0);
    });
});

describe('growUp', () => {
    it('increments the age by 1', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.age).toEqual(1);
    });
    it('increments the hunger by 5', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
    });
    it('increments the fitness by 3', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.fitness).toEqual(3);
    })
});

describe('walk', () => {
    it('increments fitness by 4 but doesnt go over 10', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(8);
    });
    it('increments fitness by 4 but doesnt go over 10', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        pet.walk();
        expect(pet.fitness).toEqual(10);
    });
});

describe('feed', () => {
    it('decreases hunger by 3 to a minimum of 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 4;
        pet.feed();
        expect(pet.hunger).toEqual(1);
    });
    it('decreases hunger by 3 to a minimum of 0', () => {
        const pet = new Pet('Fido');
        pet.hunger = 2;
        pet.feed();
        expect(pet.hunger).toEqual(0);
    });
});

describe('checkUp', () => {
    it('checks if the pet is hungry and needs a walk', () => {
        const pet = new Pet('Fido');
        pet.hunger = 5;
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    });
    it('checks if the pet is hungry', () => {
        const pet = new Pet('FIdo');
        pet.hunger = 5;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I am hungry');
    });
    it('checks if the pet needs a walk', () => {
        const pet = new Pet('Fido');
        pet.fitness = 3;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I need a walk');
    });
    it('checks if the pet is OK', () => {
        const pet = new Pet('Fido');
        pet.fitness = 4;
        pet.hunger = 4;
        pet.checkUp();
        expect(pet.checkUp()).toEqual('I feel great!');
    });
});