

const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

const user = {message:""};

const arrayOfPossibleMessages = [

	{"message":"you suck", "response":"Fuck you"},
	{"message":"hi", "response":"Eat shit"},
	{"message":"who are you", "response":"Your mother's boyfriend"},
	{"message":"hey", "response":"Fuck your hey"},
	{"message":"fuck you", "response":"I will"},
	{"message":"no", "response":"Suck my ass"},
	{"message":"fuck off", "response":"Go fuck yourself then"},





];

setTimeout(() => {
chatbotSendMessage("Sup you moron. What they call you?")
	
}, 1000);

function chatbotSendMessage(messageText){
	const messageElement = document.createElement("div");
	messageElement.classList.add("w-50");
	messageElement.classList.add("shadow-sm");
	messageElement.style.margin = "10px";
	messageElement.style.padding = "5px";
	messageElement.style.float = "left";
	messageElement.style.backgroundColor = "#a11148b6";
	messageElement.style.color = "#fff";




	messageElement.innerHTML = 
	"<span>Grumpy: </span>"+
	"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"

	messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700});

	chatContainer.appendChild(messageElement);
}
function sendMessage(messageText){

	const messageElement = document.createElement("div");
	messageElement.classList.add("w-50");
	messageElement.classList.add("shadow-sm");
	messageElement.style.margin = "10px";
	messageElement.style.padding = "5px";
	messageElement.style.float = "right";
	messageElement.style.backgroundColor = "rgb(141, 193, 238)";
	messageElement.style.color = "#fff";




	messageElement.innerHTML = 
	"<span>You: </span>"+
	"<span style="+"margin-top: 10px; padding: 10px;"+">"+ messageText +"</span>"
	
	messageElement.animate([{easing:"ease-in", opacity: 0.4},{opacity:1}], {duration: 700}); //анимация с появлением
	
	chatContainer.appendChild(messageElement);

}

sendBtn.addEventListener("click", clickSendBtn);

//эта функция выведена отдельно на случай добавления нажатия enter
function clickSendBtn(){
	if(textbox.value == ""){
		alert("write some shit first")
	}else{
		let messageText =  textbox.value;
		user.message = messageText;
		sendMessage(messageText);
		textbox.value = "";

		processMessage();

	}
};


function processMessage(){

	//это именно массив ответов
	const result =  arrayOfPossibleMessages.filter(val => val.message.includes(user.message.toLocaleLowerCase()));

	const response = result[0].response;

	setTimeout(() => {
	chatbotSendMessage(response)
		
	}, 1000);
}




