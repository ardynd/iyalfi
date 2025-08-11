const pesanList = [
    "Ayoo, Alfii pasti bisa! 💪",
    "Jangan lupa makan biar nggak lemes 😋",
    "Santai aja, semua proses butuh waktu 😉",
    "Lo bisa kok, gue tau itu 🔥",
    "Jangan terlalu dipikirin, keep calm & cool 😎",
    "Ingat, lo itu lebih kuat dari yang lo kira 💯",
    "Break bentar gak masalah, asal balik lagi lebih kenceng 🚀",
    "Semangat bu ketuaa 🙌",
    "Jangan lupa recharge energi lu ⚡",
    "Lu bukan sendirian, gua ada di sini 👊",
    "Fokus ke tujuan, abaikan noise di luar 🎯",
    "Slow aja, tapi tetep jalan 🛠️",
    "Jangan overthinking, jalani step by step 📈",
    "Kalau stuck, istirahat sebentar terus lanjut lagi ⏳",
    "Percaya sama proses, hasil bakal ngikutin ✨",
    "Semangat ka mentorr 🔥",
    "Semangat Alfi! 💪",
    "Aisyah Alfi Fadhilah 😎"
];

const fotoList = [
    "assets/1.jpg",
    "assets/2.jpg",
    "assets/3.jpg",
    "assets/4.jpg",
    "assets/5.jpg",
    "assets/6.jpg",
    "assets/7.jpg",
    "assets/8.jpg",
    "assets/9.jpg",
    "assets/10.jpg",
    "assets/11.jpg",
    "assets/12.jpg",
    "assets/13.jpg",
    "assets/14.jpg",
    "assets/15.jpg",
    "assets/16.jpg",
    "assets/17.jpg",
    "assets/18.jpg"
];

function klikAku() {
    // message
    const pesan = pesanList[Math.floor(Math.random() * pesanList.length)];
    document.getElementById("pesan").innerText = pesan;

    // img
    const fotoSrc = fotoList[Math.floor(Math.random() * fotoList.length)];
    const foto = document.createElement("img");
    foto.src = fotoSrc;
    foto.className = "foto-muncul";
    foto.style.left = Math.random() * 80 + "vw";
    foto.style.top = Math.random() * 70 + "vh";
    document.body.appendChild(foto);
    setTimeout(() => foto.remove(), 2500);

    // animation
    for (let i = 0; i < 3; i++) {
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = (Math.random() * 80 + 10) + "vw";
        heart.style.top = (Math.random() * 70 + 10) + "vh";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}