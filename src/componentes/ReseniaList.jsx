import Resenia from "./Resenia"

const ReseniaList = ({listaresenias}) => {
    
    if(!listaresenias || listaresenias.length==0){
        return     <p>No hay reseñas</p>
    }else{
        return(
            <div className="feeback-list">
        {/*Recorrer la listaresenias*/}
        {listaresenias.map((resenia) => (
             <Resenia
             key ={resenia.id}
             resenia={resenia}/>
           )
         
        )}
      </div>
        )
    }
    

  };
  export default ReseniaList;