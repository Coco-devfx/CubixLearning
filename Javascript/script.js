const questions = document.getElementById("questions");
const text = document.getElementById("assistant-text");

if (questions && text) {
    questions.addEventListener("change", function () {
        if (this.value === "motdepasse") {
            text.innerHTML = "Cliquez sur 'Mot de passe oublié'";
            highlight("forgot");
            setTimeout(resetAssistant, 15000);
        } else if (this.value === "interface") {
            startInterfaceTour();
        } else {
            resetAssistant();
        }
    });
}

function highlight(id) {
    document.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"));
    const element = document.getElementById(id);

    if (element) {
        element.classList.add("highlight");
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function clearHighlight() {
    document.querySelectorAll(".highlight").forEach(el => el.classList.remove("highlight"));
}

function resetAssistant() {
    text.innerHTML = "Bonjour ! Besoin d'aide ?";
    clearHighlight();
    questions.value = "";
}

function startInterfaceTour() {
    const steps = [
        { id: "search-bar", message: "Voici la barre de recherche Google. Cette dernière permet de vérifier des informations sur internet, ou même pour les plus motivés, à tester notre apprentissage en situation réelle ! - Vous pouvez soit cliquer sur le 🍀, soit en appuyent sur la touche Entrée ou Enter (des fois flèche brisée vers la gauche)" },
        { id: "signup", message: "Pour sauvegarder votre progression dans le cours, vous pouvez vous connecter ou créer un compte via le bouton Compte " },
        { id: "langues", message: "Pour les plus bilingues d'entre vous, ce bouton permet de changer la langue du site." },
        { id: "taille-texte", message: "Si vous avez du mal à voir, pas de panique ! Ce bouton ajuste la taille du texte." },
        { id: "card1", message: "Voici le premier cours, il vous permettra de ..." },
        { id: "card2", message: "Vient après, le second cours, il vous permettra de ..." },
        { id: "card3", message: "Ensuite, voici le troisième cours, il vous permettra de ..." },
        { id: "card4", message: "Voici enfin le dernier cours proposé, il vous permettra de ..." }
    ];
    let currentStep = 0;
    function nextStep() {
        if (currentStep < steps.length) {
            const step = steps[currentStep];
            highlight(step.id);
            text.innerHTML = step.message;
            currentStep++;
            setTimeout(nextStep, 12000);
        } else {
            setTimeout(resetAssistant, 1000);
        }
    }
    nextStep();
}





function scrollToTop(){
window.scrollTo({
top: 0,
behavior: "smooth"
});
}


function changeLanguage(lang){
localStorage.setItem("language", lang);

if(lang === "en"){
    document.getElementById("title").textContent = "Welcome to CubixLearning";
    document.getElementById("signup").textContent = "Login";
    document.getElementById("logout").textContent = "Logout";
    document.getElementById("lessons").textContent = "Lessons";
    document.getElementById("aboutMenu").textContent = "About";
    document.getElementById("contactMenu").textContent = "Contact";
    document.getElementById("taille-texte").textContent = "Text size";
    document.getElementById("search-input").placeholder = "Search with Google...";
    document.getElementById("aboutTitle").textContent = "About CubixLearning";
    document.getElementById("aboutText").textContent = "Welcome. This website was created to help you better understand and use digital tools in your daily life,step by step and without stress. Here, you will learn how to perform practical actions (sending a document, recognizing a suspicious message, using an online service), with simple explanations and continuous guidance. You can take your time, start again as many times as necessary, and get help at every step.";
    document.getElementById("title1").textContent ="1 - Smartphone oriented learning";
    document.getElementById("title2").textContent ="2 - Computer oriented learning";
    document.getElementById("title3").textContent ="3 - How to fix small technical problems?";
    document.getElementById("title4").textContent ="4 - How to avoid online scams?";
    document.getElementById("contactTitle").textContent = "Contact us";
    document.getElementById("contactText").textContent ="For any question or request, feel free to contact us at: cubixlearningdev@gmail.com";
    document.getElementById("footerText").textContent ="© 2026 CubixLearning. All rights reserved.";
    }

if(lang === "fr"){
    document.getElementById("title").textContent = "Bienvenue chez CubixLearning";
    document.getElementById("signup").textContent = "Se connecter";
    document.getElementById("logout").textContent = "Déconnexion";
    document.getElementById("lessons").textContent = "Leçons";
    document.getElementById("aboutMenu").textContent = "À propos";
    document.getElementById("contactMenu").textContent = "Contact";
    document.getElementById("taille-texte").textContent = "Taille Texte";
    document.getElementById("search-input").placeholder = "Rechercher via Google...";
    document.getElementById("aboutTitle").textContent = "À propos de CubixLearning";
    document.getElementById("aboutText").textContent ="Bienvenue. Ce site a été conçu pour vous aider à mieux comprendre et utiliser le numérique au quotidien, pas à pas et sans stress. Ici, vous apprenez à réaliser des actions concrètes (envoyer un document, reconnaître un message suspect, utiliser un service en ligne), avec des explications simples et un accompagnement permanent. Vous pouvez prendre votre temps, recommencer autant que nécessaire, et vous faire aider à chaque étape.";
    document.getElementById("title1").textContent ="1 - Enseignement orienté smartphone";
    document.getElementById("title2").textContent ="2 - Enseignement orienté ordinateur";
    document.getElementById("title3").textContent ="3 - Comment dépanner des petits problèmes techniques ?";
    document.getElementById("title4").textContent ="4 - Comment ne pas se faire arnaquer en ligne ?";
    document.getElementById("contactTitle").textContent = "Contactez-nous";
    document.getElementById("contactText").textContent ="Pour toute question ou demande, n'hésitez pas à nous contacter. Contactez-nous à l'adresse email : cubixlearningdev@gmail.com";
    document.getElementById("footerText").textContent ="© 2026 CubixLearning. Tous droits réservés.";
    }
}


window.onload = function(){
let savedLanguage = localStorage.getItem("language");
if(savedLanguage){
changeLanguage(savedLanguage);
}





let user = localStorage.getItem("username");
if(user){
document.getElementById("account").textContent = "" + user;
}else{
document.getElementById("account").textContent = "Se connecter";
}






}





function toggleTextSize(){
let box = document.getElementById("textSizeControl");
if(box.style.display === "none"){
box.style.display = "block";
}else{
box.style.display = "none";
}
}
function changeTextSize(size){
document.body.style.fontSize = size + "px";
}










function openAccount(){
document.getElementById("accountBox").style.display = "block";
}

function closeAccount(){
document.getElementById("accountBox").style.display = "none";
}

function register(){
let username = document.getElementById("reg-username").value;
let password = document.getElementById("reg-password").value;
if(username.trim() === "" || password.trim() === ""){
    alert("Veuillez remplir tous les champs");
    return;
}
fetch('/register', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
}).then(res => res.json()).then(data => {
    if(data.success){
        alert('Compte créé !');
        document.getElementById("accountBox").style.display = "none";
    } else {
        alert(data.message || 'Erreur');
    }
}).catch(err => alert('Erreur de connexion'));
}

function login(){
let username = document.getElementById("login-username").value;
let password = document.getElementById("login-password").value;
if(username.trim() === "" || password.trim() === ""){
    alert("Veuillez remplir tous les champs");
    return;
}
fetch('/login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({username, password})
}).then(res => res.json()).then(data => {
    if(data.success){
        localStorage.setItem("username", data.username);
        document.getElementById("account").textContent = data.username;
        document.getElementById("accountBox").style.display = "none";
    } else {
        alert(data.message || 'Erreur');
    }
}).catch(err => alert('Erreur de connexion'));
}

function logout(){
localStorage.removeItem("username");  
alert("Vous êtes déconnecté");
location.reload(); 
}



 function searchGoogle() {
            const searchInput = document.getElementById('search-input').value;
            if (searchInput.trim() !== '') {
                window.open('https://www.google.com/search?q=' + encodeURIComponent(searchInput), '_blank');
            } else {
                alert('Veuillez entrer un terme de recherche');
            }
        }
        function handleSearchEnter(event) {
            if (event.key === 'Enter') {
                searchGoogle();
            }
        }