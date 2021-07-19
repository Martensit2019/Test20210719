const users = [
  {
    action: 'Login',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login2',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login3',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login4',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login5',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login6',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login7',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login8',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login9',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
  {
    action: 'Login10',
    ip: '46.242.15.163',
    time: '2 Jul, 10:34 am',
  },
]

const table = document.querySelector('.table')
users.forEach((user) => {
  let row = document.createElement('tr')
  row.innerHTML = `
  <td>${user.action}</td>
  <td>${user.ip}</td>
  <td class="lasttd">${user.time}</td>
  `
  table.appendChild(row)
})
