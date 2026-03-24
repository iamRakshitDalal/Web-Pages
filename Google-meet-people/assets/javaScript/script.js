// DOM References
const usersContainer = document.getElementById("users");
const searchInput = document.getElementById("search");
const totalUserEl = document.getElementById("total-user");
const openCardBtn = document.getElementById("openCardBtn");
const closeCardBtn = document.getElementById("closeCardBtn");
const myCard = document.getElementById("myCard");
const nameInput = document.getElementById("userNameInput");
const mainCard = document.getElementById("main-card-close");
const peopleIcon = document.getElementById("people");
const seeContributer = document.getElementById("see-contributer");
const changeIcon = document.getElementById("icon");
const closeMainCard = document.getElementById("close-main-card");

let viewMainCard = true;
let viewContributers = true;

// Data
let names = [
  "admin","Vidhya Skill School","Abhishek Garg","Almas Chamadiya",
  "ANKIT RAJPUT","Ashitosh Vidhate","Aviral Jain","Ayush Gupta",
  "Deepanshu Garg","Pinky Thawani","Prakash","Pranav Khare",
  "Rakshit Dalal","Shivani Vishwakarma","Shruti Prajapati","vikas vanve"
];
names.sort();

// Color palette
const COLORS = ["#FF6B6B","#4ECDC4","#FFD93D","#6A4C93","#FF9F1C"];
const userColors = new Map();
function getColor(name){
  if(!userColors.has(name)){
    const color = COLORS[Math.floor(Math.random()*COLORS.length)];
    userColors.set(name,color);
  }
  return userColors.get(name);
}

// Render Users
function renderUsers(list){
  usersContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();

  list.forEach(name => {
    const userDiv = document.createElement("div");
    userDiv.className = "all-user";

    const userDetail = document.createElement("div");
    userDetail.className = "user-detail";

    const userImage = document.createElement("div");
    userImage.className = "user-image";
    userImage.style.backgroundColor = getColor(name);
    userImage.textContent = name.charAt(0);

    const userName = document.createElement("span");
    userName.textContent = name;

    userDetail.appendChild(userImage);
    userDetail.appendChild(userName);

    const actions = document.createElement("div");
    actions.className = "user-intractive-icon";

    const micIcon = document.createElement("i");
    micIcon.className = "fa-solid fa-microphone-lines-slash";
    const menuIcon = document.createElement("i");
    menuIcon.className = "fa-solid fa-ellipsis-vertical";

    actions.appendChild(micIcon);
    actions.appendChild(menuIcon);

    userDiv.appendChild(userDetail);
    userDiv.appendChild(actions);

    fragment.appendChild(userDiv);
  });

  usersContainer.appendChild(fragment);
  totalUserEl.textContent = list.length;
}

// Initial render
renderUsers(names);

// Debounce
function debounce(fn, delay=300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  }
}

// Search
const handleSearch = debounce((value)=>{
  const filtered = value ? names.filter(n=> n.toLowerCase().includes(value.toLowerCase())) : names;
  renderUsers(filtered);
},200);

searchInput.addEventListener("input", e => handleSearch(e.target.value));

// Add User
document.getElementById("addUserBtn").addEventListener("click", ()=>{
  const value = nameInput.value.trim();
  if(!value) return;
  names.push(value);
  names.sort();
  renderUsers(names);
  nameInput.value="";
  myCard.style.display="none";
});

// Modal
openCardBtn.addEventListener("click",()=>myCard.style.display="block");
closeCardBtn.addEventListener("click",()=>myCard.style.display="none");

// Toggle main card
peopleIcon.addEventListener("click", ()=>{
  viewMainCard=true;
  mainCard.style.display="block";
  peopleIcon.style.display="none";
});

closeMainCard.addEventListener("click",()=>{
  viewMainCard=false;
  mainCard.style.display="none";
  peopleIcon.style.display="block";
});

// Toggle contributor list
changeIcon.addEventListener("click", ()=>{
  viewContributers = !viewContributers;
  usersContainer.style.display = viewContributers ? "block" : "none";
  seeContributer.style.border = viewContributers ? "1px solid #444746" : "none";
  changeIcon.className = viewContributers ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down";
});