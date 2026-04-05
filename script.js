document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('connectModal');
    const connectBtn = document.getElementById('connectBtn');
    const closeBtn = document.querySelector('.modal-close');
    const copyBtns = document.querySelectorAll('[data-copy]');

    connectBtn.addEventListener('click', function() {
        modal.classList.add('active');
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            modal.classList.remove('active');
        });
    }

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    copyBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const textToCopy = btn.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy).then(function() {
                const originalText = btn.textContent;
                btn.textContent = 'Скопировано!';
                setTimeout(function() {
                    btn.textContent = originalText;
                }, 1500);
            });
        });
    });
});