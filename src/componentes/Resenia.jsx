import { useState } from 'react';

const Resenia = ({resenia}) => {
  //dEFINIR ESTADOS INICIALES:
  const [rating, setRating] = useState(resenia.rating);
  const [comment, setComment] = useState(resenia.text);

  //cambiar el estado del rating
  const addNota = () => {
    setRating((prev) => {
      return prev + 1;
    });
  };

  const restNota = () => {
    setRating((prev) => {
      return prev - 1;
    });
  };
  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{comment}</div>
      <button onClick={addNota}>Agregar Nota</button>
      <br></br>
      <button onClick={restNota}>Restar Nota</button>
    </div>
  );
};

export default Resenia;