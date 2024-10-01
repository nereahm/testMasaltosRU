import React from "react";
import "./App.css"; // Asegúrate de tener un archivo App.css para los estilos

function App() {
  const calculateResult = () => {
    const answers = { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 };
    const form = document.forms["quizForm"];

    // Recorre las preguntas y acumula las respuestas
    for (let i = 1; i <= 5; i++) {
      const selected = form["q" + i].value;
      if (selected) {
        answers[selected]++;
      }
    }

    // Encuentra la respuesta mayoritaria
    let maxAnswer = "a";
    for (const key in answers) {
      if (answers[key] > answers[maxAnswer]) {
        maxAnswer = key;
      }
    }

    // Define los resultados según la respuesta mayoritaria
    let result;
    switch (maxAnswer) {
      case "a":
        result = "Businessman of the Year"; // Empresario del año
        break;
      case "b":
        result = "Sport";
        break;
      case "c":
        result = "The Perfect Groom"; // Novio perfecto
        break;
      case "d":
        result = "Nice man"; // Nice man
        break;
      case "e":
        result = "Family Man"; // Familiar
        break;
      case "f":
        result = "Party man"; // Party man
        break;
    }

    // Muestra el resultado en el pop-up
    document.getElementById("resultText").textContent =
      "Твой стиль: " + result;
    document.getElementById("resultModal").style.display = "flex";
  };

  const closeModal = () => {
    document.getElementById("resultModal").style.display = "none";
  };

  return (
    <div className="quiz-container">
      <h1>Какой стиль ты ищешь?</h1>
      <form id="quizForm">
  {/* Вопрос 1 */}
  <div className="question">
    <p>1. Чем вы любите заниматься в свободное время?</p>
    <label>
      <input type="radio" name="q1" value="a" /> Участвую в профессиональных мероприятиях.
    </label>
    <label>
      <input type="radio" name="q1" value="b" /> Занимаюсь спортом или активностями на свежем воздухе.
    </label>
    <label>
      <input type="radio" name="q1" value="c" /> Готовлюсь к особенным мероприятиям.
    </label>
    <label>
      <input type="radio" name="q1" value="d" /> Провожу время с друзьями.
    </label>
    <label>
      <input type="radio" name="q1" value="e" /> Провожу время с семьёй.
    </label>
    <label>
      <input type="radio" name="q1" value="f" /> Посещаю вечеринки.
    </label>
  </div>

  {/* Вопрос 2 */}
  <div className="question">
    <p>2. Как бы вы описали свой подход к моде?</p>
    <label>
      <input type="radio" name="q2" value="a" /> Элегантный и профессиональный.
    </label>
    <label>
      <input type="radio" name="q2" value="b" /> Небрежный и комфортный.
    </label>
    <label>
      <input type="radio" name="q2" value="c" /> Утончённый и изысканный.
    </label>
    <label>
      <input type="radio" name="q2" value="d" /> Привлекательный и универсальный.
    </label>
    <label>
      <input type="radio" name="q2" value="e" /> Расслабленный и непринуждённый.
    </label>
    <label>
      <input type="radio" name="q2" value="f" /> Современный и трендовый.
    </label>
  </div>

  {/* Вопрос 3 */}
  <div className="question">
    <p>3. Какие мероприятия вам больше всего нравятся?</p>
    <label>
      <input type="radio" name="q3" value="a" /> Корпоративные события.
    </label>
    <label>
      <input type="radio" name="q3" value="b" /> Спортивные соревнования.
    </label>
    <label>
      <input type="radio" name="q3" value="c" /> Свадьбы, юбилеи и личные торжества.
    </label>
    <label>
      <input type="radio" name="q3" value="d" /> Вечеринки, ужины и встречи с друзьями.
    </label>
    <label>
      <input type="radio" name="q3" value="e" /> Семейные мероприятия и ужины дома.
    </label>
    <label>
      <input type="radio" name="q3" value="f" /> Концерты, клубы и ночные тусовки.
    </label>
  </div>

  {/* Вопрос 4 */}
  <div className="question">
    <p>4. Что для вас самое важное при выборе наряда?</p>
    <label>
      <input type="radio" name="q4" value="a" /> Профессиональный внешний вид и элегантность.
    </label>
    <label>
      <input type="radio" name="q4" value="b" /> Комфорт и функциональность для активного образа жизни.
    </label>
    <label>
      <input type="radio" name="q4" value="c" /> Стиль и впечатление для особых случаев.
    </label>
    <label>
      <input type="radio" name="q4" value="d" /> Возможность легко адаптироваться к различным социальным ситуациям.
    </label>
    <label>
      <input type="radio" name="q4" value="e" /> Комфорт и непринуждённость для повседневной жизни.
    </label>
    <label>
      <input type="radio" name="q4" value="f" /> Способность выделяться и привлекать внимание.
    </label>
  </div>

  {/* Вопрос 5 */}
  <div className="question">
    <p>5. Как вы чувствуете себя наиболее уверенно?</p>
    <label>
      <input type="radio" name="q5" value="a" /> В деловом и профессиональном образе, который подчёркивает уверенность.
    </label>
    <label>
      <input type="radio" name="q5" value="b" /> В одежде, которая обеспечивает свободу движений и функциональность.
    </label>
    <label>
      <input type="radio" name="q5" value="c" /> В изысканном наряде, который выделяется на особых мероприятиях.
    </label>
    <label>
      <input type="radio" name="q5" value="d" /> В образе, который позволяет блистать на светских мероприятиях.
    </label>
    <label>
      <input type="radio" name="q5" value="e" /> В расслабленном и комфортном наряде для семейного отдыха.
    </label>
    <label>
      <input type="radio" name="q5" value="f" /> В модном образе, который позволяет выделяться на ночных мероприятиях.
    </label>
  </div>

  <button type="button" onClick={calculateResult}>
    Отправить
  </button>
</form>

      {/* Modal para mostrar el resultado */}
      <div id="resultModal" className="modal" style={{ display: "none" }}>
        <div className="modal-content">
          <p className="result-text" id="resultText"></p>
          <button className="close-button" onClick={closeModal}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
