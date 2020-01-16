export const addBalls = balls =>
{
    if(balls >=3)
        balls = 0;
    else
        balls++;

    return balls;
}