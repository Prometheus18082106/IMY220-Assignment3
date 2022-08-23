function EventHandler(events)
{
    this.events = events;

    this.getEventsBetweenDates = function(start, end){

        //See if event's dates match requirements
        function checkDate(event)
        {
            return (event.dateStart >= start) && (event.dateEnd <= end);
        }

        //Return all that match requirements
        return this.events.filter(checkDate);
    }

    this.getByMonth = function(month){
        //See if event's month matches requirements
        function checkMonth(event)
        {
            return (event.dateStart.substring(5,7) == month);
        }

        return this.events.filter(checkMonth);
    }

    this.getUniqueDateAndSort = function(){
        function checkUniqueDates(event)
        {
            return (event.dateStart != event.dateEnd);
        }
        var tempEvents = this.events.sort(function(a, b){
            return (a.dateStart.substring(5,7)) - (b.dateStart.substring(5,7));
        });

        return tempEvents.filter(checkUniqueDates);
    }

    this.getSummary = function(){
        var events;
        var args = Array.prototype.slice.apply(arguments);
        // console.log(args);

        //See if arguments are passed
        if (args.length > 0)
        {
            //If the first argument is an array assign it as the array to use
            if (args[0].constructor === Array)
            {
                events = args[0];
            }
            else{
                //else, just assign the arguments array to the working array
                events = args;
            }
        }
        else
        {
            //other wise use member array
            events = this.events;
        }
        
        returnArray = [];
        // console.log(events); //Go on here...............
        
        events.map(function(x){
            // console.log(x);
            data = "On " + x.dateStart;
            if (x.dateStart != x.dateEnd)
            {
                data += " to " + x.dateEnd ;
            }
            data += ": " + x.name + " (" + x.description + ")";

            returnArray.push(data);
        });

        return returnArray;
    }
}

//CREATE INSTANCE OF EventHandler
var handler = new EventHandler(events);
// console.log(handler.events);

//TEST getEventsBetweenDates
var eventsBetweenDates = handler.getEventsBetweenDates("2022/02/01", "2022/02/16");
// console.log(eventsBetweenDates);


//TEST getByMonth
// console.log(handler.getByMonth("06"));


//TEST getUniqueDateAndSort
// console.log(handler.getUniqueDateAndSort());


//TEST getSummary
// console.log(handler.getSummary(handler.events[0]));
// console.log(handler.getSummary(handler.events[5]));
// console.log(handler.getSummary(handler.events[5], handler.events[0]));
// console.log(handler.getSummary());

var arrEvents = [handler.events[2], handler.events[3], handler.events[4]];
// console.log(handler.getSummary(arrEvents));




//ADD EventHandler METHODS TO ARRAY PROTOTYPE
// Array.prototype.getByMonth = function(month){
//     var newHandler = new EventHandler(this);
//     newHandler.getByMonth(month)
//     return newHandler;
// };
Array.prototype.getByMonth = function(month){
    return new EventHandler(this).getByMonth(month);
};
Array.prototype.getEventsBetweenDates = function(a, b){
    new EventHandler(this).getEventsBetweenDates(a, b)
};

Array.prototype.getUniqueDateAndSort = function(){
    new EventHandler(this).getUniqueDateAndSort();
};

Array.prototype.getSummary = function(){
    return new EventHandler(this).getSummary(this);
};

// Array.prototype.getByMonth = EventHandler.getByMonth;
// Array.prototype.getEventsBetweenDates = EventHandler.getEventsBetweenDates;
// Array.prototype.getUniqueDateAndSort = EventHandler.getUniqueDateAndSort;
// Array.prototype.getSummary = EventHandler.getSummary;

//TEST CHAINED METHODS
// console.log(handler.getByMonth("06").getSummary());


