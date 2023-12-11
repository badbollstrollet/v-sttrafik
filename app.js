let registration = null;

function register_service__worker() {
	if ("serviceWorker" in navigator) {
		window.navigator.serviceWorker
			.register("./sw.js", { scope: "./" })
			.then((res) => {
				registration = res;
				console.log("Service worker successfully registerd");
			})
			.catch((err) => {
				console.log("Service worker not registerd");
			});
	}
}
register_service__worker();