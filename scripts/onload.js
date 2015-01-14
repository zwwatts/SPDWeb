$( document ).ready(function() {
				$(".notHere").hide();
				
				document.title = 'Sigma Phi Delta - Beta Mu';
				
				$("#tabHistory").hide();
				$("#tabBrothers").hide();
				$("#tabNews").hide();
				$("#tabLinks").hide();
				$("#tabPledges").hide();
				$("#tabDigital").hide();
				
				setHover("facebook", $("#facebook"));
				setHover("twitter", $("#twitter"));
				setHover("linkedin", $("#linkedin"));
				setHover("instagram", $("#instagram"));
				setHover("vine", $("#vine"));
				setHover("skype", $("#skype"));
				setHover("youtube", $("#youtube"));
				setHover("twitter_dark", $("#twitterLogo"), $("#footerTwitter"));
				setHover("facebook_dark", $("#facebookLogo"), $("#footerFacebook"));
				
				$("#hiddenKey").click(function(){
					$(".notHere").toggle();
				});
				
				//error("test");
				
			});