class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()
    background("yellow")
    textSize(30)
    text("result of the quiz",displayWidth/2-200,70)

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    Contestant.getPlayerInfo()
    if(allContestants !== undefined){
     var  y = 230
      fill("Blue")
      textSize(20);
      text("*note: contestant who answeres correct are highlighted in green color!",130,230)
    }
    for(var plr in allContestants){
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red")
    y+= 30
    textSize(20)
    text(allContestants[plr].name+"="+allContestants[plr].answer,250,y)
    }
      
    
    
  }
}
