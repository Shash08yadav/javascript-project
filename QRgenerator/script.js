let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generate(){
    qrImage.SRC="https://quickchart.io/qr?text=" + qrText.Value;
}