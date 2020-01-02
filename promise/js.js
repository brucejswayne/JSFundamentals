// *** Promise: then(), catch(), finally() ***
function f(counter) {
    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('receiving data...')
            resolve('success!!!')
        }, 2000)
    })
    p.then(resault => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(resault)
                    const data = {
                        name: 'Vad',
                        age: 100
                    }
                    if (counter % 2 == 0) {
                        resolve(data)
                    }
                    reject(new Error('Rejected'))
                }, 2000)
            })
        })
        .then(userData => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(userData)
                    userData.city = 'SPb'
                }, 2000)
                resolve(userData);
            })
        })
        .then(modifiedUserData => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log(modifiedUserData)
                    resolve()
                }, 3000)
            })
        })
        .finally(() => console.log('Finished'))
        .catch(error => console.error(error))
}

function f2() {
    let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('receiving data...')
                reject(new Error('error!!!!'))
            }, 2000)
        })
        .then(result => {
            return new Promise((resolve, reject) => {
                console.log(result)
                resolve()
            })
        })
    p2.catch(error => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.error(error)
                resolve('error detected')
            }, 2000)
        })
    })
}

f(0);
// f2();