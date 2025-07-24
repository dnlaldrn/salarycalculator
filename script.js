
     calculateTotalIncome = () =>{
          let cutoff = document.querySelector('.cutoff').value;
          const regincome = document.querySelector('.regularHours').value;
          const otincome = document.querySelector('.OThours').value;
          const totalIncome = (regincome*67.5) + (otincome*84);
          const incomesssdeducted = totalIncome *.05;
          let philhealthdeducted = 0;
          const pagibigdeducted = totalIncome * .02;
          const totaldeduction = incomesssdeducted + philhealthdeducted + pagibigdeducted;
          const netIncome =totalIncome -totaldeduction;

          if(cutoff == 2){
            
            document.querySelector('.display').innerHTML = `
             <p>Total Income: ${totalIncome.toFixed(2)}</p>
              <p>SSS : ${incomesssdeducted.toFixed(2)}</p>
              <p> PhilHealth: ${philhealthdeducted.toFixed(2)}</p>
              <p>Pagibig : ${pagibigdeducted.toFixed(2)}</p>
              <p> Net Income: ${netIncome.toFixed(2)}</p>`;
          }else{
           let philhealthdeducted = (((totalIncome*.05);
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
        document.querySelector('.cutoff').value = " ";
     }
