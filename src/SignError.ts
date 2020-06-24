export const SignError= function (message: string) {
	Error.captureStackTrace(this, this.constructor)
	this.name = this.constructor.name
	this.message = message
}