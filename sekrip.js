confirm = confirm("Apakah kamu mau main Type Counter HI3?");
if (confirm == true) {

    let playerInput = prompt("Pilih salah satu diantara 3 ini: psychic, biologic, mecha");
    let player = playerInput.toLowerCase(); // Convert input to lowercase


    let bot = Math.random();

    if (bot < 0.34) {
        bot = 'psychic';
    } else if (bot > 0.33 && bot <= 0.66) {
        bot = 'biologic';
    } else {
        bot = 'mecha';
    }


    let hasil;

    if (player == bot) {
        hasil = 'Permainan seri';
    } else if (bot == 'psychic') {
        if (player == 'biologic') {
            hasil = 'Anda Menang';
        } else if (player == 'mecha') {
            hasil = 'Anda kalah';
        } else {
            alert("Salah input!")
        }
    } else if (bot == 'biologic') {
        if (player == 'psychic') {
            hasil = 'Anda kalah';
        } else if (player == 'mecha') {
            hasil = 'Anda Menang';
        } else {
            alert("Salah input!")
        }
    } else if (bot == 'mecha') {
        if (player == 'psychic') {
            hasil = 'Anda Menang';
        } else if (player == 'biologic') {
            hasil = 'Anda kalah';
        } else {
            alert("Salah input!")
        }
    }

    alert("Bot memilih " + bot + " sedangkan kamu milih " + player + " hasil permainan: " + hasil);
} else {
    false
}
