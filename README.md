# ajbs.github.io

<!DOCTYPE html>
<HTML>
<HEAD>
	<meta charset="utf-8">
	<meta name="author" content="Audrey Jeanine B. Samson">	
	<!-- <meta name="viewport" content="width=device-width, initial-scale=1"> -->
	<!--<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=1">-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!--<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"> -->
	
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Harmattan&display=swap" rel="stylesheet">						
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.2/font/bootstrap-icons.css" integrity="sha384-eoTu3+HydHRBIjnCVwsFyCpUDZHZSFKEJD0mc3ZqSBSb6YhZzRHeiomAUWCstIWo" crossorigin="anonymous">
	<link rel="stylesheet" media= "screen" href="http://fonts.cdnfonts.com/css/gellatio-personal-use" type="text/css">
	<link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/glacial-indifference" type="text/css"/>
	<link href="http://fonts.cdnfonts.com/css/made-tommy-soft-outline" rel="stylesheet">
	<link href="http://db.onlinewebfonts.com/c/174a032e6fa07cdb1882a700d67dad1d?family=AntebAlt-Black" rel="stylesheet" type="text/css"/>
	<link href="http://db.onlinewebfonts.com/c/3b8e8e0716c50e3cafaf45b012d76569?family=Blogger+Sans" rel="stylesheet" type="text/css"/>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossorigin="anonymous" />
	<link rel="stylesheet" href="css/home.css" media="screen">
	<!-- <link rel="stylesheet" href="C:\Users\audre\Documents\2022 PROJECTS\html\july\css\home.css" media="screen"> -->
	<!-- <link rel="stylesheet" href="about.css" media="screen"> -->
	

<TITLE> SUBARU SQUARE </TITLE>
<link rel="shortcut icon" type="image/jpg" href="C:\Users\audre\Documents\2022 PROJECTS\images\subaru logo w outline.png">

<script type="text/javascript">
	function changeImage(element) {
	document.getElementById('imageReplace').src = element;
	}
	
	
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
</script>
</HEAD>
<BODY>

	<div class="main" align="center">
			<div class="topnav">
				<div class="logo"><img src="C:\Users\audre\Documents\2022 PROJECTS\images\subaru logo w outline.png", width="180px", height="180px", align="left"></div>

					<div class="topnav-left">
						SUBARU SQUARE
					</div>

				<a href="#home" class="button">HOME</a>
				<a href="menu.html" class="button">MENU</a>	
				<a href="#packages" class="button">PACKAGES & SERVICES</a>	
				<a href="#about" class="button">ABOUT US</a>
				<a href="#contact" class="button">CONTACT US</a>
				<a href="#order" class="button">ORDER NOW</a>
				<a href="#cart" class="button"><i class="bi bi-cart4"></i></a>

			</div>
			<!--
			<div class="hero">	
			
			
				<h1>All In One <br> Restaurant </h1>
			<br>
			<br>
			<br>
			<br>
			
			</div>
			
			
			<br>
			<br>
			-->
	
			
  <div class="container-fluid p-0">
    <div id="carousel" class="carousel slide hero-slides" data-ride="carousel">
      <ol class="carousel-indicators">
        <li class="active" data-target="#carousel" data-slide-to="0"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
        <li data-target="#carousel" data-slide-to="2"></li>
		<li data-target="#carousel" data-slide-to="3"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active restaurant">
          <div class="container h-100 d-md-block">
            <div class="container h-100 d-flex align-items-center justify-content-center">
              <div class="col-xl-auto">
                  <h1 class="animated fadeInLeft">All In One <br> Restaurant</h1>
                </div>
            </div>
          </div>
        </div>
        <div class="carousel-item event">
          <div class="container h-100 d-md-block">
            <div class="container h-100 d-flex align-items-center justify-content-center">
              <div class="col-xl-auto">
                  <h1 class="animated fadeInLeft">Exclusive Events</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item karaoke">
          <div class="container h-100 d-md-block">
            <div class="container h-100 d-flex align-items-center justify-content-center">
              <div class="col-xl-auto">
                  <h1 class="animated fadeInLeft">Karaoke Room <br> Package</h1>
              </div>
            </div>
          </div>
        </div>
		<div class="carousel-item live">
          <div class="container h-100 d-md-block">
            <div class="container h-100 d-flex align-items-center justify-content-center">
              <div class="col-xl-auto">
                  <h1 class="animated fadeInLeft">Live Life Well <br> Membership</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
</div>


<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/animateCSS/1.2.2/jquery.animatecss.min.js"></script>
 





