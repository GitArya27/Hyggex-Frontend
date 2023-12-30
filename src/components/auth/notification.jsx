import React, { useEffect, useState } from 'react'

import Assessment from '../LandingPage/Psy-ED Assessments/Assesment';
import axios from 'axios';

const Notification = ({Readingassessmenttest}) => {
    const [quest, setQuest] = useState([]);

    const url = `https://hyggexbackend-d2b0.onrender.com/api/v1/test/tests/Reading%20Assessment%20Test`;

    const Fetch = async() => {
      try {
          const response = await axios.get(url);
          console.log(response.data);

        setQuest(response.data);
        console.log(setQuest(response.data, `questions and answers fetched`));

      } catch (error) {
        console.log(error.message, `data not fetched`);
      }
    }

    useEffect(() => {

        Fetch();
    }, []);

    /*const [visible, setVisible] = useState(false);

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

    }, [message])*/


    return (
        <div>


        {/*<div style={{
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
        </div>*/}
        </div>
    )
}

export default Notification
