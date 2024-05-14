var score = 0;
var selfVar= 1;
var ageVar=1;
var genVar=1;
var lossVar=2;
var set = set1;
var i=0;



var set1=["How often have you been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have you had little interest or pleasure in doing things? ","How often have you been bothered by feeling down, depressed or hopeless? ","How often have you been bothered by poor apetite or overeating? ","How often have you been bothered by trouble concentrating on things, such as watching television? ","How often you feel struggling in school and tend to think it is because you are not smart enough? ","How often have you been bothered by having trouble relaxing after studies? ","Have you felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often you feel like you don't deserve to be loved? ","How many times have you been bothered by getting easily annoyed or irritable? " ];

var set2=["How often has that person been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have that person had little interest or pleasure in doing things? ","How often has that person been bothered by feeling down, depressed or hopeless? ","How often has that person been bothered by poor apetite or overeating? ","How often has that person been bothered by trouble concentrating on things, such as watching television? ","How often that person feel struggling in school and tend to think it is because that person is not smart enough? ","How often has that person been bothered by having trouble relaxing after studies? ","Has that person felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often that person feel like he or she don't deserve to be loved? ","How many times has that person been bothered by getting easily annoyed or irritable? "];

var set3=["How often have you been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have you had little interest or pleasure in doing things? ","How often have you been bothered by feeling down, depressed or hopeless? ","How often have you been bothered by poor apetite or overeating? ","How often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television? ","How often you feel struggling in work and tend to think it is because you are not smart enough? ","How often have you been bothered by having trouble relaxing after work? ","Have you felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often you feel like you don't deserve to be loved or don't have someone who can love you? ","How many times have you been bothered by getting easily annoyed or irritable? " ];

var set4=["How often has that person been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often has that person had little interest or pleasure in doing things? ","How often has that person been bothered by feeling down, depressed or hopeless? ","How often has that person been bothered by poor apetite or overeating? ","How often has that person been bothered by trouble concentrating on things, such as reading the newspaper or watching television? ","How often that person feel struggling in work and tend to think it is because that person is not smart enough? ","How often has that person been bothered by having trouble relaxing after work? ","Has that person felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often that person feel like he or she don't deserve to be loved or don't have someone who can love him or her? ","How many times has that person been bothered by getting easily annoyed or irritable? "];

var set5=["How often have you been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often have you had little interest or pleasure in doing things? ","How often have you been bothered by feeling down, depressed or hopeless? ","How often have you been bothered by poor apetite or overeating? ","How often have you been bothered by trouble concentrating on things, such as reading the newspaper? ","How often you feel struggling in work or daily visiting places and tend to think it is because you are not smart enough? ","How often have you been bothered by having trouble relaxing after work or anytime? ","Have you felt like an anxiety attack ( sudden feeling of fear or panic ) ?","How often you feel like you don't have someone who can love you? ","How many times have you been bothered by getting easily annoyed or irritable? " ];

var set6=["How often has that person been bothered by trouble failing or staying asleep, or sleeping too much ? ","How often has that person had little interest or pleasure in doing things? ","How often has that person been bothered by feeling down, depressed or hopeless? ","How often has that person been bothered by poor apetite or overeating? ","How often has that person been bothered by trouble concentrating on things, such as reading the newspaper? ","How often that person feel struggling in work or daily visiting places and tend to think it is because he or she is not smart enough? ","How often has that person been bothered by having trouble relaxing after work or anytime? ","Has that person felt like an anxiety attack ( suddenly feeling fear or panic ) ?","How often your that person feel like he or she don't have someone who can love him or her? ","How many times has that person been bothered by getting easily annoyed or irritable? " ];


function shown(){
    document.getElementById('box').style.display="none";
	var disc = "<div id='disclamairHead'>Health is Wealth! </div>"+
    "<div id='descriptionText'>"+
    "It's a common adage that if you're healthy, nothing can stop you from being wealthy. We constantly abide by this rule, but sometimes we fail to remember that health is not just about bodily well-being; mental well-being is just as significant. The most crucial aspect is mental wellness, and it must never be neglected! We sometimes don't even become aware that we have this illness. Additionally, due to societal anxieties, when people learn about this sickness, they strive to hide it. But having sadness or something like is entirely natural or acceptable. It's similar to any other ailment in that it has to be caught early to prevent any dangerous situations! We must first do certain screening tests at our level in order to achieve that. This quick exam is created for depression self-screening. The time it takes to complete this test—barely more than 10 minutes—could save your life or the lives of those dear to you! Data is solely requested for assessment reasons because it is an anonymous test. You may take this exam if you are at least 16 years old."+
    '</div>'+
    '<div id="footerDisclamair">ElysianMind By <i>Munshi Mohammad Zunejo & Sayantan Pal</i></div>'+
    '<div id="warningText"><i class="fa fa-exclamation-circle" style="font-size:30px"></i>'+
    '<div >This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div>'+
    '<button id="startText" class="mainBtn" title="Click Here To Start The Test" onclick="startTheTest()">Start The Test</button>';
	document.getElementById('box2').innerHTML = disc;
    document.getElementById('box2').style.display="flex";
}


