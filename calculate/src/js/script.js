const numbersKeys = document.querySelector('#nums');
const operatorsKeys = document.querySelector('#ops');

const calc = {
    numberA: 0,
    numberB: 0,
    stage: 'A',
    screen: document.querySelector('#screen'),
    operation: '',
    
    init() {
        this._handleEvents();
    },
    _handleEvents() {
        numbersKeys.addEventListener('click', this._addNumber.bind(this));
        operatorsKeys.addEventListener('click', this._opHandler.bind(this));
    },

    _addNumber(evt) {
        if (evt.target.name === 'number') {
            
            let value = evt.target.dataset.value;

            if (this[`number${this.stage}`] === 0) {
                this[`number${this.stage}`] = +value;
            } else {
                this[`number${this.stage}`] += value;
            }
            this.screen.value = this[`number${this.stage}`];
        }
    },
    _opHandler(evt) {
        if (evt.target.name === 'operator') {
            this.stage = 'B';
            this.screen.value = '';
            this.operation = evt.target.dataset.value; 'Sum';
            this.operation = evt.target.dataset.value; 'Min';
            this.operation = evt.target.dataset.value; 'Mul';
            this.operation = evt.target.dataset.value; 'Del';
        }

        if (evt.target.name === 'result') {
            this[`_make${this.operation}`]();
            this.numberA = this.screen.value;
            this.numberB = 0;
            this.stage = 'A';
        }

        if (evt.target.name === 'reset') {
            this.numberA = 0;
            this.numberB = 0;
            this.screen.value = '';
        }
    },
    _makeSum() {
        this.screen.value = +this.numberA + +this.numberB;
    },
    _makeMin() {
        this.screen.value = +this.numberA - +this.numberB;
    },
    _makeMul() {
        this.screen.value = +this.numberA * +this.numberB;
    },
    _makeDel() {
        this.screen.value = +this.numberA / +this.numberB;
    }
};

calc.init();