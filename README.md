# Trilha JS Developer - Pokedex

Este projeto é um simulador de Pokedex que consome a [PokeAPI](https://pokeapi.co/). Ele foi desenvolvido como parte do desafio prático do Bootcamp Santander.

## 🚀 Novidade: Página de Detalhes
A principal implementação recente foi a criação da **Página de Detalhes**, permitindo que o usuário clique em um Pokémon da listagem e visualize informações aprofundadas sobre ele em uma interface moderna e responsiva.

### ✨ Funcionalidades
- **Listagem Dinâmica:** Busca inicial dos Pokémon com paginação.
- **Visualização de Detalhes:** Layout inspirado no design mobile clássico da Pokedex.
- **Cores Adaptativas:** O fundo da página muda de cor de acordo com o tipo principal do Pokémon (ex: Verde para Grass, Fogo para Fire).
- **Informações Técnicas:** Exibição de peso, altura, habilidades e dados de cruzamento (Breeding).
- **Cálculo de Gênero:** Lógica implementada para converter os dados da API em porcentagens de Macho/Fêmea.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Estruturação semântica.
* **CSS3:** Layouts com Flexbox e posicionamento absoluto para efeitos visuais.
* **JavaScript (ES6+):** - Consumo de API Assíncrona (`fetch`, `async/await`).
  - Manipulação de DOM para renderização dinâmica.
  - Uso de `URLSearchParams` para navegação entre páginas.
