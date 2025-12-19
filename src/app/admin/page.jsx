'use client'
import { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import { auth, db } from '@/lib/firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { signInWithEmailAndPassword } from 'firebase/auth'

export default function AdminPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginData, setLoginData] = useState({ email: '', password: '' })
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
                    const docRef = doc(db, 'contactInfo', 'lV6n5h68qhRCJ48y6iaV')
                    const docSnap = await getDoc(docRef)
                    if (docSnap.exists()) {
                        setContact(docSnap.data())
                    } else {
                        console.log("No such document!")
                    }
                } catch (error) {
                    console.error("Error fetching data:", error)
                }
            }
        }
        fetchData()
    }, [isLoggedIn])


    const handleLogin = async (e) => {
        e.preventDefault()
        setMessage('');
        const { email, password } = loginData;
        if (!email || !password) {
            setMessage('Please enter both email and password');
            return;
        }

        try {
            await signInWithEmailAndPassword(auth, email, password)
            setIsLoggedIn(true)
        } catch (error) {
            setMessage('invalid email or password')
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')
        try {
            const docRef = doc(db, "contactInfo", "lV6n5h68qhRCJ48y6iaV")
            await updateDoc(docRef, contact)
            setMessage('Contact information updated successfully')
        } catch (error) {
            console.error("Error updating document:", error)
            setMessage('Error updating contact information')
        }
        setLoading(false)
    }

    if (!isLoggedIn) {
        return (
            <Container>
                <Row className="justify-content-center">
                    <Col xl={5} lg={5} md={5}>
                        <div className="admin-form">
                            <h2 className='text-center text-white'>ADMIN LOGIN</h2>
                            <Form onSubmit={handleLogin}>
                                <div className="mb-3">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        value={loginData.email}
                                        id='email'
                                        autoComplete="off"
                                        onChange={e => setLoginData({ ...loginData, email: e.target.value })}
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
                    </Col>
                </Row>
            </Container>
        )
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xl={5} lg={5} md={5}>
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
                </Col>
            </Row>
        </Container>
    )
}
