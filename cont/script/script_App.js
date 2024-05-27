//given API & rand functions
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
function getFromMarvelOther(url, query = "") {
    var MD5 = function (d) { var r = M(V(Y(X(d), 8 * d.length))); return r.toLowerCase() }; function M(d) { for (var _, m = "0123456789ABCDEF", f = "", r = 0; r < d.length; r++)_ = d.charCodeAt(r), f += m.charAt(_ >>> 4 & 15) + m.charAt(15 & _); return f } function X(d) { for (var _ = Array(d.length >> 2), m = 0; m < _.length; m++)_[m] = 0; for (m = 0; m < 8 * d.length; m += 8)_[m >> 5] |= (255 & d.charCodeAt(m / 8)) << m % 32; return _ } function V(d) { for (var _ = "", m = 0; m < 32 * d.length; m += 8)_ += String.fromCharCode(d[m >> 5] >>> m % 32 & 255); return _ } function Y(d, _) { d[_ >> 5] |= 128 << _ % 32, d[14 + (_ + 64 >>> 9 << 4)] = _; for (var m = 1732584193, f = -271733879, r = -1732584194, i = 271733878, n = 0; n < d.length; n += 16) { var h = m, t = f, g = r, e = i; f = md5_ii(f = md5_ii(f = md5_ii(f = md5_ii(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_hh(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_gg(f = md5_ff(f = md5_ff(f = md5_ff(f = md5_ff(f, r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 0], 7, -680876936), f, r, d[n + 1], 12, -389564586), m, f, d[n + 2], 17, 606105819), i, m, d[n + 3], 22, -1044525330), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 4], 7, -176418897), f, r, d[n + 5], 12, 1200080426), m, f, d[n + 6], 17, -1473231341), i, m, d[n + 7], 22, -45705983), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 8], 7, 1770035416), f, r, d[n + 9], 12, -1958414417), m, f, d[n + 10], 17, -42063), i, m, d[n + 11], 22, -1990404162), r = md5_ff(r, i = md5_ff(i, m = md5_ff(m, f, r, i, d[n + 12], 7, 1804603682), f, r, d[n + 13], 12, -40341101), m, f, d[n + 14], 17, -1502002290), i, m, d[n + 15], 22, 1236535329), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 1], 5, -165796510), f, r, d[n + 6], 9, -1069501632), m, f, d[n + 11], 14, 643717713), i, m, d[n + 0], 20, -373897302), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 5], 5, -701558691), f, r, d[n + 10], 9, 38016083), m, f, d[n + 15], 14, -660478335), i, m, d[n + 4], 20, -405537848), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 9], 5, 568446438), f, r, d[n + 14], 9, -1019803690), m, f, d[n + 3], 14, -187363961), i, m, d[n + 8], 20, 1163531501), r = md5_gg(r, i = md5_gg(i, m = md5_gg(m, f, r, i, d[n + 13], 5, -1444681467), f, r, d[n + 2], 9, -51403784), m, f, d[n + 7], 14, 1735328473), i, m, d[n + 12], 20, -1926607734), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 5], 4, -378558), f, r, d[n + 8], 11, -2022574463), m, f, d[n + 11], 16, 1839030562), i, m, d[n + 14], 23, -35309556), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 1], 4, -1530992060), f, r, d[n + 4], 11, 1272893353), m, f, d[n + 7], 16, -155497632), i, m, d[n + 10], 23, -1094730640), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 13], 4, 681279174), f, r, d[n + 0], 11, -358537222), m, f, d[n + 3], 16, -722521979), i, m, d[n + 6], 23, 76029189), r = md5_hh(r, i = md5_hh(i, m = md5_hh(m, f, r, i, d[n + 9], 4, -640364487), f, r, d[n + 12], 11, -421815835), m, f, d[n + 15], 16, 530742520), i, m, d[n + 2], 23, -995338651), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 0], 6, -198630844), f, r, d[n + 7], 10, 1126891415), m, f, d[n + 14], 15, -1416354905), i, m, d[n + 5], 21, -57434055), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 12], 6, 1700485571), f, r, d[n + 3], 10, -1894986606), m, f, d[n + 10], 15, -1051523), i, m, d[n + 1], 21, -2054922799), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 8], 6, 1873313359), f, r, d[n + 15], 10, -30611744), m, f, d[n + 6], 15, -1560198380), i, m, d[n + 13], 21, 1309151649), r = md5_ii(r, i = md5_ii(i, m = md5_ii(m, f, r, i, d[n + 4], 6, -145523070), f, r, d[n + 11], 10, -1120210379), m, f, d[n + 2], 15, 718787259), i, m, d[n + 9], 21, -343485551), m = safe_add(m, h), f = safe_add(f, t), r = safe_add(r, g), i = safe_add(i, e) } return Array(m, f, r, i) } function md5_cmn(d, _, m, f, r, i) { return safe_add(bit_rol(safe_add(safe_add(_, d), safe_add(f, i)), r), m) } function md5_ff(d, _, m, f, r, i, n) { return md5_cmn(_ & m | ~_ & f, d, _, r, i, n) } function md5_gg(d, _, m, f, r, i, n) { return md5_cmn(_ & f | m & ~f, d, _, r, i, n) } function md5_hh(d, _, m, f, r, i, n) { return md5_cmn(_ ^ m ^ f, d, _, r, i, n) } function md5_ii(d, _, m, f, r, i, n) { return md5_cmn(m ^ (_ | ~f), d, _, r, i, n) } function safe_add(d, _) { var m = (65535 & d) + (65535 & _); return (d >> 16) + (_ >> 16) + (m >> 16) << 16 | 65535 & m } function bit_rol(d, _) { return d << _ | d >>> 32 - _ }
    var timestamp = Date.now();
    var publicApiKey = "1e300f505ca055ea52a287a486c47ee7"
    var privateApiKey = "a51173d6620d709fbce757f8172db5a9722bc7e9"
    var parameters = `ts=${timestamp}&apikey=${publicApiKey}&hash=${MD5(timestamp + privateApiKey + publicApiKey)}&`

    return fetch(`http://gateway.marvel.com/v1/${url}?${parameters}${query}`)
        .then(response => response.json())
        .catch(error => console.log('error', error));
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

