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

async function getResult() {
    try {
        const result = await api()
        console.log('result:', result)
        const result2 = await api2(result)
        console.log('result2:', result2)
        const result3 = await api3(result2)
        console.log('result3:', result3)
    } catch (err) {
        console.log(err)
    }
}
getResult()