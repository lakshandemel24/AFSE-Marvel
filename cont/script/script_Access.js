//given API function
function getFromMarvel(url, query = "") {
    var MD5 = function (d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
    var timestamp = Date.now();
    var publicApiKey = "eb57451d3e3394a6b9045cf900ca4673"
    var privateApiKey = "cf5c9d582f41097d173785a0728422ff8a96250e"
    var parameters = `ts=${timestamp}&apikey=${publicApiKey}&hash=${MD5(timestamp + privateApiKey + publicApiKey)}&`

    return fetch(`http://gateway.marvel.com/v1/${url}?${parameters}${query}`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}
//reads from local the string and parse it to an object
function read_object_from_local_storage(key) {
    var item = window.localStorage.getItem(key)
    return JSON.parse(item)
}
//converts the object to a string and save it in local
function write_object_to_local_storage(obj, key) {
    var item = JSON.stringify(obj)
    window.localStorage.setItem(key, item);
}
//toggle password type text/password
function toggle_Password() {
    var x = document.getElementById("passwordUtente");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//saves the object by reference to the key, obeject can be any type 
    //calling functions: read_object_from_local_storage(key) write_object_from_local_storage(obj,key)
function save_In_Local(key, obj) {
    if (read_object_from_local_storage(key) == null) {
        write_object_to_local_storage([], key);
    }

    var arr = read_object_from_local_storage(key);
    arr.push(obj);
    
    write_object_to_local_storage(arr, key)
}
//check sign-up form fields and save in local the user
    //calling functions: read_object_from_local_storage(key), write_object_from_local_storage(obj,key), save_In_Local(key,obj)
function check_SignUp() {
    var result = true;

    var errore = document.getElementById("warningErrore");
    errore.innerHTML = "";

    //check username
    var nome = document.getElementById("nomeUtente").value;
    var regexNome = /^[a-z0-9\s]+$/i;
    if (nome.length < 5 || nome.length > 15) {
        errore.innerHTML += "Il nome utente deve contenere da 5 a 15 caratteri<br>"
        result = false;
    }
    if (!nome.match(regexNome)) {
        errore.innerHTML += "Il nome utente non può contenere caratteri speciali<br>"
        result = false;
    }
    var countNum = nome.replace(/\D/g, '').length;
    if (countNum != 2) {
        errore.innerHTML += "Il nome utente deve contenere esattamente due numeri<br>"
        result = false;
    }

    //check email
    var email = document.getElementById("emailUtente").value;
    var regexEmail = /^\S+@\S+\.\S+/;
    if (!email.match(regexEmail)) {
        errore.innerHTML += "Email non valida<br>"
        result = false;
    }

    //check password
    var password = document.getElementById("passwordUtente").value;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (!password.match(regexPassword)) {
        errore.innerHTML += "Password troppo debole<br>";
        //"La password deve contenere da 8 a 15 caratteri, avere minimo una lettera maiuscola, un numero e un carattere speciale<br>"
        result = false;
    }

    //check doubles usernames in local
    var names = read_object_from_local_storage('users');
    if (names != null) {
        for (i = 0; i < names.length; i++) {
            if (names[i].nome == nome) {
                errore.innerHTML += "Nome Utente già in uso<br>"
                result = false;
                break;
            }
        }
    }

    //check doubles emails in local
    var emails = read_object_from_local_storage('users');
    if (emails != null) {
        for (i = 0; i < emails.length; i++) {
            if (emails[i].email == email) {
                errore.innerHTML += "Email già in uso<br>"
                result = false;
                break;
            }
        }
    }

    //checks if the favorite super hero is chosen
    if(fav_Hero_Name == "") {
        document.getElementById("warningErrore_Hero").innerHTML = "Cerca il tuo super eroe preferito<br>";
        result = false;
    }

    //if all checks pass, then create the user e save in local
    if (result == true) {

        const utente = {
            "nome": nome,
            "email": email,
            "password": password,
            "credit" : 0,
            "favorite_Hero" : fav_Hero_Name,
            "deck" : []
        };
        save_In_Local('users', utente);
        sessionStorage.setItem("loggedUser", nome);
    }

    return result;
}
//checks if the hero image exist
function check_Hero(img_Path) {
    if (img_Path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" || img_Path == "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708") return false;
    return true
}
//search the super hero
function search_SuperHero() {
    var SH = document.getElementById("searched_SuperHero").value;
    if(SH == "") {
        return;
    }

    getFromMarvel('public/characters', 'nameStartsWith=' + SH).then(result => {

        if (result.data.count != 0 && (check_Hero(result.data.results[0].thumbnail.path))) {

            var cont = document.getElementById("cards_Cont");
            //cont.classList.add("main");
            cont.style.height = "40vh";
            cont.innerHTML = "";
            var cod = "";
                
            cod += "<div class='container'> <img src='" + result.data.results[0].thumbnail.path + '.' + result.data.results[0].thumbnail.extension + "' class='img_Cards' style = 'height:33.5vh;margin-top:5%;border-radius: 50%;'>";
            cod += "<div class='d-grid gap-2 col-6 mx-auto'> <button class='btn btn-danger' type='button' style='--bs-btn-padding-y: .25rem; --bs-btn-padding-x: .5rem; --bs-btn-font-size: .75rem;' onclick='add_Favorite_Hero()' id='hero_Button'>SELEZIONA</button> </div> </div>"

            cont.innerHTML += cod;
        } else {
            var cont = document.getElementById("cards_Cont");
            cont.classList.add("container");
            cont.style.marginTop = "5%"
            cont.innerHTML = "";
            var cod = "<div class='alert alert-danger text-center' role='alert'><b>Carta inesistente o senza foto!</b></div>"
            cont.innerHTML += cod;
        }

    });

}
//makes fav_Hero_Name equals to the searched super
function add_Favorite_Hero() {
    fav_Hero_Name = document.getElementById("searched_SuperHero").value;
    document.getElementById('hero_Button').remove();
    document.getElementById("warningErrore_Hero").remove();
}
//log-in registered users by username and password
function log_In() {
    var email = document.getElementById("emailUtente").value;
    var password = document.getElementById("passwordUtente").value;

    var utenti = read_object_from_local_storage('users');
    if(utenti != null) {
        for(i = 0; i < utenti.length; i++) {
            if((utenti[i].email == email) && (utenti[i].password == password)) {
                sessionStorage.setItem("loggedUser",utenti[i].nome)
                return true;
            }
        }
    }

    var errore = document.getElementById("warningErrore");
    errore.innerHTML = "Credenziali errate, riprovare!<br>";
    return false;
}