//checks if the hero image exist
function check_Hero(img_Path) {
    if (img_Path == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" || img_Path == "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708") return false;
    return true
}

//CARTE.HTML
//return the page param from the URL
function get_Page_From_Url(url_Search_String) {
    const urlParams = new URLSearchParams(url_Search_String);
    var params = urlParams.get('page');
    if (params == null) params = 1;
    return params;
}
//load cards and API info in the home
function view_Cards() {
    var page = get_Page_From_Url(window.location.search)
    if (page == 1) page = 0;

    getFromMarvel('public/characters', 'offset=' + page * 20).then(result => {

        var cont = document.getElementById("cards_Cont");
        cont.classList.add("main");
        cont.innerHTML = ""

        var cod = "<ul class='cards'>";
        var count = 0;

        for (i = 0; i < 20; i++) {

            if ((check_Hero(result.data.results[i].thumbnail.path))) {
                count++;
                if (result.data.results[i].description != "") {
                    cod += "<li class='cards_item'> <div class='card'> <div class='card_image'> <img src='" + result.data.results[i].thumbnail.path + '.' + result.data.results[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + result.data.results[i].name + "</h2><p class='card_text'>" + result.data.results[i].description + "</p> </div> </div></li>";
                } else {
                    cod += "<li class='cards_item'> <div class='card'> <div class='card_image'> <img src='" + result.data.results[i].thumbnail.path + '.' + result.data.results[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + result.data.results[i].name + "</h2><p class='card_text'>" + result.data.results[i].name + " currently doesn't have a description, we're working on it...</p> </div> </div></li>";
                }
                if (count == 9) break;
            }

        }

        cod += "</ul>"

        cont.innerHTML += cod;
    });
}
//to switch page number (0-77)
function next_Page() {
    var page = get_Page_From_Url(window.location.search);
    if (page == 77) {
        return
    }
    page++;
    window.location.href = "carte.html?page=" + page;
}
function previous_Page() {
    var page = get_Page_From_Url(window.location.search);
    if (page != 1) {
        var page = get_Page_From_Url(window.location.search);
        page--;
        window.location.href = "carte.html?page=" + page;
    }
}
//search the super hero in the game
function search_SuperHero() {
    var SH = document.getElementById("searched_SuperHero").value
    if (SH == "") {
        return;
    }

    getFromMarvel('public/characters', 'nameStartsWith=' + SH).then(result => {

        if (result.data.count != 0) {

            var cont = document.getElementById("cards_Cont");
            cont.classList.add("main");
            cont.innerHTML = "";
            var cod = "<ul class='cards'>";
            for (i = 0; i < result.data.results.length; i++) {

                if ((check_Hero(result.data.results[i].thumbnail.path))) {
                    if (result.data.results[i].description != "") {
                        cod += "<li class='cards_item'> <div class='card'> <div class='card_image'> <img src='" + result.data.results[i].thumbnail.path + '.' + result.data.results[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + result.data.results[i].name + "</h2><p class='card_text'>" + result.data.results[i].description + "</p> </div> </div></li>";
                    } else {
                        cod += "<li class='cards_item'> <div class='card'> <div class='card_image'> <img src='" + result.data.results[i].thumbnail.path + '.' + result.data.results[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + result.data.results[i].name + "</h2><p class='card_text'>" + result.data.results[i].name + " currently doesn't have a description, we're working on it...</p> </div> </div></li>";
                    }
                }
            }

            cod += "</ul>";
            cont.innerHTML += cod;

        } else {
            var cont = document.getElementById("cards_Cont");
            cont.classList.add("container");
            cont.style.marginTop = "1%"
            cont.innerHTML = "";
            var cod = "<div class='alert alert-danger text-center' role='alert'><b>Carta inesistente!</b></div>"
            cont.innerHTML += cod;
        }
        document.getElementById("switch").innerHTML = "<div class='text-center'><a href='carte.html'><button class='btn btn-dark'>torna alla home</button></a></div><br>"

    });

}

//ACCOUNT.HTML / MODIFICHE.HTML
//makes fav_Hero_Name equals to the searched super
function add_Favorite_Hero(new_Fav_Hero) {
    var new_Fav_Hero = nome_Fav
    document.getElementById('new_Fav').remove();

    var pre_Cont_Local = read_object_from_local_storage("users");
    var cont_Local = pre_Cont_Local.filter(function (us) {
        return us.nome !== nomeUtente;
    });
    var fav_User = pre_Cont_Local.filter(function (us) {
        return us.nome === nomeUtente;
    });

    fav_User[0].favorite_Hero = new_Fav_Hero;
    cont_Local.push(fav_User[0]);

    write_object_to_local_storage([], "users");
    write_object_to_local_storage(cont_Local, "users")
    alert("Eroe preferito cambiato con successo!");
    location.reload();
}
//search to modifies the favorite hero
function search_Another_Fav() {
    var SH = document.getElementById("searched_SuperHero").value;
    if (SH == "") {
        return;
    }

    getFromMarvel('public/characters', 'nameStartsWith=' + SH).then(result => {

        if (result.data.count != 0 && (check_Hero(result.data.results[0].thumbnail.path))) {
            document.getElementById("fav_Hero_Cont").innerHTML = "<img src='" + result.data.results[0].thumbnail.path + "." + result.data.results[0].thumbnail.extension + "' id='fav_Hero_Img' class='img_Cards' style = 'height:33.5vh;margin-top:5%;border-radius: 50%;'>";
            nome_Fav = result.data.results[0].name
            document.getElementById("new_Button").innerHTML = '<button class="btn btn-dark" onclick="add_Favorite_Hero()" id="new_Fav">Cambia ereo preferito</button>';
        } else {
            document.getElementById("fav_Hero_Cont").innerHTML = "<div class='alert alert-danger text-center' role='alert' style='margin-top:2%;'><b>Carta inesistente o senza foto!!</b></div>"
            document.getElementById("new_Button").innerHTML = "";
        }

    });
}
//toggle password type text/password
function toggle_Password() {
    var x = document.getElementById("password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}
//checks the account chenges
function check_Changes() {
    var result = true;

    var errore = document.getElementById("warningErrore");
    errore.innerHTML = "";

    var pre_Cont_Local = read_object_from_local_storage("users");
    var fav_Hero_Name = nome_Fav;

    var cont_Local = pre_Cont_Local.filter(function (us) {
        return us.nome !== nomeUtente;
    });

    var user_Det = pre_Cont_Local.filter(function (uss) {
        return uss.nome === nomeUtente;
    });

    //check username
    var nome = document.getElementById("name").value;
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
    var email = document.getElementById("email").value;
    var regexEmail = /^\S+@\S+\.\S+/;
    if (!email.match(regexEmail)) {
        errore.innerHTML += "Email non valida<br>"
        result = false;
    }

    //check password
    var password = document.getElementById("password").value;
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
    if (!password.match(regexPassword)) {
        errore.innerHTML += "La password deve contenere da 8 a 15 caratteri, avere minimo una lettera maiuscola, un numero e un carattere speciale<br>"
        result = false;
    }

    //check doubles usernames in local
    if (cont_Local != null) {
        for (i = 0; i < cont_Local.length; i++) {
            if (cont_Local[i].nome == nome) {
                errore.innerHTML += "Nome Utente già in uso<br>"
                result = false;
                break;
            }
        }
    }

    //check doubles emails in local
    if (cont_Local != null) {
        for (i = 0; i < cont_Local.length; i++) {
            if (cont_Local[i].email == email) {
                errore.innerHTML += "Email già in uso<br>"
                result = false;
                break;
            }
        }
    }

    //if all checks pass, then create the user e save in local
    if (result == true) {
        const utente = {
            "nome": nome,
            "email": email,
            "password": password,
            "credit": user_Det[0].credit,
            "favorite_Hero": fav_Hero_Name,
            "deck": user_Det[0].deck
        };
        cont_Local.push(utente)
        sessionStorage.setItem("loggedUser", nome);
        write_object_to_local_storage([], "users");
        write_object_to_local_storage(cont_Local, "users")
        alert("Credenziali modificate con successo!");
    }

    return result;
}
//delete the account and all the relative exchanges and return to log-in page
function delete_Acc() {
    var pre_Cont_Local = read_object_from_local_storage("users");
    var cont_Local = pre_Cont_Local.filter(function (us) {
        return us.nome !== nomeUtente;
    });

    var exchanges_List = read_object_from_local_storage("exchanges")
    if (exchanges_List != null){
        var exchange_New = exchanges_List.filter(function (us) {
            return us.user_Name !== nomeUtente;
        });
        write_object_to_local_storage(exchange_New, "exchanges")
    }


    write_object_to_local_storage([], "users");
    write_object_to_local_storage(cont_Local, "users")
    sessionStorage.clear('loggedUser')
    sessionStorage.clear('creditUser')
    window.location.href = "signUp.html"
}

//NEGOZIO.HTML
//open a pack of 5 random hero cards
function open_Pack() {
    if(credit == 0) {
        alert("Non hai abbastanza crediti");
        return
    }

    document.getElementById("subnav").remove();
    document.getElementById("cont_Pack").remove();

    document.getElementById("card_Load").innerHTML += '<div class="container text-center"> <div class="lds-ellipsis"> <div></div> <div></div> <div></div> <div></div>';
    
    var arr = [];
    for(i = 0; i < 15; i ++) {
        var random = getRandomInt(0,1563);
        getFromMarvel('public/characters', 'offset=' + random).then(result => {
            if (check_Hero(result.data.results[0].thumbnail.path)) {
                if (arr.length < 5) {
                    arr.push(result.data.results[0]);
                    if(arr.length == 5) {
                        var logged_User = sessionStorage.getItem("loggedUser");
                        save_In_Local_To_Deck(arr,1,logged_User);
                        show_Cards(arr);
                    }
                }
            }
        });
    }
}
//save the cards of open_Pack() and charge 1 credit
function save_In_Local_To_Deck(arr,n,user) {
    var pre_Cont_Local = read_object_from_local_storage("users");
    var cont_Local = pre_Cont_Local.filter(function (us) {
        return us.nome != user;
    });

    var user_Cont = pre_Cont_Local.filter(function (uss) {
        return uss.nome === user;
    });

    for(i = 0; i < arr.length; i ++) {
        var obj = {
            "id": arr[i].id,
            "name": arr[i].name,
            "description": arr[i].description,
            "thumbnail": { 
                "path": arr[i].thumbnail.path, 
                "extension": arr[i].thumbnail.extension
            }
        };
        user_Cont[0].deck.push(obj);
    }

    if (user_Cont[0].credit > 0) {
        user_Cont[0].credit -= n;
    }

    cont_Local.push(user_Cont[0]);
    write_object_to_local_storage(cont_Local, "users")
}
//show the cards of open_Pack()
function show_Cards(arr) {

    document.getElementById("card_Load").innerHTML = '<div></div>';
    var cont = '';

    cont += '<div class="container" style="height: 500px;width: 370px;">';
    cont += '<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">'
    
    cont += '<div class="carousel-indicators">'
    cont += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>'
    cont += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>'
    cont += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>'
    cont += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>'
    cont += '<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button></div>'

    cont += '<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">';
    cont += '<span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Previous</span> </button>';
    cont += '<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">';
    cont += '<span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Next</span> </button>';

    cont += '<div class="carousel-inner">'

    cont += '<div class="carousel-item active card_item" data-bs-interval="2000">'
    if (arr[0].description != "") {
        cont += "<div class='card'> <div class='card_image'> <img src='" + arr[0].thumbnail.path + '.' + arr[0].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + arr[0].name + "</h2><p class='card_text'>" + arr[0].description + "</p> </div> </div> </div>";
    } else {
        cont += "<div class='card'> <div class='card_image'> <img src='" + arr[0].thumbnail.path + '.' + arr[0].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + arr[0].name + "</h2><p class='card_text'>" + arr[0].name + "currently doesn't have a description, we're working on it...</p> </div> </div> </div>";
    }
    
    for(i = 1; i < 5; i ++) {
        cont += '<div class="carousel-item" data-bs-interval="2000"> ';
        if (arr[i].description != "") {
            cont += "<div class='card'> <div class='card_image'> <img src='" + arr[i].thumbnail.path + '.' + arr[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + arr[i].name + "</h2><p class='card_text'>" + arr[i].description + "</p> </div> </div> </div>";
        } else {
            cont += "<div class='card'> <div class='card_image'> <img src='" + arr[i].thumbnail.path + '.' + arr[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content'> <h2 class='card_title'>" + arr[i].name + "</h2><p class='card_text'>" + arr[i].name + "currently doesn't have a description, we're working on it...</p> </div> </div> </div>";
        }
    }
    cont += '</div></div><br>';
    cont += '<div class = "row text-center"><div class="col-6"><button type="button" style="height: 38px;width: 150px;border-radius: 15%;background-color: rgb(5, 6, 45);border: 3px solid #5B42F3;" onclick="location.reload()"><span style="color: white;font-size: 20px;font-weight:300;">Shop</span></button></div><div class="col-6"><a href="home.html"><button type="button" style="height: 38px;width: 150px;border-radius: 15%;background-color: rgb(5, 6, 45);border: 3px solid #5B42F3;"><span style="color: white;font-size: 20px;font-weight:300;">Album</span></button></a></div></div>';

    document.getElementById("cont_Card").innerHTML = cont;
}
//set user credit from local
function set_Credit() {
    var logged_User = sessionStorage.getItem("loggedUser")
    var cont_Local = read_object_from_local_storage("users");
    var user_Cont = cont_Local.filter(function (us) {
        return us.nome === logged_User;
    });
    return user_Cont[0].credit;
}   
//payment form to buy credit
function payment_Form() {
    document.getElementById("warning_Err").innerHTML = "";
    var credit_To_Add = document.getElementById("selected_Credit").value;
    var name_Sur = document.getElementById("nome_Cognome").value;
    var card_Num = document.getElementById("card_numb").value;
    var cvv = document.getElementById("cvv").value;

    if (credit_To_Add == 0 || name_Sur == "" || card_Num == "" || cvv == "") {
        document.getElementById("warning_Err").innerHTML += "Compila tutti i campi prima<br>"
    } else {
        if (card_Num.length < 16) {
            document.getElementById("warning_Err").innerHTML += "Numero della carta invalido<br>"
        } else {
            var logged_User = sessionStorage.getItem("loggedUser");
            var pre_Cont_Local = read_object_from_local_storage("users");
            var cont_Local = pre_Cont_Local.filter(function (us) {
                return us.nome != logged_User;
            });

            var user_Cont = pre_Cont_Local.filter(function (uss) {
                return uss.nome === logged_User;
            });

            user_Cont[0].credit += parseInt(credit_To_Add);

            cont_Local.push(user_Cont[0]);
            write_object_to_local_storage(cont_Local, "users")
            location.reload();
        }
    }

}

//HOME.HTML
//load cards and API info in the home
function view_Deck_Cards() {
    var logged_User = sessionStorage.getItem("loggedUser");
    var cont = document.getElementById("cards_Cont");
    var pre_Cont_Local = read_object_from_local_storage("users");
    var user_Deck = pre_Cont_Local.filter(function (uss) {
        return uss.nome === logged_User;
    });

    user_Deck[0].deck.sort((a, b) => a.name.localeCompare(b.name));

    if(user_Deck[0].deck.length == 0) {
        cont.classList.add("container");
        cont.style.marginTop = "1%"
        cont.innerHTML = "";
        var cod = "<div class='alert alert-primary text-center' role='alert'><b>Album di figurine vuoto</b></div><div class='container text-center'><a type='button' class='btn btn-primary' href='negozio.html'>Vai allo shop</a></div>";
        cont.innerHTML += cod;
        return;
    }

    cont.classList.add("main");
    cont.innerHTML = "";
    var cod = "<ul class='cards'>";

    for(i = 0; i < user_Deck[0].deck.length; i++) {
        if ((check_Hero(user_Deck[0].deck[i].thumbnail.path))) {
            if (user_Deck[0].deck[i].description != "" && user_Deck[0].deck[i].description != " ") {
                var str = JSON.stringify(user_Deck[0].deck[i].id);
                var nome = JSON.stringify(user_Deck[0].deck[i].name);
                cod += "<li class='cards_item'> <div class='card'> <div class='card_image'> <img src='" + user_Deck[0].deck[i].thumbnail.path + '.' + user_Deck[0].deck[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + user_Deck[0].deck[i].name + "</h2><p class='card_text'>" + user_Deck[0].deck[i].description + "</p> </div> <div class='d-grid gap-2 align-items-end'> <a type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' onclick='view_Info(" + str + "," + nome +")'>Altre info</a>  </div> </div></li>";
            } else {
                var str = JSON.stringify(user_Deck[0].deck[i].id);
                var nome = JSON.stringify(user_Deck[0].deck[i].name);
                cod += "<li class='cards_item'> <div class='card'> <div class='card_image'> <img src='" + user_Deck[0].deck[i].thumbnail.path + '.' + user_Deck[0].deck[i].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + user_Deck[0].deck[i].name + "</h2><p class='card_text'>" + user_Deck[0].deck[i].name + " currently doesn't have a description, we're working on it...</p> </div> <div class='d-grid gap-2 align-items-end'> <a type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#exampleModal' onclick='view_Info(" + str + "," + nome + ")'>Altre info</a>  </div> </div></li>";
            }
        }

    }

    cod += "</ul>";
    cont.innerHTML += cod;
}
//load other SH info
function view_Info(id,name) {
    document.getElementById("exampleModalLabel").innerHTML = "";
    document.getElementById("exampleModalLabel").innerHTML += name;

    var series = document.getElementById("series");
    series.innerHTML = "";
    getFromMarvelOther('public/characters', 'id=' + id).then(result => {
        if (result.data.results[0].series.items.length == 0) {
            series.innerHTML += name + " non è presente in nessuna serie<br>";
        }
        for (i = 0; i < result.data.results[0].series.items.length; i++) {
            series.innerHTML += result.data.results[0].series.items[i].name + "<br>";
        }
    });
    
    var events = document.getElementById("events");
    events.innerHTML = "";
    getFromMarvelOther('public/characters','id='+id).then(result => {
        if (result.data.results[0].events.items.length == 0) {
            events.innerHTML += name + " non è presente in nessun evento<br>";
        }
        for (i = 0; i < result.data.results[0].events.items.length; i ++) {
            events.innerHTML += result.data.results[0].events.items[i].name + "<br>";
        }
    });

    var comics = document.getElementById("comics");
    comics.innerHTML = "";
    getFromMarvelOther('public/characters', 'id=' + id).then(result => {
        if (result.data.results[0].comics.items.length == 0) {
            comics.innerHTML += name + " non è presente in nessun comics<br>";
        }
        for (i = 0; i < result.data.results[0].comics.items.length; i++) {
            comics.innerHTML += result.data.results[0].comics.items[i].name + "<br>";
        }
    });
}

//SCAMBI.HTML
//load dobble cards
function load_Dobbles(){
    var logged_User = sessionStorage.getItem("loggedUser");
    var pre_Cont_Local = read_object_from_local_storage("users");
    var user_Deck = pre_Cont_Local.filter(function (uss) {
        return uss.nome === logged_User;
    });

    //Get all dobble card
    var data = user_Deck[0].deck;
    var countList = data.reduce(function (p, c) {
        p[c.id] = (p[c.id] || 0) + 1;
        return p;
    }, {});
    var result = data.filter(function (obj) {
        return countList[obj.id] > 1;
    });
    //filter the dobbles
    const unique = result.filter(
        (obj, index) =>
            result.findIndex((item) => item.id === obj.id) === index
    );
    //Write in select
    var opt_Dobble = document.getElementById("select_Dobble");
    if (unique.length == 0) {
        document.getElementById("searched").remove();
        document.getElementById("searchedB").remove();
        document.getElementById("warning_Dobble").innerHTML = "Non hai carte doppie";
        document.getElementById("search_Zone").innerHTML += '<input class="form-control border-end-0 border rounded-pill" type="search" placeholder="Cerca carta" id="searched" disabled>';
        document.getElementById("search_Zone").innerHTML += '<button id="serchedB" class="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5" type="button" onclick="view_Searched_Card()" disabled><i class="bi bi-search"></i></button>';
    }
    for (i = 0; i < unique.length; i++) {
        opt_Dobble.innerHTML += '<option value="' + i +'">' + unique[i].name + '</option>';
    }
    return unique;
}
//view selected dobble card
function view_Dobble_Card() {
    document.getElementById("warning_Err").innerHTML = "";
    var view = document.getElementById("dobble_Card");
    var index = document.getElementById("select_Dobble").value;
    dobble_Card_To_Exchange = cards[index];
    view.innerHTML = "";
    view.innerHTML = "<div class='card'> <div class='card_image'> <img src='" + cards[index].thumbnail.path + '.' + cards[index].thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + cards[index].name + "</h2><p class='card_text'></div> </div>";
}
//view searched to exchange
function view_Searched_Card() {
    document.getElementById("warning_Err").innerHTML = "";
    var s = document.getElementById("searched").value;
    if (s == "") {
        return;
    }

    getFromMarvelOther('public/characters', 'nameStartsWith=' + s).then(result => {
        var view = document.getElementById("searched_Card");

        if (result.data.results[0] == null || !(check_Hero(result.data.results[0].thumbnail.path))) {
            view.innerHTML = "<div class='alert alert-danger text-center' role='alert' style='margin-top:2%;'><b>Carta inesistente o senza foto!</b></div>";
            return;
        }
        var index = document.getElementById("select_Dobble").value;
        
        var card = result.data.results[0];
        new_Card_To_Exchange = card;
        view.innerHTML = "<div class='card'> <div class='card_image'> <img src='" + card.thumbnail.path + '.' + card.thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + card.name + "</h2><p class='card_text'></div> </div>";
        if (cards[index].name == result.data.results[0].name) {
            document.getElementById("warning_Err").innerHTML = "Carte uguali, scegli un'altra carta!<br>";
            new_Card_To_Exchange = {};
            return;
        }
    });

}
//add a new exchange
function add_Exchange() {

    if (Object.keys(dobble_Card_To_Exchange).length == 0 || Object.keys(new_Card_To_Exchange).length == 0) {
        document.getElementById("warning_Err").innerHTML = "Scegli tutti i campi prima!";
    } else {
        remove_Card(dobble_Card_To_Exchange);

        var new_Card = {
            "id": new_Card_To_Exchange.id,
            "name": new_Card_To_Exchange.name,
            "description": new_Card_To_Exchange.description,
            "thumbnail": {
                path: new_Card_To_Exchange.thumbnail.path,
                extension: new_Card_To_Exchange.thumbnail.extension
            }
        }
        var new_Exchange = {
            "user_Name": sessionStorage.getItem("loggedUser"),
            "dobble_Card_To_Exchange": dobble_Card_To_Exchange,
            "new_Card_To_Exchange": new_Card
        }
        if (read_object_from_local_storage("exchanges") == null) {
            write_object_to_local_storage([], "exchanges")
            var arr = [];
            arr.push(new_Exchange);
            write_object_to_local_storage(arr, "exchanges")
        } else {
            var local_Exchanges = read_object_from_local_storage("exchanges");
            local_Exchanges.push(new_Exchange);
            write_object_to_local_storage(local_Exchanges,"exchanges");
        }
        location.reload();
    }

}
//load exchanges on page load
function load_Exchanges() {
    var logged_User = sessionStorage.getItem("loggedUser");
    var view_Exchanges_Cod = document.getElementById("exchanges_List");
    var view_Exchanges = "";
    var exg_Arr = read_object_from_local_storage("exchanges");
    if(exg_Arr == null) {
        return;
    }
    
    for(i = 0; i < exg_Arr.length; i ++) {
        if(exg_Arr[i].user_Name == logged_User) {
            continue;
        }
        view_Exchanges += '<div class="row" style="margin-right: 10%;height: 100%;width: 70%;margin-left: 1%;">';
        view_Exchanges += '<div class="col-4">';
        view_Exchanges += "<div class='card'> <div class='card_image'> <img src='" + exg_Arr[i].dobble_Card_To_Exchange.thumbnail.path + '.' + exg_Arr[i].dobble_Card_To_Exchange.thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + exg_Arr[i].dobble_Card_To_Exchange.name + "</h2><p class='card_text'></div> </div>";
        view_Exchanges += '</div>';
        view_Exchanges += ' <div class="col-4 text-center"><br><h3 style="color:black;"><i>' + exg_Arr[i].user_Name + '</i></h3><img src="img/exchange.png" style="width: 80%;height: 50%;margin-top: 10%;"><br><button type="button" class="btn btn-success" style="margin-left: 3%;color: white;font-size: 80%;" onclick="exchange(' + "'" + exg_Arr[i].user_Name + "'" + "," + "'" + exg_Arr[i].dobble_Card_To_Exchange.name + "'" + "," + "'" + exg_Arr[i].new_Card_To_Exchange.name + "'" + ')"><b>SCAMBIA</b></button></div>';
        view_Exchanges += '<div class="col-4">';
        view_Exchanges += "<div class='card'> <div class='card_image'> <img src='" + exg_Arr[i].new_Card_To_Exchange.thumbnail.path + '.' + exg_Arr[i].new_Card_To_Exchange.thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + exg_Arr[i].new_Card_To_Exchange.name + "</h2><p class='card_text'></div> </div>";
        view_Exchanges += '</div>';
        view_Exchanges += '</div><br>';
    }

    view_Exchanges += '<div class="container"><hr style="color:white;"></div><h3 style="margin-left:2%;color:white;"><a name="exg_P">I miei scambi</a><h3><br>';

    for (i = 0; i < exg_Arr.length; i++) {
        if (exg_Arr[i].user_Name != logged_User) {
            continue;
        }
        view_Exchanges += '<div class="row" style="margin-right: 10%;height: 100%;width: 70%;margin-left: 1%;">';
        view_Exchanges += '<div class="col-4">';
        view_Exchanges += "<div class='card'> <div class='card_image'> <img src='" + exg_Arr[i].dobble_Card_To_Exchange.thumbnail.path + '.' + exg_Arr[i].dobble_Card_To_Exchange.thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + exg_Arr[i].dobble_Card_To_Exchange.name + "</h2><p class='card_text'></div> </div>";
        view_Exchanges += '</div>';
        view_Exchanges += ' <div class="col-4 text-center"><br><h3 style="color:black;"><i></i></h3><img src="img/exchange.png" style="width: 80%;height: 50%;margin-top: 10%;"><br></div>';
        view_Exchanges += '<div class="col-4">';
        view_Exchanges += "<div class='card'> <div class='card_image'> <img src='" + exg_Arr[i].new_Card_To_Exchange.thumbnail.path + '.' + exg_Arr[i].new_Card_To_Exchange.thumbnail.extension + "' class='img_Cards'> </div> <div class='card_content' style='height:100%;'> <h2 class='card_title'>" + exg_Arr[i].new_Card_To_Exchange.name + "</h2><p class='card_text'></div> </div>";
        view_Exchanges += '</div>';
        view_Exchanges += '</div><br>';
    }


    view_Exchanges_Cod.innerHTML = view_Exchanges;

}
//remove the card of the added exchange
function remove_Card(c) {

    var logged_User = sessionStorage.getItem("loggedUser");
    var pre_Cont_Local = read_object_from_local_storage("users");
    var user_Deck = pre_Cont_Local.filter(function (uss) {
        return uss.nome === logged_User;
    });
    var to_Save = pre_Cont_Local.filter(function (uss) {
        return uss.nome !== logged_User;
    });

    var arr = [];
    var count_Check = 0;
    for(i = 0; i < user_Deck[0].deck.length; i ++) {
        if (user_Deck[0].deck[i].id == c.id) {
            count_Check ++;
            continue;
        }
        arr.push(user_Deck[0].deck[i])
    }
    count_Check --;
    for(i = 0; i < count_Check; i ++) {
        arr.push(c);
    }
    user_Deck[0].deck = arr;
    to_Save.push(user_Deck[0])

    write_object_to_local_storage(to_Save,"users")

}
//on accept check and exchange
function exchange(name,card_To,card_New) {
    var logged_User = sessionStorage.getItem("loggedUser");
    var pre_Cont_Local = read_object_from_local_storage("users");
    var user_Deck = pre_Cont_Local.filter(function (uss) {
        return uss.nome === logged_User;
    });

    var data = user_Deck[0].deck;

    var check = data.filter(function (uss) {
        return uss.name === card_New;
    });

    if(check.length > 1) {
        var exchanges_List = read_object_from_local_storage("exchanges")
        var exchange_To_Remove_Pre = exchanges_List.filter(function (us) {
            return us.dobble_Card_To_Exchange.name === card_To;
        });
        var exchange_To_Remove_Pre2 = exchange_To_Remove_Pre.filter(function (use) {
            return use.new_Card_To_Exchange.name === card_New;
        });
        var exchange_To_Remove = exchange_To_Remove_Pre2.filter(function (usee) {
            return usee.user_Name === name;
        });

        var exg_Arr = [];
        for(i = 0; i < exchanges_List.length; i ++) {
            if (JSON.stringify(exchanges_List[i]) != JSON.stringify(exchange_To_Remove[0])) {
                exg_Arr.push(exchanges_List[i]);
            }
        }
        write_object_to_local_storage(exg_Arr,"exchanges")

        exchange_Do(name, card_To, card_New);
    } else {
        alert("non possiedi un doppione di "+card_New+"!")
    }
}
//actual exchange
function exchange_Do(name, card_To, card_New) {
    var logged_User = sessionStorage.getItem("loggedUser");
    getFromMarvelOther('public/characters', 'name=' + card_To).then(result => {
        var arr = [];
        arr.push(result.data.results[0])
        save_In_Local_To_Deck(arr, 0, logged_User);
    });

    getFromMarvelOther('public/characters', 'name=' + card_New).then(result => {
        var obj = {
            "id": result.data.results[0].id,
            "name": result.data.results[0].name,
            "description": result.data.results[0].description,
            "thumbnail": {
                path: result.data.results[0].thumbnail.path,
                extension: result.data.results[0].thumbnail.extension
            }
        }
        remove_Card(obj)
        var arr = [];
        arr.push(result.data.results[0])
        save_In_Local_To_Deck(arr, 0, name);
        alert("scambio andato a buon fine!");
        location.reload();
    });
} 

//TEST buttons add iron man and thor
    //to remove
function add_Iron_Man() {
    getFromMarvelOther('public/characters', 'name=iron man').then(result => {
        var logged_User = sessionStorage.getItem("loggedUser");
        var arr = [];
        arr.push(result.data.results[0])
        save_In_Local_To_Deck(arr, 0, logged_User);
        location.reload();
    });
}
function add_Thor_Man() {
    getFromMarvelOther('public/characters', 'name=thor').then(result => {
        var logged_User = sessionStorage.getItem("loggedUser");
        var arr = [];
        arr.push(result.data.results[0])
        save_In_Local_To_Deck(arr, 0, logged_User);
        location.reload();
    });
}

