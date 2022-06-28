export default async function readStoreByUsername(username) {
  try {
    const source = await readStore()
    const data = source.filter((item) => item.username === username)
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
