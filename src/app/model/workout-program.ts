export class WorkoutProgram {
  id: number
  name: string
  difficultyLevel: number
  estimatedDuration: number
  type: string
  description: string
  exList: string[]
  selected: unknown
  
    constructor(id: number, estimatedDuration: number, name: string, difficultyLevel: number, type: string, description: string, exList: string[]) {
      this.id = id
      this.estimatedDuration = estimatedDuration
      this.name = name
      this.difficultyLevel = difficultyLevel
      this.type = type
      this.description = description
      this.exList = exList
    }
  }