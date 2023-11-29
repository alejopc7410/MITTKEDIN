'use strict';

class User {
    #id; 
    #name;
    #userName; 
    #email;

    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    get id() {return this.#id}
    get name() {return this.#name}
    get userName() {return this.#userName}
    get email() {return this.#email}

    getInfo() {
        return `ID: ${this.#id}, Name: ${this.#name}, UserName: ${this.#userName}, Email${this.#email}`
    }
}

class Suscriber extends User {
    #page;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, page, groups, canMonetize) {
        super(id, name, userName, email);
        this.#page = page;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get page() {return this.#page}
    get groups() {return this.#groups}
    get canMonetize() {return this.#canMonetize}

    getInfo() {
        return `Page: ${this.#page}, Gropus: ${this.#groups}, Can Monetize: ${this.#canMonetize}`
    }
}

export {User, Suscriber}