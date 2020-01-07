import 'reflect-metadata'
import { injectable, container, inject, autoInjectable } from 'tsyringe'

interface UserInterface {
  id: number
  name: string
}

@injectable()
class UserRepository {
  private data: UserInterface[] = [
    {
      id: 0,
      name: 'hota1024'
    }
  ]

  all() {
    return this.data
  }
}

@autoInjectable()
class UserController {
  constructor(private userRepository?: UserRepository) {}

  index() {
    return this.userRepository.all()
  }
}

container.resolve(UserRepository)
const userController = new UserController()

console.log(userController.index())
