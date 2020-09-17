function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
   (dolphin == true) ? sharkSpeed=sharkSpeed/2 : null;

   let youSeconds = pontoonDistance/youSpeed;
   let sharkSeconds = sharkDistance/sharkSpeed;

   return (sharkSeconds>youSeconds) ? "Alive!" : "Shark Bait!"
 
 }