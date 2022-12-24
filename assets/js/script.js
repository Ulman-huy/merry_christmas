const body = document.querySelector('body')
const snowContainer = document.querySelector('.snow')
const desc = document.querySelector('.desc')
const audio = document.querySelector('.audio')
const button = document.querySelector('.button')
const noel = document.querySelector('.noel')

document.addEventListener('mousemove', function(e) {
    let snow = document.createElement('span')
    let x = e.offsetX
    let y = e.offsetY

    snow.style.left = x  + 'px'
    snow.style.top = y  + 'px'

    let size = Math.random() * 80

    snow.style.width = 20 + size + 'px'
    snow.style.height = 20 + size + 'px'

    let transformValue = Math.random() * 360

    snow.style.transform = 'rotate(' + transformValue +'deg)'

    body.appendChild(snow)

    setTimeout(() => {
        snow.remove()
    }, 1000);
})
const sky = document.querySelector('.sky')

sky.addEventListener('click', function(e) {
    if(desc) {
        desc.remove()
        audio.play()
    }
    let gift = document.createElement('img')
    const gifts = ['./assets/image/gift1.png', './assets/image/gift2.png', './assets/image/gift3.png', './assets/image/gift4.png','./assets/image/gift5.png', './assets/image/gift6.png']

    gift.src =  gifts[Math.floor(Math.random() * gifts.length)]

    let x = e.offsetX
    let y = e.offsetY

    gift.style.left = x + 'px'
    gift.style.top = y + 'px'

    let size = Math.random() * 50

    gift.style.width = 10 + size + 'px'
    gift.style.height = 10 + size + 'px'

    snowContainer.appendChild(gift)
})

setInterval(()=>{
    const gifts = document.querySelectorAll('img')
    const wishs = [
        'Merry Christmas', 
        'Chúc bạn may mắn lần sau =))', 
        'TRÚNG CÁI NỊT !!!', 'HI :))',
        'Một mùa Noel nữa lại đến! Chúc bạn tôi tiền đầy ví, tình đầy tim và luôn mạnh khỏe nhé!',
        'Mong mùa lễ hội này sẽ mang lại nhiều niềm vui, may mắn và sức khỏe cho bạn cùng gia đình',
        'Chúc bạn những lời chúc tốt đẹp nhất cho một Giáng sinh và năm mới mạnh khỏe, bình an và hạnh phúc.',
        'Chúc mùa Noel của bạn ngập tràn ấm áp, niềm vui và yêu thương.',
        'Chúc cậu một mùa Giáng sinh tràn ngập niềm vui với những khoảnh khắc khó quên',
        'Chúc cậu có một mùa Giáng sinh thật vui vẻ và ngọt ngào!',

    ]
    gifts.forEach(gift => 
        gift.onclick = () => {
            gift.remove()
            console.log(desc);
            const wish =  document.createElement('h1')

            wish.innerHTML = wishs[Math.floor(Math.random() * wishs.length)]

            snowContainer.appendChild(wish)

            setTimeout(() => {
                wish.remove()
            }, 5000)
        }
    )
}, 5000)
button.onclick = () => {
    noel.classList.add('hide')
    sky.classList.remove('hide')
    desc.classList.remove('hide')
}