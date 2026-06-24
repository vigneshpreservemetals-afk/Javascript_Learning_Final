

// Example 1 

let studentDetails = {
    "name"      : "Vignesh",
    "Interest"  : "Driving",
    "Studies"   : "BE-Mechanical",
    "Profession": "UX UI Designer",
    "College"   : "Kingston Engineering College"
}

console.log("StudentName===>", studentDetails.name)
console.log("StudentInterest===>", studentDetails.Interest)
console.log("StudentStudies===>", studentDetails.Studies)
console.log("StudentProfession===>",studentDetails.Profession)
console.log("StudentCollege===>",studentDetails['College'])
console.log("StudentCollegeDetails", studentDetails.College)

// Object properties can be accessed in two ways: studentDetails.college or studentDetails['college']. You can use whichever method is more convenient for your use case.


// Example 2

let EmployeeDetails = {
    "FullName"    : "Vignesh",
    "Height"     : "6.2",
    "Skills"     :  ["Figma","Illustrator","Miro","JavaScript","HTML","React","CSS","Bootstrap"],
    "JobSummary" :{
        "2019-2021"   :"Preservation Engineer",
        "2023-Present":"UX Designer"
    }
}

console.log("EmployeeName===>",EmployeeDetails.FullName)
console.log("Height===>",EmployeeDetails.Height)
console.log("DesignSkills===>",EmployeeDetails.Skills[0])
console.log("DesignSkills===>",EmployeeDetails.Skills[1])
console.log("DesignSkills===>",EmployeeDetails.Skills[2])
console.log("DevelopmentSkills===>",EmployeeDetails.Skills[3])
console.log("DevelopmentSkills===>",EmployeeDetails.Skills[4])
console.log("DevelopmentSkills===>",EmployeeDetails.Skills[5])
console.log("DevelopmentSkills===>",EmployeeDetails.Skills[6])
console.log("DevelopmentSkills===>",EmployeeDetails.Skills[7])
console.log("JobSummary(2019-2021)===>",EmployeeDetails.JobSummary['2019-2021'])
console.log("JobSummary(2023-present)===>",EmployeeDetails.JobSummary["2023-Present"])

