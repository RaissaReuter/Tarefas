require('dotenv').config();

document.addEventListener('DOMContentLoaded', function() {
    // Função para animar os itens da lista ao carregar
    const animateTasks = () => {
        const tasks = document.querySelectorAll('.task-item');
        tasks.forEach((task, index) => {
            setTimeout(() => {
                task.style.opacity = '1';
                task.style.transform = 'translateY(0)';
            }, index * 100);
        });
    };

    // Inicializa animações
    animateTasks();

    // Validação do formulário
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const input = this.querySelector('input[type="text"]');
            if (!input.value.trim()) {
                e.preventDefault();
                input.style.borderColor = '#e74c3c';
                setTimeout(() => {
                    input.style.borderColor = '#ddd';
                }, 2000);
            }
        });
    });

    // Efeito hover nos botões
    const buttons = document.querySelectorAll('a[class^="btn-"], button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});