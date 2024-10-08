import React, { useState } from 'react';
import './App.css'; // Asegúrate de tener un archivo App.css para los estilos

function App() {
    const [result, setResult] = useState("");
    const [resultImage, setResultImage] = useState("");

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
        let maxAnswer = 'a';
        for (const key in answers) {
            if (answers[key] > answers[maxAnswer]) {
                maxAnswer = key;
            }
        }

        // Define los resultados según la respuesta mayoritaria
        let resultText = "";
        let resultImageUrl = "";
        switch (maxAnswer) {
            case 'a':
                resultText = "Businessman of the Year"; // Empresario del año
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/empresario.png";
                break;
            case 'b':
                resultText = "Sport";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/sport.png";
                break;
            case 'c':
                resultText = "The Perfect Groom"; // Novio perfecto
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/novioperfecto.png";
                break;
            case 'd':
                resultText = "Nice man";
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/niceman.png";
                break;
            case 'e':
                resultText = "Family Man"; // Familiar
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/familiar.png";
                break;
            case 'f':
                resultText = "Party man"; // Fiestero
                resultImageUrl = "https://pruebas.masaltos.com/img/cms/fiestero.png";
                break;
        }

        // Actualiza el estado con el resultado y la imagen
        setResult(resultText);
        setResultImage(resultImageUrl);

        // Muestra el resultado en el pop-up
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
                    <label><input type="radio" name="q1" value="a" /> Участвую в профессиональных мероприятиях.</label>
                    <label><input type="radio" name="q1" value="b" /> Занимаюсь спортом или активностями на свежем воздухе.</label>
                    <label><input type="radio" name="q1" value="c" /> Готовлюсь к особенным мероприятиям.</label>
                    <label><input type="radio" name="q1" value="d" /> Провожу время с друзьями.</label>
                    <label><input type="radio" name="q1" value="e" /> Провожу время с семьёй.</label>
                    <label><input type="radio" name="q1" value="f" /> Посещаю вечеринки.</label>
                </div>

                {/* Вопрос 2 */}
                <div className="question">
                    <p>2. Как бы вы описали свой подход к моде?</p>
                    <label><input type="radio" name="q2" value="a" /> Элегантный и профессиональный.</label>
                    <label><input type="radio" name="q2" value="b" /> Небрежный и комфортный.</label>
                    <label><input type="radio" name="q2" value="c" /> Утончённый и изысканный.</label>
                    <label><input type="radio" name="q2" value="d" /> Привлекательный и универсальный.</label>
                    <label><input type="radio" name="q2" value="e" /> Расслабленный и непринуждённый.</label>
                    <label><input type="radio" name="q2" value="f" /> Современный и трендовый.</label>
                </div>

                {/* Вопрос 3 */}
                <div className="question">
                    <p>3. Какие мероприятия вам больше всего нравятся?</p>
                    <label><input type="radio" name="q3" value="a" /> Мероприятия компании.</label>
                    <label><input type="radio" name="q3" value="b" /> Спортивные соревнования.</label>
                    <label><input type="radio" name="q3" value="c" /> Свадьбы, дни рождения и личные праздники.</label>
                    <label><input type="radio" name="q3" value="d" /> Социальные встречи, ужины и выходы с друзьями.</label>
                    <label><input type="radio" name="q3" value="e" /> Семейные активности и ужины дома.</label>
                    <label><input type="radio" name="q3" value="f" /> Концерты, клубы и ночные мероприятия.</label>
                </div>

                {/* Вопрос 4 */}
                <div className="question">
                    <p>4. Что для вас важнее всего при выборе одежды?</p>
                    <label><input type="radio" name="q4" value="a" /> Проецировать элегантность и профессионализм.</label>
                    <label><input type="radio" name="q4" value="b" /> Комфорт и производительность.</label>
                    <label><input type="radio" name="q4" value="c" /> Стиль и впечатление на особых мероприятиях.</label>
                    <label><input type="radio" name="q4" value="d" /> Универсальность для разных социальных ситуаций.</label>
                    <label><input type="radio" name="q4" value="e" /> Комфорт и расслабленный стиль на каждый день.</label>
                    <label><input type="radio" name="q4" value="f" /> Быть заметным на ночных мероприятиях.</label>
                </div>

                {/* Вопрос 5 */}
                <div className="question">
                    <p>5. С каким стилем вы чувствуете себя увереннее всего?</p>
                    <label><input type="radio" name="q5" value="a" /> Профессиональный стиль, который проецирует уверенность.</label>
                    <label><input type="radio" name="q5" value="b" /> Одежда, обеспечивающая свободу движения и функциональность.</label>
                    <label><input type="radio" name="q5" value="c" /> Утончённый стиль, который выделяется на особых мероприятиях.</label>
                    <label><input type="radio" name="q5" value="d" /> Одежда, которая выделяет вас на социальных встречах.</label>
                    <label><input type="radio" name="q5" value="e" /> Расслабленный стиль для проведения времени с семьёй.</label>
                    <label><input type="radio" name="q5" value="f" /> Современный стиль, который выделяется на ночных мероприятиях.</label>
                </div>

                <button type="button" onClick={calculateResult}>Отправить</button>
            </form>

            {/* Modal para mostrar el resultado */}
            <div id="resultModal" className="modal" style={{ display: 'none' }}>
                <div className="modal-content">
                    <p className="result-text" id="resultText">Твой стиль: {result}</p>
                    {resultImage && (
                        <div style={{ textAlign: 'center' }}>
                            <img src={resultImage} alt={result} style={{ width: '200px', height: 'auto', margin: '10px' }} />
                        </div>
                    )}
                    <button className="close-button" onClick={closeModal}>Закрыть</button>
                </div>
            </div>
        </div>
    );
}

export default App;
