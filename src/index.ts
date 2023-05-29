export default class Log {
  static success(msg: string) {
    console.log(`%c ${msg}`,`color:green`)
  }

  static error(msg: string) {
    console.log(`%c ${msg}`,`color:red`)
  }

  static warn(msg: string) {
    console.log(`%c ${msg}`,`color:yellow`)
  }

}
