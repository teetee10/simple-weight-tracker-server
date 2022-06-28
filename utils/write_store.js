export default async function writeStore(params) {
  try {
    await fs.writeFile(process.env.DB_PATH, JSON.stringify(params))
    return true
  } catch (error) {
    throw new Error(error.message)
  }
}
