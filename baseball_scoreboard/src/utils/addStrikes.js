export const addStrikes = (strikes, foul) =>
{
   if(foul)
   {
       strikes++;
       if(strikes > 2)
       {
           strikes = 2;
       }
   }
   else
   {
       strikes++
       if(strikes > 3)
       {
           strikes = 0;
       }
   }

    return strikes;
}