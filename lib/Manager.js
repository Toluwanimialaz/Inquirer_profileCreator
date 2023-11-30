// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee=require("./Employee")

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        if(!officeNumber){
            throw error("manager initialization failed")
        }
       
        super(name,id,email)

        this.officeNumber=officeNumber;
    }

    getRole(){
        return "Manager"
    }

    value(){
        for(const car in this){
            console.log(`${this[car]}=${car}`)
        }
    }

    getOfficeNumber(){
        return this.officeNumber
    }


}

module.exports=Manager;