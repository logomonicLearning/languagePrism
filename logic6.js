
window.addEventListener('DOMContentLoaded', function(){


  window.onload=function(){
    wordsArr.push(new Word("good","好", "Hǎo"));
    wordsArr.push(new Word('horse','馬','Mǎ'));
    wordsArr.push(new Word('computer','電腦','Diànnǎo'));
    wordsArr.push(new Word('dragon','龍','Lóng'));
    wordsArr.push(new Word("long time no see","好久不見","Hǎojiǔ bùjiàn"));
    wordsArr.push(new Word("how are you","你好嗎","Nǐ hǎo ma"));
    wordsArr.push(new Word("programmer","程序員","Chéngxù yuán"));
    displayWord(wordsArr[Math.floor(Math.random()*wordsArr.length)])
  // wordsArr.push(new Word('','',''));
  }
 

  //!function(document, window, $){
//WORDS ARR 

  var wordsArr=[];
  //WORDS CLASS CONSTRUCTOR
  class Word{
    constructor(english, chinese, pinyin){
      this.english=english;
      this.chinese=chinese;
      this.pinyin=pinyin;
      this.id=wordsArr.length;
    }
  }
  
 const Wrd=(eng, chi, pin, id=wordsArr.length)=>{
    return {
      eng,
      chi,
      pin,
      id
    }
 }

 console.log( Wrd("good","好", "bone"))
    
  //DISPLAY FUNCTION
  function displayWord(el){
    console.log(el);
    [english, chinese, pinyin, id]=[el.english, el.chinese, el.pinyin, el.id];

    let $eng=$('<div>',{class:"english-side side", id:id}).html(english);
    let $ch=$('<div>',{class:"chinese-side side"}).html(chinese);
    let $pin=$('<div>',{class:"pinyin-side side"}).html(pinyin);
    let $whole=$('<div>',{class:"prism-wrapper"}).append([$eng,$ch,$pin])
    // let id=el.id
    // $("#prism-container").html([$eng,$ch,$pin]);
    $("#prism-container").html($whole);
    
    console.log(`${english} ${chinese} ${pinyin}`);
  } 


  function rotatePrism(action){
    $('#prism-container').removeClass().addClass(action);
  }


  function changeWord(dir,idx){
    
    switch(dir){
      case "prev":
        if(idx<=0) return false;
        else idx--
        break;

      case "next":
        if(idx==wordsArr.length-1) return false;
        else idx++
        break;

    }

    // if(dir==="prev"){
    //   if(idx<=0){
    //     console.log("no more");
    //     return false;
    //   }
    //   else idx--;
    // } 
  
    // if(dir==="next"){
    //   if(idx==wordsArr.length-1){
    //     console.log('no more')
    //     return false;
    //   } 
    //   else idx++      
    // }

    $('#prism-container').removeClass().addClass('chinese');
    displayWord(wordsArr[idx]);
  }


//2nd attempt (working)
  // function changeWord(dir,idx){
    

  //   if(dir==="prev"){
  //     if(idx<=0){
  //       console.log("no more");
  //       return false;
  //     }
  //     else idx--;
  //   } 
  
  //   if(dir==="next"){
  //     if(idx==wordsArr.length-1){
  //       console.log('no more')
  //       return false;
  //     } 
  //     else idx++      
  //   }

  //   $('#prism-container').removeClass().addClass('chinese');
  //   displayWord(wordsArr[idx]);
  // }
  

  //USER JQ EVENT HANDLING
  //CONTENT
  //change word, rotate prism
  $(window.document).ready(function(){
    $('.ctrl-btn').click(function(){
      let action=$(this).val();
      console.log(action);
      rotatePrism(action);
    });
    
    $('.change-btn').click(function(){
      var moveDir=$(this).val();
      var curIndex=parseInt($('#prism-container .english-side').attr("id"));
      changeWord(moveDir, curIndex);
    });
  })
 

})
