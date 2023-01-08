export interface ISpecies {
    fertilization?: {};
    light?: string;
    name?: string;
    soil?: {};
    water?: {};
    resistance: string;
    poison: string;
  }
  
export interface ISize {
    name?: string;
  }
  
export interface IPlant {
    name?: string;
    species?: ISpecies;
    size?: string;
    image?: number;
}

export interface IPlantImage {
    nickname: string;
    img: number;
    path: string;
}
