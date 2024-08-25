document.addEventListener("DOMContentLoaded", function () {
    const clickButton = document.getElementById("click-button");
    const boostButton = document.getElementById("boost-button");
    const fullEnergyButton = document.getElementById("full-energy-button");
    const exitBoostButton = document.getElementById("exit-boost-button");
    const navMainMenuButton = document.getElementById("nav-main-menu-button");
    const navEarnButton = document.getElementById("nav-earn-button");
    const navReferralButton = document.getElementById("nav-referral-button");
    const activeButton = document.getElementById("active-button");
    const completedButton = document.getElementById("completed-button");
    const exitEarnButton = document.getElementById("exit-earn-button");
    const exitBitusButton = document.getElementById("exit-bitus-button");
    const bitusBanner = document.getElementById("bitus-banner");
    const activeContent = document.getElementById("active-content");
    const completedContent = document.getElementById("completed-content");
    const noTasksMessage = document.getElementById("no-tasks-message");

    let coins = parseInt(localStorage.getItem("coins")) || 0;
    let energy = 1000;
    let maxEnergy = 1000;
    let fullEnergyUses = 3;
    let multiTouchLevel = 1;
    let energyLimitLevel = 1;
    let completedTasks = [];

    // Обновляем счетчики
    function updateCounters() {
        document.getElementById("coins").textContent = coins;
        document.getElementById("energy").textContent = energy;
        document.getElementById("max-energy").textContent = maxEnergy;
        document.getElementById("player-coins").textContent = coins;
    }

    // Клик по кнопке
    clickButton.addEventListener("click", function () {
        if (energy > 0) {
            coins++;
            energy--;
            localStorage.setItem("coins", coins); // Сохраняем монеты
            updateCounters();
        } else {
            alert("У вас недостаточно энергии!");
        }
    });

    // Обработчик для Boost кнопки
    boostButton.addEventListener("click", function () {
        document.getElementById("boost-menu").classList.remove("hidden");
        document.getElementById("main-menu").classList.add("hidden");
        updateCounters(); // Обновляем баланс монет в меню Boost
    });

    // Обработчик для кнопки полного восстановления энергии
    fullEnergyButton.addEventListener("click", function () {
        if (fullEnergyUses > 0) {
            energy = maxEnergy;
            fullEnergyUses--;
            updateCounters();
            fullEnergyButton.textContent = `Full Energy (${fullEnergyUses}/3 бесплатных)`;
        } else {
            alert("Вы исчерпали бесплатные восстановления энергии!");
        }
    });

    // Обработчик покупки Multi Touch
    document.getElementById("upgrade-multi-touch-button").addEventListener("click", function () {
        const cost = 1000 * multiTouchLevel;
        if (coins >= cost) {
            coins -= cost;
            multiTouchLevel++;
            document.getElementById("multi-touch-level").textContent = multiTouchLevel;
            document.getElementById("multi-touch-cost").textContent = 1000 * multiTouchLevel;
            localStorage.setItem("coins", coins); // Сохраняем монеты
            updateCounters();
        } else {
            alert("Недостаточно монет!");
        }
    });

    // Обработчик покупки Energy Limit
    document.getElementById("upgrade-energy-limit-button").addEventListener("click", function () {
        const cost = 10000 * energyLimitLevel;
        if (coins >= cost) {
            coins -= cost;
            energyLimitLevel++;
            maxEnergy += 500;
            document.getElementById("energy-limit-level").textContent = energyLimitLevel;
            document.getElementById("energy-limit-cost").textContent = 10000 * energyLimitLevel;
            localStorage.setItem("coins", coins); // Сохраняем монеты
            updateCounters();
        } else {
            alert("Недостаточно монет!");
        }
    });

    // Обработчики для кнопок выхода
    exitBoostButton.addEventListener("click", function () {
        document.getElementById("boost-menu").classList.add("hidden");
        document.getElementById("main-menu").classList.remove("hidden");
    });

    exitEarnButton.addEventListener("click", function () {
        document.getElementById("earn-menu").classList.add("hidden");
        document.getElementById("main-menu").classList.remove("hidden");
    });

    exitBitusButton.addEventListener("click", function () {
        document.getElementById("bitus-menu").classList.add("hidden");
        document.getElementById("earn-menu").classList.remove("hidden");
    });

    // Автоматическое открытие меню Active при нажатии на "Заработать"
    navEarnButton.addEventListener("click", function () {
        document.getElementById("main-menu").classList.add("hidden");
        document.getElementById("earn-menu").classList.remove("hidden");
        activeContent.classList.remove("hidden");
        completedContent.classList.add("hidden");
    });

    // Открытие Active меню
    activeButton.addEventListener("click", function () {
        activeContent.classList.remove("hidden");
        completedContent.classList.add("hidden");
    });

    // Открытие Completed меню
    completedButton.addEventListener("click", function () {
        activeContent.classList.add("hidden");
        completedContent.classList.remove("hidden");

        if (completedTasks.length === 0) {
            noTasksMessage.style.display = "block";
        } else {
            noTasksMessage.style.display = "none";
        }
    });

    navMainMenuButton.addEventListener("click", function () {
        document.getElementById("main-menu").classList.remove("hidden");
        document.getElementById("earn-menu").classList.add("hidden");
        document.getElementById("boost-menu").classList.add("hidden");
        document.getElementById("bitus-menu").classList.add("hidden");
    });

    navReferralButton.addEventListener("click", function () {
        alert("Реферальная система в разработке!");
    });

    // Обработчик для баннера Bitus
    bitusBanner.addEventListener("click", function () {
        document.getElementById("earn-menu").classList.add("hidden");
        document.getElementById("bitus-menu").classList.remove("hidden");
    });

    document.addEventListener("DOMContentLoaded", function () {
        const clickButton = document.getElementById("click-button");
        const boostButton = document.getElementById("boost-button");
        const fullEnergyButton = document.getElementById("full-energy-button");
        const exitBoostButton = document.getElementById("exit-boost-button");
        const navMainMenuButton = document.getElementById("nav-main-menu-button");
        const navEarnButton = document.getElementById("nav-earn-button");
        const navReferralButton = document.getElementById("nav-referral-button");
        const exitEarnButton = document.getElementById("exit-earn-button");
        const exitBitusButton = document.getElementById("exit-bitus-button");
        const activeButton = document.getElementById("active-button");
        const completedButton = document.getElementById("completed-button");
        const bitusBanner = document.getElementById("bitus-banner");
        const noTasksMessage = document.getElementById("no-tasks-message");
        
        const mainMenu = document.getElementById("main-menu");
        const boostMenu = document.getElementById("boost-menu");
        const earnMenu = document.getElementById("earn-menu");
        const bitusMenu = document.getElementById("bitus-menu");
        
        const activeContent = document.getElementById("active-content");
        const completedContent = document.getElementById("completed-content");
    
        let coins = 0;
        let energy = 1000;
        let maxEnergy = 1000;
        let multiTouchLevel = 1;
        let energyLimitLevel = 1;
    
        // Клик по кнопке
        clickButton.addEventListener("click", function () {
            if (energy > 0) {
                coins += multiTouchLevel; // Множественное касание
                energy--; // Уменьшение энергии при каждом клике
                updateUI();
            }
        });
    
        // Нажатие на кнопку Boost
        boostButton.addEventListener("click", function () {
            toggleMenu(mainMenu, boostMenu);
        });
    
        // Полная энергия
        fullEnergyButton.addEventListener("click", function () {
            energy = maxEnergy;
            updateUI();
        });
    
        // Возвращение в главное меню
        exitBoostButton.addEventListener("click", function () {
            toggleMenu(boostMenu, mainMenu);
        });
    
        // Навигация: Главное меню
        navMainMenuButton.addEventListener("click", function () {
            toggleMenu([earnMenu, bitusMenu], mainMenu);
        });
    
        // Навигация: Заработать
        navEarnButton.addEventListener("click", function () {
            toggleMenu(mainMenu, earnMenu);
        });
    
        // Навигация: Реферал
        navReferralButton.addEventListener("click", function () {
            alert("Функция рефералов пока недоступна.");
        });
    
        // Возвращение в главное меню
        exitEarnButton.addEventListener("click", function () {
            toggleMenu(earnMenu, mainMenu);
        });
    
        // Нажатие на баннер Bitus
        bitusBanner.addEventListener("click", function () {
            toggleMenu(earnMenu, bitusMenu);
        });
    
        // Возвращение в меню Заработать из Bitus
        exitBitusButton.addEventListener("click", function () {
            toggleMenu(bitusMenu, earnMenu);
        });
    
        // Переключение между Active и Completed
        activeButton.addEventListener("click", function () {
            activeContent.classList.remove("hidden");
            completedContent.classList.add("hidden");
        });
    
        completedButton.addEventListener("click", function () {
            completedContent.classList.remove("hidden");
            activeContent.classList.add("hidden");
        });
    
        // Обновление интерфейса
        function updateUI() {
            document.getElementById("coins").textContent = coins;
            document.getElementById("energy").textContent = energy;
            document.getElementById("max-energy").textContent = maxEnergy;
            document.getElementById("energy-bar").value = energy;
        }
    
        // Переключение между меню
        function toggleMenu(hideMenu, showMenu) {
            if (Array.isArray(hideMenu)) {
                hideMenu.forEach(menu => menu.classList.add("hidden"));
            } else {
                hideMenu.classList.add("hidden");
            }
            showMenu.classList.remove("hidden");
        }
    
        updateUI(); // Обновляем интерфейс при загрузке
    });

    document.querySelector('.click-button').addEventListener('click', () => {
        alert('Клик!');
    });
    
    document.querySelector('.boost-button').addEventListener('click', () => {
        alert('Boost активирован!');
    });
    
    document.querySelectorAll('.menu-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            alert(`Нажата кнопка: ${e.target.textContent}`);
        });
    });    

    document.addEventListener("DOMContentLoaded", function () {
        const clickButton = document.getElementById("click-button");
        const boostButton = document.getElementById("boost-button");
        const fullEnergyButton = document.getElementById("full-energy-button");
        const exitBoostButton = document.getElementById("exit-boost-button");
    
        // Обновление баланса при загрузке страницы
        function updateBalance() {
            const balanceElement = document.getElementById("balance");
            // Допустим, getBalance() это функция, которая получает текущий баланс игрока
            const balance = getBalance();
            balanceElement.textContent = balance + " Coins";
        }
        
        updateBalance(); // Обновляем баланс сразу при загрузке страницы
    
        // Функция восстановления энергии
        function restoreEnergy() {
            const energyElement = document.getElementById("energy");
            let energy = parseInt(energyElement.textContent);
            
            if (energy < 100) {
                energy += 1; // Восстанавливаем 1 единицу энергии
                energyElement.textContent = energy;
            }
        }
    
        // Восстанавливаем энергию каждые 3 минуты (180000 миллисекунд)
        setInterval(restoreEnergy, 180000);
    
    });
    

    // Инициализация
    updateCounters();
});
