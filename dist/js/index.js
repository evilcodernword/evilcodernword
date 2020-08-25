$(document).ready(function () {
    $('.hamburger_button').on('click', function () {     
		if (!$('#navbar').hasClass("show")) {
			$('.animated-icon1').addClass('open');
			$('.linetwo').addClass('disabble');
			$('body').css("overflow", "hidden");
			$('.close-page-gradient').removeClass("d-none");
				$('.close-page-gradient').click(function(){
					$('.close-page-gradient').addClass("d-none");
					$('.animated-icon1').removeClass('open');
					$('.linetwo').removeClass('disabble');
					$('body').css("overflow", "auto");
					$('#navbar').removeClass("show");
				});
		}else{
			$('.close-page-gradient').addClass("d-none");
			$('.animated-icon1').removeClass('open');
			$('.linetwo').removeClass('disabble');
			$('body').css("overflow", "auto");
		}
    });
});

//story settings
$(document).ready(function(){
	 	$('.story').slick({
	  	slidesToShow: 5,
	  	slidesToScroll:5,
	  	arrows:true,  
		infinite: false,
	  	centerMode: false,
	  	responsive: [
	  	 
	  		{
	      		breakpoint: 1200,
	      		settings: {
	      			slidesToShow: 4,
	      			slidesToScroll:4,
	        		arrows: false,
	        		centerMode: false,
	      		}
    		},
  			{
	      		breakpoint: 992,
	      		settings: {
	      			slidesToShow: 5,
	      			slidesToScroll:5,
	        		arrows: false,
	        		centerMode: false,
	      		}
    		},
	    	{
	      		breakpoint: 768,
	      		settings: {
	      			slidesToShow: 4,
	      			slidesToScroll:4,
	        		arrows: false,
	        		centerMode: false,
	      		}
    		},
    		{
	      		breakpoint: 480,
	      		settings: {
	      			slidesToShow: 3,
	      			slidesToScroll:3,
	        		arrows: false,
	        		centerMode: false,
	      		}
    		},
	  	]
  	});
});

// story vide src
$(document).ready(function() {
	var $videoSrc;  
	$('.storyButton').click(function() {
		$this = $(this);
	    $videoSrc = $(this).data( "src" );
		$('#storyModal').on('shown.bs.modal', function (e) { 
			$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" );
			$this.parents('.circle').addClass('circle-clicked');	 
		});
		$('#storyModal').on('hide.bs.modal', function (e) {
		    $("#video").attr('src',$videoSrc); 
		    $this.parents('.circle').removeClass('circle-clicked');
		    $this.parents('.circle').addClass('story-viewed');
		});
	});
});

//  rotate icon
$(document).ready(function() {
	$(".rotate").click(function(){
		$this = $(this);
		let url = $this.data("target");
		if (!($(url).hasClass("show"))) {
				$(this).removeClass("down");
		}else{
			$(this).addClass("down");
		}
	});
});	

$(document).ready(function(){
	$('.footer__back').click(function(){
		window.scrollTo(0, 0);
	});
})

$(document).ready(function(){
	$('#loadMore').click(function(){
		$this = $(this);
		$(this).addClass('d-none');
		$('.spinner-border').removeClass('d-none');
		setInterval(function () {
	    	$('.spinner-border').addClass('d-none');
	    	$this.removeClass('d-none');
	    },3000);
	})
});
 	

$(document).ready(function(){
	// ProfileList
	 $(".change-profile-list").click(function(){
		$(this).addClass('active-list-button').parents('div.profile_List').find('button').not($(this)).removeClass('active-list-button');
		if ($(this).hasClass('profile-button')) {
			$(".whatch-list").addClass('d-none');
			$(".profileDiv").removeClass('d-none');
		}else if($(this).hasClass('profile-follow-button')){
			$(".profileDiv").addClass('d-none');
			$(".whatch-list").removeClass('d-none');
		}else if($(this).hasClass('profile-settings-button')){
			$(".profileDiv").addClass('d-none');
			$(".whatch-list").addClass('d-none');	
		}else if($(this).hasClass('profile-sign-out-button')){
			$(".profileDiv").addClass('d-none');
			$(".whatch-list").addClass('d-none');
			alert("You Signed Out Succesfully");
		}
	});
});
 
$(document).ready(function(){
	$("#have-acc").click(function(){
		$(".register-part").addClass('d-none');
		$(".login-part").removeClass('d-none');
	});
	$("#crt-acc").click(function(){
		$(".register-part").removeClass('d-none');
		$(".login-part").addClass('d-none');
	});
});

$(document).ready(function() {
	$("#review-send").emojioneArea({
	  autoHideFilters: true,
	  pickerPosition: "bottom",
	  search: false,
	  tones: false
	});
}); 
let tasker = {
	construct: function(){
		this.variables();
		this.scanLinks();
	},
	variables: function(){
		this.container = document.querySelector('.profile-pagination');
		this.links = this.container.querySelectorAll('a'); 
	},
	scanLinks: function(){
		let active,current;
		for(let i = 0;i<this.links.length;i++){
			links = this.container.getElementsByTagName('a')[i];
			console.log(links);
			current = this.container.getElementsByClassName("active-page");
			links.onclick = this.activate.bind(this,links,current);
		}
	},
	activate: function(links,current){
		current[0].className = current[0].className.replace("active-page","");
		links.className+="active-page";
	}
}
$(document).ready(

	tasker.construct()

);

 