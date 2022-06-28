export default async function writeStore(params) {
  try {
    await fs.writeFile(process.env.DB_PATH, JSON.stringify(params))
    return { status: true }
  } catch (error) {
    return { status: false, message: error.message }
  }
}
