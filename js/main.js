function makeBold(){ 
   if( document.getElementById('diva').style.fontWeight!='bold')
   document.getElementById('diva').style.fontWeight='bold';
   else
   document.getElementById('diva').style.fontWeight='normal';
}
function makeItalic(){
  if ( document.getElementById('diva').style.fontStyle!='italic')
  document.getElementById('diva').style.fontStyle='italic';
  else
  document.getElementById('diva').style.fontStyle='normal';
}
function makeUnderline(){
  if(  document.getElementById('diva').style.textDecoration!='underline')
  document.getElementById('diva').style.textDecoration='underline';
  else
  document.getElementById('diva').style.textDecoration='none';
}

function changesize(){
    document.getElementById('diva').style.fontSize =document.getElementById("fs").value;
}

function changestyle(){
    document.getElementById('diva').style.fontFamily =document.getElementById("st").value;
}
$(document).ready(function(){
$(".bt").hover(function(){
    $("this").css(opacity=0.5,);
})
   })

   $(document).ready(function(){
   $(".im").parent(".bt").hover(function(){
   $(this).find(".1").toggle();
  
  })
})