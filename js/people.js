const peopleData = {
    "GamerCoder215": {
        'name': "GamerCoder215",
        'description': 'Founder and Owner of Team Inceptus.',
        'long_desc': 'GamerCoder215 has been programming since 2020 before the COVID-19 pandemic as a Discord Bot Creator. He has since expanded with the creation of multiple Minecraft mods and plugins, as well as other gaming-related software.',
        'langs': 'Java, HTML, CSS, JavaScript, C, C++',
        'social': [
            {
                'name': 'GitHub',
                'icon': 'github.png',
                'link': 'https://github.com/GamerCoder215'
            },
            {
                'name': 'npm',
                'icon': 'npm.png',
                'link': 'https://www.npmjs.com/~gamercoder215'
            },
            {
                'name': 'Spigot',
                'icon': 'spigot.png',
                'link': 'https://www.spigotmc.org/members/gamercoder215.1229877/'
            },
            {
                'name': 'Discord',
                'icon': 'discord.png',
                'link': 'https://discord.com/users/572173428086538270'
            }
        ]
    },
    'XHellMaster': {
        'name': 'XHellMaster',
        'description': 'Co-Founder and Co-Owner of Team Inceptus.',
        'langs': 'Java, Go, Python, C#',
        'long_desc': 'XHellMaster is a friend of GamerCoder215 and is the Co-Founder of Team Inceptus. He was introduced to Java by him as well. He likes to explore and branch out into new languages and frameworks.',
        'social': [
            {
                'name': 'GitHub',
                'icon': 'github.png',
                'link': 'https://github.com/XHellMaster'
            },
            {
                'name': 'Discord',
                'icon': 'discord.png',
                'link': 'https://discord.com/users/813224666885390347'
            }
        ]
    },
    'Spurious': {
        'name': 'Spurious',
        'description': 'Low-Level Enjoyer and Cat Lover.',
        'langs': 'C, Rust, x86_64 & ARM Assembly, JS, Perl, Ruby',
        'long_desc': 'Spurious is a long-time friend of GamerCoder215 and loves low-level programming. He loves his cat named "Kessy", and has even named his own language and operating systems after it.',
        'social': [
            {
                'name': 'GitHub',
                'icon': 'github.png',
                'link': 'https://github.com/Ian-Marco-Moffett/'
            },
            {
                'name': 'Discord',
                'icon': 'discord.png',
                'link': 'https://discord.com/users/458464472642748416'
            }
        ]
    },
    'Dank_Circle': {
        'name': 'Dank_Circle',
        'description': 'Head of the Build Team. Meme enthusiast.',
        'langs': 'N/A',
        'long_desc': 'Dank_Circle was the first member of TheNoobyGods Hypixel Guild (the group this Organization is based on) and has since stuck with it from the beginning. He hates college.',
        'social': [
            {
                'name': 'Discord',
                'icon': 'discord.png',
                'link': 'https://discord.com/users/385646856706981888'
            }
        ]
    }
}

let current = null;

function loadPeople(element, name) {
    if (current) $(current).css('backgroundColor', '#eee');
    $(element).css('backgroundColor', '#ddd');

    const data = peopleData[name];

    $("#people-info-img").attr("src", `assets/people/${name}.png`);
    $("#people-info-name").html(data.name);
    $("#people-info-desc").html(data.description);
    $("#people-info-long-desc").html(data.long_desc);
    $("#people-info-langs").html(data.langs);

    let socialS = "";

    for (let social in data.social) {
        const socialData = data.social[social];
        socialS += `
            <a href="${socialData.link}" target="_blank">
                <img class="people-info-social" src="assets/social/${socialData.icon}" alt="${socialData.name}" title="${socialData.name}" />
            </a>
        `;
    }

    $("#people-info-social").html(socialS);

    current = element;
}

loadPeople(document.getElementById("people-box-GamerCoder215"), "GamerCoder215");