function calculateGrade(indo, eng, math, sci) {
    // validasi input nilai
    if (!indo || !eng || !math || !sci) {
      return "Semua nilai harus diisi!";
    }
    if (isNaN(indo) || isNaN(eng) || isNaN(math) || isNaN(sci)) {
      return "Harus memasukkan angka!";
    }
  
    // Hitung rata-rata UN
    const average = (math + indo + eng + sci) / 4;
  
    // tentukan grade berdasarkan rata-rata
    let grade;
    if (average >= 90 && average <= 100) {
      grade = "A";
    } else if (average >= 80 && average <= 89) {
      grade = "B";
    } else if (average >= 70 && average <= 79) {
      grade = "C";
    } else if (average >= 60 && average <= 69) {
      grade = "D";
    } else {
      grade = "E";
    }
  
    // tampilkan hasil
    return `Rata-rata: ${average.toFixed(2)}, Grade: ${grade}`;
  }
  
  // output ketika dicetak
  console.log(calculateGrade(90, 75, 98, 80));
  console.log(calculateGrade(90, 75, null, 80));
  console.log(calculateGrade(70, 65, 'sepuluh', 90));