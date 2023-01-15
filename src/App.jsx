import { useState } from "react";
import { Radio } from "./components/radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [respostas, setRespostas] = useState({
    p1: "",
    p2: "",
    p3: "",
    p4: "",
  });
  const [slide, setSlide] = useState(0);
  const [resultado, setResultado] = useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }
  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`voce acertou: ${corretas.length} de ${perguntas.length}`);
  }
  function nextQuestion() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        {perguntas.map((pergunta, index) => (
          <Radio
            active={slide === index}
            key={pergunta.id}
            value={respostas[pergunta.id]}
            onChange={handleChange}
            {...pergunta}
          />
        ))}
        {resultado ? (
          <>
            <p>{resultado}</p>
            <h2>gabarito</h2>
            <h2>respostas corretas</h2>
            {perguntas.map((resposta, index) => (
              <p key={index}>
                <span>resposta: </span>
                {resposta.resposta}
              </p>
            ))}
            <h2>suas respostas</h2>
            {Object.values(respostas).map((resposta, index) => (
              <p key={index}>
                <span>sua resposta: </span>
                {resposta}
              </p>
            ))}
          </>
        ) : (
          <button onClick={nextQuestion}>next</button>
        )}
      </form>
    </>
  );
}

export default App;
