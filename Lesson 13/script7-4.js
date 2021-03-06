class Vehicle
{
    constructor(speed, fuelVolume, fuelConsumption)
    {
        this.speed = speed;
        // console.log('speed ' + this.speed);
        this.fuelVolume = fuelVolume;
        // console.log('fuelVolume ' + this.fuelVolume);
        this.fuelConsumption  = fuelConsumption;
        // console.log('fuelConsumption ' + this.fuelConsumption);
        let distance = this;
        let hours = this;
    }

    getDistanceTraveled()
    {
        this.distance = (this.fuelVolume / this.fuelConsumption) * 100;
        return this.distance.toFixed(2) + ' km';
    }
    getTravelTime()
    {
        if (!this.distance)
        {
            //if the distance is not counted then error
            console.error('First calculate the distance!');
            return false;
        }
        else
        {
            this.hours = (this.distance / this.speed);
            console.log('Travel time without amendment: ' + ((this.hours.toFixed(0)) + ' hours.') + ' Travel distance: ' + this.distance + ' km');
            return this.hours;
        }
    }

}

class Car extends Vehicle
{
    elTime()
    {
        super.getTravelTime();
        if (!this.distance)
        {
            console.error('First calculate the distance!');
            return false;
        }
        else
        {
            this.hours = (this.distance / this.speed);
            console.log('Travel time without amendment: ' + ((this.hours.toFixed(0)) + ' hours.') + ' Car travel distance: ' + this.distance + ' km');
            return this.hours;
        }
    }
}

let car = new Car(120, 120, 8);
console.log('car DistanceTraveled ' + car.getDistanceTraveled());
car.getTravelTime();

class Plane extends Vehicle
    {
        windCorrection(headWind) //we are correcting for the wind
        {
            if (!this.hours)
            {
                //if the time is not counted then the error
                console.error('First calculate the Travel Time!');
                return false;
            }
            this.distance = (this.hours * (this.speed - headWind));
            console.log('About ' + ((this.hours.toFixed(0)) + ' hours') + ' will fly ' + ((this.distance.toFixed(0)) + ' km') + ' adjusted for wind' );

        }
    }


let plane = new Plane(935, 8533, 106);
plane.getDistanceTraveled();
plane.getTravelTime();
plane.windCorrection(10);

class Ships extends Vehicle
{
    getDistanceTraveled(windSpeed)
    {
        this._windSpeed = windSpeed;
        if (!windSpeed)
        {
            this.distance = (this.fuelVolume / this.fuelConsumption) * 100;
            console.log(this.distance.toFixed(2) + ' km');
            return this.distance.toFixed(2) + ' km';
        }
        else {
            alert('Raise the sails, we have a fair wind!');
            this.distance = (this.fuelVolume / this.fuelConsumption) * 100;
            this.hours = (this.distance/(windSpeed * 0.8));
            console.log('About ' + ((this.hours.toFixed(0)) + ' hours') + ' the ship will pass a distance of ' + ((this.distance.toFixed(0)) + ' km') + ' in the wind.' );
        }
    };

}

let ship = new Ships(35, 200, 10);
ship.getDistanceTraveled(15);
ship.getTravelTime();




