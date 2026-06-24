// Example 2

let EmployeeDetails = [
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

  {
    FullName: "Kiruba",
    Height: "6.0",
    Skills: [
      "HTML",
      "CSS",
      "Bootstrap",
    ],
    JobSummary: {
      "2019-2021": "Bank Manager",
      "2023-Present": "Full-Stack Developer",
    },
  },

  {
    FullName: "Vino Sri",
    Height: "6.3",
    Skills: [
      "JavaScript",
      "React",
    ],
    JobSummary: {
      "2019-2021": "Student",
      "2023-Present": "FrontEnd Developer",
    },
  },
];

console.log("EmployeeDetails===>", EmployeeDetails[0].FullName);
console.log("VigneshHeight===>",   EmployeeDetails[0].Height);
console.log("VigneshSkills===>",   EmployeeDetails[0].Skills[1]);
console.log("--------------------------------------------------")

console.log("EmployeeDetails===>", EmployeeDetails[1].FullName);
console.log("KirubaSkills===>",    EmployeeDetails[1].Skills[0] );
console.log("KirubaJobSummary===>",EmployeeDetails[1].JobSummary['2019-2021'] );
console.log("----------------------------------------------------------------")

console.log("EmployeeDetails===>", EmployeeDetails[2].FullName);
console.log("KirubaSkills===>",    EmployeeDetails[2].Skills[0] );
console.log("KirubaJobSummary===>",EmployeeDetails[2].JobSummary['2019-2021'] );
console.log("----------------------------------------------------------------")


