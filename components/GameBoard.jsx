import { useState } from "react"



export default function GameBoard({onSelectSquare , board}){
    

    // const [gameBoard , setGameBoard] = useState(mat);

    // function handleSelectSquare(row , col){
    //     setGameBoard((prevBoard) => {
    //         // deep copy here refernce will not be the same
    //         const updatedBoard = [...prevBoard.map(innerVal => [...innerVal])];
    //         updatedBoard[row][col] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    return(
        <ol id="game-board">
            { board.map((row , i) => (
                <li key = {i}>               
                <ol>
                    { row.map((symbol , j)=>(
                        <li key ={j}>
                            <button onClick={()=> (onSelectSquare(i , j))} disabled={symbol != null}>{symbol}</button>
                        </li>
                    ))}
                </ol>
                </li>
 
            ))}
        </ol>
    )


    // sub optimal Code  ---> 



    // const [gameBoard , setGameBoard] = useState(mat);

    // function handleSelectSquare(row , col){
    //     setGameBoard((prevBoard) => {
    //         // deep copy here refernce will not be the same
    //         const updatedBoard = [...prevBoard.map(innerVal => [...innerVal])];
    //         updatedBoard[row][col] = activePlayerSymbol;
    //         return updatedBoard;
    //     });

    //     onSelectSquare();
    // }

    // return(
    //     <ol id="game-board">
    //         { gameBoard.map((row , i) => (
    //             <li key = {i}>               
    //             <ol>
    //                 { row.map((symbol , j)=>(
    //                     <li key ={j}>
    //                         <button onClick={()=> (handleSelectSquare(i , j))}>{symbol}</button>
    //                     </li>
    //                 ))}
    //             </ol>
    //             </li>
 
    //         ))}
    //     </ol>
    // )
}