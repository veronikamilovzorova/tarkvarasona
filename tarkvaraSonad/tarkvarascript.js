const synad = {
    'teostus': 'реализация',
    'algorytm': 'алгоритм',
    'kavand': 'план',
    'kasutajaliides': 'пользовательский интерфейс',
    'mudel': 'модель',
    'andmebaasi skeem': 'схема базы данных',
    'standart': 'стандарт',
    'tsükkel': 'цикл',
    'andmetöötlus': 'обработка данных',
    'andmestruktuur': 'структура данных',
    'arenduskeskond': 'среда разработки',
    'projektihaldus tööriist': 'инструмент управления проектами',
    'kavandamine': 'планирование',
    'iteratsioon': 'итерация',
    'parandus': 'исправление',
    'koskmudel': 'каскадная модель',
    'agiline mudel':'агильная модель',
    'inkrementaalne mudel':'инкриминтальная модель',
    'nõudmised':'требования',
    'testimine':'тестирование',
    'realiseerimine':'реализация',
    'integreerimine':'интеграция',
    'kasutamine':'использование',
    'hooldus':'обслуживание',
    'eelised':'преимущества',
    'puudused':'недостатки',
    'elutsükkel':'жизненный цикл',
    'arendamine':'разработка',
    'valideerimine':'валидирование'
};

let correctCount = 0;
let incorrectCount = 0;

function randomSyna() {
    const keys = Object.keys(synad);
    const juhuslikSyna = keys[Math.floor(Math.random() * keys.length)];
    document.getElementById("random-syna").innerHTML = juhuslikSyna;
}

function kontroll() {
    const syna = document.getElementById("kontroll").value.trim().toLowerCase();
    const randomSyna = document.getElementById("random-syna").innerHTML;
    const correctTranslation = synad[randomSyna];
    const resultDiv = document.getElementById("vastus");
    const inputField = document.getElementById("kontroll");

    if (syna === correctTranslation) {
        resultDiv.innerHTML = 'Õige!';
        resultDiv.style.color = 'green';
        correctCount++;
    } else {
        resultDiv.innerHTML = 'Vale! Õige vastus on: ' + correctTranslation;
        resultDiv.style.color = 'red';
        incorrectCount++;
    }

    inputField.value = '';


    document.getElementById("stats").innerHTML = 'Õigeid vastuseid: ' + correctCount + ', Valesid vastuseid: ' + incorrectCount;
}
