# Clone do Spotify em Angular

Uma aplicação web moderna construída com Angular que recria a interface do Spotify, oferecendo uma experiência responsiva e intuitiva de streaming de música.

## 🚀 Funcionalidades

- Busca de artistas por nome e gênero musical
- Menu lateral responsivo
- Cabeçalho dinâmico com funcionalidade de busca
- Exibição de playlists com cards personalizados
- Interface moderna com Tailwind CSS
- Integração com Material Design e ícones
- Animações e transições ao passar o mouse
- Carregamento lazy para imagens
- Componentes de cards reutiliáaveis

## 🛠️ Tecnologias Utilizadas

- Angular 18.2.0
- Angular Material 18.2.14
- Tailwind CSS 3.2.4
- RxJS 7.8.0
- TypeScript 5.5.2

## 📋 Pré-requisitos

- Node.js (Recomendada a última versão LTS)
- npm (incluído com Node.js)
- Angular CLI 18.2.10 ou superior
- JSON Server (para simular a API)

## 💻 Instalação

1. Clone o repositório

```bash
git clone https://github.com/livbrandao/spotify-angular.git
```

2. Entre na pasta do projeto

```bash
cd spotify-angular
```

3. Instale as dependências

```bash
npm install
```

4. Inicie o JSON Server (para dados dos artistas)

```bash
json-server --watch db-artists.json --port 3000
```

## 🚀 Executando a Aplicação

### Servidor de desenvolvimento

```bash
ng serve
```

Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se você alterar qualquer arquivo fonte.

### Build de produção

```bash
ng build
```

Os arquivos de build serão armazenados no diretório `dist/`.

## 📁 Estrutura do Projeto

### Componentes

- `app-sidebar`: Componente do menu lateral
- `app-header`: Componente do cabeçalho com busca
- `app-container`: Container principal de conteúdo
- `app-footer`: Componente do rodapé com controles do player
- `artist-card`: Exibe informações individuais dos artistas com efeitos hover
- `playlist-card`: Mostra informações das playlists com cores de fundo personalizadas

### Serviços

- `ArtistsService`: Gerencia a comunicação com a API para dados dos artistas
  - GET lista de artistas
  - Busca artistas por nome ou gênero

## 🎨 Estilização

O projeto utiliza:

- Tailwind CSS para estilização utility-first
- Angular Material para ícones e componentes de UI
- Esquema de cores compatível com o design do Spotify
- Animações e transições personalizadas
- Design responsivo para diversos tamanhos de tela

## 📝 Licença

Este projeto está sob a licença MIT - veja o arquivo LICENSE para detalhes.

## 📧 Contato

Lívia - [liviatoledo27@gmail.com]

Link do Projeto: https://github.com/livbrandao/spotify-angular

## 📚 Recursos Adicionais

- [Documentação do Angular](https://angular.dev/)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Documentação do Angular Material](https://material.angular.io/)
- [Documentação do JSON Server](https://github.com/typicode/json-server)
