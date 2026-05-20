let servicesList = [
    { name: "Осмотр и консультация", price: 1000 },
    { name: "Лечение кариеса", price: 3500 },
    { name: "Профессиональная чистка", price: 2500 },
    { name: "Коронка металлокерамическая", price: 8000 },
    { name: "Отбеливание", price: 10000 }
];
let doctorsList = [
    { name: "Иванова Анна Петровна", speciality: "Врач-терапевт", experience: "Стаж 12 лет", experienceYears: 12 },
    { name: "Сидоров Дмитрий Андреевич", speciality: "Хирург", experience: "Стаж 8 лет", experienceYears: 8 },
    { name: "Кузнецова Елена Михайловна", speciality: "Ортодонт", experience: "Стаж 10 лет", experienceYears: 10 }
];
function displayServices() {
    let container = document.getElementById("servicesContainer");
    container.innerHTML = "";
    for (let i = 0; i < servicesList.length; i++) {
        container.innerHTML += `
            <div class="service">
                <h3>${servicesList[i].name}</h3>
                <p class="price">${servicesList[i].price} ₽</p>
            </div>
        `;
    }
}
function displayDoctors() {
    let container = document.getElementById("doctorsContainer");
    container.innerHTML = "";
    for (let i = 0; i < doctorsList.length; i++) {
        container.innerHTML += `
            <div class="doctor">
                <h3>👨‍⚕️ ${doctorsList[i].name}</h3>
                <p><b>${doctorsList[i].speciality}</b></p>
                <p>${doctorsList[i].experience}</p>
            </div>
        `;
    }
}
function sortDoctorsByExperience() {
    doctorsList.sort((a, b) => b.experienceYears - a.experienceYears);
    displayDoctors();
}
function displayPriceTable() {
    let tableBody = document.getElementById("priceTable");
    tableBody.innerHTML = "";
    for (let i = 0; i < servicesList.length; i++) {
        tableBody.innerHTML += `
            <tr>
                <td>${servicesList[i].name}</td>
                <td>${servicesList[i].price} ₽</td>
            </tr>
        `;
    }
}
function fillServiceSelect() {
    let selectElement = document.getElementById("serviceSelect");
    selectElement.innerHTML = "";
    for (let i = 0; i < servicesList.length; i++) {
        selectElement.innerHTML += `
            <option value="${servicesList[i].name}">${servicesList[i].name} - ${servicesList[i].price} ₽</option>
        `;
    }
}
function handleFormSubmit() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let messageElement = document.getElementById("formMessage");
    if (!name || !phone || !date) {
        messageElement.innerHTML = "Пожалуйста, заполните все поля!";
        messageElement.style.color = "red";
        return;
    }
    let modal = document.getElementById("modal");
    modal.style.display = "flex";
    document.body.style.overflow = "hidden";
    document.getElementById("appointmentForm").reset();
    messageElement.innerHTML = "";
}
function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        const content = item.querySelector('.accordion-content');
        const icon = item.querySelector('.accordion-icon');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            accordionItems.forEach(accItem => {
                accItem.classList.remove('active');
                accItem.querySelector('.accordion-content').style.maxHeight = null;
                accItem.querySelector('.accordion-icon').textContent = '+';
            });
            
            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '-';
            }
        });
    });
}
function initProgressBar() {
    let progress = 0;
    const progressFill = document.getElementById('progressFill');
    const progressUp = document.getElementById('progressUp');
    const progressDown = document.getElementById('progressDown');
    const discountText = document.getElementById('discountText');
    
    function updateProgress() {
        progressFill.style.width = progress + '%';
        progressFill.textContent = progress + '%';
        discountText.textContent = `Текущая скидка: ${progress}%`;
    }
    progressUp.addEventListener('click', function() {
        if (progress < 100) {
            progress += 10;
            updateProgress();
        }
    });
    progressDown.addEventListener('click', function() {
        if (progress > 0) {
            progress -= 10;
            updateProgress();
        }
    });
    updateProgress();
}
function initModal() {
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.modal-close');
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}
function initVisionMode() {
    const visionBtn = document.getElementById('visionModeBtn');
    let isVisionMode = false;
    
    visionBtn.addEventListener('click', function() {
        isVisionMode = !isVisionMode;
        
        if (isVisionMode) {
            document.body.classList.add('vision-mode');
            visionBtn.textContent = '👁️ Обычная версия';
            visionBtn.style.backgroundColor = '#333333';
            visionBtn.style.color = '#ffff00';
        } else {
            document.body.classList.remove('vision-mode');
            visionBtn.textContent = '👁️ Версия для слабовидящих';
            visionBtn.style.backgroundColor = 'white';
            visionBtn.style.color = '#0066cc';
        }
    });
}
function initAnimatedTitle() {
    const heroTitle = document.getElementById('heroTitle');
    if (!heroTitle) return;
    const texts = [
        'Здоровые зубы — красивая улыбка!',
        '✨ Улыбнитесь вместе с нами! ✨',
        '🦷 Лучшие стоматологи Нижнего Новгорода',
        '💙 Ваше здоровье — наша забота'
    ];
    let currentIndex = 0;  
    function changeTitle() {
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % texts.length;
            heroTitle.textContent = texts[currentIndex];
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
    setInterval(changeTitle, 4000);
}
displayServices();
displayDoctors();
displayPriceTable();
fillServiceSelect();
const sortBtn = document.getElementById('sortDoctorsBtn');
if (sortBtn) {
    sortBtn.addEventListener('click', sortDoctorsByExperience);
}

const submitBtn = document.getElementById('submitBtn');
if (submitBtn) {
    submitBtn.addEventListener('click', handleFormSubmit);
}
initAccordion();
initProgressBar();
initModal();
initVisionMode();
initAnimatedTitle();
