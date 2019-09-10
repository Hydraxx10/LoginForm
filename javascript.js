function showPass() {
    var x = document.getElementById('password');
    var imgVis = document.getElementById('imgVis')
    if (x.type === 'password') {
        x.type = 'text';
        imgVis.remove()
        var eye = document.getElementById('eye').innerHTML = '<i id="imgVis" class="fas fa-eye-slash"></i>'
    } else {
        x.type = 'password';
        imgVis.remove()
        var eye = document.getElementById('eye').innerHTML = '<i id="imgVis" class="far fa-eye"></i>'
    } return false;
}