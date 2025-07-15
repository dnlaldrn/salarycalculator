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
          const regInput = document.querySelector('.regularHours').value.trim();
            const otInput = document.querySelector('.OThours').value.trim();

         if(regInput === " "&& otInput === ""){
            document.querySelector('.display').innerHTML = "Invalid Input ";
            }else{
                const regincome = calculateregHours();
                const otincome = calculateOTHours();
                const totalIncome = regincome + otincome;
                const incomesssdeducted = totalIncome *.05;
                const philhealthdeducted = ((totalIncome * 2)* .05)/2;
                const pagibigdeducted = totalIncome * .02;
                const totaldeduction = incomesssdeducted + philhealthdeducted + pagibigdeducted;
                const netIncome =totalIncome -totaldeduction;
                document.querySelector('.display').innerHTML = `
                <p>Total Income: ${totalIncome.toFixed(2)}</p>
                <p>SSS : ${incomesssdeducted.toFixed(2)}</p>
                <p> PhilHealth: ${philhealthdeducted.toFixed(2)}</p>
                <p>Pagibig : ${pagibigdeducted.toFixed(2)}</p>
                <p> Net Income: ${netIncome.toFixed(2)}</p>`
            }
        
           
     }
     deleteDisplay = ()=>{
         document.querySelector('.display').innerHTML = " ";
         document.querySelector('.regularHours').value = " ";
         document.querySelector('.OThours').value = " ";
     }
