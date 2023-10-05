

const list = () => {
    const content = document.querySelector('#content')
    const home = document.createElement('div')
    home.classList.add('leftsidebar')
    content.appendChild(home)

    const sidebarh = document.createElement('div')
    sidebarh.classList.add('sidebarh')
    sidebarh.addEventListener('click', (e) => {
        sidebarleft.style.display = 'flex'
    })
    content.appendChild(sidebarh)

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

    const taskspage = document.createElement('div')
    taskspage.classList.add('taskspage')
    right.appendChild(taskspage)

    const taskhead = document.createElement('div')
    taskhead.classList.add('taskhead')
    taskspage.append(taskhead)

    const taskheadcontent = document.createElement('h2')
    taskheadcontent.textContent = 'All my tasks'
    taskhead.appendChild(taskheadcontent)

    const taskbody = document.createElement('div')
    taskbody.classList.add('taskbody')
    taskspage.appendChild(taskbody)

    const tasktod = document.createElement('h2')
    tasktod.textContent = 'Today'
    taskbody.appendChild(tasktod)

    const tasktom = document.createElement('h2')
    tasktom.textContent = 'Tomorrow'
    taskbody.appendChild(tasktom)

    const taskup = document.createElement('h2')
    taskup.textContent = 'Upcoming'
    taskbody.appendChild(taskup)

    const tasksom = document.createElement('h2')
    tasksom .textContent = 'Someday'
    taskbody.appendChild(tasksom)
    const taskinput = document.createElement('input')
    taskinput.classList.add('taskinput')
    taskbody.appendChild(taskinput)

    const personallist = document.createElement('div')
    personallist.classList.add('personallist')
    right.appendChild(personallist)

    const personal1 = document.createElement('div')
    personal1.classList.add('personal1')
    personal1.textContent = 'Work'
    personallist.appendChild(personal1)

    const personalctr = document.createElement('div')
    personalctr.classList.add('personalctr')
    personallist.appendChild(personalctr)

    const personal1ipt = document.createElement('input')
    personal1ipt.classList.add('personal1ipt')
    personalctr.appendChild(personal1ipt)

    const personal2 = document.createElement('div')
    personal2.classList.add('personal2')
    personal2.textContent = 'Groceries'
    personallist.appendChild(personal2)

    const personal2ctr = document.createElement('div')
    personal2ctr.classList.add('personal2ctr')
    personallist.appendChild(personal2ctr)

    const personal2ipt = document.createElement('input')
    personal2ipt.classList.add('personal2ipt')
    personal2ctr.appendChild(personal2ipt)
}





export default list