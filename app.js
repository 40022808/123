document.getElementById('答案').addEventListener('input', function () {
    if (this.value.length > 4) {
        this.value = this.value.slice(0, 4);
    }
});


function 保存() {
    localStorage.setItem('保存对number', 对number);
}


const 保存对number = localStorage.getItem('保存对number')
对number = 保存对number
对.innerHTML = '答对数量:' + 对number


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const 下一题 = document.querySelector('.下一题')
const 确定 = document.querySelector('.确定')
const 按钮1 = document.querySelector('#按钮1')
const 按钮2 = document.querySelector('#按钮2')
const error1 = document.querySelector('#error1')
const 第一个数字 = document.querySelector('#第一个数字')
const 第二个数字 = document.querySelector('#第二个数字')
const 加减 = document.querySelector('#加减')
const 答案 = document.querySelector('#答案')

let interval

var data = {
    "第一个数字" : 0,
    "第二个数字" : 0,
    "加减" : 0
}


下一题.addEventListener('click',()=>{
    倒计时开始(3)
    下一题.style.display = 'none'
    加减random()
    按钮2.play()
    setTimeout(() => {
        确定.style.display = 'block'
        
    }, 1500);
})

确定.addEventListener('click',()=>{
    判定2()
})


function 加减random() {
    let number = getRandomInt(1,2)
    if (number == 1) {
        data.加减 = 0
        加减.innerHTML = '+'
        加法()
    }
    else {
        data.加减 = 1
        加减.innerHTML = '-'
        减法()
    }
}


function 加法() {
    data.第一个数字 = getRandomInt(1,999)
    第一个数字.innerHTML = data.第一个数字
    data.第二个数字 = getRandomInt(1,999)
    第二个数字.innerHTML = data.第二个数字
}

function 减法() {
    data.第一个数字 = getRandomInt(1,999)
    第一个数字.innerHTML = data.第一个数字
    let abc = data.第一个数字 - 1
    data.第二个数字 = getRandomInt(1 , abc)
    第二个数字.innerHTML = data.第二个数字
}


function 重置() {
    data.加减 = 0
    data.第一个数字 = 0
    data.第二个数字 = 0
    第一个数字.innerHTML = ''
    第二个数字.innerHTML = ''
    加减.innerHTML = ''
    答案.value = ''
    倒计时.style.display = 'none'
    clearInterval(interval);
    密码()
}

function 弹窗(text) {
    const 弹窗 = document.querySelector('.弹窗')
    弹窗.style.display = 'flex';
    const 弹窗_text = document.querySelector('.弹窗_text')
    弹窗_text.innerHTML = text
}

function 弹窗2(text) {
    const 弹窗 = document.querySelector('.弹窗2')
    弹窗.style.display = 'flex';
    const 弹窗_text = document.querySelector('.弹窗_text2')
    弹窗_text.innerHTML = text
}

document.querySelector('.弹窗_关闭').addEventListener('click',()=>{
    const 弹窗 = document.querySelector('.弹窗')
    弹窗.style.display = 'none';
})


function 判定() {
    if (data.加减 == 0) {
        if (答案.value == data.第一个数字 + data.第二个数字) {
            let text = "yes"
            return text
        }
        else {
            let text = "no"
            return text
        }
    }
    else if (data.加减 == 1) {
        if (答案.value == data.第一个数字 - data.第二个数字) {
            let text = "yes"
            return text
        }
        else {
            let text = "no"
            return text
        }
    }
}

function 判定2() {
    let 判定3 = 判定()
    if (判定3 == "yes") {
        正确()
    }
    else if (判定3 == "no") {
        错误()
    }
}


const 对 = document.querySelector('.对')
const 错 = document.querySelector('.错')
var 对number = 0
var 错number = 0

function 正确() {
    弹窗("正确")
    按钮1.play()
    对number = 对number + 1
    保存()
    对.innerHTML = '答对数量:' + 对number
    确定.style.display = 'none'
    setTimeout(() => {
        重置()
        下一题.style.display = 'block'
    }, 1500);
}


function 错误() {
    弹窗("错误")
    error1.play()
    错number = 错number + 1
    错.innerHTML = '答错数量:' + 错number
    确定.style.display = 'none'
    setTimeout(() => {
        重置()
        下一题.style.display = 'block'
    }, 1500);
}

const 倒计时 = document.querySelector('.倒计时')


function 倒计时开始(number) {
    倒计时.style.display = 'flex'
    let timeLeft = number * 60; // 倒计时秒数
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = timeLeft;
    interval = setInterval(function() {
        if (timeLeft <= 0) {
            clearInterval(interval);
            countdownElement.textContent = '时间到！';
            // 在这里执行你想要的函数
            错误();
        } else {
            countdownElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}


function 密码() {
    if (对number == 100) {
        弹窗2("平板密码 = 20040628")
    }
}