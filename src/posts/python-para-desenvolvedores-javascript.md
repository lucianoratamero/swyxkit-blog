---
date: 2017-06-08
description: eu percebi que as poucas dificuldades que tive durante minha adaptação
  de javascript pra python (há anos) nunca foram ensinadas pra mim de uma maneira
  clara.
slug: python-para-desenvolvedores-javascript
title: Python para desenvolvedores javascript
updated_at: 2022-03-28
---
   
logo depois de ter lido [esse post](https://dev.to/underdogio/python-for-javascript-developers), eu percebi que as poucas dificuldades que tive durante minha adaptação de javascript pra python (há anos) nunca foram ensinadas pra mim de uma maneira clara.   
   
apesar de ambas as linguagens serem razoavelmente parecidas, achei interessante a ideia, então aqui vão algumas diferenças pra se ter em mente na hora de virar a chave. algumas são de Mario Pabon, o autor do post original, e algumas coisas são minhas mesmo. :)   
   
ah, só um detalhe: aqui vamos supor que você está usando python 3, sim? bem, vamos lá!   
   
* * *   
   
pra quem quiser pular pra uma parte em específico, aqui vai:   
   
*   [sintaxe](/blog/python-para-desenvolvedores-javascript#sintaxe)   
    *   [declaração de variáveis](/blog/python-para-desenvolvedores-javascript#declaração-de-variáveis)   
    *   [blocos](/blog/python-para-desenvolvedores-javascript#blocos)   
    *   [controle de fluxo](/blog/python-para-desenvolvedores-javascript#controle-de-fluxo)   
*   [tipos](/blog/python-para-desenvolvedores-javascript#tipos)   
    *   [números](/blog/python-para-desenvolvedores-javascript#números)   
    *   [listas](/blog/python-para-desenvolvedores-javascript#listas)   
    *   [strings](/blog/python-para-desenvolvedores-javascript#strings)   
    *   [dicionários](/blog/python-para-desenvolvedores-javascript#dicionários)   
    *   [None](/blog/python-para-desenvolvedores-javascript#none)   
    *   [funções](/blog/python-para-desenvolvedores-javascript#funções)   
*   [módulos](/blog/python-para-desenvolvedores-javascript#módulos)   
*   [programação orientada a objetos](/blog/python-para-desenvolvedores-javascript#programação-orientada-a-objetos)   
   
## sintaxe   
   
### declaração de variáveis   
   
para ambas as linguagens, declarar variáveis é simples.   
   
**javascript**   
   
  ```js   
 var x = 3;   
 ```   
   
**python**   
   
  ```python   
 x = 3   
 ```   
   
mais tarde vamos falar de tipos, que fazem toda a diferença entre as linguagens. só vamos deixar clara, por enquanto, uma grande diferença: **variáveis em python sempre pertencem ao contexto do seu bloco**.   
   
### blocos   
   
python tende a sempre ser mais estrito do que javascript. em python, não seguir a indentação do código pode fazer com que ele nem rode. isso se dá porque o python usa a indentação para definir blocos, no lugar das chaves do javascript.   
   
**blocos em javascript**   
   
  ```js   
 function exampleFunction () {   
   // isso é um bloco, com um contexto pras variáveis   
   var a = 5;   
 }   
 ```   
   
**blocos em python**   
   
  ```python   
 def example_function():   
# isso também é, também com seu próprio escopo   
# que é definido pelo que tá no mesmo nível de indentação   
     x = 5   
     print(x)   
     ```   
   
se a linha do `print(x)` tivesse mais um ou menos um espaço antes da chamada da função, o interpretador do python levantaria uma exceção `IndentationError`, porque a diferença de espaços criaria um bloco inválido.   
   
outro possível problema causado pelo mau uso de indentação em python é o de escopo.   
   
  ```python   
 x = "fora"   
# no escopo de fora, x = "fora"   
 def example_function():   
     x = "dentro"   
# no de dentro, x = "dentro"   
     print(x)   
# retornaria "dentro"   
 print(x)   
# retornaria "fora"   
 ```   
   
### controle de fluxo   
   
`if...else`, `while` e `for` em python são razoavelmente parecidos com javascript.   
   
### if...else   
   
**javascript**   
   
  ```js   
 if (x > 1) {   
     console.log('oi');   
 } else if (!x > 1) {   
     console.log('io');   
 } else {   
     console.log('ioi');   
 }   
```

**python**

  ```python
 if x > 1:
     print('oi')
 elif not x > 1:
     # 'elif' em vez de 'else if', 'not' em vez de '!'
     print('io')
 else:
     print('ioi')
```
   
   
### while   
   
**javascript**   
   
  ```js   
 while (x < 3){   
   x++;   
 }   
```

**python**

  ```python
 while x < 3:
     x += 1
```
   
   
### for   
   
em python, ao iterar sobre uma lista, não precisamos declarar o índice ou resgatar o objeto internamente - o objeto da vez já está implícito.   
   
**javascript**   
   
  ```js   
 var lista = [1, 2, 3];   
 for (var i=0; i < lista.length; i++){   
   var item = lista[i];   
   console.log(item); // 1; 2; 3   
 }   
 ```   
   
**python**   
   
  ```python   
 lista = [1, 2, 3]   
 for item in lista: # o item da vez ficará na variável 'item'   
     print(item) # 1; 2; 3   
```

o javascript até aceita a sintaxe de `for (item in lista)`, mas se comporta de maneira diferente, colocando na variável `item` o valor do contador do loop.

## tipos

os tipos em python são razoavelmente parecidos ao de javascript, já que você não precisa declarar os tipos para cada variável na hora da declaração (como se faz com java ou C#, por exemplo).

a grande diferença é como os tipos interagem, já que várias operações permitidas em javascript não são em python. python prefere levantar um erro em vez de fazer uma operação entre tipos que pode gerar um dado errado.

um dos exemplos mais clássicos é o da soma de números com strings:

**javascript**

```js
 var a = 5; // número inteiro;
 var b = "5"; // uma string que contém o número 5
 a + b // retornará a string "55"
```
   
   
**python**   
   
```python
 a = 5 # número inteiro
 b = "5" # uma string que contém o número 5
 a + b # 'TypeError', já que não se pode somar tipos diferentes
 # em python, devemos transformar o número em string
 # ou a string em número
 str(a) + b # string "55"
 a + int(b) # inteiro 10
```
   
   
já que tiramos essa dúvida da reta, vou dar um apanhado básico dos tipos em python.   
   
### números   
   
ao contrário de javascript, python tem vários tipos diferentes para diferentes números.   
   
*   inteiros (integer): `1`, `2`, `3`   
*   ponto flutuante (float): `4.20`, `4e420`   
*   números complexos: `4 + 20j`   
*   booleanos (boolean): `True`, `False`   
   
você pode fazer as mesmas operações em ambas as linguagens, como, por exemplo, soma, subtração, divisão, multiplicação e potenciação.   
   
### listas   
   
listas em python são bem parecidas com as de javascript, com alguns adereços a mais. elas podem conter uma mistura de tipos:   
   
  ```python   
 [4, "2", [0, "zero"]]   
 ```   
   
há também uma sintaxe especial para pegar partes de uma lista:   
   
  ```python   
 lista = [1, 2, 3, 4, 5]   
 lista[0:2] # 1, 2, 3   
 lista[3:] # 4, 5   
 lista[2, -2] # 3, 4   
# se aceitam índices negativos, pegando do final da lista   
 ```   
   
e algumas funções e métodos úteis:   
   
  ```python   
 len([1, 2, 3]) # 3   
 [1, 2, 3].reverse() # [3, 2, 1]   
 [1, 2].append(3) # [1, 2, 3], igual ao 'push' do js   
 ```   
   
para concatenar listas, é só somá-las:   
   
  ```python   
# [1, 2, 3, 4]   
 [1, 2] + [3, 4]   
 ```   
   
pra fechar, temos em python o que chamam de `list comprehension`. é uma forma de criar listas dinamicamente.   
   
  ```python   
 lista = [1, 2, 3, 4]   
 maiores_que_2 = [numero for numero in lista if numero > 2]   
# maiores_que_2 é agora [3, 4]   
 ```   
   
### strings   
   
strings em python são praticamente iguais às de javascript. você pode acessar cada caractere individualmente, mas só pode alterar o conteúdo ao reassinalar a variável.   
   
  ```python   
 nome = 'Luciano'   
 print(nome[0]) # L   
 nome[0] = 'D' # TypeError   
 ```   
   
### dicionários   
   
dicionários são listas associativas em python, muito parecidos com objetos em javascript. eles são declarados praticamente da mesma forma.   
   
  ```python   
 pessoa = {   
     'nome': 'Luciano',   
     'idade': 27   
 }   
 print(pessoa['nome']) # Luciano   
 print(pessoa['gênero']) # KeyError, gênero não foi declarado   
 ```   
   
já que em python nós preferimos levantar erros em vez de falhar silenciosamente, temos um método padrão dos dicionários para resgatar valores default no caso de eles não terem sido declarados:   
   
  ```python   
 pessoa.get('gênero', 'não-binário')   
# não achamos a chave "gênero", retornamos 'não-binário'   
 ```   
   
### None   
   
`None` é equivalente a `null` em javascript. isso significa que `None` representa a ausência de um valor e é avaliado como `false`.   
   
detalhe: não há par para `undefined` em python, já que tentar acessar algo não definido em python levanta uma exceção `NameError`.   
   
### funções   
   
assim como em javascript, funções também são objetos em python. isso significa que você pode passar funções como argumentos/callbacks ou até assinalar propriedades pra funções.   
   
  ```python   
 def func_tainha(a, other_func):   
     print(a)   
     other_func()   
    
 def another_func():   
     print('marilene')   
    
 func_tainha('olá', another_func)   
# olá   
# marilene   
    
 func_tainha.vinho = 'sinuelo'   
 print(func_tainha.vinho)   
# sinuelo   
 ```   
   
## módulos   
   
não quero falar sobre ES6 aqui, mas os módulos (pacotes) em python são bem parecidos (em sintaxe) com os módulos em javascript ES6.   
   
### definindo um módulo   
   
ao contrário de ES6, em que você tem que declarar o que você tá exportando pro seu módulo, em python você sõ precisa criar um arquivo `.py` e suas punções/classes/oquefor estão prontas pra serem importadas. basta que, na mesma pasta do seu módulo, você coloque um arquivo `__init__.py` pra que o interpretador python reconheça o módulo   
   
  ```python   
# qualquercoisa/qualquercoisa.py   
 def dizer_quelquercoisa():   
   print('qualquercoisa')   
   ```   
* * *   
  ```python   
# qualquercoisa/__init__.py   
# pode ser vazio mesmo   
 ```   
* * *   
  ```python   
# qualquercoisa/lala.py   
 import qualquercoisa   
# importando o módulo inteiro   
 qualquercoisa.dizer_quelquercoisa()   
# qualquercoisa   
    
 from qualquercoisa import dizer_quelquercoisa   
# importando apenas a função 'dizer_quelquercoisa'   
 dizer_quelquercoisa()   
# 'qualquercoisa'   
 ```   
   
ah, e pra instalar pacotes disponibilizados pela comunidade, tipo `npm`, você usa o `pip`.   
   
 ```python    
pip install django   
```

## programação orientada a objetos

em python, assim como ES6, há suporte a classes e herança entre objetos. isso é diferente da herança baseada em `prototypes` clássica do javascript.

```python 
  # você pode definir uma classe que representa qualquer animal
 class Animal:
     # qualquer variável definida aqui será uma propriedade da classe
     idade_inicial = 1
 
     def __init__(self, nome, especie='humano'):
         # aqui, declaramos que, ao criar um animal, podemos passar um nome e espécie pra ele
         # se não passarmos uma espécie, por padrão, ela será 'humano'
         # 'self' se comporta parecido com o 'this', mas sem toda a confusão de escopo
         self.nome = nome
         self.especie = especie
         self.idade = self.idade_inicial
 
     def comemorar_aniversario(self):
         # ao comemorar aniversário, acrescentamos 1 à idade
         self.idade += 1
 
     def falar(self):
         # se for um humano, ele fala besteira
         if self.especie == 'humano':
             return 'blablablawhiskassachê'
```
   
   
desse jeito, se inicializarmos um humano chamado Jorge e comemorarmos seu aniversário, teremos o seguinte:   
   
  ```python   
 jorge = Animal('Jorge')   
 jorge.idade   
# 1   
    
 jorge.comemorar_aniversario()   
 jorge.idade   
# 2   
    
 jorge.falar()   
# blablablawhiskassachê    
 ```   
   
### herança   
   
tendo como base nossa classe de animal, podemos, por exemplo, termos uma subclasse de animal chamada `Girafa`:   
   
 ```python   
 class Girafa(Animal):   
     """   
     ao passar Animal entre parênteses, herdamos tudo de Animal   
     aqui, declaramos que girafas são da espécie 'girafa'   
     e que não precisam de nome.   
     pra isso, sobrescrevemos o __init__, que inicializa uma girafa.   
     """   
     def __init__(self):   
         self.idade = self.idade_inicial   
         self.especie = 'girafa'   
   ```   
   
assim, se inicializarmos uma girafa...   
   
```python
girafa_nova = Girafa()
# não precisamos mais passar nome
girafa.idade
# 1
    
girafa.comemorar_aniversario()
girafa.idade
# 2
    
girafa.falar()
#
# isso mesmo, girafa não fala,
# então se mandarmos ela falar, não sai nada :)
```
   
   
* * *   
   
é claro que tem MUITO mais sobre python do que só isso, então se tiverem qualquer dúvida ou acharem que algo poderia ser explicado melhor, só falar nos comentários.   
   
e lembrem que a melhor forma de aprender uma linguagem é meter a mão na massa e fazer um projetinho! se não souberem por onde começar, eu recomendo fortemente o [tutorial das pyladies do Django Girls](https://tutorial.djangogirls.org/pt/), mas se não quiser aprender com desenvolvimento web, tem sempre o [python para zumbis](https://www.pycursos.com/python-para-zumbis/) do querido e fofíssimo Masanori.   
   
abraços, e até a próxima!