import React, { useEffect, useState } from 'react'

const Notification = ({ message, type }) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        return () => {
            if (message) {
                setVisible(true);

                const timer = setTimeout(() => {
                    setVisible(false)
                }, 5000);

                return ()=> clearTimeout(timer);
            }
        };

    }, [message])


    return (
        <div style={{
            display: visible ? 'block' : "none",
            background: type === 'success' ? 'green' : 'red',
            position: 'fixed',
            top: '20px',
            right: '20px',
            padding: '10px',
            color: '#fff',
            borderRadius: '5px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
            zIndex: 9999,
        }}>
            { message}
        </div>
    )
}

export default Notification
