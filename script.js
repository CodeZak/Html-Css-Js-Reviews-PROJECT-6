// How I did it! 

let myImg = document.querySelector(".image");
let namee = document.querySelector(".info h2");
let jobTitle = document.querySelector(".info span");
let myDesc = document.querySelector(".desc");
let surprize = document.querySelector(".surpize");

let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

// i could have done better by adding objects to a list instead.
let reviews = {
    1: {
        name: "Peter Jones",
        state: "intern",
        descr: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        img: "images/img1.jpg",
    },
    2: {
        name: "Susan Smith",
        state: "Web Developer",
        descr: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        img: "images/img3.jpg",
    },
    3: {
        name: "Anna Johnson",
        state: "WEB DESIGNER",
        descr: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        img: "images/img4.jpg",
    },
    4: {
        name: "Bill Anderson",
        state: "THE BOSS",
        descr: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
        img: "images/img2.jpg",
    },
};

// load initial item // added it after the correction
window.addEventListener("DOMContentLoaded", function () {
    myImg.src = reviews[counter]["img"];
    namee.textContent = reviews[counter]["name"];
    jobTitle.textContent = reviews[counter]["state"];
    myDesc.textContent = reviews[counter]["descr"];
});

function AssignContent() {
    myImg.src = reviews[counter]["img"];
    namee.textContent = reviews[counter]["name"];
    jobTitle.textContent = reviews[counter]["state"];
    myDesc.textContent = reviews[counter]["descr"];
}

let counter = 1;

nextBtn.onclick = function () {
    counter++;
    counter > Object.keys(reviews).length ? (counter = 1) : (counter = counter);
    AssignContent();
};

prevBtn.onclick = function () {
    counter--;
    counter < 1 ? (counter = Object.keys(reviews).length) : (counter = counter);
    AssignContent();
};

surprize.onclick = function () {
    counter = Math.floor(Math.random() * Object.keys(reviews).length + 1);
    console.log(counter);
    AssignContent();
};

/*********** How they did it! */

/* // local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];
// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});

// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
// show next person
nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
// show prev person
prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
// show random person
randomBtn.addEventListener("click", function () {
    console.log("hello");

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
 */