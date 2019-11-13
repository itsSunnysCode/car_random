import React from 'react';

const Inkoop=()=>{


    const gameStart=()=>{
       
       let moveNumber=0;
       let petrol = 30
       let distanceCovered = 0
       let i =0
       let petrolPumpPosition=[]; 
       while(i<5){
        petrolPumpPosition[i]= Math.floor(Math.random() * 101);
        i++;
       }
    petrolPumpPosition.sort();
           console.log(`game starts: 
petrol pump generated at ${petrolPumpPosition}`);    
       while(petrol!==0){
       let moveStop = Math.floor(Math.random() *  (7));
       petrol=petrol-moveStop;
       distanceCovered = distanceCovered+moveStop;


       for(let temp2=0;temp2<5;temp2++){
           if(distanceCovered===petrolPumpPosition[temp2]){
            petrol=petrol+20;

           }
       }
       if(distanceCovered>=100||petrol<=0){
        break;
    }
       moveNumber++;
       console.log(`Move ${moveNumber} - Car at ${distanceCovered}, petrol remaining ${petrol}`);
       
        }
            
    }
    return(
        <div>
        <button onClick={gameStart}>click me</button>
        </div>
    );
}
export default Inkoop;