# **Pokédex Web App**

Este projeto é uma aplicação web desenvolvida com Vue 3, Vite e TypeScript que utiliza a **PokeAPI** para exibir informações detalhadas sobre os Pokémon. O aplicativo permite aos usuários pesquisar, visualizar, filtrar e navegar através da listagem de Pokémon de forma intuitiva.

## **Objetivo**

O objetivo deste projeto é simular uma Pokédex, permitindo ao usuário buscar por Pokémon, ver detalhes específicos e filtrar por tipos. A aplicação também está preparada para múltiplos idiomas.

## **Link da Aplicação**

Acesse a aplicação hospedada na Vercel: [Pokédex](https://seu-link-aqui.vercel.app)

## **Tecnologias Utilizadas**

- **Vue 3**: Framework JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento front-end.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **PokeAPI**: API pública para obtenção de dados sobre Pokémon.
- **AOS**: Biblioteca de animação on-scroll.
- **SASS**: Pre-processador de CSS para criação de estilos.
- **i18n**: Biblioteca para gerenciamento de internacionalização, permitindo suporte a múltiplos idiomas.

## **Funcionalidades**

- **Listagem de Pokémon**: Exibe uma lista paginada de Pokémon com limite configurável.
- **Pesquisa por Nome ou Número**: Permite a busca de Pokémon pelo nome ou número do Pokédex.
- **Filtro por Tipo**: Filtra a lista de Pokémon de acordo com o tipo selecionado.
- **Paginação**: Navegação através das páginas de Pokémon.
- **Listagem de Favoritos**: Usuários podem salvar Pokémon como favoritos para fácil acesso.
- **Limite de Retorno**: O usuário pode definir o limite de Pokémon retornados pela API.
- **Troca de Tema**: Possibilidade de alterar o tema da aplicação.
- **Detalhes de Pokémon**: Visualização de informações detalhadas sobre um Pokémon específico.
- **Suporte a Múltiplos Idiomas**: Suporta a alteração de idioma, com traduções em português e inglês.

## **Instalação**

### **Pré-requisitos**

- Node.js
- NPM ou Yarn

### **Passos para rodar o projeto**

1. Clone o repositório:
   ```bash
   git clone https://github.com/HernanySimao/site-pokedex/tree/main
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd pokedex
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o projeto em ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação no navegador através do endereço:
   ```
   http://localhost:3000
   ```

## **Configuração de Variáveis de Ambiente**

No arquivo `.env`, adicione a URL base da PokeAPI:

```
VITE_API_URL=https://pokeapi.co/api/v2/
VITE_URL_ASSET=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/
```
