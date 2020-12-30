var person = { firstName: "John", 
               lastName: "Doe", 
               id: 5566, 
               fullName: function () { 
                    return this.firstName + " " + this.lastName; 
                },
                salary: [10000, 20000, 30000],  
                getTotalSalary:function(){
                     let totalSalary;
                     totalSalary=this.salary.reduce((a,b)=>a+b,0);
                     return totalSalary; 
                }
            };

console.log(person.fullName());
console.log(person.getTotalSalary());