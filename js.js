function getcube() {
    var viska = document.getElementById("cislo1").value;
    var sirka = document.getElementById("cislo2").value;

    for (var x = 0; x < viska; x++) {
        for (var y = 0; y < sirka; y++) {
            document.write("x");
        }
        document.write("<br>");
    }
}