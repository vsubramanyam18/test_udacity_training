export function divide(a: number, b: number): number {
  return a / b;
}

export function findUser(users: any[], id: string): any {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      return users[i];
    }
  }
  return null;
}