let p = new Promise((resolve, reject) => {
	let a = 1 + 1
	if (a == 2) {
		resolve("SUCCESS")
	} else {
		reject("FAILED")
	}
})

p.then((message) => {
	console.log("this is in the then " + message)
})