var highscores = JSON.parse(localStorage.getItem('scores'))

var tbody = document.getElementById('tableBody')

for(var i = 0; i < highscores.length; i++) {
    console.log(highscores[i])
    var row = document.createElement('tr')
    var cell1 = document.createElement('td')
    var cell2 = document.createElement('td')

    cell1.textContent = highscores[i].name
    cell2.textContent = highscores[i].score

    row.appendChild(cell1)
    row.appendChild(cell2)

    tbody.appendChild(row)
}

var clearBtn = document.getElementById('clearBtn')

function clearHS () {
    highscores = []
    localStorage.setItem('scores', JSON.stringify(highscores))

    tbody.innerHTML = ''
}

clearBtn.addEventListener('click', clearHS)