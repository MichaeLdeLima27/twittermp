# Twitter Clone - Back-end

Este é o back-end de um projeto estilo Twitter, desenvolvido com Django e Django REST Framework. A API permite funcionalidades como cadastro, login, criação de tweets, curtir/descurtir, comentar, seguir e visualizar tweets de usuários seguidos.

## Tecnologias Utilizadas

- Python 3.8
- Django
- Django REST Framework
- Poetry
- SQLite (ambiente de desenvolvimento)
- Docker (opcional)
- Pytest + Factory Boy (para testes)

### Autenticação com JWT

O sistema utiliza JWT (JSON Web Token) para autenticação. Para obter o token JWT, é necessário fazer login com o endpoint `POST /api/token/`, fornecendo o `username` e `password` do usuário.
