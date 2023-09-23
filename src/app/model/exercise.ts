
export class Exercise {
  id: number
  machineId: number
  name: string
  difficultyLevel: number
  machine: string
  description: string
  selected: unknown

  constructor(id: number, machineId: number, name: string, difficultyLevel: number, machine: string, description: string) {
    this.id = id
    this.machineId = machineId
    this.name = name
    this.difficultyLevel = difficultyLevel
    this.machine = machine
    this.description = description
  }
}