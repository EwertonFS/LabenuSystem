# LabenuSystem

Projeto que representa o basico de uma instituição de ensino.

## Requesitos

**Criar Três entidades**:

- **Turma**
**`id`**: identificador único gerado pela própria aplicação

`**nome**`: nome da turma

`**docentes**`: lista de ids de docentes dessa turma

- essas ids devem existir na tabela de docentes

`**estudantes**`: lista de ids de estudantes dessa turma

- essas ids devem existir na tabela de estudantes

**`modulo`**: módulo atual da turma

- pode assumir um valor entre 1 a 6 nas turmas ativas, ou `**0**`, indicando que as aulas dessa turma ainda não começaram
- deve iniciar como **`0`**

**`hobbies`**: uma lista de hobbies relacionados à pessoa (passatempos)

- **Estudantes**
  **`id`**: identificador único gerado pela própria aplicação

`**nome**`: nome da pessoa

`**email**`: email da pessoa

`**data_nasc**`: data de nascimento no formato DD/MM/AAAA

exemplo: `21/03/1999`

**`turma_id`**: id da turma da pessoa

- esse id deve existir na _tabela de turmas_

**`hobbies`**: uma lista de hobbies relacionados à pessoa (passatempos)

**Docente**

    **`id`**: identificador único gerado pela própria aplicação

`**nome**`: nome da pessoa

`**email**`: email da pessoa

`**data_nasc**`: data de nascimento no formato DD/MM/AAAA

exemplo: "21/03/1999"

**`turma_id`**: id da turma que essa pessoa é responsável

- esse id deve existir na *tabela de turmas*

`**especialidades**`: uma lista de especialidades relacionadas à pessoa


**Funcionalidades**

+ **criar turma**
    + Para criar uma turma, os dados enviados ao banco precisam ser uma instância de classe Turma
+ **Buscar turmas ativas;**
+ **Mudar modulo da turma**
   Para criar uma turma, os dados enviados ao banco precisam ser uma instância de classe Turma
+ **Criar estudante;**
   Para criar um estudante, os dados enviados ao banco precisam ser uma instância de classe Estudante;
+ **Buscar estudantes atravez do nome**
    + Para criar uma turma, os dados enviados ao banco precisam ser uma instância de classe Turma

+   **Mudar estudante de turma** 

+ **Criar Doecente**    
    Buscar todas as pessoas docentes
+ **Buscar todas as pessoas docentes**
+ **Mudar docente de turma**

## Organograma 

 ![Projeto LabenuSystem](https://user-images.githubusercontent.com/94709800/210081881-1df30137-b022-46a1-9c6b-fc645e45b5ef.png)
### Tecnologia
* typescript
* Request.rest
### Bibliotecas
    *cors 
    *dotenv
    *express
    *knex
    *mysql


