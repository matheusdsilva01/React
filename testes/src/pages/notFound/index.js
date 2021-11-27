import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const Index = () => {
    const [count, setState] = useState(5);
    const navigate = useNavigate();
    useEffect(()=>{
        const x = setInterval(() => {
            if(count > 0){
                setState(count-1)
            }
        }, 1000);
        if(count <=0){
            clearInterval(x)
        }
        setTimeout(() => {
            navigate('/');
        }, 5000);
        // eslint-disable-next-line
    }, [count])
    return (
        <div>
            Você sera redirecionado para a pagina inicial em {count} segundos
            <br/>
            <h1>404 Ops! A página não foi encontrada</h1>
            Falei pra escolher uma rota vacilão
        </div>
    )
}

export default Index;