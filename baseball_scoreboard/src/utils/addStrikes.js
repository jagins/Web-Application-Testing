export const addStrikes = strikes =>
{
    if(strikes >= 3)
        strikes = 0;
    else
        strikes++;

    return strikes;
}