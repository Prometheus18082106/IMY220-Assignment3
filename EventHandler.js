function EventHandler(events)
{
    this.events = events;

    this.getEventsBetweenDates = function(start, end){
       console.log("Hi there");
        console.log(start, end);

        function checkDate(event)
        {
            return (event.startDate >= start) && (event.endDate <= end);
        }
        return this.events.filter(checkDate);
    }

    this.getByMonth = function(month){
        console.log("Inside getByMonth function");
    }

    this.getUniqueDateAndSort = function(){

    }

    this.getSummary = function(){
        
    }
}


Array.prototype.getByMonth = EventHandler.prototype.getByMonth;
Array.prototype.getEventsBetweenDates = EventHandler.prototype.getEventsBetweenDates;
Array.prototype.getUniqueDateAndSort = EventHandler.prototype.getUniqueDateAndSort;
Array.prototype.getSummary = EventHandler.prototype.getSummary;