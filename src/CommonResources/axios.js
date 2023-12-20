import axios from 'axios'
const instance = axios.create({
	// baseURL: "http://localhost:10000",
	baseURL: "https://filthy-tan-penguin.cyclic.app/",
});
export default instance