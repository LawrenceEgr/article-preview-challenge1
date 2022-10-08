
function display(){
    if(document.getElementById("share").style.display=== "block")
      {
        document.getElementById("share").style.display="none";
      }
      else{
        document.getElementById("share").style.display= "block"
      }
    
}

//sharing content on facebook
const fb = document.getElementById('fb');
fb.addEventListener('click', shareonFacebook);

function shareOnFacebook(){
    const navUrl = 'https://www.facebook.com/sharer/sharer.php?u=https://github.com/LawrenceEgr/Amazon_ecommerce';
    window.open(navUrl , '_blank');
  }



  //sharing content on twitter
  
function shareOnTwitter() {
    const navUrl =
      'https://twitter.com/intent/tweet?text=https://github.com/LawrenceEgr/Amazon_ecommerce' 
      ;
    window.open(navUrl, '_blank');
  }




  //sharing content on pinterest
