document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    
    // Функция для смены языка
    function switchLanguage() {
        const selectedLanguage = languageSelect.value;
        const elements = document.querySelectorAll('[data-ru], [data-en]');
        elements.forEach(element => {
            if (selectedLanguage === 'ru') {
                element.textContent = element.getAttribute('data-ru');
            } else if (selectedLanguage === 'en') {
                element.textContent = element.getAttribute('data-en');
            }
        });
        // Сохранить выбранный язык в localStorage
        localStorage.setItem('language', selectedLanguage);
    }
    
    // Событие для селектора языка
    languageSelect.addEventListener('change', switchLanguage);
    
    // Загрузка языка из localStorage
    const savedLanguage = localStorage.getItem('language') || 'ru';
    languageSelect.value = savedLanguage;
    switchLanguage();
});