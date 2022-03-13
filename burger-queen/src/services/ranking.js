export const functionRanking=(resultOrder)=>{
    const unicosElementos = [];
    const almacenadorDeVecesRepetidas = [];
    let contador = 1;

    for (let i = 0; i < resultOrder.length; i++) {
      if (resultOrder[i] === resultOrder[i + 1]) {
        contador++;
      } else {
        almacenadorDeVecesRepetidas.push(contador);
        unicosElementos.push(resultOrder[i]);
        contador = 1;
      }
    }

    const obj = [];
    for (let j = 0; j < unicosElementos.length; j++) {
      console.log(
        "el valor " +
          unicosElementos[j] +
          " se repite " +
          almacenadorDeVecesRepetidas[j]
      );
      obj.push({
        nombre: unicosElementos[j],
        numero: almacenadorDeVecesRepetidas[j],
      });
    }
 
    return obj.sort((a, b) => b.numero - a.numero);
}