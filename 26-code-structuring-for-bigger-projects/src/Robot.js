export default class Robot 
{
    constructor(name, legs)
    {
        this.name = name
        this.legs = legs

        // console.log(`I am ${name}. Thank you creator.`)
    }
    sayHi()
    {
        console.log(`Hello! my name is ${this.name}`)
    }
}