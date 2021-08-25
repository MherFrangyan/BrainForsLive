var clickChangeSlideDown = document.querySelectorAll('.scroll_down'),
    clickChangeSlideUp = document.querySelectorAll('.scroll_up');
var navLink = document.querySelectorAll('.view_item'),
    dicrementElectrical = 0,
    dicrementHealth = 0,
    dicrementBusiness = 0,
    dicrementMedia = 0,
    dicrementMarketing = 0,
    dicrementFood = 0,
    dicrementTravel = 0,
    dicrementGames = 0,
    dicrementOther = 0;

var animation1 = gsap.timeline({onComplete: ScrollAnimationFunc});


var electricalProjectName = document.querySelector('.view_electrical .project_name'),
    electricalProjectDesc = document.querySelector('.view_electrical .project_description p'),
    electricalProjectImg = document.querySelector('.view_electrical .project_img'),
    electricalProjectUrl = document.querySelector('.view_electrical .project_url'),
    electricalProjectFirstInfo = document.querySelectorAll('.view_electrical .project_info'),

    healthProjectName = document.querySelector('.view_health .project_name'),
    healthProjectDesc = document.querySelector('.view_health .project_description p'),
    healthProjectImg = document.querySelector('.view_health .project_img'),
    healthProjectUrl = document.querySelector('.view_health .project_url'),
    healthProjectFirstInfo = document.querySelectorAll('.view_health .project_info'),

    businessProjectName = document.querySelector('.view_business .project_name'),
    businessProjectDesc = document.querySelector('.view_business .project_description p'),
    businessProjectImg = document.querySelector('.view_business .project_img'),
    businessProjectUrl = document.querySelector('.view_business .project_url'),
    businessProjectFirstInfo = document.querySelectorAll('.view_business .project_info'),

    mediaProjectName = document.querySelector('.view_media .project_name'),
    mediaProjectDesc = document.querySelector('.view_media .project_description p'),
    mediaProjectImg = document.querySelector('.view_media .project_img'),
    mediaProjectUrl = document.querySelector('.view_media .project_url'),
    mediaProjectFirstInfo = document.querySelectorAll('.view_media .project_info'),

    marketingProjectName = document.querySelector('.view_marketing .project_name'),
    marketingProjectDesc = document.querySelector('.view_marketing .project_description p'),
    marketingProjectImg = document.querySelector('.view_marketing .project_img'),
    marketingProjectUrl = document.querySelector('.view_marketing .project_url'),
    marketingProjectFirstInfo = document.querySelectorAll('.view_marketing .project_info'),

    foodProjectName = document.querySelector('.view_food .project_name'),
    foodProjectDesc = document.querySelector('.view_food .project_description p'),
    foodProjectImg = document.querySelector('.view_food .project_img'),
    foodProjectUrl = document.querySelector('.view_food .project_url'),
    foodProjectFirstInfo = document.querySelectorAll('.view_food .project_info'),

    travelProjectName = document.querySelector('.view_travel .project_name'),
    travelProjectDesc = document.querySelector('.view_travel .project_description p'),
    travelProjectImg = document.querySelector('.view_travel .project_img'),
    travelProjectUrl = document.querySelector('.view_travel .project_url'),
    travelProjectFirstInfo = document.querySelectorAll('.view_travel .project_info'),

    gamesProjectName = document.querySelector('.view_games .project_name'),
    gamesProjectDesc = document.querySelector('.view_games .project_description p'),
    gamesProjectImg = document.querySelector('.view_games .project_img'),
    gamesProjectUrl = document.querySelector('.view_games .project_url'),
    gamesProjectFirstInfo = document.querySelectorAll('.view_games .project_info'),

    otherProjectName = document.querySelector('.view_other .project_name'),
    otherProjectDesc = document.querySelector('.view_other .project_description p'),
    otherProjectImg = document.querySelector('.view_other .project_img'),
    otherProjectUrl = document.querySelector('.view_other .project_url'),
    otherProjectFirstInfo = document.querySelectorAll('.view_other .project_info'),

    idName = 'electrical',
    dicrement = 0,
    stopScrollEvent = true,
    portfolioData = {
        electrical: [
            {
                title: 'Red Pulse2',
                contenet: `Red Pulse is an online system of automated mobile repairs, where Users
                        can order mobile repair through website or mobile application. They can find nearest or cheapest
                        workshop, get the device shipped and follow all steps and costs online.`,
                img: './img/porfolio/myredgo.png',
                url: 'https://www.myredgo.com/',
                info: ['lorem1', 'lorem2']
            },
        ],
        health: [
            {
                title: 'Belleshop',
                contenet: `Belleshop is a Swiss online shop for health, cosmetics, beauty & wellness,
                        fitness and sport. All deliveries are made from warehouse of Switzerland. There are sourced the
                        best products online, the best customer service and 30-days money back guarantee. You can
                        register in the website, easily search and find many world famous brands in this online store,
                        order one or many items in one order.`,
                img: './img/porfolio/belleshop.png',
                url: 'http://www.belleshop.ch/en/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Umana',
                contenet: `Umana is a platform helping medical professionals work more closely with
                        their patients by providing sophisticated methods of monitoring, analyzing and sharing long-term vital
                        signs data. We empower patients to collect their own physiological data and safely share it in real-time
                        with their trusted doctor through sophisticated mobile apps, software and online platforms. We also
                        conduct and publish research together with international Universities, medical institutions and top
                        pharmaceutical companies, making us a pioneer in answering the growing demand for vital signs
                        monitoring medical devices.`,
                img: './img/porfolio/uman_amedical.png',
                url: 'https://umanamedical.com/',
                info: ['lorem1', 'lorem2']
            },
        ],
        'business-automation': [
            {
                title: 'Suteria',
                contenet: `Suteria is a German online shop for chocolates. It promotes products and
                        services. Website gives general information about the company and ongoing news. Users can
                        search and find various kinds of chocolates. There is a functionality of doing online shopping
                        and making payments via online payment systems.`,
                img: './img/porfolio/suteria.png',
                url: 'https://www.suteria.ch/de/',
                info: ['lorem1', 'lorem2']

            },
        ],
        media: [
            {
                title: 'Mapplo',
                contenet: `The app is a platform for creating events and informing citizens or international
                        guests about entertainments, cultural, educational, business, sport events happening near them.
                        It doubles as a social network, so people can discover and share events that match their passions. The
                        guests can quickly find what interests them, plan their experience, and connect with other attendees.
                        The app includes loads of features, including setting deadlines, group communication, chatting,
                        sharing events on other social network, rating experience and more. The app is great for large event
                        planning teams. The app is a connecting bridge and one of the most convenient tools for targeted
                        communication between event information seekers and event organizers.`,
                img: './img/porfolio/mapplo.png',
                url: 'javascript:void(0)',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'LineX',
                contenet: `The app is a simple non-VoIP client that enables end-users to make and receive
                        calls through their existing cellular service as well as send SMS and MMS messages (powered by
                        Bandwidth) all within the application by choosing a new phone number from the available numbers
                        listed within the app upon signing up. Users can dial and manage calls from their personal
                        smartphones just as they would from their office desk phone, including tracking calls, picking up
                        business voicemail, managing personal settings, and more.`,
                img: './img/porfolio/LineX.png',
                url: 'javascript:void(0)',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Shoghakat',
                contenet: `The website is developed for an Armenian public channel which is aimed at
                        advocating Christian values, ethics and morality, and to cover Armenian and world culture.
                        It underlies all scientific-public multi-genre program on civilization, history, religions, nature,
                        remarkable individuals. The web-site of the TV Company chiefly reflects the daily air of
                        “Shoghakat”, with the exception of motion pictures, documentaries and concerts which are not
                        licensed to broadcast outside Armenia. The user can easily find recent programs that were
                        broadcast on TV and watch them online.`,
                img: './img/porfolio/shoghakat.png',
                url: 'http://www.shoghakat.am/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Shrjapat',
                contenet: `The website includes the publications of "Shrjapat" weekly which is
                        published in Gyumri, as well as a number of other sections such as top news about Gyumri,
                        culture, sport, policy, society, interesting facts and interviews with famous people of Gyumri,
                        etc. User can easily find the latest news in few seconds with one click.`,
                img: './img/porfolio/shrjapat.png',
                url: 'http://shrjapat.am/',
                info: ['lorem1', 'lorem2']

            },
        ],
        marketing: [
            {
                title: 'Bob.Ai',
                contenet: `The app is developed for for the tenants and lanloards of American
                        PHAs. It helps to solve the house renting issues. Bob.AI provides advanced AI based software
                        that can be trained as a virtual employee for your organization. This app is one of several
                        mediums through which your employees and customers can interact with the virtual employee.
                        To use Bob.AI you must be an employee of:
                        1. A Bob.AI client
                        Brain Fors Company Profile 2021
                        2. A supplier to a Bob.AI client and accessing the app for Supplier Collaborations functions
                        3. A customer of a Bob.AI client and accessing the app for CRM functions`,
                img: './img/porfolio/bobai.png',
                url: 'https://play.google.com/store/apps/details?id=com.bob.ai',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'PolarAds',
                contenet: `PolarAds is a website for online advertisement and operating ad networks.
                        It has a unique feature that allows publishers to lock a certain part of their website or contents
                        and unlock it after a certain ad has been viewed or advertiser defined action was completed. This
                        gives visitors a clear explanation of what is expected from them and what they will receive in
                        exchange. The website also helps publishers make the most possible money out of your traffic.
                        Users (publishers) can transfer money from the system and see the statistics about those
                        transfers.`,
                img: './img/porfolio/PolarAds.png',
                url: 'http://polarads.com/',
                info: ['lorem1', 'lorem2']

            },
        ],
        'food-beverages': [
            {
                title: 'Yaghli House',
                contenet: `The website, developed for Yaghli House, includes general information
                        about the cafe, including the working hours, menu, etc. There is also a functionality of making
                        online orders and reserving tables.`,
                img: './img/porfolio/yaghli.png',
                url: 'http://yaghlihouse.am/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Ponchik Monchik',
                contenet: `The website allows placing online orders by adding them to the shopping
                        cart then making payments via online payment methods such as are Visa / Master Card and
                        IDram. There is also a functionality of reserving tables.`,
                img: './img/porfolio/ponchik_monchik.png',
                url: 'https://ponchikmonchik.am/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Food time',
                contenet: `The website introduces information about all the dishes of Food Time
                        restaurant. Users can browse through the online menu and make orders. The site is available in
                        Armenian, Russian and English languages.`,
                img: './img/porfolio/foodtime.png',
                url: 'http://foodtime.am/',
                info: ['lorem1', 'lorem2']

            },
        ],
        travel: [
            {
                title: 'Artavan; the art of nature',
                contenet: `This bilingual website provides users with information about the offers,
                        services concerning traveling and accommodation. The site contains a gallery as well as separate
                        sections for tour packages.`,
                img: './img/porfolio/artavan.png',
                url: 'http://artavan.am/',
                info: ['lorem1', 'lorem2']

            },
        ],
        games: [
            {
                title: 'Mozarts Vermaechtnis',
                contenet: `The app is a scavenger hunt/quest through the city of Salzburg, Austria.
                        The app shows a location and the users need to solve riddles at specific locations. The app is
                        developed using Artificial Reality and 3D ojbects. When solving a particular riddle the user
                        puts the camera into specific objects (a wall, writing, painting, sculpture, etc. depending on the
                        riddle) and when it scans and recognizes the objects, Mozart appears and explains next steps
                        of the quest. As soon the activation code is typed, the game is activated and the time starts to
                        count (90 min ). If the user exits or closes the app during playing he can resume back in the
                        game, as long as the time has not exceeded 90 min.`,
                img: './img/porfolio/mozart.png',
                url: 'javascript:void(0)',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'KobGames',
                contenet: `KobGames is a gaming app available on Play Market and App Store, through
                        which we collect game information, send notifications about game status via Slack, for example, when
                        a new version of the game becomes available, slack sends notifications to different channels. Various
                        APIs are integrated including: slack, trello, game analytic, google, youtube, Instagram.`,
                img: './img/porfolio/koba_games.png',
                url: 'https://www.kobgames.com/',
                info: ['lorem1', 'lorem2']

            },
        ],
        other: [
            {
                title: 'Stage app',
                contenet: `It gives the user opportunity to see all the companies having internship
                        opportunities through the map. The user can read the information about the company and
                        available internship, can apply to the desired internship by filling the form. Moreover, the map
                        shows where the company is situated and how far it is from the user’s location.`,
                img: './img/porfolio/stageup.png',
                url: 'https://webapp.stage-app.nl/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'PlanHammer',
                contenet: `The main goal of application is planning daily jobs, workers
                        schedules and materials for example for the construction of the company. Users can create their
                        task boards with several columns . Typically columns include task statuses: To Do, In Progress,
                        Done. The tool can be for personal and business use. Planhammer has a variety of work and
                        personal uses including software project management, lesson planning, etc. It also has a simple
                        checklists in the info panel of each task allow project managers to quickly add acceptance
                        criteria, quality specifications, or just a list of things to do related to that task.`,
                img: './img/porfolio/plan_hammer.png',
                url: 'https://planhammer.io/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'BPI group:A global talent expert',
                contenet: `Executive coaching is an online training package for high ranked
                        executives in big organizations. It manages and automatizes the administrative workflow (all the
                        processing of contracts and payments with clients and coaches), internal communications and
                        also the coaching interaction (coaches sessions with the executives). It also provides the client
                        with an overview of the project.`,
                img: './img/porfolio/BPI.png',
                url: 'https://bpioutplacementservices.com/login/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Leading Practice',
                contenet: `The EnterprisePLUS software tools (Enterprise+ or E+) is a new breed of
                        integrated modeling and architecture tool. It is offered as a Software as a Service (SaaS) solution,
                        and consists of 2 major application components. First is the modeling Software component
                        where the expert can create and work with many different types of modeling and architecture
                        components; and a knowledge Management system where the models, views and standards can
                        be posted for anybody within the enterprise. This provides a whole new experience to publishing,
                        referencing, commenting and continuous improvements in a collaborative and user-friendly
                        environment.`,
                img: './img/porfolio/Enterprise_Plus.png',
                url: 'http://www.enterpriseplus.tools/',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'Arabe Sports',
                contenet: `Website is developed for Arab players who can create online
                        championships. Users can sign up and join them. After each game website shows the results of
                        each championship with its list of winners their scores and ranks.`,
                img: './img/porfolio/arabe_esports.png',
                url: 'https://arabesports.com/en',
                info: ['lorem1', 'lorem2']

            },
            {
                title: 'BAC',
                contenet: `The website is developed for BAC accounting company. It introduces
                        general information about the company, its services and trainings. Users can get detailed
                        information about all their trainings, services and contact them if needed.`,
                img: './img/porfolio/Enterprise_Plus.png',
                url: 'http://bac.am/',
                info: ['lorem1', 'lorem2']

            },
        ],
    };

