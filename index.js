// Your code here
function mapToNegativize(sourceArray)
{
    let targetArray = []
    for (let i=0; i < sourceArray.length; i++)
    {
        targetArray.push(sourceArray[i] * -1);
    }
    return targetArray;
}

function mapToNoChange(sourceArray)
{
    const targetArray = [...sourceArray];
    return targetArray;
}
function mapToDouble(sourceArray)
{
    let targetArray = []
    for (let i=0; i < sourceArray.length; i++)
    {
        targetArray.push(sourceArray[i] * 2);
    }
    return targetArray;
}
function mapToSquare(sourceArray)
{
    let targetArray = []
    for (let i=0; i < sourceArray.length; i++)
    {
        targetArray.push(sourceArray[i] * sourceArray[i]);
    }
    return targetArray;
}

function reduceToTotal(sourceArray, startingPoint = 0)
{
    let total = startingPoint;
    for (let i=0; i < sourceArray.length; i++)
    {
        total +=  sourceArray[i]
    }
    return total;

}
function reduceToAllTrue(sourceArray)
{
    let allTrue = true;
    let i = 0;
    while (i < sourceArray.length && allTrue === true)
    {
        if (!sourceArray[i])   
        {
            allTrue = false;  
        }
        i++;
    }
    return allTrue;
}
function reduceToAnyTrue(sourceArray)
{
    let anyTrue = false;
    let i = 0;
    while (i < sourceArray.length && anyTrue === false)
    {
        if (sourceArray[i] === true)   
        {
            anyTrue = true;  
        }
        i++;
    }
    return anyTrue;
}