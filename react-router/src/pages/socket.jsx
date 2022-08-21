class Socket {
    constructor(option) {
        option.url = "ws://localhost:8080"
        this.ws = new WebSocket(option.url, "ws");
        this.ws.onopen = () => {

        }
        this.ws.onclose = () => {

        }
        this.ws.onerror = () => {

        }
        this.ws.onmessage = () => {

        }
        return this.ws
    }

}