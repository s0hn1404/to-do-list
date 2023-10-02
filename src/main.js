

const list = () => {
    const content = document.querySelector('#content')
    const home = document.createElement('div')
    home.classList.add('leftsidebar')
    content.appendChild(home)

    const profile = document.createElement('div')
    profile.classList.add('profile')
    home.appendChild(profile)

    const profilename = document.createElement('h1')
    profilename.textContent = 'Jun'
    profile.appendChild(profilename)

    const sidebarleft = document.createElement('ul')
    const today = document.createElement('li')
    today.textContent = "Today"
    today.classList.add('today')
    sidebarleft.appendChild(today)
    home.appendChild(sidebarleft)

    const upcoming = document.createElement('li')
    upcoming.textContent = "Upcoming"
    upcoming.classList.add('upcoming')
    sidebarleft.appendChild(upcoming)

    const tasks = document.createElement('li')
    tasks.textContent = "Tasks"
    tasks.classList.add('tasks')
    sidebarleft.appendChild(tasks)

    const mylistdiv = document.createElement('div')
    mylistdiv.classList.add('mylistdiv')
    home.appendChild(mylistdiv)

    const mylistcontent = document.createElement('ul')
    const mylist = document.createElement('li')
    mylist.textContent = "My List"
    mylist.classList.add('mylist')
    mylistcontent.appendChild(mylist)
    mylistdiv.appendChild(mylistcontent)

    const work = document.createElement('li')
    work.textContent = "Work"
    work.classList.add('work')
    mylistcontent.appendChild(work)

    const groceries = document.createElement('li')
    groceries.textContent = "Groceries"
    groceries.classList.add('groceries')
    mylistcontent.appendChild(groceries)


    const right = document.createElement('div')
    right.classList.add(right)
    content.append(right)

}

export default list