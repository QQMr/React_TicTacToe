
const winningMatrix = {
    0: [[1,2],[3,6],[4,8]],
    1: [[0,2],[4,7]],
    2: [[0,1],[5,8],[4,6]],
    3: [[0,6],[4,5]],
    4: [[2,6],[3,5],[1,7],[0,8]],
    5: [[3,4],[2,8]],
    6: [[7,8],[0,3],[2,4]],
    7: [[6,8],[1,4]],
    8: [[6,7],[2,5],[0,4]]
  };
export  const calculateWinner = (newCellValues, cellIndex) =>
{
    const compareArrays = winningMatrix[cellIndex]

    let hasResult =false;
    let winner = undefined;
    let winningComnibation = [];
    for ( let i=0; i< compareArrays.length;i++ )
    {
        
       
        let compareArray= compareArrays[i]
        let index1 = compareArray[0]; let index2 = compareArray[1]; 
        if( newCellValues[index1] === newCellValues[cellIndex] &&
            newCellValues[index2] === newCellValues[cellIndex]  )
        {
            hasResult = true;
            winner = newCellValues[cellIndex];
            winningComnibation = [...compareArray,cellIndex]
            break;
        }
    }
    
    let remainBlockCount = newCellValues.filter(x => x==="").length;

    if( remainBlockCount === 0 )
    {
        hasResult = true;
    }

    return {
          hasResult: hasResult,
          winner: winner,
          winningComnibation: winningComnibation
      };
      
} 
  