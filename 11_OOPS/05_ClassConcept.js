// Below all the things are available after ES6 update

class User_T1{

    //This will be called whenever a new object of the class, would be intialised.
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    //This is syntax for the function in the 'class'
    encryptPassword(){
        return `${this.password}@abc00..45`;
    }

    formatUsername(username){
        return `${this.username.toUpperCase()}`;
    }

}


const user_1 = new User_T1("Ayush123", "ayush@gmail.com", "random125");
console.log(user_1.encryptPassword())
console.log(user_1.formatUsername());

// Before the ES6 update, all of the above things were being performed like this


function User_T2(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;

    this.encryptPassword = () =>{
        return `${this.password}@abc00..45`;
    }
}

const user_2 = new User_T2("Rawat456","rawat@gmail.com","random458");
console.log(user_2.encryptPassword());
