
//Example 1 (Object Destructure)



// let EmployeeDetails = 
//   {
//     FullName: "Vignesh",
//     Height: "6.2",
//     Skills: [
//       "Figma",
//       "Illustrator",
//       "Miro",
//     ],
//     JobSummary: {
//       "2019-2021": "Preservation Engineer",
//       "2023-Present": "UX Designer",
//     },
//   }

//   const {FullName,Height,Skills} = EmployeeDetails
  

//   console.log("FullName===>", FullName)
//   console.log("Height  ===>", Height)
//   console.log("Skills===>",   Skills)


  //Example 2 (Object Destructure)

  let EmployeeDetails = 
  {
    FullName: "Vignesh",
    Height: "6.2",
    Skills: [
      "Figma",
      "Illustrator",
      "Miro",
    ],
    JobSummary: {
      "2019": "Preservation Engineer",
      "2023": "UX Designer",
    },
  };

const {FullName,Height,Skills,JobSummary} = EmployeeDetails;
const {"2019": PreviousRole,
       "2023": Current_Role}              = JobSummary

console.log("FullName===>",FullName)
console.log("Height===>",Height)
console.log("Skills===>",Skills)
console.log("JobSummary===>",JobSummary)
console.log("PreviousRole===>",PreviousRole)
console.log("CurrentRole===>",Current_Role)




