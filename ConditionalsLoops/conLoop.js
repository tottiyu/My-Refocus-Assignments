//TASK1
var OxygenSaturation = 98;

function SpO2Observation(OxygenSaturation) {
    if (OxygenSaturation >= 96) {
        console.log("Normal reading.");
    } else if (OxygenSaturation === 95) {
        console.log("Acceptable to continue home monitoring.");
    } else if (OxygenSaturation === 93 || OxygenSaturation === 94) {
        console.log("Seek advice from health professionals.");
    } else if (OxygenSaturation <= 92) {
        console.log("Seek urgent medical advice.");
    } else {
        console.log("The variable of the OxygenSaturation is not numerical.")
    }
}

SpO2Observation(OxygenSaturation);

//TASK2

var PulseRateBeatsPerMin = 130;

function PulseRateObservation(PulseRateBeatsPerMin) {
    if (PulseRateBeatsPerMin >= 40 && PulseRateBeatsPerMin <= 100) {
        console.log("Normal reading.");
    } else if (PulseRateBeatsPerMin >= 101 && PulseRateBeatsPerMin <= 109) {
        console.log("Acceptable to continue home monitoring.");
    } else if (PulseRateBeatsPerMin >= 110 && PulseRateBeatsPerMin <= 130) {
        console.log("Seek advice from health professionals.");
    } else if (PulseRateBeatsPerMin <= 131) {
        console.log("Seek urgent medical advice.");
    } else {
        console.log("The variable of the PulseRateBeatsPerMin is not numerical.")
    }
}

PulseRateObservation(PulseRateBeatsPerMin);