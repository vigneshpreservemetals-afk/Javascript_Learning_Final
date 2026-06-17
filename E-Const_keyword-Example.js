

// Example 1 ("const" Cant be Re-declarred or Re-Assigned)


const a= 19;        // Declaration + Initialization

a= "Vignesh"     // Reassignment

add= a+a;

console.log("add===>",add);

console.log(a+a);




// Example 2  (Cant be accessed outside the permitted space)

{

const a= 19;        
 
add= a+a;

console.log("add===>",add);

}

console.log(a+a);




// Example 3  

{

const a= 19;        
 
add= a+a;

console.log("add===>",add);

console.log(a+a);

}



