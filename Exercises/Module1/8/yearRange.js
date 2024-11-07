function isLeapYear(year) {
        return (year%4==0) || (year%100==0 && year%400==0)}
    function print(startYear, endYear) {
     const leapYears=[];
     for (let year=startYear; year<=endYear; year++){
         if (isLeapYear(year)) {
             leapYears.push(year);
         }
     }
      return leapYears
    }
   const startYear = parseInt(prompt("Enter start year:"));
    const endYear=parseInt(prompt("Enter end year:"));
const leapYears=print(startYear, endYear);
const leapYearsDiv=document.getElementById("leapYears");
if (leapYears.length>0) {
    leapYearsDiv.innerHTML="<ul>";
    leapYears.forEach(year=>{
        leapYearsDiv.innerHTML+=`<li>${year}</li>`;
    });
    leapYearsDiv.innerHTML+="</ul>";
} else {
    leapYearsDiv.innerHTML = "No leap years found in given range"
}