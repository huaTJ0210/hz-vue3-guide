export function fetchUserRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'git' },
        { id: '2', name: 'hash' }
      ])
    }, 2000)
  })
}
