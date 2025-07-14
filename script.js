 calculateregHours = () =>{
        const regularHours = document.querySelector('.regularHours').value
        const convertedRegHours = regularHours * 67.5;
        return convertedRegHours;
        
     }
      calculateOTHours = () =>{
        const OTHours = document.querySelector('.OThours').value
        const convertedOTHours = OTHours * 84;
        return convertedOTHours;
        
     }
     calculateTotalIncome = () =>{
         if(document.querySelector('.regularHours').value == " " && document.querySelector('.OThours').value ==" "){
                      document.querySelector('.display').innerHTML = "Invalid Input ";
            }
        const regincome = calculateregHours();
        const otincome = calculateOTHours();
        const totalIncome = regincome + otincome;
        const incomesssdeducted = totalIncome *.05;
        const philhealthdeducted = ((totalIncome * 2)* .05)/2;
        const pagibigdeducted = totalIncome * .02;
        const totaldeduction = incomesssdeducted + pagibigdeducted + pagibigdeducted;
        const netIncome =totalIncome -totaldeduction;
        document.querySelector('.display').innerHTML = `
        <p>Total Income: ${totalIncome.toFixed(2)}</p>
         <p>SSS : ${incomesssdeducted.toFixed(2)}</p>
         <p> PhilHealth: ${philhealthdeducted.toFixed(2)}</p>
         <p>Pagibig : ${pagibigdeducted.toFixed(2)}</p>
         <p> Net Income: ${netIncome.toFixed(2)}</p>`
           
     }
     deleteDisplay = ()=>{
         document.querySelector('.display').innerHTML = " ";
         document.querySelector('.regularHours').value = " ";
         document.querySelector('.OThours').value = " ";
     }