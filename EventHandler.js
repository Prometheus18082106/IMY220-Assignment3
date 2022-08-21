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

    }

    this.getSummary = function(){
        
    }
}

//CREATE INSTANCE OF EventHandler
var handler = new EventHandler(events);
console.log(handler.events);

//TEST getEventsBetweenDates
var eventsBetweenDates = handler.getEventsBetweenDates("2022/02/01", "2022/02/16");
console.log(eventsBetweenDates);


//TEST getByMonth
console.log(handler.getByMonth("06"));


//ADD EventHandler METHODS TO ARRAY PROTOTYPE
Array.prototype.getByMonth = EventHandler.prototype.getByMonth;
Array.prototype.getEventsBetweenDates = EventHandler.prototype.getEventsBetweenDates;
Array.prototype.getUniqueDateAndSort = EventHandler.prototype.getUniqueDateAndSort;
Array.prototype.getSummary = EventHandler.prototype.getSummary;

