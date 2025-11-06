import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const filePath = path.join(process.cwd(), 'data', 'contact.json')

export async function GET() {
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Error reading contact file', error }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const { username, password, number, whatsapp, email, showNumber, showWhatsapp, showEmail } = body

    if (username !== 'admin' || password !== 'admin123') {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    const newData = { number, whatsapp, email, showNumber, showWhatsapp, showEmail }
    fs.writeFileSync(filePath, JSON.stringify(newData, null, 2))
    return NextResponse.json({ message: 'Contact information updated successfully' })
  } catch (error) {
    return NextResponse.json({ message: 'Error updating contact file', error }, { status: 500 })
  }
}