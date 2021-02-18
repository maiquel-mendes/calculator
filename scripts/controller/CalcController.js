class CalcController {

    constructor(){

        this._operation = [];
        this._displayCalcEl = document.querySelector("#display");
        this._dataEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._displayCalc = '0';
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();

    }

    initialize(){

        this.setDisplayDataTime()

        setInterval(()=>{

            this.setDisplayDataTime()
            

        },1000)


    }

    addEventListenerAll(element, oi, fn ){
        let a = oi.split(' ');
        //console.log(a)
        a.forEach(x => {
            element.addEventListener(x, fn, false)
        } )
    }

    clearAll(){

        this._operation = [];

    }

    clearEntry(){

        this._operation.pop();

    }

    getLastOperation(){

        return this._operation[this._operation.length-1];

    }

    isOperator(value){

        return (['+', '-', '*', '/', '%'].indexOf(value) > -1)
    }
    
    addOperation(value){

        console.log("A",this.getLastOperation())

        if (isNaN(this.getLastOperation())){

            if (this.isOperator(value)){

                console.log('c')

                this._operation[this._operation.length - 1] = value;

            } else {

                console.log("D",value)
                this._operation.push(value);
                console.log("b", this._operation)
            }

        }
        
    }

    setError(){

        this.displayCalc = "error";

    }


    execBtn(value){

        switch (value){

            case 'ac':
                this.clearAll();
                break;
            
            case 'ce':
                this.clearEntry();
                break;
                
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            
            case 'multiplicacao':
                this.addOperation('*');
                break;
                
            case 'divisao':
                this.addOperation('/');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
                
            case 'igual':
                this.clearAll();
                break;
            case 'ponto':
                this.addOperation('.');
                break;

            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;


            default:
                this.setError();
                break;

            

        }

    }



    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "mousedown", (event) => {

                let textBtn = btn.className.baseVal.replace('btn-','')

                this.execBtn(textBtn);
            })

            this.addEventListenerAll(btn, "mouseover", ()=>{
                btn.style.cursor = "pointer"
            })
        })
    }

    setDisplayDataTime(){
        
            this.displayDate = this.currentDate.toLocaleDateString(this._locale);
            this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dataEl.innerHTML;
    }

    set displayDate(value){
        this._dataEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set currentDate(value){
        this._currentDate = value;
    }
}