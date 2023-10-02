const list = () => {
    const content = document.querySelector('#content')
    const home = document.createElement('div')
    home.classList.add('leftsidebar')
    content.appendChild(home)

    const sidebarleft = document.createElement('ul')
    const today = document.createElement('li')
    today.textContent = "Today"
    sidebarleft.appendChild(today)
    const upcoming = document.createElement('li')
    upcoming.textContent = "Upcoming"
    sidebarleft.appendChild(upcoming)
    const anytime = document.createElement('li')
    anytime.textContent = "Tasks"
    sidebarleft.appendChild(anytime)
    home.appendChild(sidebarleft)
    
    const leftsidebarmid = document.createElement('div')
    leftsidebarmid.classList.add('leftsidebarmid')
    home.appendChild(leftsidebarmid)

    const contentmid = document.createElement('ul')
    contentmid.textContent = 'My lists'
    leftsidebarmid.appendChild(contentmid)
    
    const work = document.createElement('li')
    work.textContent = 'Work'
    contentmid.appendChild(work)

    const grocery = document.createElement('li')
    grocery.textContent = 'Grocery'
    contentmid.appendChild(grocery)

    const tag = document.createElement('div')
    tag.textContent = 'Tags'
    home.appendChild(tag)
}

export default list