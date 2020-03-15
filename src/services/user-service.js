class User {

    constructor() {

        if (!User.instance) {
            this._name = null;
            User.instance = this;
        }

        return User.instance;

    }

    get instance() {

        // console.log(instance);

        return User.instance


    }

    set name(name) {
        this._name = name
    }


    get name() {
        return this._name
    }

}

// const instance = new User();

 

// instance.name = 'nathan'
// Object.freeze(instance);

// const second = new User();

// console.log(instance.name);
// console.log(second.name);
