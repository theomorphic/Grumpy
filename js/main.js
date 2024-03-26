

const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

const user = {message:""};

const arrayOfPossibleMessages = [
	
	{"message":"hi", "response":"Eat shit"},
	{"message":"hey", "response":"Fuck your hey"},
	{"message":"hello", "response":"Oh no, there's another asshole"},
	{"message":"sup", "response":"I could care less"},
	{"message":"bye", "response":"Yeah, disappear"},
	{"message":"goodbye", "response":"Go away like your father did"},
	{"message":"see you", "response":"In hell"},





	{"message":"who are you", "response":"Your mother's boyfriend"},
	{"message":"thank you", "response":"You're not welcome"},
	{"message":"thanks", "response":"Whatever"},


	{"message":"you suck", "response":"Fuck you"},
	{"message":"fuck you", "response":"I will"},
	{"message":"fuck off", "response":"Go fuck yourself then"},
	{"message":"bitch", "response":"Don't recall your mother"},

	{"message":"yeah", "response":"Yeah yeah bitch"},
	{"message":"yes", "response":"Say less"},
	{"message":"no", "response":"No up to your ass"},
	{"message":"nope", "response":"You can go suck it my this nope"},
	{"message":"ok", "response":"Yeah swallow it like that"},





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


// эта функция выведена отдельно на случай добавления нажатия enter
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

	//ловля ответа не из массива
	if(result.length > 0){
		const response = result[0].response;

		setTimeout(() => {
		chatbotSendMessage(response)
			
		}, 1000);
	} else{
		setTimeout(() => {
			chatbotSendMessage("I don't give a flying fuck bout that")				
			}, 1000);
	}

}




