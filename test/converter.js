const lib = require('./../dist');

const secondsToTime = lib.secondsInTimeFormat;
const constants = lib.Timer;

const expect = require('chai').expect;

function checkValueLength(valueLength, dataType) {
    if (valueLength === 2 || valueLength === 3 && dataType !== 'd') {
        return true;
    }
    if (dataType === 'd' && valueLength >= 2) {
        return true;
    }
    return false;
}

describe('Check if conversion from seconds to time format is correct', () => {
    it('Convert "x" sg in format clock and correct output', () => {
        const secondsValues = [ 345, 23, 34, 61, 60, 90, 900, 1200, 3600, 4200, 7230, 56, undefined, null, -10];
        const expectValues = [
            '00:05:45',
            '00:00:23',
            '00:00:34',
            '00:01:01',
            '00:01:00',
            '00:01:30',
            '00:15:00',
            '00:20:00',
            '01:00:00',
            '01:10:00',
            '02:00:30',
            '00:00:56',
            'FINISH',
            'FINISH',
            'FINISH'
        ]
        let position = 0;
        secondsValues.map(
            secondsValue => {
                expect(secondsToTime(secondsValue, 1, secondsValue + 10, true)).to.equal(expectValues[position]);
                position ++;
            }
        );

    });
    it('Convert "x" sg in normal format and correct output', () => {
        const secondsValues = [ 345, 23, 34, 61, 60, 90, 900, 1200, 3600, 4200, 7230, 56, undefined, null, -10];
        const expectValues = [
            '0d 0h 5m 45s',
            '0d 0h 0m 23s',
            '0d 0h 0m 34s',
            '0d 0h 1m 1s',
            '0d 0h 1m 0s',
            '0d 0h 1m 30s',
            '0d 0h 15m 0s',
            '0d 0h 20m 0s',
            '0d 1h 0m 0s',
            '0d 1h 10m 0s',
            '0d 2h 0m 30s',
            '0d 0h 0m 56s',
            'FINISH',
            'FINISH',
            'FINISH'
        ]
        let position = 0;
        secondsValues.map(
            secondsValue => {
                expect(secondsToTime(secondsValue, 1, secondsValue + 10, false)).to.equal(expectValues[position]);
                position ++;
            }
        );
    });
    it('Check output contain HH MM SS elements with separate with ":"', () => {
        const secondsValue = 345;
        const timeFormat = secondsToTime(secondsValue, 1, secondsValue + 10, true);
        const timeFormatElements = timeFormat.split(':');
        expect(timeFormatElements.length).to.equal(3);
        timeFormatElements.map(
            value => expect(value).to.length(2)
        );
    });
    it('Check output contain HH MM SS elements with separate with ":" and more than one day', () => {
        const secondsValue = constants.MS_PER_DAY / 1000 + 120;
        const timeFormat = secondsToTime(secondsValue, 1, secondsValue + 10, true);
        console.log(timeFormat);
        let timeFormatElements = [];
        let moreThanDay = false;
        timeFormatElements = timeFormat.split(':');
        // One day or more
        if ( timeFormat.indexOf('-') > 1) {
            moreThanDay = true;
            timeFormatElements = [];
            const elements = timeFormat.split(' - ');
            const timeElements = elements[1].split(':');
            timeFormatElements.push(elements[0]);
            timeElements.map(value => timeFormatElements.push(value));
        }
        if (moreThanDay) {
            expect(timeFormatElements.length).to.equal(4);
        } else {
            expect(timeFormatElements.length).to.equal(3);
        }
        timeFormatElements.map(
            value => expect(checkValueLength(value.length, value.substring(value.length -1))).to.true
        );
        
    });
    it('Check output contain d h m s elements with separate with " "', () => {
        const secondsValue = 100000000;
        const timeFormat = secondsToTime(secondsValue, 1, secondsValue + 10, false);
        const timeFormatElements = timeFormat.split(' ');
        expect(timeFormatElements.length).to.equal(4);
        timeFormatElements.map(
            value => expect(checkValueLength(value.length, value.substring(value.length -1))).to.true
        );
    });
});