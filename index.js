// console.log('hello')

const timeEl = document.getElementById('time')
const dayEl = document.getElementById('day')

const day = new Date()
const daysOfWeek = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
dayEl.textContent = `Current day: ${daysOfWeek[day.getDay()]}`

function updateTime () {
  const date = new Date()

  const getMinutes = date.getMinutes()
  const getHours = date.getHours()

  timeEl.textContent = `Current time: ${getHours}:${getMinutes}`
}

updateTime()

setInterval(updateTime, 60000)
