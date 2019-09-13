function showPass() {
    var x = document.getElementById('password');
    var imgVis = document.getElementById('imgVis')
    if (x.type === 'password' && x.value !== '') {
        x.type = 'text';
        imgVis.remove()
        var eye = document.getElementById('eye').innerHTML = '<i id="imgVis" class="fas fa-eye-slash"></i>'
    } else if (x.type === 'text' && x.value !== '' ){
        x.type = 'password';
        imgVis.remove()
        var eye = document.getElementById('eye').innerHTML = '<i id="imgVis" class="far fa-eye"></i>'
    } return false;
}

function showCheckMark() {
    var checkMark = document.getElementById('checkIt').checked;
    if (checkMark === false) {
        document.getElementById('checkIt').checked = true;
    } else {
        document.getElementById('checkIt').checked = false;
    }
}