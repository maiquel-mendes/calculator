class CalcController {

    constructor(){

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
        console.log(a)
        a.forEach(x => {
            element.addEventListener(x, fn, false)
        } )
    }



    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, "mousedown", (event) => {

                console.log(btn.className.baseVal.replace('btn-',''))
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