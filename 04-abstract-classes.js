class Animal {
    faireDuBruit() {}
}

class Chien extends Animal {
    faireDuBruit() {
        console.log("Wouf wouf");
    }
}

class Chat extends Animal {
    faireDuBruit() {
        console.log("Miaou miaou");
    }
}

const chat = new Chat();
chat.faireDuBruit();

const chien = new Chien();
chien.faireDuBruit();