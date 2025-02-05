// Функция для загрузки данных пользователя
async function loadUserData() {
    if (!userId) return alert("Сначала авторизуйтесь через Telegram.");
    try {
        const response = await fetch(`https://p4vqq.pythonanywhere.com/api/user/${userId}`);
        if (!response.ok) return alert("Ошибка при загрузке данных пользователя.");
        const data = await response.json();
        balance = data.balance || 0;
        energy = data.energy || 100;
        clickMultiplier = data.clickMultiplier || 1;
        energyUpgradeCost = data.energyUpgradeCost || 200;
        clickUpgradeCost = data.clickUpgradeCost || 200;
        clickPower = data.clickPower || 3;
        updateUI();
    } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
        alert("Произошла ошибка. Попробуйте снова.");
    }
}
