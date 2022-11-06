import Cookies from 'js-cookie'

const iCookies = {
	setToken: (token: string) => {
		Cookies.set('token', token)
	},
	getToken: () => {
		return Cookies.get('token')
	},
	removeToken: () => {
		Cookies.remove('token')
	},
}

export default iCookies
