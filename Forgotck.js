document.addEventListener('DOMContentLoaded', function () {

    patt3 = /^[0-9]{11}$/;
    patt4 = /^[^@]+@[^@]+\.(cn|com)$/;

    accountInput = document.getElementById('account');

    function createErrorTip(input, errorText) {
        tip = document.createElement('div');
        tip.style.color = '#ff3333';
        tip.style.fontSize = '12px';
        tip.style.margin = '-10px 0 10px 0';
        tip.style.display = 'none';
        tip.textContent = '×' + errorText;
        input.parentNode.insertBefore(tip, input.nextSibling);
        return tip;
    }

    accountTip = createErrorTip(accountInput, '');

    function resetInputState(input, tip) {
        input.style.borderColor = '#e3e3e3';
        tip.style.display = 'none';
    }

    function showError(input, tip, message) {
        input.style.borderColor = '#ff3333';
        tip.textContent = '×' + message;
        tip.style.display = 'block';
        input.value = '';
    }

    window.checkForm = function () {

        let account = document.getElementById("account").value.trim();

        if (patt3.test(account)) {
            resetInputState(accountInput, accountTip);
        } else if (patt4.test(account)) {
            resetInputState(accountInput, accountTip);
        } else {
            showError(accountInput, accountTip, "Please enter a valid phone number or email");
            return false;
        }
          return true;
    }
});