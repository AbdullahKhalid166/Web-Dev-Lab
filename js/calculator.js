// Simple calculator logic
(function(){
    const display = document.getElementById('display');
    const keys = document.querySelector('.keys');
    let current = '';

    function updateDisplay(value){
        display.textContent = value || '0';
    }

    function safeEval(expr){
        // replace any accidental characters and evaluate only digits, operators, dot and spaces
        // replace multiple operator symbols if user typed them in a row
        try{
            const cleaned = expr.replace(/[^0-9+\-*/.() ]/g, '');
            // eval is acceptable here for a small local calculator; constrain expression length
            if(cleaned.length > 200) return 'Error';
            // eslint-disable-next-line no-new-func
            const result = Function(`return (${cleaned})`)();
            if(!isFinite(result)) return 'Error';
            return String(result);
        }catch(e){
            return 'Error';
        }
    }

    keys.addEventListener('click', (e)=>{
        const btn = e.target.closest('button');
        if(!btn) return;
        const action = btn.dataset.action;
        const value = btn.dataset.value;

        if(action === 'clear'){
            current = '';
            updateDisplay('0');
            return;
        }
        if(action === 'back'){
            current = current.slice(0,-1);
            updateDisplay(current || '0');
            return;
        }
        if(action === 'equals'){
            const res = safeEval(current);
            current = (res === 'Error') ? '' : res;
            updateDisplay(res);
            return;
        }

        // value pressed (digit, dot, operator)
        if(value){
            // prevent multiple dots in the same number
            if(value === '.'){
                const parts = current.split(/[^0-9.]/);
                const last = parts[parts.length-1];
                if(last.includes('.')) return; // ignore
                if(last === '') current += '0';
            }

            // avoid leading zeros like 0002
            if(/^[0]$/.test(current) && /[0-9]/.test(value)){
                current = value;
            } else {
                current += value;
            }
            updateDisplay(current);
        }
    });

    // keyboard support
    window.addEventListener('keydown', (e)=>{
        const k = e.key;
        if((/^[0-9]$/).test(k) || ['+','-','*','/','.','(',')'].includes(k)){
            e.preventDefault();
            current += k;
            updateDisplay(current);
            return;
        }
        if(k === 'Enter' || k === '='){
            e.preventDefault();
            const res = safeEval(current);
            current = (res === 'Error') ? '' : res;
            updateDisplay(res);
            return;
        }
        if(k === 'Backspace'){
            e.preventDefault();
            current = current.slice(0,-1);
            updateDisplay(current || '0');
            return;
        }
        if(k.toLowerCase() === 'c'){
            e.preventDefault();
            current = '';
            updateDisplay('0');
            return;
        }
    });
})();