<br>
<br>
			
			<h5> MONTH'S TOP PICKS </h5>
				<section style="border-bottom: 3px solid #000; width: 20%"> </section>
			<br>
			<br>
			
			<!--
			<tr>
				<td><a href="#"><h6> FILIPINO DISH </h6></a></td>
				<td><a href="#"><h6> RIB-EYE STEAK </h6></a></td>
				<td><a href="#"><h6> JAPANESE DISH </h6></a></td>
				<td><a href="#"><h6> DESSERTS </h6></a></td>
				<td><a href="#"><h6> BEVERAGES </h6></a></td>
			</tr>		
			-->
			
			<!-- bootstrap -->
			<div class="container-px-4" id="home">
			<div class="row gx-5">
				<div class="col-auto mr-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
				<div class="col-sm"><h6><a href="fildish"> FILIPINO DISH </a></h6></div>
				<div class="col-sm"><h6><a href="ribeye"> RIB-EYE STEAK </a></h6></div>
				<div class="col-sm"><h6><a href="jap"> JAPANESE DISH </a></h6></div>
				<div class="col-sm"><h6><a href="dessert"> DESSERTS </a></h6></div>
				<div class="col-sm"><h6><a href="bev"> BEVERAGES </a></h6></div>
				<div class="col-auto ml-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
			</div>
			</div>
			
			
			<br>
			<br>
			
			<!--
			<div class="container">
			<div class="row">
				<div class="col-sm"><img src="C:\Users\audre\Documents\2022 PROJECTS\images\HOME PAGE-updated\HOME PAGE\MONTH_S TOP PICKS - FD1.jpg"></div>
				<div class="col-sm"><img src="C:\Users\audre\Documents\2022 PROJECTS\images\HOME PAGE-updated\HOME PAGE\MONTH_S TOP PICKS - FD2.jpg"></div>
			</div>	
			</div>
			-->
			<div class="fildish">
			<div class="row justify-content-md-center">
			
				<div class="col-auto mr-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
				<div class="col-5">
					<img src="C:\Users\audre\Documents\2022 PROJECTS\images\HOME PAGE-updated\HOME PAGE\MONTH_S TOP PICKS - FD1.jpg", height="600px", width="600px" id="imageReplace"/>    
					</div>
				<div class="col-5">
					<img src="C:\Users\audre\Documents\2022 PROJECTS\images\HOME PAGE-updated\HOME PAGE\MONTH_S TOP PICKS - FD2.jpg", height="600px", width="600px" id="imageReplace"/>
					</div>
				<div class="col-auto ml-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
					
			</div>
			</div>
			
			
			<br>
			<br>
			
			<div class="row justify-content-md-center">
				<div class="col-auto mr-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
				<div class="col-4">
				<div class="full_menu"> FULL MENU </div>
				</div>
				<div class="col-md-auto">&nbsp; &nbsp;</div>
				<div class="col-4">
				<div class="delivery"> DELIVERY </div>
				</div>
				<div class="col-auto ml-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>

			</div>	
			
			<br>
			<br>
			<br>
			<br>
			
			
			<h5> PACKAGES & SERVICES </h5>
				<section style="border-bottom: 3px solid #000; width: 20%"> </section>
			<br>
			<br>
			<br>
			
			<div class="container-px-4">
			<div class="row gx-5">
				<div class="col-auto mr-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>			
				<div class="col-sm"><h6> PARTY PACKAGES </h6></div>
				<div class="col-sm"><h6> KARAOKE ROOM </h6></div>
				<div class="col-sm"><h6> EXCLUSIVE EVENT </h6></div>
				<div class="col-sm"><h6> LIVE LIFE WELL MEMBERSHIP </h6></div>
				<div class="col-auto ml-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>

			</div>
			</div>
			<br>
			
			<div class="row justify-content-md-center">
				<div class="col-auto mr-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
			
				<div class="col-5">
					<img src="C:\Users\audre\Documents\2022 PROJECTS\images\HOME PAGE-updated\HOME PAGE\PACKAGES _ SERVICES - KR1 (2).jpg", height="600px", width="600px">    
					</div>
				<div class="col-5">
					<img src="C:\Users\audre\Documents\2022 PROJECTS\images\HOME PAGE-updated\HOME PAGE\PACKAGES _ SERVICES - KR2 (2).jpg", height="600px", width="600px">
					</div>
				<div class="col-auto ml-auto">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </div>
				
			</div>
			
			<br>
			<br>
			
			<center>
			<div class="book_now"> BOOK NOW </div>
			</center>
			
			<br>
			<br>
			<br>
			<br>
			
			<h5> STORE DETAILS </h5>
				<section style="border-bottom: 3px solid #000; width: 20%"> </section>
			<br>
			<br>
			
			<!--
			<i class="bi bi-clock", align="left"><b></b></i>
			<div class="row"><h6>
				<div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
				<div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
			</h6>
			</div>

			<div class="row"><h7>
				<div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
				<div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
			</h7>
			</div>
			-->
	</div>
</BODY>
</HTML>
