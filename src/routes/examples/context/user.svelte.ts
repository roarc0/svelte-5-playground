export interface User {
  id: number;
  username: string;
  email: string;
}

export function createUserState(initial: User) {
  let username = $state(initial.username);
  return {
    ...initial,
    get username() {
      return username;
    },
    set username(value) {
      username = value;
    },
  };
}
