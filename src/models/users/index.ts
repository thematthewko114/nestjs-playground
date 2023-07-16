type UserDTO = {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}

type UserCreateResponse = {
    id: string
}

type ErrorResponse = {
    message: string;
}

export { UserDTO, UserCreateResponse, ErrorResponse }