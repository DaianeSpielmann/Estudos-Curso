- **O que é git?**
  - Sistema de controle para armazenar projetos.
- **O que é GitHub?**
  - Plataforma de armazenamento de repositórios git.
- **Git init**
  - Inicia um repositório.
- **Git status**
  - Mostra o status do projeto (mostra a branch atual, commits pendentes, arquivos modificados, etc.)
- **Git add .**
  - Manda o git observar os arquivos alterados.
- **Git commit**
  - Salva os arquivos.
- **Git log**
  - Mostra o histórico de commits.
- **O que é uma branch?**
  - Ramificação, criar um galho a partir do ramo principal.
- **Como criar uma branch?**
  - git checkout -b (nome da branch)
- **Como trocar de branch?**
  - git checkout (nome da branch)
- **Git merge**
  - git merge (branch selecionada) - serve para misturar os commits da branch selecionada com a atual (que eu tô)
- **Git rebase**
  - Parecido com o merge, porém não mistura, ele sincroniza os commits e mantém os meus commits no topo.
- **Git push**
  - Joga as alterações do computador para o GitHub (empurra)
- **Git pull**
  - Pega as alterações do GitHub e trás para o computador (puxa)
- **Git remote**
  - git remote add origin (URL do repositório) - cria uma conexão remota chamada origin
- **Git clone**
  - Clona (baixa) o projeto para o meu computador
- **Pull request**
  - Uma forma de mandar meu código para o projeto (pendente de aprovação por outro dev no projeto)
- **Git fork**
  - Faz uma cópia de um projeto

**Fluxos de trabalho padrão:**

- Baixa o repositório - **git clone (url)**
- Cria uma branch separada para trabalhar - **git checkout -b (nome da branch)**
- Trabalha...
- Adiciona os arquivos que tu trabalhou - **git add .**
- Salva teu trabalho com uma mensagem significativa - **git commit -m "mensagem"**
- Joga tua branch para o github pela primeira vez - **git push -u origin (nome da branch)**
- Cria o pull request no github e espera aprovação para dar o merge.

**Em caso de conflitos:**

- Vê se algo foi atualizado no github - **git fetch**
- Atualiza tua branch com a branch principal - **git rebase origin/master**
- Corrigi os conflitos no VSCode
- Adiciona as modificações - **git add .**
- Salva o rebase - **git rebase --continue**
- Puxa usando force-with-lease - **git push --force-with-lease**
- Caso seja o primeiro push naquela branch - **git push -u origin (nome da branch) --force-with-lease**

**Após terminar de trabalhar na sua branch:**

- Volta pra branch principal - **git checkout master**
- Procura atualizações - **git fetch**
- Puxa as atualizações se tiver - **git pull**
- Cria outra branch para começar a trabalhar em outra coisa...

**Dicas:**

- Prestar atenção se tu está na pasta certa do terminal - **cd** pra entrar em pasta e **cd..** pra voltar
- Prestar atenção se tu está na branch certa - **git status** ou olha no VSCode no canto inferior esquerdo
- Prestar atenção na hora de resolver conflitos
- Prestar atenção nos commits, tanto no github quanto localmente.
