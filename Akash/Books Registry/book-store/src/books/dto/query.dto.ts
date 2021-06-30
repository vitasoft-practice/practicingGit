import { Optional } from "@nestjs/common";

export class query {
    
    @Optional()
    sort : string

    @Optional()
    limit : number 
}