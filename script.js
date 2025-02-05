// Проверяем наличие Telegram Web App
if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;

    // Если initDataUnsafe существует, показываем Telegram ID
    if (tg.initDataUnsafe) {
        document.getElementById("welcome-message").textContent = "Вы успешно авторизовались!";
        document.getElementById("user-id").textContent = tg.initDataUnsafe.user.id;
        document.getElementById("telegram-info").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
        alert("Ошибка initDataUnsafe. Попробуйте снова.");
    }
} else {
    document.getElementById("error-message").style.display = "block";
    alert("Эта страница работает только внутри Telegram");
}

// Функция для закрытия Web App
function closeWebApp() {
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.close(); // Закрываем Web App через Telegram API
    } else {
        alert("Невозможно закрыть приложение. Откройте его через Telegram.");
    }
}
