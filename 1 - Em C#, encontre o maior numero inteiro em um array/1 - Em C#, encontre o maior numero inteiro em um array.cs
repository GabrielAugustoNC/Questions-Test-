public class exercice_1 {

    List<int> listaInt = new List<int>;


    // populando lista
    listaInt.Add(1);
    listaInt.Add(8);
    listaInt.Add(22);
    listaInt.Add(35);
    listaInt.Add(67);


    var maiorN = 0;
    // Percorre lista e encontra o maior
    for(var n in listaInt){
        if(maiorN == 0){
            if(n > maiorN){
                maiorN = n;
            }
        }
        else {
            maiorN = n;
        }
    }


    Console.WriteLine("Maior Numero: " + maiorN);

}