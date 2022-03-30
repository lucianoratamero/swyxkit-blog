---
date: 2016-02-14
description: 'hoje eu tava conversando com uns amigos sobre git e github e percebemos
  um problema: não temos atualmente um lugar com conteúdo sobre os dois em português,
  principalmente para leigos ou iniciantes. depois de pegar com o pessoal uns pontos
  importantes, decidi fazer alguns posts sobre o assunto, para servir de referência.
  aí vamos nós!'
slug: git-e-github-parte-1-o-que-sao-e-como-usar
title: 'Git e github parte 1: o que são e como usar'
updated_at: 2022-03-28
---
   
![Logos do Git e do Github](/blog/assets/git-and-github-logos.png)   
   
hoje eu tava conversando com uns amigos sobre git e github e percebemos um problema: não temos atualmente um lugar com conteúdo sobre os dois em português, principalmente para leigos ou iniciantes. depois de pegar com o pessoal uns pontos importantes, decidi fazer alguns posts sobre o assunto, para servir de referência. aí vamos nós o/   
   
* * *   
   
### o que é o git?   
   
![Logo do Git](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAFVBMVEVHcEwiCgTvTCexOBzZRSO4Ox7zTynbeInxAAAABnRSTlMAIeU2o2sMCn73AAADgElEQVRo3u3azXLiMAwHcFhgz85Q9g5dcqad2Z4LQzlDt7MPkAa//yOUj3w4tiRLtqan9bGlf34xjqWYjkbfO+Yfb09KUYvS2uqkEjU52MuoNxpZz/Y2HjVY5T2r2qixNGAtSwPWsfJhPSsf5rByYS4rFzZg5cGGrDyYx8qB+awcWMDKgB3CrGTY1OrBxpqwh/8w9to6qsEm5VkNdlnyWrDrnagFu92JOrD7BqEDazYIDVi7b2nAun0rH9Zvpy1sv98lwpzt9A4rLuMjCebu8ufup8V7Cmywyx/RQvIoZLkwv5JwYN6f9LCZeMb8SzmjZSkOe8Y//H9CWFCqa9P97odwjQWl2smayhZ/2EFQWTQs7CCoLBIWsmxNtQQUDGhsyCwCBrDca/wp2ccAlq2OSW0PxLL2NamIQ6zBO/M3WJjlThgfBrOs3cphCGvwRMuFYSxr10YIQ1nNfjgWwHCWtdczgCm/VlKsexa/iFOsexa7iJOsJosLI1lNFhNGs9osHoxmtVksWITVZbWw1W6FwiKsLquBLU7Fnz0Ci7H6rKaIj81ojrQ9MVafFW17oiwnK9b2PFh+lgvzXrSEWg4yC297rsVvXEqy7AZdlCa0RrJOaIl7Dds9Oqsq0D5xC1dQPKvGs5biLIOusKURXiOVJZ17JwuYL9maqPCsk3St4mvi9gmL7iGnI3jxHgSM8N629hO7h7ZGuOc4E+ZNV7Pw+Huhe5EvEEuwRzurYlZCLH7taNoeqLJtjbCmNeP302hxsDCLW2uJ0bOYPQA+HBavN2GyWD0Tk8Xp5dgsRo/JZtGwSJbPImF0VsAiYXRWyCJg64J8LCkEDzF1Yai2A2KhsG2BnuZjLAzWvXgqYCGwZftisGAhLATWv/FBwAJhzpervwQs+KyjQM+GSJb4DIZgSc+GSBZ9ZjUTsaCzNOI8h2aFMOIaIyzga0L8bCjGCmFH7OwxygphfZNUSlkB7IxMF4MVwLrHzHc5C/vCd1LKWeGMnejGRgSr/obPsUwWsMb2+5VNYzE6WDaL0cHyWVGYgBWFSVgRmIgVgclYJEzIImFSFgETswiYnIXCElgoLIWFwJJY0bYnG5bIAmGpLKi7SGUBsHRWAMtgBbAclgfLYnmwPNYAlskawHJZDiyb5cDyWR1MgdXBNFjNU+hag3UN263e5kYn6/rPGFpRZqSVxB9fcIijm0aqgvAAAAAASUVORK5CYII=)   
   
[git](https://git-scm.com/) é uma **ferramenta para versionamento de arquivos**.   
   
um exemplo: digamos que você queira escrever um poema pro seu amorzinho e tenha várias ideias. você escreve um verso, escreve outro e pronto, taí seu poema, o `amorzinho.txt`. você manda o arquivo pro seu amorzinho, que fica apaixonado. depois de alguns dias, você tem uma ideia nova, volta no texto, reescreve um verso e manda pro seu amorzinho de novo, esperando coraçõezinhos de carinho. mas seu amorzinho diz "a versão antiga era tão mais bonita... tem como me mandar a antiga?". mas, oh!, você esqueceu como o texto era e não tem mais salvo em lugar nenhum! aí que entra o git.   
   
o git serve para que você possa criar uma linha do tempo com diferentes pontos das alterações feitas. assim, você consegue manter o histórico das alterações de um mesmo arquivo ou arquivos ao longo do tempo.   
   
nem preciso dizer o quanto isso é **crucial** para projetos de software, já que esses projetos exigem que você e sua equipe criem novas funcionalidades nos mesmos arquivos, com uma versão antiga salva pro caso da nova dar problema. vou explicar melhor **como** ele funciona daqui a pouco, mas, antes, tenho que explicar o que é o github.   
   
### o que é o github?   
   
![Logo do Github](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACTBAMAAACe4v1iAAAAG1BMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABp4cHsAAAACHRSTlMAGglFMd53sKfKzJMAAAXrSURBVGjevVpLc+JGEJbGD3zUCLzmKMllr4+mpCV7jIKSytXlxMsxLrxZjrvlF0cTLDQ/OyCENO/pEdTOwVXG1qeenn58/Q2O8zMXwuUKdkcaPpNqfXlwUHuDnMsaqIK7Ri3NO5gRYd1dt7HN/USk69GzhxoTxSp8y30eK6EIya+tTDsjupX/4+0LarXuwdu8JMY1AIIdm6FInga7nSBzmi4Ea0pAaxGZofoEuH4E+3BWtYwuG8OxCv0uUZ9YrBttyB4Qq6XLTDS1w3r31VgdYrk04T+zxVr6ezNLneRoZo+lMqyFWUrDZm2wFv6O2WM6SvS5HdZ/EsMO20GRHItYJy2xyE2wS4EwhQXl+ddnI27++qypY02xKeJsYAiP226SNb+98aWHsnmwYlu/6KDiUYbDxvYiVW5xngYRxh/U5fQ+wTiiQ4jbJFVPH1eHjMLepcJpeZxgn31i7qlOMS7PJcR/KDaY4LLOX6hOks6fB6+iqSWreBnFSZal2SiOv5Z/TSrm2lHl0RX1h8Tbct5p8e8gS9IN98W9tDsc38ZbEky//oen6NW1J0OvF6fY96MwiqIwDDHO0m7qS3KOLhYu7ZCGfa+eXvsmCNY8ePUz8jH2JVHE5GRHwWAiPqKjSBaRjMP69myIxXr3pBU1Tx17rLl067S/4FiNw47bYLnySn1lR4VkdfjJk9I3IEfuyKs+m8UPMPJ+xBbX32Q7l9Vv2TrheLWUdM19EBbXAqsTY60lf8GwOAZZpfcVV6BgWOecBZ6kYb8PYL53pzKKyDadR2B8oQsZR2EPpOcD8xFLqAAbEkvgFgXqh8VsvIWWCX4WKDOSTYYJdIuO85F5sGwTTHjlGXz8RWJ2M8mwgA6sgsPKAGNCdQF2Fz+lvPl8YtlgsWlUBuusRTJu7DoRqg5TvRILLDYClikf9oc2ksglG+Q8VtIaqxgI/cQG65zFClis3CK8uIK87vc7YIV7xHL5vrovu9bdYwesQy0WscI6/3lYqQ1WV48VBm3jXsTq2cT9sTYm7PKxo43VhpNZ0yYRa26DxdTCYoWFwMqRvkGu64TTGotVKZdrrLFQaVv1tLKuzkxqA4jhb6yYtk0ilpuW3bDfhkWL3HSO+S5nExR9keZeAFU7g8b15AvUZ92a2riexJ4ox4EvlbixoHT0gY2YqxamNlWBtHPYjOO+gUQnBEYYt50yhQThGLhJbovvm+T7k9N+QGmEeBkrlap7IMOu+KsxX3qFA8pvXjKqSGBI7A3jxfmaywu6lPGOS5Cbi+3pCypt/mtgEw/lpLh5IuiDBFjtTUY9RlXZXSTDul7nmquMA4n6V49RVazM46Rb50B+L7+aRY5U4qz7vTurZiGMs+add9Lq05VKr80YtZ24cRRh+oSKCVuAEB4qxM1Fw4+O6pkZ4amaQ6kvHiZYIGXfvcD9oHifVv+mh/TtP4WrLBgzRx1AbsjoIR1dNdmD6KztYp2+IX/lRypGKea45OiYq3IXXYsjSvyiaIIwMcvv29gh3f3c8BzKKzepoWpVQc6+8ozaZKgWGC7kcncqH0dWm3SPlJKTFCvnhuFabFqfJJ6pmLD0PuqNHzrPKL0o3CRdcS+0NynWhPdqMG4uL1CYfnt9ibsJhtzBFoIy5fapyQPhXpxlGAeBdmJUim/ndONAPsahpBxGslMUa3A0BTBpJDFLImmgM6bMICjWRDbabQuETl8VsZZSpSU6NQvSIpZCqvTr7uiDsfJM3v3qsMgn255jxLpRCS1eU1Lzl+G353WZ1WMV56qZJzwlBh7MYz0OVO5AeGyHtUzUrNs9M3xzA/GxpSFE4dQGa5HoKEzUtcGK9WoG63491pNBXGQ5gBZrEZvGHbc7hmEVo9RIa8MODCtOzcMOwr9DsCYJZKCjwNRYTwkGjTqh/9WE9QjZYXW3+kmlhlWXQWCoFVjvVIf13QLKCUI8FDlHdSmUx6PURqlZWdZ9/jIRi9Px33dJgq2g1pZlmVicUNgbZZZQzuarpgHwU/OKLD7d+/ofD2muydODhT0AAAAASUVORK5CYII=)   
   
[github](https://github.com/) é só um **site** no qual você pode fazer **upload de projetos git**.   
   
o github (palavra que seria traduzida como "agregador de gits") é o site mais conhecido de hospedagem de projetos git. ele serve para que você e sua equipe possam manter as versões do projeto em que trabalham em um lugar centralizado, na internet, acessível a quem pertence ao projeto.   
   
além de hospedar projetos git, o github dá visibilidade da linha do tempo de diferentes versões do projeto, provê ferramentas de métricas (como quais usuários alteraram mais o projeto, quando alteraram, o que alteraram, etc), gerência de problemas relatados (_tickets_ ou _issues_), dentre outras. vou detalhar um pouco melhor daqui a pouco.   
   
**lembrem-se:**   
   
a diferença entre git e github é que **o git é só uma ferramenta para versionar projetos**, enquanto **o github é o site no qual você colocará esses projetos versionados**. uma analogia válida seria que o git é seu pincel e tintas enquanto o github é um museu.   
   
### beleza, mas como o git funciona?   
   
vou tentar explicar conceitos básicos, mas não vou fazer um tutorial de como usar a ferramenta, porque [tem](https://www.atlassian.com/git/tutorials/) [vários](https://try.github.io/levels/1/challenges/1) [por](https://rogerdudler.github.io/git-guide/) [aí](https://git-scm.com/book/pt-br/v1/Primeiros-passos-No%C3%A7%C3%B5es-B%C3%A1sicas-de-Git).   
   
bem, digamos que você tenha uma pasta com seus textos, ok? seria muito legal saber, ao longo do tempo, como foi sua evolução como escritor, ou seja, quais textos foram adicionados, removidos ou alterados. você decide começar a usar o git na pasta de textos e quer salvar o estado atual da pasta.   
   
pra isso, você cria um **commit** inicial.   
   
um **commit** é um documento que descreve uma alteração, um ponto na linha do tempo do projeto. ele é como um registro de uma alteração no projeto. essa alteração é salva com seu nome, seu email, data da alteração, suas alterações na pasta e uma descrição da alteração, que você mesmo escreve.   
   
![Git commit](/blog/assets/commit.png)   
então, na hora que você coloca os textos na pasta pela primeira vez, você cria um commit com a descrição "adiciona os textos que tenho agora", seleciona todos os arquivos e pronto, você tem um ponto na linha do tempo!   
   
### ok, mas agora quero usar o github pra salvar meus textos na nuvem? **comofas**   
   
pra isso, você cria uma conta no github e cria o que chamamos de um **repositório**.   
   
na linguagem do povo de computação, **repositórios** são **locais nos quais colocamos arquivos na internet**. eles servem para que qualquer um consiga **repor** o código de um projeto no seu computador, caso você não tenha ele salvo. isso significa que, quando você for colocar seu projeto no github, você primeiro precisa criar um repositório lá.   
   
com o repositório criado no github, você só precisa configurar **onde** está seu repositório e **empurrar** as **alterações** pra lá. ou seja, você define a **origem** do repositório e faz um **push** dos **commits** pra lá.   
   
![git push](/blog/assets/git-push.png)   
   
### legal, agora tenho os meus textos salvos no github. que que eu faço com isso?   
   
agora, com os textos lá, você pode fazer várias coisas. vou enumerar algumas, as mais básicas e úteis. :)   
   
#### clonagem de repositórios   
   
digamos que você foi passar o fim de ano na casa dos seus pais e você quer alterar algum texto. você sabe que tem todos eles no seu computador, mas você (sua anta) esqueceu de trazê-lo. você até pode copiar os textos direto do site do github pro computador da sua mãe, mas isso significa que, se você quiser salvar a nova versão lá, você vai ter que criar **outro** repositório. relaxa, pra isso serve a clonagem de repositórios.   
   
![git clone](/blog/assets/git-clone.png)   
   
**clonar** um repositório significa **baixar o projeto git inteiro, direto da origem, pro seu computador**. isso quer dizer que **todas as alterações**, de **toda a linha do tempo**, estão agora no seu computador. assim, ao você clonar um repositório, você pode simplesmente **criar novos commits** e **dar push** das novas alterações.   
   
isso permite que uma equipe possa fazer alterações no projeto, cada um em seu computador, e possa sincronizar essas alterações através de **pushs (empurrões)** e **pulls (puxadas)** de **commits (alterações)** de um mesmo **repositório (projeto)**. é assim que uma equipe de software trabalha hoje em dia. :)   
   
#### forks de repositórios   
   
ok, digamos que seu amigo tem um amorzinho também e quer escrever aquele poema lindo, mas não tem muita criatividade. você diz pra ele "cara, pode usar o amorzinho.txt, mas tem que dar uma alterada, senão vai pegar mal". você não quer, no entanto, que seu amiguinho use seu repositório, porque, né, é seu, com seus textos. o que seu amigo pode fazer pra ter a versão dele dos seus textos é criar o que chamamos de **fork**.   
   
![git fork](/blog/assets/git-fork.png)   
   
um **fork** é um repositório criado a partir de outro. tudo nele é literalmente igual, desde o conteúdo dos arquivos até os commits salvos; a única diferença é que **pertence a um usuário diferente**.   
   
no entanto, a utilidade de um fork só se revela totalmente quando começamos a falar sobre **issues e pull requests**.   
   
#### issues e pull requests   
   
seu amigo, ao ler o seu poema `amorzinho.txt`, percebe que você escreveu errado o nome do seu amorzinho. ele quer te avisar que isso precisa ser corrigido, porque isso é um **problema**, uma **issue**.   
   
uma **issue** é um relatório de um problema que precisa ser corrigido. imaginemos que seu site, por exemplo, tem um link quebrado. qualquer um pode **abrir uma issue** no seu **repositório no github** dizendo que o link da página tal está quebrado.   
   
o problema é que você, mantenedor do projeto, tá extremamente ocupado dando aulas pro seu amigo de como escrever um poema romântico. você vai lá e responde pro cara, na própria issue, que você tá enrolado demais, mas que ficaria muito agradecido caso o cara pudesse corrigir esse problema pra você.   
   
o cara é esperto: ele cria um **fork** do repositório, localiza o arquivo problemático, corrige o link, salva, **cria um commit**, **faz um push** das alterações **pro fork dele**, tudo certo. só um detalhe: a correção **precisa ser misturada com o seu** repositório**. pra isso, ele cria um** pull request**, ou seja, um** pedido de empurrão de alterações\*\*.   
   
nesse pull request, constam os **commits** feitos, os **arquivos alterados** e uma descrição da correção. mas digamos que o cara esqueceu de alterar em outro lugar; você comenta no pull request dizendo que precisa alterar no outro lugar.   
   
![git pull request](/blog/assets/git-pull-request.png)   
   
esse detalhe deixa claro que **pull requests também são issues**. ambos são **discussões sobre um problema**. mas, claro, **issues não são necessariamente pull requests**, porque **pull requests têm como objetivo a correção de uma ou mais issues**.   
   
### ufa. tá tenso. mas ok, vamo lá, mais alguma coisa?   
   
só mais uma, juro, tá acabando! digamos que você e seu amigo querem fazer diferentes versões de um mesmo poema num mesmo repositório. se você alterar e fizer um commit, seu amigo vai acabar fazendo outro commit por cima do seu, e isso não é legal. o que você pode fazer é **criar uma bifurcação no repositório** e dizer pro seu amigo que o seu branch é o seu e o dele é o dele. assim, enquanto você faz commits em uma bifurcação, seu amigo faz em outra, sem que uma interfira na outra. isso significa que, agora, seu projeto tem **dois branchs** (tecnicamente, três, porque tem o branch base, né).   
   
![git branch](/blog/assets/git-branch.png)   
   
**branchs** são **bifurcações ou ramificações** dentro de um projeto git. eles servem para que tenhamos diferentes versões baseadas em um mesmo ponto do tempo. são usados para que a equipe se organize, para que um desenvolvedor faça a correção do link em um branch, enquanto outro desenvolvedor continua commitando em outro branch, sem interferirem um no processo do outro.   
   
### tl;dr (resumo)   
   
bem, falei até demais, mas acho que valeu a pena. vamos resumir alguns termos então.   
   
#### git   
   
**git** é um **programa**, uma **ferramenta** para versionamento de arquivos. serve para que você tenha uma linha do tempo de alterações de uma pasta, de um projeto.   
   
#### commit   
   
um **commit** é um ponto da linha do tempo de um projeto git. ele descreve as alterações feitas num ponto do tempo, criando um **snapshot** do projeto.   
   
#### repositório   
   
um **repositório** é um **local na internet** onde podemos colocar nosso projeto git.   
   
#### github   
   
o **github** é o site mais famoso de hospedagem de repositórios.   
   
#### clonagem   
   
a **clonagem** de repositórios é a ação que cria no seu computador local uma cópia de um projeto git ligada diretamente a um repositório. permite que você possa rapidamente criar um novo commit e empurrar as alterações diretamente para seu repositório.   
   
#### push e pull   
   
**push** e **pull** são as ações mais feitas para se sincronizar o estado de um projeto git. com o **push** você **empurra** os commits feitos localmente e com o **pull** você pega as alterações que estão no repositório.   
   
#### forks   
   
**forks** são repositórios criados a partir de outro. servem para que um usuário possa ter sua própria cópia de um repositório, para que faça suas próprias alterações.   
   
#### issues   
   
**issues** são tickets, relatos de problemas de um projeto. permitem discutir um bug, propor uma nova funcionalidade, etc.   
   
#### pull requests   
   
**pull requests** são **issues\* que contém** commits**que solucionam** issues**ou** adicionam funcionalidades\*\*. também servem para discutir problemas, soluções e também para revisar alterações feitas.   
   
#### branchs   
   
**branchs** são **bifurcações** em um projeto git. servem para que pessoas possam trabalhar em paralelo em um mesmo projeto sem medo de sobrescrever ou alterar algo que outra pessoa está fazendo.   
   
### acho que é isso então   
   
é, falei aqui sobre alguns aspectos básicos do git, mas muita, **muita** coisa ficou de fora. pra quem é leigo, acho que tá tranquilo parar por aqui, mas pros programadores iniciantes, pessoas que querem se envolver na área ou curiosos, tô preparando uma parte 2, com conceitos um pouco mais avançados.   
   
enquanto isso, discutam nos comentários sobre o que ficou confuso ou o que pode melhorar! é isso aí, pessoal. até mais o/