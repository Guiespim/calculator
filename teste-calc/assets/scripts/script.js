/* Script */

const visor = document.querySelector('input#visor')
const buttonsElements = document.querySelectorAll('input.calc-button')
let buttons = []
for(button of buttonsElements){
    buttons.push(button)
}
buttons.map(button => {
    button.addEventListener('click', (e)=>{
        switch(button.getAttribute('data-value')){
            case 'C':
                visor.value=""
                break
            case '=':
                try {
                    let result = eval(visor.value)
                    if(visor.value == NaN){
                        visor.value = "error"
                    }else{
                        if(String(result).length>13){
                            visor.value = `${String(result).substring(0,13)}e+${String(result).length - 13}`
                        }else{
                            visor.value = String(result)
                        }
                    }
                } catch (error) {
                    visor.value = "error"
                }
                break
            default:
                if(visor.value.length<17){
                    visor.value += button.getAttribute('data-value')
                }
        }
    })
})