function never(num){
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function some(num){
	score += 1;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function half(num){
	score+= 3;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function always(num){
	score += 5;
	if(i<9){
	i = i+1;
	showQues(i,num);}
	else{
		results();
	}
}
function setOne(dig){
	var template = '<div class="question">'+set1[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
}
function setTwo(dig){
	var template = '<div class="question">'+set2[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
function setThree(dig){
	var template = '<div class="question">'+set3[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setFour(dig){
	var template ='<div class="question">'+set4[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setFive(dig){
	var template = '<div class="question">'+set5[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }
 function setSix(dig){
	var template = '<div class="question">'+set6[dig]+'</div>';
	document.getElementById('box2').innerHTML = template;
	return;
 }


function showQues(j,n){
	if(n==1){
		setOne(j);
	}
	else if(n==2){
		setTwo(j);
	}
	else if(n==3){
		setThree(j);
	}
	else if(n==4){
		setFour(j);
	}
	else if(n==5){
		setFive(j);
	}
	else if(n==6){
		setSix(j);
	}
	var buttonShow = '<div id="buttonQuesFlex">'+'<button class="buttonOption" onclick="never('+n+')">Never</button>'+'<button class="buttonOption"  onclick="some('+n+')">Sometimes</button>'+'<button class="buttonOption" onclick="half('+n+')">Half Of The Time</button>'+'<button class="buttonOption b" onclick="always('+n+')">Everytime</button>'+'</div>';
	document.getElementById('box2').innerHTML += buttonShow;
}

function selfs(val){
	selfVar=val.value;

}


function ages(age){
	ageVar=age.value;

}

function gens(gen){
	genVar=gen.value;


}

function loss(los){
	lossVar = los.value;

}



function start(){
if(genVar==2){
	score += 1;
}
else if(genVar==3){
	score += 2;
}
if(lossVar==1){
	score +=3;
}
if(ageVar==1){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,1);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,2);
	}
}
else if(ageVar==2){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,3);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,4);
	}
}
else if(ageVar==3){
	if(selfVar==1){
		document.getElementById('box2').innerHTML = "";
		showQues(i,5);
	}else if(selfVar==2){
		document.getElementById('box2').innerHTML = "";
		showQues(i,6);
	}
}


}

function reload(){
	location.reload();
}

function endMsg(advise){
	var temp = '<div class="alertFlex">'
	+'<div id="scoreWhole">'
	+'<div id="score"> Score After Evaluation : '+score+' </div>'
	+'<div id="advise">'+advise+'</div>'
	+'</div>'
	+'  <hr>'
	+'  <div id="wish">Happy Mental Health </div>'
	+'<div id="warningText"><i class="fa fa-exclamation-circle" style="font-size:30px"></i>'
	+'<div>This is just a small self-screening and to get the best treatment, Doctor Consultation is advisable!</div></div>'
	+'<button id="startNew" class="mainBtn " title="Click Here To Start The Test" onclick="startTheTest()">Take Test Again</button>'
	+'<button onclick="reload()" title="Click here to go to home page!" class="mainBtn" id="goHomePageBtn">Go To Home Page</button>';
	document.getElementById('box2').innerHTML += temp;	
}

function results(){
	alert('You have successfully answered all the questions!!')
    document.getElementById('box2').innerHTML = "";
	var templates;
	if(score>=40){
		templates = '<div class="alertHead" id="veryhighAlert">You are at a very High Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Doctor consultation is highly recommended that too ASAP! Talk with your family! And remember you are not alone!');
	}
	else if(score>=27 && score<40){
		templates = '<div class="alertHead" id="highAlert">You are at a High Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Doctor Consultation is advisable! Talk with your family! And remember you are not alone!');
		
	}
	else if(score>=16 && score<27){
		templates = '<div class="alertHead" id="mediumAlert">You are at a Medium Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Talk with your Family! You can consult your Doctor if any of the above symptoms continues or become frequent!');
		
	}
	else if(score>=6 && score<16){
		templates = '<div class="alertHead" id="lessAlert">You are at Less Risk !</div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg('Your Mental is doing well! Just believe in yourself and never forget that you are not alone! Talk to your loved ones if needed!');
		
	}
	else if(score>=0 && score<6){
		templates = '<div class="alertHead" id="veryLessAlert">You are at a very Low Risk ! </div>';
		document.getElementById('box2').innerHTML += templates;
		endMsg("Your Mental Health is completely fine!! KEEP GOING HAPPILY!! ");
		
	}
}

function startTheTest(){
	shown();
    document.getElementById('box2').innerHTML = "";
    var infoTemp = '<div id="infoFlex">'+
    '<div id="headInfo">Please provide the primary info</div>'+
    '<div id="optionOne" class="options">'+
    '<select class="optional" onchange="selfs(this)">'+
      '<option selected>You are taking this test for</option>'+
      '<option value="1">Yourself</option>'+
      '<option value="2">Someone else</option>'+
      '</select>'+
      '<br>'+
      '<select class="optional" onchange="ages(this)">'+
        '<option selected>Age</option>'+
        '<option value="1">Between 16 to 35</option>'+
        '<option value="2">Between 36 to 50</option>'+
        '<option value="3">Above 50</option>'+
      '</select>'+
      '<br>'+
      '<select class="optional" onchange="gens(this)">'+
       '<option selected>Gender</option>'+
        '<option value="1">Male</option>'+
        '<option value="2">Female</option>'+
        '<option value="3">Other</option>'+
      '</select>'+
      '<br>'+
      '<div class="labelLoss">Any mishappening has happened to you or your loved one like the loss of anyone close, any financial crisis, any relationship issues, etc.</div>'+
      '<select id="lossOption" class="optional" onchange="loss(this)">'+
        '<option selected>Select</option>'+
        '<option value="1">Yes</option>'+
        '<option value="2">No</option>'+
      '</select>'+
  '<br>'+
    '</select>'+
    '</div>'+
    '<button id="nextTest" onclick="start()">NEXT</button>'
    '</div>';
    document.getElementById('box2').innerHTML = infoTemp;
}
