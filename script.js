function hitungLaundry() {
    let nama = document.getElementById("nama").value;
    let berat = document.getElementById("berat").value;

    let hargaPerKg = 7000;

    if (nama === "" || berat === "") {
        alert("Lengkapi data terlebih dahulu!");
        return;
    }

    let total = berat * hargaPerKg;

    document.getElementById("output").innerHTML =
        "Terima kasih, " + nama + "<br>" +
        "Total Bayar: Rp " + total.toLocaleString("id-ID");

    console.log("Nama:", nama);
    console.log("Berat:", berat);
    console.log("Total:", total);
}
