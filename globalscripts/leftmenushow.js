var idOpen = {
  1:false,
  2:false,
  3:false,
  4:false,
  5:false,
  6:false,
  7:false,
  8:false,
};

function openAAA(id) {
  if (idOpen[id] == false) {
    document.getElementById("item"+id).style.display = "block";
    document.getElementById("item"+id).style.height = "auto";
    document.getElementById("arrow"+id).style.transform = "rotate(180deg)";
    idOpen[id] = true;
  } else {
    document.getElementById("item"+id).style.height = "0";
    document.getElementById("item"+id).style.display = "none";
    document.getElementById("arrow"+id).style.transform = "rotate(0deg)";
    idOpen[id] = false;
  }
}

function openInternet() {
  openAAA(1);
}

function openSecurity() {
  openAAA(2);
}

function openOffice() {
  openAAA(3);
}

function openMedia() {
  openAAA(4);
}

function openGlaphics() {
  openAAA(5);
}

function openGammers() {
  openAAA(6);
}

function openSystem() {
  openAAA(7);
}

function openDEV() {
  openAAA(8);
}

