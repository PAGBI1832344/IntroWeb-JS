var imgBirdOrdi,imgBirdJoueur;
function imgBird (noimage)
{

     document.querySelector("#imgBirdJoueur").src="img/angry-bird"+noimage+".png";
     afficherImgOrdi();
}
function afficherImgOrdi ()
{
    nordi=Math.floor(Math.random()*3+1);
    document.querySelector("#imgBirdOrdi").src="img/angry-bird"+nordi+".png";
}
function compterPoints(){

    lblResultatJoueur=lRJ;
    lblResultatOrdi=lRO;
    if(imgBirdJoueur ===imgBirdOrdi){
        lRJ=lRJ+10;

    }
}
