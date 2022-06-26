function onHover(text) {
    $("#member-text").text(text);
}

function awayHover() {
    $("#member-text").text("");
}

window.onload = function() {
    $(".number").each(async function(index, element) {
        let value = await window[element.getAttribute("function")]();

        for (let i = 0; i < value;) {
            $(element).text(i.toLocaleString("en-US"));
            if (i < 200) {
                await sleep(1 / i);
                i++;
            } else {
                await sleep(10);
                i += Math.min(Math.floor(i / 13), value - (i + 1));
            }
        }
    })

    $(".suffix").each(async function(index, element) {
        let value = await window[element.getAttribute("function")]();

        $(element).text(" " + value);
    });
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getSize() {
    const url = "https://api.github.com/orgs/Team-Inceptus/repos"
    let size = 0;
    let data = JSON.parse(await makeRequest("GET", url));

    for (let i = 0; i < data.length; i++) {
        size += data[i].size;
    }

    const url2 = "https://api.github.com/users/GamerCoder215/repos"
    let data2 = JSON.parse(await makeRequest("GET", url2));

    for (let i = 0; i < data.length; i++) {
        size += data2[i].size;
    }

    console.log(size);

    return size * 1024;
}

async function getDownloads() {
    const url = "https://api.spiget.org/v2/authors/1229877/resources"
    let downloads = 0;

    let data = JSON.parse(await makeRequest("GET", url));

    for (let i = 0; i < data.length; i++) {
        downloads += data[i].downloads;
    }

    return downloads;
}

async function getStars() {
    const url = "https://api.github.com/orgs/Team-Inceptus/repos"
    let stars = 0;
    let data = JSON.parse(await makeRequest("GET", url));

    for (let i = 0; i < data.length; i++) {
        stars += data[i].stargazers_count;
    }

    const url2 = "https://api.github.com/users/GamerCoder215/repos"
    let data2 = JSON.parse(await makeRequest("GET", url2));

    for (let i = 0; i < data.length; i++) {
        stars += data2[i].stargazers_count;
    }

    return stars;
}

function makeRequest(method, url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(xhr.response);
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}