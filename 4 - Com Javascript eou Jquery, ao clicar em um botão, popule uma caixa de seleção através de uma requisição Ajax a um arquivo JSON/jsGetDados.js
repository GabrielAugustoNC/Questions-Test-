// JavaScript source code

var testeResponse = '[{"name": "JavaScript"},{"name": "Java"},{"name": "C#"},{"name": "Ajax"},{"name": "CSS3"}]';

// --allow-file-access-from-files
function loadDoc() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            json = JSON.parse(this.responseText);

            boxSelect = document.getElementById("select-box");

            let template = '';

            for (let i in json) {
                template += '<option value="' + json[i].name + '">' + json[i].name + '</option>';
            }

            boxSelect.insertAdjacentHTML('beforeend', template);
        }


    };
    xmlhttp.open("GET", "dados.json", true);
    xmlhttp.send();
}

function loadJson() {
    json = JSON.parse(testeResponse);

    boxSelect = document.getElementById("select-box");

    let template = '';

    for (let i in json) {
        template += '<option value="' + json[i].name + '">' + json[i].name + '</option>';
    }

    boxSelect.insertAdjacentHTML('beforeend', template);

}

setTimeout(function () {
    //loadDoc();

    loadJson();

},2000);
   