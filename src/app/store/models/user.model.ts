
interface Credentials {
  login: string,
  password: string
}

interface UserDto {
  id: string,
  login: string,
  name: string,
  email: string,
}

interface LoginResponse {
  token: string,
  user: UserDto
}

interface LoginError {
  message: String
}

export  {
  Credentials, UserDto, LoginResponse, LoginError
}
