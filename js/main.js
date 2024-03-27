

const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

const user = {message:"", counter:0};


import {table as responseTable} from "./response.js";

setTimeout(() => {
chatbotSendMessage("Sup you moron. What they call you?")

}, 2000);

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

	//скроллим вниз по сообщениям
	chatContainer.scrollTop = chatContainer.scrollHeight;
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

	//скроллим вниз по сообщениям
	chatContainer.scrollTop = chatContainer.scrollHeight;

}


sendBtn.addEventListener("click", clickSendBtn);


// эта функция выведена отдельно на случай добавления нажатия enter
function clickSendBtn(){
	if(textbox.value == ""){
		alert("WRITE SOME SHIT YOU FUCK")
	}else{
		let messageText =  textbox.value.trim();
		user.message = messageText;
		sendMessage(messageText);
		textbox.value = "";

		// questionsToAsk[user.counter-1].answer = user.message;

		// askQuestion();
		processMessage();

	}
};



function processMessage(){

	let lowUser = user.message.toLocaleLowerCase();

	if(lowUser.length > 1){

		//ловля ответа не из массива
		if(lowUser in responseTable){
			const response = responseTable[lowUser];

			setTimeout(() => {
			chatbotSendMessage(response)

			}, 1000);
		} else{
			setTimeout(() => {
				chatbotSendMessage("I don't give a flying fuck bout that")
				}, 1000);
		}

	} else if(user.message == "how" || user.message =="что"){

		setTimeout(() => {
			chatbotSendMessage("Write your stupid question normally");

		}, 1000);
	} else{
		setTimeout(() => {
			chatbotSendMessage("Yeah, you now your letters bitch")
		}, 1000);

	}

	if(lowUser == "dwarf"||lowUser == "you are dwarf"||lowUser == "you're dwarf"||lowUser == "youre dwarf"||lowUser == "you are a dwarf"||lowUser == "you're a dwarf"||lowUser == "youre a dwarf"||lowUser == "you dwarf"||lowUser == "you a dwarf"||lowUser == "you a dwarf!"||lowUser == "dwarf!"||lowUser == "you are dwarf!"||lowUser == "you are a dwarf!"||lowUser == "you dwarf!"||lowUser == "you are fucking dwarf!"||lowUser == "you are fucking dwarf"){
		setTimeout(() => {
			chatbotSendMessage("Wait a minute")
		}, 2000);

		setTimeout(() => {
			chatbotSendMessage("Oh motherfucker, how dare you...")
		}, 2700);

		setTimeout(() => {
			document.getElementById("media").style.display = "none";
			document.getElementById("inputGroup").style.display = "none";
			document.getElementById("container").style.backgroundColor = "rgb(141, 193, 238)";

			chatContainer.style.display = "none";

			document.getElementById("h1").innerHTML = "FUCK YOU!!!"
		}, 3900);

		setTimeout(() => {
			document.getElementById("media").style.display = "flex";
			document.getElementById("inputGroup").style.display = "";
			document.getElementById("container").style.backgroundColor = "#fff";

			chatContainer.style.display = "";


			document.getElementById("h1").innerHTML = "Grumpiest Chatbot Ever";

			chatbotSendMessage("Don't you ever call me like that!")


		}, 7000);
	}


}

//ивент для нажатия на энтер, это 13 клавиша
//он поставлен на текстовое поле, а не на кнопку, как я изначально пытался

textbox.addEventListener("keypress", function(e){

	if(e.which == 13){
		clickSendBtn();
	}
});




