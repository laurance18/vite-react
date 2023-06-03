export default function getQuestions() {
    fetch('https://opentdb.com/api.php?amount=5&difficulty=medium')
        .then(response => response.json())
        .then(data => {return data})
        .catch(error => console.error(error));
}