$(window).on('load', () => {
    if (portfolioData[idName].length === 1) {
        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
    }
    changeDataDown(idName, true, "click");
});


function changeDataDown(id, down, click) {
    stopScrollEvent = false;
    navLink.forEach(el => {
        el.classList.add('disabled')
    });
    switch (id) {
        case "electrical":
            if (click === 'click') {
                dicrement = dicrementElectrical;
            } else {
                if (!down) {
                    dicrementElectrical--;
                    dicrement = dicrementElectrical;
                } else if (down) {
                    dicrementElectrical++;
                    dicrement = dicrementElectrical;
                } else if (portfolioData[idName].length - 1 === dicrementElectrical) {
                    document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
                } else if (dicrementElectrical === 0) {
                    document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                    document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
                }
            }

            electricalProjectName.innerHTML = portfolioData[id][dicrementElectrical].title;
            electricalProjectDesc.innerHTML = portfolioData[id][dicrementElectrical].contenet;
            electricalProjectImg.src = portfolioData[id][dicrementElectrical].img;
            electricalProjectUrl.href = portfolioData[id][dicrementElectrical].url;
            electricalProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementElectrical].info[idx]
            });
            break;

        case "health":
            if (click === 'click') {
                dicrement = dicrementHealth;
            } else {
                if (!down) {
                    dicrementHealth--;
                    dicrement = dicrementHealth;
                } else if (down) {
                    dicrementHealth++;
                    dicrement = dicrementHealth;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementHealth) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementHealth === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            healthProjectName.innerHTML = portfolioData[id][dicrementHealth].title;
            healthProjectDesc.innerHTML = portfolioData[id][dicrementHealth].contenet;
            healthProjectImg.src = portfolioData[id][dicrementHealth].img;
            healthProjectUrl.href = portfolioData[id][dicrementHealth].url;
            healthProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementHealth].info[idx]
            });

            break;

        case "business-automation":
            if (click === 'click') {
                dicrement = dicrementBusiness;
            } else {
                if (!down) {
                    dicrementBusiness--;
                    dicrement = dicrementBusiness;
                } else if (down) {
                    dicrementBusiness++;
                    dicrement = dicrementBusiness;
                } else if (portfolioData[idName].length - 1 === dicrementElectrical) {
                    document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
                } else if (dicrementElectrical === 0) {
                    document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                    document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
                }
            }
            businessProjectName.innerHTML = portfolioData[id][dicrementBusiness].title;
            businessProjectDesc.innerHTML = portfolioData[id][dicrementBusiness].contenet;
            businessProjectImg.src = portfolioData[id][dicrementBusiness].img;
            businessProjectUrl.href = portfolioData[id][dicrementBusiness].url;
            businessProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementBusiness].info[idx]
            });
            break;

        case "media":
            if (click === 'click') {
                dicrement = dicrementMedia;
            } else {
                if (!down) {
                    dicrementMedia--;
                    dicrement = dicrementMedia;
                } else if (down) {
                    dicrementMedia++;
                    dicrement = dicrementMedia;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementMedia) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementMedia === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            mediaProjectName.innerHTML = portfolioData[id][dicrementMedia].title;
            mediaProjectDesc.innerHTML = portfolioData[id][dicrementMedia].contenet;
            mediaProjectImg.src = portfolioData[id][dicrementMedia].img;
            mediaProjectUrl.href = portfolioData[id][dicrementMedia].url;
            mediaProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementMedia].info[idx]
            });


            break;

        case "marketing":
            if (click === 'click') {
                dicrement = dicrementMarketing;
            } else {
                if (!down) {
                    dicrementMarketing--;
                    dicrement = dicrementMarketing;
                } else if (down) {
                    dicrementMarketing++;
                    dicrement = dicrementMarketing;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementMarketing) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementMarketing === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            marketingProjectName.innerHTML = portfolioData[id][dicrementMarketing].title;
            marketingProjectDesc.innerHTML = portfolioData[id][dicrementMarketing].contenet;
            marketingProjectImg.src = portfolioData[id][dicrementMarketing].img;
            marketingProjectUrl.href = portfolioData[id][dicrementMarketing].url;
            marketingProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementMarketing].info[idx]
            });
            break;

        case "food-beverages":
            if (click === 'click') {
                dicrement = dicrementFood;
            } else {
                if (!down) {
                    dicrementFood--;
                    dicrement = dicrementFood;
                } else if (down) {
                    dicrementFood++;
                    dicrement = dicrementFood;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementFood) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementFood === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            foodProjectName.innerHTML = portfolioData[id][dicrementFood].title;
            foodProjectDesc.innerHTML = portfolioData[id][dicrementFood].contenet;
            foodProjectImg.src = portfolioData[id][dicrementFood].img;
            foodProjectUrl.href = portfolioData[id][dicrementFood].url;
            foodProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementFood].info[idx]
            });
            break;

        case "travel":
            if (click === 'click') {
                dicrement = dicrementTravel;
            } else {
                if (!down) {
                    dicrementTravel--;
                    dicrement = dicrementTravel;
                } else if (down) {
                    dicrementTravel++;
                    dicrement = dicrementTravel;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementTravel) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementTravel === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            travelProjectName.innerHTML = portfolioData[id][dicrementTravel].title;
            travelProjectDesc.innerHTML = portfolioData[id][dicrementTravel].contenet;
            travelProjectImg.src = portfolioData[id][dicrementTravel].img;
            travelProjectUrl.href = portfolioData[id][dicrementTravel].url;
            travelProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementTravel].info[idx]
            });
            break;

        case "games":
            if (click === 'click') {
                dicrement = dicrementGames;
            } else {
                if (!down) {
                    dicrementGames--;
                    dicrement = dicrementGames;
                } else if (down) {
                    dicrementGames++;
                    dicrement = dicrementGames;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementGames) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementGames === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            gamesProjectName.innerHTML = portfolioData[id][dicrementGames].title;
            gamesProjectDesc.innerHTML = portfolioData[id][dicrementGames].contenet;
            gamesProjectImg.src = portfolioData[id][dicrementGames].img;
            gamesProjectUrl.href = portfolioData[id][dicrementGames].url;
            gamesProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementGames].info[idx]
            });
            break;

        case "other":
            if (click === 'click') {
                dicrement = dicrementOther;
            } else {
                if (!down) {
                    dicrementOther--;
                    dicrement = dicrementOther;
                } else if (down) {
                    dicrementOther++;
                    dicrement = dicrementOther;
                }
            }
            if (portfolioData[idName].length - 1 === dicrementOther) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.remove('d-none');
            } else if (dicrementOther === 0) {
                document.querySelector(`#v-${idName} .scroll_down`).classList.remove('d-none');
                document.querySelector(`#v-${idName} .scroll_up`).classList.add('d-none');
            }
            otherProjectName.innerHTML = portfolioData[id][dicrementOther].title;
            otherProjectDesc.innerHTML = portfolioData[id][dicrementOther].contenet;
            otherProjectImg.src = portfolioData[id][dicrementOther].img;
            otherProjectUrl.href = portfolioData[id][dicrementOther].url;
            otherProjectFirstInfo.forEach((el, idx) => {
                el.innerHTML = portfolioData[id][dicrementOther].info[idx]
            });
            break;
    }
    animation1.from('.project_name', {opacity: 0, y: -100, duration: .4})
        .from('.project_img', {opacity: 0, y: -500, duration: .4})
        .from('.project_description', {opacity: 0, y: -100, duration: .5})
        .from('.board_line', {opacity: 0, x: -100, duration: .5})
        .from('.first_text', {opacity: 0, y: -100, duration: .3})
        .from('.second_text', {opacity: 0, y: -100, duration: .5});

}


