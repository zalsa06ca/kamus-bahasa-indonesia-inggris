const kamus = {
"makan": "eat",
  "minum": "drink",
  "buku": "book",
  "meja": "table",
  "kursi": "chair",
  "mobil": "car",
  "rumah": "house",
  "air": "water",
  "api": "fire",
  "langit": "sky",
  "matahari": "sun",
  "bulan": "moon",
  "bintang": "star",
  "laut": "sea",
  "gunung": "mountain",
  "hujan": "rain",
  "salju": "snow",
  "awan": "cloud",
  "angin": "wind",
  "panas": "hot",
  "dingin": "cold",
  "besar": "big",
  "kecil": "small",
  "cepat": "fast",
  "lambat": "slow",
  "baik": "good",
  "buruk": "bad",
  "senang": "happy",
  "sedih": "sad",
  "hitam": "black",
  "putih": "white",
  "merah": "red",
  "biru": "blue",
  "kuning": "yellow",
  "hijau": "green",
  "pagi": "morning",
  "siang": "afternoon",
  "malam": "night",
  "orang": "person",
  "anak": "child",
  "ayah": "father",
  "ibu": "mother",
  "teman": "friend",
  "guru": "teacher",
};

function cariKata() {
  const input = document.getElementById("inputKata").value.trim().toLowerCase();
  const hasilDiv = document.getElementById("hasil");

  if (input === "") {
    hasilDiv.textContent = "Silakan masukkan kata.";
    return;
  }

  // Cek dari Indonesia ke Inggris
  if (kamus[input]) {
    hasilDiv.textContent = `"${input}" dalam bahasa Inggris adalah "${kamus[input]}".`;
  }
  // Cek dari Inggris ke Indonesia
  else {
    const found = Object.entries(kamus).find(([indo, eng]) => eng === input);
    if (found) {
      hasilDiv.textContent = `"${input}" dalam bahasa Indonesia adalah "${found[0]}".`;
    } else {
      hasilDiv.textContent = `Kata "${input}" tidak ditemukan dalam kamus.`;
    }
  }
}
