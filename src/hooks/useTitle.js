import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Edu Online`;
    }, [title])
};

export default useTitle;