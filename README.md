# Automação Parabank

Status: 🟡 Em andamento

Última Pipeline: 


### Sobre o projeto

- Documentação 
- Plano de Teste
- [Site](https://parabank.parasoft.com/parabank/login.htm)


### Tecnologias utilizadas 

- Node
- Cypress


### Instalação

Para instalar o projeto 

**via npm** 
```
npm install
``` 

**via yarn**
```
yarn install
```

### Abrir o cypress 

Para abrir o cypress utilize o comando 

```
npm run cy:open
```

### Arquitetura do projeto 

````
├── Cypress
    ├── download/
    ├── e2e/
    ├── fixtures/
    ├── support/
├── node_modules
├── .gitignore
├── cypress.config.js
├── package-lock.json
├── package.json
├── README.md
````

### Branchs 

Cada aula referencia estará em uma branch exemplo:

- `setUp`: comece aqui, com o setUp inicial do projeto e primeiros códigos com cypress Studio

E a branch `main` ficará o código completo e final do projeto para você ter o gabarito.

</br>

## Cenários a serem automatizados

<details>
<summary>Registrar novo usuário - QA responsável: Priscila</summary> 

```
DADO que me encontro no site parabank
QUANDO clico em register
E adiciono os dados válidos
ENTAO o usuário é registrado
E sou logado no sistema automaticamente
```
</details>

<details>
<summary>Logar usuário - QA responsável: Patricia</summary>

```
DADO que me encontro no site parabank
QUANDO adiciono os dados válidos
ENTAO sou logado no sistema automaticamente
```
</details>

<details>
<summary>Abertura de Conta - QA responsável: Beatriz</summary>

```
DADO que me encontro no site parabank
E possuo $1000,00 para abertura de nova conta
QUANDO clico em Open New Account
E adicio dados válidos
ENTAO a nova conta é aberta 
E com $1000,00 de saldo
```
</details>

<details>
<summary>Bill Pay - QA responsável: Tati</summary>

```
Sistema fora do ar para a automação
```
</details>


<details>
<summary>Request Loan - QA responsável: </summary>

```
Sistema fora do ar para a automação
```
</details>

<details>
<summary>Transfer Funds - QA responsável: William</summary>

```
Sistema fora do ar para a automação
```
</details>



</br>

## Tutoriais

**Habitalitando Cypress Studio** 

No arquivo _cypress.config.js_ adicione o seguinte código 

````
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    experimentalStudio: true,
  },
})
````

o comando `experimentalStudio: true,` indica que o cypress Studio foi habilitado

<br>


### **Referências**

[emojis](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md)
