const lib = require('./../dist')
const counterClass = lib.Counter;

const expect = require('chai').expect;
const assert = require('chai').assert;


const resultValues = [];
let beforeEachPromise;
describe('Counter implementation test', function () {
    beforeEach(function (done) {
        // console.log('SETTING TIMEOUT');
        const expectValues = ['00:00:00', '00:00:01', '00:00:02', 'FINISH'];
        const count = new counterClass(3, true);
        let position = 0;
        beforeEachPromise = new Promise(function (resolve, reject) {
            let counter = count.start(10).subscribe(data => {
                // console.log(data, position, expectValues[position]);
                if (data !== expectValues[position]) {
                    const message = {
                        expect: expectValues[position],
                        result: data
                    }
                    reject(message);
                }
                resultValues.push({
                    result: data, expect: expectValues[position], suscribe: checkSuscriber(counter)
                });
                if (data === 'FINISH') {
                    counter.unsubscribe();
                    resultValues[position].suscribe = checkSuscriber(counter);
                    resolve(resultValues);
                    done();
                }
                position = position + 1;
            });
        });
    });
    it('Check if counter return correct data', async function () {
        return beforeEachPromise.then(data => {
            data.map(
                value => {
                    expect(value.result).to.equal(value.expect);
                }
            )
        })
            .catch((error) => {
                assert.fail("actual", "expected", `Obtain ${error.result} but expected value is ${error.expect}`);
            });
    });
});

function checkSuscriber(suscription) {
    if (!suscription.closed) {
        return true;
    }
    return false;
}

