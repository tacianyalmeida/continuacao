
import { Div, Titulo, Section1, DivMenor, ConteudoDivMenor, DivDados, Section2, P } from "../Style/Planilha";
import Info from "./Info";



const Relatorio = ({ list }) => {
    return (<>
        <Div style={{ backgroundColor: '#152473' }}  >
            <Titulo>Relatorio Semanal</Titulo>
        </Div>

        <Section1>
            <DivMenor>
                <ConteudoDivMenor>DIA</ConteudoDivMenor>
            </DivMenor>
            {list.map((user, index) => (
                <Info key={index} nome={user.nome} sala={user.sala} hora={user.hora} data={user.data}/>))}

              <Info/>
            <DivMenor>
                <ConteudoDivMenor>DIA</ConteudoDivMenor>
            </DivMenor>

            <Info />

            <DivMenor>
                <ConteudoDivMenor>DIA</ConteudoDivMenor>
            </DivMenor>

            <Info />
        </Section1>


        <Section2>
            <DivMenor>
                <ConteudoDivMenor>DIA</ConteudoDivMenor>
            </DivMenor>

            <Info />

            <DivMenor>
                <ConteudoDivMenor>DIA</ConteudoDivMenor>
            </DivMenor>

            <Info />


            <DivMenor>
                <ConteudoDivMenor>DIA</ConteudoDivMenor>
            </DivMenor>

            <Info />
        </Section2>
    </>


    )
}
export default Relatorio;