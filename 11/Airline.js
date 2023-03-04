class Aircraft {
    constructor(model, passengerCapacity, loadCapacity, rangeOfFlight) {
        this.model = model;
        this.passengerCapacity = passengerCapacity;
        this.loadCapacity = loadCapacity;
        this.rangeOfFlight = rangeOfFlight;
    }
}

class CargoAircraft extends Aircraft {
    constructor(model, loadCapacity, rangeOfFlight, isOversized) {
        super(model, 0, loadCapacity, rangeOfFlight);
        this.isOversized = isOversized;
    }
}

class VipAircraft extends Aircraft {
    constructor(model, passengerCapacity, rangeOfFlight, isLuxury) {
        super(model, passengerCapacity, 30, rangeOfFlight);
        this.isLuxury = isLuxury;
    }
}

class Airline {
    aircraftList = [];
    constructor(aircraftList) {
        aircraftList.forEach(a => {
            this.addAircraft(a);
        });
    }
    addAircraft(aircraft) {
        this.aircraftList.push(aircraft);
    }
    get getTotalPassengerCapacity() {
        return this.aircraftList.reduce((acc, aircraft) => acc += aircraft.passengerCapacity, 0);
    }
    get getTotalLoadCapacity() {
        return this.aircraftList.reduce((acc, aircraft) => acc += aircraft.loadCapacity, 0);
    }
    get sortedByRangeOfFlight() {
        return (order = 'asc') => {
            const sortedArray = [...this.aircraftList].sort((a, b) => {
                if (order === 'asc') {
                    return a.rangeOfFlight - b.rangeOfFlight;
                } else if (order === 'desc') {
                    return b.rangeOfFlight - a.rangeOfFlight;
                }
            });
            return sortedArray;
        };
    }
    searchAircraft(searchParams) {
        let searchResults = [];
        for (const aircraft of this.aircraftList) {
            let matchesAllParams = true;
            for (const property in searchParams) {
                if (aircraft[property] !== searchParams[property]) {
                    matchesAllParams = false;
                    break;
                }
            }
            if (matchesAllParams) {
                searchResults.push(aircraft);
            }
        }
        return searchResults;
    }
}

const airline = new Airline([
    new CargoAircraft('MD-11', 280, 7242, false),
    new CargoAircraft('An-225', 640, 15400, true),
    new VipAircraft("Falcon 8X", 10, 6450, true),
    new VipAircraft("Cessna 172", 300, 7000, false),
    new Aircraft('Boeing 747-400', 500, 300, 8000),
    new Aircraft('Embraer E-170', 78, 200, 3900)
]);
const searchParams = {
    passengerCapacity: 10,
    rangeOfFlight: 6450
};
const searchResults = airline.searchAircraft(searchParams);


console.log(`Общая вместимость пассажиров: ${airline.getTotalPassengerCapacity}`);
console.log(`Общая грузоподъемность: ${airline.getTotalLoadCapacity}`);
console.log(searchResults);
console.log(airline.sortedByRangeOfFlight("desc"))
console.log(`Результаты поиска: ${JSON.stringify(searchResults)}`);