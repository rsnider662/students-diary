function getGreeting (hour) {
    if (hour >= 5 && hour < 12) return 'Доброе утро';
    if (hour >= 12 && hour < 18) return 'Добрый день';
    if (hour >= 18 && hour < 23) return 'Добрый вечер';
    return 'Доброй ночи';
}

const hour = new Date().getHours();
const text = getGreeting(hour);
const name = 'Стуров Владимир Алексеевич';
document.getElementById('greeting').textContent = `${text}, ${name}!`;