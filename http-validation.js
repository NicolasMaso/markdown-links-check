import fetch from 'node-fetch';

function handleError(error) {
    throw new Error(
        error.message
    );
}

async function checkStatus(linksArray) {
    try {
        const statusArray = await Promise.all(linksArray.map(async url => {
            const res = await fetch(url);
            return res.status;
        }));
        return statusArray;
    } catch (error) {
        handleError(error);
    }
}

function generateArrayURLS(linksArray) {
    return linksArray.map(linkObject => Object.values(linkObject).join());
}

async function validateURLS(linksArray) {
    const links = generateArrayURLS(linksArray);
    const linksStatus = await checkStatus(links);

    const results = linksArray.map((object, index) => ({
        ...object,
        status: linksStatus[index]
    }));

    return results;
}

export default validateURLS;