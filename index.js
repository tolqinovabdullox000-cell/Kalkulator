function hisobla(belgi) {
    let s1 = document.getElementById('son1').value;
    let s2 = document.getElementById('son2').value;

    if (s1 === "" || s2 === "") {
        alert("Iltimos, sonlarni kiriting!");
        return;
    }

    let a = parseFloat(s1);
    let b = parseFloat(s2);
    let javob = 0;

    if (belgi == '+') {
        javob = a + b;
    } else if (belgi == '-') {
        javob = a - b;
    } else if (belgi == '*') {
        javob = a * b;
    } else if (belgi == '/') {
        javob = a / b;
    } else if (belgi == '%') {
        javob = a % b;
    }

    alert("Javob: " + javob);
}
