const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const array=[];


// TODO: Write Code to gather information about the development team members, and render the HTML file.
class logic{
    constructor(){
        this.pal=0;
    }
    solve(){
        inquirer
            .prompt([
                {
                    type:"input",
                    name:"choice1",
                    message:"What is the Manager's name" 
                },

                {
                    type:"input",
                    name:"choice2",
                    message:"What is the Manager's employee ID"
                },

                {
                    type:"input",
                    name:"choice3",
                    message:"What is the Manager's email address"
                },

                {
                    type:"input",
                    name:"choice4",
                    message:"What is the Manager's office number"
                }
            ]).then(val=>{
                const name=val.choice1;
                const Id=val.choice2;
                const email=val.choice3;
                const officeNumber=val.choice4;

                const managers=new Manager(name,Id,email,officeNumber);
                array.push(managers)
                managers.value()
            }).then(()=>{
                this.further()
            })
    }
    
    
    further(){
        inquirer
        .prompt([
            {
                type:"list",
                name:"choice20",
                message:"do you want to:",
                choices:["Add an engineer","Add an intern","Finish building team"]
            }
        ]).then(val=>{
            if(val.choice20==="Add an engineer"){
                inquirer
                    .prompt([
                        {
                            type:"input",
                            name:"choice21",
                            message:"whats the engineer's name"
                        },

                        {
                            type:"input",
                            name:"choice22",
                            message:"whats the engineer's ID"
                        },

                        {
                            type:"input",
                            name:"choice23",
                            message:"whats the engineer's email"
                        },

                        {
                            type:"input",
                            name:"choice24",
                            message:"whats the engineer's github username"
                        }
            
                    ]).then(val=>{
                        const engineers=new Engineer(val.choice21,val.choice22,val.choice23,val.choice24);
                        engineers.value()
                        array.push(engineers)
                    }).then(()=>{
                        this.further()
                    })
            }else if(val.choice20==="Add an intern"){
                inquirer
                    .prompt([
                        {
                            type:"input",
                            name:"choice31",
                            message:"whats the intern's name"
                        },

                        {
                            type:"input",
                            name:"choice32",
                            message:"whats the intern's ID"
                        },

                        {
                            type:"input",
                            name:"choice33",
                            message:"whats the intern's email"
                        },

                        {
                            type:"input",
                            name:"choice34",
                            message:"whats the intern's school"
                        }

                    ]).then(val=>{
                        const interns=new Intern(val.choice31,val.choice32,val.choice33,val.choice34);
                        interns.value();
                        array.push(interns);
                    }).then(()=>{
                        this.further()
                    })                  
            }else{
                fs.writeFile(outputPath,render(array),function(error,data){
                    if(error){
                      console.error(error)
                    }else{
                      console.log(data); 
                    }
                  })
            }
        })

    }

}

const log=new logic();
log.solve();