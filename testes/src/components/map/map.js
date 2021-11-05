const map = () => {
    const alunos = [{
        nome: 'Matheus',
        sobrenome: 'da Silva',
        idade: '23'
    },
    {
        nome: 'João',
        sobrenome: 'da Silva',
        idade: '23'
    },
    {
        nome: 'Maria',
        sobrenome: 'da Silva',
        idade: '23'
    }];
    return (
        <>
            { alunos.map((aluno, i) => <li key={i}> {
                'Nome: ' + aluno.nome +
                ' Sobrenome: ' + aluno.sobrenome +
                ' Idade: ' + aluno.idade}</li>
            )}
        </>
    );
}

export default map;