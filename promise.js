// let p = new Promise((resolve, reject) => {
// 	let a = 1 + 2
// 	if (a == 2) {
// 		resolve("SUCCESS")
// 	} else {
// 		reject("FAILED")
// 	}
// })

// p.then((message) => {
// 	console.log("this is in the then " + message)
// }).catch((message) => {
// 	console.log("this is in the catch " + message)
// })


const userLeft = false
const userWatching = true

function newPromise() {
	return new Promise((resolve, reject) => {
		if (userLeft) {
			reject({
				name: 'user left',
				message: '😍'
			})
		} else {
			if (userWatching) {
				reject({
					name: 'user watching',
					message: 'a movie'
				})
			} else {
				resolve('weldone')
			}
		} 
	})
}

newPromise().then((message) => {
	console.log('success ' + message)
}).catch((error) => {
	console.log(error.name + " " + Error.message)
})