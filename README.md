  Arrays são estruturas de dados fundamentais em JavaScript, que armazenam e manipulam conjuntos de valores. O JavaScript oferece diversos métodos úteis para arrays, que facilitam a execução de diversas tarefas, como adicionar, remover ou modificar itens, o que torna o código mais simplificado e eficiente.

   A seguir, vamos contextualizar as funcionalidades fundamentais que estão presentes na prova conteceitual deste repositório.

1° Método: sort()

  O objetivo desta interação é ordenar as palavras contidas em uma lista alfabeticamente. Para completar esta tarefa, apenas o comando no seguinte formato realizou o que desejavamos:

```nomeDaLista.sort();```

2° Método: filter()

  Neste segundo caso, o método filter() realizou a função de apresentar somente os números ora pares, ora ímpares, de uma lista na tela:

  ```nomeDaLista.filter(elemento => elemento%2 == 0);```
  ```nomeDalista.filter(elemento => elemento%2 !==0);```

  O termo "elemento" representa cada número contido na lista, o símbolo "%" realiza uma dívisão e apresenta como resultado o resto desta divisão, em seguida comparamos o valor obtido com 0. Para os números pares, o resultado desta operação é "True" e o filtro seleciona somente estes valores, e o contrário ocorre com os ímpares, na qual o resultado obtido é "False".

3° Método: map() 

  O método map() é capaz de realizar quaisquer atividades sobre os elementos de uma lista a partir de uma função "function". Utilizamos este método para mutiplicar o valor "10" por todos os elementos da lista. A função criada apenas realiza a atividade de multiplicar, e para usá-la, "nomeDaLista.map(nomeDaFuncao);" foi o comando necessário para concluir a tarefa.

4° Método: reduce() 

  O método reduce() realiza uma atividade com todos os elementos de uma lista entre eles, para isto também utilizamos uma função a qual  neste caso, aplicava a soma total dos elementos. Para utilizá-la, o comando seguinte foi dado:

  ```nomeDaLista.reduce(nomeDaFuncao, 0);```

O Operador Spread:

  Na prova conceitual, criamos diversos botões para exibir os resultados dos métodos na tela, mas desejavamos retornar a exibição da lista inicial na tela novamente. Para isto, clonamos as listas em uma nova com o operador Spread, e então exibimos a lista resultante desta ação com o botão "Original".
