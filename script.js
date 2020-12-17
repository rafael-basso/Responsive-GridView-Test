function checkLogin(){
    var passwd01 = document.querySelector('.passwd01').value
    var passwd02 = document.querySelector('.passwd02').value
    var enterName = document.querySelector('.enterName').value

    if (enterName == "" || passwd01 =="" || passwd02 == "") {
        alert('Fill out all the fields')
        return
    }

    if (passwd01 === passwd02) {
        window.open("./loginOk.html")
    }
    else {
        alert("Passwords don't match")
    }
}


