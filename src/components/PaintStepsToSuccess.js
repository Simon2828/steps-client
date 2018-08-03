import React from 'react';


let paintbrushes = [process.env.PUBLIC_URL + '/red-brush.png', process.env.PUBLIC_URL + '/green-brush.png', process.env.PUBLIC_URL + '/blue-brush.png', process.env.PUBLIC_URL + '/orange-brush.png', process.env.PUBLIC_URL + '/brown-brush.png', process.env.PUBLIC_URL + '/purple-brush.png']

const PaintStepsToSuccess = ({stepsToSuccess, onClick, index, movePaintbrush, clicked}) => {
 return (
     <div className={`steps photoSteps`} onClick={onClick}>{stepsToSuccess}
     <img className={`clicked${clicked} brushColor${index}`} onClick={movePaintbrush.bind(this, index)} src={paintbrushes[index]} alt='paintbrush'/>
     </div>

 )
 
}

export default PaintStepsToSuccess;