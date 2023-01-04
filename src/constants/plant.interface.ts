export interface ISpecies {
    fertilization?: {};
    light?: string;
    name?: string;
    soil?: {};
    water?: {};
  }
  
export interface ISize {
    name?: string;
  }
  
export interface IPlant {
    name?: string;
    species?: string;
    size?: string;
    image?: string;
}

export interface IPlantImage {
    nickname: string;
    img: number;
    path: string;
}