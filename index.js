function  currency()
{
    "use strict";
    var so = document.getElementById ("id_2").value;
    var soo = document.getElementById ("id_4").value;
    var somme = document.getElementById ("id_1").value;
    if(isNaN(somme))
{
    document.getElementById("div_3").innerHTML="!"; 
    
}
else if(somme<0)
{
    document.getElementById("div_3").innerHTML="!"; 
}
else if(somme=="")
{
    document.getElementById("div_3").innerHTML=""; 
}
   else if( so=="Dinar Algérien" && soo =="Euro" && somme>0)
    {
        currencyOne()
    }
  

    else if( so=="Euro" && soo=="Dinar Algérien"&& somme>0)
    {
        currencyTwo ()
    }
    else if( so=="Dinar Algérien" && soo=="Dollar"&& somme>0)
    {
        currencyThree()
    }
    else if( so=="Dollar" && soo =="Dinar Algérien"&& somme>0  )
    {
        currencyFoor()
}
else if ( so=="Dollar" && soo =="Euro"&& somme>0  )
{
    currencyFive()
}
else if ( so=="Euro" && soo =="Dollar"&& somme>0  )
{
    currencySix()
}
   
else if(so==soo)
{
    document.getElementById("div_3").innerHTML=somme;
}

else if(somme==0)
{
    document.getElementById("div_3").innerHTML="0"; 
}

   
     
   
  
}
function currencyOne()

{
    "use strict";
    var somme = document.getElementById ("id_1").value;
    var som = somme*0.0069;
    document.getElementById("div_3").innerHTML = som;


}
function currencyTwo()

{
    "use strict";
    var somme = document.getElementById ("id_1").value;
    var som = somme*145.65;
    document.getElementById("div_3").innerHTML = som;


}
function currencyThree()

{
    "use strict";
    var somme = document.getElementById ("id_1").value;
    var som = somme*0.0078;
    document.getElementById("div_3").innerHTML = som;


}
function currencyFoor()

{
    "use strict";
    var somme = document.getElementById ("id_1").value;
    var som = somme*128.76;
    document.getElementById("div_3").innerHTML = som;


}
function currencyFive()

{
    "use strict";
    var somme = document.getElementById ("id_1").value;
    var som = somme*0.88;
    document.getElementById("div_3").innerHTML = som;


}
function currencySix()

{
    "use strict";
    var somme = document.getElementById ("id_1").value;
    var som = somme*1.13;
    document.getElementById("div_3").innerHTML = som;


}
