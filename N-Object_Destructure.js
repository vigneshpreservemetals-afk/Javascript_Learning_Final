
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
      "2019-2021": "Preservation Engineer",
      "2023-Present": "UX Designer",
    },
  },

const {FullName,Height,Skills} = EmployeeDetails
const {
    "2019-2021": "Preservation Engineer",  
    "2023-Present": "UX Designer",
      } = JobSummary

console.log("FullName===>",FullName)
console.log("Height===>",Height)
console.log("Skills===>",Skills)
console.log(2019-2021)





