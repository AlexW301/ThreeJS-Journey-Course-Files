import Experience from "../Experience";

export default class Fox
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        // Setup
        this.resource = this.resources.items.foxModel

        console.log(this.resource)
    }
}