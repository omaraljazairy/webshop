import React from 'react';

const Error = ({ errors }) => (
    <pre>
        {
            errors.map(
                ( err, i) => <div key={i}>{err.message}</div>
                )
        }
    </pre>
)


export default Error;