document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('.find-box input');
    const submitBtn = document.querySelector('.find-box button');
    
    const errorTip = document.createElement('div');
    errorTip.style.color = '#ff3333';
    errorTip.style.fontSize = '12px';
    errorTip.style.marginTop = '5px';
    errorTip.style.display = 'none';
    errorTip.textContent = '×Please enter a valid phone number or email address';
    
    input.parentNode.insertBefore(errorTip, input.nextSibling);

    const phoneRegex = /^1[3-9]\d{9}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    submitBtn.addEventListener('click', function () {
        const val = input.value.trim();
        const isValid = phoneRegex.test(val) || emailRegex.test(val);

        if (!isValid) {
            input.style.borderColor = '#ff3333';
            errorTip.style.display = 'block';
            input.value = '';
        } else {
            input.style.borderColor = '#e3e3e3';
            errorTip.style.display = 'none';
        }
    });

    input.addEventListener('input', function () {
        input.style.borderColor = '#e3e3e3';
        errorTip.style.display = 'none';
    });
});