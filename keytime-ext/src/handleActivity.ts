// let minInInterval = 10;
// const hbInterval = 1000 * 60 * minInInterval;

// export function handleActivity(src: string) {
// 	const now = Date.now();

// 	const lastActivity = localStorage.getItem("lastActivity");

// 	if (!lastActivity) {
// 		localStorage.setItem("lastActivity", now.toString());
// 	}

// 	const lastActivityTime = parseInt(lastActivity);

// 	if (now - lastActivityTime > hbInterval) {
// 		console.log("activity timeout");
// 	}
// }
