// // A $( document ).ready() block.
// $(document).ready(function() {
//     fetch('/assets/api/employees.json')
//         .then((response) => {
//             return response.json();
//         })
//         .then((myJson) => {
//             console.log(myJson.employees);
//         });
// });
// // End Fetch

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready


    /*
    ################
    Add navbar background color when scrolled
    */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
            $(".navbar").addClass("navbarScroll");
        } else {
            $(".navbar").removeClass("navbarScroll");
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
            $(".navbar-brand").addClass("text-dark");
        } else {
            $(".navbar-brand").removeClass("text-dark");
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
            $(".nav-link").addClass("text-dark");
        } else {
            $(".nav-link").removeClass("text-dark");
        }
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 56) {
            $(".btn-nav").addClass("btn-nav-dark");
        } else {
            $(".btn-nav").removeClass("btn-nav-dark");
        }
    });
    $(window).scroll(function() {
        var image = document.getElementById("navbarImg");
        if (document.documentElement.scrollTop > 56)
            image.src =
            "/assets/images/cretivox-black.png";
        else
            image.src =
            "/assets/images/cretivox-white.png";
    })

    // If Mobile, add background color when toggler is clicked
    $(".navbar-toggler").click(function() {
        if (!$(".navbar-collapse").hasClass("show")) {
            $(".navbar").addClass("bg-dark");
        } else {
            if ($(window).scrollTop() < 56) {
                $(".navbar").removeClass("bg-dark");
            } else {}
        }
    });
    // ############

    // document ready
});

// $(document).ready(function() {
//     var loading = $(".loading");
//     loading.delay(loading.attr("delay-hide")).slideUp();
// });

function business() {
    console.log("asdas")
}

// let input = document.getElementById("tel");
// let button = document.getElementById("btn-submit");
// button.disabled = true;
// input.addEventListener("change", stateHandle);

// function stateHandle() {
//     if (document.getElementById("tel").value === "") {
//         button.disabled = true;
//     } else {
//         button.disabled = false;
//     }
// }

// function submitForm() {
//     var empt = document.forms["form1"]["name1", "phone1", "email1"].value;
//     if (empt == "") {
//         alert("Please input all forms!");
//         return false;
//     } else {
//         alert('Code has accepted : you can try another');
//         return;
//     }
// }

// For ready
// $(document).ready(function() {
//     $(".preloader").fadeOut();
// })

setTimeout(function() {
    $('.preloader').slideUp();
    $('.loading-img').delay(150).slideUp('fast');
}, 4000);



apiUrl = "http://cbn360-api.herokuapp.com/api/employees";