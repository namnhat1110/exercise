function api() {
    return new Promise((resolve, reject) => {
        resolve(1);
    });
}
function api2() {
    return new Promise((resolve, reject) => {
        resolve(2);
    });
}
function api3() {
    return new Promise((resolve, reject) => {
        resolve(3);
    });
}

api().then(result => {
    console.log('result: ', result);

    api2().then(result2 => {
        console.log('result2: ', result2);

        api3().then(result3 => {
            console.log('result3: ', result3);
        });
    });
});

