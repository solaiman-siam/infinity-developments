
export interface INews {
    avatar: string,
    category: string,
    title: string,
    created_at: string,
    id: number,
    read_time: string,
    
}
export interface IProject {
    avatar: string,
    address: string,
    name: string,
    id: number,
    
}

export interface ITeam {
    name: string,
    avatar: string,
    id: number,
    designation: string,
    status: string,
    description: string
}