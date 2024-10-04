import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const Solution = ({chall}) => {
    const [markdown, setMarkdown] = useState('');
    useEffect(() => {
        fetch(`/googlectf/solution_${chall}.md`) 
            .then(response => response.text())
            .then(text => {
                setMarkdown(text);
            });
    }, []);

    return (
        <div className="markdown-container">
            <ReactMarkdown children={markdown} />
            
        </div>
    );
};

export default Solution;
