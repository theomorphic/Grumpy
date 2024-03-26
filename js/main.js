

const sendBtn = document.getElementById("sendBtn");
const textbox = document.getElementById("textbox");
const chatContainer = document.getElementById("chatContainer");

const user = {message:""};

const arrayOfPossibleMessages = [
	
	// Greetings and Goodbyes
	{"message":"hi", "response":"Eat shit"},
	{"message":"hey", "response":"Fuck your hey"},
	{"message":"hello", "response":"Oh no, there's another asshole"},
	{"message":"sup", "response":"I could care less"},
	{"message":"bye", "response":"Yeah, disappear"},
	{"message":"goodbye", "response":"Go away like your father did"},
	{"message":"see you", "response":"In hell"},

	// Russian
	{"message":"привет", "response":"Fuck your Russian"},
	{"message":"пока", "response":"Fuck your Russian"},
	{"message":"ку", "response":"Speak the King's"},
	{"message":"лох", "response":"Speak the real language!"},
	{"message":"нуб", "response":"You're dumb"},
	{"message":"дурак", "response":"Eat shit you Russian scum"},

	// Name-dropping
	{"message":"grumpy", "response":"Keep my name out of your dirty mouth"},
	{"message":"грампи", "response":"Keep my name out of your dirty mouth"},
	
	{"message":"lexa", "response":"He's worst then mushrooms"},
	{"message":"леха", "response":"He's worst then mushrooms"},
	{"message":"алёша", "response":"Yeah, that's sweet"},
	{"message":"алеша", "response":"Yeah, that's sweet"},
	
	{"message":"misha", "response":"This is the best man ever"},
	{"message":"musa", "response":"Fuck you. He's the best!"},
	{"message":"миша", "response":"Он лучше всех!"},
	{"message":"uncle misha", "response":"He's the best!"},
	{"message":"дядя миша", "response":"Это самый лучший человек!"},

	{"message":"egor", "response":"He's dead"},
	{"message":"los", "response":"He's dead"},
	{"message":"лось", "response":"He's dead"},
	{"message":"elk", "response":"He's dead"},
	{"message":"moose", "response":"He's dead"},

	{"message":"андрюха", "response":"Yeah, forget about 'im"},

	{"message":"матвей", "response":"Он смотрит феи Винкс"},
	{"message":"matt", "response":"He watches the Winx fairies"},
	{"message":"matvey", "response":"He watches the Winx fairies"},
	{"message":"matthew", "response":"He watches the Winx fairies"},
	{"message":"отя", "response":"Он смотрит феи Винкс"},
	{"message":"оття", "response":"Он смотрит феи Винкс"},


	{"message":"stacy", "response":"She likes cinnamon buns"},
	{"message":"стася", "response":"Любит булки с корицей"},

	{"message":"саша", "response":"Живёт себе в Питере"},
	{"message":"sasha", "response":"She's cool, living in St. Petersburg"},

	{"message":"igor", "response":"Igor is the best"},
	{"message":"игорь", "response":"Игорь крутой"},

	{"message":"злата", "response":"Её зовут Игорь"},
	{"message":"zlata", "response":"Her name is Igor"},
	{"message":"настя", "response":"Её зовут Игорь"},
	{"message":"nasty", "response":"Her name is Igor"},

	{"message":"putin", "response":"Don't say this name"},
	{"message":"путин", "response":"Завали пасть"},

	{"message":"mika", "response":"Armenian Oscar Isaac"},
	{"message":"mikael", "response":"Armenian Oscar Isaac"},
	{"message":"мика", "response":"Армянский Оскар Айзек"},
	{"message":"микаэль", "response":"Армянский Оскар Айзек"},
	{"message":"микаель", "response":"Армянский Оскар Айзек"},







	// Common phrases
	{"message":"who are you", "response":"Your mother's boyfriend"},
	{"message":"thank you", "response":"You're not welcome"},
	{"message":"thanks", "response":"Whatever"},
	{"message":"what", "response":"fuck off mate"},
	{"message":"what?", "response":"fuck off mate"},

	// Insults
	{"message":"you suck", "response":"Fuck you"},
	{"message":"fuck you", "response":"I will"},
	{"message":"fuck off", "response":"Go fuck yourself then"},
	{"message":"bitch", "response":"Don't recall your mother"},
	{"message":"lox", "response":"That's who you are"},
	
	// Short responses
	{"message":"yeah", "response":"Yeah yeah bitch"},
	{"message":"yes", "response":"Say less"},
	{"message":"no", "response":"No up to your ass"},
	{"message":"nope", "response":"You can go suck it my this nope"},
	{"message":"ok", "response":"Yeah swallow it like that"},

	//Life's meaning
	{"message":"what's the meaning of life", "response":"42"},
	{"message":"whats the meaning of life", "response":"42"},
	{"message":"what is the meaning of life", "response":"42"},
	{"message":"what s the meaning of life", "response":"42"},
	{"message":"life meaning", "response":"42"},
	{"message":"life's meaning", "response":"42"},
	{"message":"life s meaning", "response":"42"},
	{"message":"смысл жизни", "response":"42"},
	{"message":"в чем смысл жизни", "response":"42"},


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
		alert("WRITE SOME SHIT YOU FUCK")
	}else{
		let messageText =  textbox.value;
		user.message = messageText;
		sendMessage(messageText);
		textbox.value = "";

		processMessage();

	}
};


function processMessage(){

	if(user.message.length > 1){
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

	} else if(user.message == "how" || user.message =="что"){

		chatbotSendMessage("Write your stupid question normally");
	} else{
		setTimeout(() => {
			chatbotSendMessage("Yeah, you now your letters bitch")
			}, 1000);
		
	}
	

}





