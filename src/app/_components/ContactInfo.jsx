'use client'
import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import Link from 'next/link'

export default function ContactSection() {
    const [contact, setContact] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(db, 'contactInfo', 'lV6n5h68qhRCJ48y6iaV')
                const docSnap = await getDoc(docRef)

                if (docSnap.exists()) {
                    setContact(docSnap.data())
                } else {
                    console.log('No such document!')
                }
            } catch (error) {
                console.error('Error fetching contact info:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p>Loading contact info...</p>
    if (!contact) return <p>No contact info found.</p>

    return (
        <ul className="list-unstyled">
            {contact.showNumber && (
                <li>
                    <Link
                        className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2"
                        href={`tel:${contact.number}`}
                    >
                        <i className="ri-smartphone-line"></i> {contact.number}
                    </Link>
                </li>
            )}

            {contact.showWhatsapp && (
                <li>
                    <Link
                        className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2"
                        href={`tel:${contact.whatsapp}`}
                    >
                        <i className="ri-whatsapp-line"></i> {contact.whatsapp}
                    </Link>
                </li>
            )}

            {contact.showEmail && (
                <li>
                    <Link
                        className="d-flex align-items-center justify-content-lg-start justify-content-center gap-2"
                        href={`mailto:${contact.email}`}
                    >
                        <i className="ri-mail-line"></i> {contact.email}
                    </Link>
                </li>
            )}
        </ul>
    )
}
