initWidth = 5
initHeight = 4
$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $('#reset');
    
    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });
    
    function open() {
        envelope.addClass('open')
            .removeClass('close');
    }
    function close() {
        envelope.addClass('close')
            .removeClass('open');
    
    function openWithDelay() {
        open();
        setTimeout(function() {
            close();
            showAlert();
        }, 5000); 
    }
    }
})
document.getElementById("reset").addEventListener("click",()=>{
    initWidth += 3;
    initHeight += 2;
    document.getElementById("open").style.width = `${initWidth}rem`;
    document.getElementById("open").style.height = `${initHeight}rem`;

})
document.getElementById('open').addEventListener('click', () => {

    alert("Я так рад что ты выбрала Да) \nНемного опоздал с валентинкой, хотел сделать как можно необычнее\nС тобой весело и забавно♡\nПосле встречи с тобой я сохранил 119 автобус и ДоДо в отдельном месте своего сердца♡\nНадеюсь ты будешь меньше игнорить и чаще отвечать˚ʚ♡ɞ˚\nНо в любом случае я буду ждать, любить и бесить тебя вечно♡\nНадеюсь мы сможем еще раз увидеться)")
})