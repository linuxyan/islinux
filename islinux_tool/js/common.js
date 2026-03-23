// Common utilities for tool pages

// Toast notification
function showToast(message, duration = 2000) {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message || '✅ Copied to clipboard!';
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, duration);
}

// Copy to clipboard with toast feedback
async function copyToClipboard(text, button) {
    try {
        await navigator.clipboard.writeText(text);

        if (button) {
            const originalText = button.innerHTML;
            button.innerHTML = '✅ Copied!';
            button.classList.add('copied');

            setTimeout(() => {
                button.innerHTML = originalText;
                button.classList.remove('copied');
            }, 2000);
        }

        showToast('✅ Copied to clipboard!');
    } catch (err) {
        showToast('❌ Copy failed!');
    }
}
