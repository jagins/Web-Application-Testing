const addBalls = balls =>
{
    if(balls >=4)
        balls = 0;
    else
        balls++;

    return balls;
}