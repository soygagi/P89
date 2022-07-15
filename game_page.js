
	player1_name = localStorage.getItem("player1_name");
	player2_name = localStorage.getItem("player2_name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player1_name ;
document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;

function send() {
	number1 = document.getElementById("number1").value;
	number2 = document.getElementById("number2").value;
	actual_answer = parseInt(number1) * parseInt(number2);
	console.log(actual_answer);


    question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
    input_box = "<br>Respuesta : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Comprobar</button>";
    row =  question_number + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
	document.getElementById("number1").value = "";
	document.getElementById("number2").value = "";
}
//establece las variables question-turn="player1" y answer_turn="player2"
question_turn="player1";
answer_turn="player2";
function check()
{
	get_answer = document.getElementById("input_check_box").value;
	if(answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			//establece la variable player1_score como player1_score +1
			player1_score = player1_score + 1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			//establece la variable player2_score como player2_score +1
			player2_score = player2_score+1;
		    document.getElementById("player2_score").innerHTML = player2_score;
			
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2";
		//actualiza el id como player_question
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " + player2_name ;
	}
	else 
	{
		question_turn = "player1";
		//agrega la variable player1_name
		document.getElementById("player_question").innerHTML = "Turno para preguntar - " +player1_name  ;
	}

	if(answer_turn == "player1")
	{
		//declara la variable como player2
		answer_turn = "player2";
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player2_name ;
	}
	else 
	{
		//declara la variable como player1
		answer_turn = "player1";
		document.getElementById("player_answer").innerHTML = "Turno para responder - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}
