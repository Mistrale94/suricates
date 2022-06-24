/*
  red = 1
  blue = 2
  vert = 3
  jeune = 4
  */
var j=0;
var alea = [0,1,2,3,4];
alea = alea.sort(function(){
    return .5 - Math.random();
})
//console.log("alea=",alea);
var dateList = [];
dateList = [{
    "question_number": 1,
    "title": "Quelle destination vous inspire pour votre prochain voyage ?",
    "option": ["A la Montagne", "A la Mer", "En Ville", "En Forêt"],
    "value" : [4,2,1,3],
  },
 {
  "question_number": 2,
  "title": "Quel est votre animal favori parmi la liste suivante ?",
  "option": ["Un Ours", "Un Chien", "Un Alpaga", "Une Loutre"],
  "value" : [3,1,4,2],
},
{
"question_number": 3,
"title": "Parmi ces sens, quel est le plus important pour vous ?",
"option": ["L’odorat", "Le goût", "Le toucher","La vue"],
"value" : [2,4,1,3],
},
{
"question_number": 4,
"title": "Quel plat est le plus inspirant ?",
"option": ["Un brunch", "Un barbecue des familles", "Un bon plateau de fruit de mer","Une raclette"],
"value" : [1,3,2,4],
},
{
"question_number": 5,
"title": "Quel est le légume que vous aimez le moins ? ",
"option": ["Du céleri", "Du navet", "Une asperge","Des épinards"],
"value" : [3,1,2,4],
}

];
var reponsesFinales =[
"éleveur d’abeilles sur rooftop Parisien",
"Conchyliculteur (moules, huitres, st jacques) en Bretagne",
"horticulteur en Nouvelle Aquitaine",
"producteur de fromage en Auvergne"
];

document.querySelector('#question p').innerHTML = dateList[alea[0]].title;
//console.log(dateList[alea[0]].option[1].length);

var h=[];
var reponseList =[];

for(var i=0;i<4; i++)
{
  h+=`<div><input type="radio" name="option" value="${dateList[alea[0]].value[i]}"> <label>${dateList[alea[0]].option[i]}</label></div>`;
  //console.log(h);
}
document.getElementById("option").innerHTML = h;


function next(){
var radio = document.getElementsByName("option");
var check = 0;

for(let i=0; i<4; i++){

    if(radio[i].checked){
        reponseList.push(radio[i].value);
        check = 1;
        //console.log( reponseList);
    }
}

if(check == 1){
  j++;
  //console.log("j=",j);
  document.querySelector('#question p').innerHTML = dateList[alea[j]].title;
  let h = []; 
  for(let i=0;i<4; i++)
  {
    h+=`<div><input type="radio" name="option" value="${dateList[alea[j]].value[i]}"> <label>${dateList[alea[j]].option[i]}</label></div>`;
  }
  document.getElementById("option").innerHTML = h;
}
if( j == 4){
    document.getElementById("finir").style= "display : block";
    document.getElementById("next").style= "display : none";
  }
}

function finir(){

var radio = document.getElementsByName("option");
var check = 0;
var res = 0,num=1,resN=1;
  
for(let i=0; i<4; i++){
  if(radio[i].checked){
    //console.log("yes");
    //console.log(radio[i].value);
    reponseList.push(radio[i].value);
    check = 1;
    //console.log( reponseList);
  }
}

if(check == 1){

  document.querySelector('#question').style= "display : none";
  document.querySelector("#resultat").style= "display : block";

  reponseList = reponseList.sort(
   function(x,y){
       if(x < y)
          return -1
      if(x >y)
        return 1
      return 0
  });
  //console.log(reponseList);

  for(let i=0;i<4;i++){
    //console.log("for i=",i);
      if(reponseList[i] == reponseList[i+1]){
        num++;
        //console.log("i=",reponseList[i],"i+1=",reponseList[i+1]);

        if(num == resN  && num == 2){
          let a = Math.round(Math.random());
          let b = Math.round(Math.random());
          //console.log("a=",a,"b=",b);
          if(a>b)
             res = reponseList[i];
             document.querySelector('#resultat p').innerHTML = ` vous êtes un ${reponsesFinales[res-1]}`;
          return;
        }
        if(num > resN){
          resN = num;
          res = reponseList[i];
        }
        if(num == 3){
           res = reponseList[i];
           document.querySelector('#resultat p').innerHTML = `vous êtes un ${reponsesFinales[res-1]}`;
           return;
        }
      }
      else{
        num = 1;
      }
  }
  document.querySelector('#resultat p').innerHTML = `vous êtes un ${reponsesFinales[res-1]}`;

}

}

function refaire(){

    document.querySelector('#question').style= "display : block";
    document.querySelector("#resultat").style= "display : none";

    document.getElementById("finir").style= "display : none";
    document.getElementById("next").style= "display : block";
    j = 0;
    alea = [0,1,2,3,4];
    alea = alea.sort(function(){
        return .5 - Math.random();
    })

    document.querySelector('#question p').innerHTML = dateList[alea[0]].title;
    //console.log(dateList[alea[0]].option[1].length);

    h=[];
    reponseList =[];

    for(var i=0;i<4; i++)
    {
        h+=`<div><input type="radio" name="option" value="${dateList[alea[0]].value[i]}"> <label>${dateList[alea[0]].option[i]}</label></div>`;
        //console.log(h);
    }
    document.getElementById("option").innerHTML = h;

}
