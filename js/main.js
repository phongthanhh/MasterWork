const headerEl = document.querySelector('.fixed__top')
console.log('PhongThanh 🚀 ~> headerEl', headerEl)

const getDefaultHeader = () => {
    headerEl.style.cssText = `
    background-color: #fff;
    transition: all 0.4s ease 0s;
    padding: 0px;
    height: 90px;
    display: flex;
    align-items: center;
    box-shadow: 0 3px 9px rgb(0 0 0 / 5%);
  `
}

const getCustomHeader = () => {
    headerEl.style.cssText = `
    background-color: #fff;
    transition: all 0.4s ease 0s;
    padding: 0px;
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 5%);
    `
}

const getStyleHeader = {
    default: getDefaultHeader,
    scroll: getCustomHeader
}

window.addEventListener('scroll', () => {
    // Sự kiện này luôn chạy khi run web, theo dõi sự kiện scroll
    const currentScroll = window.pageYOffset // Research pageYOffset for detail
    console.log('PhongThanh 🚀 ~> currentScroll', currentScroll)

    if (currentScroll === 0) {
        getStyleHeader.default()
    } else if (currentScroll >= 70) {
        getStyleHeader.scroll()
    }
})