import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateDrugDto {
      @IsString()
	@IsNotEmpty()
    readonly name: string;
    @IsString()
    readonly html: string;
    @IsString()
    readonly information: string;
    @IsString()
    readonly tradenames: string;
    @IsString()
    readonly indications: string;
    @IsString()
    readonly contraindications: string;
    @IsString()
    readonly dosage: string;
    @IsString()
    readonly route: string;
    @IsString()
    readonly warnings: string;
    @IsString()
    readonly sideeffects: string;
    @IsString()
    readonly precautions: string;
    @IsString()
    readonly storage: string;
}
