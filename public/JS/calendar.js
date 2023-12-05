const calendar = document.getElementById("calendar");
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let dataSelected;

function generateCalendar() {
    const today = new Date();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

    let calendarHTML = `<div class="header"><button id="btnPrev" onclick="prevMonth()">Anterior</button>${getMonthName(currentMonth)} ${currentYear}
        <button id="btnNext" onclick="nextMonth()">Próximo</button> </div> `;
    calendarHTML += `<div class="weekDays"><p>Seg<\p><p>Ter<\p><p>Qua<\p><p>Qui<\p><p>Sex<\p><p>Sab<\p><p>Dom<\p></div>`
    calendarHTML += '<div class="days">';

    for (let i = 0; i < firstDayOfMonth; i++) {
        calendarHTML += '<div class="day"></div>';
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isToday = day === today.getDate() && currentMonth === today.getMonth();
        calendarHTML += `<div class="day ${isToday ? 'today' : ''}" onclick="showAlert(${day})">${day}</div>`;
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


generateCalendar();


function prevMonth() {
    console.log('sss')
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) {
        currentYear--;
    }
    generateCalendar();
}

function nextMonth() {
    console.log('sss')

    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) {
        currentYear++;
    }
    generateCalendar();
}
function dayoff(day) {
    if(currentMonth < 10){
        alert(`aaaa Você clicou no dia ${day}/0${currentMonth+1}/${currentYear}`);
    }
    alert(` aaaVocê clicou no dia ${day}/${currentMonth+1}/${currentYear}`);
    // Adicione aqui a lógica desejada para lidar com o clique no dia
}

function showAlert(day) {
    const modalText = document.getElementById("modal-text");
    
    dataSelected = {
        dia: day,
        month: currentMonth,
        year: currentYear
    }
    
    if(currentMonth < 10){
        modalText.textContent = `Você clicou no dia ${day}/0${currentMonth+1}/${currentYear}`
    }else
    if(day < 10){
        modalText.textContent = `Você clicou no dia 0${day}/${currentMonth+1}/${currentYear}`
    }else
    if(currentMonth < 10 && day < 10){
        modalText.textContent = `Você clicou no dia 0${day}/0${currentMonth+1}/${currentYear}`
    }
    else{
        modalText.textContent = `Você clicou no dia ${day}/${currentMonth+1}/${currentYear}`
    }

    const modal = document.getElementById("modal");
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

function confirmDate(){
    closeModal()
    console.log(dataSelected)
    alert("Ok! Iremos te redirecionar para conversar com nosco no whatsapp")
}