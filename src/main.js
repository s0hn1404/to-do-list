

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
    home.appendChild(sidebarleft)
    const today = document.createElement('li')
    today.textContent = "Today"
    today.classList.add('today')
    sidebarleft.appendChild(today)
    

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
    mylistcontent.append(groceries)


    const right = document.createElement('div')
    right.classList.add('right')
    content.append(right)

    const welcome = document.createElement('div')
    welcome.classList.add('welcome')
    right.appendChild(welcome)

    const himsg = document.createElement('h1')
    himsg.textContent = "Good afternoon Jun!"
    himsg.classList.add('welcomemsg')
    welcome.appendChild(himsg)
    
   const upcomingmsg = document.createElement('div')
   upcomingmsg.classList.add('upcomingmsg')
   right.appendChild(upcomingmsg)

   const upcomingmon = document.createElement('div')
    upcomingmon.classList.add('upcomingmon')
    upcomingmon.textContent = "Monday"
    upcomingmsg.appendChild(upcomingmon)
    const moninput = document.createElement('input')
    upcomingmon.appendChild(moninput)

    const upcomingtue = document.createElement('div')
    upcomingtue.classList.add('upcomingtue')
    upcomingtue.textContent = "Tuesday"
    upcomingmsg.appendChild(upcomingtue)
    const tueinput = document.createElement('input')
    upcomingtue.appendChild(tueinput)

    const upcomingwed = document.createElement('div')
    upcomingwed.classList.add('upcomingwed')
    upcomingwed.textContent = "Wednesday"
    upcomingmsg.appendChild(upcomingwed)
    const wedinput = document.createElement('input')
    upcomingwed.appendChild(wedinput)

    const upcomingthu = document.createElement('div')
    upcomingthu.classList.add('upcomingthu')
    upcomingthu.textContent = "Thursday"
    upcomingmsg.appendChild(upcomingthu)
    const thuinput = document.createElement('input')
    upcomingthu.appendChild(thuinput)

    const upcomingfri = document.createElement('div')
    upcomingfri.classList.add('upcomingfri')
    upcomingfri.textContent = "Friday"
    upcomingmsg.appendChild(upcomingfri)
    const friinput = document.createElement('input')
    upcomingfri.appendChild(friinput)

    const upcomingsat = document.createElement('div')
    upcomingsat.classList.add('upcomingsat')
    upcomingsat.textContent = "Saturday"
    upcomingmsg.appendChild(upcomingsat)
    const satinput = document.createElement('input')
    upcomingsat.appendChild(satinput)

    const upcomingsun = document.createElement('div')
    upcomingsun.classList.add('upcomingsun')
    upcomingsun.textContent = "Sunday"
    upcomingmsg.appendChild(upcomingsun)
    const suninput = document.createElement('input')
    upcomingsun.appendChild(suninput)

}





export default list