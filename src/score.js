function outputGrade(num) {

    num = parseFloat(num).toFixed(1);

    try {
        if(num >= 0.9 && num <= 1.0) {
            return 'A';
        } else if(num >= 0.8 && num < 0.9) {
            return 'B';
        } else if(num >= 0.7 && num < 0.8) {
            return 'C';
        } else if(num >= 0.6 && num < 0.7) {
            return 'D';
        } else if(num > 0 && num < 0.6) {
            return 'F';
        } else {
            throw new Error("input must not be null / must be a number");
        }
    } catch(err) {
        return err.message;
    }
}

module.exports = {outputGrade};