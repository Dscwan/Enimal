const axios = require('axios').default;

const signUp = (email = "", password = "", username = "") => {
	const jsonData = {}
	if (email !== "" && password !== "" && username !== "") {
		jsonData.email = email;
		jsonData.password = password;
		jsonData.displayName = username;
	}
	return new Promise((resolve) => {
		axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw', jsonData)
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				resolve(error);
			});
	});
};

const signIn = (email, password) => {
	new Promise((resolve) => {
		axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw', {
			"email": email,
			"password": password,
			"returnSecureToken": true
		})
			.then((response) => {
				resolve(response.data);
			})
			.catch((error) => {
				resolve(error);
			});
	});
}

const refreshToken = (token) => {
	Promise((resolve) => {
		axios.post('https://securetoken.googleapis.com/v1/token?key=AIzaSyDCvp5MTJLUdtBYEKYWXJrlLzu1zuKM6Xw', {
			"grant_type": "refresh_token",
			"refresh_token": token
		})
		.then((response) => {
			resolve(response.data);
		})
		.catch((error) => {
			resolve(error);
		});
	});
}

exports.signUp = signUp;
exports.signIn = signIn;
exports.refreshToken = refreshToken;