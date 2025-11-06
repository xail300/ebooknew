'use client'
import { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginData, setLoginData] = useState({ username: '', password: '' })
    const [contact, setContact] = useState({
        number: '',
        whatsapp: '',
        email: '',
        showNumber: true,     
        showWhatsapp: true,
        showEmail: true
    })
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            if (isLoggedIn) {
                try {
                    const res = await fetch('/api/contact')
                    const data = await res.json()
                    setContact(data)
                } catch (error) {
                    console.error("Error fetching data:", error)
                }
            }
        }

        fetchData()
    }, [isLoggedIn])


    const handleLogin = (e) => {
        e.preventDefault()
        if (loginData.username === 'admin' && loginData.password === 'admin123') {
            setIsLoggedIn(true)
            setMessage('')
        } else {
            setMessage('Invalid credentials')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...contact,
                username: loginData.username,
                password: loginData.password
            })
        })

        const result = await res.json()
        setLoading(false)
        setMessage(result.message)
    }

    if (!isLoggedIn) {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-5 col-md-5">
                        <div className="admin-form">
                            <h2 className='text-center text-white'>ADMIN LOGIN</h2>
                            <Form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <Form.Control
                                        type="text"
                                        placeholder="Username"
                                        value={loginData.username}
                                        id='name'
                                        autoComplete="off"
                                        onChange={e => setLoginData({ ...loginData, username: e.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        id='password'
                                        autoComplete="off"
                                        value={loginData.password}
                                        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                                    />
                                </div>
                                {message && <p style={{ color: 'red', textAlign: 'center' }}>{message}</p>}
                                <button type="submit" className="btn btn-theme w-100">Login</button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-5 col-md-5">
                    <div className="admin-form">
                        <Form onSubmit={handleSubmit}>
                            <h2 className='text-center text-white'>EDIT CONTACT INFORMATION</h2>
                            <div className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="Number"
                                    value={contact.number}
                                    onChange={e => setContact({ ...contact, number: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <Form.Check
                                        type="switch"
                                        checked={contact.showNumber !== undefined ? contact.showNumber : false}
                                        onChange={e => setContact({ ...contact, showNumber: e.target.checked })}
                                    />
                                    <span>Show Number</span>
                                </label>
                            </div>
                            <div className="mb-3">
                                <Form.Control
                                    type="text"
                                    placeholder="WhatsApp"
                                    value={contact.whatsapp}
                                    onChange={e => setContact({ ...contact, whatsapp: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <Form.Check
                                        type="switch"
                                        checked={contact.showWhatsapp !== undefined ? contact.showWhatsapp : false}
                                        onChange={e => setContact({ ...contact, showWhatsapp: e.target.checked })}
                                    />
                                    <span>Show WhatsApp</span>
                                </label>
                            </div>
                            <div className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    value={contact.email}
                                    onChange={e => setContact({ ...contact, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-3">
                                <label>
                                    <Form.Check
                                        type="switch"
                                        checked={contact.showEmail !== undefined ? contact.showEmail : false}
                                        onChange={e => setContact({ ...contact, showEmail: e.target.checked })}
                                    />
                                    <span>Show Email</span>
                                </label>
                            </div>
                            {message && <p style={{ color: 'green', textAlign: 'center' }}>{message}</p>}
                            <button type="submit" className="btn btn-theme w-100" disabled={loading}>
                                {loading ? 'Saving...' : 'Save Changes'}
                            </button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