document.querySelector('.page_content').addEventListener('mousewheel', (ev) => {
    ev.preventDefault();
    if (stopScrollEvent) {
        if (ev.deltaY > 0) {
            if (portfolioData[idName].length - 2 >= dicrement) {
                changeDataDown(idName, true);
            } else {
                return;
            }

        } else if (ev.deltaY < 0) {
            if (dicrement > 0) {
                changeDataDown(idName, false);
            } else {
                return;
            }
        }
    } else {
        return;
    }

});


clickChangeSlideDown.forEach(el => {

    el.addEventListener('click', () => {
        if (stopScrollEvent) {
            changeDataDown(idName, true);
        } else {
            return;
        }
    })

});

clickChangeSlideUp.forEach(el => {
    el.addEventListener('click', () => {
        if (stopScrollEvent) {
            changeDataDown(idName, false);
        } else {
            return;
        }
    })
});

function ScrollAnimationFunc() {
    setTimeout(() => {
        stopScrollEvent = true;
        navLink.forEach(el => {
            document.querySelector(`#v-${idName} .click_scrolling .scroll_down`).classList.remove('disabled');
            el.classList.remove('disabled');
        });
    }, 300);

}

// click scroll to top
navLink.forEach(el => {
    el.addEventListener('click', (e) => {
        if (stopScrollEvent) {
            switch (e.srcElement.id) {
                case 'electrical':
                    dicrementElectrical = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;

                case 'health':
                    dicrementHealth = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;
                case 'business-automation':
                    dicrementBusiness = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;


                case 'media':
                    dicrementMedia = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;

                case 'marketing':
                    dicrementMarketing = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;

                case 'food-beverages':
                    dicrementFood = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;

                case 'travel':
                    dicrementTravel = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;

                case 'games':
                    dicrementGames = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    break;

                case 'other':
                    dicrementOther = 0;
                    idName = e.target.id;
                    changeDataDown(idName, true, 'click');
                    if (portfolioData[idName].length === 1) {
                        document.querySelector(`#v-${idName} .scroll_down`).classList.add('d-none');
                    }
                    // dicrementOther = 1;
                    // otherScrollDown.classList.remove('d-none');
                    // otherScrollUp.classList.add('d-none');
                    // if(viewOther.length <= 1){
                    //     otherScrollDown.classList.add('d-none');
                    // }
                    break;
            }
        } else {
            return;
        }

    });
});
