const calendar = document.getElementById("calendar");
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let dataSelected;
let dayClick;
let confirmPass = '';

function generateCalendar() {
    const today = new Date();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let calendarHTML = `<div class="header"><button id="btnPrev" onclick="prevMonth()">Anterior</button>${getMonthName(currentMonth)} ${currentYear}
        <button id="btnNext" onclick="nextMonth()">Próximo</button> </div> `;
    calendarHTML += `<div class="weekDays"><p>Dom<\p><p>Seg<\p><p>Ter<\p><p>Qua<\p><p>Qui<\p><p>Sex<\p><p>Sab<\p></div>`
    calendarHTML += '<div class="days">';

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += '<div class="day"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && currentMonth === today.getMonth();
        calendarHTML += `<div class="day ${isToday ? 'today' : ''}" onclick="showAlert(${day})" id="${day}/${currentMonth + 1}/${currentYear}">${day}</div>`;
    }

    calendarHTML += '</div>';
    calendar.innerHTML = calendarHTML;
}

function getMonthName(monthIndex) {
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    return months[monthIndex];
}

function prevMonth() {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) {
        currentYear--;
    }
    generateCalendar();
    findAllScheduling()
}

function nextMonth() {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) {
        currentYear++;
    }
    findAllScheduling()
    generateCalendar();
}
function dayoff(day) {
    if (currentMonth < 10) {
        alert(`aaaa Você clicou no dia ${day}/0${currentMonth + 1}/${currentYear}`);
    }
    alert(` aaaVocê clicou no dia ${day}/${currentMonth + 1}/${currentYear}`);
    // Adicione aqui a lógica desejada para lidar com o clique no dia
}

function showAlert(day) {
    const modalText = document.getElementById("modal-text");
    dataSelected = {
        dia: day,
        month: currentMonth,
        year: currentYear
    }
    let daySelected = document.getElementById(`${dataSelected.dia}/${dataSelected.month+1}/${dataSelected.year}`)

    if (currentMonth < 10) {
        modalText.textContent = `Você clicou no dia ${day}/0${currentMonth + 1}/${currentYear}`
    } else
        if (day < 10) {
            modalText.textContent = `Você clicou no dia 0${day}/${currentMonth + 1}/${currentYear}`
        } else
            if (currentMonth < 10 && day < 10) {
                modalText.textContent = `Você clicou no dia 0${day}/0${currentMonth + 1}/${currentYear}`
            }
            else {
                modalText.textContent = `Você clicou no dia ${day}/${currentMonth + 1}/${currentYear}`
            }

    if(daySelected.classList[1] == 'dayGreen' || daySelected.classList[1] == 'dayRed'){
        modalText.textContent = `O dia que você clicou já está agendado!`
        const modal = document.getElementById("modal");
        document.querySelector('.atencao').innerHTML = ``
        modal.style.display = "block";
        
        if(window.location.href == 'http://localhost:4400/') document.querySelector('.btn-confirmar').style.display = 'none'
        if(window.location.href == 'http://localhost:4400/admin') {
            dayClick = day
        }
    }

    else{
        dayClick = day
        document.querySelector('.btn-confirmar').style.display = 'block'
        const modal = document.getElementById("modal");
        document.querySelector('.atencao').innerHTML = `Atenção! ao clicar em confirmar, você terá 24h para confirmar seu agendamento, caso contrário o ficará disponível novamente.`
        modal.style.display = "block";
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function confirmPassword(){
    let inputPassword = document.querySelector('#passwordConfirm')
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/listUsers", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 201 || xhr.status == 200) {
            console.log(xhr.responseText);
            confirmPass = xhr.responseText

            schedulingDate()
            inputPassword.value = ''
        } else {
            console.log(`Error: ${xhr.status}`);
        }
    };
    xhr.send(`pass=${inputPassword.value}`);
}

function schedulingDate() {
    let client = "Thiago Reis"
    
    if(confirmPass == 'confirm'){
        try {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", "/confirmScheduling", true);
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
            xhr.onload = () => {
                if (xhr.readyState == 4 && xhr.status == 201 || xhr.status == 200) {
                    console.log(JSON.parse(xhr.responseText));
                    findAllScheduling()
                } else {
                    console.log(`Error: ${xhr.status}`);
                }
            };
            xhr.send(`day=${dayClick}&month=${currentMonth + 1}&year=${currentYear}&client=${client}`);
        }
        catch (error) {
            console.error(error)
        }
    }


    closeModal()
}

function confirmDate() {
    let client = "Thiago Reis"

    try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/createScheduling", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        xhr.onload = () => {
            if (xhr.readyState == 4 && xhr.status == 201 || xhr.status == 200) {
                console.log(JSON.parse(xhr.responseText));
                findAllScheduling()
                window.location.href = `https://wa.me/5594992429276?text=Gostaria+de+confirmar+a+reserva+do+espa%C3%A7o+para+o+dia+${dayClick}%2F${currentMonth + 1}%2F${currentYear}`
            } else {
                console.log(`Error: ${xhr.status}`);
            }
        };
        xhr.send(`day=${dayClick}&month=${currentMonth + 1}&year=${currentYear}&client=${client}`);
    }
    catch (error) {
        console.error(error)
    }

    closeModal()
}

async function findAllScheduling() {
    try {
        var xhttp = new XMLHttpRequest();
        xhttp.responseType = "json";
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let array = this.response
                for (let i = 0; i < array.length; i++) {
                    const element = array[i];
                    let dataAtua = {
                        month: `${currentMonth + 1}`,
                        year: `${currentYear}`
                    }

                    if (element.flag == "dayGreen" && element.year == dataAtua.year && element.month == dataAtua.month) {
                        let day = document.getElementById(`${element.day}/${element.month}/${element.year}`)
                        day.classList.add('dayGreen')
                    }
                    else if (element.flag == "dayRed" && element.year == dataAtua.year && element.month == dataAtua.month) {
                        let day = document.getElementById(`${element.day}/${element.month}/${element.year}`)
                        day.classList.add('dayRed')
                    }
                }

            }
        };
        xhttp.open("GET", "/listAllScheduling", true);
        xhttp.send();


        generateCalendar();
    } catch (error) {

    }
}

window.addEventListener("load", (event) => {
    findAllScheduling()
});