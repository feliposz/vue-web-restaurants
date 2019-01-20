Guia de restaurantes
===================

Este *Guia de restaurantes* é um projeto simples de exemplo de front-end web usando o framework **Vue.js**.

Ele utiliza:
- Básico do Vue (reatividade, métodos, filtros, diretivas como `v-for`, `v-bind`, etc.
- Templates e componentes
- Comunicação entre componentes (Event hub)
- Consulta de API externa usando `axios`
- Promises

Bibliotecas externas usadas:
- Vue.js
- Axios
- Bootstrap
- JQuery (somente para uso de componentes do Bootstrap)

----------

Estrutura de arquivos
-------------

```
.
│   README.md
│   index.html
│
├───css
│       style.css
│
└───js
        main.js
```


Arquivo    | Descrição
--------   | ---
README.md  | Este arquivo de documentação
index.html | Página principal.
/css       | Sub-diretório com a definição dos estilos.
style.css  | Estilos personalizados do projeto.
/js        | Sub-diretório com scripts.
main.js    | Script principal.

-------------

Implantação
-------------

Na estrutura atual, não há restrição para implantação bastando copiar os arquivos para o servidor desejado.

> **Uso local:**
>
> Para demonstração local, recomenda-se o uso do pacote npm `http-server`.
>
> Instalação
> 
> ```
> npm install http-server -g
> ```
> 
> Na pasta do projeto, executar:
> 
> ```
> http-server
> ```
>
> Acessar pelo browser em http://localhost:8080


-------------

Melhorias futuras:
-------------

- Usar `webpack` ou `browserify`
- Converter o projeto para usar `babel` (para ter ES2015+)
- Separar os componentes em arquivos `.vue`
- Utilizar rotas `vm-router` para tornar a navegação mais amigável
- Tratamento de exceções
