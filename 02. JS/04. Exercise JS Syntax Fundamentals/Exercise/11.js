function roadRadar(speed, area) {
    let speeding = false;
    let speedLimit = 0;
    let difference = 0;
    let statusSpeeding = "";

    if (area == "residential") {
        speedLimit = 20;
    }
    else if (area == "city") {
        speedLimit = 50;
    }
    else if (area == "interstate") {
        speedLimit = 90;
    }
    else if (area == "motorway") {
        speedLimit = 130;
    }

    if (area == "residential" && speed > 20) {
        speeding = true;
        speedLimit = 20;
    }
    else if (area == "city" && speed > 50) {
        speeding = true;
        speedLimit = 50;
    }
    else if (area == "interstate" && speed > 90) {
        speeding = true;
        speedLimit = 90;
    }
    else if (area == "motorway" && speed > 130) {
        speeding = true;
        speedLimit = 130;
    }

    if (speeding == false) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    }
    else {
        difference = speed - speedLimit;

        if (difference <= 20) {
            statusSpeeding = "speeding";
        }
        else if (difference <= 40) {
            statusSpeeding = "excessive speeding";
        }
        else if (difference > 40) {
            statusSpeeding = "reckless driving";
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${statusSpeeding}`)
    }

}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')