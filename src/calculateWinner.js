function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const result = lines.filter(line => {
    const [a, b, c] = line;
  
    return (
        squares[a] && 
        squares[a] === squares[b] && 
        squares[a] === squares[c]
    );
  });

  return result.length != 0 
    ? squares[result[0][0]]
    : null;
};



export default calculateWinner;