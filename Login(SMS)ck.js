document.addEventListener('DOMContentLoaded', function () {

    patt3 = /^[0-9]{11}$/;

    phoneInput = document.getElementById('pn');

    function createErrorTip(input, errorText) {
        tip = document.createElement('div');
        tip.style.color = '#ff3333';
        tip.style.fontSize = '10px';
        tip.style.margin = '-10px 0 10px 50px';
        tip.style.display = 'none';
        tip.textContent = '×' + errorText;
        input.parentNode.insertBefore(tip, input.nextSibling);
        return tip;
    }

    phoneTip = createErrorTip(phoneInput, '');

    function resetInputState(input, tip) {
        input.style.borderColor = '#e3e3e3';
        tip.style.display = 'none';
    }

    function showError(input, tip, message) {
        input.style.borderColor = '#ff3333';
        tip.textContent = '×' + message;
        tip.style.display = 'block';
    }

    window.checkform= function () {
        PhoneNum = document.getElementById("pn").value;

        if (!patt3.test(PhoneNum)) {
            showError(phoneInput, phoneTip, "Enter the correct China Mainland phone number");
            return false;
        }
        resetInputState(phoneInput, phoneTip);

        window.location.href = 'LoginPage.html';
        return true;
    };

});