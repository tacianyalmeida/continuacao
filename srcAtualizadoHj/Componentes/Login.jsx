
import '../../src/index.css'

const Login = () => {
    return (<>
        <body className="bodyLogin">
            <div><h1>Control-Clean</h1>
            <p>Plataforma de apoio 
                aos colaboradores na efetuação de suas tarefas. </p>
                </div>

            <div className='DivAzulescuro'>
                <div className='DivBranca'>
                    <h1>Login</h1>

                    <input type="Number" placeholder="CPF" />
                    <input type="text" placeholder='SENHA' />

                    <button>ENTRAR</button>
                </div>

            </div>
        </body>


    </>)
}
export default Login; 