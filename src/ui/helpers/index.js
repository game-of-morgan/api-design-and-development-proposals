export const readMarkdown = (filename) => {
    return new Promise((resolve) => {
        fetch(filename)
            .then(response => response.text())
            .then(text => {
                resolve(text);
            });
    });
};

export const flattenADDPs = (ADDPs) => {
    let newADDPs = [];

    ADDPs.forEach(([,pages]) => {
        newADDPs = [
            ...newADDPs,
            ...Object.entries(pages),
        ];
    });

    return newADDPs;
};
