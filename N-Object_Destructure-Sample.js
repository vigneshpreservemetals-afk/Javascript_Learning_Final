
// Sample 1 (Object Destructure)

// const employee = {
//   name: "Vignesh",
//   role: "UX Designer",
//   experience: 3
// };

// const {name,role,experience} = employee

// console.log("Name===>",name)
// console.log("Role===>",role)
// console.log("Experience===>",experience)


// Sample 2 (Object Destructure)

// const user = {
//   name: "Vignesh",
//   address: {
//     city: "Chennai",
//     country: "India"
//   }
// };

// const {name,address} = user
// const {city,country} = address

// console.log("Name===>",name)
// console.log("address===>",address)
// console.log("city===>",city)
// console.log("country===>",country)



// Sample 3 (Object Destructure)


// const skills = [
//   "Figma",
//   "Illustrator",
//   "Miro"
// ];

// console.log("Skills===>",skills[0],skills[1],skills[2])
// console.log("PrimarySkill===>",skills[0])
// console.log("SecondarySkill===>",skills[1])
// console.log("TertiarySkill===>",skills[2])


// Sample 4 (Object Destructure)


// const designer = {
//   FullName: "Vignesh",
//   skills: [
//     "Figma",
//     "Photoshop",
//     "Miro"
//   ]
// };

// const {FullName,skills} = designer
// const [ PrimarySkill,SecondarySkill,TertiarySkill ] = skills

// console.log("FullName===>",FullName)
// console.log("PrimarySkill===>",skills[0])
// console.log("SecondarySkill===>",skills[1])
// console.log("TertiarySkill===>",skills[2])

// //(Or)

// console.log("PrimarySkill===>",PrimarySkill)
// console.log("SecondarySkill===>",SecondarySkill)
// console.log("TertiarySkill===>",TertiarySkill)


// Sample 5 (Object Destructure)

// const employee = {
//   name: "Vignesh",
//   role: "Product Designer"
// };

// const {name,role} = employee

// console.log("name===>",name)
// console.log("role===>",role)

// Sample 6 

// const employee = {
//   name: "Vignesh"
// };

// const {name,salary="Not Available"} = employee

// console.log("Name===>",name)
// console.log("Salary===>",salary)

// Sample 7

// const EmployeeDetails = {
//   FullName: "Vignesh",
//   Skills: [
//     "Figma",
//     "Illustrator",
//     "Miro"
//   ],
//   JobSummary: {
//     CurrentRole: "UX Designer",
//     PreviousRole: "Preservation Engineer"
//   }
// };

// const {FullName,Skills,JobSummary} = EmployeeDetails
// const {CurrentRole, PreviousRole}  = JobSummary

// console.log("FullName===>",FullName)
// console.log("CurrentRole===>",CurrentRole)
// console.log("PreviousRole===>",PreviousRole)
// console.log("Skills===>",Skills[0])

//Sample 8 


const company = {
  name: "Tech Corp",
  department: {
    name: "Design",
    manager: {
      name: "John"
    }
  }
};

// const {name} = company;
// const {department} = company;
// const {manager}    = department

const {name,department} = company;
const {name:departmentName,manager} = department;
const {name:managerName}            = manager;

console.log("CompanyName===>",name)
console.log("DepartmentName===>",departmentName)
console.log("CompanyName===>",managerName)





