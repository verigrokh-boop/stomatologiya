let services = [
    { name: "Осмотр и консультация", price: 1000 },
    { name: "Лечение кариеса", price: 3500 },
    { name: "Профессиональная чистка", price: 2500 },
    { name: "Коронка металлокерамическая", price: 8000 },
    { name: "Отбеливание", price: 10000 }
];
let doctors = [
    { name: "Иванова Анна Петровна", speciality: "Врач-терапевт", experience: "Стаж 12 лет" },
    { name: "Сидоров Дмитрий Андреевич", speciality: "Хирург", experience: "Стаж 8 лет" },
    { name: "Кузнецова Елена Михайловна", speciality: "Ортодонт", experience: "Стаж 10 лет" }
];
function u() {
    let c = document.getElementById("servicesContainer");
    c.innerHTML = "";
    for (let i = 0; i < services.length; i++) {
        c.innerHTML = c.innerHTML + `
            <div class="service">
                <h3>${services[i].name}</h3>
                <p class="price">${services[i].price} ₽</p>
            </div>
        `;
    }
}
function v() {
    let c = document.getElementById("doctorsContainer");
    c.innerHTML = "";
    
    for (let i = 0; i < doctors.length; i++) {
        c.innerHTML = c.innerHTML + `
            <div class="doctor">
                <h3>👨‍⚕️ ${doctors[i].name}</h3>
                <p><b>${doctors[i].speciality}</b></p>
                <p>${doctors[i].experience}</p>
            </div>
        `;
    }
}
function z() {
    let t = document.getElementById("priceTable");
    t.innerHTML = "";
    
    for (let i = 0; i < services.length; i++) {
        t.innerHTML = t.innerHTML + `
            <tr>
                <td>${services[i].name}</td>
                <td>${services[i].price} ₽</td>
            </tr>
        `;
    }
}
function sp() {
    let l = document.getElementById("serviceSelect");
    
    for (let i = 0; i < services.length; i++) {
        l.innerHTML = l.innerHTML + `
            <option value="${services[i].name}">${services[i].name} - ${services[i].price} ₽</option>
        `;
    }
}
function sps() {
    let m = document.getElementById("formMessage");
    m.innerHTML = "Спасибо, заявка отправлена!";
    m.style.color = "green";
}
u();
v();
z();
sp();
sps();