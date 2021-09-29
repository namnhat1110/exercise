const api = (callback) => {
    callback(1);
}

const api2 = (callback) => {
    callback(2);
}

const api3 = (callback) => {
    callback(3);
}

api(function (result) {
    console.log('result: ', result)
    api2(function (result2) {
        console.log('result2: ', result2)
        api3(function (result3) {
            console.log('result3: ', result3)
        });
    });
});