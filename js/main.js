const getCard = document.getElementById('card')
const mainImage = document.getElementById('main-image')

const url = 'https://api.waifu.pics/sfw/waifu'
const urlNSFW = 'https://api.waifu.pics/nsfw/waifu'

const changeImage = url => {
  fetch(url).then(res => res.json()).then(res => {
    mainImage.setAttribute('src', res.url)
  })
}

getCard.addEventListener('click', el => {
  if(el.target.id == 'gacha') {
    changeImage(url)
  }else if(el.target.id == 'nsfw') {
    changeImage(urlNSFW)
  }
})