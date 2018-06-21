/*
This is empty on purpose! Your code to build the resume will go here.
 */

let model = {
    bio:{
        name : 'Elisheva Behar',
            role : 'Front End Developer',
            contacts : {
                  mobile: '555-555-5555',
                  email: 'me@email.com', 
                  github: 'https://github.com/elisos',
                  location: 'Jerusalem'
                },
            welcomeMessage: 'Coding skills with an eye for design.', 
            skills: ['HTML and CSS in depth','Good knowledge of javaScript and jQuery','Testing with Jasmine'],
//            display: function (){}
    },
    
    education: {
        schools: [{
                 name: 'Hebrew University',
                 location: 'Jerusalem',
                 degree: 'MA courses',
                 majors: 'Clinical Neuropsychology'
                 },
                 {
                 name: 'Bar Ilan University',
                 location: 'Ramat Gan',
                 degree: 'BA with Honours',
                 majors: 'Major in Psychology, minor in Biology'
                 }],
        onlineCourses: [{
                 site: 'Udacity',
                 course: 'Front End Developer Nanodegree',
                 },
                 {
                 site: 'Udemy',
                 course: 'Various web design courses'
                 }],
//            display: function () {}
    },
        
//    work: {
//        jobs: [{
//                 employer: string, 
//                 title: string,
//                 location: string, 
//                 dates: string (Can be 'in progress'),
//                 description: string
//                }
//               ],
//            display: function () {}
//    },
        
    projects: {
        projects: [{
                title: 'Memory Game',  
                dates: 'April 2018',
                description: 'Interactive web app requiring complex DOM manipulation',
                images: 'images/memory-game.png'
            },
            {
                title: 'Arcade Game',  
                dates: 'May 2018',
                description: 'Arcade-style web app using classes of objects to operate a game engine',
                images: 'images/arcade-game.png'
            },
            {
                title: 'Pixel Art Maker',  
                dates: 'january 2018',
                description: 'jQuery-based web app with dynamic DOM interactions',
                images: 'images/PAM.png'
            }
        ]
    }
}

let octopus = {
    name: model.bio.name,
    role: model.bio.role,
    mobile: model.bio.contacts.mobile,
    email: model.bio.contacts.email,
    github: model.bio.contacts.github,
    location: model.bio.contacts.location,
    welcome: model.bio.welcomeMessage,
    contactData: function () {
        const contData = Object.values(model.contacts);
        return contData;
    },
    
    
    init: function () {
        view.init();
    }
}

let view = {
    init: function() {
        let header = document.querySelector('#header');
        let contactInfo = document.getElementById('topContacts');
        const contactContent = document.querySelectorAll('.white-text');
        const contactInfoArray = [...contactContent];
        
        const name =  document.createElement('H1');
        name.innerHTML = HTMLheaderName;
        name.innerText = octopus.name;
        header.insertBefore(name, contactInfo);
        
        const role = document.createElement('SPAN');
        role.innerHTML = HTMLheaderRole;
        role.innerText = octopus.role;
        header.insertBefore(role, contactInfo);
        
        const mobileLI = document.createElement('LI');
        const emailLI = document.createElement('LI');
        const githubLI = document.createElement('LI');
        const locationLI = document.createElement('LI');
        mobileLI.innerHTML = HTMLmobile;
        emailLI.innerHTML = HTMLemail;
        githubLI.innerHTML = HTMLgithub;
        locationLI.innerHTML = HTMLlocation;
//        const contactMe = [mobileLI, emailLI, githubLI, locationLI];
        contactInfo.appendChild(mobileLI);
        contactInfo.appendChild(emailLI);
        contactInfo.appendChild(githubLI);
        contactInfo.appendChild(locationLI);
        
        for (item of contactInfoArray) {
            item[i].innerText = octopus.contactData[i];
        };     
    
        const bioPic = document.createElement('IMG');
        bioPic.innerHTML = HTMLbioPic;
        bioPic.setAttribute('src', 'images/profilepic.jpg');
        header.appendChild(bioPic);
//        bioPic.style.float = 'left';
    },
//    render: function() {}
}

octopus.init();