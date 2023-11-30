// TODO: Write code to define and export the Employee class
class Employee{
    constructor(name,id,email){
        if((!name)||(!id)||(!email)){
            throw error("employee initilization failed")
        }
        
        this.name=name;
        this.id=id;
        this.email=email;
    }

    getName(){
        return this.name
    }

    getId(){
        return this.id
    }

    getEmail(){
        return this.email
    }

    getRole(){
        const eng="Engineer"
        return eng
    }

    value(){
        for(const car in this){
            console.log(`${this[car]}=${car}`)
        }
    }
}

module.exports=Employee