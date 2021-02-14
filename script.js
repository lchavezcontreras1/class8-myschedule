$(document).ready(
    function () {
        // event handlers
        $("button").click(displayMessage);
    });
function displayMessage(e){
    e.preventDefault();
    let eventVal = $("input[name=weekday]:checked").val();
    let event ='';
    if(eventVal==="Monday"){
        $("p#event-item1").text(`Math & Logic, 9AM–12PM`);
        $("p#event-item2").text(`JavaScript, 12:30PM–5PM`);
        $("p#event-item3").empty();
        $("p#event-item4").empty();
        $("p#event-item5").empty();
        $("p#event-item6").empty();
        $("p#event-item7").empty();

    }
    else if(eventVal==="Tuesday"){
        $("p#event-item1").text(`Remodeling Meeting, 8AM–9PM`);
        $("p#event-item2").text(`Staff Meeting, 9AM–10PM`);
        $("p#event-item3").text(`MSMP Group Meeting, 10AM–11AM`);
        $("p#event-item4").text(`Office Hours, 11AM–12:15PM`);
        $("p#event-item5").text(`Intro to Sociology, 12:30PM–3PM`);
        $("p#event-item6").text(`Office Hours, 3PM–4PM`);
        $("p#event-item7").text(`MSMP Mentee Meeting, 4PM–5PM`);

    }
    else if(eventVal==="Wednesday"){
        $("p#event-item1").text(`Math & Logic, 9AM–12PM`);
        $("p#event-item2").text(`JavaScript, 12:30PM–5PM`);
        $("p#event-item3").empty();
        $("p#event-item4").empty();
        $("p#event-item5").empty();
        $("p#event-item6").empty();
        $("p#event-item7").empty();

    }
    else if(eventVal==="Thursday"){
        $("p#event-item1").text(`Office Hours, 9AM–12:15PM`);
        $("p#event-item2").text(`Intro to Sociology, 12:30PM–3PM`);
        $("p#event-item3").text(`Office Hours, 3PM–5PM`);
        $("p#event-item4").empty();
        $("p#event-item5").empty();
        $("p#event-item6").empty();
        $("p#event-item7").empty();
    }
    else if(eventVal==="Friday"){
        $("p#event-item1").text(`DEI Meeting, 9AM–10:30PM`);
        $("p#event-item2").text(`Office Hours, 10:30PM–1PM`);
        $("p#event-item3").text(`MSMP Montly Meeting, 1PM–2PM`);
        $("p#event-item4").empty();
        $("p#event-item5").empty();
        $("p#event-item6").empty();
        $("p#event-item7").empty();
    }
    else if(eventVal==="Saturday"){
        $("p#event-item1").empty();
        $("p#event-item2").empty();
        $("p#event-item3").empty();
        $("p#event-item4").empty();
        $("p#event-item5").empty();
        $("p#event-item6").empty();
        $("p#event-item7").empty();
    }
    else{
        $("p#event-item1").empty();
        $("p#event-item2").empty();
        $("p#event-item3").empty();
        $("p#event-item4").empty();
        $("p#event-item5").empty();
        $("p#event-item6").empty();
        $("p#event-item7").empty();
    }
}
